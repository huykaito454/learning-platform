import React from 'react';
import Button from '../../components/Button/Button';
import ClassCard from '../../modules/teachermain/ClassCard';

const TeacherClass = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* top */}
      <div className='flex flex-row justify-between items-center w-full focus:text-black'>
        <input
          className='px-4 py-2 pl-9 w-[30%] rounded-full bg-gray-100 outline-[1px] relative'
          type='text'
          placeholder='Search class name'></input>
        <i class='fas fa-search absolute pl-3 text-gray-400'></i>
        <Button className='bg-white text-primary border-1 border-primary font-semibold'>
          Create Class
        </Button>
      </div>
      {/* My class */}

      <div className='flex flex-row justify-between pt-5 items-center'>
        <span className='font-semibold text-2xl'>My class</span>
        {/* filter */}
        <div className='flex flex-row gap-2 items-center '>
          <span className='font-semibold'>Semester</span>
          <select className='p-1 bg-gray-200 rounded-lg'>
            <option value=''>Test 1</option>
            <option value=''>Test 2</option>
            <option value=''>Test 3</option>
          </select>
        </div>
      </div>

      <ClassCard />
    </div>
  );
};

export default TeacherClass;
