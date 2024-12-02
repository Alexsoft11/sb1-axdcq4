import React from 'react';
import { format } from 'date-fns';

const orders = [
  {
    id: '1',
    customer: 'John Doe',
    date: new Date(),
    total: 234.56,
    status: 'completed'
  },
  {
    id: '2',
    customer: 'Jane Smith',
    date: new Date(),
    total: 129.99,
    status: 'processing'
  },
  {
    id: '3',
    customer: 'Bob Johnson',
    date: new Date(),
    total: 567.89,
    status: 'pending'
  }
];

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  processing: 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800'
};

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Order ID</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Total</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">#{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">
                  {format(order.date, 'MMM d, yyyy')}
                </td>
                <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[order.status as keyof typeof statusColors]
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}