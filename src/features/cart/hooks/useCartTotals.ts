import { useMemo } from 'react';
import type { CartItem } from '../../../types/product';

export function useCartTotals(items: CartItem[]) {
  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = items.reduce((sum, item) => {
      const cheapestMethod = item.shipping?.methods.reduce(
        (min, method) => (method.price < min ? method.price : min),
        Infinity
      ) || 0;
      return sum + cheapestMethod * item.quantity;
    }, 0);
    
    const tax = subtotal * 0.1; // 10% tax rate
    const total = subtotal + shipping + tax;

    return {
      subtotal,
      shipping,
      tax,
      total
    };
  }, [items]);

  return totals;
}