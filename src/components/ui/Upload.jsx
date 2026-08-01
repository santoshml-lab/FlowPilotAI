export default function Upload({
  onChange,
  preview,
}) {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
      />

      {preview && (
        <div style={{ marginTop: "15px" }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "2px solid #334155",
            }}
          />
        </div>
      )}
    </div>
  );
}
