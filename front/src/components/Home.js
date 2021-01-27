import React from 'react';

import Quote from '../containers/Quote';
import FeaturedMovies from '../containers/FeaturedMovies';
import FeaturedDirectors from '../containers/FeaturedDirectors';

const Home = () => (
  <div>
    <FeaturedDirectors />

    <Quote />

    <FeaturedMovies />
  </div>
);

export default Home;
