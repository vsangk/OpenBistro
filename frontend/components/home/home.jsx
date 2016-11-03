import React from 'react';
import { Link } from 'react-router';
import CityContainer from '../city/city_container';

const Home = ({ currentUser, logout }) => (
  <div>
    <div className="home-bg">
      <div className="home-bg-image">
        <h1>Restaurant reservations the easy way</h1>
      </div>
    </div>

    <CityContainer />
  </div>
);

export default Home;
