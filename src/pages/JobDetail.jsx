import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../jobData'; // Import the jobs data
import products from '../products'; // Import the products data

const getRandomProductPair = () => {
  const leftIndex = Math.floor(Math.random() * products.length);
  let rightIndex = Math.floor(Math.random() * products.length);

  // Ensure that the right product is different from the left product
  while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * products.length);
  }

  return [products[leftIndex], products[rightIndex]];
};

const JobDetail = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const navigate = useNavigate();

  // Find the job with the matching jobId
  const job = jobs.find((job) => job.id === jobId);

  // Handle applying for the job
  const handleApply = () => {
    alert(`Applying for ${job.title}`);
  };

  if (!job) {
    return <div className="text-center">Job not found.</div>; // Display a message if the job is not found
  }

  const [leftProduct, rightProduct] = getRandomProductPair(); // Get distinct left and right products

  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-600 py-10"> {/* Gradient background */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 relative z-10"> {/* Main content */}
        
        {/* Left Product Ad */}
        <div className="hidden md:flex flex-none w-full md:w-1/4 px-4 mb-8 md:mb-0 items-start"> {/* Increased mb-8 for spacing */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center self-start">
            <img
              src={leftProduct.images[0]}
              alt={leftProduct.name}
              className="h-48 object-cover rounded"
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <h4 className="font-semibold text-center">{leftProduct.name}</h4>
            <p className="text-gray-600 text-center">{leftProduct.shortDescription}</p>
            <a
              href={leftProduct.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Product
            </a>
          </div>
        </div>

        {/* Job Details */}
        <div className="flex-1 max-w-2xl mb-8 md:mb-0"> {/* Increased mb-8 for spacing */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{job.title}</h2>
            <div className="flex flex-col md:flex-row justify-between text-gray-600 mb-4">
              <span><strong>Company:</strong> {job.company}</span>
              <span><strong>Location:</strong> {job.location}</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between text-gray-600 mb-4">
              <span><strong>Salary:</strong> {job.salary}</span>
              <span><strong>Level:</strong> {job.level}</span>
            </div>
            <p className="text-gray-600 mb-4"><strong>Description:</strong> {job.description}</p>

            <h3 className="text-xl font-bold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-600">{req}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-2">Responsibilities:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.responsibilities.map((res, index) => (
                <li key={index} className="text-gray-600">{res}</li>
              ))}
            </ul>

            {job.additionalInfo && (
              <>
                <h3 className="text-xl font-bold mb-2">Additional Information:</h3>
                <p className="text-gray-600 mb-4">{job.additionalInfo}</p>
              </>
            )}

            {job.benefits && (
              <>
                <h3 className="text-xl font-bold mb-2">Benefits:</h3>
                <ul className="list-disc list-inside mb-4">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </>
            )}

            {job.applicationDeadline && (
              <div className="text-gray-600 mb-4">
                <strong>Application Deadline:</strong> {job.applicationDeadline}
              </div>
            )}

            {job.workHours && (
              <div className="text-gray-600 mb-4">
                <strong>Work Hours:</strong> {job.workHours}
              </div>
            )}

            {job.jobType && (
              <div className="text-gray-600 mb-4">
                <strong>Job Type:</strong> {job.jobType}
              </div>
            )}

            {job.remoteOptions !== undefined && (
              <div className="text-gray-600 mb-4">
                <strong>Remote Options:</strong> {job.remoteOptions ? 'Yes' : 'No'}
              </div>
            )}

            {/* Tags */}
            <h3 className="text-xl font-bold mb-2">Tags:</h3>
            <div className="flex flex-wrap mb-4">
              {job.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handleApply}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-200"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Right Product Ad */}
        <div className="flex-none w-full md:w-1/4 px-4 mb-8 md:mb-0"> {/* Increased mb-8 for spacing */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src={rightProduct.images[0]}
              alt={rightProduct.name}
              className="h-48 object-cover rounded"
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <h4 className="font-semibold text-center">{rightProduct.name}</h4>
            <p className="text-gray-600 text-center">{rightProduct.shortDescription}</p>
            <a
              href={rightProduct.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
