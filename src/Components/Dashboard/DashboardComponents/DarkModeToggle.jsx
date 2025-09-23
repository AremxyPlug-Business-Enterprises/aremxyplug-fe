import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";

export default function DarkModeToggle() {
  const { isDarkMode, handleToggle } = useContext(ContextProvider);

  useEffect(()=>{
    const storeDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    if (storeDarkMode !== isDarkMode){
handleToggle()
    }
  }, [handleToggle, isDarkMode]);

  const toggleDarkMode = () => {
    handleToggle();
    localStorage.setItem('darkModeEnabled', (!isDarkMode).toString());
  };

  return (
    <div>
      <div
        onClick={toggleDarkMode}
        className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
          isDarkMode ? "bg-[#b1b0b0]" : "bg-[#0003]"
        }`}
      >
        <div
          className={`rounded-full w-[7.5px] h-[6.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
            isDarkMode ? "float-right" : "float-left"
          }`}
        ></div>
      </div>
      {isDarkMode ? (
        <style>
          {
            "body { background-color: #000; color: #fff;  },  "
          }
        </style>
      ) : (
        <style>{"body { background-color: #fff; color: #000; }"}</style>
      )}
    </div>
  );
}
