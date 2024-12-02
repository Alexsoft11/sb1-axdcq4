import React from 'react';
import { ProductCard } from '../product/ProductCard';
import { useProducts } from '../../hooks/useProducts';

export function FeaturedProducts() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}