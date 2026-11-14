import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '@/data/products';

const CartContext = createContext(null);
const STORAGE_KEY = 'zandi-cart';

const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    // Drop anything that no longer exists or has no price
    return saved.filter((item) =>
      products.some((p) => p.id === item.productId && p.price != null)
    );
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works for this visit
    }
  }, [items]);

  const addItem = (productId, size = null, quantity = 1) => {
    const key = `${productId}__${size || ''}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { key, productId, size, quantity }];
    });
  };

  const updateQuantity = (key, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.key !== key)
        : prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    );
  };

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const clearCart = () => setItems([]);

  const detailedItems = useMemo(
    () =>
      items
        .map((i) => {
          const product = products.find((p) => p.id === i.productId);
          return product ? { ...i, product, lineTotal: product.price * i.quantity } : null;
        })
        .filter(Boolean),
    [items]
  );

  const count = detailedItems.reduce((sum, i) => sum + i.quantity, 0);
  const total = detailedItems.reduce((sum, i) => sum + i.lineTotal, 0);

  return (
    <CartContext.Provider
      value={{
        items: detailedItems,
        count,
        total,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
