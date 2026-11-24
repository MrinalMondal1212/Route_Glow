import React from "react";
import main from "../assets/main.png";
import {
  BusFront,
  Check,
  Headphones,
  Minus,
  Phone,
  Search,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-h-[700px] flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
      linear-gradient(
        rgba(10, 30, 85, 0.72),
        rgba(15, 45, 120, 0.78)
      ),
      url(${main})
    `,
      }}
    >
      
      <div className="w-[1200px] ">
        <div className=" flex  justify-between">
          {/* hero content */}
          <div className="text-white mt-12">
            <p className="text-[#f59e0b]  flex gap-3  font-extrabold">
              <Minus /> PREMIUM BUS CHARTER SERVICE
            </p>
            <h1 className="text-5xl mt-5 leading-[60px] font-extrabold">
              Comfortable & <br />{" "}
              <span className="text-[#f59e0b]">Affordable</span> <br /> Bus
              Rentals
            </h1>
            <p className="text-gray-300 mt-5">
              Book modern, air-conditioned buses for tours, weddings,
              <br /> corporate events, and group travel. Professional drivers,
              <br /> transparent pricing.
            </p>
            <div className="flex gap-5">
              <div className="bg-blue-500 font-semibold cursor-pointer  gap-3 mt-7 w-[170px] p-6 h-[45px] flex items-center justify-center rounded-lg">
                <BusFront />
                <NavLink  to="/buses">View Fleet</NavLink>
              </div>
              <div className="border  font-semibold cursor-pointer  gap-3 mt-7 w-[170px] p-6 h-[45px] flex items-center justify-center rounded-lg">
                <Phone />
                <NavLink>Book Now</NavLink>
              </div>
            </div>
            {/* trust section */}
            <div className="flex gap-7">
              <div className="flex items-center gap-3 mt-6">
                <div className="bg-[#f59e0b]/30 flex justify-center items-center h-[45px] w-[42px] rounded-lg ">
                  <ShieldCheck color="#f59e0b" />
                </div>
                <p className="text-gray-300">
                  100% safe
                  <br />
                  Verified
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className=" flex justify-center items-center h-[45px] w-[42px] rounded-lg ">
                  <Headphones />
                </div>
                <p className="text-gray-300">
                  24/7 Customer
                  <br />
                  Support
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="bg-[#f59e0b]/30 flex justify-center items-center h-[45px] w-[42px] rounded-lg ">
                  <Tag color="#f59e0b" />
                </div>
                <p className="text-gray-300">
                  Best Price
                  <br />
                  Guranteed
                </p>
              </div>
            </div>
          </div>
          {/* search buses */}
          <div className=" text-white w-[550px] h-[470px] bg-[#020617]/50 mt-12 rounded-3xl px-7">
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-blue-500 flex justify-center items-center h-[45px] w-[42px] rounded-lg ">
                <Search />
              </div>
              <p className="flex flex-col">
                <span className="font-bold">Find Your Bus</span>
                <span className="text-gray-300">Quick & easy booking</span>
              </p>
            </div>
            <p className="mt-3 text-sm text-gray-300">📍 PICKUP LOCATION</p>
            <input
              className="w-full bg-[#1e293bcc]/40 text-gray-300  px-3 py-4 mt-2 rounded-lg"
              placeholder="Enter pickup city or address"
            />
            <p className="mt-3 text-sm text-gray-300">🏁 DROP LOCATION</p>
            <input
              className="w-full bg-[#1e293bcc]/40 text-gray-300  px-3 py-4 mt-2 rounded-lg"
              placeholder="Enter destination"
            />
            <p className="mt-3 text-sm text-gray-300">📅 DATE</p>
            <input
              type="text"
              placeholder="DD-MM-YY"
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = "text";
                }
              }}
              className="w-full bg-[#1e293bcc]/40 text-gray-300 px-3 py-4 mt-2 rounded-lg outline-none"
            />
            <div className="bg-[#f59e0b] rounded-xl mt-3 ">
              <NavLink>
                <div className="flex justify-center text-black font-semibold py-3 gap-4">
                  <Search />
                  Search Available Busses{" "}
                </div>
              </NavLink>
            </div>
            <div className="flex justify-center text-[12px] gap-2 mt-3 text-gray-300">
              <p className="flex items-center justify-cneter">
                <Check size={15} />
                Free Cancellation
              </p>{" "}
              <p className="flex items-center justify-center">
                <Check size={15} />
                No Hidder Charges
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* customer reviews and experience */}
      <div className="w-[1200px] flex justify-between">
        <div className="w-[250px] h-[80px] bg-blue-800/20 rounded-lg flex flex-col justify-center items-center mt-12"><h3 className="text-[#f59e0b] text-4xl font-bold">500+</h3><p className="text-gray-400">Buses Available</p></div>
         <div className="w-[250px] h-[80px] bg-blue-800/20 rounded-lg flex flex-col justify-center items-center mt-12"><h3 className="text-[#f59e0b] text-4xl font-bold">12k+</h3><p className="text-gray-400">Happy Customers</p></div>
         <div className="w-[250px] h-[80px] bg-blue-800/20 rounded-lg flex flex-col justify-center items-center mt-12"><h3 className="text-[#f59e0b] text-4xl font-bold">50+</h3><p className="text-gray-400">Cities Around</p></div>
         <div className="w-[250px] h-[80px] bg-blue-800/20 rounded-lg flex flex-col justify-center items-center mt-12"><h3 className="text-[#f59e0b] text-4xl font-bold">8+</h3><p className="text-gray-400">Years Experience</p></div>
      </div>
    </section>
  );
};

export default Hero;
