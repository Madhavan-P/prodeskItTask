import React from "react";

const WhyProdesk = () => {
  return (
    <section className="section">
      <h1 className="section-title">Why Prodesk ?</h1>
      <div className="why-bg-ctn">
        <div className="why-ctn top-glass">
          <div className="why-card">
            <h2 className="secondary-text">EXPERTISE</h2>
            <p className="">
              Our team consists of seasoned professionals with diverse expertise
              across multiple domains, enabling us to deliver innovative,
              reliable, and high quality solutions.
            </p>
          </div>
          <div className="why-card">
            <h2 className="secondary-text">INNOVATION</h2>
            <p>
              By embracing the latest technologies and agile methodologies, we
              deliver innovative solutions that keep your business ahead of the
              competition.
            </p>
          </div>
          <div className="why-card">
            <h2 className="secondary-text">PROJECT MANAGEMENT</h2>
            <p>
              With our project management expertise, you can be confident that
              your engineering project will be completed on schedule and within
              budget.
            </p>
          </div>
        </div>
        <div className="why-ctn bottom-glass">
          <div className="why-card">
            <h2 className="secondary-text">PRODUCT DEVELOPMENT</h2>
            <p>
              If you ve got a product idea, we ll help you transform it into
              reality.
              {/* From shaping concepts to building prototypes and testing,
            we stand with you at every step to bring your product to market
            successfully. */}
            </p>
          </div>
          <div className="why-card">
            <h2 className="secondary-text">RELIABILITY</h2>
            <p>
              We've built our reputation on delivering results on time, within
              budget, and with unwavering reliability.
            </p>
          </div>
          <div className="why-card">
            <h2 className="secondary-text">Client Centric Approach</h2>
            <p>
              Your success drives everything we do. We tailor solutions to your
              goals and challenges, ensuring maximum value and results that
              exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProdesk;
