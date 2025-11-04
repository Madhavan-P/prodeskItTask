import React, { useState } from "react";

import Menu from "../assets/menu.png";

import NavList from "./NavList";
import GetStartedBtn from "./GetStartedBtn.jsx";
import Close from "../assets/close.png";

const Header = () => {
  const MenuList = ["Home", "Our Process", "Services", "About Us"];

  const [navList, setNavList] = useState(false);
  return (
    <header>
      <h1 className="logo company-name">PRODESK IT</h1>
      <NavList List={MenuList} Class="nav-menu" />
      <div className="hanberger-menus">
        {navList ? (
          <img
            src={Close}
            className="header-icon close"
            onClick={() => setNavList(false)}
          />
        ) : (
          <img
            src={Menu}
            className="header-icon menu"
            onClick={() => setNavList(true)}
          />
        )}
      </div>

      <NavList List={MenuList} Class={`mobile-nav ${navList ? "" : "none"}`} />
    </header>
  );
};

export default Header;
