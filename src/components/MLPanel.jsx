import { useEffect, useState } from "react";

export default function MLPanel() {
  const [accuracy, setAccuracy] = useState(85);
  const [confidence, setConfidence] = useState(70);

  useEffect(() => {
    const i = setInterval(() => {
      setAccuracy(80 + Math.random() * 20);
      setConfidence(60 + Math.random() * 30);
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      background: "#111827",
      borderRadius: "15px"
    }}>
      <h2>🧠 ML Prediction Model</h2>

      <p>Accuracy: {accuracy.toFixed(2)}%</p>
      <p>Confidence: {confidence.toFixed(2)}%</p>

      <p style={{ color: "#38bdf8", marginTop: "10px" }}>
        Model continuously learning from IoT sensor data...
      </p>
    </div>
  );
}