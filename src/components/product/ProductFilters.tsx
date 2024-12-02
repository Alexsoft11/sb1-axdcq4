import React from 'react';
import { Filter } from 'lucide-react';
import { useProductStore } from '../../store/useProductStore';
import { ProductSourceToggle } from '../../features/product/components/ProductSourceToggle';

export function ProductFilters() {
  const { 
    selectedSources, 
    toggleSource,
    categories,
    selectedCategory,
    setSelectedCategory,
    setPriceRange 
  } = useProductStore();

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-4">
        <ProductSourceToggle
          selectedSources={selectedSources}
          onToggle={toggleSource}
        />

        <div>
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`w-full text-left px-3 py-2 rounded ${
                selectedCategory === '' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded capitalize ${
                  selectedCategory === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => {
                const min = parseFloat(e.target.value);
                const max = parseFloat(
                  (e.target.nextElementSibling as HTMLInputElement).value || 'Infinity'
                );
                handlePriceRangeChange(min || 0, max);
              }}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => {
                const max = parseFloat(e.target.value);
                const min = parseFloat(
                  (e.target.previousElementSibling as HTMLInputElement).value || '0'
                );
                handlePriceRangeChange(min, max || Infinity);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}