import React from "react";

import star from "../assets/star-1.svg";

const TestimonialCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn ">
      {cardDetails.map((details, index) => (
        <div className={`coreDetails-card test-card card0${index}`} key={index}>
          <div className="test-profile">
            <div className="test-border"></div>
            <h1>{details.letter}</h1>
          </div>
          <h3 className="test-name">
            {details.name} <br />
            <span>{details.role}</span>
          </h3>
          <div className="star-ctn">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
          </div>
          <h3 className="test-highlight">{details.highlight}</h3>
          <small className="test-date">{details.date}</small>
          <div className="card-text">
            <p>{details.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
