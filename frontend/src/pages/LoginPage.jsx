
import React from "react";
import { Link } from "react-router-dom";
import {
  BusFront,
  Mail,
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
  Ticket,
  Clock,
  Dot,
} from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#0B1224] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#111E45] via-[#0B1735] to-[#020617] relative overflow-hidden">

          <div className="absolute inset-0 opacity-[0.08]"
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
                TRAVEL SMARTER
              </p>

              <h1 className="text-5xl font-extrabold text-white leading-tight">
                Your Journey.
                <br />
                Your Comfort.
                <br />
                <span className="text-[#818CF8]">Your Route.</span>
              </h1>

              <p className="text-gray-400 text-lg mt-6 leading-8 max-w-md">
                Discover comfortable journeys, book your seats, and travel
                with confidence. Your next destination is just a few clicks away.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <Ticket className="text-indigo-400 mb-3" size={23} />
              <p className="text-white font-semibold text-sm">Easy Booking</p>
              <p className="text-gray-500 text-xs mt-1">Simple and secure</p>
            </div>

            <div>
              <ShieldCheck className="text-indigo-400 mb-3" size={23} />
              <p className="text-white font-semibold text-sm">Safe Travel</p>
              <p className="text-gray-500 text-xs mt-1">Travel with trust</p>
            </div>

            <div>
              <Clock className="text-indigo-400 mb-3" size={23} />
              <p className="text-white font-semibold text-sm">Save Time</p>
              <p className="text-gray-500 text-xs mt-1">Quick reservations</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-7 sm:p-12 lg:p-14">

          <div className="w-full max-w-md">

            <Link to="/" className="lg:hidden flex items-center gap-2 mb-10">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1] flex items-center justify-center">
                <BusFront className="text-white" size={23} />
              </div>
              <span className="text-2xl font-extrabold text-white">
                Route<span className="text-[#818CF8]">Glow</span>
              </span>
            </Link>

            <p className="text-[#818CF8] text-sm font-bold tracking-widest mb-3">
              WELCOME BACK
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Login to your account
            </h2>

            <p className="text-gray-400 mt-3 mb-9">
              Enter your details to access your RouteGlow account.
            </p>

            <form className="space-y-6">

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
                    className="w-full h-14 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-300 text-sm font-medium">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-indigo-400 text-sm hover:text-indigo-300 transition"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={19} />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-14 bg-[#111B30] border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[#6366F1] hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition duration-300 shadow-lg shadow-indigo-600/20"
              >
                Login to Account
                <ArrowRight size={19} />
              </button>

            </form>

            {/* Customer Registration */}
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm flex justify-center gap-1">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-indigo-400 font-semibold  hover:text-indigo-300"
                >
                  Register Now
                </Link>
                <Dot/>
                <Link
                  to="/"
                  className="text-indigo-400 font-semibold hover:text-indigo-300"
                >
                  Home
                </Link>
              </p>
            </div>

            {/* Company Registration */}
            <div className="mt-7 p-5 bg-[#111B30] border border-white/10 rounded-xl text-center">
              <p className="text-white font-semibold">
                Are you a bus operator?
              </p>

              <p className="text-gray-400 text-sm mt-1 mb-3">
                Join RouteGlow and manage your bus services.
              </p>

              <Link
                to="/company-register"
                className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm hover:text-amber-300 transition"
              >
                Register Your Company
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-gray-600 text-xs text-center mt-8">
              © 2026 RouteGlow. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

