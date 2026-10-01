export default function Landing({ onStart }) {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1493238792000-8113da705763"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.7)"
      }}/>

      {/* CONTENT */}
      <div style={{
        position: "relative",
        textAlign: "center",
        color: "white"
      }}>
        <h1 style={{
          fontSize: "70px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          AI-Powered Traffic Intelligence
        </h1>

        <button
          onClick={onStart}
          style={{
            padding: "15px 40px",
            fontSize: "18px",
            background: "cyan",
            border: "none",
            borderRadius: "10px"
          }}
        >
          🚀 Launch Dashboard
        </button>
      </div>

    </div>
  );
}