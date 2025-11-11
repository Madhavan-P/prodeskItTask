import React from "react";

import logo1 from "../assets/dell-logo.svg";
import logo2 from "../assets/hp-logo.svg";
import logo3 from "../assets/zoho-logo.svg";
import logo4 from "../assets/wipro-logo.svg";
import logo5 from "../assets/hcl-logo.svg";
import logo6 from "../assets/jcb-logo.svg";

const PartnersSection = () => {
  return (
    <section className="partner-section-ctn section">
      <div className="ctn-1">
        <h4>Trusted by 13,000+ customers worldwide</h4>
      </div>
      <div className="partner-section">
        {/* <div className="item item1"> */}
        {/* <h1>DELL</h1> */}
        <img src={logo1} className="item item1" />
        {/* </div> */}
        {/* <div className="item item2"> */}
        {/* <h1>HP</h1> */}
        <img src={logo2} className="item item2" />
        {/* </div> */}
        {/* <div className="item item3"> */}
        {/* <h1>HCL</h1> */}
        <img src={logo5} className="item item3" />
        {/* </div> */}
        {/* <div className="item item4"> */}
        {/* <h1>ZOHO</h1> */}
        <img src={logo3} className="item item4" />
        {/* </div> */}
        {/* <div className="item item5"> */}
        {/* <h1>WIPRO</h1> */}
        <img src={logo4} className="item item5" />
        {/* </div> */}
        {/* <div className="item item6"> */}
        {/* <h1>JCB</h1> */}
        <img src={logo6} className="item item6" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
