import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Inventory from "./pages/Inventory";
import InventoryHistory from "./pages/InventoryHistory";
import Sales from "./pages/Sales";
import Invoice from "./pages/Invoice";
import Reports from "./pages/Reports";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import BusinessAI from "./pages/BusinessAI";
import BusinessAnalytics from "./pages/BusinessAnalytics";
import { useTheme } from "./context/ThemeContext";


export default function App() {
  const [page, setPage] = useState("dashboard");
  const [editingProduct, setEditingProduct] = useState(null);
  const { dark } = useTheme();

  function renderPage() {
    switch (page) {
      case "customers":
        return <Customers />;

      case "addCustomer":
        return <AddCustomer />;

      case "products":
  return (
    <Products
      setPage={setPage}
      setEditingProduct={setEditingProduct}
    />
  );
        

      case "addProduct":
  return (
    <AddProduct
      editingProduct={editingProduct}
      setEditingProduct={setEditingProduct}
      setPage={setPage}
    />
  );
        case "inventory":
  return (
    <Inventory
      setPage={setPage}
    />
  );
        case "inventoryHistory":
  return <InventoryHistory />;
        case "sales":
  return <Sales />;
        case "invoice":
  return <Invoice />;
        case "notifications":
  return <Notifications />;
        case "reports":
  return <Reports />;
        case "businessAI":
  return <BusinessAI />;
        case "businessAnalytics":
  return <BusinessAnalytics />;
        case "ai":
  return <AIAssistant />;
        case "settings":
  return <Settings />;
        
  
        

      default:
        return <Dashboard />;
    }
  }

  return (
    <div
  style={{
    background: dark ? "#0f172a" : "#f8fafc",
    color: dark ? "white" : "#111827",
    minHeight: "100vh",
  }}
>
      
        
        
      
    
      <Sidebar setPage={setPage} />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
        }}
      >
        <Navbar />

        {renderPage()}
      </div>
    </div>
  );
}
