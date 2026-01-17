import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import ShoeCard from "./components/ShoeCard";
import Modal from "./components/Modal";
  
// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import PaymentSlip from "./pages/PaymentSlip";
import OrderHistory from "./pages/OrderHistory";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
// import Receipt from "./pages/Receipt"; // if you are using it

export default function App() {
  const [category, setCategory] = useState("shoe1");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar setCategory={setCategory} />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <Routes>
          <Route path="/" element={<Home category={category} />} />

          {/* Product */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Cart Flow */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/ShoeCard" element={<ShoeCard />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/PaymentSlip" element={<PaymentSlip />} />
          {/* <Route path="/receipt" element={<Receipt />} /> */}

          {/* Orders */}
          <Route path="/orders" element={<OrderHistory />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />

          {/* Fallback */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
