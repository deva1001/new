import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-left">Calorie Counter</div>
        <div className="nav-right">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="center-content">
        <Link to="/login?form=login">
          <button className="btn login-btn">Login</button>
        </Link>
        <Link to="/login?form=signup">
          <button className="btn signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home1;
