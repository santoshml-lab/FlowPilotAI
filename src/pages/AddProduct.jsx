import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function AddProduct({
  editingProduct,
  setEditingProduct,
  setPage,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || "");
      setCategory(editingProduct.category || "");
      setPrice(editingProduct.price || "");
      setStock(editingProduct.stock || "");
      setImage(editingProduct.image || "");
    }
  }, [editingProduct]);

  async function uploadImage(file) {
  if (!file) return "";

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (error) {
    alert(error.message);
    return "";
  }

  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  return data.publicUrl;
  }

  async function saveProduct() {
    let error;

    if (editingProduct) {
      ({ error } = await supabase
        .from("products")
        .update({
          name,
          category,
          price,
          stock,
          image,
        })
        .eq("id", editingProduct.id));
    } else {
      ({ error } = await supabase
        .from("products")
        .insert([
          {
            name,
            category,
            price,
            stock,
            image,
          },
        ]));
    }

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      editingProduct
        ? "✅ Product Updated Successfully"
        : "✅ Product Added Successfully"
    );

    setEditingProduct(null);

    setName("");
    setCategory("");
    setPrice("");
    setStock("");
    setImage("");

    setPage("products");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        {editingProduct ? "✏️ Edit Product" : "📦 Add Product"}
      </h1>

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
  type="file"
  accept="image/*"
  onChange={(e) => setImage(e.target.files[0])}
/>
        
        
        
      
      <br /><br />

      <button onClick={saveProduct}>
        {editingProduct ? "💾 Update Product" : "➕ Save Product"}
      </button>
    </div>
  );
}
