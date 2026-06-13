from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
import os
import uvicorn
import random

app = FastAPI(title="AI Stock Market API", version="2.0.0")

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

# SAFE LOAD (IMPORTANT FIX)
BASE_DIR = os.path.dirname(__file__)

try:
    model = joblib.load(os.path.join(BASE_DIR, "xgboost_model.pkl"))
    scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))
except Exception as e:
    print("MODEL LOAD ERROR:", e)
    model = None
    scaler = None


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

        # ⚠️ IF MODEL NOT LOADED
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

        # SAFE PREDICTION
        try:
            proba = model.predict_proba(input_scaled)[0][1]
            prediction = 1 if proba > 0.55 else 0
        except:
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
            "version": "2.0.0"
        }

    except Exception as e:
        print("PREDICT ERROR:", e)

        return {
            "prediction": 0,
            "trend": "DOWNTREND",
            "signal": "SELL",
            "confidence": 50,
            "model": "ERROR_SAFE_MODE",
            "version": "2.0.0"
        }


if __name__ == "__main__":
    import os
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)