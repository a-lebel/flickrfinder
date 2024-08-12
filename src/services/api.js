import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = async (key, value) => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  if (key === 'genre') {
    url += `&with_genres=${value}`;
  } else if (key === 'year') {
    url += `&primary_release_year=${value}`;
  } else if (key === 'actors') {
    url += `&with_cast=${value}`;
  }

  const response = await axios.get(url);
  return response.data.results;
};

export const fetchRandomMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/random?api_key=${API_KEY}`
  );
  return response.data;
};
