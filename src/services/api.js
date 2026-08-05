const API = "https://salespilot-l1d3.onrender.com";

export async function getDashboard() {

  const response = await fetch(`${API}/dashboard`);

  return await response.json();

}
export async function getNotifications() {
  const response = await fetch(`${API}/notifications`);
  return await response.json();
}
export async function getInvoices() {
  const response = await fetch(`${API}/invoices`);
  return await response.json();
}
export async function getSalesForecast() {
  const res = await fetch(`${API}/sales-forecast`);
  return await res.json();
}

