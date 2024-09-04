import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
