import React, { useState } from "react";
import Job from "../Components/Job.jsx";
import Internship from "../Components/Internship.jsx";

const CareersPage = () => {
  const [selectedJobType, setSelectedJobType] = useState("job");
  return (
    <div className="careers">
      <div className="job-type">
        <a
          className={`btn BtnWidth ${
            selectedJobType === "job" && "selectedTagCareers"
          } `}
          onClick={() => setSelectedJobType("job")}
        >
          JOB OFFER
        </a>
        <a
          className={`btn BtnWidth ${
            selectedJobType === "intern" && "selectedTagCareers"
          } `}
          onClick={() => setSelectedJobType("intern")}
        >
          INTERNSHIP
        </a>
      </div>
      {selectedJobType === "job" ? <Job /> : <Internship />}
    </div>
  );
};

export default CareersPage;
