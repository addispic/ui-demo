import React from "react";

// icons
import { SiEagle } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white pt-12 pb-5">
      <div className="main-padding flex flex-col">
        {/* top */}
        <div className="flex items-center justify-between gap-12">
          <div>
            <div className="flex items-center gap-x-1.5 text-neutral-300">
              <SiEagle className="text-3xl" />
              <span className="font-black text-xl">addispic</span>
            </div>
            {/* social */}
            <div className="mt-5 flex items-center gap-x-3">
              <div className="w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-15 text-lg">
                <TiSocialFacebook />
              </div>
              <div className="w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-15 text-sm">
                <FaTwitter />
              </div>

              <div className="w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-15 text-sm">
                <FaInstagramSquare />
              </div>
            </div>
          </div>
          <div className="text-neutral-300">
            <h3 className="text-lg font-medium">Contact us</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className="max-w-[250px] text-xs my-1.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ullam nam et!</p>
            <p>addispik@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Subscribe</h3>
            <p className="my-2.5 text-sm">Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center gap-x-1.5 px-1.5 py-1 bg-neutral-700 text-white rounded-md text-sm">
              <input className="w-full focus:outline-none focus:ring-0 border-none bg-transparent" type="text" placeholder="Email" />
              <MdEmail />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="border-t border-neutral-600 pt-3 flex items-center justify-end mt-3">
          <p className="text-sm text-neutral-500">Powered by <span className="font-bold">addispik</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
