export function generateAIInsight(traffic) {
  if (traffic > 85) {
    return {
      message: "🚨 Critical congestion! Rerouting traffic & extending signals",
      alert: true
    };
  } else if (traffic > 60) {
    return {
      message: "⚠️ Rising congestion detected. Optimizing flow...",
      alert: true
    };
  } else {
    return {
      message: "✅ Traffic stable. No action required",
      alert: false
    };
  }
}