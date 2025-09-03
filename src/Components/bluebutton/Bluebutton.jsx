import React from "react";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";

function Bluebutton({ ...props }) {
  return (
    // class="bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]"

    //  <div
    //   className=" inline-flex justify-center items-center h-[46px] text-[#fff] text-[7.82px] md:text-[7.34px] lg:text-[12.66px]  text-center rounded-md  font-[400]  cursor-pointer px-10 "
    //     style={{
    //       backgroundColor: primaryColor,
    //     }}
    //   >
    //   <p> {props.text}</p>

    //   </div>

    <div
      className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[35px] py-[12px]  rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
      style={{
        backgroundColor: primaryColor,
      }}
      onClick={props.onClick}
    >
      <p> {props.text}</p>
    </div>
  );
}

export default Bluebutton;
