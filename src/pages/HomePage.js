import React from 'react';
import Banner from '../components/Banner';
import RandomPick from '../components/RandomPick';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <h2>Random Pick of the Day</h2>
      <RandomPick />
    </div>
  );
};

export default HomePage;
