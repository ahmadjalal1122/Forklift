import React from "react";

import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaHourglassHalf } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';

const skillsData = [
  {
    name: "SALES",
    icon: (
      <FaMoneyBillAlt className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "At Forklift Trucks Peterborough we can supply a range of new and used Mechanical handling Equipment",
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
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                {/* <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
