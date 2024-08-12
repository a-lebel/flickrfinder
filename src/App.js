import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<SearchResultsPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
