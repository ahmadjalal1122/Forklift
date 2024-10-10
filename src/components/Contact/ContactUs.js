import React, { Component, useEffect, useState,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Component import
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import '../About/AboutUs.css'
import './ContactUs.css'

const ContactUs = () => {
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

      const form = useRef();
      const handleContactInquiry = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_p478mti',
              'template_za7k***',
              form.current,
              'P0xsNsNTFQ***')
          .then((result) => {
              console.log(result.text);
              toast.success('Email sent successfully!', {
                position: 'top-center',
                autoClose: 3000, // Duration in milliseconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
          }, (error) => {
              console.log(error.text);
              toast.error('Email does not sent!', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
          });
      };
  return (
  <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <section className="background firstsection ">
            <div className="overlay"></div>
            <div className="box-main">
                <div className="firsthalf">
                    <p className="AboutUsHeading">
                        CONTACT US
                    </p>
                </div>
            </div>
        </section>

        <form action="" onSubmit={handleContactInquiry} ref={form}>
        <div className='contactUs'>
            <div className="leftDiv">
            <h2 className='contactHeading'>GET IN TOUCH</h2>
            <div  style={{marginLeft:"12%"}}>
            <h5 className="getintouchHeading">Phone</h5>
            <p style={{color:'#3b3b53'}}>01733 332006</p>
            </div>

            <div style={{marginLeft:"12%"}}>
            <h5 className="getintouchHeading">Email</h5>
            <p style={{color:'#3b3b53'}}>plplifttruck@btconnect.com</p>         
            </div>

            <div style={{ marginLeft: "12%" }}>
                <h5 className="getintouchHeading">Office</h5>
                <p style={{color:'#3b3b53'}}>41 Ivatt Way, Peterborough, Cambs, PE3 7PN</p>
            </div>
    

            <a href="" className="fa-brands fa-square-facebook FB" style={{marginLeft:'15%'}} ></a>
            <a href="" className="fa-brands fa-twitter TW" ></a>
            </div>
            <div className="rightDiv">
            <h2 className='contactHeading'>SEND A MESSAGE</h2>
            <input  className='Input' name="user_name" required type="text" placeholder='Name'/>
            <input  className='Input' name="user_email" required type="email" placeholder='Email'/>
            <input  className='Input' name="user_subject" required type="text" placeholder='Subject'/>
            {/* <input  className='Input' name="message" required type="text" placeholder='Message'/> */}
            <textarea className='Input' name="message" required placeholder='Message'></textarea>

            <button className='btnSend'>Send</button>

            </div>
        </div>
        </form>

        <Footer />
    </div>
  )
}

export default ContactUs
