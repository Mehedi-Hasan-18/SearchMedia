import React from "react";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      

      {/* Search Section */}
      <div className="mt-6">
        <SearchBar />
        <Tabs />
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-800 w-[90%] mx-auto"></div>

      {/* Results */}
      <div className="mt-6">
        <ResultGrid />
      </div>
    </div>
  );
};

export default HomePage;
