"use client";
import React, { useState, useEffect } from 'react';

interface StatsCounterProps {
  label: string;
  value: number;
}

// A simple counter animation component
const StatsCounter: React.FC<StatsCounterProps> = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / value));
    if (count < value) {
      const timer = setTimeout(() => {
        setCount(prevCount => prevCount + 1);
      }, stepTime);
      return () => clearTimeout(timer);
    }
  }, [count, value]);

  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-primary">{count}+</p>
      <p className="text-lg mt-2">{label}</p>
    </div>
  );
};

export default StatsCounter;
