import "./Dashboard.css";

export default function StatsCards({ stats }) {
  return (
    <div className="stats-grid">

      <div className="card">
        <h3>💰 Revenue</h3>
        <h2>₹{stats.revenue}</h2>
      </div>

      <div className="card">
        <h3>👥 Customers</h3>
        <h2>{stats.customers}</h2>
      </div>

      <div className="card">
        <h3>📦 Products</h3>
        <h2>{stats.products}</h2>
      </div>

      <div className="card">
        <h3>📊 Stock</h3>
        <h2>{stats.stock}</h2>
      </div>

      <div className="card">
        <h3>🔴 Low Stock</h3>
        <h2>{stats.low_stock}</h2>
      </div>

    </div>
  );
}
