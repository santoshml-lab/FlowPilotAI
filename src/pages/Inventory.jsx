import Card from "../components/ui/Card";

export default function Inventory() {
  const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #334155",
};
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
      <Card
  style={{
    marginTop: "30px",
  }}
>
  <h2
    style={{
      marginBottom: "20px",
    }}
  >
    📋 Inventory Status
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#334155",
        }}
      >
        <th style={thStyle}>Product</th>
        <th style={thStyle}>Current Stock</th>
        <th style={thStyle}>Low Stock Limit</th>
        <th style={thStyle}>Status</th>
        <th style={thStyle}>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={tdStyle}>No Products Yet</td>
        <td style={tdStyle}>0</td>
        <td style={tdStyle}>0</td>
        <td style={tdStyle}>—</td>
        <td style={tdStyle}>
          <button>📥 Stock In</button>
        </td>
      </tr>
    </tbody>
  </table>
</Card>
    </div>
  );
}
