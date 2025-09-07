import React from 'react';

// This function can be used for Static Site Generation (SSG)
// It would fetch all product slugs from a database/CMS
export async function generateStaticParams() {
  // For now, we'll just use a placeholder
  return [{ slug: 'worktrack-crm' }];
}

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // In a real app, you would fetch product data based on the slug
  const product = {
    title: 'WorkTrack CRM',
    longDesc: 'WorkTrack CRM is a comprehensive solution designed to enhance team productivity and streamline project management. It offers a suite of tools including advanced task tracking, real-time collaboration boards, and in-depth analytics to help you make data-driven decisions.',
    features: ['Task Management', 'Analytics Dashboard', 'Client Communication', 'Automated Reporting'],
    heroImage: '/placeholder.svg'
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <p className="text-xl mt-4">Slug: {slug}</p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p>{product.longDesc}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
      </div>

      {/* Placeholder for demo request form, reviews, etc. */}
    </div>
  );
};

export default ProductDetailPage;
