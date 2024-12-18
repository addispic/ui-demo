import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode } from "swiper/modules";
// icons
import { MdChevronRight } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { IoMdMore } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  // states
  // grid
  const [grid, setGrid] = useState([
    {
      icon: MdDesignServices,
      text: "2/8 watched",
      title: "UI/UX Design",
    },
    {
      icon: TbBrandAirtable,
      text: "3/8 watched",
      title: "Branding",
    },
    {
      icon: CgWebsite,
      text: "6/12 watched",
      title: "Frontend",
    },
  ]);
  // courses
  const [courses, setCourses] = useState([
    {
      image:
        "https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg",
      sub: "Web Development",
      main: "Beginners Guide to Becoming a Web Developer",
      mentor:
        "https://www.viewbug.com/media/mediafiles/2018/01/18/77052177_large.jpg",
      name: "Surafel Shiferaw",
    },
    {
      image:
        "https://www.sgstechnologies.net/sites/default/files/2022-03/ai.jpg",
      sub: "Machine Learning",
      main: "Advanced Guide to Master Your AI Understanding",
      mentor: "https://wallpaperaccess.com/full/2562964.jpg",
      name: "Tsegaye H/Mariam",
    },
    {
      image:
        "https://s3-alpha.figma.com/hub/file/2942566861/7e3aaade-4be8-47a8-aa6c-fe6f0c220316-cover.png",
      sub: "UI/UX Design",
      main: "Graphic Design Advanced Tutorials",
      mentor:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Yakob Teshome",
    },
    {
      image:
        "https://www.techsplace.com/wp-content/uploads/2020/02/Learn-Android-Development.jpg",
      sub: "Mobile Development",
      main: "Android & IOs Mobile Application Development",
      mentor: "https://c.stocksy.com/a/dTW500/z9/1316485.jpg",
      name: "Maireg Teka",
    },
  ]);

  return (
    <div className="flex-1 px-5 overflow-hidden">
      {/* content */}
      <div className="h-[90vh] overflow-y-auto pb-3">
        {/* 1 */}
        <div className="rounded-xl overflow-hidden p-5 bg-green-500 text-white">
          <div className="w-[75%]">
            <p className="uppercase">Online Courses</p>
            <h1 className="my-3 text-3xl font-bold">
              Sharpen Your Skills with Professional Online Courses
            </h1>
            <button className="flex items-center gap-x-3.5 px-2 py-1.5 rounded-full bg-black">
              <span>Join now</span>
              <div className="w-[20px] aspect-square rounded-full bg-white text-black flex items-center justify-center">
                <MdChevronRight />
              </div>
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="mt-7 grid grid-cols-3 gap-x-10">
          {grid.map((item, index) => {
            return (
              <div
                key={item.title}
                className="rounded-xl overflow-hidden p-3 bg-white flex items-center justify-between"
              >
                {/* icon */}
                <div
                  className={`
                  w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center
                  ${
                    index === 0
                      ? "bg-pink-200 text-pink-600"
                      : index === 1
                      ? "bg-green-200 text-green-600"
                      : "bg-blue-200 text-blue-600"
                  }
                  `}
                >
                  <item.icon />
                </div>
                {/* text */}
                <div>
                  <p className="text-sm text-neutral-500">{item.text}</p>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                {/* more */}
                <IoMdMore className="text-xl" />
              </div>
            );
          })}
        </div>
        {/* 3 */}
        <div className="mt-7">
          <header className="flex items-center justify-between">
            <h3 className="font-bold">Continue Watching</h3>
            <button className="flex items-center gap-x-1.5 px-3 py-1 text-neutral-500 border border-neutral-400  rounded-full text-sm">
              <span>View More</span>
              <FaArrowRight />
            </button>
          </header>
          {/* swiper*/}
          <div className="max-w-[730px] bg-white rounded-xl overflow-hidden mt-3 px-3">
            <Swiper
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                650: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                750: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[Pagination, FreeMode]}
            >
              {courses.map((coreItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="mb-10 mt-5">
                      {/* image */}
                      <div className="h-[120px] relative w-full rounded-xl overflow-hidden">
                        <img src={coreItem.image} alt="" />
                        <div className="absolute top-1.5 right-1.5 w-[24px] aspect-square rounded-full bg-white bg-opacity-15 text-white flex items-center justify-center cursor-pointer">
                          <CiHeart />
                        </div>
                      </div>
                      {/* sub */}
                      <div className={`text-sm my-1.5 ${index === 0 ? "text-green-500" : index === 1 ? "text-red-500" : index === 2 ? "text-blue-500" : "text-pink-600"}`}>
                        <span>{coreItem.sub}</span>
                      </div>
                      {/* main */}
                      <p className="font-medium">{coreItem.main}</p>
                      {/* bar */}
                      <div className="h-[2px] rounded-full w-full bg-green-200 my-2.5 relative">
                        <div className="absolute left-0 top-0 h-full w-[37%] bg-green-500"></div>
                      </div>
                      {/* mentor */}
                      <div className="flex items-center gap-x-1.5">
                        <div className="w-[22px] aspect-square rounded-full overflow-hidden">
                          <img className="w-full h-full object-center object-cover" src={coreItem.mentor} alt="" />
                        </div>
                        <div className="text-sm">
                          <p>{coreItem.name}</p>
                          <p className="text-xs text-neutral-500 -mt-1">mentor</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
