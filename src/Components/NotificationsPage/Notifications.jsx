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
import deletingfiles from "./assets/deletingfile.svg";
import VuesaxBoldEye from "./assets/cancel.svg";
import WalletModal from "../Wallet/WalletModal";


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


  const [Color1, setColor1] = useState("bg-red-400");

  const switchColor1 = () => {
    setColor1((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color2, setColor2] = useState("bg-red-400");
  const switchColor2 = () => {
    setColor2((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color3, setColor3] = useState("bg-red-400");
  const switchColor3 = () => {
    setColor3((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color4, setColor4] = useState("bg-red-400");
  const switchColor4 = () => {
    setColor4((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color5, setColor5] = useState("bg-red-400");
  const switchColor5 = () => {
    setColor5((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color6, setColor6] = useState("bg-red-400");
  const switchColor6 = () => {
    setColor6((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const handleCombinedClick3 = () => {
    
    setColor1("bg-white") 
    setColor2("bg-white") 
    setColor3("bg-white") 
    setColor4("bg-white") 
    setColor5("bg-white") 
    setColor6("bg-white") 
  };


  const [Color7, setColor7] = useState("bg-red-400");
  const switchColor7 = () => {
    setColor7((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color8, setColor8] = useState("bg-red-400");
  const switchColor8 = () => {
    setColor8((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color9, setColor9] = useState("bg-red-400");
  const switchColor9 = () => {
    setColor9((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color10, setColor10] = useState("bg-red-400");
  const switchColor10 = () => {
    setColor10((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color11, setColor11] = useState("bg-red-400");
  const switchColor11 = () => {
    setColor11((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const handleCombinedClick4 = () => {
    
    setColor7("bg-white") 
    setColor8("bg-white") 
    setColor9("bg-white") 
    setColor10("bg-white") 
    setColor11("bg-white") 
 
  };


  const [Color12, setColor12] = useState("bg-red-400");
  const switchColor12 = () => {
    setColor12((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color13, setColor13] = useState("bg-red-400");
  const switchColor13 = () => {
    setColor13((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color14, setColor14] = useState("bg-red-400");
  const switchColor14 = () => {
    setColor14((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color15, setColor15] = useState("bg-red-400");
  const switchColor15 = () => {
    setColor15((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const [Color16, setColor16] = useState("bg-red-400");
  const switchColor16 = () => {
    setColor16((prevColor) =>
      prevColor === "bg-red-400" ? "bg-white" : "bg-white"
    );
  };

  const handleCombinedClick5 = () => {
    
    setColor12("bg-white") 
    setColor13("bg-white") 
    setColor14("bg-white") 
    setColor15("bg-white") 
    setColor16("bg-white") 
 
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
  // const [isOpen13, setIsOpen13] = useState(true);
  // const [isOpen14, setIsOpen14] = useState(true);
  // const [isOpen15, setIsOpen15] = useState(true);

  

  
  const [isAllRead, setIsAllRead] = useState(true);
  const [buttonText, setButtonText] = useState('Mark all as Read');

  const handleButtonClick = () => {
    setIsAllRead((prevIsAllRead) => !prevIsAllRead);


    
    // Update button text based on the new state
    setButtonText(isAllRead ? 'Mark all as Unread' : 'Mark all as Read');

    // Additional click handlers
    handleCombinedClick();
    handleCombinedClick3();
  };

    



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
      prevColor === "bg-sky-100" ? "bg-white" : "bg-white"
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
    setBackgroundColor11("bg-white") 
    setBackgroundColor12("bg-white") 
    setBackgroundColor13("bg-white") 
    setBackgroundColor14("bg-white") 
    setBackgroundColor15("bg-white") 
  };

  const [activeBtn, setActiveBtn] = useState([true, false]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    const clickedBtn = activeBtn.map((isActive, i) => i === index);
    setActiveBtn(clickedBtn);
    setActiveIndex(index);
  };

  const resetActiveButton = () => {
    hidePopup();
    handleClick(0);
  };
  const hidePopup = () => {
    setPopupVisible(false);
  };
  const showPopup = () => {
    setPopupVisible(true);
  };
  const [popupVisible, setPopupVisible] = useState(false);


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
            {isOpen1 &&  (
              <div
                className="flex flex-col relative w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px]
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
                    id="colorReset"
                      onClick={() => {
                        handleCombinedClick();
                        handleCombinedClick3();
                        handleButtonClick()
                        
                      }}
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] whitespace-nowrap mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[8px] md:text-[10px] leading-[normal]"
                      >
                        {buttonText}
                      </div>
                    </div>
                  </div>
                  <div
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

{/* child */}
<div className="flex flex-col lg:gap-7 gap-3 md:gap-5">
                
                <div
                id="colorReset"
                  className={`flex justify-between  items-center w-full 
                  border-b lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-[#d9d9d999] ${backgroundColor}`}
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

                      {isOpen6 && (
                        <div
                          className="Frame758532672 w-[100px] md:w-[180px] lg:w-[190px] mt-[-38px] md:mt-[-80px] 
                    ml-[-52px] md:ml-[-82px] lg:ml-[-40px] z-50 shadow flex-col lg:mt-[-85px]
               justify-start items-start flex"
                        >
                          <div
                            onClick={() => {
                              changeColor();
                              switchColor1();
                            }}
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
                            handleClick(1)
                            showPopup();
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color1}`}
                      />
                    </div>
                  </div>

                </div>

                {popupVisible && (
                <WalletModal>
                <div className="text-center flex justify-center item-center md:mt-[-20px] lg:mt-[15px] 2xl:mt-[-15px]">
                <div
                  className={`${isDarkMode ? "bg-[#000]" : "bg-[]"}
                    flex flex-col justify-center z-[100] lg:ml-[10px] md:w-full`}>
                      <img className=" w-[25px] h-[25px] inline-flex justify-end items-end"  src={VuesaxBoldEye} alt=""/>
                  <div className="w-full h-[22px]  bg-[#04177f]" />
                  <div>
                    <p className="text-[10px] text-center pt-[5%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                    Are you sure you want to delete this Notification?
                    </p>
                    {/* <p className="text-[10px] md:text-[16px] font-[600] text-[#04177F] lg:text-[16px]"> */}
                      {/* This Feature is Currently Not Available. */}
                    {/* </p> */}
                  </div>
                  <img
                    src={deletingfiles}
                    alt=""
                    className="img mx-auto mt-[30px] md:mt-[15%] md:w-[220px] md:mx-[100px] w-[143px] h-[67px] lg:w-[300px] lg:h-[200px] lg:mx-[150px] lg:mt-[10%] 2xl:mt-[10%] 2xl:mx-[180px]"
                  />
                </div>
              </div>
              <div className="mt-[40px] justify-center items-center flex gap-[3px] pb-[5%] 2xl:mt-[1%] lg:mt-[1%] md:mt-[5%] md:pr-[10px]">
                {/* <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]"> */}
                  {/* Coming Soon... */}
                {/* </p> */}
                <button
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } cursor-pointer text-white text-[10px] h-[40px]  lg:rounded-xl lg:w-40 lg:h-9 lg:px-3.5 lg:py-2.5 
                  rounded-[5px]
                   md:rounded-[10px] flex items-center justify-center md:mx-auto md:w-[25%] md:h-[30px] md:text-[14px] 
                   lg:my-[3%]  lg:text-[20px]  lg:mx-auto`}
                  // onClick={resetActiveButton}
                  // handleClick={activeIndex}
                >
                  Yes
                </button>


                
                <button onClick={resetActiveButton}
                        handleClick={activeIndex}
 className="Frame1469 cursor-pointer  w-40 h-9 px-3.5 py-2.5 rounded-xl border border-red-600 
                justify-center items-center gap-2.5 flex">
    <div  className="Cancel text-red-500 text-base font-semibold ">Cancel</div>

                </button>
              </div>
              </WalletModal>
                )}
                                  {/* pop-up */}
                                  {/* <div className="absolute w-full z-50 h-[465px] bg-red-200 rounded-[20px] top-[-40px]  */}
                                  {/* // flex justify-center items-center "> */}
      {/* <div className=" h-[22px] top-[60px] left-0 bg-[#04177f]" /> */}
      {/*  */}
      {/* <img className=" w-[25px] h-[25px] top-[10px]  flex justify-end items-start"  src={VuesaxBoldEye} alt=""/> */}
        {/*  */}
        {/* <div className="flex flex-col items-center gap-[40px] absolute top-0 left-0"> */}
          {/* <div className="flex flex-col justify-center items-center gap-[10px] relative flex-[0_0_auto]"> */}
            {/* <p className=" w-[388px] h-[44px] mt-[120.00px]  font-semibold text-black text-[16px] text-right tracking-[0] leading-[20.8px]"> */}
              {/* Are you sure you want to delete this Notification? */}
            {/* </p> */}
            {/* <img className="relative w-[150px] h-[150px]" alt="Deleting files" src={deletingfiles} /> */}
          {/* </div> */}
          {/* <div className="flex items-start gap-[20px] relative flex-[0_0_auto]"> */}
            {/* <div className="flex w-[163px] h-[38px] items-center justify-center gap-[10px] px-[15px] py-[10px] relative bg-primary-colormain rounded-[12px]"> */}
              {/* <div className="relative w-fit mt-[-4.00px] mb-[-2.00px]  font-semibold text-white text-[16px] tracking-[0] leading-[normal]"> */}
                {/* Yes */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="flex w-[163px] h-[38px] items-center justify-center gap-[10px] px-[15px] py-[10px] relative rounded-[12px] border border-solid border-danger"> */}
              {/* <div className="relative w-fit mt-[-4.00px] mb-[-2.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-variable-collection-text-danger text-[16px] tracking-[0] leading-[normal]"> */}
                {/* Cancel */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/*  */}
                {/* </div> */}


                <div
                  className={` flex w-full justify-between items-center lg:h-[230px] h-[100px] md:h-[150px]
                   lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow   border-b  border-[#d9d9d999] ${backgroundColor1} `}
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
                                                        onClick={() => {
                                                          changeColor1();
                                                          switchColor2();
                                                        }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color2}`}
                      />
                    </div>
                  </div>
                </div>
              


  

                <div
                  className={`flex  border-b  lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow   border-[#d9d9d999] ${backgroundColor2} w-full justify-between 
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
                                                        onClick={() => {
                                                          changeColor2();
                                                          switchColor3();
                                                        }}
                            
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
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color3}`}
                      />
                    </div>
                  </div>
                </div>
                



  

                <div
                  className={`flex border-b lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-[#d9d9d999] ${backgroundColor3} w-full justify-between
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
                                                      onClick={() => {
                                                        changeColor3();
                                                        switchColor4();
                                                      }}
                          
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
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color4}`}
                      />
                    </div>
                  </div>
                </div>
                



  

                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow   border-b  border-[#d9d9d999] ${backgroundColor4} w-full justify-between
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
                                                        onClick={() => {
                                                          changeColor4();
                                                          switchColor5();
                                                        }}
                            
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
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color5}`}
                      />
                    </div>
                  </div>
                </div>
                



  

                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor5} w-full justify-between
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
                                                        onClick={() => {
                                                          changeColor5();
                                                          switchColor6();
                                                        }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color6}`}
                      />
                    </div>
                  </div>
                </div>

    
                <div className="flex gap-[15px] mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
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
              </div>
            )}

            {/* second flow */}
            {isOpen2 && (
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
                                            onClick={() => {
                                              handleCombinedClick1();
                                              handleCombinedClick4();
                                            }}
                      
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

                <div  className="flex flex-col lg:gap-7 gap-3 md:gap-5">

                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor6} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page2">


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
                                                                                 onClick={() => {
                                                                                  changeColor6();
                                                                                  switchColor7();
                                                                                }}
                          
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
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color7}`}
                      />
                    </div>
                  </div>
                </div>
            






                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor7} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page2">


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
                           onClick={() => {
                            changeColor7();
                            switchColor8();
                          }}
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color8}`}
                      />
                    </div>
                  </div>
                </div>






                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor8} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page2">


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
                           onClick={() => {
                            changeColor8();
                            switchColor9();
                          }}
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
                        className={`first-letter:Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color9}`}
                      />
                    </div>
                  </div>
                </div>
                




  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-sm md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor9} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page2">

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
                           onClick={() => {
                            changeColor9();
                            switchColor10();
                          }}
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color10}`}
                      />
                    </div>
                  </div>
                </div>






<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor10} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page2">


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
                           onClick={() => {
  changeColor10();
  switchColor11();
}}
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color11}`}
                      />
                    </div>
                  </div>
                </div>


                <div className="flex gap-[15px]  mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
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
              </div>
            )}
            {/* third flow */}
            {isOpen3 && (
              <div
                className="flex flex-col w-full lg:w-full  md:w-full mt-[50px] lg:mt-[100px] md:mt-[70px]
              md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end items-end  ">
                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                            onClick={() => {
                                              handleCombinedClick2();
                                              handleCombinedClick5();
                                            }}
                      
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
                
<div  className="flex flex-col lg:gap-7 gap-3 md:gap-5">
                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor11} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page3">


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
                                                      onClick={() => {
                                                        changeColor11();
                                                        switchColor12();
                                                      }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color12}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor12} w-full justify-between
                   items-center`}
                >
  <Link to="/launch-page3">

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
                                                      onClick={() => {
                                                        changeColor12();
                                                        switchColor13();
                                                      }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color13}`}
                      />
                    </div>
                  </div>
                </div>
                

 

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor13} w-full justify-between
                   items-center`}
                >
 <Link to="/launch-page3">
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
                                                      onClick={() => {
                                                        changeColor13();
                                                        switchColor14();
                                                      }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color14}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor14} w-full justify-between
                   items-center`}
                >
                   <Link to="/launch-page3">

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
                                                      onClick={() => {
                                                        changeColor14();
                                                        switchColor15();
                                                      }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color15}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${backgroundColor15} w-full justify-between
                   items-center`}
                >
 <Link to="/launch-page3">
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
                                                      onClick={() => {
                                                        changeColor15();
                                                        switchColor16();
                                                      }}
                            
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
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${Color16}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-[15px]  mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
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
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
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
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
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
