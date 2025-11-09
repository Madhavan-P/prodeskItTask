import React from "react";

import Logo from "../assets/logo.png";
import insta from "../assets/insta-p.svg";
import fb from "../assets/fb-b.svg";
import linkedin from "../assets/linkedin-b.svg";
import youtube from "../assets/yt-p.svg";
import email from "../assets/email-p.svg";
import call from "../assets/telephone.png";

import location from "../assets/location.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="footer-container footer1">
          <img src={Logo} className="footer-logo" />
          <div className="text-container">
            <span></span>
            <h2 className="footer-title">IT & ENGINEERING SERVICES</h2>
          </div>
          <p>
            Welcome to Prodesk, a leading provider of innovative software
            solutions for businesses worldwide.
          </p>
          <div className="footer-icon">
            <img src={insta} />
            <img src={fb} />
            <img src={linkedin} />
            <img src={youtube} />
          </div>
        </div>
        <div className="footer-links-ctn">
          <div className="footer-container link">
            <h2 className="footer-title ">Company</h2>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Our Process</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </div>
          <div className="footer-container link">
            <h2 className="footer-title ">Our Services</h2>
            <li>
              <p>Software Development</p>
            </li>
            <li>
              <p>Web Development</p>
            </li>
            <li>
              <p>App Development</p>
            </li>
            <li>
              <p>Cybersecurity</p>
            </li>
            <li>
              <p>Data Analytics</p>
            </li>
          </div>
          <div className="footer-container">
            <h2 className="footer-title ">About Us</h2>
            <li className="footer-about-ctn">
              <img src={location} className="footer-aboutus-icon" />
              <div>Noida, Uttar Pradesh</div>
              {/* 91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2,
              Noida, Uttar Pradesh 201301 */}
            </li>
            <li className="footer-about-ctn">
              <img src={email} className="footer-aboutus-icon" />
              <div>info@prodesk.in</div>
              {/* 91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2,
              Noida, Uttar Pradesh 201301 */}
            </li>
            <li className="footer-about-ctn">
              <img src={call} className="footer-aboutus-icon" />
              <div>8851407750</div>
              {/* 91springboard, Plot No. D, 107, Vyapar Marg, D Block, Sector 2,
              Noida, Uttar Pradesh 201301 */}
            </li>
            <li className="footer-contact-text">
              <div>Better yet, see us in person!</div>
            </li>
            <li className="footer-contact-text">
              <div>Our Bussiness Hours</div>
            </li>
            <li className="footer-contact-text">
              <div>MON - SAT / 09:00 - 07:00</div>
            </li>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="confidential-contents link">
        <p>Privacy Notice</p>
        <p>Cookie Policy</p>
        <p>Terms of Use </p>
      </div>
      <p className="copyright">
        Copyright © 2025 Prodesk Engineering Manpower All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
