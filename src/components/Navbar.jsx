import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/Logo.png" alt="HS Logo" className="logo" />
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-cv">
        <a href="src/assets/ALHADEED.pdf" download>
          Download CV <i className="bx bx-download"></i>
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default Navbar;
