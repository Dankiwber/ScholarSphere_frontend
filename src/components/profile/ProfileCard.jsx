import React from "react";

const ProfileCard = ({ user, isOwnProfile = false }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <img
          className="h-28 w-28 rounded-full ring-4 ring-white"
          src={
            user.avatar ||
            `https://placehold.co/256x256/e0e7ff/4338ca?text=${user.name.charAt(
              0
            )}`
          }
          alt={user.name}
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="mt-1 text-lg text-gray-700">
            {user.title}, {user.institution}
          </p>
          <p className="mt-2 text-sm text-gray-500 flex items-center">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {user.location}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {isOwnProfile ? (
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit Profile
              </button>
            ) : (
              <>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                  Follow
                </button>
                <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-200 transition-colors">
                  Message
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                  More
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
