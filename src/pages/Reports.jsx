import Card from "../components/ui/Card";

export default function Reports() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📊 Reports Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>💰 Revenue Report</h3>
          <h1>₹0</h1>
        </Card>

        <Card>
          <h3>🛒 Sales Report</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>📦 Stock Report</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>👥 Customers</h3>
          <h1>0</h1>
        </Card>
      </div>
    </div>
  );
}
