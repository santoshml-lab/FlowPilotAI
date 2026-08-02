import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";
import ProductStats from "../components/product/ProductStats";
import ViewProduct from "../components/product/ViewProduct";
import ProductCharts from "../components/product/ProductCharts";

export default function Products({
  setPage,
  setEditingProduct,
}) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  

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
  const categories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

const brands = [
  "All",
  ...new Set(products.map((p) => p.brand)),
];

  const filteredProducts = products.filter((product) => {
  return (
    product.status !== "Archived" &&
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (categoryFilter === "All" || product.category === categoryFilter) &&
    (brandFilter === "All" || product.brand === brandFilter) &&
    (statusFilter === "All" || product.status === statusFilter)
  );
});
  const sortedProducts = [...filteredProducts].sort((a, b) => {
  switch (sortBy) {
    case "name":
      return a.name.localeCompare(b.name);

    case "priceLow":
      return Number(a.price) - Number(b.price);

    case "priceHigh":
      return Number(b.price) - Number(a.price);

    case "stock":
      return Number(b.stock) - Number(a.stock);

    default:
      return b.id - a.id;
  }
});
  const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct =
  indexOfLastProduct - productsPerPage;

const currentProducts = sortedProducts.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

const totalPages = Math.ceil(
  sortedProducts.length / productsPerPage
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
  async function duplicateProduct(product) {
  const { error } = await supabase
    .from("products")
    .insert([
      {
        name: `${product.name} Copy`,
        sku: `${product.sku}-COPY`,
        category: product.category,
        brand: product.brand,
        supplier: product.supplier,
        price: product.price,
        cost_price: product.cost_price,
        stock: product.stock,
        low_stock_limit: product.low_stock_limit,
        barcode: product.barcode,
        description: product.description,
        status: product.status,
        image: product.image,
      },
    ]);

  if (error) {
    alert(error.message);
  } else {
    alert("✅ Product Duplicated Successfully");
    loadProducts();
  }
  }
  async function archiveProduct(id) {
  const { error } = await supabase
    .from("products")
    .update({
      status: "Archived",
    })
    .eq("id", id);

  if (error) {
    alert(error.message);
  } else {
    alert("📦 Product Archived Successfully");
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
      <ProductStats products={products} />
      <ProductCharts products={products} />

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
        <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  }}
>
  <select
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
  >
    {categories.map((category) => (
      <option key={category}>{category}</option>
    ))}
  </select>

  <select
    value={brandFilter}
    onChange={(e) => setBrandFilter(e.target.value)}
  >
    {brands.map((brand) => (
      <option key={brand}>{brand}</option>
    ))}
  </select>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option>All</option>
    <option>Active</option>
    <option>Inactive</option>
    <option>Archived</option>
  </select>
</div>
        <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="latest">Latest</option>
  <option value="name">Product Name</option>
  <option value="priceLow">Price: Low to High</option>
  <option value="priceHigh">Price: High to Low</option>
  <option value="stock">Stock</option>
</select>
          
          
          
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
  <th style={thStyle}>Image</th>
  <th style={thStyle}>SKU</th>
  <th style={thStyle}>Product</th>
  <th style={thStyle}>Brand</th>
  <th style={thStyle}>Category</th>
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
            currentProducts.map((product) => (
              <tr key={product.id}>
                <td style={tdStyle}>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "10px",
      objectFit: "cover",
    }}
  />
</td>

<td style={tdStyle}>{product.sku}</td>

<td style={tdStyle}>{product.name}</td>

<td style={tdStyle}>{product.brand}</td>

<td style={tdStyle}>{product.category}</td>

<td style={tdStyle}>₹{product.price}</td>

<td style={tdStyle}>{product.stock}</td>

<td style={tdStyle}>{product.status}</td>

    

                <td style={tdStyle}>
                  <button
  onClick={() => setSelectedProduct(product)}
  style={{
    marginRight: "10px",
    cursor: "pointer",
  }}
>
  👁️
</button>
                  <button
  onClick={() => duplicateProduct(product)}
  style={{
    marginRight: "10px",
    cursor: "pointer",
  }}
>
  📄
</button>
                  <button
  onClick={() => archiveProduct(product.id)}
  style={{
    marginRight: "10px",
    cursor: "pointer",
  }}
>
  📦
</button>
                  <button
  onClick={() => {
    setEditingProduct(product);
    setPage("addProduct");
  }}
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
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  }}
>
  <button
    disabled={currentPage === 1}
    onClick={() =>
      setCurrentPage(currentPage - 1)
    }
  >
    ◀ Prev
  </button>

  <span
    style={{
      color: "white",
      padding: "8px 15px",
    }}
  >
    {currentPage} / {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() =>
      setCurrentPage(currentPage + 1)
    }
  >
    Next ▶
  </button>
</div>
      </Card>
      <ViewProduct
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
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

