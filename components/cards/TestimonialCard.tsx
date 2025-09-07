import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  photo: string;
  quote: string;
  rating: number; // e.g., 4.5
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ photo, quote, rating, name, company }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-700">
      <div className="flex items-center mb-4">
        <Image src={photo} alt={name} width={64} height={64} className="w-16 h-16 rounded-full object-cover mr-4"/>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>
      <p className="italic">&quot;{quote}&quot;</p>
      <div className="flex justify-end mt-4 text-yellow-500">
        {/* Placeholder for stars */}
        <span>{'★'.repeat(Math.floor(rating))}</span>
        <span>{'☆'.repeat(5 - Math.floor(rating))}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
