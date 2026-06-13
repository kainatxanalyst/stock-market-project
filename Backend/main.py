from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os
import uvicorn

app = FastAPI(title="AI Stock Market Prediction API", version="2.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://stock-predict-app.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SAFE MODEL LOADING
BASE_DIR = os.path.dirname(__file__)

model_path = os.path.join(BASE_DIR, "xgboost_model.pkl")
scaler_path = os.path.join(BASE_DIR, "scaler.pkl")

model = None
scaler = None

try:
    model = joblib.load(model_path)
    scaler = joblib.load(scaler_path)
    print("✅ Model & Scaler loaded successfully")
except Exception as e:
    print("❌ Model load error:", e)


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


@app.get("/")
def home():
    return {"message": "API Running 🚀"}


@app.post("/predict")
def predict(data: StockInput):

    try:
        input_data = np.array([[
            data.Open,
            data.High,
            data.Low,
            data.Close,
            data.Adj_Close,
            data.Volume,
            data.Year,
            data.Month,
            data.Day
        ]])

        # if model missing → fallback
        if model is None or scaler is None:
            return {
                "prediction": 0,
                "trend": "DOWNTREND",
                "signal": "SELL",
                "confidence": 50,
                "model": "FALLBACK",
                "version": "2.0.0"
            }

        input_scaled = scaler.transform(input_data)

        prediction = int(model.predict(input_scaled)[0])

        confidence = 50
        try:
            if hasattr(model, "predict_proba"):
                confidence = float(max(model.predict_proba(input_scaled)[0])) * 100
        except:
            confidence = 50

        return {
            "prediction": prediction,
            "trend": "UPTREND" if prediction == 1 else "DOWNTREND",
            "signal": "BUY" if prediction == 1 else "SELL",
            "confidence": round(confidence, 2),
            "model": "XGBoost",
            "version": "2.0.0"
        }

    except Exception as e:
        print("❌ Predict error:", e)

        return {
            "prediction": 0,
            "trend": "DOWNTREND",
            "signal": "SELL",
            "confidence": 50,
            "model": "ERROR_FALLBACK",
            "version": "2.0.0"
        }


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)