import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Find Your Dream Developer Job
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Connecting talented junior developers with amazing companies.
        </p>
        <a href="/jobs" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
          Browse Jobs
        </a>
      </div>
    </section>
  );
};

export default Hero;
