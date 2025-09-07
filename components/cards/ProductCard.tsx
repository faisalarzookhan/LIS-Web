import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  shortDescription: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, shortDescription, link }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{shortDescription}</p>
        <a href={link} className="text-primary font-semibold mt-4 inline-block">View Details</a>
      </div>
    </div>
  );
};

export default ProductCard;
