
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  async function saveProduct() {
    const { error } = await supabase.from("products").insert([
      {
        name,
        category,
        price,
        stock,
        image,
      },
    ]);

    if (error) {
      alert("❌ Error adding product");
    } else {
      alert("✅ Product Added Successfully");
      setName("");
      setCategory("");
      setPrice("");
      setStock("");
      setImage("");
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 Add Product</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br /><br />

      <button onClick={saveProduct}>
        ➕ Save Product
      </button>
    </div>
  );
}
