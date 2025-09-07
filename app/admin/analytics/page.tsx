"use client"
import React from 'react';
import ChartCard from '@/components/ui/ChartCard';

const AdminAnalyticsPage = () => {
  // Mock data for Daily Visits (Line Chart)
  const dailyVisitsData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Unique Visits',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Mock data for Top Pages (Bar Chart)
  const topPagesData = {
    labels: ['/', '/services', '/products', '/contact', '/about'],
    datasets: [
      {
        label: '# of Views',
        data: [1200, 950, 800, 400, 250],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Site Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard titleText="Daily Visits (Last 7 Days)" type="line" data={dailyVisitsData} />
        <ChartCard titleText="Top Pages by Views" type="bar" data={topPagesData} />
      </div>

      {/* You can add more analytics widgets here */}
      {/* For example, a GeoMap component for location data */}
    </div>
  );
};

export default AdminAnalyticsPage;
