import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li><a href="/services#web-dev" className="hover:text-accent">Web Development</a></li>
            <li><a href="/services#mobile-apps" className="hover:text-accent">Mobile Apps</a></li>
            <li><a href="/services#custom-software" className="hover:text-accent">Custom Software</a></li>
            <li><a href="/services#crm" className="hover:text-accent">CRM Systems</a></li>
            <li><a href="/services#automation" className="hover:text-accent">Automation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Products</h3>
          <ul>
            <li><a href="/products/worktrack" className="hover:text-accent">WorkTrack CRM</a></li>
            {/* Add other products here */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li><a href="/about" className="hover:text-accent">About Us</a></li>
            <li><a href="/about#vision" className="hover:text-accent">Vision</a></li>
            <li><a href="/about#team" className="hover:text-accent">Team</a></li>
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
        <p><a href="/privacy" className="hover:text-accent">Privacy Policy</a> | <a href="/terms" className="hover:text-accent">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
