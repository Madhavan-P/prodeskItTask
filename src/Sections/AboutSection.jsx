import React from "react";

import AboutUs from "../assets/about-us-1.jpg";
import founder from "../assets/founder.jpg";
import coFounder from "../assets/co-founder.jpg";
import hr from "../assets/hr.jpg";
import AdminCard from "../Components/AdminCard";

import Vision from "../assets/vision.jpeg";
import Mission from "../assets/mission-main.jpg";
import Values from "../assets/values.jpg";
import CoreDetailsCard from "../Components/CoreDetailsCard";

const AboutSection = () => {
  const cardLeaders = [
    {
      img: founder,
      role: "Founder",
      name: "Aarav Mehta",
    },
    {
      img: coFounder,
      role: "Co Founder",
      name: "Ananya Sharma",
    },
    {
      img: hr,
      role: "HR Manager",
      name: "Sneha Kapoor",
    },
  ];
  const cardCoreDetails = [
    {
      img: Vision,
      name: "Our Vision",
      text: "At Prodesk, our vision is to be a global leader in innovative software solutions, driving positive change and shaping the future of technology. We envision a world where technology empowers individuals and organizations to achieve their full potential, driving growth, efficiency, and sustainability.",
    },
    {
      img: Mission,
      name: "Our Mission",
      text: "At Prodesk, our mission is to empower businesses to succeed in the digital era by delivering technology solutions that foster efficiency, productivity, and sustainable growth. We aim to be a trusted partner, leveraging the power of innovation to tackle complex challenges and create new opportunities for our clients.",
    },
    {
      img: Values,
      name: "Our Values",
      text: "At Prodesk, we are more than just a software company. We are a team of dedicated professionals who are passionate about leveraging technology to drive innovation, quality, and value for our customers. Our core values guide everything we do, from developing cutting-edge solutions to providing exceptional customer service. Here's a closer look at the values that define us:",
    },
  ];
  return (
    <section className="about-section section">
      <h2 className="section-title">ABOUT US</h2>
      <div className="about-us-ctn">
        <div className="img-ctn">
          <img src={AboutUs} />
        </div>
        <div className="text-ctn about-ctn">
          <h2 className="company-name ">PRODESK IT</h2>
          <p className="secondary-text">
            Welcome to Prodesk, a leading provider of innovative software
            solutions for businesses worldwide.
          </p>
          <a className="btn primaryBtn margin-btn">Learn More</a>
        </div>
      </div>
      <div>
        <div className="about-tag-ctn">
          <a className="about-tags">ABOUT US</a>
          <a className="about-tags">OUR LEADERS</a>
          <a className="about-tags">TESTIMONIALS</a>
        </div>
        <CoreDetailsCard cardDetails={cardCoreDetails} />
        <AdminCard cardDetails={cardLeaders} />
      </div>
    </section>
  );
};

export default AboutSection;
