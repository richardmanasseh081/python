import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ setCategory }) {
  const navigate = useNavigate();

  const handleClick = (cat) => {
    setCategory(cat);
    navigate("/");
  };

  return (
    <div className="w-86 bg-black text-white p-6 space-y-4">
      <h1 className="text-5xl font-bold text-purple-400">SHOES</h1>

      <button onClick={() => handleClick("shoe1")} className="block text-2xl">
        Snickers
      </button>
      <button onClick={() => handleClick("shoe2")} className="block text-2xl">
        Sandals
      </button>
      <button onClick={() => handleClick("shoe3")} className="block text-2xl">
        Vals
      </button>

      <NavLink to="/cart" className="block mt-6 text-yellow-400 ">
        🛒 Cart
      </NavLink>
    </div>
  );
}
