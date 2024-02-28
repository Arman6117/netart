import Link from "next/link";
import React from "react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full p-20 flex flex-wrap gap-12 justify-between items-center bg-red-500">
      <div className="flex items-center space-x-6">
        <div className = 'rounded-full bg-white p-2'>
          <BsTelephoneFill
            size={20}
            className="text-red-500 "
          />
        </div>
        <p className="text-white">Toll Free {' '}<span className="font-bold">1800 200 1234</span></p>
      </div>
      <div className="flex items-center space-x-6">
        <div className = 'rounded-full bg-white p-2'>
          <RiFacebookFill
            size={20}
            className="text-red-500 "
          />
        </div>
        <Link href={'www.facebook.com/cripumps'} className="text-white">www.facebook.com/cripumps</Link>
      </div>
      <div className="flex items-center space-x-6">
        <div className = ''>
          <FaGlobe
            size={26}
            className="text-white "
          />
        </div>
        <Link href={'www.crigroups.com'} className="text-white">www.crigroups.com</Link>
      </div>
    </div>
  );
};

export default Footer;
