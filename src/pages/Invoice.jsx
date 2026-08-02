import Card from "../components/ui/Card";

export default function Invoice() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>🧾 Invoice Center</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>📄 Total Invoices</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>💰 Total Revenue</h3>
          <h1>₹0</h1>
        </Card>

        <Card>
          <h3>🟢 Paid</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🟡 Pending</h3>
          <h1>0</h1>
        </Card>
      </div>
    </div>
  );
}
