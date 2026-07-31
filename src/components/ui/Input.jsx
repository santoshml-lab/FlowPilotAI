export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#1e293b",
        color: "white",
        outline: "none",
        fontSize: "15px",
        marginBottom: "15px",
      }}
    />
  );
}
