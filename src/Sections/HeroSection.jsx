import React from "react";
import Hero01 from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <img src={Hero01} className="hero-img" />
      <div className="hero-1">
        <span className="small-txt">
          <i class="fas fa-trophy"></i>No:1 Company in Asia
        </span>
        <h1>
          <span className="hero-highlight">Transform Challenges</span> into
          Breakthrough Solutions
        </h1>
        <p>Shape the future with confidence</p>
        <div>
          <a className="btn primaryBtn" onClick={() => navigate("/about-us")}>
            Find Out More
          </a>
        </div>
      </div>
      <div className="hero-2">
        <div className="hero-border"></div>
        <div className="hero-ctn">
          <div className="hero-letters">
            <h1 className="letter l1">P</h1>
            <h1 className="letter l2">R</h1>
            <h1 className="letter l3">O</h1>
            <h1 className="letter l4">D</h1>
            <h1 className="letter l5">E</h1>
            <h1 className="letter l6">S</h1>
            <h1 className="letter l7">K</h1>
          </div>

          <div className="hero-abbr-ctn">
            <p className="abbr l1">Precision</p>
            <p className="abbr l2">Reliability</p>
            <p className="abbr l3">Optimization</p>
            <p className="abbr l4">Dynamism</p>
            <p className="abbr l5">Excellence</p>
            <p className="abbr l6">Strategy</p>
            <p className="abbr l7">Knowledge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
