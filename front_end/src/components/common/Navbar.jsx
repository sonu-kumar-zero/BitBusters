import React from "react";
import logo007 from "../../utils/images/logo007.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[40px] py-[10px]">
      <div className="flex gap-2 items-center">
        <img src={logo007} alt="logo007" className="w-[30px] h-[30px]" />
        <div className="anton__font">
          <span className="text-[#1b1a55] text-[30px]">Medi</span>
          <span className="text-[#5b59ea] text-[30px]">Connect</span>
        </div>
      </div>
      <div className="flex gap-10 items-center text-lg font-semibold">
        <button className="hover:text-[#5b59ea]">Help & Security</button>
        <button className="hover:text-[#5b59ea]">Contact</button>
        <button className="hover:text-[#5b59ea]">Login</button>
        <button className="hover:bg-[#5b59ea] bg-[#1b1a55] text-white px-3 py-1 pb-[6px] rounded-[10px] text-[20px] font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
