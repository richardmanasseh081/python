import React from "react";


export default function Modal({ shoe, close }) {
return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
<div className="bg-white p-6 rounded-lg w-96">
<h2 className="text-xl font-bold mb-2">{shoe.name}</h2>
<img src={shoe.img} className="mb-3 rounded" />
<p className="font-semibold">Price: {shoe.price}</p>
<p className="text-gray-600">{shoe.desc}</p>
<button onClick={close} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Close</button>
</div>
</div>
);
}