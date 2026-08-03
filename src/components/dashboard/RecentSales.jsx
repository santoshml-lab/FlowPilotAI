import { useEffect, useState } from "react";

const API = "https://salespilot-l1d3.onrender.com";

export default function RecentSales() {

  const [sales, setSales] = useState([]);

  useEffect(() => {

    async function loadSales() {

      const response = await fetch(`${API}/recent-sales`);

      const data = await response.json();

      setSales(data);

    }

    loadSales();

  }, []);

  return (

    <div className="card">

      <h2>🛒 Recent Sales</h2>

      {sales.map((sale, index) => (

        <div
          key={index}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid #334155"
          }}
        >
          <strong>{sale.customer}</strong>

          <br />

          {sale.product}

          <br />

          ₹{sale.total}

        </div>

      ))}

    </div>

  );

}
