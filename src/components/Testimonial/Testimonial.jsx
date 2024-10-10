import React from "react";
import P1 from "../../assets/website/p2.jpg";
import P2 from "../../assets/website/p1.jpg";
import P3 from "../../assets/website/p3.jpg";
const testimonialData = [
  {
    name: "Bryan Carruthers",
    image: P1,
    description: "The team is highly responsible, fun to work with, creative, mindful for a client's budget and schedule, and extremely knowledgeable",
    aosDelay: "0",
  },
  {
    name: "Wendy Stevens",
    image: P2,
    description: "Your team consistently goes above and beyond our expectations, and everything we've worked on with you has been a complete success.",
    aosDelay: "300",
  },
  {
    name: "Brandt Thompson",
    image: P3,
    description: "You're absolutely invaluable to our national organization, and we look forward to continuing to work with you.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lets have a look about the views of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt="image"
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
