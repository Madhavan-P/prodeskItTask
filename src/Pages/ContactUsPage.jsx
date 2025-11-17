import React from "react";
import ContactUs from "../Sections/ContactUs";

import Office from "../assets/contact-office-img.webp";

const ContactUsPage = () => {
  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact Us</h2>

      <div>
        <div>
          <h3>Questions & Estimates</h3>
          <p className="contact-text">
            We'd love to hear from you! Please reach out at your convenience so
            we can discuss your requirement.
          </p>

          <h3>PRODESK IT</h3>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=91springboard,+Vyapar+Marg,+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              4th Floor, 91springboard, Plot No. D, 107, Vyapar Marg, D Block,
              Sector 2, Noida, Uttar Pradesh 201301
            </a>
          </p>

          <h3>Email</h3>
          <p>
            <a href="mailto:info@prodesk.in" className="contact-link">
              info@prodesk.in
            </a>
          </p>

          <h3>Feel Free to Call</h3>
          <p>
            <a href="tel:8851407750" className="contact-link">
              8851407750
            </a>
          </p>

          <h3>Our Business Hours</h3>
          <p>Mon - Fri / 09:00 - 06:00</p>
        </div>

        <div>
          <img src={Office} alt="office" />
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default ContactUsPage;
