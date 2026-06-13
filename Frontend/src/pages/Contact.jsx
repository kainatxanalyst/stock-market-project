import React from "react";

export default function Contact() {
  const capabilities = [
    "📈 Intelligent Market Trend Forecasting",
    "🧠 AI-Powered Decision Support",
    "⚡ Real-Time Prediction Processing",
    "📊 Interactive Financial Analytics",
    "🔍 Market Pattern Recognition",
    "🚀 Scalable Deployment Architecture",
  ];

  const statuses = [
    {
      title: "Prediction Engine",
      value: "Operational",
      icon: "🧠",
    },
    {
      title: "Analytics Dashboard",
      value: "Active",
      icon: "📊",
    },
    {
      title: "Data Processing",
      value: "Running",
      icon: "⚡",
    },
    {
      title: "Deployment Status",
      value: "Ready",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Project Information Center
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl text-lg">
            Comprehensive overview of the AI Stock Market Prediction System,
            highlighting project capabilities, analytics infrastructure,
            deployment readiness, and financial intelligence features.
          </p>
        </div>

        {/* DEVELOPER PROFILE */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Developer Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-gray-400 text-sm">Developer</p>
              <h3 className="text-2xl font-bold mt-2">
                Kainat Arshad
              </h3>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-gray-400 text-sm">Education</p>
              <h3 className="text-2xl font-bold mt-2">
                BS Data Science
              </h3>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-gray-400 text-sm">Project</p>
              <h3 className="text-xl font-bold mt-2">
                AI Stock Market Prediction System
              </h3>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-gray-400 text-sm">Specialization</p>
              <h3 className="text-xl font-bold mt-2">
                Machine Learning & Financial Analytics
              </h3>
            </div>

          </div>
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <p className="text-gray-400 text-sm">
              Project Category
            </p>

            <h2 className="text-3xl font-bold mt-3">
              FinTech AI
            </h2>

            <p className="text-gray-500 mt-2">
              Financial Forecasting Platform
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition">
            <p className="text-gray-400 text-sm">
              Development Stage
            </p>

            <h2 className="text-3xl font-bold mt-3 text-green-400">
              Production Ready
            </h2>

            <p className="text-gray-500 mt-2">
              Ready for Deployment
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition">
            <p className="text-gray-400 text-sm">
              Dataset Scale
            </p>

            <h2 className="text-3xl font-bold mt-3">
              112K+
            </h2>

            <p className="text-gray-500 mt-2">
              Historical Market Records
            </p>
          </div>

        </div>

        {/* PLATFORM CAPABILITIES */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-cyan-500 transition"
              >
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            System Status
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {statuses.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-5"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-400">
                      {item.title}
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.value}
                    </h3>
                  </div>

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* PROJECT SUMMARY */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Project Summary
          </h2>

          <p className="text-gray-300 leading-relaxed">
            The AI Stock Market Prediction System is an advanced financial
            analytics platform designed to forecast market direction using
            historical stock market data. The system analyzes market behavior,
            identifies hidden patterns, and generates predictive insights
            through machine learning-driven intelligence.
          </p>

          <p className="text-gray-400 mt-4">
            The platform combines predictive analytics, trend classification,
            and interactive dashboard visualization to provide a modern
            financial intelligence experience for research, learning,
            and decision support.
          </p>

        </div>

        {/* FOOTER */}
        <div className="text-center border-t border-gray-800 pt-6">

          <p className="text-gray-500 font-medium">
            AI Stock Market Prediction System
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Financial Analytics • Market Intelligence • Predictive Forecasting
          </p>

          <p className="text-gray-700 text-xs mt-4">
            Developed by Arshad Ali | BS Data Science
          </p>

        </div>

      </div>
    </div>
  );
}