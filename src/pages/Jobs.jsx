import React, { useState } from 'react';
import jobs from '../jobData';
import { useNavigate } from 'react-router-dom';


const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    date: 'mostRecent',
    salaryRange: 'all',
    tags: 'all',
  });

  const navigate = useNavigate(); // Get the navigate function

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const extractMinMaxSalary = (salaryString) => {
    const salaryNumbers = salaryString
      .match(/(\d{1,3}(?:,\d{3})*|\d+)/g)
      ?.map(num => parseInt(num.replace(/,/g, ''), 10));

    if (salaryNumbers && salaryNumbers.length >= 2) {
      return { min: salaryNumbers[0], max: salaryNumbers[1] };
    } else if (salaryNumbers && salaryNumbers.length === 1) {
      return { min: salaryNumbers[0], max: salaryNumbers[0] };
    }
    return { min: 0, max: 0 };
  };

  const normalizeString = (str) => {
    return str.toLowerCase().replace(/\s+/g, '').trim();
  };

  const isSalaryInRange = (minSalary, maxSalary) => {
    if (filter.salaryRange === 'low') {
      return maxSalary < 60000;
    }
    if (filter.salaryRange === 'medium') {
      return minSalary >= 60000 && minSalary < 80000;
    }
    if (filter.salaryRange === 'high') {
      return minSalary >= 80000;
    }
    return true;
  };

  const isTagMatching = (title) => {
    if (filter.tags !== 'all') {
      return normalizeString(title).includes(normalizeString(filter.tags));
    }
    return true;
  };

  const isTagMatchingSearchTerm = (tags) => {
    const normalizedSearchTerm = normalizeString(searchTerm);
    return tags.some(tag => normalizeString(tag).includes(normalizedSearchTerm));
  };

  const filteredJobs = jobs
    .filter((job) => {
      const normalizedSearchTerm = normalizeString(searchTerm);
      return (
        normalizeString(job.title).includes(normalizedSearchTerm) ||
        normalizeString(job.description).includes(normalizedSearchTerm) ||
        normalizeString(job.company).includes(normalizedSearchTerm) ||
        normalizeString(job.location).includes(normalizedSearchTerm) ||
        isTagMatchingSearchTerm(job.tags)
      );
    })
    .filter((job) => {
      const { min: minSalary, max: maxSalary } = extractMinMaxSalary(job.salary);
      return isSalaryInRange(minSalary, maxSalary);
    })
    .filter((job) => isTagMatching(job.title))
    .sort((a, b) => {
      const dateA = new Date(a.applicationDeadline);
      const dateB = new Date(b.applicationDeadline);
      return filter.date === 'mostRecent' ? dateB - dateA : dateA - dateB;
    });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardClick = (jobId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    navigate(`/jobs/${jobId}`); // Navigate to job details
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-600 min-h-screen py-20 relative"> {/* Gradient background */}
      <div className="bg-black opacity-50 absolute inset-0" /> {/* Dark overlay */}
      <div className="container mx-auto px-4 relative z-10"> {/* Main content */}
        <h1 className="text-4xl font-bold text-white mb-8">All Jobs</h1>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search jobs..."
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          />

          <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
            <select name="date" value={filter.date} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 w-full">
              <option value="mostRecent">Most Recent</option>
              <option value="oldest">Oldest</option>
            </select>

            <select name="salaryRange" value={filter.salaryRange} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2 mb-4 md:mb-0 w-full">
              <option value="all">All Salaries</option>
              <option value="low">Below $60,000</option>
              <option value="medium">$60,000 - $80,000</option>
              <option value="high">Above $80,000</option>
            </select>

            <select name="tags" value={filter.tags} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2 w-full">
              <option value="all">All Tags</option>
              <option value="Developer">Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Analysis">Analysis</option>
              <option value="Consulting">Consulting</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleCardClick(job.id)} // Trigger scroll and navigation
                className="cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 relative z-20" // Add z-20 to keep job cards above the overlay
              >
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Company:</strong> {job.company}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Salary:</strong> {job.salary}
                </p>

                {/* Display Tags */}
                <div className="mt-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
