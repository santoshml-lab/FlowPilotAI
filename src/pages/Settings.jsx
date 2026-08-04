import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    company_name: "",
    owner_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const res = await fetch("https://salespilot-l1d3.onrender.com/settings");
    const data = await res.json();

    if (Object.keys(data).length > 0) {
      setForm(data);
    }
  }

  async function saveSettings() {
    await fetch("https://salespilot-l1d3.onrender.com/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("✅ Settings Saved Successfully");
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>⚙ Business Settings</h1>

      <div style={{ display: "grid", gap: "15px", maxWidth: "500px", marginTop: "30px" }}>
        <input
          placeholder="Company Name"
          value={form.company_name}
          onChange={(e) =>
            setForm({ ...form, company_name: e.target.value })
          }
        />

        <input
          placeholder="Owner Name"
          value={form.owner_name}
          onChange={(e) =>
            setForm({ ...form, owner_name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <button onClick={saveSettings}>
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}
