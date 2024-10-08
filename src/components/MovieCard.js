import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleViewMore}>
      <div className="movie-card-container">
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className='movieCardInfo'>
        <h4>{movie.title}</h4>
        <p>{movie.overview.slice(0, 100)}...</p>
        <p>Year: {movie.release_date.split('-')[0]}</p>
        <button className='detailsmovie'>View details</button>
      </div>
    </div>
  );
};

export default MovieCard;
