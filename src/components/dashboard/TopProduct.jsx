import { useEffect, useState } from "react";

const API = "https://salespilot-l1d3.onrender.com";

export default function TopProduct() {

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function load() {

      const res = await fetch(`${API}/top-product`);

      const data = await res.json();

      setProduct(data);

    }

    load();

  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div
      style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"15px",
        color:"white"
      }}
    >
      <h2>🏆 Top Selling Product</h2>

      <h3>{product.name}</h3>

      <p>Sold : {product.sold} Units</p>

      <p>Revenue : ₹{product.revenue}</p>

    </div>
  );
  }
