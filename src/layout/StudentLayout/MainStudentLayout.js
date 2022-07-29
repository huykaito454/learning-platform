import React from "react";
import LeftSideBar from "../../modules/studentmain/LeftSideBar";
import RightSideBar from "../../modules/studentmain/RightSideBar";
import { Outlet } from "react-router-dom";
const MainStudentLayout = () => {
  return (
    <>
      <LeftSideBar></LeftSideBar>
      <div className="w-full page-student-container pl-[300px] p-5">
        <Outlet></Outlet>
      </div>
      <RightSideBar></RightSideBar>
    </>
  );
};

export default MainStudentLayout;
