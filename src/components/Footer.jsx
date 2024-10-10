import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-20">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
          <a href="/contact" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
