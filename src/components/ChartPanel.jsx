import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ChartPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const i = setInterval(() => {
      setData((prev) => [
        ...prev.slice(-10),
        {
          time: new Date().toLocaleTimeString(),
          traffic: Math.floor(Math.random() * 100)
        }
      ]);
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div style={{ width: "100%", height: "300px", marginTop: "30px" }}>
      <h2>📊 Live Traffic Trend</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="traffic"
            stroke="cyan"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}