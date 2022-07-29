import React, { useEffect } from "react";
import handleLogout from "../../utils/handleLogout";
import { useDispatch, useSelector } from "react-redux";
import LeftSideBarMenu from "./LeftSideBarMenu";
const LeftSideBar = () => {
  const { user } = useSelector((state) => state.userGoogle);
  useEffect(() => {}, []);
  return (
    <div className="w-[280px] h-full fixed top-0 left-0 bg-white shadow-sm flex flex-col p-5 items-start gap-10">
      <div className="flex items-start">
        <div className="flex flex-col items-center gap-3 mr-5">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img src={user?.imageUrl} alt="" className="w-full object-cover" />
          </div>
          <div
            className="button bg-[#DE9300] border-[#DE9300] py-0 px-2 text-white rounded-xl cursor-pointer"
            onClick={handleLogout}
          >
            Log out
          </div>
        </div>
        <div className="flex flex-col h-20 justify-center">
          <p className="text-2xl font-semibold text-1-line">{user?.name}</p>
          <p className="font-semibold">8th grade student</p>
        </div>
      </div>
      <LeftSideBarMenu></LeftSideBarMenu>
      <div className="w-full flex flex-col items-start bg-primary p-4 rounded-xl mt-auto text-white gap-6">
        <div className="flex flex-col gap-1">
          <span>Do you still need our help?</span>
          <span className="text-xs">Look up for FAQs</span>
        </div>
        <div className="button bg-primary-dark border-0">FAQs</div>
      </div>
    </div>
  );
};

export default LeftSideBar;
