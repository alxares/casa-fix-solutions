import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo1.png" alt="Casa Fix Solutions Logo" className="navbar-logo-img" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
      </ul>
      
      <div className="navbar-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="navbar-theme">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
