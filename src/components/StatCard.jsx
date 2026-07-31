export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "15px",
        padding: "20px",
        color: "white",
        borderLeft: `5px solid ${color}`,
        boxShadow: "0 5px 20px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          margin: 0,
          color: "#94a3b8",
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "10px",
          fontSize: "30px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}
