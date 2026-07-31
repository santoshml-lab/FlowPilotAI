export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "white",
    },
    success: {
      background: "#16a34a",
      color: "white",
    },
    danger: {
      background: "#ef4444",
      color: "white",
    },
    warning: {
      background: "#f59e0b",
      color: "white",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "12px 20px",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "15px",
        transition: "0.3s",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}
