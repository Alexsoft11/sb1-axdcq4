import React from 'react';
import { ShoppingCart, Star, Box } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const sourceColor = {
    taobao: 'text-orange-500',
    '1688': 'text-blue-500',
    local: 'text-green-500'
  }[product.source];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${sourceColor} bg-white shadow-sm`}>
          {product.source.toUpperCase()}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        
        {product.rating && (
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Star className="text-yellow-400" size={16} />
            <span className="ml-1">{product.rating}</span>
            {product.reviews && (
              <span className="ml-2">({product.reviews} reviews)</span>
            )}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {product.stock > 0 ? (
              <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart size={20} />
                Add
              </button>
            ) : (
              <span className="text-red-500 text-sm font-medium">Out of Stock</span>
            )}
          </div>
        </div>
        
        {product.shipping && (
          <div className="mt-3 flex items-center text-sm text-gray-600">
            <Box size={16} className="mr-1" />
            <span>
              Ships in {product.shipping.methods[0]?.estimatedDays} days
            </span>
          </div>
        )}
      </div>
    </div>
  );
}