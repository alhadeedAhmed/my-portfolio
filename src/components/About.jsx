import React from "react";
import "./About.css";
import { FaGraduationCap, FaDesktop, FaPenNib } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2>About Me</h2>
          <div className="about-picture">
            <img src="src/assets/about-picture.jpg" alt="Profile" />
          </div>
        </div>
        <div className="about-description">
          <div className="about-box">
            <div className="about-box-inner">
              <FaGraduationCap className="about-icon" />
              <h2>Education</h2>
              <p>
                Software Engineering's Student | COMSATS University Lahore
                Campus | 7th Semester | Session 2021-2025
                {/* I'm doing Software Engineering from COMSATS University Lahore
                Campus, currently in my 7th Semester. */}
              </p>
            </div>
          </div>
          <div className="about-box">
            <div className="about-box-inner">
              <FaDesktop className="about-icon" />
              <h2>Frontend Developer</h2>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </div>
          <div className="about-box">
            <div className="about-box-inner">
              <FaPenNib className="about-icon" />
              <h2>Content Writer</h2>
              <p>
                Write awesome stuff that people love to read and take action on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
