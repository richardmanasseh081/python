import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    total,
  } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 text-white px-6 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
      {/* CART ITEMS */}
      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                className="w-24 h-24 object-cover rounded"
              />

              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-purple-600">{item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <div className="bg-white p-6 rounded shadow h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span className="font-bold">₦{total}</span>
        </div>

        <Link
          to={"/Checkout"}
        >
        <button
          // onClick={() => alert("Checkout coming soon 🚀")}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded mb-3"
        >
          Proceed to Checkout
        </button>
        </Link>

        <button
          onClick={clearCart}
          className="w-full border border-red-500 text-red-500 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
