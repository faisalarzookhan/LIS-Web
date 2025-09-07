"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; link: string; };
  secondaryCTA?: { text: string; link: string; };
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, primaryCTA, secondaryCTA }) => {
  return (
    <section className="text-center py-24 md:py-32 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-dark dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <a href={primaryCTA.link} className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
          {primaryCTA.text}
        </a>
        {secondaryCTA && (
          <a href={secondaryCTA.link} className="w-full sm:w-auto bg-transparent border-2 border-gray-300 dark:border-gray-600 text-dark dark:text-white font-bold py-3 px-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg">
            {secondaryCTA.text}
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
