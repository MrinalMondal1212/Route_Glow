import React, { useState } from "react";
import {
  Armchair,
  BedDouble,
  BusFront,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { useNavigate , useLocation} from "react-router-dom";

const SelectSeats = () => {
  const [busType, setBusType] = useState("seater");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  const bus = location.state?.bus || {};


  const bookedSeats = ["S2", "S7", "S14", "L3", "L8"];

  const seatPrice = busType === "seater" ? 650 : 950;

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((item) => item !== seat)
        : [...prev, seat],
    );
  };

  const changeBusType = (type) => {
    setBusType(type);
    setSelectedSeats([]);
  };

  const totalFare = selectedSeats.length * seatPrice;

  const Seat = ({ id, sleeper = false }) => {
    const isBooked = bookedSeats.includes(id);
    const isSelected = selectedSeats.includes(id);

    return (
      <button
        type="button"
        disabled={isBooked}
        onClick={() => toggleSeat(id)}
        className={`flex items-center justify-center border transition-all duration-200
          ${sleeper ? "w-full h-14 rounded-lg" : "w-11 h-11 rounded-lg"}
          ${
            isBooked
              ? "bg-slate-700 border-slate-600 text-slate-400 cursor-not-allowed"
              : isSelected
                ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                : "bg-slate-800 border-slate-600 text-blue-300 hover:border-blue-400 hover:bg-blue-500/20"
          }`}
      >
        {sleeper ? <BedDouble size={20} /> : <Armchair size={20} />}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Journey Information */}
      <div className="bg-[#0f172a] border-b border-blue-500/20">
        <div className="max-w-[1200px] mx-auto px-4 py-7">
          <p className="text-blue-400 text-sm font-bold tracking-widest mb-3">
            SELECT YOUR SEATS
          </p>

          <div className="flex flex-wrap justify-between items-center gap-5">
            <div>
              <p className="text-2xl font-bold">Kalosona Travels</p>
              <p className="text-gray-400 text-sm mt-2">
                A/C Sleeper & Seater • 2+1 / 2+2
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold">08:30 AM</p>
                <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                  <MapPin size={14} /> Kolkata
                </p>
              </div>

              <div className="text-center text-gray-400">
                <Clock3 size={18} className="mx-auto mb-1" />
                <p className="text-xs">8h 20m</p>
                <div className="w-20 h-px bg-blue-500/50 mt-2" />
              </div>

              <div>
                <p className="text-2xl font-bold">04:50 PM</p>
                <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                  <MapPin size={14} /> Digha
                </p>
              </div>
            </div>

            <div className="text-gray-400 text-sm flex items-center gap-2">
              <CalendarDays size={17} className="text-blue-400" />
              21 December 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold mb-2">
          Choose Your <span className="text-blue-400">Seats</span>
        </h1>

        <p className="text-gray-400 mb-8">
          Select your preferred seats and continue with your booking.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Seat Selection */}
          <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl p-5 md:p-7">
            {/* Layout Switch */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <p className="font-bold text-lg">Bus Seat Layout</p>
                <p className="text-gray-500 text-sm mt-1">
                  Choose your seating preference
                </p>
              </div>

              <div className="flex bg-[#020617] rounded-xl p-1">
                <button
                  onClick={() => changeBusType("seater")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                    busType === "seater"
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Armchair size={17} /> Seater
                </button>

                <button
                  onClick={() => changeBusType("sleeper")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                    busType === "sleeper"
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <BedDouble size={17} /> Sleeper
                </button>
              </div>
            </div>

            {/* Seat Legend */}
            <div className="flex flex-wrap gap-5 justify-center mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-slate-800 border border-slate-600" />
                Available
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-blue-600" />
                Selected
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-slate-700" />
                Booked
              </div>
            </div>

            {/* Bus Layout */}
            <div className="max-w-[390px] mx-auto border border-blue-500/30 rounded-[28px] p-5 bg-[#020617]">
              {/* Driver */}
              <div className="flex justify-end border-b border-slate-700 pb-5 mb-6">
                <div className="flex flex-col items-center text-gray-500">
                  <BusFront size={27} />
                  <span className="text-[10px] mt-1">DRIVER</span>
                </div>
              </div>

              {busType === "seater" ? (
                <div className="space-y-4">
                  {Array.from({ length: 8 }, (_, row) => (
                    <div
                      key={row}
                      className="grid grid-cols-[1fr_1fr_35px_1fr_1fr] gap-2 items-center"
                    >
                      <Seat id={`S${row * 4 + 1}`} />
                      <Seat id={`S${row * 4 + 2}`} />
                      <div />
                      <Seat id={`S${row * 4 + 3}`} />
                      <Seat id={`S${row * 4 + 4}`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {Array.from({ length: 8 }, (_, row) => (
                    <div
                      key={row}
                      className="grid grid-cols-[1fr_1fr_30px_1fr] gap-2 items-center"
                    >
                      <Seat id={`L${row * 3 + 1}`} sleeper />
                      <Seat id={`L${row * 3 + 2}`} sleeper />
                      <div />
                      <Seat id={`L${row * 3 + 3}`} sleeper />
                    </div>
                  ))}
                </div>
              )}

              <p className="text-center text-gray-600 text-xs mt-7">
                FRONT OF THE BUS
              </p>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="h-fit bg-[#0f172a] border border-blue-500/20 rounded-2xl p-5">
            <h2 className="text-xl font-bold mb-5">Booking Summary</h2>

            <div className="border-b border-slate-700 pb-5 mb-5">
              <p className="text-gray-400 text-sm mb-3">Selected Seats</p>

              {selectedSeats.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedSeats.map((seat) => (
                    <span
                      key={seat}
                      className="px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {seat}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No seats selected yet</p>
              )}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Seats</span>
                <span>{selectedSeats.length}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Price per seat</span>
                <span>₹{seatPrice}</span>
              </div>

              <div className="flex justify-between text-white font-bold text-lg border-t border-slate-700 pt-4">
                <span>Total Fare</span>
                <span className="text-yellow-400">₹{totalFare}</span>
              </div>
            </div>

            <button
              type="button"
              disabled={selectedSeats.length === 0}
              onClick={() =>
                navigate("/passenger-details", {
                  state: {
                    bus,
                    selectedSeats,
                  },
                })
              }
              className="w-full mt-7 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 disabled:bg-slate-700 disabled:text-gray-500 disabled:cursor-not-allowed transition"
            >
              Continue
            </button>

            <p className="text-gray-500 text-xs text-center mt-3">
              Select at least one seat to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeats;
