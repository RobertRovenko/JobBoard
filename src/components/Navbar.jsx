import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth behavior
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/coding.png" alt="JobBoard" className="h-8 w-8 mr-2" />
          <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-xl font-bold text-gray-800">JobBoard</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" onClick={() => { scrollToTop(); }} className="text-gray-600 transition-transform transform hover:scale-125">Home</Link>
          <Link to="/jobs" onClick={() => { scrollToTop(); }} className="text-gray-600 transition-transform transform hover:scale-125">Jobs</Link>
          <Link to="/about" onClick={() => { scrollToTop(); }} className="text-gray-600 transition-transform transform hover:scale-125">About</Link>
          <Link to="/contact" onClick={() => { scrollToTop(); }} className="text-gray-600 transition-transform transform hover:scale-125">Contact</Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu open/close
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col justify-center items-center shadow-md z-20">
          {/* Close Button */}
          <button 
            onClick={closeMobileMenu} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu items */}
          <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-xl text-gray-600 transition-transform transform hover:scale-125 w-full text-center py-4">Home</Link>
          <Link to="/jobs" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-xl text-gray-600 transition-transform transform hover:scale-125 w-full text-center py-4">Jobs</Link>
          <Link to="/about" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-xl text-gray-600 transition-transform transform hover:scale-125 w-full text-center py-4">About</Link>
          <Link to="/contact" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-xl text-gray-600 transition-transform transform hover:scale-125 w-full text-center py-4">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
