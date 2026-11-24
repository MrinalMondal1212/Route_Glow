import { Box, Check, Minus } from "lucide-react";
import React from "react";
import minibus from "../assets/minibus.avif";
import { NavLink } from "react-router-dom";

const Bussection = () => {
  return (
    <div className="bg-[#020617] h-[1050px] flex justify-center ">
      <div className="mt-[85px] w-[1200px]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#f59e0b] font-semibold flex ">
            <Minus /> OUR FLEET
          </p>
          <p className="text-white text-[65px] font-extrabold">
            Choose Your <span className="text-[#f59e0b]">Perfect Bus</span>
          </p>
          <p className="text-gray-400 text-center">
            From compact mini buses to full luxury coaches - we have the <br />{" "}
            right vechicle for every journey
          </p>
        </div>
        <div className="flex mt-8 justify-between">
          {/* mini bus box */}
          <div className="w-[350px] h-[600px] border border-[#1d4ed8] overflow-hidden rounded-2xl">
            <img
              src={minibus}
              alt="Bus"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Mini Bus</p>
                <p className="w-[150px] h-[40px] flex justify-center border border-[#1d4ed8] text-[#93c5fd] font-semibold items-center rounded-3xl bg-[#1d4ed833]">
                  15-20 SEATS
                </p>
              </div>
              <p className="text-gray-400 mt-3">
                Perfect for small groups, airport transfers, and <br /> day
                trips with full comfort
              </p>
              <div className="flex flex-wrap gap-5">
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    AC
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    COMFORT SEATING
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl w-fit p-2">
                    <Check size={19} />
                    USB CHARGING
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[600px] border border-[#1d4ed8] overflow-hidden rounded-2xl">
            <img
              src={minibus}
              alt="Bus"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Mini Bus</p>
                <p className="w-[150px] h-[40px] flex justify-center border border-[#1d4ed8] text-[#93c5fd] font-semibold items-center rounded-3xl bg-[#1d4ed833]">
                  15-20 SEATS
                </p>
              </div>
              <p className="text-gray-400 mt-3">
                Perfect for small groups, airport transfers, and <br /> day
                trips with full comfort
              </p>
              <div className="flex flex-wrap gap-5">
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    AC
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    COMFORT SEATING
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl w-fit p-2">
                    <Check size={19} />
                    USB CHARGING
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[600px] border border-[#1d4ed8] overflow-hidden rounded-2xl">
            <img
              src={minibus}
              alt="Bus"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Mini Bus</p>
                <p className="w-[150px] h-[40px] flex justify-center border border-[#1d4ed8] text-[#93c5fd] font-semibold items-center rounded-3xl bg-[#1d4ed833]">
                  15-20 SEATS
                </p>
              </div>
              <p className="text-gray-400 mt-3">
                Perfect for small groups, airport transfers, and <br /> day
                trips with full comfort
              </p>
              <div className="flex flex-wrap gap-5">
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    AC
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl p-2 w-fit">
                    <Check size={19} />
                    COMFORT SEATING
                  </p>
                </div>
                <div className="">
                  <p className="text-[#f59e0b]/50 mt-4 font-bold flex h-[30px] gap-1 bg-[#f59e0b]/15 justify-center items-center rounded-3xl w-fit p-2">
                    <Check size={19} />
                    USB CHARGING
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button to explore all fleet */}
        <div className="text-white flex justify-center cursor-pointer items-center mt-10"><NavLink><p className="flex gap-3 border p-5 rounded-2xl font-bold text-xl border-white"><Box/>Explore Full Fleet</p></NavLink></div>
      </div>
    </div>
  );
};

export default Bussection;
