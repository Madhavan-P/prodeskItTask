import React from "react";

import Menu from "../assets/menu.png";
import Close from "../assets/close.png";

const Header = () => {
  return (
    <header>
      <h1 className="logo company-name">PRODESK IT</h1>
      <img src={Menu} className="header-icon menu" />
      <img src={Close} className="header-icon close" />
      <div className="nav-menu">
        <li className="navlinks">Home</li>
        <li className="navlinks">Our Process</li>
        <li className="navlinks">Services</li>
        <li className="navlinks">About Us</li>
        <a href="#" className="btn primaryBtn">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
