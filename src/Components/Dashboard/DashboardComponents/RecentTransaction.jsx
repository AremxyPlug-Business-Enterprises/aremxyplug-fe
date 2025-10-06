import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Calender } from "./Calender";
import styles from "./component.module.css";
import TransactionHistory from "./TransactionHistory";

export const RecentTransaction = ({transactionResponse, transactionHistoryError, loading}) => {
  const { toggleSideBar, isDarkMode , dateEdit} = useContext(ContextProvider);
  const [calender, setCalender] = useState(false);
 const [stateDateEdit, setStateDateEdit] = useState("Filter By Date")
  return (
    <div className="mt-[15%] lg:mt-[5%]">
      <div className="flex items-center gap-[10px] md:">
        <p className={styles.InOutText}>Recent Transactions</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/dashboardImages/arrowright.png"
          alt="/"
        />
      </div>
      
      <div
        className={`${
          toggleSideBar
            ? "lg:gap-[px] lg:text-[20px] md:justify-between"
            : "md:justify-between lg:text-[23px]"
        } my-[5%] flex text-[8px] font-extrabold gap-[8px] justify-between md:my-[5%] md:text-[20px] md:gap-[39px] `}
      >
        <div
          className={`relative cursor-pointer ${styles.filter} ${
            isDarkMode ? "border" : ""
          } flex items-center gap-[1px] px-[2px] rounded-[3px] md:px-[8px]`}
        >
          <p   onClick={() => {
                if(calender === false){
                setCalender(true);
                }else{
                  setCalender(false)
                }
              }}
          className={`text-[#04177f] md:text-[9.16px]
             md:font-semibold lg:text-base lg:font-extrabold`}>{stateDateEdit} </p>
          <img
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
            src="./Images/dashboardImages/dateImg.png"
            alt=""
          />
          {calender && (
                   <div className="absolute  bg-white rounded-[15px] 
                   md:mt-[40px] w-full h-auto p-2
                   lg:mt-[55px]  flex flex-col gap-[10px] font-[400]">
                     {" "}
                     <Calender />
                     {" "}
                     <div onClick={()=> {
                        setCalender(false);
                        setStateDateEdit(dateEdit?.slice(0,10))
                       }}
                     className="flex justify-center 
                     items-center w-[300px]">
                       <button 
                       className={`w-full bg-blue-900 py-[10px]  rounded-[15px]
                         ${isDarkMode ? "text-white bg-black border-[0.2px] border-white" :
                          "text-white bg-blue-900"}`}>
                       Done
                       </button>
                       </div>
                   </div>
                 )}
        </div>
        <div className="flex justify-between gap-[10.3px] md:gap-[17.75px] lg:gap-[31px]">
          <Link to="/TransactionPage">
          {" "}
          <div
            className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white md:w-[5.83375rem] lg:w-[10.1875rem] rounded-[7px] px-[5px] py-[5px] flex items-center justify-center md:rounded-[10px] md:px-[7px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[18px] md:text-[9.16px] md:font-semibold lg:text-base lg:font-extrabold `}
          >
            <span>Transactions</span>
          </div>
        </Link>
        <Link to="/wallet-summary">
          <div
            className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white rounded-[7px] px-[5px] py-[5px] md:rounded-[10px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px] md:text-[9.16px] md:font-semibold lg:text-base lg:font-extrabold`}
          >
            Wallet Summary
          </div>
        </Link>
        <Link to="/sales-summary">
          <div
            className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white md:w-[5.83375rem] lg:w-[10.1875rem] rounded-[7px] px-[5px] py-[5px] flex items-center justify-center md:rounded-[10px] md:px-[7px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[18px] md:text-[9.16px] md:font-semibold lg:text-base lg:font-extrabold`}
          >
            Sales Summary
          </div>
        </Link>
        </div>
      </div>

       
     

      <TransactionHistory transactionResponse = {transactionResponse} 
      transactionHistoryError= {transactionHistoryError} loading={loading}  stateDateEdit={stateDateEdit}/>
    </div>
  );
};
