import React, { useContext } from "react";
import Calendar from "react-calendar";
import styles from "./component.module.css";
// import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import "./custom_calendar.css";
import { ContextProvider } from "../../Context";

export const Calender = () => {
  const {dateEdit, setDateEdit} = useContext(ContextProvider);
 console.log(dateEdit)
  return (
    <div
      className={`${styles.calender} pt-2 `}
      // py-2 px-2
    >
      <div
        className="text-[12px] flex justify-center items-center 
        mt-[3%] w-[90%] mx-auto border border-[#E0E0E0]
         lg:text-[16px]"
        // p-2
      >
           {dateEdit}
      </div>
      <div className="p-2 md:p-0">
        <Calendar
          onChange={(value)=> {
            console.log(value)
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
        />
      
      </div>
    </div>
  );
};
