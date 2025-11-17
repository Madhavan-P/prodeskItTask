import React from "react";
import DomainDetailsPage from "../Components/DomainDetailsPage";

import Domain1 from "../assets/domain-card-1.png";
import Domain2 from "../assets/domain-card-2.png";
import Domain3 from "../assets/domain-card-3.png";
import Domain4 from "../assets/domain-card-4.png";
import Domain5 from "../assets/domain-card-5.png";
import Domain6 from "../assets/domain-card-6.png";
import Domain7 from "../assets/domain-card-7.png";
import Domain8 from "../assets/domain-card-8.png";
import { useNavigate } from "react-router-dom";

const DomainSection = () => {
  const navigate = useNavigate();
  return (
    <section className="section centerAlign domain-section">
      <h2 className="section-title">OUR INDUSTRY EXPERTISE AND SOLUTIONS</h2>
      <p className="secondary-text text">
        Creating business value at the intersection of your industry
        transformation and today’s latest technology innovation.
      </p>

      <div className="domain-card-ctn">
        <div
          className="domain-card bg-1"
          onClick={() => navigate("/domain/banking-financial")}
        >
          <p>Banking & Financial</p>
          <img src={Domain1} />
        </div>

        <div
          className="domain-card bg-2"
          onClick={() => navigate("/domain/insurance")}
        >
          <p>Insurance</p>
          <img src={Domain2} />
        </div>

        <div
          className="domain-card bg-3"
          onClick={() => navigate("/domain/healthcare")}
        >
          <p>Healthcare</p>
          <img src={Domain3} />
        </div>
      </div>

      <div className="domain-card-ctn">
        <div
          className="domain-card bg-4"
          onClick={() => navigate("/domain/life-sciences")}
        >
          <p>Life Sciences</p>
          <img src={Domain4} />
        </div>

        <div
          className="domain-card bg-5"
          onClick={() => navigate("/domain/industrial")}
        >
          <p>Industrial</p>
          <img src={Domain5} />
        </div>

        <div
          className="domain-card bg-6"
          onClick={() => navigate("/domain/software-hi-tech")}
        >
          <p>Software & Hi-Tech</p>
          <img src={Domain6} />
        </div>
      </div>

      <div className="domain-card-ctn">
        <div
          className="domain-card bg-7"
          onClick={() => navigate("/domain/telecom-media")}
        >
          <p className="dom-card-text">Telecom & Media</p>
          <img src={Domain7} />
        </div>

        <div
          className="domain-card bg-8"
          onClick={() => navigate("/domain/consumer-tech")}
        >
          <p>Consumer Tech</p>
          <img src={Domain8} />
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
