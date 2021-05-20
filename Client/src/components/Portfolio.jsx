import React from "react";
import crwn from "../images/crwn.png";
import slack from "../images/slack-features.jpg";
import startup from "../images/startup.png";
import alan from "../images/alan.png";

const Portfolio = () => {
  return (
    <section id="work" class="portfolio">
      <div class="inner bottom transition2">
        <a href="/" class="featured-title">
          My Pojects
        </a>
        <p class="subtitle">/ All My Pojects With Live Link /</p>
      </div>
      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">Slack Clone App</p>

            <p class="featured-title">slack-clone-app.netlify.app</p>
            <p class="featured-desc">
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

      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">CRWN Brand</p>

            <p class="featured-title">crwn-brand-live.herokuapp.com</p>
            <p class="featured-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit sint, molestias qui nihil accusamus praesentium vel
              tenetur quisquam quas rem.
            </p>
          </div>
        </div>
        <a
          href="https://crwn-brand-live.herokuapp.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={crwn} alt="Fretastic" />
        </a>
      </div>

      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">CleanUp Co.</p>

            <p class="featured-title">startup-next.netlify.app</p>
            <p class="featured-desc">
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
      <div class="portfolio-container transition3">
        <div class="portfolio-left">
          <div class="inner">
            <p class="subtitle">Alan AI.</p>

            <p class="featured-title">alanai-app.netlify.app</p>
            <p class="featured-desc">
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
    </section>
  );
};

export default Portfolio;
