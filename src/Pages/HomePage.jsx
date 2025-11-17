import React from "react";
import HeroSection from "../Sections/HeroSection";
import TrustSection from "../Sections/TrustSection";
import UpdateSection from "../Sections/UpdateSection";
import ProcessSection from "../Sections/ProcessSection";
import AboutSection from "../Sections/AboutSection";
import DomainSection from "../Sections/DomainSection";
import ServiceSection from "../Sections/ServiceSection";
import OurPartnerSection from "../Sections/OurPartnerSection";
import WhyProdesk from "../Sections/WhyProdesk";
import Oppertunities from "../Components/Oppertunities";
import ContactUs from "../Sections/ContactUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <UpdateSection />
      <ProcessSection />
      <AboutSection />
      <DomainSection />
      <ServiceSection />
      <OurPartnerSection />
      <WhyProdesk />
      <Oppertunities />
      <ContactUs />
    </>
  );
};

export default HomePage;
