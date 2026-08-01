export default function Select({
  value,
  onChange,
  options,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #334155",
        background: "#1e293b",
        color: "white",
        fontSize: "15px",
      }}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
