import Input from "../ui/Input";

export default function Pricing({
  costPrice,
  setCostPrice,
  price,
  setPrice,
}) {
  const profit =
    Number(price || 0) - Number(costPrice || 0);

  const margin =
    Number(costPrice || 0) > 0
      ? ((profit / Number(costPrice)) * 100).toFixed(2)
      : 0;

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
        💰 Pricing
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Input
          placeholder="Cost Price"
          type="number"
          value={costPrice}
          onChange={(e) => setCostPrice(e.target.value)}
        />

        <Input
          placeholder="Selling Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Input
          placeholder="Profit"
          value={`₹${profit}`}
          readOnly
        />

        <Input
          placeholder="Profit Margin"
          value={`${margin}%`}
          readOnly
        />
      </div>
    </div>
  );
}
