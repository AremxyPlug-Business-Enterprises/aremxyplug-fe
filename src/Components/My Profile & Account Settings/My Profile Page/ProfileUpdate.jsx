import React, { useContext } from "react";
import "../../../App.css";

import pickPinIcon from "../ProfileImages/pickPinIcon.svg";
import naijaFlag from "../../EducationPins/imagesEducation/Nigeriaflag.svg";
import messageQuestion from "../ProfileImages/message-question.svg";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
// import { GetLocalStorage } from "../../LocalStorage/LocalStorage";

export default function ProfileUpdate(  {fullname, Email, Phone, Username} ) {
  const { profilePage, customerDetail } = useContext(ContextProvider);
  const { isDarkMode } = useContext(ContextProvider);
  const { full_name, username, email, phone } = customerDetail;
const UserIcon = localStorage.getItem("UserIcon") ? localStorage.getItem("UserIcon") : "";
// Data = GetLocalStorage()
  return (
    <div className="">
      {profilePage && (
        <div className="flex flex-col mt-[30px]">
          <div className="flex flex-col gap-[50px] md:gap-[30px]  lg:gap-[40px]">
            {/* Profile pic */}
            <div className="flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]">
              <div className="relative pt-[30px]">
                <img
                  src={UserIcon}
                  className="h-[48px] w-[46.753px] rounded-[48px] lg:h-[150px] lg:w-[150px] md:h-[88.801px]  md:w-[88.801px] md:rounded-[88.201px] lg:rounded-[150px]"
                  alt="profilePic"
                />
                <img
                  src={pickPinIcon}
                  className="absolute bottom-0 right-0 h-[25px] w-[25px] md:h-[25.82px] md:w-[25.82px] lg:h-[44px] lg:w-[44px]"
                  alt=""
                />
              </div>
              {/* Profile text */}
              <div className="flex flex-col justify-center gap-[3.52px] lg:gap-[12px] pt-[30px]">
                <p
                  className={`text-[#7E7E7E] text-[12px] leading-[18px] md:text-[12.042px] md:leading-[16px] lg:text-[16px] lg:leading-[24.8px] ${
                    isDarkMode ? "text-white" : ""
                  }`}
                >
                  {full_name ? full_name : fullname ? fullname : ""}
                </p>
                <p
                  className={`text-[#7C7C7C] text-[12px] leading-[18px] md:text-[12.042px] md:leading-[16px] lg:text-[16px] lg:leading-[24.8px] ${
                    isDarkMode ? "text-white" : ""
                  }`}
                >
                  {email ? email : Email ? Email : ""}
                </p>
              </div>
            </div>
            {/* FORM / INPUTS */}
            {/*  */}
            <form action="">
              {/* Container for the three levels of the inputs */}
              <div className="flex flex-col gap-[20px] md:gap-[26.41px] lg:gap-[45px]  ">
                {/* Level 1 / First two inputs */}
                <div className="flex flex-col gap-[20px] md:flex md:flex-row md:gap-[12.91px] lg:gap-[22px] w-[100%]">
                  {/* Country */}
                  <div className="flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px]">
                    <h2
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      Country
                    </h2>
                    <div
                       className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex gap-[5px]  pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    >
                      {/* {`flex items-center py-[10.33px] pl-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] md:py-[12px] md:pl-[8.67px] md:pr-[5.867px] text-sm leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px]placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-[10px] h-full  ${
                        isDarkMode ? "border-slate-50" : ""
                      }`} */}
                      <img
                        src={naijaFlag}
                        className="h-[17.176px] w-[17.176px] lg:h-[29.27px] lg:w-[29.27px]"
                        alt=""
                      />
                      <p
                        className={`text-[#7E7E7E] text-[12px] leading-[18px] 
                          md:text-[10.389px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className=" flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px] ">
                    <h2
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      Full Name
                    </h2>
                    <div
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    >
                      <p
                        className={`text-[#7E7E7E] text-[12px] leading-[18px] md:text-[9.389px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {full_name ? full_name : fullname ? fullname : ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* End of level 1 */}

                {/* Start of level Two */}
                <div className="flex flex-col gap-[20px] md:flex md:flex-row  md:gap-[12.91px] lg:gap-[22px] w-[100%]">
                  <div className="flex flex-col gap-[5.868px] w-[100%] md:w-[50%] lg:gap-[10px] ">
                    <h2
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      UserName
                    </h2>
                    <div
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    >
                      <p
                        className={`text-[#7E7E7E] text-[12px] 
                          leading-[18px] md:leading-[12.206px] lg:text-[16px]
                           lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {username ? username : Username ? Username : ""}
                      </p>
                    </div>
                  </div>
                  {/* second part level two */}
                  <div className="flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px] cursor-default">
                    <h2
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px]
                         md:leading-[12.206px] font-semibold lg:text-[16px] 
                         lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      Email
                    </h2>
                    <div
                        className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    >
                      <p
                        className={`text-[#7E7E7E] text-[12px] leading-[18px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {email? email : Email ? Email : ""}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End of level two */}

                {/* Start of level three */}
                <div className="flex flex-col gap-[20px] md:flex md:flex-row md:gap-[12.91px] lg:gap-[22px] w-[100%]">
                  {/* Phone Number */}
                  <div className="flex flex-col w-[100%] md:w-[50%] 
                  gap-[5.868px] lg:gap-[10px]">
                    <h2
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default mb-[5.868px] lg:mb-[10px] ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      Phone Number
                    </h2>

                    <div
                       className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    >
                      <p
                        className={` text-[#7E7E7E] text-[12px] leading-[18px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : ""
                        }`}
                      >
                        {phone?  `+${phone}`:Phone ? `+${Phone}` :""
                            }
                      </p>
                    </div>
                  </div>
                </div>
                {/* About */}
                <div className="flex w-[100%] md:w-[50%] items-center gap-[10px] lg:gap-[16px]">
                  <div className="flex gap-[5px] md:gap-[8px]">
                    <h2
                      className={`text-[#7E7E7E] font-[500] text-[12px] leading-[10.4px]  md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] gap-[10px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      About AremxyPlug
                    </h2>
                    <Link to="/About-us">
                      <img
                        className="cursor-pointer h-[12px] w-[12px] md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px]"
                        src={messageQuestion}
                        alt=""
                      />
                    </Link>
                  </div>
                  {/* Faq */}
                  <div className="flex gap-[5px] md:gap-[8px]">
                    <h2
                      className={`text-[#7E7E7E] font-[500] text-[12px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] gap-[10px] cursor-default ${
                        isDarkMode ? "text-stone-50" : ""
                      }`}
                    >
                      FAQ’s
                    </h2>
                    <Link to="/faq">
                      <img
                        className="cursor-pointer h-[12px] w-[12px] md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px]"
                        src={messageQuestion}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                {/* end of 2nd part */}
                <Link
                  to="/EditProfile"
                  className="lg:w-[163px] w-[100%] py-[15.534px] rounded-[2.241px]  md:w-[95.649px] md:py-[5.868px] lg:py-[10px] bg-[#04177F] md:rounded-[7.042px] lg:rounded-[12px] mt-[30px] md:mt-[0px]"
                >
                  <p className="font-[600] text-white text-center text-[12px] leading-[18px] md:leading-[14px] lg:text-[16px] lg:leading-[24px]">
                    Update Profile
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
