import React from "react";

import GetStartedBtn from "./GetStartedBtn";

const NavList = ({ List, Class }) => {
  return (
    <div className={Class}>
      {List.map((list, index) => (
        <li key={index} className="navlinks">
          {list}
        </li>
      ))}
      <GetStartedBtn />
    </div>
  );
};

export default NavList;
