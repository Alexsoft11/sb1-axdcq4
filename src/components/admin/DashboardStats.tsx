import React from 'react';
import { DollarSign, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$23,456',
    change: '+12.5%',
    icon: DollarSign,
    trend: 'up'
  },
  {
    name: 'Total Orders',
    value: '156',
    change: '+8.2%',
    icon: ShoppingCart,
    trend: 'up'
  },
  {
    name: 'Products',
    value: '2,345',
    change: '+23.1%',
    icon: Package,
    trend: 'up'
  },
  {
    name: 'Conversion Rate',
    value: '3.2%',
    change: '-2.1%',
    icon: TrendingUp,
    trend: 'down'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <Icon className={
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                } size={24} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 ml-2">vs last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}