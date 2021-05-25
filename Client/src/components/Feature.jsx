import React from "react";
import feature from "../images/featureproject1.png";

const Feature = () => {
  return (
    <section class="featured">
      <div class="left">
        <div class="inner transition2">
          <p class="subtitle">Featured Project</p>
          <a href="https://buildersolar.webflow.io/" className="featured-title">
            Leutrimolluri.com Blog App
          </a>
          <small class="small">It will be available soon</small>

          <p class="featured-desc">
            This Application has a fully featured and customizable layouts, with
            user authentication and private routes. It has also direct message
            and comment section per each blog.
          </p>

          <p class="subtitle">More To Come Soon.</p>
        </div>
      </div>
      <img class="right transition2" src={feature} alt="Featured Project" />
    </section>
  );
};

export default Feature;
