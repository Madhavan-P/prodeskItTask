import React from "react";
import { useParams } from "react-router-dom";

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

const SelectedJobOffer = () => {
  const { id } = useParams();

  const data = JobData.find((job) => job.id === id);

  if (!data) return <h2>Job not found</h2>;

  return (
    <section className="job-details-page">
      <div className="job-header-card glass-card">
        <h1>{data.role}</h1>
        <p className="job-location">
          {data.location} • {data.jobType}
        </p>
        <p className="job-date">{data.date}</p>

        <span
          className={`status-tag ${
            data.applicationStatus === "Applications have closed"
              ? "closed"
              : "open"
          }`}
        >
          {data.applicationStatus}
        </span>
      </div>

      <div className="job-content glass-card">
        <h2>Job Overview</h2>
        <p className="job-text">{data.text}</p>

        <h3>Experience</h3>
        <p>{data.Experience}</p>

        <h3>Key Responsibilities</h3>
        <ul>
          {data.responsibility.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Required Skills</h3>
        <ul>
          {data.requiredSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>

        <h3>Salary</h3>
        <p>{data.salary}</p>
      </div>

      <button className="apply-btn">Apply Now</button>
    </section>
  );
};

export default SelectedJobOffer;
