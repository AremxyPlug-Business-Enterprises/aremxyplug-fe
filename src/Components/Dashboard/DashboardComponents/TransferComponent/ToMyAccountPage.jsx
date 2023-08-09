import React from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { TransferRecord } from "./TransferRecord";

export const ToMyAccountPage = () => {
  return (
    <DashBoardLayout>
      <div className=" lg:mt-[3%]">
        <img
          className=" w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
          src="/Images/dashboardImages/ToMyAccount.png"
          alt="/"
        />

        {/* ===================Mobile view====================== */}
        <div className="md:hidden flex border w-[136px] h-[20px] rounded-[5px] items-center my-[6%] md:h-[30px] md:w-[24%] lg:h-[41px] lg:w-[231px] lg:rounded-[12px] lg:justify-between lg:pr-[1%]">
          <input
            className="text-[9px] w-[115px] ml-[2%] md:text-[14px] md:w-[150px] lg:text-[16px] lg:w-[100%]"
            type="search"
            placeholder="Search Account"
          />
          <img
            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            src="/Images/dashboardImages/search-status.png"
            alt="/"
          />
        </div>
        <div className="md:hidden flex mb-[4%] items-center md:gap-[8%] justify-between">
          <div className="flex items-center gap-[4px] bg-[#04177f] text-white text-[9px] h-[20px] w-[136px] rounded-[5px] justify-center font-extrabold">
            <p>Add New Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[24px] lg:h-[24px]"
              src="./Images/dashboardImages/add-account.png"
              alt="topup"
            />
          </div>
          <div className="flex items-center gap-[5px] bg-[#04177f] text-white text-[9px] h-[20px] w-[136px] rounded-[5px] justify-center font-extrabold ">
            <p>Refresh Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[24px] lg:h-[24px]"
              src="./Images/dashboardImages/refresh.png"
              alt="topup"
            />
          </div>
        </div>

        {/* =======================Tablet & Desktop view================== */}
        <div className="hidden md:flex mt-[5%] items-center md:gap-[8%] justify-between">
          <div className="flex border w-[180px] rounded-[7px] h-[40px] items-center lg:w-[231px] lg:h-[41px] lg:rounded-[12px] lg:px-[5px]">
            <input
              className="text-[9px] w-[115px] ml-[2%] md:text-[14px] md:w-[150px] lg:text-[16px] lg:w-[100%]"
              type="search"
              placeholder="Search Account"
            />
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="/Images/dashboardImages/search-status.png"
              alt="/"
            />
          </div>
          <div className="flex items-center gap-[5px] bg-[#04177f] text-white text-[9px] px-[2%]  py-[2%] w-[30%] rounded-[5px] font-extrabold md:rounded-[9px] md:justify-center md:items-center md:text-[16px] md:gap-[10px] md:py-[1%] lg:text-[20px] lg:h-[41px] lg:rounded-[12px]">
            <p>Add New Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[24px] lg:h-[24px]"
              src="./Images/dashboardImages/add-account.png"
              alt="topup"
            />
          </div>
          <div className="flex items-center gap-[5px] bg-[#04177f] text-white text-[9px] px-[2%]  py-[2%] w-[30%] rounded-[5px] font-extrabold md:rounded-[9px] md:justify-center md:items-center md:text-[16px] md:gap-[10px] md:py-[1%] lg:text-[20px] lg:h-[41px] lg:rounded-[12px]">
            <p>Refresh Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[24px] lg:h-[24px]"
              src="./Images/dashboardImages/refresh.png"
              alt="topup"
            />
          </div>
        </div>

        <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[5%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
          <p>Select Account Type </p>
          <img
            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/arrowright.png"
            alt="/"
          />
        </div>

        <TransferRecord />
      </div>
    </DashBoardLayout>
  );
};
