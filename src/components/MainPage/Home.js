import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import CarList from "../CarList/CarList";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";


const Home = () => {
    // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
    <Navbar theme={theme} setTheme={setTheme} />
    <Hero theme={theme} />
    <About />
    <Services />
    <CarList />
    <Testimonial />
    <AppStoreBanner />
    <Contact />
    <Footer />
  </div>
  )
}

export default Home
