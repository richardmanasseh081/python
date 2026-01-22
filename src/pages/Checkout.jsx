import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const payWithPaystack = () => {
    if (!email) {
      alert("Enter your email");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_live_d0027d2f028205f2b2eeab6bae13dbf9576d4a6f", // 🔴 YOUR LIVE PUBLIC KEY
      email,
      amount: total * 100, // Paystack uses kobo
      currency: "NGN",
      ref: "ORDER_" + Date.now(),

      callback: function (response) {
        alert("Payment successful!");

        clearCart();
        navigate("/orders");
      },

      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={payWithPaystack}
          className="bg-green-600 text-white w-full py-3 rounded text-lg"
        >
          Pay ${total.toLocaleString()}
        </button>
      </div>
    </div>
  );
}
