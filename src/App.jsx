import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
        }}
      >
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
