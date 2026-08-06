export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "Free",
      features: [
        "Dashboard",
        "Customers",
        "Inventory",
        "AI Assistant",
      ],
    },
    {
      title: "Professional ⭐",
      price: "₹999 / month",
      features: [
        "Everything in Starter",
        "AI Analytics",
        "Invoices",
        "Reports",
        "Unlimited Customers",
        "Priority Support",
      ],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: [
        "Unlimited Everything",
        "Custom AI",
        "Dedicated Manager",
        "24×7 Support",
      ],
    },
  ];

  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Pricing
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "20px",
              boxShadow: "0 15px 35px rgba(0,0,0,.1)",
              border:
                plan.title.includes("Professional")
                  ? "3px solid #2563eb"
                  : "1px solid #e5e7eb",
            }}
          >
            <h2>{plan.title}</h2>

            <h1
              style={{
                color: "#2563eb",
                marginTop: "15px",
              }}
            >
              {plan.price}
            </h1>

            <ul style={{ marginTop: "25px" }}>
              {plan.features.map((item, i) => (
                <li key={i} style={{ marginBottom: "12px" }}>
                  ✅ {item}
                </li>
              ))}
            </ul>

            <button
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "14px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
