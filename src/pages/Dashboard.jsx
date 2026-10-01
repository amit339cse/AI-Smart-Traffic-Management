import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MapView from "../components/MapView";
import ChartPanel from "../components/ChartPanel";
import MLPanel from "../components/MLPanel";
import Toast from "../components/Toast";

import Analytics from "./Analytics";
import Control from "./Control";

import { generateAIInsight } from "../utils/aiEngine";

export default function Dashboard() {
  // 🔥 PAGE STATE
  const [page, setPage] = useState("dashboard");

  // 🔥 LIVE DATA STATES
  const [traffic, setTraffic] = useState(40);
  const [speed, setSpeed] = useState(60);
  const [signals, setSignals] = useState(8);
  const [insight, setInsight] = useState({});
  const [toast, setToast] = useState("");

  // 🔄 LIVE UPDATE
  useEffect(() => {
    const interval = setInterval(() => {
      const t = Math.floor(Math.random() * 100);

      setTraffic(t);
      setSpeed(Math.floor(Math.random() * 80));
      setSignals(Math.floor(Math.random() * 10));

      const ai = generateAIInsight(t);
      setInsight(ai);

      if (ai.alert) {
        setToast(ai.message);
        setTimeout(() => setToast(""), 3000);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🎛 MANUAL CONTROL
  const simulateSpike = () => {
    setTraffic(95);
    setToast("🚨 Manual traffic spike triggered!");
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#020617",
      color: "white"
    }}>

      {/* 🔔 TOAST */}
      <Toast message={toast} />

      {/* 🔥 SIDEBAR */}
      <div style={{
        width: "230px",
        background: "#0f172a",
        padding: "20px",
        borderRight: "1px solid #1e293b"
      }}>
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
          🚦 AI Traffic
        </h2>

        <p
          onClick={() => setPage("dashboard")}
          style={page === "dashboard" ? navActive : nav}
        >
          Dashboard
        </p>

        <p
          onClick={() => setPage("analytics")}
          style={page === "analytics" ? navActive : nav}
        >
          Analytics
        </p>

        <p
          onClick={() => setPage("control")}
          style={page === "control" ? navActive : nav}
        >
          Control
        </p>
      </div>

      {/* 🚀 MAIN CONTENT */}
      <div style={{ flex: 1, padding: "20px" }}>

        {/* TOP BAR */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}>
          <h1 style={{ fontSize: "28px" }}>
            Smart Traffic Dashboard
          </h1>

          <div style={{
            color: "#0ea5e9",
            fontWeight: "bold"
          }}>
            ● LIVE
          </div>
        </div>

        {/* 🏠 DASHBOARD PAGE */}
        {page === "dashboard" && (
          <>
            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <MapView />
            </motion.div>

            {/* METRICS */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "20px"
            }}>
              <motion.div whileHover={{ scale: 1.05 }} style={card}>
                <h3>Traffic Density</h3>
                <p style={big}>{traffic}%</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} style={card}>
                <h3>Avg Speed</h3>
                <p style={big}>{speed} km/h</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} style={card}>
                <h3>Active Signals</h3>
                <p style={big}>{signals}</p>
              </motion.div>
            </div>

            {/* AI INSIGHTS */}
            <div style={{
              marginTop: "20px",
              padding: "20px",
              background: "#111827",
              borderRadius: "15px"
            }}>
              <h2>🧠 AI Insights</h2>
              <p style={{ color: "#38bdf8", marginTop: "10px" }}>
                {insight.message}
              </p>
            </div>

            {/* ML PANEL */}
            <MLPanel />

            {/* CONTROL BUTTON */}
            <button
              onClick={simulateSpike}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                background: "#ef4444",
                border: "none",
                borderRadius: "10px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Simulate Traffic Spike
            </button>

            {/* GRAPH */}
            <ChartPanel />
          </>
        )}

        {/* 📊 ANALYTICS PAGE */}
        {page === "analytics" && <Analytics />}

        {/* 🎛 CONTROL PAGE */}
        {page === "control" && <Control />}

      </div>
    </div>
  );
}

/* 🎨 STYLES */
const card = {
  background: "rgba(255,255,255,0.05)",
  padding: "20px",
  borderRadius: "15px",
  border: "1px solid rgba(255,255,255,0.1)"
};

const big = {
  fontSize: "30px",
  marginTop: "10px",
  color: "#0ea5e9"
};

const nav = {
  marginBottom: "12px",
  opacity: 0.6,
  cursor: "pointer"
};

const navActive = {
  marginBottom: "12px",
  opacity: 1,
  color: "#0ea5e9",
  fontWeight: "bold",
  cursor: "pointer"
};