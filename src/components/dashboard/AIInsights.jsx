import { useEffect, useState } from "react";

const API = "https://salespilot-l1d3.onrender.com";

export default function AIInsights() {

  const [insights, setInsights] = useState("Loading AI Insights...");

  useEffect(() => {

    async function loadInsights() {

      try {

        const response = await fetch(`${API}/insights`);

        const data = await response.json();

        setInsights(data.insights);

      } catch (error) {

        setInsights("❌ Failed to load AI Insights");

      }

    }

    loadInsights();

  }, []);

  return (

    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >

      <h2>🤖 AI Business Insights</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          lineHeight: "1.7",
          color: "#e2e8f0",
        }}
      >
        {insights}
      </pre>

    </div>

  );

}
