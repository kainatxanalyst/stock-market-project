import joblib

model = joblib.load("xgboost_model.pkl")
print("MODEL OK")

scaler = joblib.load("scaler.pkl")
print("SCALER OK")