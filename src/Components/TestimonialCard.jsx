import React from "react";

import star from "../assets/star-1.svg";

const TestimonialCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn ">
      {cardDetails.map((details, index) => (
        <div className="about-us-card coreDetails-card" key={index}>
          <h1 className="test-profile">{details.letter}</h1>
          <div className="star-ctn">
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
            <img src={star} className="star" />
          </div>
          <h3>{details.highlight}</h3>
          <small>{details.date}</small>
          <p>{details.text}</p>
          <a className="btn primaryBtn">Learn More</a>
          {/* <div className="card-text-testimonial"> */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
