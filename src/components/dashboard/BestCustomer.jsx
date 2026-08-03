import { useEffect, useState } from "react";

const API = "https://salespilot-l1d3.onrender.com";

export default function BestCustomer() {

  const [customer, setCustomer] = useState(null);

  useEffect(() => {

    async function loadCustomer() {

      const response = await fetch(`${API}/best-customer`);

      const data = await response.json();

      setCustomer(data);

    }

    loadCustomer();

  }, []);

  if (!customer) {
    return (
      <div style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"15px",
        color:"white"
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"15px",
        color:"white"
      }}
    >
      <h2>👑 Best Customer</h2>

      <h3>{customer.name}</h3>

      <p>Total Purchase : ₹{customer.total}</p>

    </div>
  );
}
