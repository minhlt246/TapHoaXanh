import React from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => (
  <div className="mb-4">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Tìm kiếm sản phẩm..."
      className="w-full p-2 border rounded"
    />
  </div>
);

export default SearchBar;
