import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();

  // Navigation menu configuration
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Scholars", href: "/search" },
    { name: "Jobs", href: "/jobs" },
    { name: "Network", href: "/network" },
  ];

  // Check if current path matches navigation item
  const isCurrentPath = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
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
              <Link to="/" className="ml-2 text-xl font-bold text-gray-800">
                ScholarSphere
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => {
                const isCurrent = isCurrentPath(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      isCurrent
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <UserDropdown />
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
