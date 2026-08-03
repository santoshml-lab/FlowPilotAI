import { useEffect, useState } from "react";

const API = "https://salespilot-l1d3.onrender.com";

export default function LowStock() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    async function load() {

      const res = await fetch(`${API}/low-stock`);

      const data = await res.json();

      setItems(data);

    }

    load();

  }, []);

  return (

    <div
      style={{
        background:"#1e293b",
        color:"white",
        padding:"20px",
        borderRadius:"15px"
      }}
    >

      <h2>⚠ Low Stock</h2>

      {items.map((item,index)=>(

        <div key={index} style={{marginBottom:"12px"}}>

          <strong>{item.name}</strong>

          <br/>

          Stock : {item.stock}

        </div>

      ))}

    </div>

  );

}
