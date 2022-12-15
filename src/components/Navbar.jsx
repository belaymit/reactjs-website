import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import Logo from '../images/new_logo.PNG';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(true);
  return (
    <nav className="container nav-container">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
        {links.map(({ name, path }) => (
        // eslint-disable-next-line react/jsx-key
          <li>
            <NavLink to={path} className={({ isActive }) => (isActive ? 'active-nav' : '')}>{ name }</NavLink>
            {' '}
          </li>
        ))}
      </ul>
      <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
        {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Navbar;
