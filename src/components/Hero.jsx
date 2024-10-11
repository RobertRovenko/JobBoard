import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-20 pt-40 overflow-hidden z-0"> {/* Gradient background */}
      {/* Animated Geometric Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Circle */}
        <motion.div 
          className="hidden lg:block absolute w-64 h-64 bg-yellow-300 rounded-full opacity-70"
          initial={{ scale: 0.5, rotate: 45 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '20%', left: '10%' }}
        />
        {/* Square */}
        <motion.div 
          className="hidden lg:block absolute w-48 h-48 bg-red-400 opacity-70"
          initial={{ scale: 0.5, rotate: -45 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ bottom: '20%', right: '10%' }}
        />
        {/* Triangle */}
        <motion.div 
          className="hidden lg:block absolute w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-64 border-b-blue-400 opacity-70"
          initial={{ scale: 0.5, y: -30 }} 
          animate={{ scale: 1, y: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        {/* Additional Circle */}
        <motion.div 
          className="hidden lg:block absolute w-32 h-32 bg-green-300 rounded-full opacity-60"
          initial={{ scale: 0.5, rotate: 30 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ top: '40%', right: '20%' }}
        />
        {/* Additional Square */}
        <motion.div 
          className="hidden lg:block absolute w-56 h-56 bg-pink-400 opacity-70"
          initial={{ scale: 0.5, rotate: 20 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} 
          style={{ bottom: '30%', left: '20%' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, translateY: -20 }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5 }}>
          Find Your Dream Developer Job
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-white mb-6"
          initial={{ opacity: 0, translateY: -20 }} 
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}>
          Connecting talented developers with amazing companies.
        </motion.p>
        <motion.button 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg shadow-md hover:bg-gray-100 transition-transform transform duration-300 hover:scale-105"
          onClick={() => window.location.href='/jobs'} // Use a button and redirect on click
        >
          Explore Jobs
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
