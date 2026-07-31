export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#1e293b,#0f172a)",
        borderRadius: "20px",
        padding: "24px",
        color: "white",
        border: `1px solid ${color}`,
        boxShadow: `0 10px 30px ${color}30`,
        transition: "0.3s",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#94a3b8",
          margin: 0,
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "34px",
          fontWeight: "700",
        }}
      >
        {value}
      </h1>
    </div>
  );
}
