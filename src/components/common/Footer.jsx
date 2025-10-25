import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v11.494m-9-5.747h18"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v11.494m-9-5.747h18"
                ></path>
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">
                ScholarSphere
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Connecting scholars worldwide to advance research and
              collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/search"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Find Scholars
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Academic Jobs
                </a>
              </li>
              <li>
                <a
                  href="/network"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Network
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2024 ScholarSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
