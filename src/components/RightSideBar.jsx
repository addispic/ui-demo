import React from "react";
import Chart from "react-apexcharts";

// icons
import { IoMdMore } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiUserPlus } from "react-icons/hi2";

const RightSideBar = () => {
  return (
    <div className="w-0 xl:w-72 xl:px-5 py-3 pt-0 xl:pt-3 flex xl:relative translate-x-0 ease-in-out duration-150 absolute right-0 top-0 h-full z-30 overflow-hidden" id="right-side-bar">
      <div className="flex-1 bg-white rounded-xl overflow-hidden p-3">
        {/* header */}
        <header className="flex items-center justify-between">
          {/* left */}
          <h3 className="text-lg text-green-500">Statics</h3>
          {/* right */}
          <IoMdMore className="text-xl text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
        </header>
        {/* image */}
        <div className="flex items-center justify-center my-3">
          <div className="relative w-[105px] aspect-square rounded-full border border-green-200 border-r-green-500 border-l-transparent flex items-center justify-center -rotate-45">
            {/* percent */}
            <div className="absolute right-[-12px] rotate-45 rounded-full top-12 bg-green-500 text-white text-xs font-medium p-0.5 z-40">
              <span>64%</span>
            </div>
            {/* image */}
            <div className="w-[90px] aspect-square rounded-full overflow-hidden rotate-45">
              <img
                className="w-full h-full object-center object-cover"
                src="/addis-i.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* greetings */}
        <div className="text-center max-w-[230px] mx-auto">
          <h3 className="font-medium my-0.5">Good Morning Addis !</h3>
          <p className="text-xs text-neutral-500">
            Continue your learning to achieve your target
          </p>
        </div>
        {/* chart */}
        <div className="my-5 px-3 py-1 bg-neutral-100 rounded-md overflow-hidden">
          <Chart
            type="bar"
            width={"100%"}
            height={110}
            series={[
              {
                data: [200, 210, 170, 250,120,150,300,200],
              },
              
            ]}
            options={{
              chart: {
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
              },
              
              dataLabels: {
                enabled: false
              },
              colors: ["#1bb32f"],
              grid: {
                show: false,
                padding: {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                },
                
              },
              xaxis: {
                axisTicks: {
                  show: false
                },
                axisBorder: {
                  show: false,
                },
                labels: {
                  show: true
                },
                categories: ["Mo","Tu","We","Th","Fr","Sa", "Su","Mo"]
              },
              yaxis: {
                axisTicks: {
                  show: false
                },
                axisBorder: {
                  show: false
                },
                labels: {
                  show: false
                }
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '75%',
                  borderRadius: 5,
                  borderRadiusApplication: "around"
                }
              }
            }}
          />
        </div>
        {/* mentors */}
        <div>
          <header className="flex items-center justify-between">
            <h3 className="font-medium text-neutral-700">Your mentors</h3>
            <IoIosAddCircleOutline className="text-2xl text-green-500 transition-colors ease-in-out duration-150 hover:text-green-400 cursor-pointer" />
          </header>
          <div className="p-3 rounded-md overflow-hidden bg-neutral-100 mt-3">
            {[...Array(2)].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 border-b border-neutral-200 last:border-transparent"
                >
                  <div className="flex items-center gap-x-1.5">
                    <div className="w-[20px] aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-center object-cover"
                        src="https://i.pinimg.com/originals/a0/60/be/a060be70906ff02fea00add1144e4ad7.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <p>Tadios Kiruble</p>
                      <p className="text-xs -mt-1 text-neutral-500">Mentor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1.5 text-xs text-green-500 border border-green-500 px-1 py-0.5 rounded-full cursor-pointer">
                    <HiUserPlus />
                    <span>Follow</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
