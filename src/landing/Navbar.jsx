export default function LandingNavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(15,23,42,.75)",
        backdropFilter: "blur(15px)",
        zIndex: 999,
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          fontWeight: "800",
        }}
      >
        🚀 FlowPilot AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          color: "white",
          fontWeight: "600",
        }}
      >
        <span>Features</span>
        <span>Pricing</span>
        <span>Testimonials</span>
        <span>Contact</span>
      </div>

      <button
        style={{
          background: "#2563eb",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Login
      </button>
    </nav>
  );
}
