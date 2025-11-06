import React from "react";

import img1 from "../assets/img-1.webp";
import img2 from "../assets/img-2.webp";
import img3 from "../assets/img-3.webp";
import img4 from "../assets/img-4.webp";
import img5 from "../assets/img-5.webp";
import img6 from "../assets/img-6.webp";

import img7 from "../assets/img-7.webp";
import img8 from "../assets/img-8.webp";
import img9 from "../assets/img-9.webp";
import img10 from "../assets/img-10.webp";
import img11 from "../assets/img-11.webp";
import img12 from "../assets/img-12.webp";

const OurPartnerSection = () => {
  return (
    <section className="section">
      <h2 className="section-title">Our Partners</h2>
      <div className="our-partner-section">
        <img src={img1} className="our-item p-item1" />
        <img src={img2} className="our-item p-item2" />
        <img src={img3} className="our-item p-item3" />
        <img src={img4} className="our-item p-item4" />
        <img src={img5} className="our-item p-item5" />
        <img src={img6} className="our-item p-item6" />
      </div>
      <div className="our-partner-section p2">
        <img src={img7} className="our-item p-item1" />
        <img src={img8} className="our-item p-item2" />
        <img src={img9} className="our-item p-item3" />
        <img src={img10} className="our-item p-item4" />
        <img src={img11} className="our-item p-item5" />
        <img src={img12} className="our-item p-item6" />
      </div>
    </section>
  );
};

export default OurPartnerSection;
