export default function About() {
  return (
    <div className="p-8 text-white bg-black min-h-screen space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          About The Project
        </h1>

        <p className="text-gray-400 mt-3 max-w-4xl leading-relaxed">
          The AI Stock Market Prediction System is an end-to-end machine
          learning powered fintech platform designed to analyze historical
          stock data and forecast market trends using advanced predictive
          analytics.
        </p>
      </div>

      {/* System Overview */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-3">
          System Overview
        </h2>

        <p className="text-gray-300 leading-relaxed">
          This system combines artificial intelligence, data processing,
          and interactive analytics to identify market patterns from
          historical stock data. By analyzing price movements, trading
          activity, and time-based trends, the platform generates
          predictive insights that help users better understand potential
          market direction.
        </p>
      </div>

      {/* Project Objective */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-3">
          Project Objective
        </h2>

        <p className="text-gray-300 leading-relaxed">
          The goal of this project is to demonstrate how artificial
          intelligence can be applied to financial forecasting by
          providing intelligent market predictions, visual insights,
          and data-driven decision support.
        </p>
      </div>

      {/* Features & Applications */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Features */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Key Features
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>📈 Uptrend / Downtrend market prediction</li>
            <li>🧠 AI-powered forecasting engine</li>
            <li>⚡ Real-time prediction processing</li>
            <li>📊 Interactive analytics dashboard</li>
            <li>🔍 Feature-driven market analysis</li>
            <li>📉 Trend visualization and insights</li>
          </ul>
        </div>

        {/* Applications */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Real-World Applications
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>📊 Quantitative trading research</li>
            <li>💰 Investment analytics</li>
            <li>📉 Financial risk assessment</li>
            <li>🤖 AI-assisted market intelligence</li>
            <li>📈 Market trend forecasting</li>
          </ul>
        </div>

      </div>

      {/* Workflow */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-5">
          System Workflow
        </h2>

        <div className="flex flex-col items-center text-center space-y-2 text-gray-300">

          <div className="bg-gray-800 px-6 py-3 rounded-lg">
            Historical Market Data
          </div>

          <span className="text-cyan-400 text-xl">↓</span>

          <div className="bg-gray-800 px-6 py-3 rounded-lg">
            Data Processing & Feature Analysis
          </div>

          <span className="text-cyan-400 text-xl">↓</span>

          <div className="bg-gray-800 px-6 py-3 rounded-lg">
            AI Prediction Engine
          </div>

          <span className="text-cyan-400 text-xl">↓</span>

          <div className="bg-gray-800 px-6 py-3 rounded-lg">
            Trend Classification
          </div>

          <span className="text-cyan-400 text-xl">↓</span>

          <div className="bg-gray-800 px-6 py-3 rounded-lg">
            Interactive Dashboard Visualization
          </div>

        </div>
      </div>

      {/* Future Enhancements */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Future Enhancements
        </h2>

        <div className="grid md:grid-cols-2 gap-3 text-gray-300">

          <div>🚀 Live market data integration</div>
          <div>📊 Advanced deep learning models</div>
          <div>⚡ Real-time streaming updates</div>
          <div>💰 Automated trading assistance</div>
          <div>📁 Exportable analytics reports</div>
          <div>🧠 Explainable AI insights</div>

        </div>
      </div>

    </div>
  );
}