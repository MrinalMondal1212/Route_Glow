import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRightLeft,
  CalendarDays,
  CircleDot,
  MapPin,
  MapPinned,
  Search,
} from "lucide-react";

const ExploreBuses = () => {
  const [journeyDate, setJourneyDate] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState(2000);

  const navigate = useNavigate();

  const handleSwap = () => {
    setSource(destination);
    setDestination(source);
  };

  const handleSearch = () => {
    if (!source.trim() || !destination.trim() || !journeyDate) {
      alert("Please enter source, destination and journey date");
      return;
    }

    navigate(
      `/buses?from=${encodeURIComponent(source)}&to=${encodeURIComponent(destination)}&date=${journeyDate}`,
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] w-full">
      {/* Search Section */}
      <div
        className="w-full bg-[#0f172a] border-b border-blue-500/20
        px-4 md:px-8 py-8"
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-[1fr_45px_1fr_1fr_150px]
            gap-4 items-end"
          >
            {/* FROM */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[2px] text-blue-300">
                FROM
              </label>

              <div
                className="flex items-center gap-3 h-[55px] px-4
                rounded-xl bg-[#020617] border border-blue-500/30
                transition-all duration-300 focus-within:border-blue-400
                focus-within:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              >
                <MapPin size={20} className="text-blue-400 shrink-0" />

                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Select source city..."
                  className="w-full bg-transparent outline-none
                    text-white text-sm placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* SWAP */}
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={handleSwap}
                className="w-11 h-11 rounded-full border border-blue-500/30
                  bg-blue-500/10 text-blue-400 flex items-center
                  justify-center hover:bg-blue-600 hover:text-white
                  transition-all duration-300 hover:rotate-180"
                title="Swap locations"
              >
                <ArrowRightLeft size={20} />
              </button>
            </div>

            {/* TO */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[2px] text-blue-300">
                TO
              </label>

              <div
                className="flex items-center gap-3 h-[55px] px-4
                rounded-xl bg-[#020617] border border-blue-500/30
                transition-all duration-300 focus-within:border-blue-400
                focus-within:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              >
                <MapPinned size={20} className="text-blue-400 shrink-0" />

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Select destination..."
                  className="w-full bg-transparent outline-none
                    text-white text-sm placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* DATE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[2px] text-blue-300">
                JOURNEY DATE
              </label>

              <div
                className="flex items-center gap-3 h-[55px] px-4
                rounded-xl bg-[#020617] border border-blue-500/30
                transition-all duration-300 focus-within:border-blue-400"
              >
                <CalendarDays size={20} className="text-blue-400 shrink-0" />

                <input
                  type="date"
                  value={journeyDate}
                  onChange={(e) => setJourneyDate(e.target.value)}
                  min={new Date().toLocaleDateString("en-CA")}
                  className="w-full bg-transparent outline-none
                    text-white text-sm"
                />
              </div>
            </div>

            {/* SEARCH */}
            <button
              type="button"
              onClick={handleSearch}
              className="w-full h-[55px] text-white font-bold
                bg-blue-600 hover:bg-blue-500
                flex justify-center items-center gap-3
                rounded-xl transition-all duration-300
                hover:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <Search size={19} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bus results will go here */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <h1 className="text-[var(--color-yellow)] text-3xl font-extrabold">
          Explore Buses
        </h1>

        <p className="text-gray-400 mt-3">
          Find your perfect bus and discover your next destination.
        </p>
      </div>
      <div className="max-w-[1200px] flex gap-6 mx-auto px-3 py-5">
        <div>
          <div className="w-[260px] shrink-0 h-fit sticky top-24 p-4 bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="flex text-gray-400 justify-between font-bold border-b border-gray-700 pb-3">
              <p>FILTERS</p>
              <button
                className="text-sm text-blue-400 hover:text-blue-300"
                onClick={() => setPrice(2000)}
              >
                Reset All
              </button>
            </div>

            <div className="text-gray-400 font-semibold">
              <p className="text-gray-500 font-bold mb-3 mt-4">Bus Type</p>

              {["All", "Non AC", "AC", "Luxury", "Sleeper", "Executive"].map(
                (type) => (
                  <p
                    key={type}
                    className="flex gap-2 items-center mb-3 hover:text-[var(--color-yellow)] cursor-pointer"
                  >
                    <CircleDot size={17} />
                    {type}
                  </p>
                ),
              )}

              <div className="border-t border-gray-700 mt-5 pt-4">
                <p className="text-gray-500 font-bold mb-4">Price Range</p>

                <div className="flex justify-between text-sm mb-3">
                  <span>₹200</span>
                  <span className="text-blue-400 font-bold">₹{price}</span>
                </div>

                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹200</span>
                  <span>₹5000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bus cards are showing herer !! */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 1200
                </p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 1200
                </p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
          {/* all bus cars are showing  */}
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 1200
                </p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 1200
                </p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 1200
                </p>
                <NavLink className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500">
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[250px] p-3 flex justify-between bg-[var(--color-dark-secondary)] rounded-xl">
            <div className="w-[600px]">
              <p className="text-[var(--color-yellow)] text-2xl font-bold">
                Kalosona Travels
              </p>
              <div className="flex text-gray-500 font-semibold mt-2 gap-6">
                <p>A/C sleepers(2+1)</p>
                <p>30 seats left</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    12:35 <span className="text-gray-400 text-2xl">21 DEC</span>
                  </p>
                  <p className="text-gray-400">MG Road , kochi</p>
                </div>

                <p className="text-blue-700 font-bold mt-2 text-2xl flex items-center gap-1">
                  08<span className="text-gray-400">hrs</span>20
                  <span className="text-gray-400">mins</span>
                </p>
                <div>
                  <p className="text-blue-700 font-bold mt-2 flex gap-3 text-4xl items-center">
                    08:35 <span className="text-gray-400 text-2xl">22 DEC</span>
                  </p>
                  <p className="text-gray-400">RP Mall, Pakkad</p>
                </div>
              </div>
            </div>
            <div className="border "></div>
            {/* book your bus */}
            <div className="flex">
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-gray-400 font-bold text-xl">Ticket Fare</p>
                <p className="text-[var(--color-yellow)] font-bold text-xl">
                  INR 12000
                </p>
                <NavLink
                  to="/select-seats"
                  state={{
                    bus: {
                      name: "Kalosona Travels",
                      type: "A/C Sleeper (2+1)",
                      from: "MG Road, Kochi",
                      to: "RP Mall, Pakkad",
                      departure: "12:35",
                      arrival: "08:35",
                      fare: 1200,
                      date: journeyDate,
                    },
                  }}
                  className="text-white px-7 py-2 rounded-xl font-bold text-lg bg-blue-500"
                >
                  Select Seats
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBuses;
