import React from "react";
import SearchBar from "../common/SearchBar";
import search from "../../utils/images/searchsvg.svg";
import location from "../../utils/images/locationsvg.svg";

const CarousalInput = () => {
  return (
    <>
      <div className="mx-[140px] px-[70px] bg-[#1b1a55] flex items-end gap-10 py-5 pb-[50px] rounded-[20px]">
        <div className="w-3/4 ">
          <div className="text-white pb-2 font-bold text-[18px]">
            Find Your Doctor{" "}
          </div>
          <SearchBar link={search} text="Doctor's nearby" />
        </div>
        <div className="w-1/4">
          <SearchBar link={location} text="Find doctors location" />
        </div>
      </div>
    </>
  );
};

export default CarousalInput;
