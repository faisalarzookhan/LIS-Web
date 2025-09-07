import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AdminTopBar from '@/components/admin/AdminTopBar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
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
