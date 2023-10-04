import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Calender } from "./Calender";
import styles from "./component.module.css";

export const RecentTransaction = () => {
  const { toggleSideBar, isDarkMode } = useContext(ContextProvider);
  const [calender, setCalender] = useState(false);
  return (
    <div className="mb-[25%]">
      <div className="flex items-center gap-[10px] md:">
        <p className={styles.InOutText}>Recent Transactions</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      <div
        className={`${
          toggleSideBar
            ? "lg:gap-[px] lg:text-[20px]"
            : "lg:gap-[118px] lg:text-[23px]"
        } my-[10%] flex text-[8px] font-extrabold gap-[8px] md:my-[5%] md:text-[20px] md:gap-[39px] `}
      >
        <div
          onClick={() => {
            setCalender((prev) => !prev);
          }}
          className={`cursor-pointer ${styles.filter} ${
            isDarkMode ? "border" : ""
          } flex items-center gap-[1px] px-[2px] rounded-[3px] md:px-[8px]`}
        >
          <div className={`text-[#04177f]`}>Filter by Date </div>
          <img
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/dateImg.png"
            alt=""
          />
        </div>
        <Link to="/wallet-summary">
        <div
          className={`${
            isDarkMode ? "border" : "bg-[#04177f]"
          } text-white rounded-[7px] px-[5px] py-[5px] md:rounded-[11px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
        >
          Wallet Summary
        </div>
        </Link>
        <Link to="/sales-summary">
        <div
          className={`${
            isDarkMode ? "border" : "bg-[#04177f]"
          } text-white rounded-[7px] px-[5px] py-[5px] md:rounded-[11px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
        >
          Sales Summary
        </div>
        </Link>
        <div
          className={`${
            isDarkMode ? "border" : "bg-[#04177f]"
          } text-white rounded-[7px] px-[5px] py-[5px] flex items-center md:rounded-[11px] md:px-[7px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[18px]`}
        >
          Download Stat.
          <img
            className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/downloadicon.png"
            alt=""
          />
        </div>
      </div>

      {calender && <Calender />}

      <div
        className={`${styles.viewTransact} ${
          isDarkMode ? "bg-black border" : "bg-white"
        }`}
      >
        <div
          className={`${
            toggleSideBar
              ? "lg:text-[15px] "
              : "lg:text-[20px] lg:h-[44px] lg:md:gap-[10%]"
          } ${
            isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
          } hidden font-extrabold md:flex md:h-[34px] md:justify-center md:items-center md:gap-[9%] mb-[13%] `}
        >
          <div>Products</div>
          <div>Description</div>
          <div>Order No</div>
          <div>Amount</div>
          <div>Date & Time</div>
          <div>Status</div>
        </div>

        <div className={`${styles.viewTransactions} `}>
          <img
            className={styles.noTransactions}
            src="./Images/Dashboardimages/noTransactionFound.png"
            alt=""
          />
          <div className={styles.viewAll}>
            <div className={styles.viewText}>View all transactions</div>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/empty-wallet-add.png"
              alt=""
            />
          </div>
          <div
            className={`${
              isDarkMode ? "" : "text-[#0003]"
            } text-[15px]  md:text-[27px] lg:text-[40px]`}
          >
            No Transaction Found !
          </div>
          <div className="flex gap-[15px] items-center">
            <div className="text-[8px] md:text-[12px] lg:text-[14px]">
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
      </div>
    </div>
  );
};
