import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=your_api_key`
      );
      setMovie(response.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-page">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-header"
      />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Main Actors:</strong> {movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        <p><strong>Year:</strong> {movie.release_date.split('-')[0]}</p>
        <p><strong>IMDB Rating:</strong> {movie.vote_average}</p>
      </div>
      <div className="where-to-watch">
        <h2>Where to Watch</h2>
        <ul>
          {movie.watch_providers.results.US?.flatrate?.map(provider => (
            <li key={provider.provider_id}>{provider.provider_name}</li>
          )) || <p>Not available on popular platforms.</p>}
        </ul>
      </div>
      <button onClick={() => navigate(-1)}>Go Back to Results</button>
    </div>
  );
};

export default MoviePage;
