"use client"
import React from 'react';
import DataTable from '@/components/ui/DataTable';
import Link from 'next/link';

// Define a specific type for our product data
interface ProductData {
  id: string;
  title: string;
  slug: string;
  status: 'Published' | 'Draft';
}

// Mock data - in a real app, this would be fetched from the API
const mockProducts: ProductData[] = [
  { id: '1', title: 'WorkTrack CRM', slug: 'worktrack-crm', status: 'Published' },
  { id: '2', title: 'AutomatePro AI', slug: 'automate-pro', status: 'Draft' },
];

const AdminProductsPage = () => {
  // The columns now use `keyof ProductData` for type safety
  const columns: { key: keyof ProductData; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'slug', label: 'Slug' },
    { key: 'status', label: 'Status' },
  ];

  // The 'item' parameter is now used to create a unique link for editing
  const renderActions = (item: ProductData) => (
    <div className="space-x-2">
      <Link href={`/admin/content/products/edit/${item.id}`} className="text-blue-500 hover:underline">
        Edit
      </Link>
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
