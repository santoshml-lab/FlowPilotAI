import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function InventoryHistory() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
  loadHistory();
}, []);

async function loadHistory() {
  const { data } = await supabase
    .from("inventory_history")
    .select("*")
    .order("created_at", { ascending: false });

  setHistory(data || []);
}
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
            {history.length === 0 ? (
  <tr>
    <td style={tdStyle} colSpan="5">
      No History Found
    </td>
  </tr>
) : (
  history.map((item) => (
    <tr key={item.id}>
      <td style={tdStyle}>
        {new Date(item.created_at).toLocaleString()}
      </td>

      <td style={tdStyle}>
        {item.product_name}
      </td>

      <td style={tdStyle}>
        {item.type}
      </td>

      <td style={tdStyle}>
        {item.quantity}
      </td>

      <td style={tdStyle}>
        {item.stock_after}
      </td>
    </tr>
  ))
)}
                            
              
              
              
            
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
