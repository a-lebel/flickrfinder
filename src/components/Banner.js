import React from 'react';
import SearchBar from './SearchBar';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Can't Decide What to Watch?</h1>
      <h3>Discover the Perfect Movie for Any Mood with Personalized Recommendations!</h3>
      <h4>Search by genre, actors or by year</h4>
      <SearchBar />
    </div>
  );
};

export default Banner;
