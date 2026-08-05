import { useEffect, useState } from "react";
import { getInvoices } from "../services/api";

export default function Invoice() {

  const [invoices, setInvoices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadInvoices();
  }, []);

  async function loadInvoices() {
    const data = await getInvoices();
    setInvoices(data);
  }

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >
      <h1>📄 Invoice History</h1>

      <input
  type="text"
  placeholder="Search Invoice..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px",
    width: "300px",
    borderRadius: "8px",
    border: "none",
  }}
/>

      <table
        style={{
          width: "100%",
          marginTop: "25px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Download</th>
            <th>Email</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>

  {invoices
    .filter(
      (item) =>
        item.invoice_no.toLowerCase().includes(search.toLowerCase()) ||
        item.customer_name.toLowerCase().includes(search.toLowerCase())
    )
    .map((item) => (

      <tr key={item.id}>

        <td>{item.invoice_no}</td>

        <td>{item.customer_name}</td>

        <td>₹{item.total}</td>

        <td>
  <span
    style={{
      background:
        item.status === "Paid" ? "#16a34a" : "#dc2626",
      padding: "6px 12px",
      borderRadius: "20px",
      color: "white",
      fontWeight: "bold",
    }}
  >
    {item.status}
  </span>
</td>
          
            
              
              

        <td>
          <a
            href={`https://salespilot-l1d3.onrender.com/invoice/${item.invoice_no}`}
            target="_blank"
            rel="noreferrer"
          >
            📥 PDF
          </a>
        </td>

        <td>
          <button
            onClick={async () => {
              await fetch(
                `https://salespilot-l1d3.onrender.com/send-invoice/${item.invoice_no}`,
                {
                  method: "POST",
                }
              );

              alert("Invoice Sent");
            }}
          >
            📧 Send
          </button>
        </td>
        <td>
  <a
  href={`https://salespilot-l1d3.onrender.com/invoice/${item.invoice_no}`}
  target="_blank"
  rel="noreferrer"
  style={{
    background: "#2563eb",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
  }}
>
  👀 View
</a>
    
    

    
  
</td>

      </tr>

    ))}

</tbody>

          

            

              

      </table>

    </div>
  );
}
    
      
        
      
