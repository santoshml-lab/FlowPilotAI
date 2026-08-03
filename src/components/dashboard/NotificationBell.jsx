import { useEffect, useState } from "react";

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    const res = await fetch(
      "https://salespilot-l1d3.onrender.com/notifications"
    );

    const data = await res.json();

    setNotifications(data);
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h2>🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        notifications.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "12px",
              marginTop: "10px",
              borderBottom: "1px solid #334155",
            }}
          >
            <strong>{item.title}</strong>
            <br />
            {item.message}
          </div>
        ))
      )}
    </div>
  );
}
