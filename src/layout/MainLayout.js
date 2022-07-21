import React from "react";
import Header from "../modules/main/Header";
import { Outlet } from "react-router-dom";
import Footer from "../modules/main/Footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
