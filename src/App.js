import React, { Component, useEffect, useState } from "react";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router,Switch,Route,Navigate} from 'react-router-dom';
import { Routes  } from 'react-router-dom';
import Home from "./components/MainPage/Home";
import AboutUs from "./components/About/AboutUs";
import ServicesPage from "./components/Services/ServicesPage";
import ContactUs from "./components/Contact/ContactUs";
import TrucksListing from "./components/Sell/Hire/TrucksListing";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
function App() {
  return (
    <>
    <Router >
      <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Services" element={<ServicesPage/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/TrucksListing" element={<TrucksListing/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
