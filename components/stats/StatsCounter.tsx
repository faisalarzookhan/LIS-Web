"use client";
import React, { useState, useEffect } from 'react';

interface StatsCounterProps {
  label: string;
  value: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms

    if (count < value) {
      const timer = setTimeout(() => {
        // Increment the count. For larger numbers, we can jump by more than 1
        // to ensure the animation completes in roughly the same time.
        const increment = Math.max(1, Math.ceil(value / (duration / 50))); // Aim for ~40 steps
        setCount(prevCount => Math.min(value, prevCount + increment));
      }, 50); // Run every 50ms for a smoother feel

      return () => clearTimeout(timer);
    }
  }, [count, value]);

  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-primary">{count.toLocaleString()}{label === 'Client Retention' ? '%' : '+'}</p>
      <p className="text-lg mt-2">{label}</p>
    </div>
  );
};

export default StatsCounter;
