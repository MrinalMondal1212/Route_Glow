import { Check, ChevronRight, ClockCheck, CreditCard, MapPin, Phone, Shield, Users, Van } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[850px] bg-[#020617] flex flex-col items-center justify-center">
      <div className="w-[1200px] mt-11 flex  justify-between">
        <div className="flex flex-col">
          <p className="flex gap-3  items-center">
            <span className="w-[40px] h-[40px] bg-[#1e40af] flex justify-center items-center rounded-lg ">
              <Van color="white" />
            </span>{" "}
            <span className="text-white text-2xl font-extrabold">
              Route<span className="text-[#f59e0b]">Glow</span>
            </span>
          </p>

          <p className="text-gray-400 mt-8">
            Premium bus charter and rental services since 2016. <br />
            Serving 50+ cities with a modern fleet of 500+ vehicles.
            <br /> Safe, comfortable, and always on time.
          </p>
          <p className="text-white font-bold text-xl mt-8">Follow Us</p>
          <div className="text-gray-500 flex gap-5 mt-5 cursor-pointer ">
            <p className="w-[50px] h-[50px] border border-[#1e40af] bg-[#020617]/20 flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <FaFacebookF size={25} />
            </p>
            <p className="w-[50px] h-[50px] border border-[#1e40af] bg-[#020617]/20 flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <FaInstagram size={30} />
            </p>
            <p className="w-[50px] h-[50px] border border-[#1e40af] bg-[#020617]/20 flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <FaTwitter size={30} />
            </p>
            <p className="w-[50px] h-[50px] border border-[#1e40af] bg-[#020617]/20 flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <FaLinkedinIn size={30} />
            </p>
          </div>
        </div>
        {/* second column */}

        <div className="text-gray-500">
          <h1 className="text-white font-bold text-xl mb-4">Our Fleet</h1>
          <p className="flex cursor-pointer mb-4 transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Mini Bus(15-20 seats)
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Standard Coach(30-35 seats)
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Luxury Coach(40-50 seats)
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Sleeper Coach(40-50 seats)
          </p>
          <h1 className="text-white font-bold text-xl mb-4">Services</h1>
          <p className="flex cursor-pointer mb-4 transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Wedding Transport
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Destination Travel
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Tour Packages
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Daily Day to Day Ride
          </p>
        </div>

        {/* third column */}
        <div className="text-gray-500">
          <h1 className="text-white font-bold text-xl mb-4">Comapny</h1>
          <p className="flex cursor-pointer mb-4 transition-all duration-300 hover:translate-x-4 hover:text-[var(--color-yellow)] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Home
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Services
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            About Us
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Terms & Condition
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Cookies Policy
          </p>
          <p className="flex cursor-pointer mb-4  transition-all duration-300 hover:translate-x-4 hover:text-[#f59e0b] items-center gap-4">
            <ChevronRight color="#1e40af" size={18} />
            Privacy Policy
          </p>
        </div>
        {/* fourth column */}
        <div className="text-gray-500 ">
          <h1 className="text-white font-bold text-xl mb-4">Contact Us</h1>
          <div className="border border-[#1e40af] w-[250px] h-[250px] p-4 rounded-xl">
            <p className="flex gap-4 items-center font-bold ">
              <span className="w-[30px] h-[30px] bg-[#f59e0b]/20 rounded-lg flex justify-center items-center ">
                <MapPin color="#f59e0b" size={20} />
              </span>
              HEAD OFFICE
            </p>
            <p className="mb-3 hover:text-[#f59e0b] cursor-pointer">1250 Charter Blvd, Suite 400 New York, NY 10001, USA</p>
            <p className="flex gap-4 items-center font-bold">
              <span className="w-[30px] h-[30px] bg-[#f59e0b]/20 rounded-lg flex justify-center items-center ">
                <Phone color="#f59e0b" size={20} />
              </span>
              24/7 HOTLINE
            </p>
            <p className="mb-3 hover:text-[#f59e0b] cursor-pointer">+91 7548034453</p>
            <p className="flex gap-4 items-center font-bold">
              <span className="w-[30px] h-[30px] bg-[#f59e0b]/20 rounded-lg flex justify-center items-center ">
                <MapPin color="#f59e0b" size={20} />
              </span>
              EMAIL US
            </p>
            <p className="mb-3 hover:text-[#f59e0b] cursor-pointer">mrinalmondal9883@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-[1200px] border h-[100px] gap-6 justify-center border-[#1e40af] rounded-xl mt-9 flex text-gray-400 p-4">
        <p className="flex justify-center items-center gap-2"><Shield color="#f59e0b" /> 100% Safe & Insured</p>
        <p className="border-r-2 border-[#1e40af]"></p>
        <p className="flex justify-center items-center gap-2"><CreditCard color="#f59e0b" /> Secure Payment</p>
        <p className="border-r-2 border-[#1e40af]"></p>
        <p className="flex justify-center items-center gap-2"><Check color="#f59e0b" /> Free Cancellation</p>
        <p className="border-r-2 border-[#1e40af]"></p>
        <p className="flex justify-center items-center gap-2"><Users color="#f59e0b" /> 12,000+ Happy Clients</p>
        <p className="border-r-2 border-[#1e40af]"></p>
        <p className="flex justify-center items-center gap-2"><ClockCheck color="#f59e0b" /> On-Time Guarantee</p>
        

      </div>
    </div>
  );
};

export default Footer;
