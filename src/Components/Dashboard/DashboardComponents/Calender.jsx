import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import styles from "./component.module.css";
// import "react-calendar/dist/Calendar.css";
import "./custom_calendar.css";
import { ContextProvider } from "../../Context";


export const Calender = () => {
  const {dateEdit, setDateEdit, 
    isDarkMode, 
    countCalender,
     setCountCalender,
      editCalenderOne, 
    setEditCalenderOne,
    editCalenderTwo, 
    setEditCalenderTwo,
    currentDateInTimeStamps,
    setCurrentDateInTimeStamps,
    handleStateCalender
    } = useContext(ContextProvider);
    


  const onChangeValue = (value)=> {
  //  console.log(value);  
  // console.log(typeof value === "object");
  const dateValue = new Date(value);
   console.log(currentDateInTimeStamps >= dateValue?.setHours(0,0,0,0))
   console.log(currentDateInTimeStamps)
      setCountCalender((prev)=> {
       return prev === 0 ? prev + 1 : prev
    })
    
      const getDate = dateValue ? dateValue?.getDate() : "";
    const getMonth = dateValue ? dateValue?.toLocaleString("default", {month : "short"})?.toUpperCase() : "";
    if((countCalender === 0 && currentDateInTimeStamps === 0 ) ){
     setCurrentDateInTimeStamps(dateValue?.setHours(0,0,0,0)) 
    setEditCalenderOne(getDate && getMonth ? (getMonth + " " + getDate) : "Start Date" );
    }else if(countCalender === 1  && ( dateValue?.setHours(0,0,0,0) >= currentDateInTimeStamps) && editCalenderOne !== "Start Date"){
      setCurrentDateInTimeStamps(dateValue?.setHours(0,0,0,0))
     setEditCalenderTwo(getDate && getMonth ? (getMonth + " " + getDate) : "End Date" );
    }
    return value;
  }





  return (
    <div
      className={`pt-2 bvnQuery
      ${isDarkMode ? "text-white bg-black" : "text-black bg-white"} `}
      // py-2 px-2
    >
    <div className="flex justify-between gap-[5px] w-[100%]">
       <div className="flex justify-center px-[20px] py-[10px] 
        w-[50%]   border-[0.2px] rounded-[10px]">
    <p className = "text-center text-[10px] font-[600]  leading-[14px]">
      {editCalenderOne === "" ? "Start Date" : editCalenderOne}
      </p>
      </div>
      <div className="flex justify-center font-[600] px-[20px] py-[10px] 
        w-[50%] border-[0.2px] rounded-[10px]">
        <p className = "text-center text-[10px] leading-[14px]">
      {editCalenderTwo === "" ? "End Date" : editCalenderTwo}
      </p> 
    
      </div>
    </div>
      <div className={`p-2 md:p-0 flex gap-[20px]
        ${isDarkMode ? "text-white bg-black" : "text-black bg-white"}`}>
        <Calendar
        className={`${isDarkMode ? "text-white bg-black" :  "text-black bg-white"}`}
          onChange={(value)=> {
             onChangeValue(value);
           handleStateCalender(value);
             const localDateValue = new Date(value);
             const IsoString = typeof localDateValue === "object" ? 
              localDateValue?.toLocaleString("sv-SE", {
              timeZone : "Africa/Lagos",
              hour12 : false
             }) :"";
             const slicedValue = IsoString?.slice(0,10)
             setDateEdit(slicedValue)
             console.log(IsoString)
        }}
         
          value={dateEdit}
          tileClassName={({ date: tileDate, view }) => {
            if (view === "month") {
              const today = new Date();
              const todayOnly = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              );
              if (
                tileDate < todayOnly &&
                tileDate.getMonth() === today.getMonth() &&
                tileDate.getFullYear() === today.getFullYear()
              ) {
                return "past-day"; // custom classname for past days, same month
              } else if (
                tileDate > todayOnly &&
                tileDate.getMonth() === today.getMonth()
              ) {
                return "future-day"; // after today, same month
              }
            }
          }}
        tileDisabled={({date, view})=> {
            const tileDates = new Date(date);
            tileDates.setHours(0,0,0,0);
            if(view === "month" && editCalenderOne !== "Start Date" && countCalender === 1){
            return tileDates < currentDateInTimeStamps;
            }
        }}/>
      
   
       <Calendar
        className={`hidden md:block ${isDarkMode ? "text-white bg-black" :  "text-black bg-white"}`}
          onChange={(value)=> {
             onChangeValue(value);
             const dateValue = new Date(value);
            const localDateValue = dateValue?.toLocaleString("sv-SE", {
              timeZone : "Africa/Lagos",
              hour12 : false
            })
            setDateEdit(localDateValue?.slice(0,10));
        }}
         
          value={dateEdit}
          tileClassName={({ date: tileDate, view }) => {
            if (view === "month") {
              const today = new Date();
              const todayOnly = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
              );
              if (
                tileDate < todayOnly &&
                tileDate.getMonth() === today.getMonth() &&
                tileDate.getFullYear() === today.getFullYear()
              ) {
                return "past-day"; // custom classname for past days, same month
              } else if (
                tileDate > todayOnly &&
                tileDate.getMonth() === today.getMonth()
              ) {
                return "future-day"; // after today, same month
              }
            }
          }}
        tileDisabled={({date, view})=> {
            const tileDates = new Date(date);
            tileDates.setHours(0,0,0,0);
            if(view === "month" && editCalenderOne!== "Start Date" && countCalender === 1){
            return tileDates < currentDateInTimeStamps;
            }
         
        }}
        />
        </div>
      

    </div>
  );
};
