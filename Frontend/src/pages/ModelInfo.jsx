export default function ModelInfo() {
  const metrics = [
    { label: "Accuracy", value: "60%", color: "text-cyan-400" },
    { label: "Precision", value: "60%", color: "text-green-400" },
    { label: "Recall", value: "60%", color: "text-yellow-400" },
    { label: "F1 Score", value: "60%", color: "text-pink-400" },
  ];

  const features = [
    "Open Price",
    "High Price",
    "Low Price",
    "Close Price",
    "Adjusted Close Price",
    "Volume",
    "Year",
    "Month",
    "Day",
  ];

  return (
    <div className="p-8 text-white space-y-8 bg-black min-h-screen">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          XGBoost Model Intelligence
        </h1>
        <p className="text-gray-400 mt-3 max-w-3xl">
          Advanced machine learning model used for stock market trend prediction.
          XGBoost is an ensemble learning algorithm based on gradient boosting,
          widely used in financial forecasting due to its high performance and stability.
        </p>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500 transition"
          >
            <h3 className="text-gray-400">{m.label}</h3>
            <p className={`text-3xl font-bold mt-2 ${m.color}`}>
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* MODEL DESCRIPTION */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-cyan-400 mb-3">
          How the Model Works
        </h2>

        <p className="text-gray-300 leading-relaxed">
          XGBoost builds multiple decision trees sequentially, where each new tree
          corrects the errors of the previous ones. It optimizes performance using
          gradient descent and regularization, making it highly efficient for structured data.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-cyan-400 mb-4">
          Input Features
        </h2>

        <p className="text-gray-400 mb-4">
          The model uses the following financial indicators:
        </p>

        <div className="flex flex-wrap gap-3">
          {features.map((f, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm hover:border-cyan-500 transition"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* PERFORMANCE INSIGHT */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">
            Model Strengths
          </h2>

          <ul className="text-gray-300 space-y-2">
            <li>✔ Handles large datasets efficiently</li>
            <li>✔ Works well with structured financial data</li>
            <li>✔ Reduces overfitting using regularization</li>
            <li>✔ High speed compared to traditional models</li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-cyan-400 mb-3">
            Limitations
          </h2>

          <ul className="text-gray-300 space-y-2">
            <li>⚠ Sensitive to noisy financial data</li>
            <li>⚠ Requires tuning for optimal performance</li>
            <li>⚠ May struggle with extreme market volatility</li>
            <li>⚠ Needs feature engineering for best results</li>
          </ul>
        </div>

      </div>

    </div>
  );
}