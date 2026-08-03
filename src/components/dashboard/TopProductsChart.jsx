import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { product: "Laptop", sold: 15 },
  { product: "Mouse", sold: 32 },
  { product: "Keyboard", sold: 20 },
  { product: "Monitor", sold: 8 },
];

export default function TopProductsChart() {
  return (
    <div className="card">
      <h2>🏆 Top Selling Products</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sold" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
