import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://www.facebook.com/hadeed.sudheer"
          className="social-link2 facebook"
          target="_blank"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/alhadeed_22"
          className="social-link2 instagram"
          target="_blank"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alhadeed-sudheer"
          className="social-link2 linkedin"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://x.com/TheyCallMeHaadi"
          className="social-link2 twitter"
          target="_blank"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="social-link2 github" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <p className="footer-copy">
        Copyright ©2024; Designed with ❤️ by Hadeed Sudheer
      </p>
    </footer>
  );
};

export default Footer;
