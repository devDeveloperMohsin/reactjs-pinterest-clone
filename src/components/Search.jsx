import React, { useState } from "react";

function Search({ searching }) {
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    if(event.key === 'Enter') {
      searching(search);
    }
  }

  return (
    <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
      <div className="flex-[1_0_0%]">
        <label
          htmlFor="hs-search-article-1"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          <span className="sr-only">Search Picture</span>
        </label>
        <input
          type="email"
          name="hs-search-article-1"
          id="hs-search-article-1"
          className="p-3 block w-full border-transparent focus:outline-none rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
          placeholder="Search Picture"
          value={search}
          onKeyDown={handleInput}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-[0_0_auto]">
        <button
          className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={() => searching(search)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
