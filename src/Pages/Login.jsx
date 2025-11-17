import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (!loginData.email || !loginData.password) {
      alert("Please fill all fields");
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(loginData.email)) {
      alert("Enter a valid email");
      return;
    }

    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      alert(`Welcome back, ${storedUser.name}!`);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div>
        <h1>Welcome To Prodesk</h1>
        <h3>Join With Us</h3>
        <p className="login-text">Shape your Future With Confidence</p>
      </div>

      <div className="auth-ctn">
        <h2>Login</h2>
        <div className="auth">
          <label>Name : </label>
          <input
            type="name"
            name="name"
            placeholder="Enter Name"
            value={loginData.name}
            onChange={handleChange}
          />
        </div>

        <div className="auth">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="auth">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
