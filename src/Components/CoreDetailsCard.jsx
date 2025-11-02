import React from "react";
import upArrow from "../assets/up-black.svg";

const CoreDetailsCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn ">
      {cardDetails.map((details, index) => (
        <div className="about-us-card coreDetails-card" key={index}>
          <div className="admin-card-img">
            <img src={details.img} alt={details.name} />
          </div>
          <h3>{details.name}</h3>
          <div className="arrow-icon">
            <img src={upArrow} />
          </div>
          <div className="card-text">
            <p>{details.text}</p>
            <a className="btn primaryBtn">Learn More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreDetailsCard;
