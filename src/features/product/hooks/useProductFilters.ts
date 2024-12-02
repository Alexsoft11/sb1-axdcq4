import { useState, useCallback } from 'react';
import type { Product } from '../../../types/product';

interface FilterState {
  category: string;
  priceRange: { min: number; max: number };
  sources: ('taobao' | '1688' | 'local')[];
}

export function useProductFilters() {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: { min: 0, max: Infinity },
    sources: ['taobao', '1688', 'local']
  });

  const updateCategory = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const updatePriceRange = (min: number, max: number) => {
    setFilters(prev => ({ ...prev, priceRange: { min, max } }));
  };

  const toggleSource = (source: 'taobao' | '1688' | 'local') => {
    setFilters(prev => ({
      ...prev,
      sources: prev.sources.includes(source)
        ? prev.sources.filter(s => s !== source)
        : [...prev.sources, source]
    }));
  };

  const applyFilters = useCallback((products: Product[]) => {
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange.min && 
                          (filters.priceRange.max === Infinity || product.price <= filters.priceRange.max);
      const matchesSource = filters.sources.includes(product.source);
      
      return matchesCategory && matchesPrice && matchesSource;
    });
  }, [filters]);

  return {
    filters,
    updateCategory,
    updatePriceRange,
    toggleSource,
    applyFilters
  };
}