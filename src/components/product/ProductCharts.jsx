import Card from "../ui/Card";

export default function ProductCharts() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <Card>
        <h3>📦 Products by Category</h3>

        <div
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  }}
>
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>Electronics</span>
      <span>75%</span>
    </div>

    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
        height: "10px",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: "75%",
          background: "#3b82f6",
          height: "100%",
        }}
      />
    </div>
  </div>

  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>Fashion</span>
      <span>45%</span>
    </div>

    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
        height: "10px",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: "45%",
          background: "#22c55e",
          height: "100%",
        }}
      />
    </div>
  </div>

  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>Accessories</span>
      <span>25%</span>
    </div>

    <div
      style={{
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
        height: "10px",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: "25%",
          background: "#f59e0b",
          height: "100%",
        }}
      />
    </div>
  </div>
</div>
        </div>
      </Card>

      <Card>
        <h3>🥧 Stock Distribution</h3>

        <div
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          Chart Coming Soon...
        </div>
      </Card>

      <Card
        style={{
          gridColumn: "1 / -1",
        }}
      >
        <h3>💰 Inventory Value by Brand</h3>

        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
          }}
        >
          Chart Coming Soon...
        </div>
      </Card>
    </div>
  );
}
