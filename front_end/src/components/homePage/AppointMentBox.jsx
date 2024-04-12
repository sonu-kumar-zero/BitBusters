import React from "react";
import AppointmentCard from "./AppointCard";

const AppointMentBox = () => {
  return (
    <div className="flex pt-14 pb-24 bg-[#1b1a55] text-white flex-col gap-2 items-center">
      <div className="text-[70px]">Book an Appointment today</div>
      <div className="flex gap-32">
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
};

export default AppointMentBox;
