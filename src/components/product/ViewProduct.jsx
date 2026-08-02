import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ViewProduct({
  product,
  onClose,
}) {
  if (!product) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <Card
        style={{
          width: "700px",
          maxWidth: "95%",
          padding: "25px",
        }}
      >
        <h2>📦 Product Details</h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            marginTop: "20px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          <div>
            <p><b>Name:</b> {product.name}</p>
            <p><b>SKU:</b> {product.sku}</p>
            <p><b>Barcode:</b> {product.barcode}</p>
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Supplier:</b> {product.supplier}</p>

            <hr />

            <p><b>Cost Price:</b> ₹{product.cost_price}</p>
            <p><b>Selling Price:</b> ₹{product.price}</p>

            <p><b>Stock:</b> {product.stock}</p>

            <p><b>Status:</b> {product.status}</p>

            <p><b>Description:</b></p>

            <p>{product.description}</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "25px",
            textAlign: "right",
          }}
        >
          <Button
            variant="danger"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
}
