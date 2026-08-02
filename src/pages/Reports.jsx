import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCharts from "../components/product/ProductCharts";


export default function Reports() {
  const [revenue, setRevenue] = useState(0);
const [sales, setSales] = useState(0);
const [stock, setStock] = useState(0);
const [customers, setCustomers] = useState(0);
  useEffect(() => {
  loadReports();
}, []);

async function loadReports() {
  const { data: salesData } = await supabase
    .from("sales")
    .select("*");

  const { data: productData } = await supabase
    .from("products")
    .select("*");

  const { data: customerData } = await supabase
    .from("customers")
    .select("*");

  setSales(salesData?.length || 0);

  const totalRevenue = (salesData || []).reduce(
    (sum, item) => sum + Number(item.total),
    0
  );

  setRevenue(totalRevenue);

  const totalStock = (productData || []).reduce(
    (sum, item) => sum + Number(item.stock),
    0
  );

  setStock(totalStock);

  setCustomers(customerData?.length || 0);
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
      <h1>📊 Reports Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>💰 Revenue Report</h3>
          <h1>₹{revenue}</h1>
        </Card>

        <Card>
          <h3>🛒 Sales Report</h3>
          <h1>{sales}</h1>
        </Card>

        <Card>
          <h3>📦 Stock Report</h3>
          <h1>{stock}</h1>
        </Card>

        <Card>
          <h3>👥 Customers</h3>
          <h1>{customers}</h1>
        </Card>
        <ProductCharts products={[]} />
        <Card
  style={{
    marginTop: "30px",
  }}
>
  <h2>📈 Business Summary</h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#334155",
        }}
      >
        <th style={thStyle}>Metric</th>
        <th style={thStyle}>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={tdStyle}>Total Revenue</td>
        <td style={tdStyle}>₹{revenue}</td>
      </tr>

      <tr>
        <td style={tdStyle}>Total Sales</td>
        <td style={tdStyle}>{sales}</td>
      </tr>

      <tr>
        <td style={tdStyle}>Total Products</td>
        <td style={tdStyle}>{stock}</td>
      </tr>

      <tr>
        <td style={tdStyle}>Customers</td>
        <td style={tdStyle}>{customers}</td>
      </tr>
    </tbody>
  </table>
</Card>
      </div>
    </div>
  );
}
