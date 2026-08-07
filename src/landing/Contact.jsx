export default function Contact() {
  return (
    <section
      style={{
        padding: "90px 80px",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px" }}>Get In Touch</h1>

      <p style={{ marginTop: "20px", color: "#cbd5e1" }}>
        Have questions? We'd love to hear from you.
      </p>

      <div style={{ marginTop: "40px" }}>
        <input
          placeholder="Your Name"
          style={{
            width: "300px",
            padding: "12px",
            margin: "10px",
            borderRadius: "10px",
          }}
        />

        <input
          placeholder="Email"
          style={{
            width: "300px",
            padding: "12px",
            margin: "10px",
            borderRadius: "10px",
          }}
        />

        <br />

        <textarea
          placeholder="Message"
          rows="5"
          style={{
            width: "620px",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
          }}
        />

        <br />

        <button
          style={{
            marginTop: "20px",
            padding: "14px 35px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
