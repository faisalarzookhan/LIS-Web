import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// A simple card component for displaying stats
const StatCard = ({ title, value, icon }: { title: string; value: string; icon: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const AdminDashboardPage = async () => {
  // Fetch the session on the server to get user information
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Welcome back, {session?.user?.name || 'Admin'}!
      </h1>

      <p>Here&apos;s a snapshot of your site&apos;s activity.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard title="Total Visits (24h)" value="1,234" icon="📈" />
        <StatCard title="New Messages" value="5" icon="✉️" />
        <StatCard title="Pending Reviews" value="12" icon="⭐" />
      </div>

      {/* Placeholder for more advanced charts or activity feeds */}
      <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p>Activity feed coming soon...</p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
