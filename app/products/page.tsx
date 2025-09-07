import React from 'react';
import ProductCard from '@/components/cards/ProductCard';
import Hero from '@/components/hero/Hero';

const products = [
  {
    slug: 'worktrack-crm',
    image: '/placeholder.svg',
    title: 'WorkTrack CRM',
    shortDescription: 'The ultimate tool for task tracking, team collaboration, and project analytics. Boost your productivity and streamline your workflow.',
  },
  // Add more products here as they are developed
];

const ProductsPage = () => {
  return (
    <div className="space-y-16">
      <Hero
        title="Our Innovative Product Suite"
        subtitle="Tools designed to solve real-world business challenges and drive growth."
        primaryCTA={{ text: 'Request a Demo', link: '/contact' }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.slug}
            image={product.image}
            title={product.title}
            shortDescription={product.shortDescription}
            link={`/products/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
