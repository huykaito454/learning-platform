import React from "react";
import logoImg from "../../assets/images/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
const HeaderAuthentication = () => {
  const navigate = useNavigate();
  return (
    <header className="px-5 w-full py-4  ">
      <div className="w-[230px] ">
        <img
          src={logoImg}
          alt=""
          className="w-9 cursor-pointer select-none"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </header>
  );
};

export default HeaderAuthentication;
