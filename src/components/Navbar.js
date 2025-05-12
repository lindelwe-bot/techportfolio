import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="cyber-text">LINDELWE</span>
          <span className="cyber-accent">PORTFOLIO</span>
        </div>
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 