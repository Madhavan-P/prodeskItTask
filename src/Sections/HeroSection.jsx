import React from "react";
// import Hero01 from "../assets/hero-1.avif";
import Hero01 from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-1">
        <small className="small-txt">
          <i class="fas fa-trophy"></i>No:1 Company in Asia
        </small>
        <h1>
          <span className="hero-highlight">Transform Challenges</span> into
          Breakthrough Solutions
        </h1>
        <p>Shape the future with confidence</p>
        <a className="btn primaryBtn">Find Out More</a>
      </div>
      <div className="hero-2">
        <div className="hero-border"></div>
        <div className="hero-ctn">
          <div className="hero-img-ctn">
            <img src={Hero01} />
            <div className="hero-letter letter1">
              <h1>P</h1>
              <p>Precision</p>
            </div>
            <div className="hero-letter letter2">
              <h1>R</h1>
              <p>Reliability</p>
            </div>
            <div className="hero-letter letter3">
              <h1>O</h1>
              <p>Optimization</p>
            </div>
            <div className="hero-letter letter4">
              <h1>D</h1>
              <p>Dynamism</p>
            </div>
            <div className="hero-letter letter5">
              <h1>E</h1>
              <p>Excellence</p>
            </div>
            <div className="hero-letter letter6">
              <h1>S</h1>
              <p>Strategy</p>
            </div>
            <div className="hero-letter letter7">
              <h1>K</h1>
              <p>Knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
