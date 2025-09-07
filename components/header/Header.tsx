import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Limitless Infotech</Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/products" className="hover:text-accent">Products</Link>
          <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
          <Link href="/testimonials" className="hover:text-accent">Testimonials</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
        <Link href="/contact">
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
