export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹499",
      features: [
        "Dashboard",
        "Customers",
        "Inventory",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹999",
      features: [
        "Everything in Starter",
        "AI Assistant",
        "Business Analytics",
        "Reports",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Users",
        "Custom AI",
        "Priority Support",
        "API Access",
      ],
    },
  ];

  return (
    <section
      style={{
        padding: "90px 80px",
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
        Pricing Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              textAlign: "center",
            }}
          >
            <h2>{plan.name}</h2>

            <h1
              style={{
                color: "#2563eb",
                margin: "20px 0",
              }}
            >
              {plan.price}
            </h1>

            {plan.features.map((feature, i) => (
              <p key={i}>✅ {feature}</p>
            ))}

            <button
              style={{
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
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
