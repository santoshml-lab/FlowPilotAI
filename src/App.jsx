import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useTheme } from "./context/ThemeContext";
import { supabase } from "./lib/supabase";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import LandingPage from "./landing/LandingPage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
import Notifications from "./pages/Notifications";
import BusinessAI from "./pages/BusinessAI";
import BusinessAnalytics from "./pages/BusinessAnalytics";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

export default function App() {
  const { dark } = useTheme();

  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setLoggedIn(!!session);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
        return <Inventory setPage={setPage} />;

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
        case "profile":
        return <Profile />;

      default:
        return <Dashboard />;
    }
    }
    return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Login */}
      <Route
        path="/login"
        element={
          <Login
            onLogin={() => setLoggedIn(true)}
          />
        }
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          loggedIn ? (
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
                  width: "calc(100% - 260px)",
                }}
              >
                <Navbar />
                {renderPage()}
              </div>
            </div>
          ) : (
            <Login onLogin={() => setLoggedIn(true)} />
          )
        }
      />

    </Routes>
  );
              }

  
