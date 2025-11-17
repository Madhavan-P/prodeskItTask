import React from "react";

import Job from "../assets/job.png";
import Internship from "../assets/intern.png";
import Product from "../assets/product.png";
import Cubes from "../assets/cubes.png";
import Services from "../assets/services.png";
import Branch from "../assets/branch.png";
import Information from "../assets/information.png";
import { useNavigate } from "react-router-dom";

const UpdateSection = () => {
  const navigate = useNavigate();
  return (
    <section className="new-updates section">
      <h2 className="section-title"> OUR NEW UPDATES</h2>
      <div className="update-card-ctn">
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Internship} className="card-icon" />
            <p>Internships</p>
            <small>30/10/2025</small>
          </div>
        </div>
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Job} className="card-icon" />
            <p>Job</p>
            <small>28/10/2025</small>
          </div>
        </div>
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Cubes} className="card-icon" />
            <p>New Product</p>
            <small>26/10/2025</small>
          </div>
        </div>
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Services} className="card-icon" />
            <p>New Service</p>
            <small>24/10/2025</small>
          </div>
        </div>
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Information} className="card-icon" />
            <p>New Information</p>
            <small>22/10/2025</small>
          </div>
        </div>
        <div
          className="update-card-container"
          onClick={() => navigate("/our-updates")}
        >
          <div className="border"></div>
          <div className="update-card">
            <img src={Branch} className="card-icon" />
            <p>New Branch</p>
            <small>20/10/2025</small>
          </div>
        </div>
      </div>
      <a className="btn secondaryBtn" onClick={() => navigate("/our-updates")}>
        More Updates
      </a>
    </section>
  );
};

export default UpdateSection;
