import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch("https://dummyjson.com/products/category/groceries")
    .then(res => res.json())
    .then(data => setProducts(data.products));
}, []);
  console.log(products)
  return (
    <>
    <div className="w-[80%] m-auto"><div className="grid grid-cols-2 lg:grid-cols-8 gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="relative border p-3 rounded shadow">
          <div className="absolute top-0 left-1 text-white text-[10px] text-center w-[40px]">
  <div className="bg-blue-400 p-1 [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
    20% <br /> OFF
  </div>
</div>
          <img src={p.thumbnail} alt={p.title} className="h-32 w-full object-cover rounded" />
          <h2 className="font-bold mt-2">{p.title}</h2>
          <p className="text-gray-500 text-sm">{p.category}</p>
          <p className="text-green-600 font-semibold">₹{p.price}</p>
        </div>
      ))}
    </div>
    </div>
    
  </>);
}