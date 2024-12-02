import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DashboardStats } from '../../components/admin/DashboardStats';
import { RecentOrders } from '../../components/admin/RecentOrders';
import { ProductStats } from '../../components/admin/ProductStats';

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RecentOrders />
          <ProductStats />
        </div>
      </div>
    </AdminLayout>
  );
}