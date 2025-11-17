import React from "react";
import GetStartedBtn from "./GetStartedBtn";
import { NavLink } from "react-router-dom";

const NavList = ({ List, Class, links, fn }) => {
  console.log(links[2]);
  return (
    <ul className={Class}>
      {List.map((list, index) => (
        <NavLink
          key={index}
          className="navlinks"
          to={links[index]}
          style={{ cursor: "pointer" }}
          onClick={fn}
        >
          <li>{list}</li>
        </NavLink>
      ))}
      <li>
        <GetStartedBtn fn={fn} />
      </li>
    </ul>
  );
};

export default NavList;
