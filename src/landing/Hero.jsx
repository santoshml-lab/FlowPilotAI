export default function Hero() {
  return (
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
          AI-powered CRM, Inventory, Sales, Analytics and Smart
          Business Assistant — all in one platform.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <button
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
  );
}
