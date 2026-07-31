export default function Card({ children }) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "20px",
        padding: "22px",
        border: "1px solid #334155",
        boxShadow: "0 12px 30px rgba(0,0,0,.25)",
        transition: "0.3s",
      }}
    >
      {children}
    </div>
  );
}
