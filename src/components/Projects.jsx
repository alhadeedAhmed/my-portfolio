import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/passgenerator.png" alt="Donuts House" />
          </div>
          <div className="project-details">
            <h3>Random Password Generator</h3>
            <p>
              Built with React, this will lets you generate random passwords
              with customizable length, and options to include capital letters,
              small letters, numbers, and special characters.
            </p>
            <button className="view-project">View project</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/bgchanger.png" alt="Business Dashboard" />
          </div>
          <div className="project-details">
            <h3>Background Changer</h3>
            <p>
              A React-based application that dynamically changes the background
              color of your webpage with a simple click.
            </p>
            <button className="view-project">View project</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="src/assets/counter.png" alt="Helper Website" />
          </div>
          <div className="project-details">
            <h3>Simple Counter</h3>
            <p>
              A simple React counter application that increments values and
              ensures the counter does not go below zero when decrementing.
            </p>
            <button className="view-project">View project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
