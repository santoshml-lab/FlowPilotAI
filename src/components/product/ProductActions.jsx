import Button from "../ui/Button";

export default function ProductActions({
  editingProduct,
  onSave,
  onCancel,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "15px",
        marginTop: "25px",
      }}
    >
      <Button
        variant="danger"
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button
        variant="primary"
        onClick={onSave}
      >
        {editingProduct
          ? "💾 Update Product"
          : "➕ Save Product"}
      </Button>
    </div>
  );
}
