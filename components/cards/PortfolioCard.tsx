import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  image: string;
  client: string;
  type: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, client, type, link }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden group">
      <Link href={link}>
        <Image src={image} alt={`${client} - ${type}`} width={500} height={300} className="w-full h-48 object-cover"/>
      </Link>
      <div className="p-6">
        <p className="text-sm text-gray-500">{type}</p>
        <h3 className="text-2xl font-bold">{client}</h3>
        <Link href={link} className="text-primary font-semibold mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
