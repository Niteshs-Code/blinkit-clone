import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);
  console.log(products)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="border p-3 rounded shadow">
          <img src={p.thumbnail} alt={p.title} className="h-32 w-full object-cover rounded" />
          <h2 className="font-bold mt-2">{p.title}</h2>
          <p className="text-gray-500 text-sm">{p.category}</p>
          <p className="text-green-600 font-semibold">₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}