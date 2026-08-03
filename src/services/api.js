const API = "https://salespilot-l1d3.onrender.com";

export async function getDashboard() {

  const response = await fetch(`${API}/dashboard`);

  return await response.json();

}
