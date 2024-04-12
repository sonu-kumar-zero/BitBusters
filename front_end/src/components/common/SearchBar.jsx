import React from "react";

const SearchBar = ({ link, text }) => {
  return (
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <img src={link} alt="#" className="h-6" />
      </div>

      <input
        className="peer h-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder={text}
      />
    </div>
  );
};

export default SearchBar;
