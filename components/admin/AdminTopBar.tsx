import React from 'react';

const AdminTopBar = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>
      <div>
        {/* User menu, notifications, etc. can go here */}
        <p>Welcome, Admin</p>
      </div>
    </header>
  );
};

export default AdminTopBar;
