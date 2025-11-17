import React from "react";
import { useNavigate } from "react-router-dom";

const Oppertunities = () => {
  const navigate = useNavigate();
  return (
    <div className="section opp-section">
      <h1>Let's Unleash Your Full Potential</h1>
      <p>
        Start your career at Persistent today and let’s unleash your full
        potential.
      </p>
      <a className="btn primaryBtn" onClick={() => navigate("/careers")}>
        Explore Oppertunities
      </a>
    </div>
  );
};

export default Oppertunities;
