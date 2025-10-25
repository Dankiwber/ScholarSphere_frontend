import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SearchBar from "../components/search/SearchBar";
import ScholarCard from "../components/search/ScholarCard";
import { searchUsers, getRecommendedUsers } from "../data/mockData";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { user: currentUser } = useAuth();

  // Get recommended scholars (excluding current user)
  const recommendedScholars = currentUser
    ? getRecommendedUsers(currentUser.id, 6).filter(
        (user) => user.id !== currentUser.id
      )
    : [];

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    setHasSearched(true);

    if (searchTerm.trim()) {
      const results = searchUsers(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <SearchBar onSearch={handleSearch} />

      {!hasSearched ? (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recommended for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedScholars.map((scholar) => (
              <ScholarCard key={scholar.id} scholar={scholar} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Search Results
          </h2>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((scholar) => (
                <ScholarCard key={scholar.id} scholar={scholar} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No scholars found matching your search.
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default SearchPage;
