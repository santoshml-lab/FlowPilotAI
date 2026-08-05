import { useEffect, useState } from "react";
import {
  getBusinessAnalytics,
  getDashboard,
} from "../services/api";

export default function BusinessAnalytics() {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(true);

  const [health] = useState(92);

  const [stats, setStats] = useState({
    revenue: 0,
    customers: 0,
    products: 0,
    stock: 0,
    low_stock: 0,
  });

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const ai = await getBusinessAnalytics();
      setAnalysis(ai.analysis);

      const dashboard = await getDashboard();
      setStats(dashboard);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📊 AI Business Analytics</h1>

      {/* Business Health */}

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <h2>🟢 Business Health Score</h2>

        <h1
          style={{
            fontSize: "60px",
            color: "#22c55e",
            margin: "15px 0",
          }}
        >
          {health}%
        </h1>

        <h3>Excellent</h3>
      </div>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>💰 Revenue</h3>
          <h1>₹{stats.revenue}</h1>
        </div>

        <div style={cardStyle}>
          <h3>👥 Customers</h3>
          <h1>{stats.customers}</h1>
        </div>

        <div style={cardStyle}>
          <h3>📦 Products</h3>
          <h1>{stats.products}</h1>
        </div>

        <div style={cardStyle}>
          <h3>⚠ Low Stock</h3>
          <h1>{stats.low_stock}</h1>
        </div>
      </div>

      {/* AI Analysis */}

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "15px",
          lineHeight: "1.8",
        }}
      >
        <h2>🤖 AI Analysis</h2>

        {loading ? (
          <p>Analyzing your business...</p>
        ) : (
          <ul>
            {analysis.split("\n").map((line, index) =>
              line.trim() ? (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {line}
                </li>
              ) : null
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
};
