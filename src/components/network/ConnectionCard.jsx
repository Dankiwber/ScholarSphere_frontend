import React from "react";
import { Link } from "react-router-dom";

const ConnectionCard = ({ connection }) => {
  return (
    <li className="flex items-center space-x-3">
      <Link
        to={`/profile/${connection.id}`}
        className="flex items-center space-x-3 group flex-1"
      >
        <img
          className="h-12 w-12 rounded-full"
          src={
            connection.avatar ||
            `https://placehold.co/128x128/dbeafe/1e3a8a?text=${connection.name.charAt(
              0
            )}`
          }
          alt={connection.name}
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-800 group-hover:text-indigo-600">
            {connection.name}
          </p>
          <p className="text-sm text-gray-500">
            {connection.title}, {connection.institution}
          </p>
        </div>
      </Link>
      <button className="text-gray-400 hover:text-gray-600">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </li>
  );
};

export default ConnectionCard;
