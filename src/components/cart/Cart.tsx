import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartItemComponent } from './CartItem';
import type { CartItem, CartOperations } from '../../types';
import { formatPrice, calculateCartTotal } from '../../utils/price';

interface CartProps extends CartOperations {
  items: CartItem[];
}

export function Cart({ items, removeFromCart, updateQuantity }: CartProps) {
  const total = calculateCartTotal(items);

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <ShoppingBag className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">
          Total: ${formatPrice(total)}
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}