import React, { useState } from "react";
// import menu from "./assets/menu1.png";
// import square from "./assets/3square.png";
// import wallet from "./assets/wallet.png";
// import xport from "./assets/export.png";
// import translate from "./assets/translate.png";
// import transaction from "./assets/transaction-minus.png";
// import arrow from "./assets/arrow-down1.png";
// import align from "./assets/align-vertically.png";
// import arrow1 from "./assets/arrow-down.png";
// import card from "./assets/card.svg";
// import arrow2 from "./assets/arrow-down2.png";
// import pos from "./assets/card-pos.png";
// import arrow3 from "./assets/arrow-down3.png";
// import gameboy from "./assets/gameboy.png";
// import cpu from "./assets/cpu-setting.png";
// import status from "./assets/status-up.png";
// import coin from "./assets/coin.png";
// import trend from "./assets/trend-up.png";
// import arrow4 from "./assets/arrow-down4.svg";
// import attach from "./assets/attach-square.svg";
// import arrow5 from "./assets/arrow-down5.png";
// import profile from "./assets/profile-circle.png";
// import document from "./assets/document-text.png";
// import building from "./assets/building.png";
// import clipboard from "./assets/clipboard-tick.png";
// import messages from "./assets/messages.png";
// import sms from "./assets/sms.png";
// import whatsapp from "./assets/whatsapp.png";
// import call from "./assets/call-remove.png";
// import logout from "./assets/logout.png";
// import profileuser from "./assets/profile-2user.png";
// import arrow6 from "./assets/arrow-down6.png";
// import notification from "./assets/notification.svg";
// import logouts from "./assets/logout.svg";
// import drops from "./assets/arrow-down.svg";
import arrowsquare from "./assets/arrow-square-right.svg";
import arrowsquare1 from "./assets/arrow-square-right.png";
import group1 from "./assets/Group.png";
import arrow7 from "./assets/arrow-down7.svg";
import filter from "./assets/document-filter.svg";
import menus from "./assets/menu.png";
import arrow9 from "./assets/arrow-down9.svg";
import arrows from "./assets/arrow-square-right1.svg";
import arrows2 from "./assets/arrow-square-right2.png";
import arrows3 from "./assets/arrow-square-right3.svg";
import arrows4 from "./assets/arrow-square-right4.svg";
import arrows5 from "./assets/arrow-square-right5.svg";
import arrows6 from "./assets/arrow-square-right6.png";
import arrows7 from "./assets/arrow-square-right7.png";
import arrows8 from "./assets/arrow-down8.png";
import arrows9 from "./assets/arrow-down12.svg";
import arrows10 from "./assets/arrow-down11.svg";
import arrows11 from "./assets/arrow-down10.svg";
import arrowA from "./assets/arrow-square-rightA.png";
import arrowB from "./assets/arrow-square-rightB.png";
import arrowC from "./assets/arrow-square-rightC.png";
import arrowD from "./assets/arrow-square-rightD.png";
import arrowE from "./assets/arrow-square-right20.png";
import arrowF from "./assets/arrow-square-rightF.png";
import arrowG from "./assets/arrow-square-rightH.png";
import group5 from "./assets/Group (5).svg";
import flags from "./assets/Country Flags.png";
// import group4 from "./assets/Group (1).png";
import EUR from "./assets/EUR.svg";
import flags3 from "./assets/Country Flags (3).png";
import group10 from "./assets/Group (2).png";
import country5 from "./assets/Country Flags (4).png";
import normal from "./assets/search-normal.png";
import refresh from "./assets/refresh-2.svg";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import cash from "./assets/cash receipt from online shopping on mobile phone (1).png";
import { useContext } from "react"; 
import {ContextProvider} from "../Context";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import "../../App.css";

// import desk from "./assets/arrow-square-rightdesk.png";


export default function WalletSummaryPage() {


  const {toggleSideBar} = useContext(ContextProvider)
  const [isOpen1, setIsOpen1] = useState("");

  const [isOpen2, setIsOpen2] = useState("");

  const toggleDropdown1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(true);
    setIsOpen1(false);
  };

  return (
    <DashBoardLayout>

<div
            id="cash"
            className="w-full h-[90px] bg-gradient-to-r from-yellow-300 to-rose-400  md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={cash}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

      
        {/* <div className="h-[64.71px] lg:h-[196px] md:h-[112.29px] w-full  md:rounded-[11.46px] lg:rounded-[20px] flex-row mx-auto md:w-full lg:w-full gap-6 px-[16.51px] md:px-[28.65px] lg:gap-[55px]  pl-[50px] pr-[60.79px] py-[22px] ml-[5px] bg-gradient-to-r from-yellow-300 to-rose-400 rounded-[6px] md:gap-[20px]  justify-start items-start flex"> */}
          {/* <div className="py-[11px] md:ml-[40px] md:py-[16.61px] lg:py-[29px] md:mt-[-30px]  flex flex-col md:gap-[8.59px] gap-1 lg:gap-4"> */}
            {/* <div className="lg:w-[490px] md:w-[275.57px] lg:ml-[0px] ml-[-35px] md:mt-[10px] mt-[-23px] lg:mt-[0px] w-[160.85px] text-black lg:text-2xl md:text-sm text-[8.08px] font-semibold  uppercase"> */}
              {/* MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE. */}
            {/* </div> */}
{/*  */}
            {/* <div className="lg:w-[588px] md:w-[336.88px] w-[209px] lg:ml-[0px] ml-[-35px] lg:h-[65px] md:h-[37.24px] h-[21px] text-black lg:text-base md:text-[9.17px] text-[7px] font-normal  leading-0.1 lg:leading-tight"> */}
              {/* Select, filter, and manage all your transactions at a time, */}
              {/* download all transactions stats and keep a record track. */}
              {/* <br /> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div> */}
          {/* <img */}
            {/* // className="lg:w-[160px] mt-[-15px] md:ml-[90px] md:mt-[-8px] lg:mt-[0px] ml-[8px]  md:w-[91.21px] w-[80.24px] lg:h-[150px] md:h-[85.94px] h-[50.16px] " */}
            {/* // src={cash} */}
            {/* // alt="" */}
          {/* // /> */}
          {/* </div> */}
        {/* </div> */}
        <div className=" lg:top-[880px] top-[430px] md:top-[630px] absolute mt-[-30px]  lg:justify-start lg:items-center gap-[5px]  inline-flex">
          <div className="text-neutral-500 lg:text-xl md:text-xs md:mt-[5px] text-[8px] font-semibold ">
            Wallet History
          </div>
          <div className="lg:w-6 lg:h-6 w-3 h-3 md:w-[13.75px] md:h-[13.75px] md:mt-[7px] justify-center items-center relative flex">
            <img src={arrowsquare} alt="" />
          </div>
        </div>
        <div className=" lg:top-[400px] md:top-[280px] top-[1.82px] gap-[3px] absolute lg:justify-start md:gap-[5px] lg:items-center lg:gap-[5px] inline-flex">
          <div className="text-neutral-500 lg:text-xl text-[8px] md:mt-[5px] md:text-xs font-semibold ">
            Wallet Summary
          </div>
          <div className="lg:w-6 lg:h-6 w-3 h-3 lg:justify-center md:w-[13.75px] md:h-[13.75px] md:mt-[6px] lg:items-center relative flex">
            <img src={arrowsquare1} alt="" />
          </div>
        </div>
        <div className="lg:px-[] lg:py-[25px] lg:h-[120px] py-[10px] lg:gap-2.5 lg:top-[455px] gap-[5px] mt-[15%] lg:mt-[150px] bg-indigo-300 bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px] justify-center lg:w-full w-[312px] md:w-full md:h-[68.75px] md:px-[140.10px] md:py-[14.32px]  items-center inline-flex">
          
            <div className="lg:justify-start lg:items-center gap-[10px] md:gap-[5.73px] lg:gap-[5.73px] flex">
              <div className="lg:w-[70px] lg:h-[70px] w-6 h-6 md:w-[40.10px] md:h-[40.10px] lg:gap-[5.73px] relative">
                <div className="lg:w-[70px] lg:h-[70px] left-0 top-0 w-6 h-6 md:w-[40.10px] md:h-[40.10px]  absolute bg-white rounded-full"></div>
                <div className="lg:w-[29.27px] lg:h-[29.27px] left-[20px] lg:top-[20px] w-2.5 h-2.5 top-[6.86px] md:w-[16.77px] md:h-[16.77px] md:left-[11.46px] md:top-[11.46px]  absolute">
                  <img
                    src={group1}
                    class="lg:w-[29.27px] lg:h-[29.27px] ml-[-1.5px] left-[-11px] lg:top-[0.91px] w-2.5 h-[9.41px] top-[0.31px] lg:left-[10px]  md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px] absolute"
                    alt=""
                  />
                </div>
              </div>
              <div className="justify-start items-start mt-[5px] md:mt-[12px] gap-[5.5px] lg:gap-[11px] md:gap-[6.30px]  flex">
                <div className="text-black lg:text-xl text-[10px] md:text-xs md:whitespace-nowrap font-semibold lg:leading-relaxed md:leading-[14.90px] leading-[10.40px] ">
                  Available Balance
                </div>
                <div className="text-neutral-500 lg:text-xl text-[10px] md:text-xs font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">
                  (₦50,000.00)
                </div>
              </div>
            </div>
            <div
              onClick={toggleDropdown1}
              className="lg:w-6 lg:h-6 w-[13.75px] md:mt-[12px] mt-[5px] h-[13.75px] md:w-[13.75px] md:h-[13.75px] lg:justify-center lg:items-center flex"
            >
              <img src={arrow7} alt="" />
            </div>
          
        </div>
        <div className="lg:pl-[30px] pl-[0.33px] lg:h-[72px] lg:pr-[484.30px] pr-[92.66px] lg:py-[11px] md:h-[41.25px] md:w-full h-6 md:pl-[9.17px] md:pr-[277.40px] md:pt-[6.39px] md:pb-[6.40px] py-[2.67px] lg:mt-[50px] top-[243.82px] lg:w-full w-[312px] mt-[25px] bg-white shadow border-t border-b border-black border-opacity-30 lg:justify-start lg:items-center lg:gap-[50.53px]  md:gap-[28.72px] gap-[50px]  inline-flex">
          <div className="lg:self-stretch lg:p-2.5 md:h-[29px] md:mt-[2px] lg:h-[50px] lg:mt-[1px] md:p-[5.73px] p-[3.33px] bg-white lg:rounded-[5px] rounded-sm md:rounded-[2.86px] shadow justify-start items-center lg:gap-[6.62px] mt-[5px] gap-[2.21px] md:gap-[4px] inline-flex">
            <div className="text-blue-900 lg:text-xl text-[8px] md:text-xs md:whitespace-nowrap font-semibold ">
              Filter by Date
            </div>
            <div className="lg:w-[19.85px] w-3 lg:h-[19.85px] h-3 md:mt-[7px] md:w-[11.37px] md:h-[11.37px] relative lg:justify-center lg:items-center flex">
              <img src={filter} alt="" />
            </div>
          </div>
          <div className="lg:self-stretch justify-start lg:mt-[7px] mt-[5px] items-center lg:gap-2.5 gap-[5.73px] md:gap-[5.73px] inline-flex">
            <div className="lg:justify-start lg:items-center lg:gap-[5px] md:gap-[2.86px] gap-[2.86px] flex">
              <div className="lg:w-[19.85px] w-[11.37px] lg:h-[19.85px] h-[11.37px] justify-center items-center relative flex">
                <img src={menus} alt="" />
              </div>
              <div className="text-neutral-500 lg:text-xl md:mt-[-2px] text-[8px] md:text-xs md:whitespace-nowrap font-semibold ">
                Filter By Status
              </div>
            </div>
            <div
              onClick={toggleDropdown2}
              className="lg:w-[19.85px] w-[11.37px] lg:h-[19.85px] h-[11.37px]  lg:justify-center lg:items-center relative flex"
            >
              <img src={arrow9} alt="" />
            </div>
          </div>
        </div>


        <div className="flex gap-[5px] mb-[20px] w-[312px] md:w-full md:gap-[51.849px] mt-5 lg:gap-[90.5px] lg:mb-[15px]">
            

                      <div className="lg:p-[5.65px] md:w-auto h-[19px] w-[36px] lg:h-[27.14px] lg:w-[61.45px]
                       md:py-[1px] md:h-[20px] p-[1px] bg-indigo-300 bg-opacity-20 md:rounded-lg
                        lg:rounded-[14.70px] rounded-[4.83px] md:gap-[6.48px] lg:justify-start lg:items-start 
                        lg:gap-[11.31px] gap-[3.71px] flex">
            <div className="text-black lg:text-[10px] text-[10px] md:text-[5.73px] font-semibold ">
              NGN
            </div>
            <div className="hidden md:block lg:w-[15.83px] w-[5.20px] h-[5.20px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px] lg:justify-center lg:items-center relative ">
              <img src={arrows8} alt="" />
            </div>
          </div>

            <div
              className="flex flex-col w-1/3  rounded-[1.97px] justify-center
   bg-[#D5F6E3] md:py-[8.597px] md:px-[22.917px] 
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] md:w-full lg:rounded-[6px]"
            >
            
              <div className="flex justify-center gap-[5px]">
                <h2
                  className="font-style text-[#000000] 
                  font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Total Inflows
                </h2>
                <img
                  src={arrows9}
                  className="lg:w-[16px] lg:h-[16px]
     w-[4.924px] h-[4.924px] md:w-[8.594px] md:h-[8.594px] self-center"
                  alt=""
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                ₦96,001,55
              </h2>
            </div>
            
            <div
              className="flex w-1/3 md:w-full justify-center flex-col rounded-[1.97px] bg-[#92ABFE2E]
   bg-opacity-[18%] md:py-[8.597px] md:px-[22.917px] 
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] lg:rounded-[6px]"
            >
              
              <div className=" flex justify-center gap-[5px]">
                <h2
                  className="font-style text-[#000000] font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Total Transactions
                </h2>
                <img
                  src={arrows10}
                  className="lg:w-[16px] md:w-[8.594px] md:h-[8.594px] lg:h-[16px]
     w-[4.924px] h-[4.924px] self-center"
                  alt=""
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                10,000
              </h2>
            </div>
            {/* box-3 */}
            <div
              className="flex w-1/3 md:w-full flex-col rounded-[1.97px] bg-[#FDCECE]
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] md:py-[8.597px] md:px-[22.917px] 
   lg:py-[15px] lg:rounded-[6px]"
            >
              
              <div className="flex justify-center lg:gap-[5px]">
                <h2
                  className="font-style text-[#000000] font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Total Outflows
                </h2>
                <img
                  src={arrows11}
                  className="lg:w-[16px] lg:h-[16px]
     w-[4.924px] h-[4.924px] md:w-[8.594px] md:h-[8.594px] self-center"
                  alt=""
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                ₦96,001,55
              </h2>
            </div>
          </div>












        {isOpen1 && (
          <div className="lg:ml-[510px]  lg:top-[360px] md:w-[300px] lg:pl-[-500px] left-[65px] mt-[90px] w-[62%] lg:w-full  top-[164px] md:top-[175px] absolute flex-col md:mt-[260px] md:ml-[300px] lg:items-start inline-flex">
            <div className="lg:pl-2.5 lg:w-[370px] md:w-[214.84px] lg:pt-[7px] lg:h-[40px] h-[30px] justify-start items-center pt-[3px] pb-[px] bg-white shadow   md:pt-1 md:pb-[4.43px] inline-flex">
              <div className="lg:self-stretch lg:justify-start lg:items-center flex md:gap-[2.86px] md:h-[30px]  flex-row  ">
                <div className="lg:w-[29.27px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                  <div className="lg:w-[29.27px] w-[16.77px] lg:h-[27.45px] h-[16.77px] lg:left-0 lg:top-[0.91px] md:w-[16.77px] md:h-[16.77px] md:left-1 md:top-[0.52px] absolute">
                    <img src={group5} alt="" />
                  </div>
                </div>
                <div className="text-neutral-500 text-[8px] md:text-[9.17px] lg:text-base lg:font-medium md:ml-1 ml-5  md:leading-3 lg:leading-tight">
                  NGN Wallet (50,000.00)
                </div>
              </div>
            </div>
            <div className="lg:pl-2.5 md:w-[214.84px]  mt-[0.5px] justify-start items-center h-[30px] lg:h-[45px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px] lg:mt-[-3px] md:pl-[5.73px] md:mt-[-5px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex">
              <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex">
                <div className="lg:w-[29.27px] lg:h-[29.27px] lg:relative md:w-[16.77px] md:h-[16.77px] bg-white">
                  <div className="lg:w-[28.77px] w-[16.77px] lg:h-[26.09px] h-[16.77px] lg:left-[0.50px] lg:top-[3.18px] md:w-[16.77px] md:h-[16.77px] md:left-0 md:top-[0.52px] lg:absolute">
                    <img src={flags} alt="" />
                  </div>
                </div>
                <div className="text-neutral-500 lg:text-base md:text-[9.17px] text-[8px] font-medium  md:leading-3 leading-tight">
                  USD Wallet (0.00)
                </div>
              </div>
            </div>
            <div className="lg:pl-2.5 lg:h-[45px] md:w-[214.84px] h-[30px] justify-start items-center lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
              <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex">
                <div className="lg:w-[29.27px] lg:h-[29.27px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                  <img
                    src={EUR}
                    className="lg:w-[29.27px] w-[16.77px] md:h-[16.77px] md:w-[16.77px] lg:mt-[-1px] lg:h-[29.27px] h-[16.77px] lg:left-0 lg:top-0 "
                    alt=""
                  />
                  <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div>
                </div>
                <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight">
                  EUR Wallet (0.00)
                </div>
              </div>
            </div>
            <div className="lg:pl-2.5 lg:w-[370px] md:w-[214.84px] lg:h-[45px] h-[30px] justify-start items-center lg:pt-[7px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
              <div className="lg:self-stretch lg:justify-start lg:items-center flex-row gap-[5px] lg:gap-[5px] md:gap-[2.86px] inline-flex">
                <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                  <img src={flags3} alt="" />
                  <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div>

                  <div className="lg:w-[17.82px] lg:h-[17.82px] lg:left-[5.72px] lg:top-[5.73px] absolute"></div>
                </div>
                <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight">
                  GBP Wallet (0.00)
                </div>
              </div>
            </div>
            <div className="lg:pl-2.5 md:w-[214.84px] lg:pt-[7px] lg:pb-[7.73px] lg:h-[45px] h-[30px] justify-start items-center  lg:w-[370px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex">
              <div className="lg:self-stretch lg:justify-start lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex">
                <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                  <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div>

                  <img src={group10} alt="" />
                  {/* <div className="lg:w-[27.45px] w-[15px] lg:h-[29.27px] lg:left-[0.91px] lg:top-0 absolute"> */}
                  {/*  */}
                  {/* </div> */}
                </div>
                <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight">
                  AUD Wallet (0.00)
                </div>
              </div>
            </div>
            <div className="lg:pl-2.5 md:w-[214.84px] lg:pt-[7px] lg:w-[370px] lg:h-[45px] h-[30px] justify-start items-center lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px] md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
              <div className="lg:self-stretch lg:justify-start  lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex">
                <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                  <img src={country5} alt="" />
                  <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div>

                  {/* <div className="lg:w-[9.11px] lg:h-[17.34px] lg:left-[10.07px] lg:top-[5.96px] absolute"> */}
                  {/* </div> */}
                  <div className="lg:w-[6.36px] lg:h-[14.71px] lg:left-[11.46px] lg:top-[7.28px] md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px]  absolute"></div>
                </div>
                <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight">
                  KES Wallet (0.00)
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" lg:w-full  w-[312px] lg:h-[60px]  lg:mt-[90px] md:mt-[120px]
         h-5  bg-white mt-[50px] md:w-full md:h-[30.94px] md:pl-[9.17px]
          flex flex-row md:justify-between lg:justify-between justify-around items-center gap-[70px] md:gap-[90px] border border-black border-opacity-30 ">
          
            
              <div className="flex lg:gap-3 lg:mt-[-15px] justify-around gap-2 mt-[0.1px] md:gap-2 flex-row  ">
                
                  <div className="">
                    <img className=" lg:w-4 mt-[4px] md:mt-[7px] lg:mt-[22px]
                     w-3 lg:h-4 md:w-[9.17px] md:h-[9.17px]" src={normal} alt="" />
                  </div>
                
                <div className="text-neutral-400 text-[8px] lg:mt-[20px] lg:text-base mt-[4px] md:text-xs leading-3 whitespace-nowrap font-medium  lg:leading-tight">
                  Search for Transactions, e.g; Order Number
                </div>
              </div>
            
            <div className="lg:gap-[10px] gap-1 md:w-[100px] md:pl-[15.59px] justify-end items-center md:pr-[15.58px] lg:mt-[1px] lg:ml-[200px] md:gap-3  md:mt-[0px] md:py-[8.47px] lg:w-[130px] bg-white shadow border-black border-opacity-50  md:h-[30.94px] lg:h-[60px] lg:items-center flex-row flex">
              
                <div className="text-neutral-500 md:text-xs lg:text-base text-[8px] mt-[4px] ml-[-40px] font-medium ">
                  Search
                </div>
                <div className="lg:w-6 lg:h-6 md:w-[13.75px] w-3 mt-[2px] md:mt-[3px] md:h-[13.75px] lg:items-center flex">
                  <div className="lg:w-6 mt-[2px] md:mt-[3px] w-3 lg:h-6 md:w-[13.75px] md:h-[13.75px] ">
                    <img src={refresh} alt="" />
                  </div>
                </div>
              
            </div>
          
        </div>

{/* table for large screens */}
        <div className='mt-[30px] hidden md:flex '>
         <table
            className="mt-[0px] lg:h-[700px] md:h-[401.04px]  
     md:shadow-lg border-collapse font-[inter] "
          >
            
            <tr
              className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]  
              md:pt-[6.316px] md:pb-[5.746px] lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] 
              lg:pt-[11px] lg:pb-[10px]
               bg-[#CED9FF]"
            >
              <th className="text-left lg:text-[16px] lg:leading-[20.8px]  
              w-1/5  md:text-[9.167px] md:leading-[11.917px] border-none">
                Products
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Description
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Order No
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Amount
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Date & Time
              </th>
              <th
                className="text-left w-1/5  md:text-[9.167px] md:leading-[11.917px]
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Status
              </th>
            </tr>
            <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Virtual Account
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  NGN Wallet Top-up
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦1,000.00 
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
                <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]"
  src={arrows}
  alt="/"
/>
              </td>
            </tr>
            


        <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Withdrawal
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
        <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]"
  src={arrows2}
  alt="/"
/>
              </td>
            </tr>


            <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Card Payment
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  NGN Wallet Top-up
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows3}
  alt="/"
/>
              </td>
            </tr>





 <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows4}
  alt="/"
/>
              </td>
            </tr>


<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] text-[#7C7C7C] "
                >
                  From NGN Wallet to <br /> Bank 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦50,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Pending
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows5}
  alt="/"
/>
              </td>
            </tr>



<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   $60,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Failed
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows6}
  alt="/"
/>
              </td>
            </tr>


<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px]">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  International Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                    ₦10,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-start
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Pending
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows7}
  alt="/"
/>
              </td>
            </tr>

    
            {/* CONTACT US */}
            <div className="flex md:gap-[14.896px] py-[10.865px] justify-center px-[8.594px]">
              <p
                className="font-[500]  lg:text-[12px] lg:leading-[15.6px]  md:text-[6.875px]
  text-[#707070] md:leading-[8.938px]"
              >
                You need help?
              </p>
              <Link to = "/contactUs"
               
                className="font-[500] text-white lg:text-[8px] lg:leading-[10.4px] 
  md:text-[4.583px]  py-[2.865px] 
 px-[8.594px] md:leading-[5.985px] rounded-[5.156px] lg:py-[5px]
 lg:px-[15px] lg:rounded-  bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>         
</table>


</div>
















        {/* <div className="flex lg:h-7 lg:w-[100%] flex-col lg:gap-5 md:gap-3 md:mt-[10px]  items-center justify-center lg:mt-[30px]"> */}
              {/* <div className="md:w-[52.88px] hidden lg:h-10 md:h-[15.44px] md:px-[3.44px] md:py-[1.72px] lg:ml-[-70px] lg:w-[100px] md:gap-[2.86px] lg:px-1.5 lg:py-[3px] bg-white shadow border border-black border-opacity-30 justify-start items-center lg:gap-[5px]  md:flex lg:flex"> */}
                {/* <div className="text-neutral-500 lg:text-xs md:text-[6.88px] md:leading-[8.94px] md:mt-[10px] font-medium lg:leading-none"> */}
                  {/* ---The End--- */}
                {/* </div> */}
              {/* </div> */}
              {/* <div className="justify-start items-center hidden md:block lg:w-[100%] lg:ml-[950px]  lg:gap-[26px] md:w-[108.08px] md:h-[11.73px] md:gap-[14.90px] lg:flex"> */}
                {/* <div className="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  font-medium lg:leading-none"> */}
                  {/* You need help? */}
                {/* </div> */}
                {/* <div className="lg:px-[15px] hidden  lg:py-[5px] bg-blue-900 lg:rounded-[9px] justify-center items-center lg:gap-2.5 md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] md:flex"> */}
                  {/* <div className="text-white lg:text-[8px] font-medium lg:leading-[10.40px] md:text-[4.58px] md:leading-[5.96px]"> */}
                    {/* Contact Us */}
{/* </div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}




        {/* table for mobile view */}


        <div
            className="md:hidden mt-9 flex flex-col w-[312px] p-[20px] border-x-[1.2px]
 border-[#7C7C7C] border-opacity-[25%] mb-[50px]  shadow-md"
          >
            
            <div
              className="flex justify-between pb-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Virtual Account
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : NGN Wallet Top-up
                </p>
                <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                  Amount : ₦1,000.00
                </p>

              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500 self-start text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                  Status :<span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</span> 
                </p>
                <div className="flex flex-row">
                <div><p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                  <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                </div>
              <div className="w-[13.41px] mt-7 h-[12.06px]">
              <img className="w-[13.41px] h-[12.06px]" src={arrowA} alt="" /> 
              </div>
              </div>
              </div>
            </div>

            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Withdrawal
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From USD Wallet <br />
                  to Bank
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500 self-end text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status : <span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                   py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</span>
                </p>
                <div className="flex flex-row">
                <p className="font-medium text-neutral-500 text-[10px] leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>

                <img className="w-3 mt-7 h-3" src={arrowB} alt="" />
              </div>
            </div>
            </div>

            
            <div
              className=" flex justify-between py-[31.5px] border-b-[1px]
               border-b-[black]   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                 Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Card Payment
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : NGN Wallet Top-up
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium self-end text-[9.167px] text-neutral-500 leading-[11.167px] cursor-pointer"
                >
                  Status :<span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</span>
                </p>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                  </p>
                  <img className="w-3 mt-7 h-3" src={arrowC} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From NGN Wallet <br />
                     to AremxyPlug
                </p>
                  <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500 self-end text-[9.167px] leading-[11.167px] cursor-pointer
      "
                >
                   Status :<span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                   py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</span>
                </p>
                <div className="flex flex-row">
                <p className="font-[500] text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowD} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : From NGN Wallet
                   <br />
                   to Bank
                </p>
                 <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Amount : ₦50,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status : <span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-amber-200 rounded-sm  ">Pending</span>
                </p>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <div>
<img className="w-3 mt-7 h-3" src={arrowE} alt="" />
</div>
              </div>
              
              
              
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From USD Wallet
                  <br />
                  to AremxyPlug
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : $60,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status : <span className="font-medium text-white self-end text-[9.167px]
                    leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-red-300 rounded-sm ">Failed</span>
                </p>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span> 
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowF} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : International Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : From USD Wallet <br />
                   to Bank
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : $60,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <p
                  className="font-medium text-neutral-500 self-end text-[9.167px] leading-[11.167px] cursor-pointer
      "
                >
                  Status : <span className="font-medium text-white self-end text-[9.167px] 
                  leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-amber-200 rounded-sm ">Pending</span> 
                </p>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowG} alt="" />
              </div>
            </div>
            </div>
            
            {/* CONTACT US */}
            <div className="flex gap-[5.729px] py-[2.865px] mt-4 justify-center px-[8.594px] ">
              <p className="font-[500] text-[8px] text-[#707070] leading-[10.4px]">
                You need help?
              </p>
              <Link to ="/contactUs"
                className="font-[500] text-white text-[8px]  py-[2.865px] 
 px-[8.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
            </div>
          








              

















        {/* filter by status dropdown */}
        {isOpen2 && (
          <div className="flex absolute lg:top-[725px] top-[300px] md:top-[495px] w-full md:w-full ml-[50px] md:ml-[40px] lg:w-full lg:ml-[60px] flex-col">
            <div className="lg:w-[375px] lg:h-[53px] md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px] ">
                All Transactions
              </div>
            </div>
            <div className="lg:w-[375px] lg:h-[53px]  md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px]">
                Successful
              </div>
            </div>

            <div className="lg:w-[375px] lg:h-[53px]  md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px]">
                Failed
              </div>
            </div>
            <div className="lg:w-[375px] lg:h-[53px]  md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px]  justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px]">
                Pending
              </div>
            </div>
            <div className="lg:w-[375px] lg:h-[53px] md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px]">
                Refunded
              </div>
            </div>
            <div className="lg:w-[375px] lg:h-[53px]  md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-base font-medium lg:leading-tight md:w-[186.20px]  md:text-[14px] md:leading-3 w-[163.80px] text-[8.06px] leading-[10.48px]">
                Canceled
              </div>
            </div>
          </div>
        )}
      
    </DashBoardLayout>
  );
}
