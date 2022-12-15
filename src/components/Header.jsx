import React from 'react';
import { Link } from 'react-router-dom';
import mainHeaderImg from '../images/main_header.png';

const Header = () => (
  <header className="main-header">
    <div className="container main-header-container">
      <div className="main-header-left">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque, maxime vel deserunt corporis eos nostrum.
        </p>
        <Link to="/plans" className="btn lg">Get Started</Link>
      </div>
      <div className="main-header-right">
        <div className="main-header-circle">
          <div className="main-header-image">
            <img src={mainHeaderImg} alt="main-header" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
