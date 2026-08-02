import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Inventory() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
const [quantity, setQuantity] = useState("");
const [popupType, setPopupType] = useState("");
  const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #334155",
};
useEffect(() => {
  loadProducts();
}, []);

async function loadProducts() {
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  setProducts(data || []);
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
      <h1>📦 Inventory Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>📦 Total Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🟢 In Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🟡 Low Stock</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>🔴 Out Of Stock</h3>
          <h1>0</h1>
        </Card>
        
      </div>
      <Card
  style={{
    marginTop: "30px",
  }}
>
  <h2
    style={{
      marginBottom: "20px",
    }}
  >
    📋 Inventory Status
  </h2>

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
        <th style={thStyle}>Product</th>
        <th style={thStyle}>Current Stock</th>
        <th style={thStyle}>Low Stock Limit</th>
        <th style={thStyle}>Status</th>
        <th style={thStyle}>Action</th>
      </tr>
    </thead>

    <tbody>
      {products.map((product) => (
  <tr key={product.id}>
    <td style={tdStyle}>{product.name}</td>

    <td style={tdStyle}>{product.stock}</td>

    <td style={tdStyle}>
      {product.low_stock_limit}
    </td>

    <td style={tdStyle}>
      {product.stock === 0
        ? "🔴 Out Of Stock"
        : product.stock <= product.low_stock_limit
        ? "🟡 Low Stock"
        : "🟢 In Stock"}
    </td>

    <td style={tdStyle}>
      <div
  style={{
    display: "flex",
    gap: "10px",
  }}
>
  <button
    onClick={() => {
      setSelectedProduct(product);
      setPopupType("in");
    }}
  >
    📥
  </button>

  <button
    onClick={() => {
      setSelectedProduct(product);
      setPopupType("out");
    }}
  >
    📤
  </button>
</div>
    </td>
  </tr>
))}
        
        
        
        
        
          
        
      
    </tbody>
  </table>
</Card>
    </div>
  );
}
