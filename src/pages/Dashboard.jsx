import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";

export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        🚀 FlowPilot AI
      </h1>

      <p style={{ color: "#94a3b8" }}>
        Welcome back! Here's your business overview.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <StatCard
          title="Revenue"
          value="₹0"
          icon="💰"
          color="#16a34a"
        />

        <StatCard
          title="Products"
          value="0"
          icon="📦"
          color="#2563eb"
        />

        <StatCard
          title="Customers"
          value="0"
          icon="👥"
          color="#f59e0b"
        />

        <StatCard
          title="Sales"
          value="0"
          icon="📈"
          color="#ef4444"
        />
      </div>

      <SalesChart />

      <div
        style={{
          marginTop: "30px",
          background: "#1e293b",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        <h2>🤖 AI Business Insights</h2>

        <p style={{ color: "#cbd5e1" }}>
          AI insights will appear here after business data is available.
        </p>
      </div>
    </div>
  );
}
