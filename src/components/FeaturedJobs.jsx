import React from 'react';

const FeaturedJobs = ({ jobs }) => {  // Accept jobs as a prop
  // Get the 10 most recent jobs
  const recentJobs = jobs.slice(-9); // Slice the last 10 jobs from the array

  return (
    <section className="py-20 bg-gray-100"> {/* Added a light gray background to the section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Featured Jobs</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Showing the most recent job listings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentJobs.length > 0 ? (
            recentJobs.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"> {/* Enhanced card styles */}
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.company}</p>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <a href={`/jobs/${job.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
                  View Details
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No featured jobs available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
