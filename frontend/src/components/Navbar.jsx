// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="navbar">
      <div className="nav">
        <ul className="nav-list">
          <li className="logo">
            RDM Store
          </li>
          <div className="nav-items">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${active === 'home' ? 'active' : ''}`}
                onClick={() => setActive('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/products" 
                className={`nav-link ${active === 'display' ? 'active' : ''}`}
                onClick={() => setActive('display')}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact"
                className={`nav-link ${active === 'contact' ? 'active' : ''}`}
                onClick={() => setActive('contact')}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about"
                className={`nav-link ${active === 'about' ? 'active' : ''}`}
                onClick={() => setActive('about')}
              >
                About
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;