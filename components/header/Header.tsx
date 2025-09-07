import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Limitless Infotech</h1>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="hover:text-accent">Home</a>
          <a href="/services" className="hover:text-accent">Services</a>
          <a href="/products" className="hover:text-accent">Products</a>
          <a href="/portfolio" className="hover:text-accent">Portfolio</a>
          <a href="/testimonials" className="hover:text-accent">Testimonials</a>
          <a href="/about" className="hover:text-accent">About</a>
          <a href="/contact" className="hover:text-accent">Contact</a>
        </nav>
        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
