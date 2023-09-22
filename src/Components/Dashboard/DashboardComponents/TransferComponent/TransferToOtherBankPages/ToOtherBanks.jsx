import React, { useContext } from "react";
import { useState } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import GlobalTransfer from "./GlobalTransfer";
import { InternationalTransfer } from "./InternationalTransfer";
import { Link } from "react-router-dom";

export const ToOtherBanks = () => {
    const { handleActive, activeButton, isDarkMode } =
    useContext(ContextProvider);

  const [globalTransfer, setGlobalTransfer] = useState(true);
  const [internationalTransfer, setinternationalTransfer] = useState(false);

  return (
    <DashBoardLayout>
      <div className="flex flex-col h-full justify-between md:h-full lg:gap-[200px] lg:h-full ">
        <div className="lg:h-[100%]">
          <img
            className="w-[100%] h-[80px] md:h-[180px] lg:h-[196px]"
            src="./Images/otherBanksImages/other-banks-hero.png"
            alt="/"
          />
          <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>Select Transfer type </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          <div className="flex justify-between text-[9px] md:justify-start md:gap-[28%] md:text-[14px] lg:text-[20px]">
            <div
              onClick={() => {
                handleActive(0);
                setinternationalTransfer(false);
                setGlobalTransfer(true);
              }}
              className={`${
                activeButton[0]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                  : ""
              } cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
            >
              Global Transfer
            </div>
            <div
              onClick={() => {
                handleActive(1);
                setGlobalTransfer(false);
                setinternationalTransfer(true);
              }}
              className={`${
                activeButton[1]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                  : ""
              }cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px]  md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
            >
              International Transfer
            </div>
          </div>
          <hr />
          <br/>
          {globalTransfer && <GlobalTransfer />}
          {internationalTransfer && <InternationalTransfer />}
        </div>
        <div className=" flex gap-[15px] justify-center items-center mt-[5%] pb-[5%] ">
          <div className="text-[8px] md:text-[12px] lg:text-[16px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "border " : "bg-[#04177f]"
              } text-[8px] p-1 text-white rounded-[8px] lg:text-[14px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
