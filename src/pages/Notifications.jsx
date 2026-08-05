import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

export default function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    async function loadNotifications() {

      const data = await getNotifications();

      setNotifications(data);

    }

    loadNotifications();

  }, []);

  return (

    <div style={{ padding: "30px", color: "white" }}>

      <h1>🔔 Notifications</h1>

      {notifications.map((item) => (

        <div
          key={item.id}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px"
          }}
        >

          <h3>{item.title}</h3>

          <p>{item.message}</p>

          <small>{item.type}</small>

        </div>

      ))}

    </div>

  );

}
