import { useNavigate } from "react-router-dom";

const ProcessCard = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div className="process-card">
      <div className="left">
        <div className="card-left-top">
          <div className="circle-icon">
            <img src={details.icon} className="icon" />
          </div>
          <div className="text-ctn">
            <h3>{details.title}</h3>
            <p className="secondary-text">{details.secondTitle}</p>
          </div>
        </div>
        <div className="card-left-bottom">
          <p className="secondary-text">{details.text}</p>
          <a
            className="btn primaryBtn margin-btn"
            onClick={() => navigate("/our-process")}
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="right">
        <img src={details.img} />
      </div>
    </div>
    // ))}
    // </div>
  );
};

export default ProcessCard;
