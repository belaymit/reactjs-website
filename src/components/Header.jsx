import React from 'react';
import { Link } from 'react-router-dom';
import mainHeaderImg from '../images/full-stack-headline-image.png';
import '../Pages/home/home.css';

const Header = () => (
  <header className="main-header">
    <div className="container main-header-container">
      <div className="main-header-left">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1>
          System Programmers are the high priests of a low cult.  Robert S. Barton.
        </h1>
        <p>
          Full Stack Developers have to have some skills in a wide variety of coding niches,
          from databases to graphic design and UI/UX management in order to do their job well.
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
