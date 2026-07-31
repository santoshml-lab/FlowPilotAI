import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🚀 FlowPilot AI</h1>

      <p>Smart Business Management Powered by AI</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
