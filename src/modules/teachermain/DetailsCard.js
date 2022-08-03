import React from 'react';

const DetailsCard = ({ title, isScore, shadow, color }) => {
  return (
    <div
      className={`w-[200px] h-[225px] bg-white rounded-md cursor-pointer flex flex-col justify-between relative`}>
      <div
        className={`absolute w-[200px] h-[225px] -z-10 rounded-md -translate-x-3 -translate-y-2 ${shadow}`}></div>
      <div className='flex flex-col justify-center items-center gap-2 mt-16'>
        <span className='font-semibold text-2xl'>{title}</span>
        <span className={`text-4xl relative ${color}`}>
          100
          {isScore === true ? (
            <span className='absolute text-xl text-gray-400 translate-y-4'>
              /100
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
      <span className='flex flex-row-reverse mx-3'>View Details >></span>
    </div>
  );
};

export default DetailsCard;
