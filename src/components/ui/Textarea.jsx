export default function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #334155",
        background: "#1e293b",
        color: "white",
        fontSize: "15px",
        resize: "vertical",
        outline: "none",
      }}
    />
  );
}
