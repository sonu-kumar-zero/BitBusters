import OrthopedicPana from "../../utils/images/orthopodic.png";

const AppointmentCard = () => {
  return (
    <div class="bg-[#fbfadb] max-w-sm rounded shadow-xl mt-24 flex flex-col justify-center items-center">
      <div className="flex justify-center relative bottom-20 mx-10 ">
        <img
          src={OrthopedicPana}
          alt="Sunset in the mountains"
          className="drop-shadow-xl"
        />
      </div>
      <div class="px-6 py-4 text-black font-bold text-[26px] relative bottom-[70px]">
        Virtual Appointment
      </div>
      <div className="bg-[#02214f] text-white px-[90px] relative bottom-[60px] py-3 rounded-[10px] text-[18px] font-semibold text-center">
        Book Now
      </div>
    </div>
  );
};

export default AppointmentCard;
