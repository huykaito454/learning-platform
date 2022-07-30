import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { CircularProgressbar } from "react-circular-progressbar";

const RightSideBar = () => {
  const [value, onChange] = useState(new Date());
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const handleOpenRightBar = () => {
    const rightNav = document.getElementById("right-nav");
    const iconRightNav = document.getElementById("icon-right-nav");
    iconRightNav.classList.toggle("icon-right-nav");
    rightNav.classList.toggle("show_right_nav");
    rightNav.classList.toggle("closes_right_nav");
    rightNav.classList.remove("animation-duration");
  };
  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, [hours, minutes]);
  return (
    <div
      className="w-[320px] h-full fixed top-0 right-0 bg-right-nav-gradient shadow-sm flex flex-col items-center justify-between gap-10 z-50 px-5 py-10 closes_right_nav animation-duration translate-x-full"
      id="right-nav"
    >
      <div
        className="absolute bg-right-nav-item-gradient p-3 rounded-tl-full rounded-bl-full w-7 h-14 flex items-center justify-start left-0 top-1/2 -translate-y-1/2 -translate-x-[99%] cursor-pointer"
        onClick={handleOpenRightBar}
      >
        <i
          className="fas fa-angle-left text-xl text-white"
          id="icon-right-nav"
        ></i>
      </div>
      <Calendar onChange={onChange} value={value} />
      <div className="w-full flex flex-col items-center gap-1">
        <div className="w-24">
          <CircularProgressbar
            value={75}
            text={`${75}pt`}
          ></CircularProgressbar>
        </div>
        <span className="text-[#FFB865] text-2xl">Average Score</span>
        <span className="text-[#FFB865] text-sm">
          Higher than 80% of all students
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-1">
        <svg
          width="85"
          height="85"
          viewBox="0 0 123 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.217 122.075C46.4508 122.075 30.3713 115.415 18.5158 103.559C6.66035 91.7036 0 75.6241 0 58.8579C0 33.2441 14.7143 10.2789 37.497 0.363086C38.2999 0.0131443 39.1896 -0.0868379 40.0502 0.0761692C40.9108 0.239176 41.7023 0.657614 42.3217 1.27696C42.941 1.8963 43.3595 2.68783 43.5225 3.54842C43.6855 4.409 43.5855 5.29873 43.2356 6.10167C40.6197 12.1073 39.2382 19.7996 39.2382 28.3394C39.2382 58.3892 63.6857 82.8368 93.7356 82.8368C102.275 82.8368 109.968 81.4553 115.973 78.8394C116.776 78.4895 117.666 78.3895 118.527 78.5525C119.387 78.7155 120.179 79.1339 120.798 79.7533C121.417 80.3726 121.836 81.1642 121.999 82.0247C122.162 82.8853 122.062 83.7751 121.712 84.578C111.796 107.361 88.8308 122.075 63.217 122.075Z"
            fill="url(#paint0_linear_127_3531)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_127_3531"
              x1="61.0375"
              y1="0"
              x2="61.0375"
              y2="122.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D59A01" />
              <stop
                offset="0.723958"
                stopColor="#A16E00"
                stopOpacity="0.520833"
              />
              <stop offset="1" stopColor="#030015" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-[#FFB865] text-2xl">
          {hours}:{minutes}
        </span>
        <span className="text-[#FFB865] text-sm">
          Let’s go to bed and be ready for another day!
        </span>
      </div>
    </div>
  );
};

export default RightSideBar;
