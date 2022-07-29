import React from "react";
import LeftSideBar from "../../modules/teachermain/LeftSideBar";
import RightSideBar from "../../modules/teachermain/RightSideBar";
import { Outlet } from "react-router-dom";
const MainTeacherLayout = () => {
  return (
    <>
      <LeftSideBar></LeftSideBar>
      <Outlet></Outlet>
      <RightSideBar></RightSideBar>
    </>
  );
};

export default MainTeacherLayout;
