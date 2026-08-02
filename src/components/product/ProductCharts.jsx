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
          <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: "20px",
  }}
>
  <div
    style={{
      width: "170px",
      height: "170px",
      borderRadius: "50%",
      background:
        "conic-gradient(#22c55e 0% 60%, #f59e0b 60% 85%, #ef4444 85% 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "110px",
        height: "110px",
        borderRadius: "50%",
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      Stock
    </div>
  </div>

  <div
    style={{
      display: "flex",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "center",
      fontSize: "14px",
    }}
  >
    <span>🟢 In Stock</span>
    <span>🟡 Low Stock</span>
    <span>🔴 Out Of Stock</span>
  </div>
</div>
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
          <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
  }}
>

  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "6px",
      }}
    >
      <span>Apple</span>
      <strong>₹4,50,000</strong>
    </div>

    <div
      style={{
        height: "12px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "90%",
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
        marginBottom: "6px",
      }}
    >
      <span>Samsung</span>
      <strong>₹3,20,000</strong>
    </div>

    <div
      style={{
        height: "12px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "65%",
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
        marginBottom: "6px",
      }}
    >
      <span>Boat</span>
      <strong>₹1,25,000</strong>
    </div>

    <div
      style={{
        height: "12px",
        background: "#1e293b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "30%",
          background: "#f59e0b",
          height: "100%",
        }}
      />
    </div>
  </div>

</div>
        </div>
      </Card>
    </div>
  );
}
