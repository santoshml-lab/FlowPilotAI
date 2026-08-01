import Upload from "../ui/Upload";

export default function ProductImage({
  image,
  setImage,
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
        🖼️ Product Image
      </h2>

      <Upload
        onChange={(e) =>
          setImage(e.target.files[0])
        }
        preview={
          image instanceof File
            ? URL.createObjectURL(image)
            : image
        }
      />
    </div>
  );
}
