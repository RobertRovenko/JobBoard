import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedJobs = ({ jobs }) => {
  const navigate = useNavigate();

  // Get the 9 most recent jobs
  const recentJobs = jobs.slice(-9); // Slice the last 9 jobs from the array

  // Function to handle navigation and scroll to top
  const handleCardClick = (jobId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/jobs/${jobId}`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-800 to-indigo-600"> {/* Gradient background */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}

      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 to keep text above overlay */}
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Jobs</h2>
        <p className="text-lg text-white mb-8 text-center">
          Showing the most recent job listings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentJobs.length > 0 ? (
            recentJobs.map(job => (
              <div
                key={job.id}
                onClick={() => handleCardClick(job.id)} // Trigger scroll and navigation
                className="cursor-pointer bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" // Apply hover effects
              >
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 mt-2"><strong>Company:</strong> {job.company}</p>
                <p className="text-gray-600 mt-2"><strong>Location:</strong> {job.location}</p>
                <p className="text-gray-600 mt-2"><strong>Salary:</strong> {job.salary}</p>
                <div className="mt-2">
                  <div className="mt-1 flex flex-wrap space-x-2"> {/* Flex container for tags */}
                    {job.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"> {/* Tag styles */}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
