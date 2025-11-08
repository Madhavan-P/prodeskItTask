import React, { useState } from "react";

import AboutUs from "../assets/about-us-1.jpg";
import founder from "../assets/our-founder.jpg";
import coFounder from "../assets/our-co-founder.jpg";
import hr from "../assets/our-hr.avif";
import AdminCard from "../Components/AdminCard";

// import Vision from "../assets/vision.jpeg";
// import Mission from "../assets/mission-main.jpg";
// import Values from "../assets/values.jpg";
import Vision from "../assets/our-vision.jpg";
import Mission from "../assets/our-mission.jpg";
import Values from "../assets/our-values.webp";

import CoreDetailsCard from "../Components/CoreDetailsCard";
import TestimonialCard from "../Components/TestimonialCard";

import sign1 from "../assets/sign-1.svg";
import sign3 from "../assets/sign-2.svg";
import sign2 from "../assets/sign-3.svg";

const AboutSection = () => {
  const [selectedTag, setSelectedTag] = useState(0);
  const cardLeaders = [
    {
      letter: "A",
      img: founder,
      role: "Founder",
      name: "Aarav Mehta",
      quotes: `Innovation isn’t about ideas; it’s about turning ideas into meaningful impact.`,

      sign: sign1,
    },
    {
      letter: "A",
      img: coFounder,
      role: "Co Founder",
      name: "Ananya Sharma",
      quotes: `Building technology is easy; building trust through technology is what defines us.`,
      sign: sign2,
    },
    {
      letter: "S",
      img: hr,
      role: "HR Manager",
      name: "Sneha Kapoor",
      quotes: `A company grows when its people feel valued — culture is our strongest code.`,
      sign: sign3,
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
      text: "At Prodesk, we are more than just a software company. We are a team of dedicated professionals who are passionate about leveraging technology to drive innovation, quality, and value for our customers. Our core values guide everything we do, from developing cutting-edge solutions to providing exceptional customer service.",
    },
  ];
  const cardTestimonialsDetails = [
    {
      letter: "M",
      name: "Mahima",
      role: "Founder Of Averon Technologies",
      highlight: "Highly Recommend",
      date: "Mahima 23/08/2025",
      text: "The team at Prodesk is incredibly knowledgeable and professional. They have been a pleasure to work with and have exceeded our expectations.",
    },
    {
      letter: "D",
      name: "Deepak",
      role: "Founder Of Optivine Tech",
      highlight: "Exceeding Expectation",
      date: "Deepak 20/08/2025",
      text: "Working with Prodesk has been a game-changer for our business. Their innovative solutions have helped us streamline our processes and improve efficiency.",
    },
    {
      letter: "Y",
      name: "Yalini",
      role: "Founder Of Zyntrix Global",
      highlight: "Exceptionally brillient",
      date: "Yalini 22/08/2025",
      text: "We have been using Prodesk's software for several years now and have been consistently impressed with its performance and reliability",
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
          <a
            className={`about-tags ${selectedTag === 0 ? "active" : ""}`}
            onClick={() => setSelectedTag(0)}
          >
            ABOUT US
          </a>
          <a
            className={`about-tags ${selectedTag === 1 ? "active" : ""}`}
            onClick={() => setSelectedTag(1)}
          >
            OUR TEAM
          </a>
          <a
            className={`about-tags ${selectedTag === 2 ? "active" : ""}`}
            onClick={() => setSelectedTag(2)}
          >
            TESTIMONIALS
          </a>
        </div>
        {selectedTag === 0 ? (
          <CoreDetailsCard cardDetails={cardCoreDetails} />
        ) : selectedTag === 1 ? (
          <AdminCard cardDetails={cardLeaders} />
        ) : (
          <TestimonialCard cardDetails={cardTestimonialsDetails} />
        )}
      </div>
    </section>
  );
};

export default AboutSection;
