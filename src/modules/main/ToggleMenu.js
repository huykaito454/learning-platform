import React from "react";
import { NavLink } from "react-router-dom";

const ToggleMenu = () => {
  return (
    <div className="fixed invisible top-0 right-0 z-50 pt-10 px-5 bg-white shadow-sm h-[100vh] flex flex-col gap-y-10">
      <div className="flex items-center justify-end gap-x-2 text-lg">
        <NavLink
          to={"/sign-up"}
          className="button py-1 px-6 font-semibold bg-white text-primary border-primary hover:text-primary"
        >
          Sign Up
        </NavLink>
        <NavLink
          to={"/sign-in"}
          className="button py-1 px-6 bg-primary border-primary"
        >
          Sign In
        </NavLink>
      </div>
      <div className="flex items-star gap-y-5 flex-col gap-x-10 text-lg text-gray-700">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-primary cursor-pointer"
              : "cursor-pointer border-2 "
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default ToggleMenu;
