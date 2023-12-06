import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import AboutUs from "../components/AboutUs/AboutUs";
import Trustees from "../components/Trustees/Trustees";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  let login = localStorage.getItem("AuthUser");

  return (
    <div>
      <NavbarHome />
      <Trustees />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
