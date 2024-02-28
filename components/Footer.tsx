import React from "react";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full p-20 flex justify-between items-center bg-red-500">
      <div className="flex">
        <div className = 'rounded-full bg-white p-10'>
          <BsTelephone
            size={30}
            className="text-red-500 "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
