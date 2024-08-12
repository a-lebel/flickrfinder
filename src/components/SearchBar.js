import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../features/moviesSlice';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('genre');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((state) => state.movies.genres);

  const handleSearch = () => {
    const searchParams = { [searchType]: searchQuery };
    dispatch(getMovies(searchParams));
    navigate('/results');
  };

  return (
    <div className="search-bar">
      <select className="search-type"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="genre">Genre</option>
        <option value="year">Year</option>
        <option value="actors">Actors</option>
      </select>
      {searchType === 'genre' ? (
        <select className="input-field" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      >
        <option value="">Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id.toString()}>
            {genre.name}
          </option>
        ))}
      </select>
      ) : (
        <input className="input-field"
          type="text"
          placeholder={`Enter ${searchType}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
