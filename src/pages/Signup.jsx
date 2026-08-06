import { useState } from "react";

export default function Signup({ goLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup() {

    alert("Account Created Successfully!");

    goLogin();

  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          color: "white",
        }}
      >
        <h1>🚀 Create FlowPilot Account</h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <button
          onClick={signup}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        >
          Create Account
        </button>

        <p
          style={{
            marginTop: "20px",
            cursor: "pointer",
            color: "#60a5fa",
          }}
          onClick={goLogin}
        >
          Already have an account? Login
        </p>

      </div>
    </div>
  );
}
