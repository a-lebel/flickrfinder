import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../features/moviesSlice';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('genre'); // Default search type
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = { [searchType]: searchQuery };
    dispatch(getMovies(searchParams));
    navigate('/results');
  };

  return (
    <div className="search-bar">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="genre">Genre</option>
        <option value="year">Year</option>
        <option value="actors">Actors</option>
      </select>
      <input
        type="text"
        placeholder={`Enter ${searchType}`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
