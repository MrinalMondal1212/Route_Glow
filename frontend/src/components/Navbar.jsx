import React from "react";
import { LogIn, Van } from "lucide-react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* font-family: Montserrat, sans-serif;
    font-weight: 800;
    font-size: 1.25rem; */}
      <nav>
        <div className="h-[75px] bg-[#020617] flex justify-center">
          <div className="w-[1200px] flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#1e40af] flex justify-center items-center rounded-lg ">
                <Van color="white" />
              </div>
              <h1 className="text-white text-2xl font-extrabold">
                Route<span className="text-[#f59e0b]">Glow</span>
              </h1>
            </div>
            {/* nav bar elements */}
            <div className="flex flex-1 items-center justify-between ml-16">
              <div className="text-white gap-[75px] flex items-center  font-semibold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/buses">Explore Buses</NavLink>
                <NavLink to="/">My Bookings</NavLink>
                <NavLink to="/">Contact</NavLink>
                <NavLink to="/">Services</NavLink>
              </div>
              <div className="text-white cursor-pointer flex  gap-4 justify-center items-center bg-[#1e40af] h-[40px] w-[150px] font-bold rounded-lg">
               <LogIn /> <NavLink > Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
