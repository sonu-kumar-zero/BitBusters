import React from "react";
import carousal_doctor from "../../utils/images/carousal_doctor.png";
import cloud_png from "../../utils/images/cloud_back.png";

const Carousal = () => {
  return (
    <>
      <div className="px-[140px] w-full pt-16">
        <div className="flex w-full h-[300px]">
          <div className="left__box w-3/4 flex flex-col justify-center">
            <div className="text-[70px] font-bold ">
              Your health is precious;
            </div>
            <div className="text-[55px] text-[#b8b8b8]">
              We're here to help you find care
            </div>
          </div>
          <div className="right__box w-1/4 relative">
            <img
              src={cloud_png}
              alt="doctor"
              className="object-cover"
            />
            <img
              src={carousal_doctor}
              alt="doctor"
              className="h-full object-cover scale-x-100 absolute top-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
