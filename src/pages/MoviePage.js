import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../services/api';
import WhereToWatch from '../components/WhereToWatch';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const [movieResponse, watchProvidersResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`)
      ]);
      setMovie({
        ...movieResponse.data,
        watchProviders: watchProvidersResponse.data.results.US || {}
      });
    };
    
    
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-page">
      <div  className="movie-img-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-header"
      />
      </div>
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Main Actors:</strong> {movie.credits?.cast?.slice(0, 5).map(actor => actor.name).join(', ') || 'N/A'}</p>
        <p><strong>Year:</strong> {movie.release_date.split('-')[0]}</p>
        <p><strong>IMDB Rating:</strong> {movie.vote_average}</p>
      </div>
      <div className="where-to-watch">
  <h2>Where to Watch</h2>
  <WhereToWatch watchProviders={movie.watchProviders} />
  <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
    </div>
  );
};

export default MoviePage;
