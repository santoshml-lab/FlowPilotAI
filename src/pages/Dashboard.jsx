import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import "../styles/dashboard.css";
import { getDashboard } from "../services/api";
import { useEffect, useState } from "react";
import RevenueChart from "../components/dashboard/RevenueChart";
import { supabase } from "../lib/supabase";
import TopProductsChart from "../components/dashboard/TopProductsChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentSales from "../components/dashboard/RecentSales";
import LowStock from "../components/dashboard/LowStock";
import BestCustomer from "../components/dashboard/BestCustomer";
import TopProduct from "../components/dashboard/TopProduct";
import NotificationBell from "../components/dashboard/NotificationBell";
import SalesForecast from "../components/dashboard/SalesForecast";


export default function Dashboard() {
  const [stats, setStats] = useState({
  revenue: 0,
  customers: 0,
  products: 0,
  stock: 0,
  low_stock: 0,
});
  const [settings, setSettings] = useState({});
  useEffect(() => {

  async function loadData() {

    const data = await getDashboard();

    setStats(data);

  }

  loadData();
    async function loadSettings() {
  const { data } = await supabase
    .from("settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (data) {
    setSettings(data);
  }
}

loadSettings();

}, []);
  
  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
  }}
>
  {settings.logo_url && (
    <img
      src={settings.logo_url}
      alt="Logo"
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "12px",
        objectFit: "cover",
      }}
    />
  )}

  <div>
    <h2 style={{ margin: 0 }}>
      {settings.company_name}
    </h2>

    <p style={{ color: "#94a3b8", marginTop: "5px" }}>
      Owner: {settings.owner_name}
    </p>
  </div>
</div>
      <h1
        style={{
          fontSize: "38px",
          fontWeight: "700",
          marginBottom: "8px",
        }}
      >
        Welcome Back 👋
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        Here's what's happening with your business today.
      </p>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <StatCard
          title="Revenue"
          value={`₹${stats.revenue}`}
          icon="💰"
          color="#16a34a"
        />

        <StatCard
          title="Products"
          value={stats.products}
          icon="📦"
          color="#2563eb"
        />

        <StatCard
          title="Customers"
          value={stats.customers}
          icon="👥"
          color="#f59e0b"
        />

        <StatCard
          title="Sales"
          
          icon="📈"
          color="#ef4444"
        />
      </div>

      {/* Quick Actions */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <button className="quick-btn">➕ Add Customer</button>

        <button className="quick-btn">📦 Add Product</button>

        <button className="quick-btn">💰 Create Invoice</button>

        <button className="quick-btn">📊 Sales Report</button>
      </div>

      {/* Sales Chart */}

      <div style={{ marginTop: "30px" }}>
        <RevenueChart />
      </div>
      <div style={{ marginTop: "30px" }}>
  <TopProductsChart />
</div>

      {/* Dashboard Widgets */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        
          <RecentSales />

          
            
          
        

        <LowStock />
        <BestCustomer />
        <TopProduct />
          

          
            
          
        
      </div>

      <AIInsights />
      <SalesForecast />
      
  

    </div>
  );
}
