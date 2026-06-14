import { useState } from "react";
import axios from "axios";

export default function Prediction() {
  const [form, setForm] = useState({
    Open: "",
    High: "",
    Low: "",
    Close: "",
    Adj_Close: "",
    Volume: "",
    Year: "",
    Month: "",
    Day: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ PREDICT FUNCTION
  const handlePredict = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post(
        "https://stock-prediction-api-zkls.onrender.com/predict",
        {
          Open: Number(form.Open),
          High: Number(form.High),
          Low: Number(form.Low),
          Close: Number(form.Close),
          Adj_Close: Number(form.Adj_Close),
          Volume: Number(form.Volume),
          Year: Number(form.Year),
          Month: Number(form.Month),
          Day: Number(form.Day),
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert("Prediction failed. Backend might be waking up (free tier) — try again in 30s.");
    }

    setLoading(false);
  };
  return (
    <div className="p-6 text-white bg-gray-950 min-h-screen">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Live AI Stock Prediction
      </h1>

      {/* INPUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {Object.keys(form).map((key) => (
          <div
            key={key}
            className="bg-gray-900 p-4 rounded-lg border border-gray-700"
          >
            <p className="text-gray-400 text-sm mb-2">{key}</p>

            <input
              type="number"
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 rounded text-white outline-none"
            />
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <button
        onClick={handlePredict}
        className="mt-6 px-6 py-3 bg-cyan-500 rounded-lg font-bold hover:bg-cyan-600 transition"
      >
        {loading ? "Predicting..." : "Live Predict"}
      </button>

      {/* RESULT */}
      {result && (
        <div className="mt-6 p-5 bg-gray-900 border border-gray-700 rounded-lg">

          <h2 className="text-green-400 text-2xl font-bold mb-4">
            {result.trend}
          </h2>

          <p>Prediction: {result.prediction}</p>
          <p>Signal: {result.signal}</p>
          <p>Confidence: {result.confidence}%</p>
          <p>Model: {result.model}</p>
          <p>Version: {result.version}</p>

        </div>
      )}

    </div>
  );
}