import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(-10),
        {
          time: new Date().toLocaleTimeString(),
          traffic: Math.floor(Math.random() * 100)
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const pieData = [
    { name: "Low", value: 30 },
    { name: "Medium", value: 45 },
    { name: "High", value: 25 }
  ];

  return (
    <div style={{ padding: "20px", color: "white" }}>

      <h1 style={{ fontSize: "28px" }}>📊 Analytics</h1>

      {/* LINE CHART */}
      <div style={{ height: "300px", marginTop: "20px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="traffic" stroke="#0ea5e9" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div style={{ height: "300px", marginTop: "40px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={100}>
              <Cell fill="#22c55e" />
              <Cell fill="#facc15" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}