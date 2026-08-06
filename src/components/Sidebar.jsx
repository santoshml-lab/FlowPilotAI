import { useTheme } from "../context/ThemeContext";
export default function Sidebar({ setPage }) {
  const { dark } = useTheme();
  

  
  return (
    <div
      style={{
  width: "260px",
  background: dark ? "#111827" : "#ffffff",
  color: dark ? "white" : "#111827",
  height: "100vh",
  padding: "25px",
  position: "fixed",
  left: 0,
  top: 0,
  borderRight: dark
    ? "1px solid #1f2937"
    : "1px solid #e5e7eb",
  transition: "0.3s",
}}
        
        
        
        
        
        
      
    >
      
  <h2
  style={{
    marginBottom: "40px",
    fontSize: "28px",
    color: dark ? "#60a5fa" : "#2563eb",
    fontWeight: "700",
  }}
>
  🚀 FlowPilot AI
</h2>
  
  
  
  
  
    
          
  

  

        
      

      <div style={menuStyle(dark)} onClick={() => setPage("dashboard")}>
        🏠 Dashboard
      </div>

      <div style={menuStyle(dark)} onClick={() => setPage("customers")}>
        👥 Customers
      </div>

      <div style={menuStyle(dark)} onClick={() => setPage("addCustomer")}>
        ➕ Add Customer
      </div>

      <div style={menuStyle(dark)} onClick={() => setPage("products")}>
        📦 Products
      </div>

      
        
      
      <div
  style={menuStyle(dark)}  onClick={() => setPage("inventory")}
>
  📋 Inventory
</div>
      <div
  style={menuStyle(dark)} onClick={() => setPage("inventoryHistory")}
>
  📜 Inventory History
</div>
      
  

        
      

      <div
  style={menuStyle(dark)}
  onClick={() => setPage("sales")}
>
  💰 Sales
</div>
        
      

      <div
  style={menuStyle(dark)}
  onClick={() => setPage("invoice")}
>
  🧾 Invoice
</div>
        
      

              
      

      <div
  style={menuStyle(dark)}
  onClick={() => setPage("reports")}
>
  📈 Reports
</div>
      <div
  style={menuStyle(dark)}
  onClick={() => setPage("businessAnalytics")}
>
  📊 AI Analytics
</div>

      
        
      

      <div
  style={menuStyle(dark)}
  onClick={() => setPage("ai")}
>
  🤖 AI Assistant
</div>
        
      

      <div
  style={menuStyle(dark)} onClick={() => setPage("settings")}
>
  ⚙ Settings
</div>
        
      
    </div>
  );
}

const menuStyle = (dark) => ({
  padding: "14px 18px",
  marginBottom: "12px",
  borderRadius: "14px",
  cursor: "pointer",
  background: dark ? "#1e293b" : "#f3f4f6",
  color: dark ? "white" : "#111827",
  transition: "0.3s",
  fontWeight: "600",
  fontSize: "15px",
  border: dark
    ? "1px solid #334155"
    : "1px solid #d1d5db",
});
  
  
  
  

  
  
  
