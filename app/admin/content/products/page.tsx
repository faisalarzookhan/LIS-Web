"use client"
import React from 'react';
import DataTable from '@/components/ui/DataTable';

// Mock data - in a real app, this would be fetched from the API
const mockProducts = [
  { id: '1', title: 'WorkTrack CRM', slug: 'worktrack-crm', status: 'Published' },
  { id: '2', title: 'AutomatePro AI', slug: 'automate-pro', status: 'Draft' },
];

const AdminProductsPage = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'slug', label: 'Slug' },
    { key: 'status', label: 'Status' },
  ];

  const renderActions = (item: Record<string, any>) => (
    <div className="space-x-2">
      <button className="text-blue-500 hover:underline">Edit</button>
      <button className="text-red-500 hover:underline">Delete</button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Add New Product
        </button>
      </div>

      <DataTable
        columns={columns}
        data={mockProducts}
        actions={renderActions}
      />
    </div>
  );
};

export default AdminProductsPage;
