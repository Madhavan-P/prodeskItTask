import React from "react";

import Logo from "../assets/logo.png";
// import { a } from "react-router-dom";

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
        </div>
        <div className="footer-container link"></div>
      </div>
      <div className="footer-divider"></div>
      <p className="copyright">
        Copyright © 2025 Prodesk Engineering Manpower All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
