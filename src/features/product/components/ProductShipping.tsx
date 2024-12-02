import React from 'react';
import { Truck, Package } from 'lucide-react';
import type { ShippingInfo } from '../../../types/product';

interface ProductShippingProps {
  shipping: ShippingInfo;
}

export function ProductShipping({ shipping }: ProductShippingProps) {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-2">
        <Truck size={18} className="text-gray-500" />
        <h3 className="font-medium">Shipping Information</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Package size={16} className="text-gray-400" />
          <span>
            {shipping.weight}kg
            ({shipping.dimensions.length}x{shipping.dimensions.width}x{shipping.dimensions.height}cm)
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Shipping Methods:</h4>
        {shipping.methods.map((method, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 rounded-lg border border-gray-200"
          >
            <span>{method.name}</span>
            <div className="text-right">
              <span className="block font-medium">${method.price.toFixed(2)}</span>
              <span className="text-sm text-gray-500">
                {method.estimatedDays} days
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}