import React from "react";
import logoImg from "../../assets/images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center px-5 shadow-sm justify-between w-full py-4 bg-white ">
      <div className="w-[230px] ">
        <img
          src={logoImg}
          alt=""
          className="w-9 cursor-pointer select-none"
          onClick={() => {
            navigate("");
          }}
        />
      </div>
      <div className=" flex items-center justify-center gap-x-10 text-xl text-gray-700">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/teacher"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Teacher
        </NavLink>
        <NavLink
          to={"/student"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Student
        </NavLink>
        <NavLink
          to={"/topic"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Topic
        </NavLink>
        <NavLink
          to={"/question"}
          className={({ isActive }) =>
            isActive ? "text-primary cursor-pointer" : "cursor-pointer"
          }
        >
          Question
        </NavLink>
      </div>
      <div className="w-[230px] flex items-center justify-end gap-x-2 text-lg">
        <NavLink
          to={"/sign-up"}
          className="button py-1 px-6 font-semibold bg-white text-gray-700 border-white hover:text-primary"
        >
          Sign Up
        </NavLink>
        <div className="button py-1 px-6 bg-primary border-primary">
          Sign In
        </div>
      </div>
    </header>
  );
};

export default Header;
