import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function OrderSummary() {
  const { cart } = useCart();
  // const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >
          <span>
            {item.name} × {item.quantity}
          </span>
          <span>₦{item.price * item.quantity}</span>
        </div>
      ))}

      <div className="flex justify-between font-bold text-xl mt-4">
        <span>Total</span>
        <span className="text-purple-600">₦{total}</span>
      </div>

      {/* ✅ REAL NAVIGATION */}
      <button
        onClick={() => navigate("/checkout")}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
