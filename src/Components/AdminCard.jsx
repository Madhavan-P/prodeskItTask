import React from "react";

const AdminCard = ({ cardDetails }) => {
  return (
    <div className="about-us-card-ctn">
      {cardDetails.map((details, index) => (
        <div className="about-us-card" key={index}>
          <div className="admin-card-img">
            <img src={details.img} alt={details.name} />
          </div>
          <h3>{details.name}</h3>
          <p>{details.role}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
