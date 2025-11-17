import "./App.css";
import "./Pages.css";
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
import FooterSection from "./Sections/FooterSection.jsx";
import Process from "./Pages/Process.jsx";
import ProcessPage from "./Pages/Process.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import CareersPage from "./Pages/CareersPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import UpdatesPage from "./Pages/UpdatesPage.jsx";
import FAQPage from "./Pages/FaqPage.jsx";
import DomainDetailsPage from "./Components/DomainDetailsPage.jsx";
import SelectedJobOffer from "./Components/SelectedJobOffer.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SignUp.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="our-process" element={<Process />} />
        <Route path="our-services" element={<ServicesPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="faq" element={<FAQPage />} />

        <Route path="our-updates" element={<UpdatesPage />} />
        <Route path="domain/:id" element={<DomainDetailsPage />} />
        <Route path="careers/:id" element={<SelectedJobOffer />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

{
  /* <Header /> */
}
{
  /* <ProcessPage /> */
}
{
  /* <ServicesPage /> */
}
{
  /* <AboutUsPage /> */
}
{
  /* <CareersPage /> */
}
{
  /* <ContactUsPage /> */
}
{
  /* <UpdatesPage /> */
}
{
  /* <FAQPage /> */
}
{
  /* <DomainDetailsPage /> */
}

{
  /* <HeroSection /> */
}
{
  /* <TrustSection /> */
}
{
  /* <PartnersSection /> */
}
{
  /* <UpdateSection /> */
}
{
  /* <ProcessSection /> */
}
{
  /* <AboutSection /> */
}
{
  /* <DomainSection /> */
}
{
  /* <ServiceSection /> */
}
{
  /* <OurPartnerSection /> */
}
{
  /* <WhyProdesk /> */
}
{
  /* <Oppertunities /> */
}
{
  /* <ContactUs /> */
}
{
  /* <FooterSection /> */
}
