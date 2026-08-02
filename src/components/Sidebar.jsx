export default function Sidebar({ setPage }) {

  
  return (
    <div
      style={{
        width: "260px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2
  style={{
    marginBottom: "40px",
    fontSize: "28px",
    color: "#60a5fa",
    fontWeight: "700",
  }}
>
  🚀 FlowPilot AI
</h2>
        
      

      <div style={menuStyle} onClick={() => setPage("dashboard")}>
        🏠 Dashboard
      </div>

      <div style={menuStyle} onClick={() => setPage("customers")}>
        👥 Customers
      </div>

      <div style={menuStyle} onClick={() => setPage("addCustomer")}>
        ➕ Add Customer
      </div>

      <div style={menuStyle} onClick={() => setPage("products")}>
        📦 Products
      </div>

      <div style={menuStyle} onClick={() => setPage("addProduct")}>
        ➕ Add Product
      </div>

      <div style={menuStyle}>
        📋 Inventory
      </div>

      <div style={menuStyle}>
        💰 Sales
      </div>

      <div style={menuStyle}>
        🧾 Invoice
      </div>

      <div style={menuStyle}>
        💸 Expenses
      </div>

      <div style={menuStyle}>
        📈 Reports
      </div>

      <div style={menuStyle}>
        🤖 AI Assistant
      </div>

      <div style={menuStyle}>
        ⚙ Settings
      </div>
    </div>
  );
}

const menuStyle = {
  padding: "14px 18px",
  marginBottom: "12px",
  borderRadius: "14px",
  cursor: "pointer",
  background: "#1e293b",
  transition: "0.3s",
  fontWeight: "600",
  fontSize: "15px",
  border: "1px solid #334155",
};
  
  
  
