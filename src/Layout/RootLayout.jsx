import React from "react";
import Header from "../Components/Header";
import FooterSection from "../Sections/FooterSection";
import { Outlet } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop.jsx";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default RootLayout;
