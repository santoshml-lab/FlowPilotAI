import { useState } from "react";

export default function Login({ onLogin, goSignup }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {

    if (
      email === "admin@flowpilot.com" &&
      password === "admin123"
    ) {
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }

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
          width: "400px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "15px",
          color: "white",
        }}
      >

        <h1>🚀 FlowPilot AI</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginTop:"15px"
          }}
        />

        <button
          onClick={login}
          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px"
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop:"20px",
            cursor:"pointer",
            color:"#60a5fa"
          }}
          onClick={goSignup}
        >
          Create Account
        </p>

      </div>

    </div>
  );
}
