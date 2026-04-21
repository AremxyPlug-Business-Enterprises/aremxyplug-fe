import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import DarkModeToggle from "../DashboardComponents/DarkModeToggle";
import { RemoveLocalStorage } from "../../LocalStorage/LocalStorage";
export const TopBar = () => {
  const { setToggleSideBar, isDarkMode,logout, setLogout } =
    useContext(ContextProvider);

  const toggleTrueFalse = () => {
    setToggleSideBar(true);
    setLogout(false);
  };
  const toggleTrueFalse2 = () => {
    setToggleSideBar(false);
    setLogout((prev) => !prev);
  };

   const RemoveLocalStorageKeys=()=> {
      RemoveLocalStorage();
    localStorage.removeItem("UserStatus");
    }

  return (
    <div
      className={`z-40 flex fixed top-0 border-b-[2px] 
          border-gray-200  w-[100%] 
        justify-between h-[4.75rem] md:h-[5.75rem] lg:gap-[20%] gap-[20px]
        lg:pl-[8%] lg:pr-[5%] px-[3%]  
      ${
        isDarkMode
          ? "bg-black border-b-[1px] border-b-[#fff]"
          : "bg-white border-gray-100"
      } `}
      // lg:py-[2%] lg:pl-[10%] py-[4%]
    >
      <div className="flex justify-between  my-auto gap-[20px] lg:gap-[100px]"
      // w-[50%] lg:w-[50%]
      >
      <img
        onClick={toggleTrueFalse}
        className="cursor-pointer w-[30px] h-[30px] mr-[5%] md:h-[30.9px] md:w-[30.9px] lg:h-[52px] lg:w-[52px]"
        src="./Images/dashboardImages/menularge.png"
        alt="/harmburger"
      />
        <div
          className={`${
            isDarkMode ? "border border-[#fff]" : "border-[#0000004D]"
          } cursor-pointer flex justify-between items-center px-[2%] w-[8rem] 
           border-[0.5px] rounded-[8.47px] md:rounded-[10px] md:h-[33.8px] md:w-[202px] lg:border-[1.5px] 
            opacity-50 lg:rounded-[10px] lg:w-[358px] lg:h-[60px]`}
          // bg-gray-300 w-[60%]
        >
          <div className={`flex justify-center py-1 
          items-center gap-[3px] lg:gap-[7px] `}
          // border-gray-300
          >
            <img
              className="w-[15px] h-[15px]
               md:h-[15.75px] md:w-[15.75] lg:h-[24px] lg:w-[24px]"
              src="./Images/dashboardImages/largeprofile.png"
              alt="/"
            />
            <p className="text-[10px] leading-[12px] font-[400] md:text-[14px] lg:text-[16px] lg:font-[500]">
              Switch Account
            </p>
          </div>
          <img
            className="h-[12px] w-[12px] md:w-[15.7px]
             md:h-[15.7px] lg:h-[22px] lg:w-[22px]"
            src="./Images/dashboardImages/arrow-downlarge.png"
            alt="/"
          />
        </div>
        </div>
      {/* <div
        className={``}
      > */}
      

        {/* <p className="text-[12px] font-[400] md:text-[14.167px] lg:text-[18px]">
          Dashboard
        </p> */}

        <div className="flex justify-between items-center gap-4 lg:gap-[20px]"
        //  w-[50%]
        >
          
          <div className="cursor-pointer flex items-center font-[500] 
          text-[8px] md:text-[13.8px] lg:text-[12px] lg:font-extrabold gap-[3px] 
          md:gap-[6px]">
            <p>Light</p>
            <DarkModeToggle />
            <p>Dark</p>
          </div>
          <div className="flex items-center gap-[10px]">
          <div className=" w-[30px] h-[30px] md:w-[10px] md:h-[16px]
           lg:w-[28px] lg:h-[28px]" to="/notifications">
            <img className="cursor-pointer w-[100%]"
             
              src="./Images/dashboardImages/notificationlarge.png"
              alt="notification"
              notifications
            />
          </div>

          <img
            onClick={toggleTrueFalse2}
            className="cursor-pointer w-[2.3rem] h-[27px] md:w-[40px] md:h-[20px] rounded-[2.3px] lg:w-[65px] lg:h-[34px]"
            src="./Images/dashboardImages/largedoor.png"
            alt="notification"
          />
        </div>
        
       </div>
        {logout && (
          <ul
            className={`z-[99px] border drop-shadow-xl absolute w-[200px] top-[95%] right-[7%]  ml-[12px] mt-[px] rounded-[3px] 
               md:top-[95%] md:w-[114px] lg:rounded-[6px] lg:right-[5%] lg:top-[95%] lg:w-[200px] lg:ml-[19px] ${
              isDarkMode
                ? "bg-[#000] text-[#fff] border-[#fff]"
                : "bg-[#ffffff] text-[#000] "
            }`}
          >
            <Link to="/ProfileSettingMain">
              <li className="z-[99px] cursor-pointer hover:underline pt-3
              pb-3 pl-2  text-[12px]  border-b-[0.22px] font-[400]
              md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                My Profile
              </li>
            </Link>
            <Link to="/ContactUs">
              {" "}
              <li className="cursor-pointer hover:underline
               pt-3 pb-3 pl-1 text-[12px] font-medium border-b-[0.22px] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                Contact Support
              </li>
            </Link>
            <Link onClick={()=> RemoveLocalStorageKeys()}
             to="/Login">
              <li className="z-[99px] cursor-pointer LogOut
              hover:underline pt-3 pb-3 pl-1 text-[12px] font-medium md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                Logout
              </li>
            </Link>
          </ul>
        )}
      </div>
     
  );
};
