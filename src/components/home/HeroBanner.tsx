import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
          alt="Shopping"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Discover Global Products at Local Prices
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Shop directly from Taobao, 1688, and local sellers - all in one place
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Start Shopping
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}