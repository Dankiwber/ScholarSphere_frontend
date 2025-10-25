import React, { useState } from "react";
import JobCard from "../components/jobs/JobCard";
import { jobs, searchJobs } from "../data/mockData";

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching jobs:", { searchTerm, location });

    let results = jobs;

    if (searchTerm.trim()) {
      results = searchJobs(searchTerm);
    }

    if (location.trim()) {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    setFilteredJobs(results);
  };

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Find Academic Positions
        </h1>
        <p className="mt-1 text-gray-600">
          Search for PhD, Postdoc, and Faculty positions.
        </p>
        <form
          onSubmit={handleSearch}
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="relative flex-grow">
            <label htmlFor="keywords" className="sr-only">
              Keywords
            </label>
            <input
              type="search"
              name="keywords"
              id="keywords"
              className="block w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Job title or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative flex-grow">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              type="search"
              name="location"
              id="location"
              className="block w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="City, state, or country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search Jobs
          </button>
        </form>
      </div>

      {/* Job Listings */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default JobsPage;
