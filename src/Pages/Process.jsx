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

import ProcessCard from "../Components/ProcessCard";
import GetStartedProject from "../Components/GetStartedProject";

const ProcessPage = () => {
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

  return (
    <section className="process-section section">
      <h2 className="section-title">Our Proven Process</h2>
      <p className="secondary-text">
        Our company's proven methodology transforms complex business challenges
        into strategic advantages through systematic innovation
      </p>
      {processCardList.map((details, index) => (
        <ProcessCard details={processCardList[index]} key={index} />
      ))}
      <GetStartedProject />
    </section>
  );
};

export default ProcessPage;
