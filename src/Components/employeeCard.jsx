import React from "react";
import logo from "../assets/logo.png";

const EmployeeCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn employee-card">
      {cardDetails.map((details, index) => (
        <div className={`coreDetails-card admincard`} key={index}>
          <div className="employee-img">
            <img src={details.img} />
          </div>
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
          <p
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              bottom: "100px",
              color: "rgba(0,0,0,.8)",
            }}
          >
            {details.skills}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
