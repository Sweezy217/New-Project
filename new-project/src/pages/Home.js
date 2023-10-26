import React from "react";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import AboutUs from "../components/AboutUs/AboutUs";
import Trustees from "../components/Trustees/Trustees";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


const Home = () => {

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
