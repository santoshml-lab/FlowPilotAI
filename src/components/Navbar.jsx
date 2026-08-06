import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../lib/supabase";


export default function Navbar() {
  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
  const res = await fetch(
    "https://salespilot-l1d3.onrender.com/notifications"
  );

  const data = await res.json();

  console.log(data);   // 👈 Add this

  setNotifications(data);
  setCount(data.length);
  }

  
async function logout() {
  await supabase.auth.signOut();
  window.location.reload();
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

        <div style={{ position: "relative" }}>
          <div
            onClick={() => setOpen(!open)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            🔔
            <button
  onClick={toggleTheme}
  style={{
    background: "transparent",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: dark ? "white" : "#111827",
  }}
>
  {dark ? "🌙" : "☀️"}
</button>
            <button onClick={logout}>
  🚪 Logout
</button>

            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "11px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {count}
              </span>
            )}
          </div>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                width: "330px",
                maxHeight: "400px",
                overflowY: "auto",
                background: "#1e293b",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                zIndex: 999,
              }}
            >
              <h3>Notifications</h3>

              {notifications.length === 0 ? (
                <p>No notifications</p>
              ) : (
                notifications.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderBottom: "1px solid #334155",
                      padding: "10px 0",
                    }}
                  >
                    <strong>{item.title}</strong>

                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "5px",
                        color: "#cbd5e1",
                      }}
                    >
                      {item.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <span>👤 Admin</span>
      </div>
    </div>
  );
}
