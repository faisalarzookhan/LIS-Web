import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li><Link href="/services#web-dev" className="hover:text-accent">Web Development</Link></li>
            <li><Link href="/services#mobile-apps" className="hover:text-accent">Mobile Apps</Link></li>
            <li><Link href="/services#custom-software" className="hover:text-accent">Custom Software</Link></li>
            <li><Link href="/services#crm" className="hover:text-accent">CRM Systems</Link></li>
            <li><Link href="/services#automation" className="hover:text-accent">Automation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Products</h3>
          <ul>
            <li><Link href="/products/worktrack" className="hover:text-accent">WorkTrack CRM</Link></li>
            {/* Add other products here */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link href="/about#vision" className="hover:text-accent">Vision</Link></li>
            <li><Link href="/about#team" className="hover:text-accent">Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p>Email: contact@limitless.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-2">
            {/* Social Media Icons Placeholder */}
            <span>FB</span>
            <span>TW</span>
            <span>IN</span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-8">
        <p>&copy; {new Date().getFullYear()} Limitless Infotech Solutions. All Rights Reserved.</p>
        <p><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link> | <Link href="/terms" className="hover:text-accent">Terms of Service</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
