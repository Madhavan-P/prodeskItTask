import React, { useEffect, useRef, useState } from "react";

import Step01 from "../assets/step-1.jpeg";
import Step01Icon from "../assets/step-1-icon-1.svg";
import Step02 from "../assets/analysis-1.webp";
import Step02Icon from "../assets/step-2-icon.svg";
import Step03 from "../assets/step-3.png";
import Step03Icon from "../assets/step-3-icon.svg";
import Step04 from "../assets/step-4.jpg";
import Step04Icon from "../assets/step-4-icon.svg";
import Step05 from "../assets/step-5.jpg";
import Step05Icon from "../assets/step-5-icon.svg";
import Step06 from "../assets/deployment.jpg";
import Step06Icon from "../assets/step-6-icon.svg";

import leftArrowBlack from "../assets/left-arrow-black.svg";
import rightArrowBlack from "../assets/right-arrow-black.svg";
import leftArrowWhite from "../assets/left-arrow-white.svg";
import rightArrowWhite from "../assets/right-arrow-white.svg";
import ProcessCard from "../Components/ProcessCard";
import { useNavigate } from "react-router-dom";

const ProcessSection = () => {
  const navigate = useNavigate();
  const processCardList = [
    {
      icon: Step01Icon,
      img: Step01,
      title: "PLANNING",
      secondTitle: "Define the problem and set clear objectives",
      text: `Step 1 of our 6-phase process. We guide your organization through
              each critical stage, ensuring comprehensive solutions and measurable
              outcomes.`,
    },
    {
      icon: Step02Icon,
      img: Step02,
      title: "ANALYSIS",
      secondTitle: "Assess resources, constraints, and opportunities",
      text: `Step 2 of our 6-phase process. We guide your organization
                    through each critical stage, ensuring comprehensive solutions
                    and measurable outcomes.`,
    },
    {
      icon: Step03Icon,
      img: Step03,
      title: "DESIGN",
      secondTitle: "Create visual representations of concepts",
      text: `Step 3 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step04Icon,
      img: Step04,
      title: "DEVELOPMENT",
      secondTitle: "Communicate ideas clearly and effectively",
      text: `Step 4 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step05Icon,
      img: Step05,
      title: "TESTING",
      secondTitle: "Generate innovative solutions and approaches",
      text: `Step 5 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
    {
      icon: Step06Icon,
      img: Step06,
      title: "DEPLOYMENT",
      secondTitle: "Build and implement your solution",
      text: `Step 6 of our 6-phase process. We guide your organization through each critical stage, ensuring comprehensive solutions and measurable outcomes.`,
    },
  ];

  const [CardDetails, setCardDetails] = useState(0);

  const intervalRef = useRef(null);

  const StartTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCardDetails((prev) => (prev + 1) % processCardList.length);
    }, 2000);
  };

  useEffect(() => {
    StartTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="process-section section">
      <h2 className="section-title">Our Proven Process</h2>
      <p className="secondary-text">
        Our company's proven methodology transforms complex business challenges
        into strategic advantages through systematic innovation
      </p>
      <ProcessCard details={processCardList[CardDetails]} />
      <div className="process-card-ctrl">
        <a
          className="btn secondaryBtn"
          onClick={() => navigate("/our-process")}
        >
          Learn More
        </a>
        <div className="ctrl-ctn">
          <a
            className="scroll-arrow"
            onClick={() => {
              setCardDetails((prev) =>
                prev === 0 ? processCardList.length - 1 : prev - 1
              );
              StartTimer();
            }}
          >
            <img src={leftArrowWhite} className="arrrow white" />
            <img src={leftArrowBlack} className="arrrow black" />
          </a>
          <a
            className="scroll-arrow"
            onClick={() => {
              setCardDetails((prev) => (prev + 1) % processCardList.length);
              StartTimer();
            }}
          >
            <img src={rightArrowWhite} className="arrrow white" />
            <img src={rightArrowBlack} className="arrrow black" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
