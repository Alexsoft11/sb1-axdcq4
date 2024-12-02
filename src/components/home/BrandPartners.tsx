import React from 'react';

const brands = [
  { name: 'Taobao', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80' },
  { name: '1688', logo: 'https://images.unsplash.com/photo-1614680376408-12c9d0a92dc1?auto=format&fit=crop&q=80' },
  { name: 'Local Sellers', logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80' }
];

export function BrandPartners() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}