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

export async function askBusinessAI(question) {

  const response = await fetch(
    `${API}/business-chat?question=${encodeURIComponent(question)}`
  );

  return await response.json();

}

export async function getBusinessAnalytics() {

  const response = await fetch(
    `${API}/business-analytics`
  );

  return await response.json();

}
export async function getRevenueChart() {
  const response = await fetch(`${API}/revenue-chart`);
  return await response.json();
}
export async function getTopProducts() {

  const response = await fetch(
    `${API}/top-products`
  );

  return await response.json();

}
  
