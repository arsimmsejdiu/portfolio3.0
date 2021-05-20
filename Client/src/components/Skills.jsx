import React from "react";
import react from "../images/atom.svg";
import node from "../images/nodejs.svg";
import docker from "../images/docker.svg";
import redux from "../images/redux.svg";
import mongodb from "../images/mango.svg";
import javascript from "../images/javascript.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="inner bottom transition2">
          <p className="subtitle">My Programming Stack</p>
          <a href="/" className="featured-title">
            Skills
          </a>
        </div>
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img src={react} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">ReactJS</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img src={node} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">NodeJS</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={docker} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">Docker Containers & Microservices</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={redux} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">Redux State Management</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={mongodb} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">MongoDB Database</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={javascript} alt="UI/UX Icon" />
            </div>
            <p className="skill-title">Javascript</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, odit?
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
