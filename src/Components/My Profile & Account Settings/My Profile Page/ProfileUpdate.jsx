import React, { useContext } from "react";
import "../../../App.css";
import naijaFlag from "../../EducationPins/imagesEducation/Nigeriaflag.svg";
import messageQuestion from "../ProfileImages/message-question.svg";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import { UserBgFormatting } from "../../ProfileImageModule";
// import { GetLocalStorage } from "../../LocalStorage/LocalStorage";

export default function ProfileUpdate(  {fullname, Email, Phone, Username} ) {
  const { profilePage, customerDetail, 
    progressTaskBarResponse } = useContext(ContextProvider);
  const { isDarkMode } = useContext(ContextProvider);
  const { full_name, username, email, phone } = customerDetail;
const UserIcon = localStorage.getItem("UserIcon") ? localStorage.getItem("UserIcon") : "";
const UserData = Username?.toString()
const bgUsername = UserBgFormatting(UserData)
// Data = GetLocalStorage()
  return (
    <div className="">
      {profilePage && (
        <div className="flex flex-col mt-[30px]">
          <div className="flex flex-col gap-[50px] md:gap-[30px]  lg:gap-[40px]">
            {/* Profile pic */}
            <div className="flex md:justify-start items-center h-full justify-center gap-[7.042px] lg:gap-[12px]">
              <div className={`${bgUsername} bg-opacity-10`}>
                <img
                  src={UserIcon}
                  className="h-[48px] w-[46.753px] rounded-[48px] lg:h-[150px] lg:w-[150px] md:h-[88.801px]  md:w-[88.801px] md:rounded-[88.201px] lg:rounded-[150px]"
                  alt="profilePic"
                />
                
              </div>
              {/* Profile text */}
              <div className="flex flex-col justify-center gap-[3.52px] lg:gap-[12px] ">
                <div className ="flex gap-2 items-center">
                <p
                  className={`text-[#7E7E7E] text-[12px] leading-[18px] md:text-[12.042px] md:leading-[16px] lg:text-[16px] lg:leading-[24.8px] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {full_name ? full_name : fullname ? fullname : ""}
                </p>
                    {progressTaskBarResponse?.data?.data?.beta === true && (
                <p className="text-[11px] md:text-[12px] text-[#7109d3] w-[60px]
                rounded-[5px] px-0.5 py-[3px] bg-[#f5ecfd] text-center leading-[14px] 
                lg:leading-[15px] lg:py-[5px]   lg:w-[80px] font-bold">
                  Beta
                </p>
              )}
                </div>
                <p
                  className={`text-[12px] leading-[18px] md:text-[12.042px] md:leading-[16px] lg:text-[16px] lg:leading-[24.8px] ${
                    isDarkMode ? "text-white" : "text-black"
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
                      className={` text-[12px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Country
                    </h2>
                    <div
                        className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
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
                        className={` text-base leading-[18px] 
                          md:text-[10.389px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] ${
                          isDarkMode ? "text-white" : "text-[#7C7C7C]"
                        }`}
                      >
                        Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className=" flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px] ">
                    <h2
                      className={` text-[13px] 
                        leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Full Name
                    </h2>
                    <div
                      className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                    >
                      <p
                        className={` text-base leading-[18px]
                           md:text-[9.389px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : "text-[#7E7E7E]"
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
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      UserName
                    </h2>
                    <div
                     className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                    >
                      <p
                        className={` text-base 
                          leading-[18px] md:leading-[12.206px] lg:text-[16px]
                           lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : "text-[#7E7E7E]"
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
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Email
                    </h2>
                    <div
                         className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                    >
                      <p
                        className={`text-[#7E7E7E] text-base leading-[18px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : "text-[#7E7E7E]"
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
                      className={`text-[#7E7E7E] text-[12px] leading-[10.4px]
                         md:leading-[12.206px] font-semibold lg:text-[16px] lg:leading-[20.8px] 
                         cursor-default mb-[5.868px] lg:mb-[10px] ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Phone Number
                    </h2>

                    <div
                    className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                    >
                      <p
                        className={`  text-base leading-[18px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] cursor-default ${
                          isDarkMode ? "text-white" : "text-[#7E7E7E]"
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
