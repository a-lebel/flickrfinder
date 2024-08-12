import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMovie } from '../features/moviesSlice';
import { useNavigate } from 'react-router-dom';

const RandomPick = () => {
  const dispatch = useDispatch();
  const randomMovie = useSelector((state) => state.movies.randomMovie);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  const handleClick = () => {
    navigate(`/movie/${randomMovie.id}`);
  };

  return (
    <div className="random-pick">
      {randomMovie && (
        <div onClick={handleClick}>
          <img src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt={randomMovie.title} />
          <h2>{randomMovie.title}</h2>
          <button>View More</button>
        </div>
      )}
    </div>
  );
};

export default RandomPick;
