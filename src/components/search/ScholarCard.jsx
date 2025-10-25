import React from "react";
import { Link } from "react-router-dom";

const ScholarCard = ({ scholar }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col text-center items-center">
      <img
        className="h-20 w-20 rounded-full mx-auto"
        src={
          scholar.avatar ||
          `https://placehold.co/128x128/dbeafe/1e3a8a?text=${scholar.name.charAt(
            0
          )}`
        }
        alt={scholar.name}
      />
      <h3 className="mt-4 text-lg font-bold text-gray-900">{scholar.name}</h3>
      <p className="mt-1 text-sm text-gray-600">
        {scholar.title}, {scholar.institution}
      </p>
      <p className="mt-2 text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
        {scholar.researchArea}
      </p>
      <div className="mt-4 w-full">
        <Link
          to={`/profile/${scholar.slug}`}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ScholarCard;
