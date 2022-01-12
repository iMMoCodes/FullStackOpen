import React from 'react';

const Filter = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      filter shown with: <input value={search} onChange={handleSearch} />
    </div>
  );
};

export default Filter;
