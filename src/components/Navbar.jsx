import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../lib/supabase";



export default function Navbar({ setPage }) {
  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();
  const [profilePic, setProfilePic] = useState("");
  const [userName, setUserName] = useState("User");
const [userEmail, setUserEmail] = useState("");
  
  
  
  useEffect(() => {
  loadNotifications();
  loadProfile();
}, []);
  
    
  

  async function loadNotifications() {
  const res = await fetch(
    "https://salespilot-l1d3.onrender.com/notifications"
  );

  const data = await res.json();

  console.log(data);   

  setNotifications(data);
  setCount(data.length);
  }

  
async function logout() {
  await supabase.auth.signOut();
  window.location.reload();
}

  async function loadProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("profiles")
    .select("full_name, avatar_url")
    .eq("id", user.id)
    .single();

  if (data?.full_name) {
  setUserName(data.full_name);
}

if (user?.email) {
  setUserEmail(user.email);
}
    
  
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
        <div
  style={{
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  }}
  onClick={() => setProfileOpen(!profileOpen)}
>
  <img
    src={
      profilePic ||
      "https://ui-avatars.com/api/?name=Admin"
    }
    alt="Profile"
    style={{
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #38bdf8",
    }}
  />

  <span>Admin ▼</span>

  {profileOpen && (
    <div
      style={{
        position: "absolute",
        top: "60px",
        right: 0,
        width: "220px",
        background: "#1e293b",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,.4)",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #334155",
          fontWeight: "bold",
        }}
      >
        👤 {userName}
        <div
  style={{
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "5px",
  }}
>
  {userEmail}
</div>
      </div>

      <div
  style={{
    padding: "12px 15px",
    cursor: "pointer",
  }}
  onClick={() => {
    setPage("profile");
    setProfileOpen(false);
  }}
>
  👤 My Profile
</div>
        
          
          
        
      
        
      

      <div
  style={{
    padding: "12px 15px",
    cursor: "pointer",
  }}
  onClick={() => {
    setPage("settings");
    setProfileOpen(false);
  }}
>
  ⚙️ Settings
</div>
        
          
          
        
      
        
      

      <div
        style={{
          padding: "12px 15px",
          cursor: "pointer",
        }}
        onClick={toggleTheme}
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </div>

      <div
        style={{
          padding: "12px 15px",
          color: "#ef4444",
          cursor: "pointer",
        }}
        onClick={logout}
      >
        🚪 Logout
      </div>
    </div>
  )}
</div>

        
  
    
    
    
  

  
      
    
  

  

      </div>
    </div>
  );
}
