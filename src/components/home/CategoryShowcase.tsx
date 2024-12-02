import React from 'react';
import { ShoppingBag, Smartphone, Watch, Home, Shirt, Gift } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-500' },
  { name: 'Accessories', icon: Watch, color: 'bg-purple-500' },
  { name: 'Home & Living', icon: Home, color: 'bg-green-500' },
  { name: 'Bags', icon: ShoppingBag, color: 'bg-yellow-500' },
  { name: 'Gifts', icon: Gift, color: 'bg-red-500' },
];

export function CategoryShowcase() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`${color} p-3 rounded-full text-white mb-4`}>
              <Icon size={24} />
            </div>
            <span className="font-medium text-gray-900">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}