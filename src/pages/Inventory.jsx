import Card from "../components/ui/Card";

export default function Inventory() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📦 Inventory Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>📦 Total Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🟢 In Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🟡 Low Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🔴 Out Of Stock</h3>
          <h1>0</h1>
        </Card>
      </div>
    </div>
  );
}
