import Input from "../ui/Input";
import Select from "../ui/Select";

export default function Inventory({
  stock,
  setStock,
  lowStockLimit,
  setLowStockLimit,
  status,
  setStatus,
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
        📦 Inventory
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Input
          placeholder="Current Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />

        <Input
          placeholder="Low Stock Limit"
          type="number"
          value={lowStockLimit}
          onChange={(e) => setLowStockLimit(e.target.value)}
        />

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            "Active",
            "Inactive",
            "Out of Stock",
          ]}
        />
      </div>
    </div>
  );
}
