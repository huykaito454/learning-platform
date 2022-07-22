import React from "react";
import HeaderAuthentication from "../modules/authentication/HeaderAuthentication";
const AuthenticationLayout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] relative">
      <HeaderAuthentication></HeaderAuthentication>
      {children}
    </div>
  );
};

export default AuthenticationLayout;
