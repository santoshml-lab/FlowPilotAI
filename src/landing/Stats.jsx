export default function Stats() {
  const stats = [
    { value: "5000+", label: "Customers" },
    { value: "₹1.2Cr+", label: "Revenue Managed" },
    { value: "25000+", label: "Invoices" },
    { value: "99%", label: "AI Accuracy" },
  ];

  return (
    <section
      style={{
        padding: "80px",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Trusted by Businesses
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#38bdf8",
                fontSize: "50px",
              }}
            >
              {item.value}
            </h1>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
