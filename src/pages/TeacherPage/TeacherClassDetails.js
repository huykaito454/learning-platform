import React from 'react';
import Button from '../../components/Button/Button';
import DetailsCard from '../../modules/teachermain/DetailsCard';
import { useNavigate } from 'react-router-dom';

const TeacherClassDetails = () => {
  let noti = 3;
  let navigate = useNavigate();
  return (
    <div className='flex flex-col gap-7'>
      {/* top */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <i class='fas fa-caret-left text-xl font-bold'></i>
          <a
            className='underline underline-offset-4 font-semibold cursor-pointer'
            onClick={() => {
              navigate('../class');
            }}>
            All Classes
          </a>
        </div>
        <Button className='bg-white text-black border-none shadow-lg relative flex flex-row gap-3 items-center'>
          Request
          <span
            className='notification bg-red-700 rounded-full text-xs
       text-white shadow-[#ff4242] w-[20px] h-[20px] flex justify-center items-center'>
            {noti > 9 ? '9+' : noti}
          </span>
        </Button>
      </div>

      {/* class infos */}
      <div className='flex flex-col justify-center items-center'>
        <img
          src='https://img.freepik.com/premium-vector/students-classroom-teacher-near-blackboard-auditorium-teaches-maths-lesson-children-study-subject-kids-group-studying-elementary-primary-school-class-interior-cartoon-vector-flat-concept_176411-2393.jpg?w=2000'
          alt=''
          className='w-[200px] h-[200px] rounded-full border-4 border-white shadow-2xl my-5'
        />
        <span className='font-bold text-3xl mb-2'>Class Name</span>
        <span className=''>Date created : 66/99/6969</span>
      </div>

      {/* detail cards */}
      <div className='px-16 flex flex-row gap-32 justify-center items-center'>
        <DetailsCard
          title='Average Score'
          isScore={true}
          shadow='teacherdetails__AScore'
          color={'text-[#00d4ff]'}
        />
        <DetailsCard
          title='Topics'
          shadow='teacherdetails__Topics'
          color='text-[#9fff24]'
        />
        <DetailsCard
          title='Students'
          shadow='teacherdetails__Students'
          color='text-[#ff24cf78]'
        />
      </div>
    </div>
  );
};

export default TeacherClassDetails;
