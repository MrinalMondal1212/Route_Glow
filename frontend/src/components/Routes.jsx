import {
  Armchair,
  Box,
  Bus,
  Check,
  CircleDotDashed,
  Clock,
  Minus,
  Road,
} from "lucide-react";
import React from "react";
import digha from "../assets/digha.webp";
import { NavLink } from "react-router-dom";

const Routes = () => {
  return (
    <div className="bg-blue-600 h-[1050px] flex justify-center ">
      <div className="mt-[85px] w-[1200px]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#f59e0b] font-semibold flex ">
            <Minus /> OUR POPULAR DESTINATION
          </p>
          <p className="text-white text-[65px] font-extrabold">
            Choose Your <span className="text-[#f59e0b]">DESTINATION</span>
          </p>
          <p className="text-gray-400 text-center ">
            Explore our most popular bus routes and discover convenient
            connections between major cities. Whether you're travelling for
            business, leisure, or a weekend getaway, RouteGlow makes every
            journey comfortable, safe, and hassle-free.
          </p>
        </div>
        <div className="flex mt-8 justify-between">
          {/* mini bus box */}
          <div
            className="w-[350px] min-h-[600px] border border-blue-500/30
           bg-[#0f172a] overflow-hidden rounded-2xl p-3
           shadow-lg shadow-blue-950/30
           transition-all duration-300
           hover:-translate-y-2 hover:border-blue-400/60
           hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
          >
            <img
              src={digha}
              alt="Bus"
              className="w-full rounded-2xl h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Kolkata To Digha</p>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                border border-blue-400/20 bg-blue-500/10
                text-blue-300 whitespace-nowrap"
                >
                  <Armchair size={16} />
                  <span className="text-sm font-semibold">15 Seats Left</span>
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400
                   shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  ></span>
                </div>
              </div>
              <p className="text-gray-400 mt-3 gap-4 flex ">
                <CircleDotDashed />
                Executive Bus
              </p>
              <p className="text-gray-400 mt-3 flex  items-center gap-4">
                <Bus />
                TravelEase Transport
              </p>
              <div>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Clock />
                  12:30 - 4:50
                </p>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Road />
                  300 Km
                </p>
              </div>
              <div className="mt-7 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] ease-in-out hover:bg-blue-700 hover:border-blue-900 transition-all duration-300 hover:scale-95 justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[350px] min-h-[600px] border border-blue-500/30
           bg-[#0f172a] overflow-hidden rounded-2xl p-3
           shadow-lg shadow-blue-950/30
           transition-all duration-300
           hover:-translate-y-2 hover:border-blue-400/60
           hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
          >
            <img
              src={digha}
              alt="Bus"
              className="w-full rounded-2xl h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Kolkata To Digha</p>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                border border-blue-400/20 bg-blue-500/10
                text-blue-300 whitespace-nowrap"
                >
                  <Armchair size={16} />
                  <span className="text-sm font-semibold">15 Seats Left</span>
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400
                   shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  ></span>
                </div>
              </div>
              <p className="text-gray-400 mt-3 gap-4 flex ">
                <CircleDotDashed />
                Executive Bus
              </p>
              <p className="text-gray-400 mt-3 flex  items-center gap-4">
                <Bus />
                TravelEase Transport
              </p>
              <div>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Clock />
                  12:30 - 4:50
                </p>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Road />
                  300 Km
                </p>
              </div>
              <div className="mt-7 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] ease-in-out hover:bg-blue-700 hover:border-blue-900 transition-all duration-300 hover:scale-95 justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[350px] min-h-[600px] border border-blue-500/30
           bg-[#0f172a] overflow-hidden rounded-2xl p-3
           shadow-lg shadow-blue-950/30
           transition-all duration-300
           hover:-translate-y-2 hover:border-blue-400/60
           hover:shadow-[0_15px_40px_rgba(37,99,235,0.18)]"
          >
            <img
              src={digha}
              alt="Bus"
              className="w-full rounded-2xl h-[250px] object-cover"
            />
            <div className="p-4">
              <div className="text-white flex items-center justify-between ">
                <p className="font-extrabold text-2xl">Kolkata To Digha</p>
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                border border-blue-400/20 bg-blue-500/10
                text-blue-300 whitespace-nowrap"
                >
                  <Armchair size={16} />
                  <span className="text-sm font-semibold">15 Seats Left</span>
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400
                   shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  ></span>
                </div>
              </div>
              <p className="text-gray-400 mt-3 gap-4 flex ">
                <CircleDotDashed />
                Executive Bus
              </p>
              <p className="text-gray-400 mt-3 flex  items-center gap-4">
                <Bus />
                TravelEase Transport
              </p>
              <div>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Clock />
                  12:30 - 4:50
                </p>
                <p className="text-gray-400 flex items-center gap-4 mt-3">
                  <Road />
                  300 Km
                </p>
              </div>
              <div className="mt-7 flex justify-between">
                <div>
                  <p className="text-gray-400">Starting From</p>
                  <p className="text-[#f59e0b] font-bold text-xl">$199</p>
                </div>
                <div className="text-white cursor-pointer w-[120px] ease-in-out hover:bg-blue-700 hover:border-blue-900 transition-all duration-300 hover:scale-95 justify-center items-center flex rounded-2xl font-bold p-3 h-[45px] bg-blue-500">
                  <NavLink>View Details</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button to explore all fleet */}
        <div className="text-white flex justify-center cursor-pointer items-center mt-10">
          <NavLink>
            <p className="flex hover:border-[var(--color-yellow)] transition-all duration-600 hover:border-4 gap-3 border p-5 rounded-2xl justify-center text-center  font-bold text-xl border-white">
              <Box />
              Explore All Route
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Routes;
