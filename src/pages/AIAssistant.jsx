import Card from "../components/ui/Card";
import { useState } from "react";

export default function AIAssistant() {
  const API_URL = "https://salespilot-l1d3.onrender.com/chat";

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hello! I am FlowPilot AI. Ask me anything about your business.",
    },
  ]);

  async function sendMessage() {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(
  `${API_URL}?question=${encodeURIComponent(prompt)}`
);

const data = await res.json();

setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    text: data.answer,
  },
]);
    

      setPrompt("");
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "❌ Server Error",
        },
      ]);
    }

    setLoading(false);
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
      <h1>🤖 FlowPilot AI Assistant</h1>

      <Card
        style={{
          marginTop: "25px",
          padding: "20px",
        }}
      >
        <h3>💬 AI Chat</h3>

        <div
          style={{
            height: "400px",
            background: "#1e293b",
            borderRadius: "10px",
            padding: "15px",
            overflowY: "auto",
            marginTop: "20px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
              }}
            >
              <b>
                {msg.role === "user" ? "🧑 You" : "🤖 AI"}
              </b>

              <p>{msg.text}</p>
            </div>
          ))}

          {loading && <p>🤖 Thinking...</p>}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Ask FlowPilot AI..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <button onClick={sendMessage}>
            🚀 Send
          </button>
        </div>
      </Card>
    </div>
  );
}
