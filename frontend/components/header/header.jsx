import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="header-nav">
    <Link to="/login">Log In</Link>
    &nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const greeting = (currentUser, logout) => (
  <div className="header-nav">
    Hi, {currentUser.username}!
    <Link to="/profile">Your Profile</Link>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Home = ({ currentUser, logout }) => (
  <header className="header">
    <Link className="logo" to={"/"}>OpenBistro</Link>
    {currentUser ? greeting(currentUser, logout) : sessionLinks()}
  </header>
);

export default Home;
