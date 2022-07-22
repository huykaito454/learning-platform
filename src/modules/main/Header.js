import React from "react";
import logoImg from "../../assets/images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      <header className="flex items-center page-container justify-between w-full py-4 bg-white ">
        <div className="w-[60px] sm:w-[120px] md:w-[230px]">
          <img
            src={logoImg}
            alt=""
            className="w-9 cursor-pointer select-none"
            onClick={() => {
              navigate("");
            }}
          />
        </div>
        <div className="hidden sm:flex items-center justify-center gap-x-10 text-lg text-gray-700">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-primary cursor-pointer" : "cursor-pointer"
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
        <div className="w-[120px] md:w-[230px] hidden sm:flex items-center justify-end gap-x-2 text-lg">
          <NavLink
            to={"/sign-up"}
            className="button py-1 px-6 font-semibold bg-white text-gray-700 border-white hover:text-primary hidden lg:block"
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
        <div className="w-[120px] md:w-[230px] sm:hidden flex items-center justify-end gap-x-2 text-lg">
          <div className="p-2">
            <i className="fas fa-bars text-3xl cursor-pointer text-primary"></i>
          </div>
        </div>
        <ToggleMenu></ToggleMenu>
      </header>
    </div>
  );
};

export default Header;
