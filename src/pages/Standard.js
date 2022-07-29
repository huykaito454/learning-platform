import axios from "axios";
import React, { useEffect, useState } from "react";

const Standard = () => {
  const [standard, setStandard] = useState([]);
  const handleStandard = async () => {
    try {
      const res = await axios.get(
        "https://www.wolframalpha.com/problem-generator/scripts/commoncore.js"
      );
      setStandard(res?.data?.Grade);
      console.log(res?.data?.Grade);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleStandard();
  }, []);
  return (
    <div className="flex flex-col gap-4  page-container p-10">
      {standard && standard.length > 0 ? (
        standard.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <span className="uppercase text-3xl text-primary">
              {item.Display}
            </span>
            {item.CCS.Domain.length > 0 &&
              item.CCS.Domain.map((item, index) => (
                <div key={index}>
                  <p className="mb-2 text-xl font-semibold">{item?.Display}</p>
                  {item.Standards.length > 0 &&
                    item.Standards.map((item, index) => (
                      <div key={index}>
                        <span className="mb-2 font-semibold mr-5">
                          {item?.Display}
                        </span>
                        <span className="mb-2 ">( {item?.Tooltip?.Text} )</span>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))
      ) : (
        <span>....</span>
      )}
    </div>
  );
};

export default Standard;
