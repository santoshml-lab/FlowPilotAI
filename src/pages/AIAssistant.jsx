import Card from "../components/ui/Card";

export default function AIAssistant() {
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
          <p style={{ color: "#94a3b8" }}>
            👋 Hello! I am FlowPilot AI.
            <br />
            Ask me anything about your business.
          </p>
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
            placeholder="Ask FlowPilot AI..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
            }}
          />

          <button>
            🚀 Send
          </button>
        </div>
      </Card>
    </div>
  );
}
