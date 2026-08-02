import Card from "../components/ui/Card";

export default function InventoryHistory() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📜 Inventory History</h1>

      <Card
        style={{
          marginTop: "25px",
        }}
      >
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
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Stock After</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tdStyle}>No History</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #334155",
};
