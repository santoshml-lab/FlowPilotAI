import { useEffect, useState } from "react";
import { getSalesForecast } from "../../services/api";

export default function SalesForecast() {

  const [forecast, setForecast] = useState("");

  useEffect(() => {
    loadForecast();
  }, []);

  async function loadForecast() {
    const data = await getSalesForecast();
    setForecast(data.forecast);
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h2>📈 AI Sales Forecast</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
        }}
      >
        {forecast}
      </pre>
    </div>
  );
}
