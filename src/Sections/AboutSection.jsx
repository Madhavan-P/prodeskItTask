import React from "react";

import AboutUs from "../assets/about-us-1.jpg";

const AboutSection = () => {
  return (
    <section className="about-section section">
      <h2 className="section-title">ABOUT US</h2>
      <div className="about-us-ctn">
        <div className="img-ctn">
          <img src={AboutUs} />
        </div>
        <div className="text-ctn about-ctn">
          <h2 className="company-name ">PRODESK IT</h2>
          <p className="secondary-text">
            Welcome to Prodesk, a leading provider of innovative software
            solutions for businesses worldwide.
          </p>
          <a className="btn primaryBtn margin-btn">Learn More</a>
        </div>
      </div>
      <div>
        <div className="about-tag-ctn">
          <a className="about-tags">OUR LEADERS</a>
          <a className="about-tags">ABOUT US</a>
          <a className="about-tags">TESTIMONIALS</a>
        </div>
        <div className="about-us-card-ctn">
          <div className="about-us-card">
            <h3>FOUNDER</h3>
            <img src="" />
            <p>XXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
