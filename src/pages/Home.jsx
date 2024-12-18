import React from "react";

// icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const Home = () => {
  return (
    <div>
      {/* 1 */}
      <div className="relative">
        {/* bg */}
        <div className="absolute left-0 h-full w-full overflow-hidden bg-black">
          <img
            className="w-full h-full object-center object-cover opacity-25"
            src="https://www.exploriada.com/media/1103/pano3_edited-resized.jpg"
            alt=""
          />
        </div>
        {/* content */}
        <div className="main-padding py-24 relative z-30 text-white">
          <div className="w-max px-3 py-0.5 text-sm bg-white bg-opacity-20 rounded-full">
            <p>Addispic Tour & Travel</p>
          </div>
          <h3 className="my-5 text-5xl font-bold w-[75%] leading-[4rem]">
            Explore Ethiopia With{" "}
            <span className="text-orange-600">Addispic</span> Tour & Travel
            Agency
          </h3>
          <button className="flex items-center gap-x-6 px-3 py-1.5 border border-white relative rounded-full overflow-hidden bg-white text-black after:absolute after:left-0 after:top-0 after:h-full after:w-0 after:transition-all after:ease-in-out after:duration-150 after:bg-black hover:after:w-full transition-colors ease-in-out duration-150 hover:text-white">
            <span className="relative z-20">Start explore</span>
            <FaArrowRightLong className="text-lg relative z-20" />
          </button>
          {/* stuffs */}
          <div className="mt-16 w-[60%] grid grid-cols-2 gap-7">
            <div className="flex items-center gap-x-3.5">
              <div className="shrink-0 w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-15 text-white">
                <IoLocationSharp />
              </div>
              <div className="text-sm text-neutral-300">
                <p>Together We will visit each and every corner of Ethiopia</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3.5">
              <div className="shrink-0 w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-15 text-white">
                <LuCalendarClock />
              </div>
              <div className="text-sm text-neutral-300">
                <p>Anytime according to your schedule and your need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
