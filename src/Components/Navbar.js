import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ toggleTheme, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

const handleLinkClick = () => setMenuOpen(false);


  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">SAINEY DANSO's Archive </h1>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/talks">Talks</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>

        {/* Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
