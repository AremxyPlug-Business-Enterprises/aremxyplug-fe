import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./custom_calendar.css";
import { ContextProvider } from "../../Context";


export const Calender = () => {
  const {dateEdit, 
    isDarkMode, 
    countCalender,
     setCountCalender,
      editCalenderOne, 
    setEditCalenderOne,
    editCalenderTwo, 
    setEditCalenderTwo,
    currentDateInTimeStamps,
    setCurrentDateInTimeStamps,
    handleStateCalender,
    startDateValueState,
    setStartDateValueState,
    setEndDateValueState,
    endDateValueState
    } = useContext(ContextProvider);
    


  const onChangeValue = (value)=> {
  const startDateObject = startDateValueState?.length > 1 ? new Date(startDateValueState) : "";
  console.log(startDateObject);
  const dateValue = new Date(value);

      setCountCalender((prev)=> {
       return prev === 0 ? prev + 1 : prev
    })
     const getDate = dateValue ? dateValue?.getDate() : "";
    const getMonth = dateValue ? dateValue?.toLocaleString("default", {month : "short"})?.toUpperCase() : "";
      const getYear = dateValue ? dateValue?.toLocaleString("default", {year : "numeric"})?.toUpperCase() : "";
    if(window.innerWidth < 700 ){
    if(countCalender === 0 && editCalenderOne === "Start Date"){
     setCurrentDateInTimeStamps(dateValue?.setHours(0,0,0,0)) 
     setCountCalender(1)
    setEditCalenderOne(getDate && getMonth &&getYear ? (getMonth + " " + getDate + ","+ getYear) : "Start Date" );
    }else if(countCalender === 1 
       && (dateValue?.setHours(0,0,0,0) >= currentDateInTimeStamps)
       && editCalenderOne !== "Start Date"){
     setEditCalenderTwo(getDate && getMonth && getYear
       ?  (getMonth + " " + getDate + ","+ getYear) : "End Date" );
    }
  }
    return value;
  }
 





  return (
    <div
      className={`pt-2 bvnQuery
      ${isDarkMode ? "text-white bg-black" : "text-black bg-white"} `}
      // py-2 px-2
    >
       <div className=" hidden md:flex justify-between 
       gap-[5px] w-[100%] py-[15px] px-[15px]">
       
    <p className = "text-center self-center mx-auto text-[12px] font-[500]  leading-[16px]">
      {startDateValueState}
      </p>

      
        <p className = "text-center self-center mx-auto text-[12px] font-[500] leading-[16px]">
      {endDateValueState}
      </p> 
    
   
      </div>
    <div className="flex justify-between gap-[5px] w-[100%]">
       <div className="flex justify-center px-[20px] py-[15px] 
        w-[50%]   border-[0.2px] rounded-[10px]">
    <p className = "text-center text-[12px] font-[600]  leading-[16px]">
      {editCalenderOne === "" ? "Start Date" : editCalenderOne}
      </p>
      </div>
      <div className="flex justify-center font-[600] px-[20px] py-[15px] 
        w-[50%] border-[0.2px] rounded-[10px]">
        <p className = "text-center text-[12px] leading-[16px]">
      {editCalenderTwo === "" ? "End Date" : editCalenderTwo}
      </p> 
    
      </div>
    </div>
      <div className={`p-2 md:p-0 flex gap-[20px]
        ${isDarkMode ? "text-white bg-black" : "text-black bg-white"}`}>
        <Calendar
        className={`${isDarkMode ? "text-white bg-black" :  "text-black bg-white"}`}
          onChange={(value)=> {
        
         
             const localDateValue = new Date(value);
             const IsoString = typeof localDateValue === "object" ? 
              localDateValue?.toLocaleString("sv-SE", {
              timeZone : "Africa/Lagos",
              hour12 : false
             }) :"";
             const slicedValue = IsoString?.slice(0,10);
               const getDate = typeof localDateValue === "object" 
               ? localDateValue?.getDate() : "";
    const getMonth = typeof localDateValue === "object" 
    ? localDateValue?.toLocaleString("default", {month : "short"})?.toUpperCase() : "";
      const getYear = typeof localDateValue === "object" 
    ? localDateValue?.toLocaleString("default", {year : "numeric"})?.toUpperCase() : "";
             if(window.innerWidth < 700){
                onChangeValue(value);
                 handleStateCalender(value);
             if(editCalenderOne === "Start Date"){
             setStartDateValueState(slicedValue)
             }else if( editCalenderOne !== "Start Date" 
               && (editCalenderTwo === "End Date" || editCalenderTwo?.length ===11)){
             setEndDateValueState(slicedValue);
             }
             } else{
              setStartDateValueState(slicedValue);
              setEditCalenderOne(getDate && getMonth && getYear ? (getMonth + " " + getDate + "," + getYear) : "")
             }
            }
          }
        value={(editCalenderOne !== "Start Date" && editCalenderOne !== "") ? startDateValueState : endDateValueState}
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
        if(window.innerWidth <= 700){
               const tileDates = new Date(date);
            tileDates.setHours(0,0,0,0);
            if(view === "month" && editCalenderOne !== "Start Date" && countCalender === 1){
            return tileDates < currentDateInTimeStamps;
            }
          }else{
            return false;
          }
          
        }}/>
      
   
       <Calendar
        className={`hidden md:block ${isDarkMode ? "text-white bg-black" :  "text-black bg-white"}`}
          onChange={(value)=> {
            const dateValue = new Date(value);
            const localDateValue = typeof dateValue === "object" ?  dateValue?.toLocaleString("sv-SE", {
              timeZone : "Africa/Lagos",
              hour12 : false
            }) : "";
             const slicedValue = localDateValue?.slice(0, 10)
              const getDate = typeof dateValue === "object" 
               ? dateValue?.getDate() : "";
    const getMonth = typeof dateValue === "object" 
    ? dateValue?.toLocaleString("default", {month : "short"})?.toUpperCase() : "";
     const getYear = typeof dateValue === "object" 
    ? dateValue?.toLocaleString("default", {year : "numeric"})?.toUpperCase() : "";
            setEditCalenderTwo(getDate && getMonth && getYear ? (getMonth + " " + getDate + "," + getYear) : "")
            setEndDateValueState(slicedValue);
           
        }}
        value={endDateValueState}
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
          }
      }

        tileDisabled={({date, view})=> {
     const tileDates = new Date(date);
                const startDateObject 
                =  startDateValueState?.length > 1 ? new Date(startDateValueState) : ""
            
            if(view === "month" 
              && editCalenderOne !== "Start Date"){
            return tileDates?.setHours(0,0,0,0) < (startDateObject !== "" ? startDateObject.setHours(0,0,0,0) : 0);
            }
          
      }
      }
       
        />
        </div>
      

    </div>
  );
};
