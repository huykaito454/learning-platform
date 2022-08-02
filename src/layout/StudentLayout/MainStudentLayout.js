import React from 'react';
import LeftSideBar from '../../modules/studentmain/LeftSideBar';
import RightSideBar from '../../modules/studentmain/RightSideBar';
import { Outlet } from 'react-router-dom';
const MainStudentLayout = () => {
  return (
    <>
      <LeftSideBar></LeftSideBar>
      <div className='page-student-container pl-[320px] p-10'>
        <Outlet></Outlet>
      </div>
      <RightSideBar></RightSideBar>
    </>
  );
};

export default MainStudentLayout;
