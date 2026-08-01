import Input from "../ui/Input";
import Select from "../ui/Select";

export default function BasicInfo({
  name,
  setName,
  sku,
  setSku,
  barcode,
  setBarcode,
  category,
  setCategory,
  brand,
  setBrand,
  supplier,
  setSupplier,
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        📦 Basic Information
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />

        <Input
          placeholder="Barcode"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />

        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            "Electronics",
            "Fashion",
            "Furniture",
            "Books",
            "Food",
            "Other",
          ]}
        />

        <Input
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <Input
          placeholder="Supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
      </div>
    </div>
  );
}
