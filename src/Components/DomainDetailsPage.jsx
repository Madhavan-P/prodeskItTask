import React from "react";

import Domain1 from "../assets/domain-card-1.png";
import Domain2 from "../assets/domain-card-2.png";
import Domain3 from "../assets/domain-card-3.png";
import Domain4 from "../assets/domain-card-4.png";
import Domain5 from "../assets/domain-card-5.png";
import Domain6 from "../assets/domain-card-6.png";
import Domain7 from "../assets/domain-card-7.png";
import Domain8 from "../assets/domain-card-8.png";
import services from "../assets/services-icon-dom.png";
import Benefits from "../assets/dom-benefits-icon.png";

import { useParams } from "react-router-dom";

const DomainDetailsPage = () => {
  const DomainList = [
    {
      id: "banking-financial",
      class: "bg-1",
      title: "Banking & Financial",
      image: Domain1,
      description:
        "Transform your financial services with cutting-edge technology solutions that drive innovation and customer satisfaction.",
      text: `Prodesk helps enterprises, financial institutions, and FinTechs move
                from technical debt to competitive differentiation through a platform
                mindset. We modernize core platforms, unify payments infrastructure, and
                embed AI across operations. From regulatory compliance to real-time
                payments, we align modernization with strategic priorities to accelerate
                product launches, improve cost-to-income ratios, and build customer
                trust.`,
      services: [
        "Digital Banking Platforms",
        "Fraud Detection & Risk Management",
        "Blockchain & Cryptocurrency Solutions",
        "AI-Powered Investment Advisory",
        "Regulatory Compliance Systems",
      ],
      benefits: [
        "Enhanced customer experience",
        "Reduced operational costs",
        "Improved security and compliance",
        "Faster transaction processing",
      ],
    },
    {
      id: "insurance",
      class: "bg-2",
      title: "Insurance",
      image: Domain2,
      description:
        "Revolutionize insurance operations with AI-driven solutions that streamline processes and enhance customer engagement.",
      text: `Our Digital Insurance solutions assist firms in fulfilling rising consumer demands and streamlining operational procedures in a highly competitive industry environment.`,
      services: [
        "Claims Processing Automation",
        "Risk Assessment & Underwriting",
        "Customer Portal Development",
        "IoT Integration for Policy Management",
        "Predictive Analytics for Fraud Prevention",
      ],
      benefits: [
        "Faster claims processing",
        "Accurate risk assessment",
        "Personalized policy offerings",
        "Reduced fraudulent claims",
      ],
    },
    {
      id: "healthcare",
      class: "bg-3",
      title: "Healthcare",
      image: Domain3,
      description:
        "Advance healthcare delivery with innovative technology solutions that improve patient care and operational efficiency.",
      text: `Improving patient outcomes while reducing costs can only be achieved by combining technology innovation with process transformation. We drive transformational programs with industry leading software and solution partners that span the areas of patient engagement, care delivery, population health management, operations, as well as data, analytics, and business intelligence.`,
      services: [
        "Electronic Health Records (EHR) Systems",
        "Telemedicine Platforms",
        "Medical Imaging Analysis",
        "Patient Management Systems",
        "Healthcare Analytics & Reporting",
      ],
      benefits: [
        "Improved patient outcomes",
        "Streamlined clinical workflows",
        "Enhanced data security",
        "Better resource utilization",
      ],
    },
    {
      id: "life-sciences",
      class: "bg-4",
      title: "Life Sciences",
      image: Domain4,
      description:
        "Accelerate drug discovery and medical research with advanced computational solutions and data analytics.",
      text: `Prodesk’s Life Sciences division helps analytical instrument, medical devices, and pharmaceutical companies to better utilize technology to bring new products and solutions to market. We build the software that delivers the connected digital lab of the future and enable pharmaceutical companies to execute decentralized trials efficiently. Our extensive industry experience includes supporting 3 of the 5 largest contract research organizations (CROs) and 6 of top 10 device manufacturers.`,
      services: [
        "Clinical Trial Management Systems",
        "Drug Discovery Platforms",
        "Regulatory Compliance Solutions",
        "Research Data Analytics",
        "Laboratory Information Management",
      ],
      benefits: [
        "Faster time to market",
        "Improved research accuracy",
        "Enhanced collaboration",
        "Regulatory compliance assurance",
      ],
    },
    {
      id: "industrial",
      class: "bg-5",
      title: "Industrial",
      image: Domain5,
      description:
        "Optimize industrial operations with smart manufacturing solutions and IoT integration for maximum efficiency.",
      text: `Prodesk integrates the industrial value chain. We deliver business value by tightly integrating legacy design and  engineering, manufacturing and operational systems with industry leading processes, software and analytics capabilities.`,
      services: [
        "Industrial IoT Solutions",
        "Supply Chain Optimization",
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Energy Management Solutions",
      ],
      benefits: [
        "Increased operational efficiency",
        "Reduced downtime",
        "Lower maintenance costs",
        "Improved product quality",
      ],
    },
    {
      id: "software-hi-tech",
      class: "bg-6",
      title: "Software & Hi-Tech",
      image: Domain6,
      description:
        "Drive innovation in software development with cutting-edge technologies and agile methodologies.",
      text: `Technology products and business models don’t stay current for long due to the rapid pace of innovation, accelerated development cycles, and disruptive business models. This has increased both the importance and complexity of managing innovation, engineering, and management.`,
      services: [
        "Custom Software Development",
        "Cloud Migration & Optimization",
        "DevOps & CI/CD Implementation",
        "Microservices Architecture",
        "Quality Assurance & Testing",
      ],
      benefits: [
        "Faster time to market",
        "Scalable solutions",
        "Reduced development costs",
        "Enhanced software quality",
      ],
    },
    {
      id: "telecom-media",
      class: "bg-7",
      title: "Telecom & Media",
      image: Domain7,
      description:
        "Transform telecommunications and media services with next-generation networks and content delivery solutions.",
      text: `Prodesk helps communications and media companies struggling to redefine the customer experience, capitalize on digital convergence and launch new business models. We deliver solutions that drive agility and responsiveness by helping organizations develop new products faster, manage costs in business operations and derive insights from performance data.`,
      services: [
        "5G Network Solutions",
        "Content Delivery Networks",
        "Customer Experience Platforms",
        "Billing & Revenue Management",
        "Media Streaming Solutions",
      ],
      benefits: [
        "Enhanced network performance",
        "Improved customer satisfaction",
        "New revenue streams",
        "Operational cost reduction",
      ],
    },
    {
      id: "consumer-tech",
      class: "bg-8",
      title: "Consumer Tech",
      image: Domain8,
      description:
        "Create exceptional consumer experiences with innovative technology solutions that engage and delight users.",
      text: `With rapidly changing customer demands, evolving economic and social dynamics and critical environmental issues controlling market shifts, the consumer tech industry is reinventing itself with each touchpoint.`,
      services: [
        "E-commerce Platforms",
        "Mobile App Development",
        "Customer Loyalty Programs",
        "Personalization Engines",
        "Social Media Integration",
      ],
      benefits: [
        "Increased customer engagement",
        "Higher conversion rates",
        "Improved brand loyalty",
        "Valuable customer insights",
      ],
    },
  ];
  const { id } = useParams();
  const details = DomainList.find((item) => item.id === id);

  return (
    <div>
      <div className={`domain-card ${details.class} domain-details-page`}>
        <div className="domain-text-ctn">
          <p>{details.title}</p>
          <p className="dom-det-text">{details.description}</p>
        </div>

        <div className="domain-img-ctn">
          <img src={details.image} />
        </div>
      </div>

      <h3 className="section-title">Services</h3>
      {details.services.map((service, i) => (
        <p className="dom-service-text" key={i}>
          <img src={services} className="dom-service-icon" /> {service}
        </p>
      ))}

      <h3 className="section-title">Benefits</h3>
      {details.benefits.map((benefit, i) => (
        <p className="dom-service-text" key={i}>
          <img src={Benefits} className="dom-service-icon" /> {benefit}
        </p>
      ))}
    </div>
  );
};

export default DomainDetailsPage;
