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


export default function App() {
  const [page, setPage] = useState("dashboard");
  const [editingProduct, setEditingProduct] = useState(null);

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
        display: "flex",
        background: "#0f172a",
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
