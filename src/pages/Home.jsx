import ShoeCard from "../components/ShoeCard";

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

export default function Home({ category }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data[category].map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
}
