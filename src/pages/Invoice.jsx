import { useEffect, useState } from "react";
import { getInvoices } from "../services/api";

export default function Invoice() {

  const [invoices, setInvoices] = useState([]);

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
          </tr>
        </thead>

        <tbody>

          {invoices.map((item) => (

            <tr key={item.id}>

              <td>{item.invoice_no}</td>

              <td>{item.customer_name}</td>

              <td>₹{item.total}</td>

              <td>{item.status}</td>

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

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
    
      
        
      
