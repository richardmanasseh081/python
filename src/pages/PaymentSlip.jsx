import React from "react";

export default function PaymentSlip({ order }) {
  // fallback data if none is passed
  const data = order || {
    reference: "PS-" + Date.now(),
    customer: "John Doe",
    date: new Date().toLocaleDateString(),
    items: [
      { name: "Nike Dunk", qty: 2, price: 150 },
      { name: "Adidas Slide", qty: 1, price: 80 },
    ],
  };

  const subtotal = data.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        
        {/* Header */}
        <div className="text-center border-b pb-4">
          <h1 className="text-2xl font-bold text-purple-600">
            ShoeStore Receipt
          </h1>
          <p className="text-sm text-gray-500">
            Payment Successful
          </p>
        </div>

        {/* Info */}
        <div className="mt-4 text-sm">
          <p><span className="font-semibold">Reference:</span> {data.reference}</p>
          <p><span className="font-semibold">Customer:</span> {data.customer}</p>
          <p><span className="font-semibold">Date:</span> {data.date}</p>
        </div>

        {/* Items */}
        <div className="mt-4 border-t pt-3">
          {data.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm mb-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">Qty: {item.qty}</p>
              </div>
              <p>${item.price * item.qty}</p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t mt-4 pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span className="text-purple-600">${subtotal}</span>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Thank you for shopping with us 💜  
          <br />
          www.shoestore.com
        </div>

        {/* Print Button */}
        <button
          onClick={() => window.print()}
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
