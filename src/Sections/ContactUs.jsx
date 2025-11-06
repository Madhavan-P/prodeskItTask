import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    agree: false,
    subscribe: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      agree: false,
      subscribe: false,
      message: "",
    });
  };

  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <label>
              First Name<span>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Last Name<span>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Company<span>*</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>
              Job Title<span>*</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job title"
              required
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>

          <div className="input-field">
            <label>
              Phone<span>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-field full">
          <label>
            How can we help you?<span>*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="checkboxes">
          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            I agree to the privacy notice<span>*</span>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe me to Persistent’s latest thought leadership, blogs, and
            updates.
          </label>
        </div>

        <button type="submit" className="btn primaryBtn">
          Submit
        </button>

        <p className="contact-info">
          You can also email us directly at{" "}
          <a href="mailto:info@persistent.com">info@persistent.com</a>
        </p>
      </form>
    </section>
  );
};

export default ContactUs;
