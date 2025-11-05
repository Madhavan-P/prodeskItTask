import React from "react";

import Domain1 from "../assets/domain-card-1.png";
import Domain2 from "../assets/domain-card-2.png";
import Domain3 from "../assets/domain-card-3.png";
import Domain4 from "../assets/domain-card-4.png";
import Domain5 from "../assets/domain-card-5.png";
import Domain6 from "../assets/domain-card-6.png";
import Domain7 from "../assets/domain-card-7.png";
import Domain8 from "../assets/domain-card-8.png";

const DomainSection = () => {
  return (
    <section className="section centerAlign domain-section">
      <h2 className="section-title">OUR INDUSTRY EXPERTISE AND SOLUTIONS</h2>
      <p className="secondary-text">
        Creating business value at the intersection of your industry
        transformation and today’s latest technology innovation.
      </p>
      <div className="domain-card-ctn">
        <div className="domain-card bg-1">
          <div className="domain-text-ctn">
            <p>
              Banking & <br />
              Financial
            </p>
          </div>
          <div className="domain-img-ctn">
            <img src={Domain1} />
          </div>
        </div>
        <div className="domain-card bg-2">
          <p>Insurance</p>
          <div className="domain-img-ctn">
            <img src={Domain2} />
          </div>
        </div>
        <div className="domain-card bg-3">
          <p>Healthcare</p>
          <div className="domain-img-ctn">
            <img src={Domain3} />
          </div>
        </div>
      </div>
      <div className="domain-card-ctn">
        <div className="domain-card bg-4">
          <p>Life Sciences</p>
          <div className="domain-img-ctn">
            <img src={Domain4} />
          </div>
        </div>
        <div className="domain-card bg-5">
          <p>Industrial</p>
          <div className="domain-img-ctn">
            <img src={Domain5} />
          </div>
        </div>
        <div className="domain-card bg-6">
          <p>
            Software & <br />
            Hi-Tech
          </p>
          <div className="domain-img-ctn">
            <img src={Domain6} />
          </div>
        </div>
      </div>
      <div className="domain-card-ctn card-3">
        <div className="domain-card bg-7">
          <p>Telecom & Media</p>
          <div className="domain-img-ctn">
            <img src={Domain7} />
          </div>
        </div>
        <div className="domain-card bg-8">
          <p>Consumer Tech</p>
          <div className="domain-img-ctn">
            <img src={Domain8} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
