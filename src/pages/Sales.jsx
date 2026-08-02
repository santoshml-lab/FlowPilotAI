import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/ui/Button";


export default function Sales() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [todaySales, setTodaySales] = useState(0);
const [totalOrders, setTotalOrders] = useState(0);
const [productsSold, setProductsSold] = useState(0);
const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
  loadData();
  loadDashboard();
}, []);
    
  

  async function loadData() {
    const { data: customerData } = await supabase
      .from("customers")
      .select("*");

    const { data: productData } = await supabase
      .from("products")
      .select("*");

    setCustomers(customerData || []);
    setProducts(productData || []);
  }
  async function loadDashboard() {
  const { data } = await supabase
    .from("sales")
    .select("*");

  if (!data) return;

  setTotalOrders(data.length);

  const revenue = data.reduce(
    (sum, sale) => sum + Number(sale.total),
    0
  );

  setTodaySales(revenue);

  const qty = data.reduce(
    (sum, sale) => sum + Number(sale.quantity),
    0
  );

  setProductsSold(qty);

  const uniqueCustomers = [
    ...new Set(data.map((sale) => sale.customer_id)),
  ];

  setCustomerCount(uniqueCustomers.length);
  }

  
  async function createSale() {
  if (!selectedCustomer || !selectedProduct || !quantity) {
    alert("Please fill all fields");
    return;
  }

  const product = products.find(
    (p) => p.id == selectedProduct
  );

  if (!product) return;

  if (Number(product.stock) < Number(quantity)) {
    alert("Not enough stock");
    return;
  }

  const total =
    Number(product.price) * Number(quantity);

  // Save Sale
  const { error } = await supabase
    .from("sales")
    .insert([
      {
        customer_id: selectedCustomer,
        product_id: selectedProduct,
        quantity: Number(quantity),
        total: total,
      },
    ]);

  if (error) {
    alert(error.message);
    return;
  }
    const invoiceNo = "INV-" + Date.now();

await supabase
  .from("invoices")
  .insert([
    {
      invoice_no: invoiceNo,
      sale_id: 0,
      customer_name:
        customers.find(
          (c) => c.id == selectedCustomer
        )?.name,
      total: total,
      status: "Paid",
    },
  ]);

  // Update Stock
  await supabase
    .from("products")
    .update({
      stock:
        Number(product.stock) -
        Number(quantity),
    })
    .eq("id", product.id);

  alert("✅ Sale Created Successfully");

  setSelectedCustomer("");
  setSelectedProduct("");
  setQuantity(1);

  loadData();
    loadDashboard();
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>🛒 Sales Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Card>
          <h3>💰 Today's Sales</h3>
          <h1>₹{todaySales}</h1>
        </Card>

        <Card>
          <h3>🧾 Total Orders</h3>
          <h1>{totalOrders}</h1>
        </Card>

        <Card>
          <h3>📦 Products Sold</h3>
          <h1>{productsSold}</h1>
        </Card>

        <Card>
          <h3>👥 Customers</h3>
          <h1>{customerCount}</h1>
        </Card>
      </div>

      <Card
        style={{
          marginTop: "30px",
        }}
      >
        <h2>🛒 Create New Sale</h2>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <select
            value={selectedCustomer}
            onChange={(e) =>
              setSelectedCustomer(e.target.value)
            }
          >
            <option>Select Customer</option>

            {customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            ))}
          </select>

          <select
            value={selectedProduct}
            onChange={(e) =>
              setSelectedProduct(e.target.value)
            }
          >
            <option>Select Product</option>

            {products.map((product) => (
              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
            placeholder="Quantity"
          />

          <Button onClick={createSale}>
  🛒 Create Sale
</Button>
                      
        </div>
      </Card>

    </div>
  );
}
