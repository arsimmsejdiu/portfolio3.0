import React from "react";
import crwn from "../images/crwn.png";
import slack from "../images/slack-features.jpg";
import startup from "../images/startup.png";
import alan from "../images/alan.png";
import Pagination from "@material-ui/lab/Pagination";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio">
      <div className="inner bottom transition2">
        <a href="/" className="featured-title">
          My Pojects
        </a>
        <p className="subtitle">/ All My Pojects With Live Link /</p>
      </div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="featured-title">slack-clone-app.netlify.app</p>
            <p className="subtitle">#Slack Clone App</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a
          href="https://slack-clone-app.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={slack} alt="Fretastic" />
        </a>
      </div>

      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">CRWN Brand</p>

            <p className="featured-title">crwn-brand-live.herokuapp.com</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a
          href="https://crwn-branding.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={crwn} alt="Fretastic" />
        </a>
      </div>

      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">CleanUp Co.</p>

            <p className="featured-title">startup-next.netlify.app</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a
          href="https://startup-next.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={startup} alt="Fretastic" />
        </a>
      </div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">Alan AI.</p>

            <p className="featured-title">alanai-app.netlify.app</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a
          href="https://alanai-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={alan} alt="Fretastic" />
        </a>
      </div>
      <div classNameName="inner bottom transition2 featured-title">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </section>
  );
};

export default Portfolio;
