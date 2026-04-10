import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Calender } from "./Calender";
import styles from "./component.module.css";
import TransactionHistory from "./TransactionHistory";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import closeCircle from "../../EducationPins/imagesEducation/close-circle.svg"

export const RecentTransaction = ({transactionResponse, transactionHistoryError, loading, GetTransactionInformation}) => {
  const Data = GetLocalStorage()
  const { toggleSideBar, isDarkMode ,setEditCalenderOne,
     editCalenderOne,editCalenderTwo, startDateValueState,
     setCountCalender,endDateValueState,
      setEditCalenderTwo, setCurrentDateInTimeStamps, setStartDateValueState, setEndDateValueState} = useContext(ContextProvider);
  const [calender, setCalender] = useState(false);
 const [stateDateEdit, setStateDateEdit] = useState("Filter By Date");
 
 const handleCalenderState = async()=> {
   setStartDateValueState("");
  setEndDateValueState("");
  setCurrentDateInTimeStamps(0);
  setCountCalender(0);
  setCalender(false);
  setEditCalenderOne("Start Date");
  setEditCalenderTwo("End Date");
  setStateDateEdit("Filter By Date");
  await GetTransactionInformation(false)

 } 

 const FilterDate = async()=> {
  setCalender(false);
  setStateDateEdit(()=> {
    if(editCalenderOne !== "Start Date" && editCalenderTwo === "End Date" ){
     return <p>{startDateValueState}</p>
    }else if(editCalenderOne !== "Start Date" && editCalenderTwo !== "End Date" ){
   return <div className="flex flex-col gap-[5px]">
    <p className  ="lg:text-[12px] lg:leading-[16px] text-[#04177f] text-[8px] leading-[12px]">
      {startDateValueState}
      </p>
    <p  className  ="lg:text-[12px] text-[#04177f] lg:leading-[16px] text-[8px] leading-[12px]">
      {endDateValueState}</p>
   </div>
    }else if(editCalenderOne === "Start Date" && editCalenderTwo === "End Date" ){
   setStateDateEdit(()=> {
     return <p>{startDateValueState}</p>
   })
    }
  })
  await GetTransactionInformation(calender);
 }
 const returnHistory = async()=> {
  setStateDateEdit("Filter By Date");
   handleCalenderState();
  await GetTransactionInformation(calender);
}
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
        md:gap-[17.75px] lg:gap-[31px] w-[100%]">
      <div
        className={`  h-[35px] lg:h-[40px]  ${
          toggleSideBar
            ? "lg:gap-[px] lg:text-[20px] md:justify-between"
            : "md:justify-between lg:text-[23px]"
        } my-[5%] flex text-[8px] font-extrabold gap-[8px] 
         w-full 
        justify-between md:my-[5%] md:text-[20px] md:gap-[10px] `}
      >
        <div
          className={`relative cursor-pointer h-[100%]
           ${stateDateEdit !== "Filter By Date" ? "w-[30%]" : "w-[25%]"}
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
              }else{
                alert("This feature can only be accessed by users with virtual account.")
              }
              }}
  className={` md:text-[9.16px] text-center py-[2px]
                   md:font-semibold text-[8px] font-extrabold lg:text-base
                    lg:font-extrabold ${isDarkMode ? "text-white": "text-[#04177f]"}`}>
                       {stateDateEdit}
      </p>
                     
          <img
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
            src="./Images/dashboardImages/dateImg.png"
            alt=""
          />
            {stateDateEdit !== "Filter By Date" && stateDateEdit !== undefined && (
                          <img 
                          onClick = {()=> returnHistory()}
                          className="absolute right-[5px] ml-[10px] lg:pr-[5px] w-[20px] h-[20px] md:w-[17px] 
                          md:h-[17px] lg:w-[30px] lg:h-[30px] align-self"
                          src={closeCircle} alt="" />
                          )}

          {calender && (
                   <div className={`absolute rounded-[20px] 
                   md:mt-[40px] w-[300px] md:w-[500px] lg:w-[600px] h-auto p-2   border-[0.2px]
                   lg:mt-[55px]  flex flex-col gap-[10px] font-[400]
                    ${isDarkMode ? "bg-black text-white  border-white" 
                    : "bg-white text-black border-gray-300"}`}>
                     {" "}
                     
                     <Calender  />
                     {" "}
                             <div
                     className="flex justify-center 
                     items-center w-[270px] md:w-[470px] lg:w-[570px] gap-[10px]">
                       <button  onClick={handleCalenderState}
                       className={`w-[50%] md:w-[150px]  bg-blue-white py-[15px] text-[12px] 
                        md:text-[14px] font-[500] 
                         rounded-[15px] border-[0.2px] border-blue-900
             ${isDarkMode ? "text- bg-black" :
                          " bg-white text-blue-900 " }`}>
                       Cancel
                       </button>
                       <button 
                        onClick={FilterDate}
                       className={`w-[50%] md:w-[150px]  bg-blue-900 py-[15px] text-[12px] md:text-[14px] font-[500] 
                         rounded-[15px] text-white
                       `}>
                       Apply
                       </button>
                       </div>
                   </div>
                 )}
        </div>
         
       
          
          <Link to="/TransactionPage" 
            className= { ` ${stateDateEdit !== "Filter By Date" ? "w-[23.3%]" : "w-[25%]"}
             flex justify-center items-center`}>
          {" "}
          <p
             className={`
             ${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center
             rounded-[7px] py-[2px] flex items-center justify-center
              md:rounded-[10px]  md:py-[8px] px-[5px] h-[100%]
              lg:rounded-[13px] lg:py-[10px] lg:px-[18px]
               md:text-[9.16px] md:font-semibold lg:text-base 
               lg:font-extrabold`}
          >
            Transactions
          </p>
        </Link>
        <Link to="/wallet-summary"
         className={` ${stateDateEdit !== "Filter By Date" ? "w-[23.3%]" : "w-[25%]"}
          flex justify-center items-center`}>
          <p
          className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center py-[2px] h-[100%]
             rounded-[7px]   flex items-center justify-center
              md:rounded-[10px]  md:py-[8px] px-[5px]
              lg:rounded-[13px] lg:py-[10px] lg:px-[18px]
               md:text-[9.16px] md:font-semibold lg:text-base 
               lg:font-extrabold`}
          >
            Wallet Summary
          </p>
        </Link>
        <Link to="/sales-summary"
          className={`  ${stateDateEdit !== "Filter By Date" ? "w-[23.3%]" : "w-[25%]"}
          flex justify-center items-center`}>
          <p  className={`${
              isDarkMode ? "border" : "bg-[#04177f]"
            } text-white  w-full text-center py-[2px] h-[100%]
             rounded-[7px]  flex items-center justify-center
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
      transactionHistoryError= {transactionHistoryError} loading={loading} 
       stateDateEdit={stateDateEdit} GetTransactionInformation={GetTransactionInformation}
      />
    </div>
  );
};
