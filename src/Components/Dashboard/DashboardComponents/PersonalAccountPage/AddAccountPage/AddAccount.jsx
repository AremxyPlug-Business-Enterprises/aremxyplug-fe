import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { BusinessAccountForm } from "./BusinessAccountForm";
import { PersonalAccountForm } from "./PersonalAccountForm";
import styles from "../../../DashboardComponents/component.module.css";
import { Link } from "react-router-dom";

export const AddAccount = () => {
  const { handleActive, activeButton, isDarkMode } =
    useContext(ContextProvider);
  const [personalAcc, setPersonalAcc] = useState(true);
  const [businessAcc, setBusinessAcc] = useState(false);

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between md:h-full lg:gap-[200px] lg:h-full lg:">
        <div className="lg:h-[100%] ">
          <div
            style={{
              background:
                "linear-gradient(91deg, #FFB57F 0.39%, #7A7FFF 101.71%)",
            }}
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                ADD NEW ACCOUNTS.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Add your new personal or business accounts to receive money
                internationally.
              </h2>
            </div>
            <div className="w-[91px] h-[66px] lg:w-[220px] lg:h-[179px]">
              <img
                src="./Images/addAccountImages/addAccount.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>Select Account type </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          <div className="flex text-[9px] gap-[15px] md:text-[14px] lg:text-[20px]">
            <div
              onClick={() => {
                handleActive(0);
                setBusinessAcc(false);
                setPersonalAcc(true);
              }}
              className={`${
                activeButton[0]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                  : ""
              } cursor-pointer w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
            >
              Personal Accounts
            </div>
            <div
              onClick={() => {
                handleActive(1);
                setPersonalAcc(false);
                setBusinessAcc(true);
              }}
              className={`${
                activeButton[1]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                  : ""
              } cursor-pointer w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px]  md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
            >
              Business Accounts
            </div>
          </div>
          <hr />

          {personalAcc && <PersonalAccountForm />}
          {businessAcc && <BusinessAccountForm />}
        </div>
        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center my-[15%] md:mt-[38%] lg:mt-[26%] lg:mb-[%]`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "border" : "bg-[#04177f]"} ${
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
