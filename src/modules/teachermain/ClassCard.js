import React from 'react';

const ClassCard = () => {
  let noti = 10;
  return (
    <div className='cursor-pointer bg-white flex flex-col w-[250px] h-[300px] rounded-lg shadow-xl gap-3 relative'>
      <img
        src=''
        alt=''
        className='w-[200px] h-[125px] mx-auto mt-8 relative'
      />
      {/* notification */}
      <div
        className='notification absolute translate-x-[210px] translate-y-[20px] bg-red-700 rounded-full
       text-white shadow-[#ff4242] w-[25px] h-[25px] flex justify-center items-centerp'>
        <span className=''>{noti > 9 ? '9+' : noti}</span>
      </div>

      <span className='font-semibold mx-6 text-xl'>MATH_12345</span>
      <span className='mx-6 text-sm'>69 student</span>
      <div>
        <span className='mx-6 px-3 py-2 rounded-full bg-[#31b5ff] text-white'>
          2022-2069
        </span>
      </div>
    </div>
  );
};

export default ClassCard;
