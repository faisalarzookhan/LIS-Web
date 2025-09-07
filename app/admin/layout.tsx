import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminTopBar from '@/components/admin/AdminTopBar';
import { AuthProvider } from '../providers/AuthProvider'; // Assuming AuthProvider is needed here as well

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // The main RootLayout already includes providers, but if a nested provider
    // was needed for the admin section specifically, it would go here.
    // For now, we assume RootLayout's providers are sufficient.
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
