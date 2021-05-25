import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import cv from "../images/cv.svg";

const Header = () => {
  return (
    <div class="nav-container">
      <header>
        <div>
          <span className="point"></span>
          <Link to="/" class="logo">
            Arsim Sejdiu
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/#work">My work</a>
            </li>
            <li>
              <a href="/#skills">My skills</a>
            </li>
            <li>
              <Link to="/contact">Hire me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div class="social-header">
        <ul>
          <li>
            <a
              href="https://github.com/arsimmsejdiu"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="dribbble" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arsim-sejdiu-93447331/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="behance" />
            </a>
          </li>
          <li>
            <Link to="/">
              <img src={instagram} alt="insta" />
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1bJhjGIvlsJJTPCxwsY0RvGEkHAk9r_Zv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cv} alt="cv" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
