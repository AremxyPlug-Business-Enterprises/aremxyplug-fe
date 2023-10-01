import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { TransferRecord } from "./TransferRecord";
import styles from "../../DashboardComponents/component.module.css";
import { ContextProvider } from "../../../Context";

export const ToMyAccountPage = () => {
  const { isDarkMode } = useContext(ContextProvider);
  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div
            style={{
              background:
                "linear-gradient(91deg, #33B6FF 0.39%, #4AFFCD 101.71%)",
            }}
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                TRANSFER MONEY TO MY ACCOUNT.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Transfer money from your wallets to your personal or business
                bank accounts without any hassle or hidden fee.
              </h2>
            </div>

            <img
              src="./Images/transferImages/ToMyAcc.png"
              alt=""
              className="w-[91px] h-[66px] md:h-[120px] md:w-[90px] lg:w-[199px] lg:h-[199px]"
            />
          </div>

          {/* ===================Mobile view====================== */}
          <div className="md:hidden flex border w-[136px] h-[20px] rounded-[5px] items-center my-[6%] md:h-[30px] md:w-[24%] lg:h-[41px] lg:w-[231px] lg:rounded-[12px] lg:justify-between lg:pr-[1%]">
            <input
              className="outline-none text-[9px] w-[115px] ml-[2%] md:text-[14px] md:w-[150px] lg:text-[16px] lg:w-[100%]"
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
            <Link to="/add-account">
              <div className="flex items-center gap-[4px] bg-[#04177f] text-white text-[9px] h-[20px] w-[136px] rounded-[5px] justify-center font-extrabold">
                <p>Add New Account</p>
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/add-account.png"
                  alt="topup"
                />
              </div>
            </Link>
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
          <div className="hidden md:flex my-[5%] items-center md:gap-[8%] justify-between">
            <div className="flex border w-[180px] rounded-[7px] h-[40px] items-center lg:w-[30%] lg:h-[41px] lg:rounded-[12px] lg:px-[5px]">
              <input
                className="outline-none text-[9px] w-[115px] ml-[2%] md:text-[14px] md:w-[150px] lg:text-[16px] lg:w-[100%]"
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
              <Link to="/add-account">
                <p>Add New Account</p>
              </Link>
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

          <TransferRecord />
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
// absolute top-[100%] left-[35%] lg:top-[220%] lg:left-[40%]
