import React from 'react';
import logo from './logo5.png';
const Navbar = () => {
  return (
    <div>
       <img src={logo} alt="logo" />
      <h1>HealthMate</h1>
      <div className="nav">
        <a href="#">About</a>
        <a href="#">Feature</a>
        <a href="#">Contact</a>
        <h4>☾</h4>
      </div>
    </div>
  );
}

export default Navbar;
