import React from "react";

const JobCard = ({ job }) => {
  return (
    <li className="p-6 hover:bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <h3 className="text-lg font-semibold text-indigo-600">{job.title}</h3>
          <p className="text-sm text-gray-700">{job.organization}</p>
          <p className="text-sm text-gray-500 mt-1">{job.location}</p>
        </div>
        <div className="mt-2 sm:mt-0 flex-shrink-0">
          <button className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-lg hover:bg-indigo-200">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
          {job.type}
        </span>
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
};

export default JobCard;
