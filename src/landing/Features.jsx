const features = [
  {
    icon: "🤖",
    title: "AI Business Assistant",
    desc: "Get instant AI-powered business advice and recommendations.",
  },
  {
    icon: "📊",
    title: "Business Analytics",
    desc: "Track revenue, customers, growth and performance in real time.",
  },
  {
    icon: "👥",
    title: "Customer CRM",
    desc: "Manage customers with complete profiles and history.",
  },
  {
    icon: "📦",
    title: "Inventory",
    desc: "Track products, stock and low inventory alerts.",
  },
  {
    icon: "💰",
    title: "Sales Tracking",
    desc: "Monitor sales, orders and business growth effortlessly.",
  },
  {
    icon: "🧾",
    title: "Smart Invoices",
    desc: "Generate beautiful invoices instantly with one click.",
  },
];

export default function Features() {
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
          color: "#111827",
        }}
      >
        Powerful Features
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              transition: ".3s",
            }}
          >
            <div style={{ fontSize: "45px" }}>
              {item.icon}
            </div>

            <h2
              style={{
                marginTop: "20px",
                color: "#111827",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                marginTop: "12px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
