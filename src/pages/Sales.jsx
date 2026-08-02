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
      <Card style={{ marginTop: "30px" }}>
  <h2>🛒 Create New Sale</h2>

  <div
    style={{
      display: "grid",
      gap: "15px",
      marginTop: "20px",
    }}
  >
    <select
      value={selectedCustomer}
      onChange={(e) => setSelectedCustomer(e.target.value)}
    >
      <option>Select Customer</option>

      {customers.map((customer) => (
        <option key={customer.id} value={customer.id}>
          {customer.name}
        </option>
      ))}
    </select>

    <select
      value={selectedProduct}
      onChange={(e) => setSelectedProduct(e.target.value)}
    >
      <option>Select Product</option>

      {products.map((product) => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </select>

    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder="Quantity"
    />

    <Button>Create Sale</Button>
  </div>
</Card>
    </div>
  );
}
