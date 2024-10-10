import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './AboutUs.css'
import truck from '../../assets/Truck2.png'

const AboutUs = () => {
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
        <section className="background firstsection ">
            <div className="overlay"></div>
            <div className="box-main">
                <div className="firsthalf">
                    <p className="AboutUsHeading">
                        About Us
                    </p>
                </div>
            </div>
        </section>

        <div className="AboutUsSection">
            <b style={{ textDecoration: 'underline' }}>WELCOME TO PLP LIFTERS!</b>
            <p>PLP Lift Trucks Peterborough Limited are an Independent Mechanical Handling Company</p>
        </div>

        <div className="AboutUsDetail">
            <img src={truck} alt="image" />
            <div>
                <b>PLP HAVE BEEN ESTABLISHED IN PETERBOROUGH FOR OVER 24 YEARS</b>
                <p>Our Core business is the Supply and Maintenance of Materials Handling Equipment for our customers. We can offer tailored made Servicing Packages to suit your Requirements, and LOLER Inspections by our own Accredited Engineers.We pride ourselves on being able to Supply New and Used Counterbalance and Warehousing Equipment, either to Purchase or Hire, to suit our Customers Application all at a Competitive Price.</p>
            </div>
        </div>


        <Footer />
    </div>
  )
}

export default AboutUs
