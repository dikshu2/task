import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Mango',
    'Pear',
    'Bear',
    'Frog',
    'Grass',
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>
      <ul className="mt-5 space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-3 bg-white border rounded-lg shadow hover:bg-gray-100"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
