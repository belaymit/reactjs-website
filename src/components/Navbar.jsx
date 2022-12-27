import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import Logo from '../images/Capture_light_react.PNG';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav-container">
      <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
        {links.map(({ name, path }, index) => (
        // eslint-disable-next-line react/jsx-key, react/no-array-index-key
          <li key={index}>
            <NavLink to={path} className={({ isActive }) => (isActive ? 'active-nav' : '')} onClick={() => setIsNavShowing((prev) => !prev)}>{ name }</NavLink>
            {' '}
          </li>
        ))}
      </ul>
      <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
        {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Navbar;
