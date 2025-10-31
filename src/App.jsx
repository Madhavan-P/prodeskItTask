// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
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

function App() {
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
      <section className="partner-section-ctn">
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
      <section className="new-updates">
        <h2>OUR NEW UPDATES</h2>
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
    </>
  );
}

export default App;
