import React from "react";

import Wh from "../assets/wh.png";
import Call from "../assets/telephone.png";

import Insta from "../assets/insta-light.svg";
import Facebook from "../assets/facebook-light.svg";
import Linkedin from "../assets/linkedin-light.svg";
import Twitter from "../assets/Twitter.svg";

import Play from "../assets/playstore.svg";
import Mac from "../assets/apple.svg";

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
          <a>
            <li>Software Development</li>
          </a>
          <a>
            <li>Data Analytics</li>
          </a>
          <a>
            <li>Cloud Services</li>
          </a>
          <a>
            <li>Cyber Security</li>
          </a>
        </div>
        <div className="foot-col-2">
          <h2>
            <span className="foot-text-ctn"></span>
            <span>Quick</span>
            Links
          </h2>
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>About Us</li>
          </a>
          <a>
            <li>Our Process</li>
          </a>
          <a>
            <li>Careers</li>
          </a>
          <a>
            <li>Contact Us</li>
          </a>
          <a>
            <li>FAQ</li>
          </a>
        </div>
        <div className="foot-col-3">
          <h1 className="foot-title">PRODESK IT</h1>
          <p className="office">
            <span>Main Office :</span> Noida, Uttar Pradesh
          </p>
          <p className="wh-ctn">
            <img src={Wh} />
            <div className="wh-text-ctn">
              <h4>Our Bussiness Hours</h4>
              <p>Mon - Fri / 09:00 - 06:00</p>
            </div>
          </p>
          <p className="wh-ctn">
            <img src={Call} />
            <div className="wh-text-ctn">
              <h4>Feel Free to Call</h4>
              <p>8851407750</p>
            </div>
          </p>
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
            <img
              src={Facebook}
              className="icon"
              title="Facebook"
              alt="Facebook"
            />
            <img src={Twitter} className="icon" title="Twitter" alt="Twitter" />
            <img
              src={Linkedin}
              className="icon"
              title="LinkedIn"
              alt="LinkedIn"
            />
            <img
              src={Insta}
              className="icon"
              title="Instagram"
              alt="Instagram"
            />
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
          <a>
            <li>Home</li>
          </a>
          <div className="link-line"></div>
          <a>
            <li>About Us</li>
          </a>
          <div className="link-line"></div>
          <a>
            <li>Contact Us</li>
          </a>
          <div className="link-line"></div>
          <a>
            <li>FAQ</li>
          </a>
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
