import React, { useState } from "react";
import image from "../assets/careers.jpg";
import FormResult from "./FormResult";

const Internship = () => {
  const [file, setFile] = useState("No Choosen File");

  function handleChoosenFile(e) {
    const fileName = e.target.files[0];
    setFile(fileName ? fileName.name : "No Choosen File");
  }
  const [resultMsg, setResultMsg] = useState("");
  const [msgKey, setmsgKey] = useState(0);
  function handleInternshipForm() {
    setResultMsg("Form Submitted Successfully");
    setmsgKey((prev) => prev + 1);
  }
  return (
    <div className="job">
      <div className="job-banner">
        <div className="job-banner-left">
          <h1>Join PRODESK</h1>
          <a className="btn secondaryBtn">JOIN PRODESK</a>
        </div>
        <img src={image} />
      </div>
      <h2 className="job-title">Please Fill the Form Below :</h2>
      <div className="intern-openings">
        <form>
          <div className="form-1">
            <label className="label">
              Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
              required
            />
          </div>
          <div className="form-1">
            <label className="label">
              Phone Number <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Email <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              City <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Name Of The College <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Department <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Experience <span>*</span>
            </label>
            <select className="select">
              <option className="pursuing">Pursuing</option>
              <option className="fresher">Fresher</option>
              <option className="experience">Experience</option>
            </select>
          </div>
          <div className="form-1">
            <label className="label">
              Courses <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Internship Mode <span>*</span>
            </label>
            <select className="select">
              <option className="office">Office</option>
              <option className="online">Online</option>
            </select>
          </div>
          <div className="form-1">
            <label className="label">
              Internship Duration <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
            />
          </div>
          <div className="form-1">
            <label className="label">
              Upload Your Resume <span>*</span>
            </label>
            <div className="file-container input">
              <input type="file" id="fileInput" onChange={handleChoosenFile} />
              <label htmlFor="fileInput" className="input label-file">
                Choose File
              </label>
              <span className="choosen-file">{file}</span>
            </div>
          </div>
        </form>
        <a className="btn primaryBtn submit-btn" onClick={handleInternshipForm}>
          Submit
        </a>
        {resultMsg && <FormResult key={msgKey} msg={resultMsg} />}
      </div>
    </div>
  );
};

export default Internship;
