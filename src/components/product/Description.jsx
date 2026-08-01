import Textarea from "../ui/Textarea";

export default function Description({
  description,
  setDescription,
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
        📝 Product Description
      </h2>

      <Textarea
        placeholder="Write product description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
      />
    </div>
  );
}
