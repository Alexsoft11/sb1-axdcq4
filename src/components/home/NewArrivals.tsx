import React from 'react';
import { ProductCard } from '../product/ProductCard';
import { useProducts } from '../../hooks/useProducts';

export function NewArrivals() {
  const { products } = useProducts();
  const newProducts = products.slice(0, 3);

  return (
    <section className="bg-gray-50 -mx-4 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}