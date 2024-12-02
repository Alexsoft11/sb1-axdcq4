import { useState, useMemo } from 'react';
import { products as initialProducts } from '../data/products';
import type { Product } from '../types';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export function useProducts() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');

  const categories = useMemo(() => {
    return Array.from(new Set(initialProducts.map(p => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter(product => 
        (!selectedCategory || product.category === selectedCategory) &&
        product.price >= priceRange.min &&
        product.price <= priceRange.max
      )
      .sort((a, b) => {
        switch (sortOption) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [selectedCategory, priceRange, sortOption]);

  const updatePriceRange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return {
    products: filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    updatePriceRange,
    sortOption,
    setSortOption,
  };
}