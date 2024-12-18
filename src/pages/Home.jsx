import React from "react";

// icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { LiaUserSolid } from "react-icons/lia";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdSafetyCheck } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";

const Home = () => {
  return (
    <div>
      {/* 1 */}
      <div className="relative">
        {/* bg */}
        <div className="absolute left-0 h-full w-full overflow-hidden bg-black">
          <img
            className="w-full h-full object-center object-cover opacity-55"
            src="https://www.exploriada.com/media/1103/pano3_edited-resized.jpg"
            alt=""
          />
        </div>
        {/* content */}
        <div className="main-padding py-24 relative z-30 text-white">
          <div className="w-max px-3 py-0.5 text-sm bg-white bg-opacity-20 rounded-full">
            <p>Addispic Tour & Travel</p>
          </div>
          <h3 className="my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lg:w-[75%] xl:leading-[4rem]">
            Explore Ethiopia With{" "}
            <span className="text-orange-600">Addispic</span> Tour & Travel
            Agency
          </h3>
          <button className="flex items-center gap-x-6 px-3 py-1.5 border border-white relative rounded-full overflow-hidden bg-white text-black after:absolute after:left-0 after:top-0 after:h-full after:w-0 after:transition-all after:ease-in-out after:duration-150 after:bg-black hover:after:w-full transition-colors ease-in-out duration-150 hover:text-white">
            <span className="relative z-20">Start explore</span>
            <FaArrowRightLong className="text-lg relative z-20" />
          </button>
          {/* stuffs */}
          <div className="mt-16 w-full lg:w-[60%] grid grid-cols-2 gap-7">
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
      {/* 2 */}
      <div>
        <div className="main-padding">
          <div className="max-w-[820px] mx-auto bg-white shadow-xl rounded-md overflow-hidden p-3 flex flex-col md:flex-row gap-y-3 md:items-end gap-x-3 mt-[-2.5rem] relative z-50">
            {/* option grid */}
            <div className="flex-1 grid grid-cols-2  md:grid-cols-4 gap-5">
              {/* one */}
              <div>
                <p className="font-medium mb-1.5">Check Ins</p>
                <div className="flex items-center gap-x-1.5 border border-neutral-300 rounded-full px-2 py-1">
                  <input
                    className="w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
                    type="text"
                    placeholder="Select Date"
                  />
                  <LuCalendarClock className="shrink-0 text-neutral-500" />
                </div>
              </div>
              {/* two */}
              <div>
                <p className="font-medium mb-1.5">Check Out</p>
                <div className="flex items-center gap-x-1.5 border border-neutral-300 rounded-full px-2 py-1">
                  <input
                    className="w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
                    type="text"
                    placeholder="Select Date"
                  />
                  <LuCalendarClock className="shrink-0 text-neutral-500" />
                </div>
              </div>
              {/* three */}
              <div>
                <p className="font-medium mb-1.5">Guest</p>
                <div className="flex items-center gap-x-1.5 border border-neutral-300 rounded-full px-2 py-1">
                  <input
                    className="w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
                    type="text"
                    placeholder="Persons"
                  />
                  <LiaUserSolid className="shrink-0 text-neutral-500" />
                </div>
              </div>
              {/* four */}
              <div>
                <p className="font-medium mb-1.5">Accommodation</p>
                <div className="flex items-center gap-x-1.5 border border-neutral-300 rounded-full px-2 py-1">
                  <input
                    className="w-full focus:ring-0 focus:outline-none border-none bg-transparent text-sm"
                    type="text"
                    placeholder="Tent Crafting"
                  />
                  <IoChevronDownOutline className="shrink-0 text-neutral-500" />
                </div>
              </div>
            </div>
            <button className="flex items-center w-max gap-x-2.5 px-1.5 py-1 rounded-full bg-orange-500 text-white text-sm">
              <span>Results</span>
              <IoChevronDownOutline className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="py-24">
        <div className="main-padding flex flex-col-reverse lg:flex-row gap-10">
          {/* left */}
          <div className="w-full h-[300px] lg:h-auto lg:w-[40%] shrink-0">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <div className="h-full w-full">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/shutterstock_2233560031.jpg"
                    alt=""
                  />
                  <footer className="absolute left-0 py-1.5 bottom-0 w-full flex items-center justify-between text-white z-20 px-3 bg-black bg-opacity-5">
                    <div>
                      <p className="font-medium">Bale Mountain</p>
                      <p className="text-xs text-neutral-200 -mt-1">
                        Central Ethiopia
                      </p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="text-3xl cursor-pointer -rotate-45" />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col">
            {/* top */}
            <div className="flex gap-10 w-full">
              <div className="w-[50%]">
                <div className="w-full h-[170px] rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://imgix.brilliant-ethiopia.com/Gondar-Banner.JPG?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30"
                    alt=""
                  />
                  <footer className="absolute left-0 py-1.5 bottom-0 w-full flex items-center justify-between text-white z-20 px-3 bg-black bg-opacity-5">
                    <div>
                      <p className="font-medium">Gonder</p>
                      <p className="text-xs text-neutral-200 -mt-1">
                        North Ethiopia
                      </p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="text-3xl cursor-pointer -rotate-45" />
                    </div>
                  </footer>
                </div>
              </div>
              {/* second */}
              <div className="w-[50%]">
                <div className="w-full h-[170px] rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn.britannica.com/23/93423-050-107B2836/obelisk-kingdom-Aksum-Ethiopian-name-city.jpg"
                    alt=""
                  />
                  <footer className="absolute left-0 py-1.5 bottom-0 w-full flex items-center justify-between text-white z-20 px-3 bg-black bg-opacity-5">
                    <div>
                      <p className="font-medium">Axum</p>
                      <p className="text-xs text-neutral-200 -mt-1">
                        North Ethiopia
                      </p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="text-3xl cursor-pointer -rotate-45" />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="mt-10">
              <div className="w-full">
                <div className="w-full h-[300px] lg:h-[400px] rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://imgix.brilliant-ethiopia.com/Omo-body-paint-WE.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1200&h=720&q=50"
                    alt=""
                  />
                  <footer className="absolute left-0 py-1.5 bottom-0 w-full flex items-center justify-between text-white z-20 px-3 bg-black bg-opacity-5">
                    <div>
                      <p className="font-medium">SNNPR</p>
                      <p className="text-xs text-neutral-200 -mt-1">
                        South Ethiopia
                      </p>
                    </div>
                    <div>
                      <IoArrowForwardCircleOutline className="text-3xl cursor-pointer -rotate-45" />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="">
        <div className="main-padding">
          <div className="max-w-[720px] mx-auto">
            <h3 className="text-center font-bold text-3xl mb-5">
              Travel with Us
            </h3>
            <p className="text-center text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptas optio nam mollitia exercitationem atque iste, sed magni
              dolore consectetur. At error veniam itaque!
            </p>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="py-24">
        <div className="main-padding flex flex-col-reverse lg:flex-row gap-10">
          {/* left */}
          <div className="w-full lg:w-[40%] shrink-0">
            <h3 className="text-3xl font-bold">Experience new Adventure</h3>
            <p className="mt-5 text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              harum, doloremque asperiores natus iure autem provident nam!
              Perferendis nesciunt dolorum libero quidem corporis.
            </p>
            {/* list */}
            <div className="mt-5">
              {/* 1 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[36px] shrink-0 text-xl aspect-square rounded-full overflow-hidden flex items-center justify-center bg-orange-500 text-white">
                  <MdSafetyCheck />
                </div>
                <div>
                  <h4 className="font-medium">Safe Traveling</h4>
                  <p className="text-sm text-neutral-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium optio quas suscipit.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[36px] shrink-0 text-xl aspect-square rounded-full overflow-hidden flex items-center justify-center bg-orange-500 text-white">
                  <MdOutlinePriceChange />
                </div>
                <div>
                  <h4 className="font-medium">Affordable Price</h4>
                  <p className="text-sm text-neutral-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium optio quas suscipit.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[36px] shrink-0 text-xl aspect-square rounded-full overflow-hidden flex items-center justify-center bg-orange-500 text-white">
                  <AiOutlineFundView />
                </div>
                <div>
                  <h4 className="font-medium">Comfort Accommodation</h4>
                  <p className="text-sm text-neutral-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium optio quas suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1  rounded-xl overflow-hidden">
            <img
              src="https://www.venture-ethiopia.com/assets/Uploads/_resampled/CroppedFocusedImageWzE2MDAsNTAwLCJ5Iiw1NzJd/Fishermen-Lake-Tana-2260748777.jpg"
              className="w-full h-full object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="py-12 bg-black text-white">
        <div className="main-padding flex flex-col lg:flex-row lg:items-center gap-x-10 gap-y-5">
          <p className="w-full lg:w-[40%] text-2xl font-bold">
            Discover a Mesmerizing Nature Landscape & Stunning Culture
          </p>
          <div className="w-full lg:w-[60%]">
            <p className="text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              similique ipsa illo neque soluta laborum inventore doloremque,
              voluptatum corporis, suscipit cumque dignissimos accusamus.
            </p>
            <button className="mt-3 px-3 py-1 bg-neutral-300 rounded-md overflow-hidden text-black">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div className="my-20">
        <div className="main-padding">
          <div className="max-w-[720px] mx-auto">
            <h3 className="text-center font-bold text-3xl mb-5">About Us</h3>
            <p className="text-center text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptas optio nam mollitia exercitationem atque iste, sed magni
              dolore consectetur. At error veniam itaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
