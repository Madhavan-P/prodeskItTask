import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/careers.jpg";
import office from "../assets/office.png";

const Job = () => {
  const navigate = useNavigate();

  const JobData = [
    {
      id: "front-end-developer",
      role: "Front-End Developer",
      jobType: "Full Time",
      location: "Noida",
      date: "Posted November 12, 2025",
      applicationStatus: "Applications have closed",
      text: `Are you a creative and detail-oriented individual with a passion for front-end development?`,
      Experience: "Fresher or Experinced",
      responsibility: [
        "Develop responsive, high-quality user interfaces.",
        "Collaborate with designers, backend developers.",
        "Optimize applications for speed & scalability.",
        "Integrate APIs and handle backend data.",
      ],
      requiredSkills: [
        "Strong proficiency in HTML5, CSS3, JavaScript (ES6+).",
        "Hands-on experience with React.js.",
        "Responsive design & CSS frameworks.",
        "Attention to detail.",
      ],
      salary: "Based on experience",
    },
    {
      id: "app-developer",
      role: "App Developer",
      jobType: "Full Time",
      location: "Noida",
      date: "Posted November 11, 2025",
      applicationStatus: "Applications have closed",
      text: "We are seeking a talented App Developer.",
      Experience: "Fresher or Experinced",
      responsibility: [
        "Develop high-quality mobile apps.",
        "Translate UI/UX designs into interfaces.",
        "Write maintainable and scalable code.",
        "Integrate backend APIs.",
      ],
      requiredSkills: [
        "Strong knowledge of Flutter / RN.",
        "Dart / JavaScript proficiency.",
        "Good understanding of animations/UI.",
        "Experience with Git.",
      ],
      salary: "Based on experience",
    },
    {
      id: "cloud-developer",
      role: "Cloud Developer",
      jobType: "Full Time",
      location: "Noida",
      date: "Posted October 13, 2025",
      applicationStatus: "Applications have closed",
      text: "We are looking for a Cloud Developer.",
      Experience: "Fresher or Experinced",
      responsibility: [
        "Develop cloud applications (AWS/Azure/GCP).",
        "Build scalable cloud architectures.",
        "Implement backend services & APIs.",
        "Automate using Terraform/CloudFormation.",
      ],
      requiredSkills: [
        "AWS / Azure / GCP experience.",
        "Strong cloud computing knowledge.",
        "Backend development skills.",
        "CI/CD pipelines.",
      ],
      salary: "Based on experience",
    },
  ];

  return (
    <div className="job">
      <div className="job-banner">
        <div className="job-banner-left">
          <h1>
            Join Prodesk <br /> <span>& Make A Difference</span>
          </h1>
          <a className="btn primaryBtn">JOIN PRODESK</a>
        </div>
        <img src={image} />
      </div>

      <h2 className="job-title">Job Openings</h2>

      <div className="job-openings">
        {JobData.map((job, index) => (
          <div
            className="jobs-details"
            key={index}
            onClick={() => navigate(`/careers/${job.id}`)}
          >
            <div className="office-img">
              <img src={office} />
            </div>

            <div className="job-role">
              <h3>{job.role}</h3>
              <p>Prodesk</p>
            </div>

            <p>{job.location}</p>

            <div className="job-date">
              <h3>{job.jobType}</h3>
              <p>{job.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
