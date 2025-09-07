import React from 'react';
import ServiceCard from '@/components/cards/ServiceCard';
import Hero from '@/components/hero/Hero';

const services = [
  { id: 'web-dev', icon: '💻', title: 'Web Development', desc: 'We build responsive, high-performing, and SEO-optimized websites that serve as powerful digital storefronts for your business.' },
  { id: 'mobile-apps', icon: '📱', title: 'Mobile App Development', desc: 'From iOS to Android, we develop native and hybrid mobile applications that offer seamless user experiences.' },
  { id: 'custom-software', icon: '⚙️', title: 'Custom Software & Systems', desc: 'Our team designs and builds tailor-made software solutions to streamline your unique workflows and boost productivity.' },
  { id: 'crm', icon: '📊', title: 'CRM & Task Management', desc: 'With our flagship WorkTrack App, we provide advanced tools for task tracking, customer relationship management, and data-driven analytics.' },
  { id: 'automation', icon: '🤖', title: 'Business Automation & AI', desc: 'We leverage API integrations and AI-driven strategies to automate your operations, reducing costs and increasing efficiency.' },
];

const ServicesPage = () => {
  return (
    <div className="space-y-16">
      <Hero
        title="Our Core Services"
        subtitle="Delivering comprehensive tech solutions to elevate your business."
        primaryCTA={{ text: 'Get a Quote', link: '/contact' }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} id={service.id}>
            <ServiceCard
              icon={<span>{service.icon}</span>}
              title={service.title}
              shortDescription={service.desc}
              link={`/services#${service.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
