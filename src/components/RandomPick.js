import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRandomMovie } from '../features/moviesSlice';

const RandomPick = () => {
  const dispatch = useDispatch();
  const randomMovie = useSelector((state) => state.movies.randomMovie);
  const status = useSelector((state) => state.movies.status);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  const handleClick = () => {
    if (randomMovie && randomMovie.id) {
      navigate(`/movie/${randomMovie.id}`);
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Failed to load random movie</div>;

  return (
    <div className="random-pick">
      {randomMovie && (
        <div className="randomMovie" onClick={handleClick}>
          <div className="randomMovieimg">
             <img src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt={randomMovie.title} />
          </div>
          <div className='movie-info'>
              <h3>{randomMovie.title}</h3>
             <button className='secondaryButton'>View Details</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomPick;
