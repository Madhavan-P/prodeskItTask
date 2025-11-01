import React, { useEffect } from "react";

const ProcessCard = ({ details }) => {
  useEffect(() => {
    console.log("process card");
    console.log(details);
  }, []);
  return (
    <div className="process-card-ctn">
      {details.map((content, index) => (
        <div className="process-card" key={index}>
          <div className="left">
            <div className="card-left-top">
              <div className="circle-icon">
                <img src={content.icon} className="icon" />
              </div>
              <div className="text-ctn">
                <h3>{content.title}</h3>
                <p className="secondary-text">{content.secondTitle}</p>
              </div>
            </div>
            <div className="card-left-bottom">
              <p className="secondary-text">{content.text}</p>
              <a className="btn primaryBtn margin-btn">Learn More</a>
            </div>
          </div>
          <div className="right">
            <img src={content.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessCard;
