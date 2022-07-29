import React from "react";
import { NavLink } from "react-router-dom";
const LeftSideBarMenu = () => {
  return (
    <div className="flex flex-col gap-5 text-base cursor-pointer w-full select-none">
      <NavLink
        to={"/student"}
        className={({ isActive }) =>
          isActive
            ? "flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px]  nav-item-active"
            : "flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white"
        }
      >
        <i className="fas fa-home"></i>
        <span className="w-[85%]">Home</span>
      </NavLink>
      <div className="flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white">
        <i className="far fa-bell"></i>
        <span className="w-[85%]">Announcements</span>
      </div>
      <div className="flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white">
        <i className="fas fa-history"></i>
        <span className="w-[85%]">History</span>
      </div>
      <div className="flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white">
        <i className="fas fa-graduation-cap"></i>
        <span className="w-[85%]">Class</span>
      </div>
      <div className="flex items-center justify-between gap-3 w-full -ml-5 px-4 py-2 border-l-[5px] border-white">
        <i className="fas fa-cog"></i>
        <span className="w-[85%]">Setting</span>
      </div>
    </div>
  );
};

export default LeftSideBarMenu;
