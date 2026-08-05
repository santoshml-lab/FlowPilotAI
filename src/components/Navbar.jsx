import { useEffect, useState } from "react";

export default function Navbar() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    const res = await fetch(
      "https://salespilot-l1d3.onrender.com/notifications"
    );

    const data = await res.json();

    setCount(data.length);
  }

  return (
    <div
      style={{
        height: "70px",
        background: "#111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        color: "white",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <h2>📊 Dashboard</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            width: "250px",
          }}
        />

        <div
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          🔔

          {count > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                fontSize: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {count}
            </span>
          )}
        </div>

        <span>👤 Admin</span>
      </div>
    </div>
  );
}
