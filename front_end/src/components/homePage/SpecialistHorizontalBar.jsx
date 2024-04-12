import React from "react";
import DoctorCard from "./DoctorCard";
import physician_img from "../../utils/anime/physician.png";
import eye_doctor_img from "../../utils/anime/eye_doctor.png";
import dentist_img from "../../utils/anime/dentist.png";

const SpecialistHorizontalBar = () => {
  const doctorCardList = [
    { imgUrl: physician_img, title: "Physician" },
    { imgUrl: dentist_img, title: "Dentist" },
    { imgUrl: eye_doctor_img, title: "Eye Doctor" },
    { imgUrl: physician_img, title: "Neurologist" },
    { imgUrl: physician_img, title: "Physician" },
    { imgUrl: dentist_img, title: "Dentist" },
    { imgUrl: eye_doctor_img, title: "Eye Doctor" },
    { imgUrl: physician_img, title: "Neurologist" }
  ];

  return (
    <div className="px-[140px] py-24 flex flex-col gap-2">
      <div className="font-bold text-3xl">Top Searched Specialist</div>
      <div className="flex gap-10 py-5 overflow-y-scroll remove_scroll_bar">
        {doctorCardList.map((doc, index) => {
          return <DoctorCard key={index} data={doc} />;
        })}
      </div>
    </div>
  );
};

export default SpecialistHorizontalBar;
