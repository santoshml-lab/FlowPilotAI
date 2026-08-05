import { useEffect, useState } from "react";
import { getRevenueChart } from "../../services/api";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadChart();
  }, []);

  async function loadChart() {
    const chart = await getRevenueChart();
    setData(chart);
  }

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "25px",
      }}
    >
      <h2 style={{ color: "white" }}>
        📈 Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
  
