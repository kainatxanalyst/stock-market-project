import { useState } from "react";

export default function Dashboard() {
  const [status] = useState("Active");
  const [accuracy] = useState(60);

  const stats = [
    { label: "Model Accuracy", value: "60%", color: "text-cyan-400" },
    { label: "Model Type", value: "XGBoost" },
    { label: "Prediction Type", value: "Up / Down" },
    { label: "Dataset Size", value: "112K+" },
  ];

  return (
    <div className="p-8 text-white space-y-8 bg-black min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-cyan-400">
          AI Stock Trading Dashboard
        </h1>

        <p className="text-gray-400 mt-3 max-w-3xl">
          Real-time stock trend prediction powered by XGBoost Machine Learning.
          Analyze market behavior and forecast upward or downward movements using historical data.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold">
            Go to Prediction
          </button>

          <button className="px-6 py-3 bg-gray-800 border border-gray-700 hover:border-cyan-400 rounded-lg">
            Model Details
          </button>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-gray-400 text-sm">{item.label}</h3>
            <p className={`text-2xl font-bold mt-2 ${item.color || "text-white"}`}>
              {item.value}
            </p>
          </div>
        ))}

      </div>

      {/* MODEL PERFORMANCE SECTION */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* ACCURACY GAUGE CARD */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            Model Performance
          </h2>

          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
              <div
                className="absolute inset-0 rounded-full border-8 border-cyan-500"
                style={{
                  clipPath: `inset(0 0 ${100 - accuracy}% 0)`,
                }}
              ></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold text-cyan-400">
                  {accuracy}%
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-center mt-4">
            Validation Accuracy
          </p>
        </div>

        {/* MODEL STATUS */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            AI Model Status
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>🟢 XGBoost Model: <span className="text-green-400">{status}</span></p>
            <p>⚙️ Feature Engineering: Completed</p>
            <p>📊 Validation Accuracy: 60%</p>
            <p>📈 Uptrend Recall: 66%</p>
            <p>📉 Downtrend Precision: 63%</p>
            <p>🚀 Deployment: Ready</p>
          </div>
        </div>

      </div>

      {/* MARKET INSIGHTS */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">
          Market Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <p>📈 XGBoost detects trend reversals effectively in volatile markets.</p>
          <p>📊 Close price is the strongest predictive feature.</p>
          <p>⚡ Market volatility impacts prediction confidence significantly.</p>
          <p>💹 Historical patterns dominate model decision making.</p>
        </div>
      </div>

      {/* QUICK ACTION PANEL */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-cyan-400">
            Start Real-Time Prediction
          </h2>
          <p className="text-gray-400">
            Run AI model on live stock inputs instantly.
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold">
          Launch Predictor
        </button>

      </div>

    </div>
  );
}