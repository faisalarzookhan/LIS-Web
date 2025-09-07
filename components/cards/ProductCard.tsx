import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  title: string;
  shortDescription: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, shortDescription, link }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <Link href={link}>
        <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover"/>
      </Link>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{shortDescription}</p>
        <Link href={link} className="text-primary font-semibold mt-4 inline-block">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
