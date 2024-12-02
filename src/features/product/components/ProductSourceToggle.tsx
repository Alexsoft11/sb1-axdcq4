import React from 'react';
import { ShoppingBag, Globe, Store } from 'lucide-react';

interface ProductSourceToggleProps {
  selectedSources: Array<'taobao' | '1688' | 'local'>;
  onToggle: (source: 'taobao' | '1688' | 'local') => void;
}

export function ProductSourceToggle({ selectedSources, onToggle }: ProductSourceToggleProps) {
  const sources = [
    { id: 'taobao' as const, label: 'Taobao', icon: Globe, color: 'orange' },
    { id: '1688' as const, label: '1688', icon: ShoppingBag, color: 'blue' },
    { id: 'local' as const, label: 'Local', icon: Store, color: 'green' }
  ];

  return (
    <div className="flex gap-2 mb-4">
      {sources.map(({ id, label, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => onToggle(id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            selectedSources.includes(id)
              ? `bg-${color}-50 border-${color}-200 text-${color}-700`
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}