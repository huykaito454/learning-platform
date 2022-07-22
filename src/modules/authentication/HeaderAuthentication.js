import React from "react";
import logoImg from "../../assets/images/logo2.png";
import { useNavigate } from "react-router-dom";
const HeaderAuthentication = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full fixed z-50">
      <header className="page-container py-4">
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
    </div>
  );
};

export default HeaderAuthentication;
