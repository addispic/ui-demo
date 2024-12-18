import React, { useState } from "react";

const Header = () => {
  // links
  const [links, setLinks] = useState([
    {
      text: "Home",
    },
    {
      text: "Histories",
    },
    {
      text: "Nature",
    },
    {
      text: "Blogs",
    },
    {
      text: "About Us",
    },
  ]);
  return (
    <div className="absolute left-0 top-0 w-full bg-transparent z-50">
      <div className="main-padding flex items-center justify-between text-neutral-300 py-3">
        <h3 className="text-2xl font-black cursor-pointer">addispic</h3>
        <div>
          {/* links */}
          <div className="flex items-center gap-x-1.5">
            {links.map((item, index) => {
              return (
                <div
                  key={item.text}
                  className="px-0.5 py-0.5 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-neutral-300 after:rounded-full after:transition-all after:ease-in-out after:duration-150 hover:after:w-full cursor-pointer"
                >
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
