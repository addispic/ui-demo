import React from "react";

// icons
import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  // actions
  const rightSideBarToggler = () => {
    const element = document.getElementById("right-side-bar");
    if (element?.classList.contains("absolute")) {
      if (element?.classList.contains("w-72")) {
        element?.classList.remove("w-72");
        element?.classList.add("w-0");
      } else {
        element?.classList.remove("w-0");
        element?.classList.add("w-72");
      }
    }
  };
  const leftSideBarTogglerHandler = () => {
    const element = document.getElementById("left-side-bar");
    if (element?.classList.contains("absolute")) {
      if (element?.classList.contains("w-0")) {
        element?.classList.remove("w-0");
        element?.classList.add("w-52");
        element?.classList.add("px-5");
        element?.classList.add("py-4");
      } else {
        element?.classList.remove("w-52");
        element?.classList.remove("px-5");
        element?.classList.remove("py-4");
        element?.classList.add("w-0");
      }
    }
  };
  return (
    <header className="flex items-center px-5 py-3 gap-x-1.5">
      {/* search */}
      <div className="flex-1 flex items-center gap-x-3">
        <RiMenu2Fill onClick={leftSideBarTogglerHandler} className="lg:hidden text-2xl text-neutral-500 transition-colors ease-in-out duration-150 hover:text-green-500 cursor-pointer" />
        <div className="flex-1 min-w-[120px]  max-w-[500px] flex items-center gap-x-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-full">
          <CiSearch className="text-2xl text-neutral-500" />
          <input
            className="w-full focus:ring-0 focus:outline-none bg-transparent border-none"
            type="text"
            placeholder="Search courses"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-x-3">
        {/* alert */}
        <div className="flex items-center gap-x-3">
          <div className="w-[28px] aspect-square rounded-full border border-neutral-300 bg-neutral-50 flex items-center justify-center text-lg text-neutral-500 cursor-pointer">
            <MdEmail />
          </div>
          <div className="w-[28px] aspect-square rounded-full border border-neutral-300 bg-neutral-50 flex items-center justify-center text-lg text-neutral-500 cursor-pointer">
            <IoIosNotifications />
          </div>
        </div>
        {/* bar */}
        <div className="h-[28px] w-[1.5px] bg-neutral-400 shrink-0"></div>
        {/* user */}
        <div className="flex items-center gap-x-1.5">
          {/* image */}
          <div className="w-[28px] aspect-square rounded-full overflow-hidden">
            <img
              className="w-full object-center object-cover"
              src="/addis-i.jpg"
              alt=""
            />
          </div>
          {/* username */}
          <div className="text-sm text-neutral-500 hidden md:inline-block">
            <span>Addis F.</span>
          </div>
        </div>
        {/* logout */}
        <button className="hidden md:flex items-center text-sm gap-x-1 px-1.5 py-0.5 rounded-sm bg-neutral-500 text-white transition-colors ease-in-out duration-150 hover:bg-neutral-700">
          <RxExit />
          <span>Logout</span>
        </button>
        {/* more */}
        <IoMdMore
          onClick={rightSideBarToggler}
          className="cursor-pointer text-3xl text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-700 xl:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
