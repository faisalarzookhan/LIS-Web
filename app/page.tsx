"use client";
import Hero from '@/components/hero/Hero';
import ServiceCard from '@/components/cards/ServiceCard';
import ProductCard from '@/components/cards/ProductCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import StatsCounter from '@/components/stats/StatsCounter';
import { motion } from 'framer-motion';

const coreServices = [
  { icon: '💻', title: 'Web Development', desc: 'Responsive, high-performing, SEO-optimized sites.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native/hybrid apps for iOS, Android.' },
  { icon: '⚙️', title: 'Custom Software', desc: 'Tailor-made workflows and productivity tools.' },
  { icon: '📊', title: 'CRM Systems', desc: 'Task tracking, analytics, and automation.' },
  { icon: '🤖', title: 'Business Automation', desc: 'API integrations and AI-driven operations.' },
];

const coreQualities = [
    { icon: '🔐', title: 'Total Security' },
    { icon: '🧬', title: 'True Uniqueness' },
    { icon: '⚙️', title: 'Reliability' },
    { icon: '🚀', title: 'Performance' },
    { icon: '🧠', title: 'Future-Ready' },
    { icon: '👑', title: 'Client Experience' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-32">
      <Hero
        title="Where Innovation Meets Execution."
        subtitle="Empowering Businesses with Technology that is Secure, Unique, and Limitless."
        primaryCTA={{ text: 'Explore Our Solutions', link: '/services' }}
      />

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {coreServices.map(service => (
            <ServiceCard key={service.title} icon={<span>{service.icon}</span>} title={service.title} shortDescription={service.desc} link="#" />
          ))}
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why We’re Different</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {coreQualities.map(quality => (
              <div key={quality.title}>
                <span className="text-6xl">{quality.icon}</span>
                <h3 className="text-lg font-semibold mt-4">{quality.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Innovative Products</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard image="/placeholder.svg" title="WorkTrack CRM" shortDescription="Task tracking, analytics, and automation for modern teams." link="/products/worktrack" />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="bg-primary text-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatsCounter label="Projects Delivered" value={120} />
            <StatsCounter label="Active Users" value={28000} />
            <StatsCounter label="Client Retention" value={98} />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by Partners Worldwide</h2>
        <div className="max-w-2xl mx-auto">
            <TestimonialCard photo="/placeholder.svg" quote="A true game-changer for our business. The level of detail and support is unmatched." rating={5} name="Jane Doe" company="Enterprise Solutions" />
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center py-20 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Scale Your Business?</h2>
        <p className="mt-4 max-w-xl mx-auto">Reach out to us, and one of our expert consultants will be in touch to discuss your project.</p>
        <a href="/contact" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
          Contact Us
        </a>
      </motion.section>
    </div>
  );
}
