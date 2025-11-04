import React from "react";
import Hero01 from "../assets/hero-1.avif";

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
        <div className="hero-ctn  ctn01">
          <img src={Hero01} />
        </div>
        <div className="hero-ctn ctn02">
          <img src={Hero01} />
        </div>
        <div className="hero-ctn ctn03">
          <img src={Hero01} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
