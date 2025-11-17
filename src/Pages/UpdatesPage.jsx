import React, { useState } from "react";
import GetStartedProject from "../Components/GetStartedProject";

const UpdatesPage = () => {
  const jobUpdates = [
    {
      id: 1,
      type: "job",
      title: "Senior Frontend Developer",
      company: "TCS",
      location: "Bengaluru, India",
      salary: "₹12,00,000 - ₹18,00,000 per year",
      date: "2024-01-15",
      description:
        "We are hiring experienced React developers with 5+ years of experience",
    },
    {
      id: 2,
      type: "job",
      title: "Backend Engineer",
      company: "Infosys",
      location: "Hyderabad, India",
      salary: "₹10,00,000 - ₹16,00,000 per year",
      date: "2024-01-14",
      description:
        "Looking for Node.js and Python developers for our enterprise systems",
    },
    {
      id: 3,
      type: "job",
      title: "DevOps Specialist",
      company: "Wipro",
      location: "Pune, India",
      salary: "₹11,00,000 - ₹17,00,000 per year",
      date: "2024-01-13",
      description:
        "Join our cloud & DevOps engineering team to build scalable systems",
    },
    {
      id: 4,
      type: "job",
      title: "UX/UI Designer",
      company: "Zoho",
      location: "Chennai, India",
      salary: "₹7,00,000 - ₹12,00,000 per year",
      date: "2024-01-12",
      description:
        "Design intuitive interfaces for SaaS applications used globally",
    },
    {
      id: 5,
      type: "job",
      title: "Data Scientist",
      company: "Reliance Jio",
      location: "Mumbai, India",
      salary: "₹12,00,000 - ₹22,00,000 per year",
      date: "2024-01-11",
      description:
        "Work with machine learning models and build large-scale data systems",
    },
  ];

  const internshipUpdates = [
    {
      id: 6,
      type: "internship",
      title: "Software Engineering Intern",
      company: "Paytm",
      duration: "6 months",
      stipend: "₹25,000/month",
      date: "2024-01-14",
      description:
        "Internship opportunity for CS/IT students interested in development",
    },
    {
      id: 7,
      type: "internship",
      title: "Marketing Intern",
      company: "Swiggy",
      duration: "3 months",
      stipend: "₹18,000/month",
      date: "2024-01-13",
      description:
        "Learn digital marketing, branding, and social media campaigns",
    },
    {
      id: 8,
      type: "internship",
      title: "Data Analytics Intern",
      company: "Byju's",
      duration: "4 months",
      stipend: "₹22,000/month",
      date: "2024-01-12",
      description: "Work with student engagement data and analytics dashboards",
    },
    {
      id: 9,
      type: "internship",
      title: "Product Management Intern",
      company: "Flipkart",
      duration: "5 months",
      stipend: "₹30,000/month",
      date: "2024-01-11",
      description:
        "Assist product teams with feature planning and user research",
    },
    {
      id: 10,
      type: "internship",
      title: "Cybersecurity Intern",
      company: "Tata Communications",
      duration: "6 months",
      stipend: "₹28,000/month",
      date: "2024-01-10",
      description:
        "Learn about network security, threats & penetration testing",
    },
  ];

  const newProductUpdates = [
    {
      id: 11,
      type: "new-product",
      title: "AI Assistant Pro",
      category: "Software",
      version: "2.0",
      price: "₹899/month",
      date: "2024-01-13",
      description: "A next-gen AI assistant for businesses in India",
    },
    {
      id: 12,
      type: "new-product",
      title: "Smart Home Hub",
      category: "Hardware",
      version: "1.0",
      price: "₹8,999",
      date: "2024-01-12",
      description: "Control all smart appliances with one device",
    },
    {
      id: 13,
      type: "new-product",
      title: "Project Management Tool",
      category: "SaaS",
      version: "3.5",
      price: "₹499/user/month",
      date: "2024-01-11",
      description: "Enhanced team collaboration and task management features",
    },
    {
      id: 14,
      type: "new-product",
      title: "Fitness Tracker Watch",
      category: "Wearables",
      version: "Series 4",
      price: "₹5,499",
      date: "2024-01-10",
      description: "Tracks heart rate, sleep, and advanced fitness metrics",
    },
    {
      id: 15,
      type: "new-product",
      title: "Cloud Storage Solution",
      category: "Infrastructure",
      version: "Enterprise",
      price: "Custom Pricing",
      date: "2024-01-09",
      description: "Secure and scalable cloud storage for Indian businesses",
    },
  ];

  const newServiceUpdates = [
    {
      id: 16,
      type: "new-service",
      title: "Cloud Migration",
      category: "IT Services",
      duration: "2-4 weeks",
      pricing: "Starting at ₹1,50,000",
      date: "2024-01-12",
      description: "Full cloud migration support for startups & enterprises",
    },
    {
      id: 17,
      type: "new-service",
      title: "Digital Marketing",
      category: "Marketing",
      duration: "Ongoing",
      pricing: "Custom packages",
      date: "2024-01-11",
      description:
        "Complete digital marketing services for branding and growth",
    },
    {
      id: 18,
      type: "new-service",
      title: "Cybersecurity Audit",
      category: "Security",
      duration: "1-2 weeks",
      pricing: "₹75,000 - ₹3,00,000",
      date: "2024-01-10",
      description: "Full network and application vulnerability assessment",
    },
    {
      id: 19,
      type: "new-service",
      title: "Mobile App Development",
      category: "Development",
      duration: "8-12 weeks",
      pricing: "Starting at ₹4,00,000",
      date: "2024-01-09",
      description: "Custom Android and iOS app development",
    },
    {
      id: 20,
      type: "new-service",
      title: "Data Analytics Consulting",
      category: "Analytics",
      duration: "Project-based",
      pricing: "₹3,000/hour",
      date: "2024-01-08",
      description: "Convert your business data into actionable insights",
    },
  ];

  const newInformationUpdates = [
    {
      id: 21,
      type: "new-information",
      title: "Indian IT Industry Report 2024",
      category: "Research",
      pages: "150",
      format: "PDF",
      date: "2024-01-11",
      description:
        "Analysis of Indian IT growth, trends and technology insights",
    },
    {
      id: 22,
      type: "new-information",
      title: "User Guide: Advanced Features",
      category: "Documentation",
      pages: "85",
      format: "Online",
      date: "2024-01-10",
      description: "Updated guide for new product features",
    },
    {
      id: 23,
      type: "new-information",
      title: "Case Study: Indian Enterprise",
      category: "Marketing",
      pages: "25",
      format: "PDF",
      date: "2024-01-09",
      description:
        "How we helped an Indian company scale using cloud technology",
    },
    {
      id: 24,
      type: "new-information",
      title: "API Documentation v2.1",
      category: "Technical",
      pages: "200",
      format: "Online",
      date: "2024-01-08",
      description: "Updated API documentation with new features",
    },
    {
      id: 25,
      type: "new-information",
      title: "Best Practices Guide",
      category: "Educational",
      pages: "60",
      format: "PDF",
      date: "2024-01-07",
      description: "Updated IT best practices for Indian businesses",
    },
  ];

  const newBranchUpdates = [
    {
      id: 26,
      type: "new-branch",
      title: "Corporate Office",
      location: "Mumbai, India",
      size: "12,000 sq ft",
      employees: "60+",
      date: "2024-01-10",
      description: "New corporate office opened in Bandra Kurla Complex",
    },
    {
      id: 27,
      type: "new-branch",
      title: "Tech Development Center",
      location: "Hyderabad, India",
      size: "20,000 sq ft",
      employees: "120+",
      date: "2024-01-09",
      description: "Advanced R&D and Development center",
    },
    {
      id: 28,
      type: "new-branch",
      title: "Regional Headquarters",
      location: "Delhi NCR, India",
      size: "18,000 sq ft",
      employees: "80+",
      date: "2024-01-08",
      description: "North India regional HQ opened in Noida Sector 62",
    },
    {
      id: 29,
      type: "new-branch",
      title: "Innovation Hub",
      location: "Bengaluru, India",
      size: "22,000 sq ft",
      employees: "150+",
      date: "2024-01-07",
      description: "New innovation and startup collaboration hub",
    },
    {
      id: 30,
      type: "new-branch",
      title: "Support Office",
      location: "Chennai, India",
      size: "6,000 sq ft",
      employees: "30+",
      date: "2024-01-06",
      description: "Customer support and operations branch",
    },
  ];

  const allUpdates = [
    ...jobUpdates,
    ...internshipUpdates,
    ...newProductUpdates,
    ...newServiceUpdates,
    ...newInformationUpdates,
    ...newBranchUpdates,
  ];

  const [selectedType, setSelectedType] = useState("all");
  const [filteredUpdates, setFilteredUpdates] = useState(allUpdates);

  const handleFilter = (type) => {
    setSelectedType(type);
    if (type === "all") {
      setFilteredUpdates(allUpdates);
    } else {
      setFilteredUpdates(allUpdates.filter((update) => update.type === type));
    }
  };

  const renderCard = (update) => {
    return (
      <div key={update.id} className={`update-cards ${update.type}`}>
        <div className="card-header">
          <span className={`type-badge ${update.type}`}>
            {getTypeLabel(update.type)}{" "}
          </span>
          <span className="date">{formatDate(update.date)}</span>
        </div>
        <h3 className="card-title">{update.title}</h3>
        <p className="card-description">{update.description}</p>
        {renderCardSpecificContent(update)}
      </div>
    );
  };

  const renderCardSpecificContent = (update) => {
    switch (update.type) {
      case "job":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Company : </span>
              <span className="value">{update.company}</span>
            </div>
            <div className="detail-item">
              <span className="label">Location:</span>
              <span className="value">{update.location}</span>
            </div>
            <div className="detail-item">
              <span className="label">Salary:</span>
              <span className="value">{update.salary}</span>
            </div>
          </div>
        );
      case "internship":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Company:</span>
              <span className="value">{update.company}</span>
            </div>
            <div className="detail-item">
              <span className="label">Duration:</span>
              <span className="value">{update.duration}</span>
            </div>
            <div className="detail-item">
              <span className="label">Stipend:</span>
              <span className="value">{update.stipend}</span>
            </div>
          </div>
        );
      case "new-product":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Category:</span>
              <span className="value">{update.category}</span>
            </div>
            <div className="detail-item">
              <span className="label">Version:</span>
              <span className="value">{update.version}</span>
            </div>
            <div className="detail-item">
              <span className="label">Price:</span>
              <span className="value">{update.price}</span>
            </div>
          </div>
        );
      case "new-service":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Category:</span>
              <span className="value">{update.category}</span>
            </div>
            <div className="detail-item">
              <span className="label">Duration:</span>
              <span className="value">{update.duration}</span>
            </div>
            <div className="detail-item">
              <span className="label">Pricing:</span>
              <span className="value">{update.pricing}</span>
            </div>
          </div>
        );
      case "new-information":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Category:</span>
              <span className="value">{update.category}</span>
            </div>
            <div className="detail-item">
              <span className="label">Pages:</span>
              <span className="value">{update.pages}</span>
            </div>
            <div className="detail-item">
              <span className="label">Format:</span>
              <span className="value">{update.format}</span>
            </div>
          </div>
        );
      case "new-branch":
        return (
          <div className="card-details">
            <div className="detail-item">
              <span className="label">Location:</span>
              <span className="value">{update.location}</span>
            </div>
            <div className="detail-item">
              <span className="label">Size:</span>
              <span className="value">{update.size}</span>
            </div>
            <div className="detail-item">
              <span className="label">Employees:</span>
              <span className="value">{update.employees}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getTypeLabel = (type) => {
    const typeLabels = {
      job: "Job Opportunity",
      internship: "Internship",
      "new-product": "New Product",
      "new-service": "New Service",
      "new-information": "New Information",
      "new-branch": "New Branch",
    };
    return typeLabels[type] || type;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="updates-page">
      <div className="updates-header">
        <h1>Latest Updates</h1>
        <p>Stay informed about our latest opportunities and announcements</p>
      </div>

      <div className="filter-container">
        <button
          className={`filter-btn ${selectedType === "all" ? "active" : ""}`}
          onClick={() => handleFilter("all")}
        >
          All Updates
        </button>
        <button
          className={`filter-btn ${selectedType === "job" ? "active" : ""}`}
          onClick={() => handleFilter("job")}
        >
          Jobs
        </button>
        <button
          className={`filter-btn ${
            selectedType === "internship" ? "active" : ""
          }`}
          onClick={() => handleFilter("internship")}
        >
          Internships
        </button>
        <button
          className={`filter-btn ${
            selectedType === "new-product" ? "active" : ""
          }`}
          onClick={() => handleFilter("new-product")}
        >
          New Products
        </button>
        <button
          className={`filter-btn ${
            selectedType === "new-service" ? "active" : ""
          }`}
          onClick={() => handleFilter("new-service")}
        >
          New Services
        </button>
        <button
          className={`filter-btn ${
            selectedType === "new-information" ? "active" : ""
          }`}
          onClick={() => handleFilter("new-information")}
        >
          Information
        </button>
        <button
          className={`filter-btn ${
            selectedType === "new-branch" ? "active" : ""
          }`}
          onClick={() => handleFilter("new-branch")}
        >
          New Branches
        </button>
      </div>

      <div className="updates-grid">
        {filteredUpdates.map((update) => renderCard(update))}
      </div>
      <GetStartedProject />
    </div>
  );
};

export default UpdatesPage;
