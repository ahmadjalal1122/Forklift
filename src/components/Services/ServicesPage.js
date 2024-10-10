import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import '../About/AboutUs.css'
import './Services.css'

import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';
import { FaWrench,FaCog, FaSearch } from 'react-icons/fa';

const skillsData = [
  {
    name: "SALES",
    icon: (
      <FaMoneyBillAlt className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "At PLP Lift Trucks Peterborough we can supply a range of new and used Mechanical handling Equipment",
    aosDelay: "0",
  },
  {
    name: "HIRES",
    icon: (
      <FaHourglassHalf className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "We supply a flexible hire period from short term to long term hire at competitive prices, we have access to transport links",
    aosDelay: "1000",
  },
  {
    name: "BREAKDOWNS & REPAIR",
    icon: (
      <FaWrench className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "We offer a comprehensive repair at your premises, or at our workshop in Peterborough, we aim to provide as little down time.",
    aosDelay: "500",
  },
  {
    name: "SERVICING",
    icon: (
      <FaSearch className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "We offer full service on all type of lift trucks and warehouse equipment at your premises, or at our workshop in Peterborough. We have a service program designed to suit your needs.",
    aosDelay: "500",
  },
  {
    name: "THOROUGH EXAMINATIONS",
    icon: (
      <FaCog className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "We offer Thorough Examinations, on all type of lift trucks and warehouse equipment at your premises. Our Thorough examinations follow the LOLER 98 and PUWER 98 regulations.",
    aosDelay: "500",
  },
];
const ServicesPage = () => {


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
                            SERVICES
                        </p>
                    </div>
                </div>
            </section>
    
            <div className="AboutUsSection ServicesSection">
                <b style={{ textDecoration: 'underline' }}>OUR SERVICES</b> 
                <p>
                Forklift Maintenance should always be scheduled in accordance with the recommendations of the manufacturer of your equipment to aid in preventing breakdowns of the equipment resulting in unscheduled stoppages to your work. The time between the services and inspections can vary according to frequency of use and the working environment.Each owner is required that all work equipment is maintained to an efficient working order and in good repair. This is primarily to ensure that the equipment is safe, but it also has implications for productivity.We can schedule maintenance to suit the individual application demands upon your machine, and with Our team of engineers ensure your service, breakdown and maintenance needs are dealt with as quickly as possible.
                <br />
                The time between the services and inspections can vary according to frequency of use and the working environment. Each owner is required that all work equipment is maintained to an efficient working order and in good repair. This is primarily to ensure that the equipment is safe, but it also has implications for productivity. We can schedule maintenance to suit the individual application demands upon your machine, and with Our team of engineers ensure your service, breakdown and maintenance needs are dealt with as quickly as possible.All your servicing and repairs are carried out in line with the manufacturers’ recommendations
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-10">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
    

           <Footer />
        </div>
  )
}

export default ServicesPage
