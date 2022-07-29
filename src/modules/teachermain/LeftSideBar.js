import React from "react";

const LeftSideBar = () => {
  return (
    <div className="w-[270px] h-full fixed top-0 left-0 bg-white shadow-sm flex flex-col p-5 items-start gap-10">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center justify-between">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-5">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/805/369/259/iu-portrait-hd-wallpaper-preview.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-1-line">Laurien</p>
            <p className="font-semibold">8th grade teacher</p>
          </div>
        </div>
        <div className="button bg-[#DE9300] border-[#DE9300] py-0 px-2 text-white rounded-xl cursor-pointer ">
          Log out
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xl cursor-pointer">
        <div className="flex items-center justify-start">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.002 20C3.34515 20 2.002 18.6569 2.002 17V11H1.002C0.1111 11 -0.335067 9.92286 0.294898 9.29289L9.2949 0.292893C9.68542 -0.0976311 10.3186 -0.0976311 10.7091 0.292893L19.7091 9.29289C20.3391 9.92286 19.8929 11 19.002 11H18.002V17C18.002 18.6569 16.6589 20 15.002 20H5.002ZM10.002 2.41421L3.35292 9.0633C3.7321 9.20542 4.002 9.57119 4.002 10V17C4.002 17.5523 4.44972 18 5.002 18L7.002 17.999L7.002 14C7.002 12.8954 7.89744 12 9.002 12H11.002C12.1066 12 13.002 12.8954 13.002 14L13.002 17.999L15.002 18C15.5543 18 16.002 17.5523 16.002 17V10C16.002 9.57119 16.2719 9.20542 16.6511 9.0633L10.002 2.41421ZM11.002 14H9.002V17.999H11.002V14Z"
            />
          </svg>
          <span>Home</span>
        </div>
        <p>Home</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
