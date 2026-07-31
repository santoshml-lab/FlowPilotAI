export default function Sidebar() {
  const menus = [
    "🏠 Dashboard",
    "👥 Customers",
    "📦 Products",
    "📋 Inventory",
    "💰 Sales",
    "🧾 Invoice",
    "💸 Expenses",
    "📈 Reports",
    "🤖 AI Assistant",
    "⚙ Settings",
  ];

  return (
    <div
      style={{
        width: "260px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2 style={{ marginBottom: "35px" }}>
        🚀 FlowPilot AI
      </h2>

      {menus.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "14px",
            marginBottom: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            background: "#1f2937",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
