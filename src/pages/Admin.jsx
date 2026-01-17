import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    img: "",
  });

  const addProduct = () => {
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", img: "" });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          placeholder="Name"
          className="border p-2 w-full mb-2"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          className="border p-2 w-full mb-2"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          className="border p-2 w-full mb-2"
          value={form.img}
          onChange={e => setForm({ ...form, img: e.target.value })}
        />
        <button
          onClick={addProduct}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {products.map(p => (
        <div key={p.id} className="bg-white p-3 rounded shadow mb-2">
          {p.name} — {p.price}
        </div>
      ))}
    </div>
  );
}
