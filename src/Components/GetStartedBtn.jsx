import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetStartedBtn = ({ fn }) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowLogout(false);
    window.location.reload();
  };

  return (
    <>
      {user ? (
        <div className="user-container" style={{ position: "relative" }}>
          <p
            className="user-name-display"
            onClick={() => setShowLogout(!showLogout)}
            style={{ cursor: "pointer" }}
          >
            <strong>{user.name}</strong>
          </p>

          {showLogout && (
            <div
              className="logout-box"
              style={{
                position: "absolute",
                top: "30px",
                left: 0,
                background: "#fff",
                padding: "10px 15px",
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                zIndex: 50,
              }}
              onClick={handleLogout}
            >
              Logout
            </div>
          )}
        </div>
      ) : (
        <a
          className="btn primaryBtn"
          onClick={() => {
            if (fn) fn(); // run fn (optional)
            navigate("/login");
          }}
        >
          Get Started
        </a>
      )}
    </>
  );
};

export default GetStartedBtn;
