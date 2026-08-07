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
  const features = [
    {
      icon: "🤖",
      title: "AI Assistant",
      desc: "Get instant business insights with AI.",
    },
    {
      icon: "📦",
      title: "Inventory",
      desc: "Track products in real time.",
    },
    {
      icon: "💰",
      title: "Sales",
      desc: "Manage invoices and sales easily.",
    },
    {
      icon: "📊",
      title: "Analytics",
      desc: "Powerful charts and business reports.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px",
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
        Why Choose FlowPilot AI?
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {features.map((item, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              textAlign: "center",
            }}
          >
            <h1>{item.icon}</h1>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  
    
      
        
      
