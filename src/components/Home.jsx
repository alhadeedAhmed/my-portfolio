import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-picture">
          <img src="profile-picture.png" alt="Profile" />
        </div>
        <div className="intro-text">
          <p className="small-text">Hello! My name is</p>
          <h1 className="large-text" style={{ color: "#1e90ff" }}>
            Hadeed Sudheer
          </h1>
          <p className="role-text">
            And I'm a{" "}
            <span className="animated-role">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Content Writer",
                  2000,
                  "Web Designer",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "30px",
                  display: "inline-block",
                  color: "#1e90ff",
                }}
              />
            </span>
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com/hadeed.sudheer"
            className="social-link facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/alhadeed_22"
            className="social-link instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alhadeed-sudheer"
            className="social-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://x.com/TheyCallMeHaadi"
            className="social-link twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="#"
            className="social-link github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
