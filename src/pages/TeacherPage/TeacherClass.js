import React from 'react';
import Button from '../../components/Button/Button';
import ClassCard from '../../modules/teachermain/ClassCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Mousewheel } from 'swiper';

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
      {/* swiper */}
      <div className='rounded-lg mb-10'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          mousewheel={true}
          scrollbar={{
            draggable: true,
            hide: true,
          }}
          modules={[Scrollbar, Mousewheel]}
          className='mySwiper h-[330px] px-3'>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Recent access */}
      <div className='flex flex-row justify-between items-center'>
        <span className='font-semibold text-2xl'>Recently Access</span>
      </div>
      {/* Swiper */}
      <div className='rounded-lg mb-10'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          mousewheel={true}
          scrollbar={{
            draggable: true,
            hide: true,
          }}
          modules={[Scrollbar, Mousewheel]}
          className='mySwiper h-[330px] px-3'>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClassCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeacherClass;
