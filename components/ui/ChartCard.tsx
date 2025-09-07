"use client";
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Register all the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = 'line' | 'bar';

interface ChartCardProps {
  titleText: string;
  type: ChartType;
  data: ChartData<ChartType>;
  options?: ChartOptions<ChartType>;
}

const ChartCard: React.FC<ChartCardProps> = ({ titleText, type, data, options }) => {
  const ChartComponent = type === 'line' ? Line : Bar;

  const defaultOptions: ChartOptions<ChartType> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: titleText,
        font: {
            size: 16,
        }
      },
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="relative h-80 w-full">
        <ChartComponent options={options || defaultOptions} data={data} />
      </div>
    </div>
  );
};

export default ChartCard;
