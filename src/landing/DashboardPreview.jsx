export default function DashboardPreview() {
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
          marginBottom: "20px",
        }}
      >
        Powerful Dashboard
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Everything you need to manage your business in one place.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "900px",
            background: "#1e293b",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 20px 40px rgba(0,0,0,.4)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div style={card}>
              <h3>💰 Revenue</h3>
              <h1>₹2.4L</h1>
            </div>

            <div style={card}>
              <h3>👥 Customers</h3>
              <h1>1250</h1>
            </div>

            <div style={card}>
              <h3>📦 Products</h3>
              <h1>320</h1>
            </div>

            <div style={card}>
              <h3>🤖 AI Score</h3>
              <h1>94%</h1>
            </div>
          </div>

          <div
            style={{
              height: "300px",
              borderRadius: "15px",
              background:
                "linear-gradient(135deg,#2563eb,#22c55e)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            📊 Dashboard Screenshot
          </div>
        </div>
      </div>
    </section>
  );
}

const card = {
  background: "#334155",
  borderRadius: "15px",
  padding: "20px",
  textAlign: "center",
};
