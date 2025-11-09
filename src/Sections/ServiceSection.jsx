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
          <p className="service-name"> Software Development</p>
          <div className="service-details s1">
            <h2>Software Development</h2>
            <p className="service-card-text">
              We craft reliable and scalable software tailored to your business
              needs .
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon02} className="card-icon" />
          <p className="service-name">Web Development</p>
          <div className="service-details s2">
            <h2>Web Development</h2>
            <p className="service-card-text">
              We design and build dynamic, user-friendly websites that deliver
              seamless experiences.
            </p>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon03} className="card-icon" />
          <p className="service-name">App Development</p>
          <div className="service-details s3">
            <h2>Mobile Development</h2>
            <p className="service-card-text">
              We create high-performing mobile apps with stunning UI and smooth
              UX.
            </p>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon04} className="card-icon" />
          <p className="service-name">Data Analytics</p>
          <div className="service-details s4">
            <h2>Data Analytics</h2>
            <p className="service-card-text">
              We turn complex data into actionable insights that drive smarter
              decisions.
            </p>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon05} className="card-icon" />
          <p className="service-name">It Consulting</p>
          <div className="service-details s5">
            <h2>It Consulting</h2>
            <p className="service-card-text">
              We provide expert IT consulting to help you optimize technology
              and operations.
            </p>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon06} className="card-icon" />
          <p className="service-name">Cybersecurity</p>
          <div className="service-details s6">
            <h2>Cybersecurity</h2>
            {/* <p className="service-card-text">
              We safeguard your digital assets with advanced security solutions.
            </p> */}
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon07} className="card-icon" />
          <p className="service-name">Cloud Services</p>
          <div className="service-details s7">
            <h2>Cloud Services</h2>
            {/* <p className="service-card-text">
              We enable seamless cloud migration and management for scalability
              and efficiency.
            </p> */}
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon08} className="card-icon" />
          <p className="service-name">Logo Design</p>
          <div className="service-details s8">
            <h2>Logo Design</h2>
            {/* <p className="service-card-text">
              We design creative, memorable logos that capture your brand’s
              essence.
            </p> */}
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
        <div className="service-card">
          <img src={serviceIcon09} className="card-icon" />
          <p className="service-name">Digital Marketing</p>
          <div className="service-details s9">
            <h2>Digital Marketing</h2>
            <p className="service-card-text">
              We boost your online presence through smart digital strategies.
            </p>
            {/* <div className="btn primaryBtn scroll-arrow">
              <img src={RightArrowBlue} className="arrrow a-blue" />
              <img src={RightArrowWhite} className="arrrow a-white" />
            </div> */}
          </div>
        </div>
      </div>
      <a className="btn secondaryBtn">Learn More</a>
    </section>
  );
};

export default ServiceSection;
