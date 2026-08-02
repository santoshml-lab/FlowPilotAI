import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import BasicInfo from "../components/product/BasicInfo";
import Pricing from "../components/product/Pricing";
import Inventory from "../components/product/Inventory";
import Description from "../components/product/Description";
import ProductImage from "../components/product/ProductImage";
import ProductActions from "../components/product/ProductActions";

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
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [supplier, setSupplier] = useState("");
  const [costPrice, setCostPrice] = useState("");
 const [lowStockLimit, setLowStockLimit] = useState(5);
const [barcode, setBarcode] = useState("");
const [description, setDescription] = useState("");
const [status, setStatus] = useState("Active");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || "");
      setCategory(editingProduct.category || "");
      setPrice(editingProduct.price || "");
      setStock(editingProduct.stock || "");
      setImage(editingProduct.image || "");
      setSku(editingProduct.sku || "");
setBrand(editingProduct.brand || "");
setSupplier(editingProduct.supplier || "");
setCostPrice(editingProduct.cost_price || "");
setLowStockLimit(editingProduct.low_stock_limit || 5);
setBarcode(editingProduct.barcode || "");
setDescription(editingProduct.description || "");
setStatus(editingProduct.status || "Active");
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
    const imageUrl = await uploadImage(image);

    if (editingProduct) {
      ({ error } = await supabase
        .from("products")
        .update({
  name,
  category,
  price,
  stock,
  image: imageUrl,
  sku,
brand,
supplier,
cost_price: costPrice,
low_stock_limit: lowStockLimit,
barcode,
description,
status,        
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
            image: imageUrl,
            sku,
brand,
supplier,
cost_price: costPrice,
low_stock_limit: lowStockLimit,
barcode,
description,
status,
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
    setImage(null);

    setPage("products");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        {editingProduct ? "✏️ Edit Product" : "📦 Add Product"}
      </h1>
      <BasicInfo
  name={name}
  setName={setName}
  sku={sku}
  setSku={setSku}
  barcode={barcode}
  setBarcode={setBarcode}
  category={category}
  setCategory={setCategory}
  brand={brand}
  setBrand={setBrand}
  supplier={supplier}
  setSupplier={setSupplier}
/> 
      
      <Pricing
  costPrice={costPrice}
  setCostPrice={setCostPrice}
  price={price}
  setPrice={setPrice}
/>

      <Inventory
  stock={stock}
  setStock={setStock}
  lowStockLimit={lowStockLimit}
  setLowStockLimit={setLowStockLimit}
  status={status}
  setStatus={setStatus}
/>
      <Description
  description={description}
  setDescription={setDescription}
/>
      <ProductImage
  image={image}
  setImage={setImage}
/>

           
        
      
      <ProductActions
  editingProduct={editingProduct}
  onSave={saveProduct}
  onCancel={() => {
    setEditingProduct(null);
    setPage("products");
  }}
/>

      
        
      
    </div>
  );
}
