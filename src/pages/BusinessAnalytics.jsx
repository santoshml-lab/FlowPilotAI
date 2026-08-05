import { useEffect, useState } from "react";
import { getBusinessAnalytics } from "../services/api";

export default function BusinessAnalytics() {

  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    const data = await getBusinessAnalytics();
    setAnalysis(data.analysis);
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
      <h1>📊 AI Business Analytics</h1>

      <div
        style={{
          background: "#1e293b",
          marginTop: "25px",
          padding: "25px",
          borderRadius: "15px",
          lineHeight: "1.8",
          whiteSpace: "pre-wrap",
        }}
      >
        {loading ? (
  "🤖 Analyzing your business..."
) : (
  <ul>
    {analysis.split("\n").map((line, index) =>
      line.trim() ? (
        <li key={index} style={{ marginBottom: "10px" }}>
          {line}
        </li>
      ) : null
    )}
  </ul>
)}
      </div>
    </div>
  );
}
