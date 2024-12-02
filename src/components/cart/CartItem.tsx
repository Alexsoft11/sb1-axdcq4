import React from 'react';
import { X } from 'lucide-react';
import type { CartItem as CartItemType } from '../../types';
import { formatPrice } from '../../utils/price';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export function CartItemComponent({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">${formatPrice(item.price)}</p>
        <div className="flex items-center gap-2 mt-2">
          <select
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}