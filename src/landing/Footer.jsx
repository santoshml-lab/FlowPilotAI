export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "60px 40px 30px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        <div>
          <img
            src="/logo.png"
            alt="FlowPilot AI"
            style={{
              width: "170px",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            Smart Flow. Better Growth.
            <br />
            AI-powered CRM, Inventory,
            Analytics & Business Automation.
          </p>
        </div>

        <div>
          <h3>Product</h3>
          <p>Dashboard</p>
          <p>AI Analytics</p>
          <p>Reports</p>
          <p>Invoices</p>
        </div>

        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Pricing</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Email</p>
        </div>
      </div>

      <hr
        style={{
          margin: "35px 0",
          border: "1px solid #334155",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 FlowPilot AI. All Rights Reserved.
      </p>
    </footer>
  );
}
