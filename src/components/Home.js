import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profileImage from "./profile.jpg";
import leetcodeLogo from "./leet-logo2.png";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-image">
        <img src={profileImage} alt="Bollena Anvitha" />
      </div>
      <div className="home-content">
        <h1 id="p2">Hello, I'm <span className="highlight">"Bollena Anvitha"</span></h1>
        <p id="p1">And I'm good at "Front-end Development"<br /></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anvitha-bollena-25566926b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/AnvithaBollena" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/Anvitha_25/" target="_blank" rel="noopener noreferrer">
            <img src={leetcodeLogo} alt="LeetCode" style={{ width: '35px', height: '35px' }} />
          </a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1yiOD_ZYDvR-wUe0-Onpzao2AtMIQdJ44" download="Anvitha_Resume.pdf" className="btn btn-resume">Download Resume</a>
      </div>
    </section>
  );
}

export default Home;