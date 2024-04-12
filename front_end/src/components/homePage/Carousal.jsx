import React from "react";
import carousal_doctor from "../../utils/images/carousal_doctor.png";

const Carousal = () => {
  return (
    <>
      <div className="px-[140px] py-2 w-full">
        <div className="flex w-full h-[200px]">
          <div className="left__box w-3/4 flex flex-col justify-center">
            <div className="text-[60px] font-semibold">Your health is precious;</div>
            <div className="text-[60px]">We're here to help you find care</div>
          </div>
          <div className="right__box w-1/4">
            <img src={carousal_doctor} alt="doctor" className="h-full object-cover scale-x-150"/>
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default Carousal;
