import { useState, useEffect } from "react";

export default function MapView() {
  const [query, setQuery] = useState("");
  const [coords, setCoords] = useState({ lat: 25.43, lon: 81.84 });
  const [routes, setRoutes] = useState([]);

  const search = async () => {
    let q = query;

    if (query.toLowerCase().includes("srmu")) {
      q = "Shri Ramswaroop Memorial University Lucknow";
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${q}`
    );

    const data = await res.json();
    if (!data.length) return;

    setCoords({
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon)
    });
  };

  // 🚀 GENERATE FAKE ROUTES
  useEffect(() => {
    const interval = setInterval(() => {
      setRoutes(
        Array.from({ length: 4 }).map(() => ({
          top: Math.random() * 90,
          left: Math.random() * 90
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "80vh",
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "20px",
      transform: "perspective(1000px) rotateX(8deg)" // 🔥 3D effect
    }}>

      {/* SEARCH */}
      <div style={{
        position: "absolute",
        top: "70px",
        left: "20px",
        zIndex: 10,
        display: "flex",
        gap: "10px"
      }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location..."
          style={{
            padding: "12px",
            background: "#0f172a",
            color: "#fff",
            border: "1px solid #334155",
            borderRadius: "10px"
          }}
        />
        <button onClick={search} style={{
          padding: "12px",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          borderRadius: "10px"
        }}>
          Search
        </button>
      </div>

      {/* ROUTES (ANIMATED) */}
      {routes.map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${r.top}%`,
            left: `${r.left}%`,
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, cyan, transparent)",
            animation: "flow 2s linear infinite"
          }}
        />
      ))}

      {/* MAP */}
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${coords.lon-0.05}%2C${coords.lat-0.05}%2C${coords.lon+0.05}%2C${coords.lat+0.05}`}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}