import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // { productId: { item, qty } }

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (existing) {
        return {
          ...prev,
          [item.id]: { ...item, qty: existing.qty + 1 },
        };
      }
      return {
        ...prev,
        [item.id]: { ...item, qty: 1 },
      };
    });
  };

  const decreaseFromCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (!existing) return prev;

      if (existing.qty === 1) {
        const { [item.id]: _, ...rest } = prev;
        return rest; // remove item
      }

      return {
        ...prev,
        [item.id]: { ...item, qty: existing.qty - 1 },
      };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = Object.values(cart).reduce(
    (sum, p) => sum + p.qty * p.price,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};