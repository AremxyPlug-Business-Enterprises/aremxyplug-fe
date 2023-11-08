import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import DarkModeToggle from "../DashboardComponents/DarkModeToggle";
import styles from "./Dashboard.module.css";

export const TopBar = () => {
  const { setToggleSideBar, isDarkMode, toggleSideBar, logout, setLogout } =
    useContext(ContextProvider);

  const toggleTrueFalse = () => {
    setToggleSideBar(true);
    setLogout(false);
  };
  const toggleTrueFalse2 = () => {
    setToggleSideBar(false);
    setLogout((prev) => !prev);
  };

  return (
    <div
      className={`${styles.topbar} ${
        toggleSideBar ? "sticky top-0 " : "sticky top-0"
      } z-40 mt-[14px] flex gap-[4%] justify-center md:gap-[9%] md: lg:mt-[18px] lg:gap-[15%] ${
        isDarkMode
          ? "bg-black border-b-[1px] border-b-[#fff]"
          : "bg-white md:border-b-[1px] lg:border-b-[1.5px] lg:border-b-[#0003]]"
      } `}
    >
      <img
        onClick={toggleTrueFalse}
        className="cursor-pointer w-[21px] h-[21px] md:h-[30.9px] md:w-[30.9px] lg:h-[52px] lg:w-[52px]"
        src="./Images/dashboardImages/menularge.png"
        alt="/harmburger"
      />
      <div
        className={`${styles.topbarcom} flex items-center gap-[29px] md:gap-[70px] lg:gap-[152px] border-b-[0.3px] md:border-b-0 border-[#0003] pb-[2%] lg:pb-[1.2%]`}
      >
        <div
          className={`${
            isDarkMode ? "border border-[#fff]" : "border-[#0003]"
          } cursor-pointer flex justify-between items-center px-[2%] w-[102px] h-[17px] border-[0.5px] rounded-[3.4px] md:h-[33.8px] md:w-[202px] lg:border-[1.5px] lg:rounded-[10px] lg:w-[358px] lg:h-[60px]`}
        >
          <div className="flex justify-center items-center gap-[3px] lg:gap-[7px]">
            <img
              className="w-[7px] h-[7px] md:h-[15.75px] md:w-[15.75] lg:h-[24px] lg:w-[24px]"
              src="./Images/dashboardImages/largeprofile.png"
              alt="/"
            />
            <p className="text-[7px] md:text-[14px] lg:text-[16px] lg:font-extrabold">
              Switch Account
            </p>
          </div>
          <img
            className="h-[7px] w-[7px] md:w-[15.7px] md:h-[15.7px] lg:h-[22px] lg:w-[22px]"
            src="./Images/dashboardImages/arrow-downlarge.png"
            alt="/"
          />
        </div>

        <p className="text-[8px] md:text-[14.167px] lg:text-[18px]">
          Dashboard
        </p>

        <div className="flex justify-center items-center gap-[5px] md:gap-[10px]">
          <div className="cursor-pointer flex items-center text-[7px] md:text-[13.8px] lg:text-[12px] lg:font-extrabold gap-[3px] md:gap-[6px]">
            <p>Light</p>
            <DarkModeToggle />
            <p>Dark</p>
          </div>
          <Link to="/notifications">
          <img
            className="cursor-pointer w-[12px] h-[12px] md:w-[16px] md:h-[16px] lg:w-[28px] lg:h-[28px]"
            src="./Images/dashboardImages/notificationlarge.png"
            alt="notification"
            notifications
          />
          </Link>
          <img
            onClick={toggleTrueFalse2}
            className="cursor-pointer w-[20px] h-[10px] md:w-[40px] md:h-[20px] rounded-[2.3px] lg:w-[65px] lg:h-[34px]"
            src="./Images/dashboardImages/largedoor.png"
            alt="notification"
          />
        </div>
        {logout && (
          <ul
            className={`z-[99px] border drop-shadow-xl absolute top-[95%] right-[7%]  ml-[12px] mt-[px] rounded-[3px] w-[75px] md:top-[95%] md:w-[114px] lg:rounded-[6px] lg:right-[5%] lg:top-[95%] lg:w-[200px] lg:ml-[19px] ${
              isDarkMode
                ? "bg-[#000] text-[#fff] border-[#fff]"
                : "bg-[#ffffff] text-[#000] "
            }`}
          >
            <li className="z-[99px] ursor-pointer hover:underline pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
              My Profile
            </li>
            <li className="cursor-pointer hover:underline pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
              Contact Support
            </li>
            <Link to="/Login">
              <li className="z-[99px] cursor-pointer hover:underline pt-1 pb-1 pl-1 text-[5px] font-medium md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                Logout
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};
