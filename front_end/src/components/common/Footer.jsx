import React from "react";
import logo007 from "../../utils/images/logo007.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full text-black items-center bg-[#ddd] border-t px-[140px] py-10">
      <div className="flex flex-col gap-5 w-2/5">
        <div className="flex gap-2 items-center">
          <img src={logo007} alt="logo007" className="w-[30px] h-[30px]" />
          <div className="anton__font">
            <span className="text-[#1b1a55] text-[30px]">Medi</span>
            <span className="text-[#5b59ea] text-[30px]">Connect</span>
          </div>
        </div>
        <div className="text-[20px] font-semibold">
          Your health is precious; We're here to help you find care.
        </div>
        <div className="flex gap-5 text-2xl">
          <div className="cursor-pointer">
            <FaGithub />
          </div>
          <div className="cursor-pointer">
            <FaInstagram />
          </div>
          <div className="cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className="cursor-pointer">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="flex w-3/5 justify-between">
        <div className="">
          <div className="font-semibold text-[20px]">Componay</div>
          <div className="font-medium text-[#555] px-2">
            <div className="">About US</div>
            <div className="">Blog</div>
            <div className="">GItHUb</div>
            <div className="">Free</div>
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-[20px]">Componay</div>
          <div className="font-medium text-[#555] px-2">
            <div className="">About US</div>
            <div className="">Blog</div>
            <div className="">GItHUb</div>
            <div className="">Free</div>
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-[20px]">Componay</div>
          <div className="font-medium text-[#555] px-2">
            <div className="">About US</div>
            <div className="">Blog</div>
            <div className="">GItHUb</div>
            <div className="">Free</div>
          </div>
        </div>
        <div className="">
          <div className="font-semibold text-[20px]">Componay</div>
          <div className="font-medium text-[#555] px-2">
            <div className="">About US</div>
            <div className="">Blog</div>
            <div className="">GItHUb</div>
            <div className="">Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
