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
