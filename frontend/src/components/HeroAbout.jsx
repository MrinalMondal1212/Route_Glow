import { Bus, Headset, Minus, MoveRight, Tag, UserPlus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const HeroAbout = () => {
  return (
    <div className="bg-[#0f172a] h-[700px] flex justify-center">
      <div className="w-[1200px] mt-[85px]">
        <div className="flex justify-between items-center gap-10">
          <div>
            <p className="text-[#f59e0b] flex  ">
              <Minus /> WHY RIDECHARTER
            </p>
            <p className="text-[55px] mt-3  font-bold text-white">
              Travel Smarter, <br /> Travel{" "}
              <span className="text-[#f59e0b] ">Better</span>
            </p>
            <p className="text-gray-400">
              We've been connecting groups to their destinations for over 8
              years. Our
              <br /> commitment is to make every journey comfortable, safe, and{" "}
              <br /> memorable.
            </p>
            <button className="mt-7 p-4 cursor-pointer rounded-xl bg-blue-500">
              <NavLink>
                <p className="flex gap-4 font-semibold text-white">
                  <MoveRight /> Learn More AboutUs
                </p>
              </NavLink>
            </button>
          </div>
          {/* here is the four boxes */}
          <div className="grid grid-cols-2 gap-5 shrink-0">
            <div className="bg-[#1e293b] border border-[#1d4ed8] p-6 text-white rounded-2xl w-[300px] h-[250px]">
              <p className="w-[50px] h-[50px] bg-[#93c5fd] border border-[#e5e7eb] justify-center items-center flex rounded-lg">
                <Bus size={30} />
              </p>
              <p className="text-xl font-semibold mt-3">Modern Fleet</p>
              <p className="text-gray-400 mt-3">
                All vehicles maintained to the highest safety and comfort
                standards.
              </p>
            </div>
            <div className="bg-[#1e293b] border border-[#1d4ed8] p-6 text-white rounded-2xl w-[300px] h-[250px]">
              <p className="w-[50px] h-[50px] bg-[#93c5fd] border border-[#e5e7eb] justify-center items-center flex rounded-lg">
                <UserPlus size={30} />
              </p>
              <p className="text-xl font-semibold mt-3">Expert Driverst</p>
              <p className="text-gray-400 mt-3">
               Licensed, vetted, and experienced professionals behind every wheel.
              </p>
            </div>
            <div className="bg-[#1e293b] border border-[#1d4ed8] p-6 text-white rounded-2xl w-[300px] h-[250px]">
              <p className="w-[50px] h-[50px] bg-[#93c5fd] border border-[#e5e7eb] justify-center items-center flex rounded-lg">
                <Tag size={30} />
              </p>
              <p className="text-xl font-semibold mt-3">Transparent Pricing</p>
              <p className="text-gray-400 mt-3">
               No hidden fees. What you see is what you pay — always
              </p>
            </div>
            <div className="bg-[#1e293b] border border-[#1d4ed8] p-6 text-white rounded-2xl w-[300px] h-[250px]">
              <p className="w-[50px] h-[50px] bg-[#93c5fd] border border-[#e5e7eb] justify-center items-center flex rounded-lg">
                <Headset size={30} />
              </p>
              <p className="text-xl font-semibold mt-3">24/7 Support</p>
              <p className="text-gray-400 mt-3">
                Our team is always ready to assist you before, during, and after your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
