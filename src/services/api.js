import axios from 'axios';

const API_KEY = '1746564e4e974ff623489b4b9331b303';


export const fetchGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};


export const fetchMovies = async (searchParams) => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [key, value] = Object.entries(searchParams)[0];

  if (key === 'genre') {
    url += `&with_genres=${value}`;
  } else if (key === 'year') {
    url += `&primary_release_year=${value}`;
  } else if (key === 'actors') {
    const personResponse = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${value}`);
    const personId = personResponse.data.results[0]?.id;
    if (personId) {
      url += `&with_cast=${personId}`;
    }
  }

  const response = await axios.get(url);
  return response.data.results;
};


export const fetchRandomMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const randomIndex = Math.floor(Math.random() * response.data.results.length);
  return response.data.results[randomIndex];
};



export default API_KEY;
