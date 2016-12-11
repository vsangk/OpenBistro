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
    <div className="dropdown">
      <a onClick={dropDown} className="dropdown-button">
        Hi, {currentUser.username}! ▾
      </a>
      <div id="myDropdown" className="dropdown-content">
        <Link to="/profile">Profile</Link>
        <Link to="/login" onClick={logout}>Log Out</Link>
      </div>
    </div>
  </div>
);

const dropDown = () => {
  let menu = document.getElementById("myDropdown");
  if (menu) {
    menu.classList.toggle("show");
  }
};

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const Header = ({ currentUser, logout }) => (
  <header className="header">
    <Link className="logo" to={"/"}>OpenBistro</Link>
    {currentUser ? greeting(currentUser, logout) : sessionLinks()}
  </header>
);

export default Header;
