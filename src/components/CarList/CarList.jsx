import React from "react";
import T1 from "../../assets/Truck1.png";
import T2 from "../../assets/Truck2.png";
import T3 from "../../assets/Truck3.png";
import './CarList.css'

const carList = [
  {
    name: "BMW 328I, SPORT LINE BODY KIT",
    price: 1000,
    Mileage:18000,
    FuelType:"Gasoline",
    Engine:2000,
    Transmission:"Automatic",
    Drive:"RWD",
    image: T1,
    aosDelay: "0",
  },
  {

    name: "TOYOTA TACOMA 4WD, XSE, LEATHER",
    price: 1500,
    Mileage:15000,
    FuelType:"Gasoline",
    Engine:2000,
    Transmission:"Automatic",
    Drive:"RWD",
    image: T2,
    aosDelay: "0",
  },
  {
    name: "TOYOTA CAMRY XSE 2016",
    price: 2100,
    Mileage:18000,
    FuelType:"Gasoline",
    Engine:2000,
    Transmission:"Automatic",
    Drive:"RWD",
    image: T3,
    aosDelay: "0",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          LISTINGS
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
         See all the trucks at reasonable price
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}</p>
                  </div>
                    <div className="Truckdetail">
                    <span><b>Mileage: </b>{data.Mileage}</span>  <span><b>FuelType: </b>{data.FuelType}</span>
                    </div>

                    <div className="Truckdetail">
                    <span><b>Engine: </b>{data.Engine}</span>  <span><b>Transmission: </b>{data.Transmission}</span>
                    </div>

                    <div className="Truckdetail">
                    <span><b>Drive: </b>{data.Drive}</span> 
                    </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
