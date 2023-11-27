import React, { useState } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import stack from "./assets/stack.svg";
import starbox from "./assets/startbox.svg";
import arrangebox from "./assets/arrangebox.svg";
import wallet from "./assets/walletbox.svg";
import cards from "./assets/cardbox.svg";
import charts from "./assets/chartbox.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import "./Notifications.css";
import faq from "./assets/faq.svg";
import file from "./assets/file.svg";
import folder from "./assets/folder.svg";
import five from "./assets/five.svg";
import envelope from "./assets/envelope.svg";
import bin from "./assets/bin.svg";

export default function NotificationsPage() {
  const { isDarkMode } = useContext(ContextProvider);


  const [backgroundColor, setBackgroundColor] = useState("bg-sky-100");
  const changeColor = () => {
    setBackgroundColor((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };

  const [backgroundColor1, setBackgroundColor1] = useState("bg-sky-100");

  const changeColor1 = () => {
    setBackgroundColor1((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };

  const [backgroundColor2, setBackgroundColor2] = useState("bg-sky-100");

  const changeColor2 = () => {
    setBackgroundColor2((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor3, setBackgroundColor3] = useState("bg-sky-100");

  const changeColor3 = () => {
    setBackgroundColor3((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor4, setBackgroundColor4] = useState("bg-sky-100");

  const changeColor4 = () => {
    setBackgroundColor4((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor5, setBackgroundColor5] = useState("bg-sky-100");

  const changeColor5 = () => {
    setBackgroundColor5((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };

  const handleCombinedClick = () => {
    setBackgroundColor("bg-white") 


    setBackgroundColor1("bg-white") 
    setBackgroundColor2("bg-white") 
    setBackgroundColor3("bg-white") 
    setBackgroundColor4("bg-white") 
    setBackgroundColor5("bg-white") 
  };

  const [isOpen1, setIsOpen1] = useState(true);   
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen13, setIsOpen13] = useState(true);
  const [isOpen14, setIsOpen14] = useState(true);
  const [isOpen15, setIsOpen15] = useState(true);





  const [isOpen12, setIsOpen12] = useState(true);
 const [isOpen16, setIsOpen16] = useState(true);
  const [isOpen17, setIsOpen17] = useState(true);
  const [isOpen18, setIsOpen18] = useState(true);
  const [isOpen19, setIsOpen19] = useState(true);
  const [isOpen20, setIsOpen20] = useState(true);


const [isOpen21, setIsOpen21] = useState(true);
const [isOpen22, setIsOpen22] = useState(true);
const [isOpen23, setIsOpen23] = useState(true);
const [isOpen24, setIsOpen24] = useState(true);
const [isOpen25, setIsOpen25] = useState(true);





  const [backgroundColor6, setBackgroundColor6] = useState("bg-sky-100");

  const changeColor6 = () => {
    setBackgroundColor6((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };

  const [backgroundColor7, setBackgroundColor7] = useState("bg-sky-100");

  const changeColor7 = () => {
    setBackgroundColor7((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor8, setBackgroundColor8] = useState("bg-sky-100");

  const changeColor8 = () => {
    setBackgroundColor8((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor9, setBackgroundColor9] = useState("bg-sky-100");

  const changeColor9 = () => {
    setBackgroundColor9((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor10, setBackgroundColor10] = useState("bg-sky-100");

  const changeColor10 = () => {
    setBackgroundColor10((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "white"
    );
  };


  const handleCombinedClick1 = () => {
    setBackgroundColor6("bg-white") 
    setBackgroundColor7("bg-white") 
    setBackgroundColor8("bg-white") 
    setBackgroundColor9("bg-white") 
    setBackgroundColor10("bg-white") 
  };




  const [backgroundColor11, setBackgroundColor11] = useState("bg-sky-100");

  const changeColor11 = () => {
    setBackgroundColor11((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };

  const [backgroundColor12, setBackgroundColor12] = useState("bg-sky-100");

  const changeColor12 = () => {
    setBackgroundColor12((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor13, setBackgroundColor13] = useState("bg-sky-100");

  const changeColor13 = () => {
    setBackgroundColor13((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor14, setBackgroundColor14] = useState("bg-sky-100");

  const changeColor14 = () => {
    setBackgroundColor14((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };
  const [backgroundColor15, setBackgroundColor15] = useState("bg-sky-100");

  const changeColor15 = () => {
    setBackgroundColor15((prevColor) =>
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
    );
  };


  const handleCombinedClick2 = () => {
    setBackgroundColor6("bg-white") 
    setBackgroundColor7("bg-white") 
    setBackgroundColor8("bg-white") 
    setBackgroundColor9("bg-white") 
    setBackgroundColor10("bg-white") 
  };


  return (
    <DashBoardLayout>
      <>
        <div class="flex gap-[25px] lg:w-full lg:h-[1850px] md:h-[1200px] h-[800px] md:w-full w-full flex-col">
          <div
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px]
     bg-gradient-to-r from-indigo-300 via-fuchsia-500 to-rose-500 flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2
                className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 
              2xl:w-[80%] 2xl:text-[24px] lg:mb-4"
              >
                GET NOTIFIED AND STAY UP TO DATE WITH <br /> AREMXYPLUG.
              </h2>
              <h2
                className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px]
               w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px]
               lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]"
              >
                Be extraordinaire updated, never miss out on any of our official
                updates, trends, news, announcements, and opportunities.
              </h2>
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={stack}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          </div>
          <div className="flex flex-col relative">
            <div className="Frame758532592 w-full justify-between gap-3 flex">
              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen1(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen4(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32  lg:h-28 md:w-20 md:h-16 w-14 h-12  flex"
                    src={starbox}
                    alt=""
                  />
                  {isOpen1 && (
                    <div
                      className="Group13108 lg:w-5 lg:h-5 lg:mt-[-109px] lg:ml-[107px] md:mt-[-61px] md:ml-[67px]
                  mt-[-46px] ml-[45px] flex flex-col "
                    >
                      <div className="Ellipse147 lg:w-5 lg:h-5 w-[9px] h-[9px] left-0 top-0  bg-red-400 rounded-full" />
                      <div
                        className=" lg:ml-[6px] lg:mt-[-17px] mt-[-8px] ml-[4px] md:ml-[3px] text-white lg:text-xs text-[5px]
                  font-semibold font-['Poppins']"
                      >
                        6
                      </div>
                    </div>
                  )}
                </div>
                {isOpen1 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[145px]  md:w-[79px] mt-[59.555px] md:mt-[84.255px] lg:rounded-[10px]"
                  />
                )}
              </div>
              <div
                onClick={() => {
                  setIsOpen2(true);
                  setIsOpen1(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className="flex  flex-col"
              >
                <div className=" cursor-pointer">
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={arrangebox}
                    alt=""
                  />
                  {isOpen2 && (
                    <img
                      className=" lg:w-[20px] lg:h-[20px]  lg:top-[4px] w-[9px] h-[9px] ml-[45px] mt-[-47px]
                lg:mt-[-110px] lg:ml-[106px] md:mt-[-62px] md:ml-[67px] "
                      src={five}
                      alt=""
                    />
                  )}
                </div>
                {isOpen2 && (
                  <div
                    className="w-[55px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[146px]  md:w-[79px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen3(true);
                    setIsOpen2(false);
                    setIsOpen1(false);
                    setIsOpen4(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20  md:h-16 w-14 h-12 flex"
                    src={wallet}
                    alt=""
                  />
                  {isOpen3 && (
                    <img
                      className="lg:mt-[-110px] lg:ml-[106px] lg:w-[20px] lg:h-[20px] 
                 md:mt-[-62px] md:ml-[67px] w-[9px] h-[9px] ml-[45px] mt-[-47px] "
                      src={five}
                      alt=""
                    />
                  )}
                </div>
                {isOpen3 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[146px]  md:w-[79px]  mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen4(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen1(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={cards}
                    alt=""
                  />
                </div>
                {isOpen4 && (
                  <div
                    className="w-[55px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[56px] md:w-[79px] mt-[22px] md:mt-[32px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen5(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen4(false);
                    setIsOpen1(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={charts}
                    alt=""
                  />
                </div>
                {isOpen5 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[56px] md:w-[79px] mt-[22px] md:mt-[32px] lg:rounded-[10px]"
                  />
                )}
              </div>
            </div>
            <div
              className=" lg:w-full lg:h-[2px] absolute w-full md:w-full h-px top-[70px] md:top-[96px] 
               left-[3px] bg-[#d9d9d999]
           lg:top-[168px] lg:left-[2px] md:left-[5px] lg:rounded-[10px] rounded-[5.87px]"
            ></div>


            {/* first flow */}
            {isOpen1 && isOpen13 && (
              <div
                className="flex flex-col w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px]
         md:mt-[70px] md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
                <div
                  className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end 
items-end  "
                >
                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                      onClick={handleCombinedClick}
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[16px] tracking-[0] text-[8px] md:text-[10px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setIsOpen13((prev) => !prev);
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      setIsOpen5(false);
                    }}
                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[16px] text-[8px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>

                
                <div
                  className={`flex justify-between items-center w-full 
                  border-b  border-[#d9d9d999] ${backgroundColor}`}
                >
                  <Link to="/launch-page">
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[8px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
                  </Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between ">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                      {isOpen6 && isOpen12 &&(
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            onClick={() => {
                              setIsOpen12((prev) => !prev);
                              setIsOpen7(false);
                              setIsOpen8(false);
                              setIsOpen9(false);
                              setIsOpen10(false);
                              setIsOpen11(false);
                              setIsOpen16(false);
                              setIsOpen17(false);
                              setIsOpen18(false);
                              setIsOpen19(false);
                              setIsOpen20(false);
                            }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen6((prev) => !prev);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                

{isOpen16 && (
                <div
                  className={` flex w-full justify-between items-center  border-b  border-[#d9d9d999] ${backgroundColor1} `}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />
                      {isOpen7 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor1}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                          onClick={() => {
                            setIsOpen16((prev) => !prev);
                            setIsOpen7(false);
                            setIsOpen8(false);
                            setIsOpen9(false);
                            setIsOpen10(false);
                            setIsOpen11(false);
                            setIsOpen12(false);
                            setIsOpen17(false);
                            setIsOpen18(false);
                            setIsOpen19(false);
                            setIsOpen20(false);
                          }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end cursor-pointer items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen7((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418  flex-col justify-center items-start gap-0.5 cursor-pointer flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              
)}

{isOpen17 && (
  

                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor2} w-full justify-between 
                  items-center `}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                      {isOpen8 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor2}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                                                    onClick={() => {
                                                      setIsOpen17((prev) => !prev);
                                                      setIsOpen7(false);
                                                      setIsOpen8(false);
                                                      setIsOpen9(false);
                                                      setIsOpen10(false);
                                                      setIsOpen11(false);
                                                      setIsOpen12(false);
                                                      setIsOpen16(false);
                                                      setIsOpen18(false);
                                                      setIsOpen19(false);
                                                      setIsOpen20(false);
                                                    }}
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen8((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
)}

{isOpen18 && (
  

                <div
                  className={`flex border-b border-[#d9d9d999] ${backgroundColor3} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                      {isOpen9 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor3}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                                                    onClick={() => {
                                                      setIsOpen18((prev) => !prev);
                                                      setIsOpen7(false);
                                                      setIsOpen8(false);
                                                      setIsOpen9(false);
                                                      setIsOpen10(false);
                                                      setIsOpen11(false);
                                                      setIsOpen12(false);
                                                      setIsOpen17(false);
                                                      setIsOpen16(false);
                                                      setIsOpen19(false);
                                                      setIsOpen20(false);
                                                    }}
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen9((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
)}

{isOpen19 && (
  

                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor4} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                      {isOpen10 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor4}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                                                    onClick={() => {
                                                      setIsOpen19((prev) => !prev);
                                                      setIsOpen7(false);
                                                      setIsOpen8(false);
                                                      setIsOpen9(false);
                                                      setIsOpen10(false);
                                                      setIsOpen11(false);
                                                      setIsOpen12(false);
                                                      setIsOpen17(false);
                                                      setIsOpen18(false);
                                                      setIsOpen16(false);
                                                      setIsOpen20(false);
                                                    }}
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen10((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
)}

{isOpen20 && (
  

                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor5} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all things
                      telecom,
                      <br /> payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                      {isOpen11 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={changeColor5}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                                                    onClick={() => {
                                                      setIsOpen20((prev) => !prev);
                                                      setIsOpen7(false);
                                                      setIsOpen8(false);
                                                      setIsOpen9(false);
                                                      setIsOpen10(false);
                                                      setIsOpen11(false);
                                                      setIsOpen12(false);
                                                      setIsOpen17(false);
                                                      setIsOpen18(false);
                                                      setIsOpen19(false);
                                                      setIsOpen16(false);
                                                    }}
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen11((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

      )}
      
                <div
                  className=" flex gap-[5.729px] mt-[90px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
                >
                  <p
                    className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]   md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                  >
                    You need help?
                  </p>
                  <Link
                    to="/contactUs"
                    className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}

            {/* second flow */}
            {isOpen2 && isOpen14 && (
              <div
                className="flex flex-col w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px]
         md:mt-[70px] md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end items-end  ">
                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                      onClick={handleCombinedClick1}
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[16px] tracking-[0] text-[8px] md:text-[10px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setIsOpen14((prev) => !prev);
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      setIsOpen5(false);
                    }}
                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[16px] text-[8px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>
{isOpen21 && (
                

                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor6} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                      <br /> Data Top-up features for all local networks
                      <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                      {isOpen6 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor6}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                                                                              onClick={() => {
                                                                                setIsOpen21((prev) => !prev);
                                                                                setIsOpen22(false);
                                                                                setIsOpen23(false);
                                                                                setIsOpen24(false);
                                                                                setIsOpen25(false);

                                                                              }}
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen6((prev) => !prev);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
            

)}

{isOpen22 && (


                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor7} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[8px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                      <br /> Data Top-up features for all local networks
                      <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />
                      {isOpen7 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                          onClick={changeColor7}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                           onClick={() => {
                            setIsOpen22((prev) => !prev);
                            setIsOpen21(false);
                            setIsOpen23(false);
                            setIsOpen24(false);
                            setIsOpen25(false);
                          }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen7((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

)}

{isOpen23 && (


                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor8} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                      <br /> Data Top-up features for all local networks
                      <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                      {isOpen8 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                          onClick={changeColor8}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                           onClick={() => {
                            setIsOpen23((prev) => !prev);
                            setIsOpen21(false);
                            setIsOpen22(false);
                            setIsOpen24(false);
                            setIsOpen25(false);
                          }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen8((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
)}


{isOpen24 && (
  

<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor9} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                      <br /> Data Top-up features for all local networks
                      <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                      {isOpen9 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                          onClick={changeColor9}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          
                          <div
                           onClick={() => {
                            setIsOpen24((prev) => !prev);
                            setIsOpen23(false);
                            setIsOpen22(false);
                            setIsOpen21(false);
                            setIsOpen25(false);
                          }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen9((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

)}

{isOpen25 && (


<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor10} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                      <br /> Data Top-up features for all local networks
                      <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                      {isOpen10 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                          onClick={changeColor10}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                           onClick={() => {
                            setIsOpen25((prev) => !prev);
                            setIsOpen24(false);
                            setIsOpen23(false);
                            setIsOpen22(false);
                            setIsOpen21(false);
                          }}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen10((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

)}
                <div
                  className=" flex gap-[5.729px] mt-[90px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
                >
                  <p
                    className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                  >
                    You need help?
                  </p>
                  <Link
                    to="/contactUs"
                    className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
            {/* third flow */}
            {isOpen3 && isOpen15 && (
              <div
                className="flex flex-col w-full lg:w-full  md:w-full mt-[50px] lg:mt-[100px] md:mt-[60px]
              md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end items-end  ">
                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                      onClick={handleCombinedClick2}
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[16px] tracking-[0] text-[8px] md:text-[10px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setIsOpen15((prev) => !prev);
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      setIsOpen5(false);
                    }}
                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[16px] text-[8px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>
                

                <div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor11} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Local Money Transfer
                      <br /> product with features like Transfer to Personal
                      <br /> Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                      {isOpen6 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor11}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen6((prev) => !prev);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor12} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[8px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                      We are excited to launch our Local Money Transfer
                      <br /> product with features like Transfer to Personal
                      <br /> Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                      {isOpen7 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor12}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen7((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                

 

<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor13} w-full justify-between
                   items-center`}
                >
 <Link to="/launch-page">
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Local Money Transfer
                      <br /> product with features like Transfer to Personal
                      <br /> Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                      {isOpen8 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor13}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen8((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor14} w-full justify-between
                   items-center`}
                >
                   <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs   text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Local Money Transfer
                      <br /> product with features like Transfer to Personal
                      <br /> Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                      {isOpen9 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor14}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen9((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex  border-b  border-[#d9d9d999] ${backgroundColor15} w-full justify-between
                   items-center`}
                >
 <Link to="/launch-page">
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs   text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Local Money Transfer
                      <br /> product with features like Transfer to Personal
                      <br /> Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
                  </Link>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />
                      {isOpen10 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                           onClick={changeColor15}
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as Read
                            </div>
                          </div>
                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div
                        onClick={() => {
                          setIsOpen10((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className="Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className=" flex gap-[5.729px] mt-[90px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
                >
                  <p
                    className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                  >
                    You need help?
                  </p>
                  <Link
                    to="/contactUs"
                    className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}

            {/* fourth flow */}
            {isOpen4 && (
              <div className={`${styles.viewTransactions} mt-[50px] `}>
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                {/* <div className={styles.viewAll}> */}
                {/* <div className={styles.viewText}>View all transactions</div> */}
                {/* <img */}
                {/* // className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" */}
                {/* // src="./Images/Dashboardimages/empty-wallet-add.png" */}
                {/* // alt="" */}
                {/* // /> */}
                {/* </div> */}
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[290px] lg:mt-[900px] md:mt-[600px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            )}
            {/* fifth flow */}
            {isOpen5 && (
              <div
                className={`${styles.viewTransactions} mt-[50px] justify-end items-end flex `}
              >
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                {/* <div className={styles.viewAll}> */}
                {/* <div className={styles.viewText}>View all transactions</div> */}
                {/* <img */}
                {/* // className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" */}
                {/* // src="./Images/Dashboardimages/empty-wallet-add.png" */}
                {/* // alt="" */}
                {/* // /> */}
                {/* </div> */}
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[290px] lg:mt-[900px] md:mt-[600px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    </DashBoardLayout>
  );
}
