import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Card from "../components/ui/Card";


export default function Invoice() {
  const [invoices, setInvoices] = useState([]);
const [totalRevenue, setTotalRevenue] = useState(0);
  useEffect(() => {
  loadInvoices();
}, []);

async function loadInvoices() {
  const { data } = await supabase
    .from("invoices")
    .select("*")
    .order("id", { ascending: false });

  setInvoices(data || []);

  const revenue =
    (data || []).reduce(
      (sum, item) => sum + Number(item.total),
      0
    );

  setTotalRevenue(revenue);
}
  const paidInvoices = invoices.filter(
  (invoice) => invoice.status === "Paid"
).length;

const pendingInvoices = invoices.filter(
  (invoice) => invoice.status === "Pending"
).length;
   

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
        <h1>{invoices.length}</h1>
      </Card>

      <Card>
        <h3>💰 Total Revenue</h3>
        <h1>₹{totalRevenue}</h1>
      </Card>

      <Card>
        <h3>🟢 Paid</h3>
        <h1>{paidInvoices}</h1>
      </Card>

      <Card>
        <h3>🟡 Pending</h3>
        <h1>{pendingInvoices}</h1>
      </Card>
    </div>

    {/* Invoice List */}

    <div style={{ marginTop: "30px" }}>
      {invoices.map((invoice) => (
        <Card key={invoice.id} style={{ marginBottom: "15px" }}>
          <h3>{invoice.invoice_no}</h3>

          <p>👤 {invoice.customer_name}</p>

          <p>📦 {invoice.product_name}</p>

          <p>💰 ₹{invoice.total}</p>

          <button
            onClick={() =>
              window.open(
                `https://salespilot-l1d3.onrender.com/invoice/${invoice.invoice_no}`
              )
            }
          >
            📄 Download PDF
          </button>
        </Card>
      ))}
    </div>
  </div>
);
    
      
        
      
