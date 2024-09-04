import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          {/* Logo here if you have one */}
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <img 
                  src="data:image/png;base64,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" 
                  alt="Cart Icon"
                  style={{ width: '24px', height: '24px' }} 
                />
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
