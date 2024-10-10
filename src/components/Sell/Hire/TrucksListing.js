import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import './Listings.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaRoad, FaGasPump, FaWrench, FaCar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';


// Component import
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import '../../About/AboutUs.css'


const TrucksListing = () => {
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
      const [images, setImages] = useState([]);
      const [formData, setFormData] = useState({
        mileage: '',
        fuelType: '',
        engine: '',
        transmission: '',
        drive: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to Array
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        
        let allValid = true; // To check if all files are valid
        files.forEach(file => {
            if (!validTypes.includes(file.type)) {
                allValid = false; // Mark as false if any invalid file is found
                alert(`Unsupported file type: ${file.type}. Only PNG, JPEG, and JPG are allowed.`);
            }
        });
    
        if (!allValid) {
            console.log("Unsupported image included, clearing images");
            setImages([]); // Clear the images state if any invalid file is found
        } else {
            // Set the files to the state if all files are valid
            setImages(files);
        }
    };
    
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        for (const key in formData) {
          data.append(key, formData[key]);
        }
        images.forEach(image => {
          data.append('images', image);
        });
    
        try {
          await axios.post('http://localhost:5000/ListVehicle', data);
          alert('Data submitted successfully!');
        } catch (error) {
          console.error('Error submitting form!', error);
        }
      };
     
      const [vehicles, setVehicles] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchVehicles = async () => {
          try {
            const response = await axios.get('http://localhost:5000/vehicles');
            setVehicles(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch vehicles', error);
            setLoading(false);
          }
        };
    
        fetchVehicles();
      }, []);
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      if (loading) {
        return (
          <div className="loading-container">
            <i className="fas fa-spinner"></i>
            <div className="loading-text">Loading...</div>
          </div>
        );
      }
    //   if (!vehicles.length) return <div>No Vehicles Found</div>;
    
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <section className="background firstsection ">
            <div className="overlay"></div>
            <div className="box-main">
                {/* <div className="firsthalf"> */}
                    <p className="AboutUsHeading">
                        HIRE FLEET AND SALES
                    </p>
                {/* </div> */}
            </div>
        </section>
        <form onSubmit={handleSubmit} className="form-container">
            <input required type="file" multiple onChange={handleImageChange} className="file-input"   accept="image/png, image/jpeg, image/jpg"/>
            <input required name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" className="text-input" />
            <input required name="fuelType" value={formData.fuelType} onChange={handleChange} placeholder="Fuel Type" className="text-input" />
            <input required name="engine" value={formData.engine} onChange={handleChange} placeholder="Engine (cc)" className="text-input" />
            <input required name="transmission" value={formData.transmission} onChange={handleChange} placeholder="Transmission" className="text-input" />
            <input required name="drive" value={formData.drive} onChange={handleChange} placeholder="Drive Type" className="text-input" />
            <button type="submit" className="submit-button">Submit</button>
        </form>
        <div className="vehicle-slider">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="vehicle-container">
          <Slider {...settings}>
            {vehicle.images.map((img, idx) => (
              <div key={idx} className="image-container">
                <img src={img.data} alt={`Vehicle ${index + 1} Image ${idx}`} className="vehicle-image" />
              </div>
            ))}
          </Slider>
          <div className="vehicle-details">
            <ul>
              <li className="detail-item">
                <p><FaRoad /> Mileage:</p> {vehicle.mileage}
              </li>
              <li className="detail-item">
                <p><FaGasPump /> FuelType:</p> {vehicle.fuelType}
              </li>
              <li className="detail-item">
                <p><FaWrench /> Engine:</p> {vehicle.engine}
              </li>
              <li className="detail-item">
                <p><MdAccessTime />Transmission:</p> {vehicle.transmission}
              </li>
              <li className="detail-item">
                <p><FaCar /> Drive:</p> {vehicle.drive}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
                
        <Footer />
    </div>
  )
}

export default TrucksListing
