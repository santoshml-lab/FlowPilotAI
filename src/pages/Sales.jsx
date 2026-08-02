import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/ui/Button";

export default function Sales() {
  const [customers, setCustomers] = useState([]);
const [products, setProducts] = useState([]);

const [selectedCustomer, setSelectedCustomer] = useState("");
const [selectedProduct, setSelectedProduct] = useState("");
const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  loadData();
}, []);

async function loadData() {
  const { data: customerData } = await supabase
    .from("customers")
    .select("*");

  const { data: productData } = await supabase
    .from("products")
    .select("*");

  setCustomers(customerData || []);
  setProducts(productData || []);
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
      <h1>🛒 Sales Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>💰 Today's Sales</h3>
          <h1>₹0</h1>
        </Card>

        <Card>
          <h3>🧾 Total Orders</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>📦 Products Sold</h3>
          <h1>0</h1>
        </Card>

        <Card>
          <h3>👥 Customers</h3>
          <h1>0</h1>
        </Card>
        
      </div>
      
    
    
      
      
  );
}
