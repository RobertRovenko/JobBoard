import React from 'react';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = ({ jobs }) => {  // Accept jobs as a prop
  return (
    <div>
      <Hero />
      <FeaturedJobs jobs={jobs} />  {/* Pass jobs to FeaturedJobs */}
    </div>
  );
};

export default Home;
