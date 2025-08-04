import React from "react";
import HeroComponent from "./heroComponent";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import jamblogo from "../EducationPins/imagesEducation/jamblogo.svg";
import Neco from "../EducationPins/imagesEducation/necoImg.svg";
import Nabteb from "../EducationPins/imagesEducation/NabtebImg.svg";
import Waec from "../EducationPins/imagesEducation//WaecImg.svg";

import { ContextProvider } from "../Context";
import { useContext } from "react";

export default function EducationMain() {
  const { isDarkMode } = useContext(ContextProvider);

  return (
    <DashBoardLayout>
      <div className="flex flex-col lg:h-[1000px] h-auto justify-between">
        <div className="flex flex-col">
          {/* hero section */}
          <HeroComponent />
          <div className="flex mb-5 gap-2 items-center md:gap-4 md:mb-8">
            <h2
              className={`lg:text-[20px] text-[8px] lg:text-xl md:text-[11.46px] font-medium ${
                isDarkMode ? "text-white" : "text-[#7C7C7C]"
              }`}
              // font-semibold text-[16.1px] md:text-[18px]
            >
              Select Exam Type
            </h2>

            <img
              className="self-center h-4 w-4 lg:h-6 lg:w-6 md:h-[13.75px] md:w-[13.75px]"
              src={arrowRight}
              alt="arrow"
            />
          </div>
          {/* Examinations to click to request for the pins */}
          <div
            className="flex flex-wrap justify-between w-full gap-[15px] md:h-[70px] md:flex-row md:flex-nowrap md:gap-[21.27px] lg:h-[120px]  md:w-[100%] lg:gap-[37px]"
          >
            {/* WAEC Examination */}
            <Link
              to="/WaecEducationPin"
              className={`${"md:w-1/4  md:h-[100%] h-auto w-[45%]"}
         ${
           isDarkMode
             ? "!bg-black !text-white !border !border-white rounded-[7px]"
             : "bg-white border-none border-[7px]"
         }
        `}
            >
              <div
                className="flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px] border-[0.587px] border-[solid] border-[black] border-opacity-[30%] shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] lg:border-[1px] lg:border-[black] lg:border-opacity-[30%] lg:p-[10px] lg:rounded-[5px] lg:gap-[6px]  cursor-pointer"
              >
                {/* Waec Logo */}
                <img className="md:w-1/2 w-[42%]" src={Waec} alt="Waec logo" />
                {/* text */}
                <h2
                  className="w-1/2 font-semibold text-[13px] leading-[12.675px] md:text-[10.563px] md:leading-[12.675px] lg:text-[18px] lg:leading-[21.6px] self-center"
                >
                  WAEC
                </h2>
              </div>
            </Link>
            {/* Neco Examination */}
            <Link
              to="/NecoEducationPin"
              className={`${"md:w-1/4 md:h-[100%] h-auto w-[45%]"}
                          ${
                            isDarkMode
                              ? "!bg-black !text-white !border !border-white rounded-[7px]"
                              : "bg-white border-none border-[7px]"
                          }`}
            >
              <div className="flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px] border-[0.587px] border-[black] border-opacity-[30%] shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] lg:border-[1px] lg:border-[black] lg:border-opacity-[30%] lg:p-[10px] lg:rounded-[5px] lg:gap-[6px]  cursor-pointer">
                {/* Neco Logo */}
                <img className="md:w-1/2 w-[42%]" src={Neco} alt="Waec logo" />
                {/* text */}
                <h2
                  className="w-1/2 font-semibold text-[13px] leading-[12.675px] md:text-[10.563px] md:leading-[12.675px] lg:text-[18px] lg:leading-[21.6px] self-center"
                >
                  NECO
                </h2>
              </div>
            </Link>
            {/* Nabteb Examination */}
            <Link
              to="/NabtebEducationPin"
              className={`${"md:w-1/4 md:h-[100%] h-auto w-[45%]"}
         ${
           isDarkMode
             ? "!bg-black !text-white !border !border-white rounded-[7px]"
             : "bg-white border-none border-[7px]"
         }
        `}
            >
              <div
                className="flex h-[100%] p-[7.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px] border-[0.587px] border-[black] border-opacity-[30%] shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] lg:border-[1px] lg:border-[black] lg:border-opacity-[30%] lg:p-[10px] lg:rounded-[5px] lg:gap-[6px]  cursor-pointer "
              >
                {/* Nabteb Logo */}
                <img
                  className="md:w-1/2 w-[38%]"
                  src={Nabteb}
                  alt="Waec logo"
                />
                {/* text */}
                <h2
                  className="w-1/2 font-semibold text-[13px] leading-[12.675px] md:text-[10.563px] md:leading-[12.675px] lg:text-[18px] lg:leading-[21.6px] self-center"
                >
                  NABTEB
                </h2>
              </div>
            </Link>
            {/* Jamb Examination */}
            <Link
              to="/JambEducationPin"
              className={`${"md:w-1/4 md:h-[100%] h-auto w-[45%]"}
          ${
            isDarkMode
              ? "!bg-black !text-white !border !border-white rounded-[7px]"
              : "bg-white border-none border-[7px]"
          }
        `}
            >
              <div
                className="flex h-[100%] p-[6.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px] border-[0.587px] border-[black] border-opacity-[30%] shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] lg:border-[1px] lg:border-[black] lg:border-opacity-[30%] lg:p-[10px] lg:rounded-[5px] lg:gap-[6px]  cursor-pointer"
              >
                {/* Jamb Logo */}
                <img
                  className="md:w-1/2 w-[40%]"
                  src={jamblogo}
                  alt="Waec logo"
                />
                {/* text */}
                <h2
                  className="w-1/2 font-semibold text-[13px] leading-[12.675px] md:text-[10.563px] md:leading-[12.675px] lg:text-[18px] lg:leading-[21.6px] self-center"
                >
                  JAMB
                </h2>
              </div>
            </Link>
          </div>
        </div>

        {/* contact us */}
        <div className="flex gap-3 md:gap-6 justify-center px-4 mt-[100%] md:mt-8 mb-[25%] ">
          <p
            className={`${"font-medium text-[12px] md:text-[12px] lg:text-[16px] self-center text-black"}
                   ${isDarkMode ? "!text-white md:text-base !text-[12px]" : ""}
          `}
          >
            You need help?
          </p>
          <Link
            to="/contactUs"
            className={`${
              isDarkMode ? "bg-[#04177f] " : "bg-[#04177f]"
            } text-[12px] p-1.5 text-white rounded-[8px] lg:text-base`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}
