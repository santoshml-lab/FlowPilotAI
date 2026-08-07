export default function FAQ() {
  const faqs = [
    {
      q: "Is FlowPilot AI free?",
      a: "Yes, you can start with our free trial.",
    },
    {
      q: "Can I manage inventory?",
      a: "Yes, FlowPilot AI includes complete inventory management.",
    },
    {
      q: "Does it include AI?",
      a: "Yes, AI Assistant and Business Analytics are built in.",
    },
    {
      q: "Can multiple employees use it?",
      a: "Yes, Professional and Enterprise plans support multiple users.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 80px",
        background: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Frequently Asked Questions
      </h1>

      {faqs.map((item, i) => (
        <div
          key={i}
          style={{
            background: "#f8fafc",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>
  );
}
