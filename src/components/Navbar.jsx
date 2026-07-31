export default function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        color: "white",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <h2>📊 Dashboard</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            width: "250px",
          }}
        />

        <span style={{ cursor: "pointer" }}>🔔</span>

        <span style={{ cursor: "pointer" }}>👤 Admin</span>
      </div>
    </div>
  );
}
