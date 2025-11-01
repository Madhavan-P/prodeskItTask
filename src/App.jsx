// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProcessCard from "./Components/ProcessCard.jsx";

import Hero01 from "./assets/hero-1.avif";
import P1 from "./assets/partner-1.avif";
import P2 from "./assets/partner-2.avif";
import P3 from "./assets/partner-3.avif";
import P4 from "./assets/partner-4.avif";
import P5 from "./assets/partner-5.avif";
import P6 from "./assets/partner-6.webp";

import Job from "./assets/job.png";
import Internship from "./assets/intern.png";
import Product from "./assets/product.png";
import Cubes from "./assets/cubes.png";

import Step01 from "./assets/step-1.jpeg";
import Step01Icon from "./assets/step-1-icon-1.svg";
import Step02 from "./assets/step-2.webp";
import Step02Icon from "./assets/step-2-icon.svg";
import Step03 from "./assets/step-3.png";
import Step03Icon from "./assets/step-3-icon.svg";
import Step04 from "./assets/step-4.jpg";
import Step04Icon from "./assets/step-4-icon.svg";
import Step05 from "./assets/step-5.jpg";
import Step05Icon from "./assets/step-5-icon.svg";
import Step06 from "./assets/step-6.jpeg";
import Step06Icon from "./assets/step-6-icon.svg";

import leftArrowBlack from "./assets/left-arrow-black.svg";
import rightArrowBlack from "./assets/right-arrow-black.svg";
import leftArrowWhite from "./assets/left-arrow-white.svg";
import rightArrowWhite from "./assets/right-arrow-white.svg";

function App() {
  const processCardList = [
    {
      icon: Step01Icon,
      img: Step01,
      title: "PLANNING",
      secondTitle: "Define the problem and set clear objectives",
      text: `Step 1 of our 6-phase process. We guide your organization through
            each critical stage, ensuring comprehensive solutions and measurable
            outcomes.`,
    },
    {
      icon: Step02Icon,
      img: Step02,
      title: "ANALYSIS",
      secondTitle: "Assess resources, constraints, and opportunities",
      text: `Step 2 of our 6-phase process. We guide your organization
                  through each critical stage, ensuring comprehensive solutions
                  and measurable outcomes.`,
    },
    {
      icon: Step03Icon,
      img: Step03,
      title: "DESIGN",
      secondTitle: "Create visual representations of concepts",
      text: `Step 3 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step04Icon,
      img: Step04,
      title: "DEVELOPMENT",
      secondTitle: "Communicate ideas clearly and effectively",
      text: `Step 4 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step05Icon,
      img: Step05,
      title: "TESTING",
      secondTitle: "Generate innovative solutions and approaches",
      text: `Step 5 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step06Icon,
      img: Step06,
      title: "DEPLOYMENT",
      secondTitle: "Build and implement your solution",
      text: `Step 6 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
  ];
  return (
    <>
      <Header />
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
      <section className="trust-section-ctn">
        <h4>Trusted by innovative organizations worldwide</h4>
        <div className="trust-section">
          <div>
            <h1>500+ </h1>
            <h4>Projects Delivered</h4>
          </div>
          <div>
            <h1>99%</h1>
            <h4>Client Satisfaction</h4>
          </div>
          <div>
            <h1>200+</h1>
            <h4>Industries Served</h4>
          </div>
        </div>
      </section>
      <section className="partner-section-ctn section">
        <div className="ctn-1">
          <h4>Trusted by 13,000+ customers worldwide</h4>
        </div>
        <div className="partner-section">
          <h1 className="item item1">DELL</h1>
          <h1 className="item item2">HP</h1>
          <h1 className="item item3">MICROSOFT</h1>
          <h1 className="item item4">ZOHO</h1>
          <h1 className="item item5">WIPRO</h1>
          <h1 className="item item6">JCB</h1>
        </div>
      </section>
      <section className="new-updates section">
        <h2 className="section-title"> OUR NEW UPDATES</h2>
        <div className="update-card-ctn">
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <img src={Internship} className="card-icon" />
              <p>Internships</p>
              <small>30/10/2025</small>
            </div>
          </div>
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <img src={Job} className="card-icon" />
              <p>Job</p>
              <small>28/10/2025</small>
            </div>
          </div>
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <img src={Cubes} className="card-icon" />
              <p>New Product</p>
              <small>26/10/2025</small>
            </div>
          </div>
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <p>New Service</p>
            </div>
          </div>
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <p>New Information</p>
            </div>
          </div>
          <div className="update-card-container">
            <div className="border"></div>
            <div className="update-card">
              <p>New Branch</p>
            </div>
          </div>
        </div>
        <a className="btn secondaryBtn">More Updates</a>
      </section>
      <section className="process-section section">
        <h2 className="section-title">Our Proven Process</h2>
        <p className="secondary-text">
          Our company's proven methodology transforms complex business
          challenges into strategic advantages through systematic innovation
        </p>
        <ProcessCard details={processCardList} />
        <div className="process-card-ctrl">
          <a className="btn secondaryBtn">Learn More</a>
          <div className="ctrl-ctn">
            <a className="scroll-arrow">
              <img src={leftArrowWhite} className="arrrow white" />
              <img src={leftArrowBlack} className="arrrow black" />
            </a>
            <a className="scroll-arrow">
              <img src={rightArrowWhite} className="arrrow white" />
              <img src={rightArrowBlack} className="arrrow black" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
