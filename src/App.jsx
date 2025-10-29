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
// import P7 from "./assets/partner-7.avif";
// import P7 from "./assets/partner-4.avif";
// import P8 from "./assets/partner-4.avif";

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
          <img src={P1} className="item item1" />
          <img src={P2} className="item item2" />
          <img src={P3} className="item item3" />
          <img src={P4} className="item item4" />
          <img src={P5} className="item item5" />
          <img src={P6} className="item item6" />
        </div>
      </section>
    </>
  );
}

export default App;
