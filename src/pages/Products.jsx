
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setProducts(data || []);
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 Products</h1>
      <input
  type="text"
  placeholder="🔍 Search Product..."
  style={{
    width: "300px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginTop: "15px",
    marginBottom: "20px",
  }}
/>
      <button
  style={{
    marginLeft: "15px",
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  ➕ Add Product
</button>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
