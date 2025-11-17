import React, { useState } from "react";

import Banner from "../assets/about-us-banner.svg";
import AboutImage from "../assets/about-us-image.jpg";

import sign1 from "../assets/sign-1.svg";
import sign3 from "../assets/sign-2.svg";
import sign2 from "../assets/sign-3.svg";

import founder from "../assets/our-founder.jpg";
import coFounder from "../assets/our-co-founder.jpg";
import hr from "../assets/our-hr.avif";
import AdminCard from "../Components/AdminCard";

import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";
import dev4 from "../assets/dev4.jpg";
import dev5 from "../assets/dev5.jpg";

import design1 from "../assets/design1.jpg";
import design2 from "../assets/design2.jpg";
import design3 from "../assets/design3.jpg";
import design4 from "../assets/design4.jpg";
import design5 from "../assets/design5.jpg";

import cloud1 from "../assets/cloud1.jpg";
import cloud2 from "../assets/cloud2.jpg";
import cloud3 from "../assets/cloud3.jpg";
import cloud4 from "../assets/cloud4.jpg";
import cloud5 from "../assets/cloud5.jpg";

import cyber1 from "../assets/cyber1.jpg";
import cyber2 from "../assets/cyber2.jpg";
import cyber3 from "../assets/cyber3.jpg";
import cyber4 from "../assets/cyber4.jpg";
import cyber5 from "../assets/cyber5.jpg";

import data1 from "../assets/data1.jpg";
import data2 from "../assets/data2.jpg";
import data3 from "../assets/data3.jpg";
import data4 from "../assets/data4.jpg";
import data5 from "../assets/data5.jpg";

import market1 from "../assets/market1.jpg";
import market2 from "../assets/market2.jpg";
import market3 from "../assets/market3.jpg";
import market4 from "../assets/market4.jpg";
import market5 from "../assets/market5.jpg";

import it1 from "../assets/it1.jpg";
import it2 from "../assets/it2.jpg";
import it3 from "../assets/it3.jpg";
import it4 from "../assets/it4.jpg";
import it5 from "../assets/it5.jpg";

import EmployeeCard from "../Components/employeeCard";
import GetStartedProject from "../Components/GetStartedProject";

const AboutUsPage = () => {
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

  const cardDeveloper = [
    {
      letter: "A",
      img: dev1,
      role: "Team Leader",
      name: "Ritvik Das",
      skills: "React, Node.js, MongoDB",
    },
    {
      letter: "B",
      img: dev2,
      role: "Frontend Developer",
      name: "Karan Patel",
      skills: "HTML, CSS, JavaScript",
    },
    {
      letter: "C",
      img: dev3,
      role: "Backend Developer",
      name: "Riya Sharma",
      skills: "Express.js, SQL, APIs",
    },
    {
      letter: "D",
      img: dev4,
      role: "Full Stack Developer",
      name: "Arjun Nair",
      skills: "React, Firebase, RESTful APIs",
    },
    {
      letter: "E",
      img: dev5,
      role: "Mobile Developer",
      name: "Sneha Verma",
      skills: "Flutter, Dart, Firebase",
    },
  ];

  const cardDesigner = [
    {
      letter: "A",
      img: design1,
      role: "UI/UX Lead",
      name: "Ishita Rao",
      skills: "Figma, Adobe XD, User Research",
    },
    {
      letter: "B",
      img: design2,
      role: "Graphic Designer",
      name: "Tanishq Jain",
      skills: "Photoshop, Illustrator",
    },
    {
      letter: "C",
      img: design3,
      role: "Visual Designer",
      name: "Nisha Kapoor",
      skills: "Brand Identity, Layout Design",
    },
    {
      letter: "D",
      img: design4,
      role: "Interaction Designer",
      name: "Ritvik Das",
      skills: "Prototyping, Motion Design",
    },
    {
      letter: "E",
      img: design5,
      role: "Product Designer",
      name: "Diya Menon",
      skills: "Wireframing, UX Strategy",
    },
  ];

  const cardCloud = [
    {
      letter: "A",
      img: cloud1,
      role: "Cloud Architect",
      name: "Rahul Iyer",
      skills: "AWS, Kubernetes, Terraform",
    },
    {
      letter: "B",
      img: cloud2,
      role: "DevOps Engineer",
      name: "Simran Kaur",
      skills: "CI/CD, Docker, Jenkins",
    },
    {
      letter: "C",
      img: cloud3,
      role: "Cloud Security Analyst",
      name: "Vikram Joshi",
      skills: "IAM, CloudWatch, Security Groups",
    },
    {
      letter: "D",
      img: cloud4,
      role: "System Engineer",
      name: "Ananya Ghosh",
      skills: "Linux, Networking, Virtualization",
    },
    {
      letter: "E",
      img: cloud5,
      role: "Cloud Support Engineer",
      name: "Harish Yadav",
      skills: "Azure, AWS CLI, Troubleshooting",
    },
  ];

  const cardCyber = [
    {
      letter: "A",
      img: cyber1,
      role: "Cybersecurity Lead",
      name: "Kavya Raj",
      skills: "Penetration Testing, Risk Assessment",
    },
    {
      letter: "B",
      img: cyber2,
      role: "Ethical Hacker",
      name: "Dev Mishra",
      skills: "Kali Linux, Metasploit, Nmap",
    },
    {
      letter: "C",
      img: cyber3,
      role: "Security Analyst",
      name: "Priya Menon",
      skills: "SIEM, Incident Response",
    },
    {
      letter: "D",
      img: cyber4,
      role: "Network Security Engineer",
      name: "Aditya Kumar",
      skills: "Firewalls, IDS/IPS",
    },
    {
      letter: "E",
      img: cyber5,
      role: "Compliance Officer",
      name: "Meera Shah",
      skills: "ISO 27001, GDPR, Security Policies",
    },
  ];

  const cardDataAnalytics = [
    {
      letter: "A",
      img: data1,
      role: "Data Scientist",
      name: "Rohan Agarwal",
      skills: "Python, Machine Learning, TensorFlow",
    },
    {
      letter: "B",
      img: data2,
      role: "Data Analyst",
      name: "Anjali Desai",
      skills: "Excel, Power BI, SQL",
    },
    {
      letter: "C",
      img: data3,
      role: "Business Analyst",
      name: "Nikhil Bhatia",
      skills: "Tableau, Statistics, Insights",
    },
    {
      letter: "D",
      img: data4,
      role: "ML Engineer",
      name: "Sneha Pillai",
      skills: "PyTorch, Deep Learning, NLP",
    },
    {
      letter: "E",
      img: data5,
      role: "Data Engineer",
      name: "Yash Gupta",
      skills: "ETL, Hadoop, Spark",
    },
  ];

  const cardDigitalMarketing = [
    {
      letter: "A",
      img: market1,
      role: "Marketing Strategist",
      name: "Aditi Nanda",
      skills: "SEO, SEM, Campaign Strategy",
    },
    {
      letter: "B",
      img: market2,
      role: "Content Creator",
      name: "Vivek Malhotra",
      skills: "Copywriting, Branding, Social Media",
    },
    {
      letter: "C",
      img: market3,
      role: "Social Media Manager",
      name: "Ira Kapoor",
      skills: "Instagram, LinkedIn, Engagement",
    },
    {
      letter: "D",
      img: market4,
      role: "SEO Specialist",
      name: "Raj Singh",
      skills: "Google Analytics, Keyword Research",
    },
    {
      letter: "E",
      img: market5,
      role: "PPC Expert",
      name: "Neha Tiwari",
      skills: "Google Ads, Facebook Ads, Optimization",
    },
  ];

  const cardItConsulting = [
    {
      letter: "A",
      img: it1,
      role: "IT Consultant Lead",
      name: "Vikash Reddy",
      skills: "Business Strategy, IT Solutions",
    },
    {
      letter: "B",
      img: it2,
      role: "System Analyst",
      name: "Ritu Sharma",
      skills: "Requirement Gathering, Documentation",
    },
    {
      letter: "C",
      img: it3,
      role: "Tech Advisor",
      name: "Manav Kapoor",
      skills: "Enterprise Solutions, Cloud Migration",
    },
    {
      letter: "D",
      img: it4,
      role: "Support Specialist",
      name: "Pooja Deshmukh",
      skills: "Technical Support, Troubleshooting",
    },
    {
      letter: "E",
      img: it5,
      role: "IT Project Manager",
      name: "Siddharth Jain",
      skills: "Agile, Scrum, Team Management",
    },
  ];

  const [cardContent, setCardContent] = useState(0);

  return (
    <section className="section">
      <div className="About-hero-section">
        <div className="a-h-left">
          <h1>Our Story Is Creative.</h1>
          <h3>We build platforms where brands and technology unite</h3>
        </div>
        <div className="a-h-right">
          <img src={Banner} />
        </div>
      </div>
      <div className="About-hero-section about-card">
        <img src={AboutImage} />
        <div className="text-ctn about-ctn">
          <h2 className="company-name ">PRODESK IT</h2>
          <p className="secondary-text">
            we transform ideas into powerful digital solutions. From branding
            and web development to social media and performance marketing, our
            integrated approach ensures measurable growth, lasting impact, and a
            stronger online presence. We partner with you at every stage to
            deliver results that matter.
          </p>
          {/* <a className="btn primaryBtn margin-btn">Learn More</a> */}
        </div>
      </div>
      {/* --------- Experts Section  --------- */}

      <div className="about-page-tags">
        <a
          className={`btn ${cardContent === 0 && "selectedTag"}`}
          onClick={() => setCardContent(0)}
        >
          Admin
        </a>
        <a
          className={`btn ${cardContent === 1 && "selectedTag"}`}
          onClick={() => setCardContent(1)}
        >
          Developers
        </a>
        <a
          className={`btn ${cardContent === 2 && "selectedTag"}`}
          onClick={() => setCardContent(2)}
        >
          Designers
        </a>
        <a
          className={`btn ${cardContent === 3 && "selectedTag"}`}
          onClick={() => setCardContent(3)}
        >
          Cloud Services
        </a>
        <a
          className={`btn ${cardContent === 4 && "selectedTag"}`}
          onClick={() => setCardContent(4)}
        >
          Cybersecurity
        </a>
        <a
          className={`btn ${cardContent === 5 && "selectedTag"}`}
          onClick={() => setCardContent(5)}
        >
          Data Analysts
        </a>
        <a
          className={`btn ${cardContent === 6 && "selectedTag"} `}
          onClick={() => setCardContent(6)}
        >
          Digital Marketing
        </a>
        <a
          className={`btn ${cardContent === 7 && "selectedTag"}`}
          onClick={() => setCardContent(7)}
        >
          It Consulting
        </a>
      </div>

      {cardContent === 0 ? (
        <AdminCard cardDetails={cardLeaders} />
      ) : cardContent === 1 ? (
        <EmployeeCard cardDetails={cardDeveloper} />
      ) : cardContent === 2 ? (
        <EmployeeCard cardDetails={cardDesigner} />
      ) : cardContent === 3 ? (
        <EmployeeCard cardDetails={cardCloud} />
      ) : cardContent === 4 ? (
        <EmployeeCard cardDetails={cardCyber} />
      ) : cardContent === 5 ? (
        <EmployeeCard cardDetails={cardDataAnalytics} />
      ) : cardContent === 6 ? (
        <EmployeeCard cardDetails={cardDigitalMarketing} />
      ) : (
        <EmployeeCard cardDetails={cardItConsulting} />
      )}

      <GetStartedProject />
    </section>
  );
};

export default AboutUsPage;
