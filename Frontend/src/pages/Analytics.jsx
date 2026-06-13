import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

export default function Analytics() {
  const accuracyData = [
    { model: "Accuracy", value: 60 },
    { model: "Precision", value: 60 },
    { model: "Recall", value: 60 },
    { model: "F1 Score", value: 60 },
  ];

  const featureImportance = [
    { feature: "Close", value: 0.50 },
    { feature: "Adj Close", value: 0.18 },
    { feature: "Low", value: 0.10 },
    { feature: "Year", value: 0.09 },
    { feature: "Volume", value: 0.07 },
    { feature: "Month", value: 0.03 },
    { feature: "Day", value: 0.02 },
    { feature: "High", value: 0.008 },
    { feature: "Open", value: 0.002 },
  ];

  return (
    <div className="space-y-6 p-6 text-white">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">
          XGBoost Analytics Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Performance evaluation and feature analysis of the deployed
          XGBoost stock trend prediction model.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">Accuracy</h2>
          <p className="text-3xl font-bold text-green-400">60%</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">Precision</h2>
          <p className="text-3xl font-bold text-blue-400">60%</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">Recall</h2>
          <p className="text-3xl font-bold text-yellow-400">60%</p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
          <h2 className="text-gray-400">F1 Score</h2>
          <p className="text-3xl font-bold text-purple-400">60%</p>
        </div>

      </div>

      {/* PERFORMANCE CHART */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

        <h2 className="mb-4 font-semibold">
          Overall Model Performance
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={accuracyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* FEATURE IMPORTANCE */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

        <h2 className="mb-4 font-semibold">
          Feature Importance Analysis
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={featureImportance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="feature" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* CLASS PERFORMANCE */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

        <h2 className="font-semibold mb-4">
          Class-wise Performance
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-green-400 font-bold">
              Class 0 (Downtrend)
            </h3>

            <div className="mt-3 space-y-2">
              <p>Precision: 63%</p>
              <p>Recall: 54%</p>
              <p>F1 Score: 58%</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-blue-400 font-bold">
              Class 1 (Uptrend)
            </h3>

            <div className="mt-3 space-y-2">
              <p>Precision: 58%</p>
              <p>Recall: 66%</p>
              <p>F1 Score: 62%</p>
            </div>
          </div>

        </div>

      </div>

      {/* CONFUSION MATRIX */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

        <h2 className="font-semibold mb-4">
          Confusion Matrix
        </h2>

        <div className="overflow-auto">

          <table className="w-full border border-gray-700 text-center">

            <thead>
              <tr className="bg-gray-800">
                <th className="p-3"></th>
                <th className="p-3">Predicted 0</th>
                <th className="p-3">Predicted 1</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="p-3 font-semibold">Actual 0</td>
                <td className="p-3">6209</td>
                <td className="p-3">5358</td>
              </tr>

              <tr>
                <td className="p-3 font-semibold">Actual 1</td>
                <td className="p-3">3661</td>
                <td className="p-3">7263</td>
              </tr>

            </tbody>

          </table>

        </div>

        <p className="mt-4 text-gray-400 text-sm">
          The XGBoost model correctly identified 6,209 downtrend cases
          and 7,263 uptrend cases from the test dataset.
        </p>

      </div>

      {/* KEY INSIGHTS */}
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

        <h2 className="font-semibold mb-4">
          Key Insights
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>📈 XGBoost achieved 60% prediction accuracy.</li>
          <li>📊 The model performs better at detecting upward market trends.</li>
          <li>🚀 Uptrend Recall reached 66%.</li>
          <li>💡 Close price is the most influential feature.</li>
          <li>⚠ Stock market forecasting remains challenging due to volatility and external events.</li>
        </ul>

      </div>

    </div>
  );
}