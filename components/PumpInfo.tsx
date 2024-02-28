import Image from "next/image";
import React from "react";

const PumpInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-9 text-center">
      <h1 className="md:text-sm text-xs font-semibold">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h1>
      <div>
        <Image src={"/assets/3.png"} width={1000} height={1000} alt="pumps" />
      </div>
      <p className="md:text-xs text-[10px] font-bold">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <div className="w-full bg-red-600 h-[2px]" />
    </div>
  );
};

export default PumpInfo;
