import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchResultsPage = () => {
  const [visibleMovies, setVisibleMovies] = useState(8);
    const movies = useSelector((state) => state.movies.movies);
    console.log('Movies in Redux state:', movies);
  
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);

    const SearchResultsPage = () => {

      const status = useSelector((state) => state.movies.status);
      const error = useSelector((state) => state.movies.error);
    
      if (status === 'loading') return <div>Loading...</div>;
      if (status === 'failed') return <div>Error: {error}</div>;
  
    };
    
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>New Search</button>
      <div className="movie-grid">
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {visibleMovies < movies.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default SearchResultsPage;
