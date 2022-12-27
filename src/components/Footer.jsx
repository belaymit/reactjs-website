import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import Logo from '../images/murple_logo.png';

const Footer = () => (
  <footer className="footer-section">
    <div className="container footer-container">
      <article className="footer-logo">
        <Link to="/">
          <img src={Logo} alt="footer-logo" />
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quas atque autem libero eos eligendi perferendis in sapiente
          neque iste nobis dolorum eum, ipsa molestias est, asperiores
          distinctio recusandae nihil? Soluta.
        </p>
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
            {' '}
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
            <FaFacebookF />
            {' '}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
            <AiOutlineTwitter />
            {' '}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
            <AiFillInstagram />
            {' '}
          </a>
        </div>
      </article>
      <article className="footer-links">
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </article>
      <article className="footer-links">
        <h4>Insights</h4>
        <Link to="/s">Blog</Link>
        <Link to="/s">Case Studies</Link>
        <Link to="/s">Events</Link>
        <Link to="/s">Communities</Link>
        <Link to="/s">FAQs</Link>
      </article>
      <article className="footer-links">
        <h4>Get in Touch</h4>
        <Link to="/contact">Contact Us</Link>
        <Link to="/s">Support</Link>
      </article>
    </div>
    <div className="footer-copyright">
      <small>2022 Microverse students &copy; All Rights Reserved</small>
    </div>
  </footer>
);

export default Footer;
