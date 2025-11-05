import React from "react";

import RightArrowWhite from "../assets/right-arrow-white.svg";
import RightArrowBlue from "../assets/right-arrow-blue.svg";

import serviceIcon01 from "../assets/service-icon-1.png";
import serviceIcon02 from "../assets/web-icon.png";
import serviceIcon03 from "../assets/mobile-icon.png";
import serviceIcon04 from "../assets/data-icon.png";
import serviceIcon05 from "../assets/it-icon.png";
import serviceIcon06 from "../assets/cyber-icon.png";
import serviceIcon07 from "../assets/cloud-icon.png";
import serviceIcon08 from "../assets/logo-icon.png";
import serviceIcon09 from "../assets/digital-icon.png";

const ServiceSection = () => {
  return (
    <section className="section centerAlign">
      <h1 className="section-title">Our Services</h1>
      <p className="secondary-text">
        Delivering domain expertise and technology-driven offerings to help you
        turn digital challenges into opportunities.
      </p>
      <div className="service-card-ctn">
        <div className="service-card">
          <img src={serviceIcon01} className="card-icon" />
          <p>Software Development</p>
          <small>30/10/2025</small>
          <div className="service-details s1">
            <h2>Software Development</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon02} className="card-icon" />
          <p>Web Development</p>
          <small>30/10/2025</small>
          <div className="service-details s2">
            <h2>Web Development</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon03} className="card-icon" />
          <p>App Development</p>
          <small>30/10/2025</small>
          <div className="service-details s3">
            <h2>Mobile Development</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon04} className="card-icon" />
          <p>Data Analytics</p>
          <small>30/10/2025</small>
          <div className="service-details s4">
            <h2>Data Analytics</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon05} className="card-icon" />
          <p>It Consulting</p>
          <small>30/10/2025</small>
          <div className="service-details s5">
            <h2>It Consulting</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon06} className="card-icon" />
          <p>Cybersecurity</p>
          <small>30/10/2025</small>
          <div className="service-details s6">
            <h2>Cybersecurity</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon07} className="card-icon" />
          <p>Cloud Services</p>
          <small>30/10/2025</small>
          <div className="service-details s7">
            <h2>Cloud Services</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon08} className="card-icon" />
          <p>Logo Design</p>
          <small>30/10/2025</small>
          <div className="service-details s8">
            <h2>Logo Design</h2>s
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon09} className="card-icon" />
          <p>Digital Marketing</p>
          <small>30/10/2025</small>
          <div className="service-details s9">
            <h2>Digital Marketing</h2>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
