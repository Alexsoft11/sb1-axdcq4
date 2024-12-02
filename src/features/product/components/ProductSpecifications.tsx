import React from 'react';
import { ClipboardList } from 'lucide-react';

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <ClipboardList size={18} className="text-gray-500" />
        <h3 className="font-medium">Specifications</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className="text-gray-600 capitalize">{key}:</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}