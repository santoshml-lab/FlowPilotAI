import Card from "../ui/Card";

export default function ProductStats({ products }) {
  const totalProducts = products.length;

  const inventoryValue = products.reduce(
    (sum, product) => sum + Number(product.price || 0) * Number(product.stock || 0),
    0
  );

  const lowStock = products.filter(
    (product) =>
      product.stock > 0 &&
      product.stock <= (product.low_stock_limit || 5)
  ).length;

  const outOfStock = products.filter(
    (product) => product.stock <= 0
  ).length;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <Card>
        <h3>📦 Total Products</h3>
        <h1>{totalProducts}</h1>
      </Card>

      <Card>
        <h3>💰 Inventory Value</h3>
        <h1>₹{inventoryValue.toLocaleString()}</h1>
      </Card>

      <Card>
        <h3>⚠️ Low Stock</h3>
        <h1>{lowStock}</h1>
      </Card>

      <Card>
        <h3>❌ Out of Stock</h3>
        <h1>{outOfStock}</h1>
      </Card>
    </div>
  );
}
