import React from 'react'

// icons
import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RxExit } from "react-icons/rx";

const Header = () => {
  return (
    <header className='flex items-center gap-x-24 px-5 py-3'>
      {/* search */}
      <div className='flex-1 flex items-center gap-x-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-full'>
        <CiSearch className='text-2xl text-neutral-500'/>
        <input className='w-full focus:ring-0 focus:outline-none bg-transparent border-none' type="text" placeholder='Search courses' />
      </div>
      {/* right */}
      <div className='flex items-center gap-x-3'>
        {/* alert */}
        <div className='flex items-center gap-x-3'>
          <div className='w-[28px] aspect-square rounded-full border border-neutral-300 bg-neutral-50 flex items-center justify-center text-lg text-neutral-500 cursor-pointer'>
            <MdEmail />
          </div>
          <div className='w-[28px] aspect-square rounded-full border border-neutral-300 bg-neutral-50 flex items-center justify-center text-lg text-neutral-500 cursor-pointer'>
            <IoIosNotifications />
          </div>
        </div>
        {/* bar */}
        <div className='h-[28px] w-[1.5px] bg-neutral-400 shrink-0'></div>
        {/* user */}
        <div className='flex items-center gap-x-1.5'>
          {/* image */}
          <div className='w-[28px] aspect-square rounded-full overflow-hidden'>
            <img className='w-full object-center object-cover' src="/addis-i.jpg" alt="" />
          </div>
          {/* username */}
          <div className='text-sm text-neutral-500'>
            <span>Addis F.</span>
          </div>
        </div>
        {/* logout */}
        <button className='flex items-center text-sm gap-x-1 px-1.5 py-0.5 rounded-sm bg-neutral-500 text-white transition-colors ease-in-out duration-150 hover:bg-neutral-700'>
          <RxExit />
          <span>Logout</span>
        </button>
      </div>
    </header>
  )
}

export default Header