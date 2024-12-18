import React, { useState } from "react";

// icons
import { RiGraduationCapFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { MdOutlineGroupAdd } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const LeftSideBar = () => {
  // states
  // overview
  const [overview, setOverview] = useState({
    options: [
      {
        icon: MdDashboard,
        text: "Dashboard",
      },
      {
        icon: MdOutlineMoveToInbox,
        text: "Inboxes",
      },
      {
        icon: MdContentPasteSearch,
        text: "Lessons",
      },
      {
        icon: GoTasklist,
        text: "Tasks",
      },
      {
        icon: MdOutlineGroupAdd,
        text: "Groups",
      },
    ],
    selected: "Dashboard",
  });
  // friends
  const [friends, setFriends] = useState([
    {
      image:
        "https://i.pinimg.com/originals/a0/60/be/a060be70906ff02fea00add1144e4ad7.jpg",
      name: "Andualem Chane",
      status: "Friend",
    },
    {
      image:
        "https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d",
      name: "Gedion Agmas",
      status: "Old Friend",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa&pid=Api&P=0&h=220",
      name: "ዘድንግል ተሾመ",
      status: "Friend",
    },
  ]);
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
    <div
      className="lg:w-52 w-0 transition-all ease-in-out duration-150 bg-white lg:px-5 lg:py-4 flex flex-col lg:relative absolute left-0 top-0 h-full z-40 overflow-hidden"
      id="left-side-bar"
    >
      {/* top */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1.5 cursor-pointer">
            <RiGraduationCapFill className="text-2xl text-green-500" />
            <h3 className="font-black">
              <span>addis</span>
              <span className="text-green-500">PIC</span>
            </h3>
          </div>
          <AiOutlineClose
            onClick={leftSideBarTogglerHandler}
            className="text-neutral-500 cursor-pointer lg:hidden transition-colors ease-in-out duration-150 hover:text-green-500 text-2xl"
          />
        </div>
        {/* overview */}
        <div className="mt-10">
          <h3 className="text-xs text-neutral-400 my-1">OVERVIEW</h3>
          {/* links */}
          <div>
            {overview.options.map((item) => {
              return (
                <div
                  onClick={() => {
                    leftSideBarTogglerHandler();
                    setOverview((prev) => {
                      return {
                        ...prev,
                        selected: item.text,
                      };
                    });
                  }}
                  key={item.text}
                  className="flex items-center gap-x-2.5 cursor-pointer px-1 rounded-md transition-colors ease-in-out duration-150 hover:bg-neutral-100 py-1 text-neutral-700"
                >
                  {/* icon */}
                  <item.icon
                    className={`text-lg transition-colors ease-in-out duration-150 ${
                      overview.selected === item.text
                        ? "text-green-500"
                        : "text-neutral-500"
                    }`}
                  />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* friends */}
        <div className="mt-7">
          <h3 className="text-xs text-neutral-400 my-1">FRIENDS</h3>
          <div>
            {friends.map((friend) => {
              return (
                <div
                  key={friend.name}
                  className="flex items-center gap-x-1.5 py-1 px-1"
                >
                  {/* image */}
                  <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src={friend.image}
                      alt=""
                    />
                  </div>
                  {/* detail */}
                  <div className="text-sm text-neutral-700">
                    <p>{friend.name}</p>
                    <p className="text-xs text-neutral-500 -mt-1">
                      {friend.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div>
        <h3 className="text-xs text-neutral-400 my-1 uppercase">Settings</h3>

        <div className="flex items-center gap-x-1.5 px-1 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700 text-sm cursor-pointer mb-3">
          <MdOutlineSettingsSuggest className="text-lg" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-x-1.5 px-1 text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700 text-sm cursor-pointer mb-3">
          <RxExit className="text-[.975rem]" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
