import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 z-[9999] fixed top-0 left-0 right-0 bottom-0">
      <style></style>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
