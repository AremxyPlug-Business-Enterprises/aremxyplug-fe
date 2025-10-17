import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Calender } from "./Calender";
import styles from "./component.module.css";
import TransactionHistory from "./TransactionHistory";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";

export const RecentTransaction = ({transactionResponse, transactionHistoryError, loading}) => {
  const Data = GetLocalStorage()
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
       <div className="flex justify-between gap-[5.3px] 
        md:gap-[17.75px] lg:gap-[31px] w-[100%] ">
      <div
        className={`${
          toggleSideBar
            ? "lg:gap-[px] lg:text-[20px] md:justify-between"
            : "md:justify-between lg:text-[23px]"
        } my-[5%] flex text-[8px] font-extrabold gap-[8px] 
         w-full
        justify-between md:my-[5%] md:text-[20px] md:gap-[10px] `}
      >
        <div
          className={`relative cursor-pointer 
           ${stateDateEdit !== "Filter By Date" ? "w-[20%]" : "w-[25%]"}
             ${styles.filter} ${
            isDarkMode ? "border" : ""
          } flex items-center gap-[1px] px-[2px] rounded-[3px] md:px-[8px]`}
        >
          
          <p   onClick={() => {
            if(Data?.ConfirmAcc === "true"){
                if(calender === false){
                setCalender(true);
                }else{
                  setCalender(false)
                }
              }
              }}
  className={` md:text-[9.16px] text-center
                   md:font-semibold text-[8px] font-extrabold lg:text-base
                    lg:font-extrabold ${isDarkMode ? "text-white": "text-[#04177f]"}`}>
                       { stateDateEdit}
      </p>
                     
          <img
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
            src="./Images/dashboardImages/dateImg.png"
            alt=""
          />

          {calender && (
                   <div className={`absolute rounded-[20px] 
                   md:mt-[40px] w-[300px] h-auto p-2   border-[0.2px]
                   lg:mt-[55px]  flex flex-col gap-[10px] font-[400]
                    ${isDarkMode ? "bg-black text-white  border-white" 
                    : "bg-white text-black border-gray-300"}`}>
                     {" "}
                     <Calender />
                     {" "}
                     <div onClick={()=> {
                        setCalender(false);
                        setStateDateEdit(dateEdit?.slice(0,10))
                       }}
                     className="flex justify-center 
                     items-center w-[270px]">
                       <button 
                       className={`w-full bg-blue-900 py-[15px] text-[12px] md:text-[14px] font-[500] 
                         rounded-[15px]
                         ${isDarkMode ? "text-white bg-black border-[0.2px] border-white" :
                          "text-white bg-blue-900"}`}>
                       Done
                       </button>
                       </div>
                   </div>
                 )}
        </div>
         
       
           {stateDateEdit !== "Filter By Date"  && (
                             <p   onClick={() => {
                 setStateDateEdit("Filter By Date")
              }}
  className={`${
              isDarkMode ? "border" : "bg-[#04177f] text-center text-align"
            } text-white  rounded-[7px]  w-[20%]
              py-[5px] flex items-center cursor-pointer
             justify-center md:rounded-[10px]  md:py-[8px] 
             g:rounded-[13px] 
             lg:py-[10px]  md:text-[9.16px] px-[5px]
              md:font-semibold lg:text-base lg:font-extrabold `}>
                       History
                       </p>

                      )}
          <Link to="/TransactionPage" 
            className= {`  ${stateDateEdit !== "Filter By Date" ? "w-[20%]" : "w-[25%]"} flex justify-center items-center`}>
          {" "}
          <p
             className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center
             rounded-[7px]  py-[5px] flex items-center justify-center
              md:rounded-[10px]  md:py-[8px] px-[5px]
              lg:rounded-[13px] lg:py-[10px] lg:px-[18px]
               md:text-[9.16px] md:font-semibold lg:text-base 
               lg:font-extrabold`}
          >
            Transactions
          </p>
        </Link>
        <Link to="/wallet-summary"
         className={` ${stateDateEdit !== "Filter By Date" ? "w-[20%]" : "w-[25%]"}
          flex justify-center items-center`}>
          <p
          className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center
             rounded-[7px]  py-[5px] flex items-center justify-center
              md:rounded-[10px]  md:py-[8px] px-[5px]
              lg:rounded-[13px] lg:py-[10px] lg:px-[18px]
               md:text-[9.16px] md:font-semibold lg:text-base 
               lg:font-extrabold`}
          >
            Wallet Summary
          </p>
        </Link>
        <Link to="/sales-summary"
          className={`  ${stateDateEdit !== "Filter By Date" ? "w-[20%]" : "w-[25%]"}
          flex justify-center items-center`}>
          <p  className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center
             rounded-[7px]  py-[5px] flex items-center justify-center
              md:rounded-[10px] md:px-[7px] md:py-[8px] px-[5px]
              lg:rounded-[13px] lg:py-[10px] lg:px-[18px]
               md:text-[9.16px] md:font-semibold lg:text-base 
               lg:font-extrabold`}
          >
            Sales Summary
          </p>
        </Link>
        </div>
      </div>

       
     

      <TransactionHistory transactionResponse = {transactionResponse} 
      transactionHistoryError= {transactionHistoryError} loading={loading}  stateDateEdit={stateDateEdit}/>
    </div>
  );
};
