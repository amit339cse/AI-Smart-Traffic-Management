export default function AIInsights({ ai }) {
  return (
    <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-500/10 p-6 rounded-2xl border border-purple-400/20 shadow-2xl">

      <h3 className="text-lg font-semibold text-purple-300 mb-4">
        🧠 AI Prediction Engine
      </h3>

      <p className="text-white text-sm mb-2">
        {ai.risk}
      </p>

      <p className="text-gray-300 text-sm">
        {ai.suggestion}
      </p>

    </div>
  );
}