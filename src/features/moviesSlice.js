import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchRandomMovie } from '../services/api';

const initialState = {
  movies: [],
  randomMovie: null,
  status: 'idle',
  error: null,
};

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
    return response;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getRandomMovie.fulfilled, (state, action) => {
        state.randomMovie = action.payload;
      });
  },
});

export default moviesSlice.reducer;
