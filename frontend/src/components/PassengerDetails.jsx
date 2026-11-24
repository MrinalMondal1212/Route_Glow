
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  BusFront,
  MapPin,
  Clock,
  User,
  Users,
  CalendarDays,
} from "lucide-react";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from previous page
  const bus = location.state?.bus || {};
  const selectedSeats = location.state?.selectedSeats || [];

  const seatPrice = Number(bus.fare) || 1200;
  const totalAmount = seatPrice * selectedSeats.length;

  const [passengers, setPassengers] = useState(
    selectedSeats.map((seat) => ({
      seat,
      name: "",
      age: "",
      gender: "",
    }))
  );

  const [contact, setContact] = useState({
    mobile: "",
    email: "",
  });

  // Update passenger information
  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];

    updatedPassengers[index][field] = value;

    setPassengers(updatedPassengers);
  };

  // Update contact information
  const handleContactChange = (field, value) => {
    setContact({
      ...contact,
      [field]: value,
    });
  };

  const handleContinue = () => {
    const validPassengers = passengers.every(
      (passenger) =>
        passenger.name.trim() &&
        passenger.age &&
        passenger.gender
    );

    if (!validPassengers) {
      alert("Please complete all passenger details.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(contact.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    navigate("/review-booking", {
      state: {
        bus,
        selectedSeats,
        passengers,
        contact,
        totalAmount,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white py-10 px-4">

      <div className="max-w-[1200px] mx-auto">

        {/* Page Heading */}
        <div className="mb-8">

          <p className="text-blue-400 text-sm font-semibold tracking-widest mb-2">
            STEP 03 OF 05
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Passenger Details
          </h1>

          <p className="text-gray-400">
            Enter passenger information to continue your journey.
          </p>

          {/* Progress Bar */}
          <div className="flex gap-2 mt-6">
            <div className="h-1.5 flex-1 bg-blue-500 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-blue-500 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-blue-500 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-slate-700 rounded-full"></div>
            <div className="h-1.5 flex-1 bg-slate-700 rounded-full"></div>
          </div>

        </div>

        {/* Journey Summary */}
        <div className="bg-[#0F172A] border border-[#1E40AF] rounded-2xl p-5 mb-7">

          <div className="flex items-center gap-2 mb-5">
            <BusFront className="text-blue-400" size={22} />
            <h2 className="font-bold text-lg">Journey Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">

            <div>
              <p className="text-gray-400 text-sm mb-1">FROM</p>
              <h3 className="text-xl font-bold">
                {bus.from || "Kolkata"}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                <Clock size={14} className="inline mr-1" />
                {bus.departure || "08:30 AM"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-blue-500"></div>
              <BusFront className="text-blue-400" size={22} />
              <div className="h-px flex-1 bg-blue-500"></div>
            </div>

            <div className="md:text-right">
              <p className="text-gray-400 text-sm mb-1">TO</p>
              <h3 className="text-xl font-bold">
                {bus.to || "Digha"}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                <Clock size={14} className="inline mr-1" />
                {bus.arrival || "04:50 PM"}
              </p>
            </div>

          </div>

          <div className="border-t border-slate-700 mt-5 pt-4 flex flex-wrap gap-5 text-sm text-gray-300">

            <p>
              <CalendarDays size={15} className="inline mr-2 text-blue-400" />
              {bus.date || "Journey date"}
            </p>

            <p>
              <BusFront size={15} className="inline mr-2 text-blue-400" />
              {bus.name || "Selected Bus"}
            </p>

            <p>
              <Users size={15} className="inline mr-2 text-blue-400" />
              {selectedSeats.length} Passenger(s)
            </p>

          </div>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-7">

          {/* Left Section */}
          <div className="flex flex-col gap-6">

            {/* Passenger Information */}
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 md:p-6">

              <div className="flex items-center gap-2 mb-6">
                <User className="text-blue-400" size={22} />
                <h2 className="text-xl font-bold">
                  Passenger Information
                </h2>
              </div>

              {passengers.length === 0 && (
                <p className="text-amber-400 text-sm">
                  No seats received. Please select seats before continuing.
                </p>
              )}

              {passengers.map((passenger, index) => (

                <div
                  key={passenger.seat}
                  className="border border-slate-700 bg-[#111D32] rounded-xl p-4 mb-5 last:mb-0"
                >

                  <div className="flex justify-between items-center mb-5">

                    <h3 className="font-semibold">
                      Passenger {index + 1}
                    </h3>

                    <span className="bg-blue-500/15 text-blue-400 px-3 py-1 rounded-lg text-sm font-semibold">
                      Seat {passenger.seat}
                    </span>

                  </div>

                  {/* Full Name */}
                  <div className="mb-4">
                    <label className="block text-sm text-gray-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter passenger name"
                      value={passenger.name}
                      onChange={(e) =>
                        handlePassengerChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Age */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Age
                      </label>

                      <input
                        type="number"
                        min="1"
                        max="120"
                        placeholder="Enter age"
                        value={passenger.age}
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "age",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">
                        Gender
                      </label>

                      <select
                        value={passenger.gender}
                        onChange={(e) =>
                          handlePassengerChange(
                            index,
                            "gender",
                            e.target.value
                          )
                        }
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Contact Information */}
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 md:p-6">

              <h2 className="text-xl font-bold mb-2">
                Contact Information
              </h2>

              <p className="text-gray-400 text-sm mb-6">
                Your ticket and booking updates will be sent here.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    value={contact.mobile}
                    onChange={(e) =>
                      handleContactChange(
                        "mobile",
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={contact.email}
                    onChange={(e) =>
                      handleContactChange("email", e.target.value)
                    }
                    className="w-full bg-[#1E293B] border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Right Section - Booking Summary */}
          <div className="h-fit lg:sticky lg:top-24">

            <div className="bg-[#0F172A] border border-[#1E40AF] rounded-2xl p-5">

              <h2 className="text-xl font-bold mb-6">
                Booking Summary
              </h2>

              <div className="mb-5">

                <p className="text-gray-400 text-sm mb-2">
                  Selected Seats
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedSeats.map((seat) => (
                    <span
                      key={seat}
                      className="bg-blue-500/15 text-blue-400 px-3 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      {seat}
                    </span>
                  ))}
                </div>

              </div>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-400">Passengers</span>
                  <span>{selectedSeats.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Ticket Fare</span>
                  <span>₹{seatPrice.toLocaleString("en-IN")} × {selectedSeats.length}</span>
                </div>

                <div className="border-t border-slate-700 pt-4 flex justify-between items-center">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-2xl text-blue-400 font-bold">
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </span>
                </div>

              </div>

              <button
                onClick={handleContinue}
                disabled={selectedSeats.length === 0}
                className="w-full mt-7 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Continue to Review
                <ArrowRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-gray-400 text-xs">
                <ShieldCheck size={16} className="text-green-400" />
                Your information is secure
              </div>

            </div>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mt-5 transition"
            >
              <ArrowLeft size={17} />
              Back to Seat Selection
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PassengerDetails;
