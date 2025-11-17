import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));

    alert("Registered Successfully!");
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div>
        <h1>Welcome To Prodesk</h1>
        <h3>Create Your Account</h3>
        <p className="login-text">Shape your Future With Confidence</p>
      </div>

      <div className="auth-ctn">
        <h2>Sign Up</h2>

        <div className="auth">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="auth">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="auth">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSignup}>Sign Up</button>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
