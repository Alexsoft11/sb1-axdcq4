import React from 'react';
import { ArrowUpDown } from 'lucide-react';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface ProductSortProps {
  onSort: (option: SortOption) => void;
  currentSort: SortOption;
}

export function ProductSort({ onSort, currentSort }: ProductSortProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <ArrowUpDown size={20} />
      <select
        value={currentSort}
        onChange={(e) => onSort(e.target.value as SortOption)}
        className="border rounded-md px-3 py-2"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}