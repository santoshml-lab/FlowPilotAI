import { useState } from "react";
import { askBusinessAI } from "../services/api";

export default function BusinessAI() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {

    if (!question) return;

    setLoading(true);

    const data = await askBusinessAI(question);

    setAnswer(data.answer);

    setLoading(false);

  }

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >

      <h1>🤖 FlowPilot AI Business Consultant</h1>

      <textarea
        rows={5}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your business question..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />

      <button
        onClick={askAI}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "30px",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          {answer}
        </div>
      )}

    </div>
  );
}
