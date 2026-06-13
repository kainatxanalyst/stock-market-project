from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib

app = FastAPI(title="AI Stock Market Prediction API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("xgboost_model.pkl")
scaler = joblib.load("scaler.pkl")

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

    input_scaled = scaler.transform(input_data)

    prediction = int(model.predict(input_scaled)[0])

    confidence = 0.0
    if hasattr(model, "predict_proba"):
        confidence = float(max(model.predict_proba(input_scaled)[0])) * 100

    return {
        "prediction": prediction,
        "trend": "UPTREND" if prediction == 1 else "DOWNTREND",
        "signal": "BUY" if prediction == 1 else "SELL",
        "confidence": round(confidence, 2),
        "model": "XGBoost",
        "version": "2.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=10000)