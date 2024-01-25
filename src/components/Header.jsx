// src/components/Header.jsx
import React from "react";


const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
      
        <div className="flex items-center">
          {/* Design your search bar here */}
          <input
            type="text"
            placeholder="Search for food..."
            className="border p-2 rounded-md mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
