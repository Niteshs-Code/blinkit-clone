import React, { useEffect, useState } from "react";


[
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "womens-dresses",
  "mens-shirts",
  "shoes",
  "watches",
  "motorcycle",
  "lighting"
]

export default function ProductsByCategory() {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState({});

  // Step 1: Fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Step 2: Fetch products for each category
  useEffect(() => {
    const fetchAll = async () => {
      const results = {};
      for (let category of categories) {
        try {
          const res = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const data = await res.json();
          results[category] = data.products;
        } catch (err) {
          console.error("Error fetching:", category, err);
          results[category] = [];
        }
      }
      setAllProducts(results);
    };

    if (categories.length > 0) {
      fetchAll();
    }
  }, [categories]);

  return (
    <div className="p-4">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          {/* Section heading */}
          <h2 className="text-xl font-bold mb-4 capitalize">{category[0]}</h2>

          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allProducts[category]?.length > 0 ? (
              allProducts[category].map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-3 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-32 object-contain mb-2"
                  />
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm">₹{item.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No products found</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}




































// export default function ProductList() {
//   const [products, setProducts] = useState([]);

//  useEffect(() => {
//   fetch("https://dummyjson.com/products/category/groceries")
//     .then(res => res.json())
//     .then(data => setProducts(data.products));
// }, []);
//   console.log(products)
//   return (
//     <>
//     <div className="w-[80%] m-auto"><div className="grid grid-cols-2 lg:grid-cols-8 gap-4 p-4">
//       {products.map((p) => (
//         <div key={p.id} className="relative border p-3 rounded shadow">
//           <div className="absolute top-0 left-1 text-white text-[10px] text-center w-[40px]">
//   <div className="bg-blue-400 p-1 [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]">
//     20% <br /> OFF
//   </div>
// </div>
//           <img src={p.thumbnail} alt={p.title} className="h-32 w-full object-cover rounded" />
//           <h2 className="font-bold mt-2">{p.title}</h2>
//           <p className="text-gray-500 text-sm">{p.category}</p>
//           <p className="text-green-600 font-semibold">₹{p.price}</p>
//         </div>
//       ))}
//     </div>
//     </div>
    
//   </>);
// }