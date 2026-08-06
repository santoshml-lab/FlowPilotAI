export default function FAQ() {
  const faqs = [
    {
      q: "Is FlowPilot AI free?",
      a: "Yes, Starter Plan is completely free.",
    },
    {
      q: "Can I use it on mobile?",
      a: "Yes, FlowPilot AI is fully responsive.",
    },
    {
      q: "Does AI generate reports?",
      a: "Yes, AI automatically analyzes your business and generates insights.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, your data is securely stored using Supabase.",
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
        Frequently Asked Questions
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {faqs.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              marginBottom: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3>{item.q}</h3>
            <p
              style={{
                color: "#64748b",
                marginTop: "10px",
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
