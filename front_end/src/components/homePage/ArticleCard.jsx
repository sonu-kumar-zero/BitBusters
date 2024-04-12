import React from "react";
import foodPng from "../../utils/images/food.jpg";
// import vaccinePng from "../../utils/images/vaccine.jpg";

const ArticleCard = () => {
  return (
    <div className="flex flex-col gap-2 shadow p-5 rounded-md">
      <div className="">
        <img src={foodPng} alt="food" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xs text-blue-500">CORONONAVIRUS</div>
        <div className="font-bold text-[18px]">
          12 Coronovirus Myths and Facts That You Should Be Aware Of
        </div>
        <div className="text-[#777]">Dr. Diana Borgio</div>
      </div>
    </div>
  );
};

export default ArticleCard;
