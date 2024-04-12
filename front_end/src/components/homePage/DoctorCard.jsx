import React from "react";

// 1b1a55

const DoctorCard = ({ data }) => {
  return (
    <div className="bg-[#1b1a55] cursor-pointer shadow-md shadow-[#aaa] p-5 text-white flex flex-col items-center gap-2 rounded-lg">
      <div className="bg-white rounded-full h-[200px] w-[200px] flex items-center justify-center">
        <img src={data.imgUrl} alt="img" className="w-[150px] h-[150px] object-contain "/>
      </div>
      <div className="text-[24px]">{data.title}</div>
    </div>
  );
};

export default DoctorCard;
