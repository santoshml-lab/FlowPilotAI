export default function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      company: "TechNova",
      review:
        "FlowPilot AI completely transformed our business workflow. Highly recommended!",
    },

    {
      name: "Priya Verma",
      company: "PV Enterprises",
      review:
        "Inventory and Sales management became super easy using FlowPilot AI.",
    },

    {
      name: "Amit Patel",
      company: "Patel Traders",
      review:
        "The AI Assistant gives amazing business insights. Loved it!",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 80px",
        background: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        What Our Clients Say
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {reviews.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#f8fafc",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2>{item.name}</h2>

            <p
              style={{
                color: "#2563eb",
                fontWeight: "600",
              }}
            >
              {item.company}
            </p>

            <p
              style={{
                marginTop: "15px",
                color: "#475569",
              }}
            >
              "{item.review}"
            </p>

            <div
              style={{
                marginTop: "15px",
                color: "#f59e0b",
                fontSize: "20px",
              }}
            >
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

