import React from "react";
import logo from "../assets/logo.png";

const AdminCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn">
      {cardDetails.map((details, index) => (
        <div
          className={`coreDetails-card admincard admincard0${index}`}
          key={index}
        >
          <div className="test-profile">
            <div className="test-border"></div>
            <h1>
              <img src={logo} />
            </h1>
          </div>
          <h3 className="test-name">
            {details.name} <br />
            <span>{details.role}</span>
          </h3>
          <blockquote>“{details.quotes}”</blockquote>
          <img src={details.sign} className="sign" />
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
