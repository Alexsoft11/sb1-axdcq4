import { useState, useCallback } from 'react';
import type { Product } from '../../../types/product';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc';

export function useProductSort() {
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');

  const sortProducts = useCallback((products: Product[]) => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating-desc':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });
  }, [sortOption]);

  return {
    sortOption,
    setSortOption,
    sortProducts
  };
}