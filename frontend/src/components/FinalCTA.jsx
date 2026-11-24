
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, BusFront, ShieldCheck, Ticket } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="px-4 md:px-8 py-20 bg-[var(--color-dark-secondary)]">
      <div className="relative max-w-[1200px] mx-auto overflow-hidden
        rounded-[30px] border border-blue-500/30
        bg-gradient-to-br from-[#0f1f46] via-[#0b1733] to-[#020617]
        shadow-[0_20px_70px_rgba(30,64,175,0.15)]">

        {/* Background decoration */}
        <div className="absolute -top-32 -right-20 w-96 h-96
          rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="absolute -bottom-40 -left-20 w-96 h-96
          rounded-full bg-indigo-600/20 blur-[100px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1
          md:grid-cols-2 gap-10 items-center p-8 md:p-14">

          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2
              px-4 py-2 rounded-full border border-blue-400/30
              bg-blue-500/10 text-blue-300 text-xs font-semibold
              tracking-[2px]">
              <span className="w-2 h-2 rounded-full bg-blue-400
                animate-pulse" />
              YOUR NEXT ADVENTURE AWAITS
            </div>

            <h2 className="text-white text-3xl md:text-5xl
              font-extrabold leading-tight mt-7">
              Ready for your
              <span className="block text-transparent bg-clip-text
                bg-gradient-to-r from-blue-400 to-cyan-300">
                next journey?
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-7
              max-w-lg text-sm md:text-base">
              Discover new destinations, find your perfect ride,
              and enjoy a comfortable journey from the moment
              you book with RouteGlow.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-5 mt-7">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <ShieldCheck size={18} className="text-blue-400" />
                Safe Booking
              </div>

              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Ticket size={18} className="text-blue-400" />
                Easy Reservations
              </div>
            </div>

            {/* CTA Button */}
            <NavLink
              to="/buses"
              className="inline-flex items-center gap-3 mt-9
                px-7 py-4 rounded-xl font-bold text-white
                bg-blue-600 hover:bg-blue-500
                shadow-[0_8px_25px_rgba(37,99,235,0.3)]
                hover:shadow-[0_8px_35px_rgba(37,99,235,0.5)]
                transition-all duration-300 hover:scale-95"
            >
              Explore Available Buses
              <ArrowRight size={19} />
            </NavLink>

            <p className="text-gray-500 text-xs mt-4">
              Your seat is just a few clicks away.
            </p>
          </div>

          {/* Right visual */}
          <div className="relative flex items-center justify-center
            min-h-[260px] md:min-h-[350px]">

            <div className="absolute w-64 h-64 md:w-80 md:h-80
              rounded-full border border-blue-400/20" />

            <div className="absolute w-48 h-48 md:w-64 md:h-64
              rounded-full border border-blue-400/20" />

            <div className="absolute w-36 h-36 md:w-48 md:h-48
              rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative w-36 h-36 md:w-48 md:h-48
              rounded-[35px] rotate-[-8deg]
              border border-blue-400/30
              bg-gradient-to-br from-blue-500/20 to-indigo-900/40
              backdrop-blur-xl flex items-center justify-center
              shadow-[0_0_60px_rgba(59,130,246,0.2)]">

              <BusFront
                size={85}
                strokeWidth={1.2}
                className="text-blue-300"
              />
            </div>

            <div className="absolute top-5 right-4 md:right-8
              px-4 py-3 rounded-xl border border-blue-400/20
              bg-[#0f172a]/90 backdrop-blur-lg
              text-blue-200 text-xs shadow-xl">
              <p className="font-bold">Travel smarter</p>
              <p className="text-gray-400 mt-1">Travel happier</p>
            </div>

            <div className="absolute bottom-5 left-2 md:left-6
              px-4 py-3 rounded-xl border border-blue-400/20
              bg-[#0f172a]/90 backdrop-blur-lg
              text-white text-xs shadow-xl">
              <p className="text-gray-400">Your destination</p>
              <p className="font-bold mt-1">Your next adventure →</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
