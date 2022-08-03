import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Button from '../../components/Button/Button';
import mailbox from '../../assets/images/teachers/mailbox.png';
import lesson from '../../assets/images/teachers/lesson.png';
import moon from '../../assets/images/teachers/moon.png';
// import 'react-calendar/dist/Calendar.css';

const TeacherHome = () => {
  const [value, onChange] = useState(new Date());
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
  }, [hours, minutes]);

  const { user } = useSelector((state) => state.userGoogle);
  return (
    <div className='flex flex-col gap-10 mx-12'>
      {/* top */}
      <div className='flex flex-row gap-28'>
        {/* mail */}
        <div
          className='teacherHome__mail flex flex-col justify-center rounded-xl w-[425px] h-[160px]
         px-5 pr-28 shadow-xl text-white relative gap-2'>
          <img
            src={mailbox}
            alt=''
            className='absolute translate-x-56 translate-y-2 pointer-events-none'
          />
          <div className='flex flex-row mx-5 items-center'>
            <p className='text-3xl text-left'>You have mail in inbox</p>
            <span className='text-4xl'>99+</span>
          </div>
          <div className='mx-5'>
            <Button className='border-none bg-[#DE9300] px-3 py-1'>
              Check mail now
            </Button>
          </div>
        </div>
        {/* Lessons */}
        <div
          className='teacherHome__lesson flex flex-col justify-center rounded-xl w-[425px] h-[160px]
         px-5 pr-28 shadow-xl text-white relative gap-2'>
          <img
            src={lesson}
            alt=''
            className='absolute translate-x-72 translate-y-2 pointer-events-none w-[200px] h-[200px]'
          />
          <div className='flex flex-row mx-5 items-center'>
            <p className='text-2xl text-left'>You have lesson tomorrow</p>
            <span className='text-4xl'>99+</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-24'>
        {/* Welcome */}
        <div
          className={`teacherHome__welcome w-[500px] h-[500px] text-[#FF9900] flex flex-col gap-5 justify-center items-center rounded-xl`}>
          <span className='font-semibold text-3xl'>Hi, {user?.name}</span>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={moon} alt='' className='pointer-events-none' />
            <span className='text-xl'>
              {hours}:{minutes}
            </span>
          </div>
          <span className='text-2xl max-w-[250px] text-center'>
            Working too late may effect your health!
          </span>
        </div>
        {/* calender & lessons */}
        <div className='w-[400px] h-[500px] bg-white shadow-xl rounded-xl flex flex-col gap-4'>
          <div className='flex flex-col justify-center items-center'>
            <Calendar onChange={onChange} value={value} className='mt-5' />
          </div>
          {/* lessons */}
          <div className='text-2xl font-bold flex flex-row justify-between items-center text-[#4B6471] mx-10'>
            <span>Lesson</span>
            <a className='text-base font-normal cursor-pointer'>View all</a>
          </div>
          <div className='flex flex-col border-l-[7px] border-primary rounded-md mx-10 p-2'>
            <span>Grade 4 basic math</span>
            <span className='text-gray-400'>Mon 7AM - 1AM</span>
          </div>
          <div className='flex flex-col border-l-[7px] border-primary rounded-md mx-10 p-2'>
            <span>Grade 4 basic math</span>
            <span className='text-gray-400'>Mon 7AM - 1AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
