import { useNavigate } from "react-router-dom";

export default function ShoeCard({ shoe }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${shoe.id}`)}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={shoe.img}
        alt={shoe.name}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="mt-3 text-lg font-bold">{shoe.name}</h2>

      <p className="text-purple-600 font-semibold">
        {shoe.price}
      </p>
    </div>
  );
}
