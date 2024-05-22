import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPaintBrush,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-box">
          <FaHtml5 className="skill-icon" style={{ color: "#E34F26" }} />
          <div className="skill-name">HTML</div>
        </div>
        <div className="skill-box">
          <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} />
          <div className="skill-name">CSS</div>
        </div>
        <div className="skill-box">
          <FaJsSquare className="skill-icon" style={{ color: "#F7DF1E" }} />
          <div className="skill-name">JavaScript</div>
        </div>
        <div className="skill-box">
          <FaReact className="skill-icon" style={{ color: "#61DAFB" }} />
          <div className="skill-name">React</div>
        </div>
        <div className="skill-box">
          <FaPaintBrush className="skill-icon" style={{ color: "#00C4CC" }} />
          <div className="skill-name">Canva</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
