import { useState } from "react";

export default function Control() {
  const [signalTime, setSignalTime] = useState(30);
  const [aiMode, setAiMode] = useState(true);

  return (
    <div style={{ padding: "20px", color: "white" }}>

      <h1 style={{ fontSize: "28px" }}>🎛 Control Panel</h1>

      {/* SIGNAL CONTROL */}
      <div style={card}>
        <h3>Signal Timing: {signalTime}s</h3>
        <input
          type="range"
          min="10"
          max="120"
          value={signalTime}
          onChange={(e) => setSignalTime(e.target.value)}
        />
      </div>

      {/* AI MODE */}
      <div style={card}>
        <h3>AI Control</h3>
        <button onClick={() => setAiMode(!aiMode)}>
          {aiMode ? "Disable AI" : "Enable AI"}
        </button>
      </div>

      {/* TRAFFIC SPIKE */}
      <div style={card}>
        <h3>Simulation</h3>
        <button style={{ background: "red", color: "white" }}>
          Trigger Traffic Spike
        </button>
      </div>

    </div>
  );
}

const card = {
  background: "#111827",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "20px"
};