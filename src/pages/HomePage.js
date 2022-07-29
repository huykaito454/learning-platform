import React from "react";
// import imageRocket from "../assets/images/rocket1h.png";
import imageHome from "../assets/images/home3.png";
const HomePage = () => {
  // const handleRocket = () => {
  //   const rocket = document.getElementById("rocket");
  //   if (window.scrollY > 500) {
  //     rocket.classList.add("rocket");
  //   }
  //   if (window.scrollY < 100) {
  //     rocket.classList.remove("rocket");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleRocket);
  //   return () => {
  //     window.removeEventListener("scroll", handleRocket);
  //   };
  // }, []);
  return (
    <>
      <div className="w-full bg-gradient-to-b from-white to-[#fafafa]">
        <div className="w-full page-container bg-gradient-to-b from-white to-[#fafafa]">
          <div className="w-full home flex lg:flex-row flex-col items-center pb-20 justify-between gap-4 p-4 md:px-16 md:pt-10">
            <div className="w-full lg:w-[54%] xl:w-[32%] flex flex-col gap-y-6 justify-between items-start">
              <div className="flex items-center gap-x-2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8.16497H11.0158L15.9542 3.22657L14.7734 2.04583L9.83503 6.98423V0H8.16497V6.98423L3.22657 2.04583L2.04583 3.22657L6.98423 8.16497H0V9.83503H6.98423L2.04583 14.7734L3.22657 15.9542L8.16497 11.0158V18H9.83503V11.0158L14.7734 15.9542L15.9542 14.7734L11.0158 9.83503H18V8.16497Z"
                    fill="url(#paint0_linear_107_1337)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_107_1337"
                      x1="3.5"
                      y1="15.5"
                      x2="14.1681"
                      y2="0.487576"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D1498B" />
                      <stop offset="0.355217" stopColor="#FE5A5B" />
                      <stop offset="0.785075" stopColor="#3145FC" />
                      <stop offset="1" stopColor="#BF34F0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="slogan font-extrabold text-transparent text-base bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Best Kids Academic Online Learning Platform
                </span>
              </div>
              <h1 className="title text-6xl font-bold text-black">
                Inspiring Innovation And Discovery
              </h1>
              <span className=" text-gray-500 text-lg">
                We have more than 80 skills for you to master
              </span>
              <div className="flex email-contact items-center justify-between w-full sm:w-[80%] md:w-[50%] lg:w-full gap-x-2">
                <input
                  type="text"
                  className="p-3 bg-fa border-2 border-e5 text-sm rounded-lg outline-none flex-1"
                  placeholder="Email address"
                />
                <div className="button py-3 items-start text-sm border-primary">
                  Get Started
                </div>
              </div>
            </div>
            <div className="w-full md:w-[80%] lg:w-[60%] ">
              <img src={imageHome} alt="" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full page-container py-20 ">
        <div className="flex flex-col gap-y-6 items-center justify-center">
          <span className="text-4xl font-semibold mb-10 text-secondary flex items-center gap-x-2 justify-center ">
            <span>Our best </span>
            <div className="w-32 relative z-50" id="rocket">
              <img src={imageRocket} alt="" />
            </div>
            <span>teachers</span>
          </span>
          <div className="flex item-center pt-10 justify-between w-[80%]">
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/292417007_5402730206456108_6934977698520348753_n.jpg?stp=cp1_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KdIlDBSwuDwAX9vzZcL&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-zFC_u5arfugyiU4Ihzu33uIVWJnyeioyTKVwr2nwtrg&oe=62D5A531"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://reviewsmoi.com/wp-content/uploads/2022/03/iu-3.jpg"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
            <div className="card p-10 w-[27%] bg-secondary rounded-3xl flex flex-col justify-center items-center text-white shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="https://i.pinimg.com/originals/c9/d7/f9/c9d7f9c85b54bf0dcb0b22033021ed74.jpg"
                  alt=""
                  className="w-ful object-cover"
                />
              </div>
              <span className="text-4xl mb-2 font-semibold">Tisn Nguyen</span>
              <span className="card-border border-b-4 rounded-full border-white w-full mb-5 "></span>
              <div className="flex flex-col items-center justify-center text-2xl font-semibold ">
                <span>3yrs experience</span>
                <span>MAT</span>
                <span>300 classes</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
