import React from "react";
// import Hero01 from "../assets/hero-1.avif";
import Hero01 from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-1">
        <small className="small-txt">No:1 Company in Asia</small>
        <h1>Transform Challenges into Breakthrough Solutions</h1>
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
              <p>Punctual</p>
            </div>
            <div className="hero-letter letter2">
              <h1>R</h1>
              <p>Reliable</p>
            </div>
            <div className="hero-letter letter3">
              <h1>O</h1>
              <p>Optimistic</p>
            </div>
            <div className="hero-letter letter4">
              <h1>D</h1>
              <p>Dedicated</p>
            </div>
            <div className="hero-letter letter5">
              <h1>E</h1>
              <p>Efficient</p>
            </div>
            <div className="hero-letter letter6">
              <h1>S</h1>
              <p>Sincere</p>
            </div>
            <div className="hero-letter letter7">
              <h1>K</h1>
              <p>Keen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
