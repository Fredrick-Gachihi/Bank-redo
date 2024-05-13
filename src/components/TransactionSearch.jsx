import React, { useState } from 'react';

function TransactionsSearch({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };

  return (
    <div className="transactions-search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search transactions"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default TransactionsSearch;