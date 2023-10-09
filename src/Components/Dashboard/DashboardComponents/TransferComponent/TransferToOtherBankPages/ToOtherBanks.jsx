import React, { useContext } from "react";
import { useState } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import styles from "../../../DashboardComponents/component.module.css";
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
      <div className="flex flex-col justify-between lg:gap-[200px] lg:h-full">
        <div className="">
          <div
            style={{
              background:
                "linear-gradient(91deg, #33B6FF 0.39%, #4AFFCD 101.71%)",
            }}
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                TRANSFER MONEY TO OTHER BANKS.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Transfer money from your wallets to any bank accounts globally
                without any hassle or hidden fee.
              </h2>
            </div>
            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px]">
              <img
                src="./Images/transferImages/ToMyAcc.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
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
          <br />
          {globalTransfer && <GlobalTransfer />}
          {internationalTransfer && <InternationalTransfer />}
        </div>
        <div className="flex gap-[15px] justify-center items-center lg:my-10">
          <div className="text-[8px] md:text-[12px] lg:text-[16px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                styles.contactus
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
