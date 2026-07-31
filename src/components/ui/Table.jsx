export default function Table({ headers, children }) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #334155",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#0f172a",
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: "16px",
                  textAlign: "left",
                  color: "#94a3b8",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
