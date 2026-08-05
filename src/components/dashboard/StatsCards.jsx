import "./Dashboard.css";

export default function StatsCards({ stats }) {
  const cards = [
    { icon: "💰", title: "Revenue", value: `₹${stats.revenue}` },
    { icon: "👥", title: "Customers", value: stats.customers },
    { icon: "📦", title: "Products", value: stats.products },
    { icon: "📊", title: "Stock Units", value: stats.stock },
    { icon: "🔴", title: "Low Stock", value: stats.low_stock },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}
