import React from 'react';
import Banner from '../components/Banner';
import RandomPick from '../components/RandomPick';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link to="/">
        <h2 id="logo">FlickFinder</h2>
      </Link>
      <header>
        <Banner />
        <div className="randomPicker">
          <h3>... or let our random picker decide for you</h3>
          <RandomPick />
        </div>
      </header>

    </div>
  );
};

export default HomePage;
