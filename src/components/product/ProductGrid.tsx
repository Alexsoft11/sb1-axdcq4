import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product, CartOperations } from '../../types';

interface ProductGridProps {
  products: Product[];
  isCompact?: boolean;
  onAddToCart: CartOperations['addToCart'];
}

export function ProductGrid({ products, isCompact = false, onAddToCart }: ProductGridProps) {
  return (
    <div className={isCompact ? "lg:col-span-2" : undefined}>
      <div className={`grid grid-cols-1 ${isCompact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}