import { useState } from "react";

export default function AddCustomer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Customer Save Button Working!");
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>➕ Add Customer</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          marginTop: "25px",
        }}
      >
        <input
          name="name"
          placeholder="Customer Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          style={{
            ...inputStyle,
            height: "120px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Save Customer
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
};
