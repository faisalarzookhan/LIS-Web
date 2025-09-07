"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, shortDescription, link }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-5xl text-primary mb-5 flex justify-center items-center h-16 w-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-base mb-4">{shortDescription}</p>
      <a href={link} className="text-primary font-semibold mt-4 inline-block group">
        Learn More <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
