import React from "react";

const segments = [
  "CHEMICALS & PROCESS",
  "POWER",
  "WATER & WASTE WATER",
  "OILS & GAS",

  "PHARMA",
  "SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR",
  "BUILDING",
  "HVAC",
  "FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL",
];
const Segments = () => {
  return (
    <div className="flex flex-col space-y-11 text-center justify-center items-center">
      <h1 className="md:text-lg  font-bold">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h1>
      <div className="flex flex-wrap justify-center  ">
        {segments.map((segment, index) => (
            <div key={segment } className={`flex flex-wrap px-2  ${index !== segments.length - 1 ? 'border-r-2 border-red-500' : ''}`}>

          <span className="text-xs font-semibold w-full" key={segment}>{segment}</span>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Segments;
