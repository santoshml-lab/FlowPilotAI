import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import "../styles/dashboard.css";
import { getDashboard } from "../services/api";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
  revenue: 0,
  customers: 0,
  products: 0,
  stock: 0,
  low_stock: 0,
});
  useEffect(() => {

  async function loadData() {

    const data = await getDashboard();

    setStats(data);

  }

  loadData();

}, []);
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          fontWeight: "700",
          marginBottom: "8px",
        }}
      >
        Welcome Back 👋
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        Here's what's happening with your business today.
      </p>

      {/* KPI Cards */}

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

      {/* Quick Actions */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <button className="quick-btn">➕ Add Customer</button>

        <button className="quick-btn">📦 Add Product</button>

        <button className="quick-btn">💰 Create Invoice</button>

        <button className="quick-btn">📊 Sales Report</button>
      </div>

      {/* Sales Chart */}

      <div style={{ marginTop: "30px" }}>
        <SalesChart />
      </div>

      {/* Dashboard Widgets */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div className="card">
          <h2>📈 Recent Activity</h2>

          <p style={{ color: "#94a3b8" }}>
            No recent activity available.
          </p>
        </div>

        <div className="card">
          <h2>⚠ Low Stock</h2>

          <p style={{ color: "#94a3b8" }}>
            Everything looks good.
          </p>
        </div>
      </div>

      {/* AI Insights */}

      <div
        className="card"
        style={{
          marginTop: "30px",
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
