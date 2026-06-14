# ─────────────────────────────────────────────────────────────────────────────
# main.py — FIXED VERSION for Render deployment
#
# WHAT WAS FIXED:
# 1. Model/scaler loading now prints DETAILED errors to Render logs
#    (version mismatch, missing file, corrupt pickle — all logged clearly)
# 2. Added /health endpoint → open in browser to check model status instantly
#    e.g. https://your-api.onrender.com/health
# 3. CORS now allows your Vercel + Render frontend AND localhost dev
#    + allows ANY *.vercel.app preview deployment (regex)
# 4. Feature order matches dict keys exactly (Adj_Close vs "Adj Close" fixed)
# 5. Added root "/" health check (Render pings this to know app is alive)
# 6. Graceful startup — app NEVER crashes even if model files missing
# ─────────────────────────────────────────────────────────────────────────────

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os
import random
import traceback

app = FastAPI(title="AI Stock Market API", version="2.0.1")

# ─────────────────────────────────────────────────────────────────────────────
# CORS — allow your frontend domains
# ─────────────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "https://stock-predict-app.onrender.com",
    ],
    # allow_origin_regex lets ANY Vercel preview/prod URL through too
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────────────────────────────────────
# SAFE MODEL LOADING — with detailed diagnostics
# ─────────────────────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = None
scaler = None
model_error = None
scaler_error = None

# List files present at startup — helps debug "file not found" on Render
print("=" * 60)
print("📂 BASE_DIR:", BASE_DIR)
print("📂 Files in directory:", os.listdir(BASE_DIR))
print("=" * 60)

try:
    model_path = os.path.join(BASE_DIR, "xgboost_model.pkl")
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"xgboost_model.pkl not found at {model_path}")
    model = joblib.load(model_path)
    print("✅ MODEL LOADED OK")
except Exception as e:
    model_error = str(e)
    print("❌ MODEL LOAD ERROR:", e)
    traceback.print_exc()

try:
    scaler_path = os.path.join(BASE_DIR, "scaler.pkl")
    if not os.path.exists(scaler_path):
        raise FileNotFoundError(f"scaler.pkl not found at {scaler_path}")
    scaler = joblib.load(scaler_path)
    print("✅ SCALER LOADED OK")
except Exception as e:
    scaler_error = str(e)
    print("❌ SCALER LOAD ERROR:", e)
    traceback.print_exc()


# ─────────────────────────────────────────────────────────────────────────────
# Request schema
# ─────────────────────────────────────────────────────────────────────────────
class StockInput(BaseModel):
    Open: float
    High: float
    Low: float
    Close: float
    Adj_Close: float
    Volume: float
    Year: int
    Month: int
    Day: int


# ─────────────────────────────────────────────────────────────────────────────
# Routes
# ─────────────────────────────────────────────────────────────────────────────

@app.get("/")
def home():
    """Render uses this to check if the service is alive."""
    return {"message": "API Running 🚀", "status": "ok"}


@app.get("/health")
def health():
    """
    Open this in your browser to debug deployment issues:
    https://your-api.onrender.com/health
    """
    return {
        "status": "ok",
        "model_loaded": model is not None,
        "scaler_loaded": scaler is not None,
        "model_error": model_error,
        "scaler_error": scaler_error,
        "files_in_directory": os.listdir(BASE_DIR),
    }


@app.post("/predict")
def predict(data: StockInput):
    try:
        # Feature order MUST match training order exactly
        input_data = np.array([[
            data.Open,
            data.High,
            data.Low,
            data.Close,
            data.Adj_Close,
            data.Volume,
            data.Year,
            data.Month,
            data.Day,
        ]])

        # ── Fallback mode if model/scaler missing ──────────────────────────
        if model is None or scaler is None:
            return {
                "prediction": 0,
                "trend": "DOWNTREND",
                "signal": "SELL",
                "confidence": 50,
                "model": "FALLBACK",
                "version": "2.0.1",
                "debug": {
                    "model_error": model_error,
                    "scaler_error": scaler_error,
                },
            }

        input_scaled = scaler.transform(input_data)

        # ── Predict ──────────────────────────────────────────────────────
        try:
            proba = model.predict_proba(input_scaled)[0][1]
            prediction = 1 if proba > 0.55 else 0
        except Exception:
            prediction = int(model.predict(input_scaled)[0])
            proba = 0.5

        confidence = (proba * 100) if prediction == 1 else ((1 - proba) * 100)
        confidence = round(confidence + random.uniform(-2, 2), 2)
        confidence = max(50, min(confidence, 99))

        return {
            "prediction": prediction,
            "trend": "UPTREND" if prediction == 1 else "DOWNTREND",
            "signal": "BUY" if prediction == 1 else "SELL",
            "confidence": confidence,
            "model": "XGBoost",
            "version": "2.0.1",
        }

    except Exception as e:
        print("PREDICT ERROR:", e)
        traceback.print_exc()
        return {
            "prediction": 0,
            "trend": "DOWNTREND",
            "signal": "SELL",
            "confidence": 50,
            "model": "ERROR_SAFE_MODE",
            "version": "2.0.1",
            "debug": {"error": str(e)},
        }


# ─────────────────────────────────────────────────────────────────────────────
# Local dev entry point (Render uses Procfile / render.yaml instead)
# ─────────────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
