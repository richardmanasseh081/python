export default function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order, index) => (
        <div key={index} className="bg-white p-4 mb-3 rounded shadow">
          <p>Total: ₦{order.total}</p>
          <p>Items: {order.items.length}</p>
        </div>
      ))}
    </div>
  );
}
