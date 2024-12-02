import React from 'react';
import type { ProductVariant } from '../../../types/product';

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant?: ProductVariant;
  onSelect: (variant: ProductVariant) => void;
}

export function ProductVariantSelector({ 
  variants, 
  selectedVariant, 
  onSelect 
}: ProductVariantSelectorProps) {
  const attributes = Object.keys(variants[0]?.attributes || {});

  return (
    <div className="space-y-4">
      {attributes.map(attr => (
        <div key={attr} className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 capitalize">
            {attr}
          </label>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(variants.map(v => v.attributes[attr]))).map(value => (
              <button
                key={value}
                onClick={() => {
                  const variant = variants.find(v => v.attributes[attr] === value);
                  if (variant) onSelect(variant);
                }}
                className={`px-3 py-1 rounded-md border text-sm ${
                  selectedVariant?.attributes[attr] === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}