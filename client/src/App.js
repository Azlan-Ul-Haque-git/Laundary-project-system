import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/orders");
    setOrders(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get("http://localhost:5000/api/orders/stats");
    setStats(res.data);
  };

  const createOrder = async () => {
    await axios.post("http://localhost:5000/api/orders", {
      customerName: name,
      phone: phone,
      items: [{ type: "Shirt", quantity: 2, price: 10 }]
    });
    fetchOrders();
    fetchStats();
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
    fetchOrders();
    fetchStats();
  };

  useEffect(() => {
    fetchOrders();
    fetchStats();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      <h1>🧺 Laundry System</h1>

      {/* DASHBOARD */}
      <h2>Dashboard</h2>
      <p>Total Orders: {stats.totalOrders}</p>
      <p>Total Revenue: ₹{stats.totalRevenue}</p>

      {/* CREATE */}
      <h2>Create Order</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Phone" onChange={e => setPhone(e.target.value)} />
      <button onClick={createOrder}>Create</button>

      {/* SEARCH */}
      <h2>Search</h2>
      <input
        placeholder="Search by name or phone"
        onChange={e => setSearch(e.target.value)}
      />

      {/* ORDERS */}
      <h2>Orders</h2>

      {orders
        .filter(o =>
          o.customerName.toLowerCase().includes(search.toLowerCase()) ||
          o.phone.includes(search)
        )
        .map(o => (
          <div key={o.id} style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10,
            borderRadius: 10
          }}>
            <p><b>{o.customerName}</b> ({o.phone})</p>
            <p>Status: {o.status}</p>
            <p>Total: ₹{o.totalAmount}</p>

            <select onChange={(e) => updateStatus(o.id, e.target.value)}>
              <option>Change Status</option>
              <option>RECEIVED</option>
              <option>PROCESSING</option>
              <option>READY</option>
              <option>DELIVERED</option>
            </select>
          </div>
        ))}
    </div>
  );
}

export default App;