import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

export default function Products({ setPage }) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  async function deleteProduct(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
  } else {
    alert("✅ Product Deleted Successfully");
    loadProducts();
  }
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
      <h1>📦 Products</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        
         <Input
  placeholder="🔍 Search Product..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/> 
          
          
          
        <Button onClick={() => setPage("addProduct")}>
  ➕ Add Product
</Button>
  
  
    
    
  
    
  
  

       
  

          
            
            
            
      </div>
      <Card>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#1e293b",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#334155" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No Products Found
              </td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td style={tdStyle}>{product.name}</td>

                <td style={tdStyle}>₹{product.price}</td>

                <td style={tdStyle}>{product.stock}</td>

                <td style={tdStyle}>
                  {product.stock > 10
                    ? "🟢 In Stock"
                    : product.stock > 0
                    ? "🟡 Low Stock"
                    : "🔴 Out of Stock"}
                </td>

                <td style={tdStyle}>
                  <button
                    style={{
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️
                  </button>

                  <button
  onClick={() => deleteProduct(product.id)}
  style={{
    cursor: "pointer",
  }}
>
  🗑️
</button>
                    
                      
                    
                  
                    
                  
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </Card>
    </div>
  );
}

const thStyle = {
  padding: "15px",
  textAlign: "left",
};

const tdStyle = {
  padding: "15px",
  borderBottom: "1px solid #334155",
};
