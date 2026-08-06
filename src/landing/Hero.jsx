import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
          gap: "50px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              lineHeight: "1.2",
            }}
          >
            Manage Your Business
            <br />
            with <span style={{ color: "#38bdf8" }}>FlowPilot AI</span>
          </h1>

          <p
            style={{
              marginTop: "25px",
              fontSize: "20px",
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            AI-powered CRM, Inventory, Sales, Analytics and Smart Business
            Assistant — all in one platform.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            <button
              onClick={() => navigate("/login")}
              style={{
                background: "#2563eb",
                color: "white",
                padding: "15px 30px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              🚀 Start Free Trial
            </button>

            <button
              onClick={() => setShowVideo(true)}
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "15px 30px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ▶ Watch Demo
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "20px",
            padding: "30px",
            width: "420px",
            boxShadow: "0 20px 40px rgba(0,0,0,.35)",
          }}
        >
          <h2>📊 Dashboard Preview</h2>

          <div style={{ marginTop: "25px" }}>
            <h3>💰 Revenue</h3>
            <h1 style={{ color: "#22c55e" }}>₹2,45,000</h1>

            <hr />

            <h3>👥 Customers</h3>
            <h1>1250</h1>

            <hr />

            <h3>🤖 AI Health Score</h3>
            <h1 style={{ color: "#38bdf8" }}>94%</h1>
          </div>
        </div>
      </section>

      {showVideo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "-45px",
                right: "0",
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ✖ Close
            </button>

            <video
              src="/demo.mp4"
              controls
              autoPlay
              style={{
                width: "900px",
                maxWidth: "95vw",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
