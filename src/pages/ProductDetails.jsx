import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// SAME DATA SOURCE (important)
const data = {
  shoe1: [
    { id: 1, name: "Nike Air", price: "$120", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqg9h5LL6fHFyrg8ue73uUeM18TTybytrWTw&s" },
    { id: 2, name: "Adidas Run", price: "$110", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKankaSoaJXLBIoULpD6WqfQQvqMn56AvOcg&s" },
    { id: 3, name: "Puma Flex", price: "$100", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuQpl3KCtf8tjYU6X_6CtTUrm09I91piyfg&s" },
  ],
  shoe2: [
    { id: 4, name: "Jordan 1", price: "$180", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiI-Xh0_oOrxV0--JbKCzkRXuFvkoAeFXmA&s" },
    { id: 5, name: "Nike Dunk", price: "$150", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuR1l-Tg5lb-NacMLCFDquHv1Ol2kVCVOWaw&s" },
    { id: 6, name: "Forum", price: "$160", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdK309FIBVJZG7IQREVwxLf4N7HntXUtO7A&s" },
  ],
  shoe3: [
    { id: 7, name: "Timberland", price: "$200", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNop7gakZb6wcgl9bRETrKLFJKbM0HYtJmw&s" },
    { id: 8, name: "Dr Martens", price: "$190", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTto87PNtkmP3C6KW3iy3ustWb_PQBaWVuqA&s" },
    { id: 9, name: "Chelsea", price: "$170", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWQ_Eoeer2vNIYZW9z8_xqFMsl5-ZBZLs2w&s" },
  ],
};

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const allShoes = [
    ...data.shoe1,
    ...data.shoe2,
    ...data.shoe3,
  ];

  const product = allShoes.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow grid md:grid-cols-2 gap-6">
      <img
        src={product.img}
        className="w-full h-96 object-cover rounded"
      />

      <div>
        <h1 className="text-3xl font-bold mb-3">
          {product.name}
        </h1>

        <p className="text-2xl text-purple-600 font-semibold mb-4">
          {product.price}
        </p>

        <p className="text-gray-600 mb-6">
          High quality footwear designed for comfort, durability, and style.
        </p>

        <button
          onClick={handleAdd}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
