import React from 'react';
import { Layout } from '../components/layout/Layout';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { BrandPartners } from '../components/home/BrandPartners';
import { NewArrivals } from '../components/home/NewArrivals';

export function StoreFront() {
  return (
    <Layout>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-4 space-y-16 py-8">
        <CategoryShowcase />
        <FeaturedProducts />
        <NewArrivals />
        <BrandPartners />
      </div>
    </Layout>
  );
}