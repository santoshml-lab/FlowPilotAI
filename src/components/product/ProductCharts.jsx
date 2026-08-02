import Card from "../ui/Card";

export default function ProductCharts() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <Card>
        <h3>📦 Products by Category</h3>

        <div
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          Chart Coming Soon...
        </div>
      </Card>

      <Card>
        <h3>🥧 Stock Distribution</h3>

        <div
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          Chart Coming Soon...
        </div>
      </Card>

      <Card
        style={{
          gridColumn: "1 / -1",
        }}
      >
        <h3>💰 Inventory Value by Brand</h3>

        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          Chart Coming Soon...
        </div>
      </Card>
    </div>
  );
}
