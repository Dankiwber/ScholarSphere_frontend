import React, { useState } from "react";

const PublicationsList = ({ publications, showAllInitially = false }) => {
  const [showAll, setShowAll] = useState(showAllInitially);
  const visiblePublications = showAll ? publications : publications.slice(0, 3);
  const hiddenCount = publications.length - 3;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Featured Publications
      </h2>
      <div className="space-y-5">
        {visiblePublications.map((pub, index) => (
          <div key={index} className="flex items-start space-x-4">
            <svg
              className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {pub.title}
              </h3>
              <p className="text-xs text-gray-600">{pub.authors}</p>
              <p className="text-xs text-gray-500">
                {pub.venue || pub.journal || pub.conference}
              </p>
              {pub.citations && (
                <p className="text-xs text-indigo-600 mt-1">
                  {pub.citations} citations
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 w-full text-center bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          {showAll ? "Show less" : `Show all publications (${hiddenCount})`}
        </button>
      )}
    </div>
  );
};

export default PublicationsList;
