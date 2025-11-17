import React from "react";

import Wh from "../assets/wh.png";
import Call from "../assets/telephone.png";

import Insta from "../assets/insta-light.svg";
import Facebook from "../assets/facebook-light.svg";
import Linkedin from "../assets/linkedin-light.svg";
import Twitter from "../assets/twitter.svg";

import Play from "../assets/playstore.svg";
import Mac from "../assets/apple.svg";

import { NavLink } from "react-router-dom";
const FooterSection = () => {
  return (
    <section className="section footer-section">
      <div className="footer-grid">
        <div className="foot-col-1">
          <div className="col-1-row-1">
            <p className="company-name">Prodesk</p>
            <div className="line"></div>
          </div>
          <h2>
            <span className="footer-highlight">Transforming Ideas into </span>{" "}
            Scalable Digital Solutions
          </h2>
          <div className="col-1-row-3">
            <div className="line-2"></div>
          </div>
          <p className="foot-text">
            Welcome to Prodesk, a leading provider of innovative software
            solutions for businesses worldwide.
          </p>
        </div>
        <div className="foot-col-2">
          <h2>
            <span className="foot-text-ctn"></span>
            <span>Our</span>
            Services
          </h2>
          <NavLink to="/our-services">
            <li>Software Development</li>
          </NavLink>
          <NavLink to="/our-services">
            <li>Data Analytics</li>
          </NavLink>
          <NavLink to="/our-services">
            <li>Cloud Services</li>
          </NavLink>
          <NavLink to="/our-services">
            <li>Cyber Security</li>
          </NavLink>
        </div>
        <div className="foot-col-2">
          <h2>
            <span className="foot-text-ctn"></span>
            <span>Quick</span>
            Links
          </h2>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about-us">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/our-process">
            <li>Our Process</li>
          </NavLink>
          <NavLink to="/careers">
            <li>Careers</li>
          </NavLink>
          <NavLink to="/contact-us">
            <li>Contact Us</li>
          </NavLink>
          <NavLink to="/faq">
            <li>FAQ</li>
          </NavLink>
        </div>
        <div className="foot-col-3">
          <h1 className="foot-title">PRODESK IT</h1>
          <p className="office">
            <a
              href="https://www.google.com/maps/search/?api=1&query=91springboard,+Vyapar+Marg,+Noida"
              target="_blank"
              rel="noopener noreferrer"
              // className="contact-link"
            >
              <span>Main Office :</span> Noida, Uttar Pradesh
            </a>
          </p>
          <div className="wh-ctn">
            <img src={Wh} />
            <div className="wh-text-ctn">
              <h4>Our Bussiness Hours</h4>
              <p>Mon - Fri / 09:00 - 06:00</p>
            </div>
          </div>
          <div className="wh-ctn">
            <img src={Call} />
            <div className="wh-text-ctn">
              <h4>Feel Free to Call</h4>
              <p>
                <a href="tel:8851407750" className="contact-link">
                  8851407750
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="client-approach-text">
        <h3 className="">Better yet, see us in person!</h3>
        <p>
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
      </div>
      <div className="footer-row-2">
        <div className="media-ctn">
          <div className="social-media-icon">
            <a href="https://www.instagram.com/prodeskit/" target="_blank">
              <img src={Facebook} className="icon" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/sconso-resources/"
              target="_blank"
            >
              <img src={Twitter} className="icon" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/sconso-resources/"
              target="_blank"
            >
              <img src={Linkedin} className="icon" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/prodeskit/" target="_blank">
              <img src={Insta} className="icon" alt="Instagram" />
            </a>
          </div>
          <div className="app-ctn">
            <div className="wh-ctn ctn">
              <img src={Play} />
              <div className="wh-text-ctn">
                <h4>Google Play</h4>
                <p>Android App On</p>
              </div>
            </div>
            <div className="wh-ctn ctn">
              <img src={Mac} />
              <div className="wh-text-ctn">
                <h4>App Store</h4>
                <p>Download On The</p>
              </div>
            </div>
          </div>
        </div>
        <div className="link-ctn foot-col-2">
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <div className="link-line"></div>
          <NavLink to="/about-us">
            <li>About Us</li>
          </NavLink>
          <div className="link-line"></div>
          <NavLink to="/contact-us">
            <li>Contact Us</li>
          </NavLink>
          <div className="link-line"></div>
          <NavLink to="/faq">
            <li>FAQ</li>
          </NavLink>
        </div>
      </div>
      <div className="foot-row-3">
        <p className="copyright">
          Copyright © 2025 All Rights Reserved by{" "}
          <span>Prodesk Engineering Manpower</span>.
        </p>
        <div className="privacy">
          <a>
            <li>Privacy Notice</li>
          </a>
          <a>
            <li>Cookie Policy</li>
          </a>
          <a>
            <li>Terms of Use</li>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
