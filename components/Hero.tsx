import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>

    <div className="">
          <Image
            src={"/assets/1.png"}
            alt="trophy"
            width={900}
            height={900}
            className="max-w-[100%] xl:max-w-[75%]"
          />
        </div>
        <div className="mt-10 flex flex-col space-y-3 px-10">
          <div className="flex flex-col ">
            <h1 className="font-bold ">
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <ul className="ml-6 mt-4 ">
              <li className="list-disc">
                <span className="text-xs font-medium">
                  C.R.I.&apos;s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </span>
              </li>
              <li className="list-disc">
                <span className="text-xs font-medium">
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src={"/assets/2.png"}
            alt="trophy"
            width={700}
            height={700}
            className="max-w-[80%]  "
            />
          <p className="text-xs font-medium">
            Government of India has awarded the &rdquo;National Energy
            Conservation Award 2018&ldquo;. Mr. G. Selvaraj, Joint Managing
            Director of C.R.I. Group received the award from Smt. Sumitra
            Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
            Minister of State.
          </p>
        </div>
            </>
  )
}

export default Hero