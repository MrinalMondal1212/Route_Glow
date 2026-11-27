
import React from "react";
import { Link } from "react-router-dom";
import {
  BusFront,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#0B1224] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#111E45] via-[#0B1735] to-[#020617] relative overflow-hidden">

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          ></div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-12 h-12 rounded-xl bg-[#6366F1] flex items-center justify-center">
                <BusFront size={27} className="text-white" />
              </div>
              <span className="text-3xl font-extrabold text-white tracking-tight">
                Route<span className="text-[#818CF8]">Glow</span>
              </span>
            </Link>

            <div className="mt-24">
              <p className="text-[#F59E0B] text-sm font-bold tracking-[3px] mb-5">
                JOIN ROUTEGLOW
              </p>

              <h1 className="text-5xl font-extrabold text-white leading-tight">
                Every Journey
                <br />
                Starts With
                <br />
                <span className="text-[#818CF8]">A Connection.</span>
              </h1>

              <p className="text-gray-400 text-lg mt-6 leading-8 max-w-md">
                Create your account and discover a smarter way to book bus
                tickets. Your next adventure starts here.
              </p>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/10 pt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <ShieldCheck className="text-indigo-400" size={25} />
            </div>
            <div>
              <p className="text-white font-semibold">Your account, your journeys</p>
              <p className="text-gray-500 text-sm mt-1">
                Manage your bookings in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center p-7 sm:p-12 lg:p-14">

          <div className="w-full max-w-md">

            <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1] flex items-center justify-center">
                <BusFront className="text-white" size={23} />
              </div>
              <span className="text-2xl font-extrabold text-white">
                Route<span className="text-[#818CF8]">Glow</span>
              </span>
            </Link>

            <p className="text-[#818CF8] text-sm font-bold tracking-widest mb-3">
              CREATE ACCOUNT
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Join RouteGlow
            </h2>

            <p className="text-gray-400 mt-3 mb-8">
              Create your customer account to start booking journeys.
            </p>

            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-13 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-13 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-13 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full h-13 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full h-13 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[#6366F1] hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition duration-300 shadow-lg shadow-indigo-600/20"
              >
                Create Account
                <ArrowRight size={19} />
              </button>

            </form>

            {/* Login Link */}
            <p className="text-gray-400 text-sm text-center mt-7">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-400 font-semibold hover:text-indigo-300"
              >
                Login
              </Link>
            </p>

            {/* Company Registration */}
            <div className="text-center mt-5">
              <p className="text-gray-500 text-sm">
                Want to register as a bus operator?{" "}
                <Link
                  to="/company-register"
                  className="text-[#F59E0B] font-semibold hover:text-amber-300"
                >
                  Company Registration
                </Link>
              </p>
            </div>

            <p className="text-gray-600 text-xs text-center mt-7">
              © 2026 RouteGlow. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
