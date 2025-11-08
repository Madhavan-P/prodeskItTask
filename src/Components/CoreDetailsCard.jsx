import React from "react";

const CoreDetailsCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn ">
      {cardDetails.map((details, index) => (
        <div className="coreDetails-card" key={index}>
          <div className="coreCard-img">
            <img src={details.img} alt={details.name} />
          </div>
          <h3>{details.name}</h3>
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
