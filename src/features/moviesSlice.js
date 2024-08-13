import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchRandomMovie, fetchGenres } from '../services/api';

export const getGenres = createAsyncThunk('movies/getGenres', async () => {
  const response = await fetchGenres();
  return response;
});

/*
const initialState = {
  movies: [],
  randomMovie: null,
  status: 'idle',
  error: null,
};
*/

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (searchParams) => {
    const response = await fetchMovies(searchParams);
    return response;
  }
);

export const getRandomMovie = createAsyncThunk(
  'movies/getRandomMovie',
  async () => {
    const response = await fetchRandomMovie();
    console.log('Random movie fetched:', response);
    return response;
  }
);


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    randomMovie: null,
    genres: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        console.log('Movies loaded into state:', action.payload);
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.error('Error fetching movies:', action.error);
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(getRandomMovie.fulfilled, (state, action) => {
        console.log('Setting random movie in state:', action.payload);
        state.randomMovie = action.payload;
      });
  },
  
});

export default moviesSlice.reducer;
