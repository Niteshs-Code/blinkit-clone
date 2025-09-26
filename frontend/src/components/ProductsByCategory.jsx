import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState, useEffect } from "react";

const customSections = {
  "Beauty & Personal Care": ["fragrances", "skincare"],
  "Electronics": ["smartphones", "laptops"],
  "Clothing": ["mens-shirts", "womens-dresses", "shoes"],
  "Home & Living": ["home-decoration", "furniture", "lighting"],
  "Food & Groceries": ["groceries"],
};

export default function ProductsBySection() {
  const [allProducts, setAllProducts] = useState({});
  const [quantities, setQuantities] = useState({}); // store productId -> quantity

  useEffect(() => {
    const fetchAll = async () => {
      const results = {};

      for (let [section, categories] of Object.entries(customSections)) {
        results[section] = [];

        for (let category of categories) {
          try {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            results[section] = [...results[section], ...data.products]; // merge products
          } catch (err) {
            console.error("Error fetching:", category, err);
          }
        }
      }

      setAllProducts(results);
    };

    fetchAll();
  }, []);

  // Increase quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        // remove if 0
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  return (
    <div className="lg:w-[80%] m-auto w-[95%] mt-30">
      {Object.keys(customSections).map((section) => (
        <div key={section} className="mb-12 pb-2">
          <h2 className="text-2xl ml-2 font-bold mb-1">{section}</h2>

          <div className="flex overflow-x-auto gap-x-4 scrollbar-hide">
            {allProducts[section]?.length > 0 ? (
              allProducts[section].map((item) => {
                const qty = quantities[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0 lg:border-1 lg:border-gray-300 rounded-xl p-3 shadow-sm hover:shadow-md transition w-48"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-50 object-contain mb-2 border-1 border-gray-200 lg:border-none rounded-2xl"
                    />
                    <p className="font-medium text-sm">
                      {item.title.length > 20
                        ? item.title.substring(0, 20) + "..."
                        : item.title}
                    </p>

                    <div className="mt-7 flex justify-between items-center">
                      <p className="text-gray-600 text-sm font-semibold">₹{item.price}</p>

                      {qty === 0 ? (
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="text-sm text-green-700 b px-4 py-1 border-1 border-green-600 cursor-pointer rounded-[7px] font-bold h-8"
                        >
                          ADD
                        </button>
                      ) : (
                        <div className="flex items-center border bg-green-600 rounded-[7px] px-2 p-[0.4rem] border-none">
                          <button onClick={() => decreaseQty(item.id)}>
                            <FaMinus className="text-[12px] cursor-pointer text-white font-semibold" />
                          </button>
                          <p className="mx-2 font-bold text-white text-sm">
                            {qty}
                          </p>
                          <button onClick={() => increaseQty(item.id)}>
                            <FaPlus className="text-[12px] cursor-pointer text-white font-semibold" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
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