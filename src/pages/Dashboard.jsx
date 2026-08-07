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
  const [userName, setUserName] = useState("User");
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

  async function loadUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  if (data?.full_name) {
    setUserName(data.full_name);
  }
}

loadUser();
  const hour = new Date().getHours();

let greeting = "Good Evening 🌙";

if (hour < 12) greeting = "Good Morning ☀️";
else if (hour < 17) greeting = "Good Afternoon 🌤️";
  
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
      <div
  style={{
    background: "#1e293b",
    padding: "25px",
    borderRadius: "18px",
    marginTop: "20px",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
  }}
>
  <h1
    style={{
      fontSize: "36px",
      margin: 0,
    }}
  >
    👋 Welcome Back, {userName}
  </h1>

  <p
    style={{
      color: "#94a3b8",
      fontSize: "18px",
      marginTop: "10px",
    }}
  >
    {greeting}
  </p>

  <p
    style={{
      color: "#38bdf8",
      marginTop: "12px",
      fontSize: "16px",
    }}
  >
    🚀 Keep growing your business today!
  </p>
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
    marginTop: "25px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h4 style={{ color: "#94a3b8", margin: 0 }}>
      💰 Today's Revenue
    </h4>

    <h2 style={{ color: "#22c55e" }}>
      ₹{stats.revenue}
    </h2>
  </div>

  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h4 style={{ color: "#94a3b8", margin: 0 }}>
      👥 Customers
    </h4>

    <h2 style={{ color: "#38bdf8" }}>
      {stats.customers}
    </h2>
  </div>

  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h4 style={{ color: "#94a3b8", margin: 0 }}>
      📦 Products
    </h4>

    <h2 style={{ color: "#f59e0b" }}>
      {stats.products}
    </h2>
  </div>

  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "15px",
    }}
  >
    <h4 style={{ color: "#94a3b8", margin: 0 }}>
      ⚠ Low Stock
    </h4>

    <h2 style={{ color: "#ef4444" }}>
      {stats.low_stock}
    </h2>
  </div>
</div>
</div>
        
          
          
          

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
