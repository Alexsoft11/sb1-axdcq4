import { useState, useEffect } from 'react';
import type { CartItem } from '../../../types/product';

export function useCartStorage() {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  return {
    items,
    setItems
  };
}