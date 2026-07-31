import { useState } from "react";

export default function Customers() {
  const [customers] = useState([]);

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
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>👥 Customers</h1>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          + Add Customer
        </button>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Customer..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "25px",
        }}
      />

      {customers.length === 0 ? (
        <div
          style={{
            background: "#1e293b",
            padding: "40px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>No Customers Found</h2>
          <p>Add your first customer to get started.</p>
        </div>
      ) : (
        customers.map((customer) => (
          <div key={customer.id}>
            {customer.name}
          </div>
        ))
      )}
    </div>
  );
}
