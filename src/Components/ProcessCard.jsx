// import React, { useEffect, useState } from "react";

const ProcessCard = ({ details }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % details.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [details.length]);

  return (
    // <div
    //   className="process-card-ctn"
    //   style={{
    //     transform: `translateX(-${currentIndex * 100}%)`,
    //     transition: "transform 0.8s ease-in-out",
    //   }}
    // >
    // {details.map((content, index) => (
    <div className="process-card">
      <div className="left">
        <div className="card-left-top">
          <div className="circle-icon">
            <img src={details.icon} className="icon" />
          </div>
          <div className="text-ctn">
            <h3>{details.title}</h3>
            <p className="secondary-text">{details.secondTitle}</p>
          </div>
        </div>
        <div className="card-left-bottom">
          <p className="secondary-text">{details.text}</p>
          <a className="btn primaryBtn margin-btn">Learn More</a>
        </div>
      </div>
      <div className="right">
        <img src={details.img} />
      </div>
    </div>
    // ))}
    // </div>
  );
};

export default ProcessCard;
