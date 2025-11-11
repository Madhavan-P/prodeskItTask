// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

import AboutSection from "./Sections/AboutSection.jsx";
import HeroSection from "./Sections/HeroSection.jsx";
import ProcessSection from "./Sections/ProcessSection.jsx";
import TrustSection from "./Sections/TrustSection.jsx";
import PartnersSection from "./Sections/PartnersSection.jsx";
import UpdateSection from "./Sections/UpdateSection.jsx";
import DomainSection from "./Sections/DomainSection.jsx";
import ServiceSection from "./Sections/ServiceSection.jsx";
import OurPartnerSection from "./Sections/OurPartnerSection.jsx";
import WhyProdesk from "./Sections/WhyProdesk.jsx";
import Oppertunities from "./Components/Oppertunities.jsx";
import ContactUs from "./Sections/ContactUs.jsx";
import Footer from "./Components/Footer.jsx";
import FooterSection from "./Sections/FooterSection.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustSection />
      {/* <PartnersSection /> */}
      <UpdateSection />
      <ProcessSection />
      <AboutSection />
      <DomainSection />
      <ServiceSection />
      <OurPartnerSection />
      <WhyProdesk />
      <Oppertunities />
      <ContactUs />
      <FooterSection />
    </>
  );
}

export default App;
