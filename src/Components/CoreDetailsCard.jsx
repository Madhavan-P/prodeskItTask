import React from "react";
import logo from "../assets/logo.png";

const CoreDetailsCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn ">
      {cardDetails.map((details, index) => (
        <div
          className={`coreDetails-card test-card coreCard0${index}`}
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
            {/* <span>{details.role}</span> */}
          </h3>
          <h3 className="test-highlight">{details.highlight}</h3>
          <div className="card-text">
            <p>{details.text}</p>
            {/* <a className="btn primaryBtn">Learn More</a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreDetailsCard;
