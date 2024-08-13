import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';


const SearchResultsPage = () => {
  const [visibleMovies, setVisibleMovies] = useState(9);
  const movies = useSelector((state) => state.movies.movies);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 9);
  };

  return (
    <div>
      <Link to="/">
        <h2 id="logo">FlickFinder</h2>
      </Link>
    
    <div>
   
    <h1>Our top rated selection for you</h1>
    <div className="movie-grid">
      {movies.slice(0, visibleMovies).map((movie) => (
        <div className="movie-element" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
    <div className='buttons-search'>
    {visibleMovies < movies.length && (
      <button className="secondaryButton" onClick={handleLoadMore}>Load More</button>
    )}
     <button className="secondaryButton" onClick={() => navigate('/')}>New Search</button>
    </div>
  </div>
  </div>
);
};

export default SearchResultsPage;
