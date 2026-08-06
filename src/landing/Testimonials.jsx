export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      company: "Sharma Electronics",
      review:
        "FlowPilot AI transformed our inventory and sales management.",
    },
    {
      name: "Priya Verma",
      company: "Verma Fashion",
      review:
        "The AI Analytics feature helped us increase revenue significantly.",
    },
    {
      name: "Amit Patel",
      company: "Patel Traders",
      review:
        "Easy to use, fast and extremely professional. Highly recommended!",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 60px",
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
        What Our Customers Say
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>⭐⭐⭐⭐⭐</h2>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              "{item.review}"
            </p>

            <h3 style={{ marginTop: "25px" }}>
              {item.name}
            </h3>

            <small>{item.company}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
