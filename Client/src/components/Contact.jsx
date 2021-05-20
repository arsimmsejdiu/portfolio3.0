import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import smartphone from "../images/smartphone.png";
import Message from "./Message";

let tl = gsap.timeline();
const heroAnimation = (completeAnimation) => {
  tl.from(".content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: "Power4.easeOut",
  });
  tl.from(
    ".stagger1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: "Power4.easeOut",
      duration: 2,
    },
    "-=1.5"
  );
  tl.from(
    ".hero-design",
    {
      opacity: 0,
      y: 50,
      ease: "Power4.easeOut",
      duration: 1,
    },
    "-=2"
  );

  gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: "Back.easeOut.config(1.7)",
  });

  gsap.from(".transition2", {
    scrollTrigger: {
      trigger: ".transition2",
      start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
  });

  gsap.from(".transition3", {
    scrollTrigger: {
      trigger: ".transition3",
      start: "top center",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
  });
};

const Contact = () => {
  const [setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    heroAnimation(completeAnimation);
  });
  return (
    <div className="hero">
      <div className="content">
        <h1 className="stagger1">Hire Me</h1>
        <div className="meet stagger1">
          <ul>
            <li>
              <Link to="/">
                <img src={smartphone} alt="smart" />
              </Link>
            </li>
          </ul>
          <p className="phone">+33749301287</p>
        </div>
        <p className=" stagger1">
          Versatile, results-driven professional with 2+ years comprehensive
          experience Fullstack Developer adept in bringing forth expertise in
          design, installation, testing and maintenance of software systems.
          Equipped with a diverse and promising skill-set. Proficient in various
          platforms, languages, and embedded systems. Experienced with the
          latest cutting edge development tools and procedures. Able to
          effectively self-manage during independent projects, as well as
          collaborate as part of a productive team.
        </p>
        <div className="social-header">
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
                <img src={instagram} alt="instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Message />
    </div>
  );
};

export default Contact;
