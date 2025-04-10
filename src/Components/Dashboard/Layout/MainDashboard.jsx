import React, { useState, useRef } from "react";
import { SideBar } from "../Layout/SideBar";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../../Context";
import { TopBar } from "./TopBar";
import "react-multi-carousel/lib/styles.css";
import styles from "./Dashboard.module.css";
import style from "../DashboardComponents/component.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { RiFileCopyFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import QuickFeatures from "../DashboardComponents/QuickFeatures";
import { WalletInOutFlows } from "../DashboardComponents/WalletInOutFlows";
import { RecentTransaction } from "../DashboardComponents/RecentTransaction";
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";

export const MainDashboard = (Data) => {
  const { setHideNavbar, toggleSideBar, isDarkMode,
    dashLoading, bankNameState, accountNameState, accountNumberState,
  } = useContext(ContextProvider);
  //const {account_no, bank_name, account_name} = virtualAccCreated;
 
  const [visible, setVisibility] = useState(true);
  const [activeButtons, setActiveButtons] = useState([true, false, false]);
  const [blur, setBlur] = useState(false);
  const [blurTwo, setBlurTwo] = useState(false);
   //const [blurThree, setBlurThree] = useState(false);
  const textRef = useRef(null);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [symbol, setSymbol] = useState("₦");
 
  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const visibilityHandler = () => {
    setVisibility(!visible);
  };

  const setNav = () => {
    setHideNavbar(true);
  };

 // Handling the getLocalStoarge information by passing it to data and making available through
 // the body of the  component
const ValueRef = useRef()
 Data = GetLocalStorage()
  useEffect(() => {
    ValueRef.current = Data;

    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);


  const handleClick = (index) => {
    const updatedButtons = activeButtons.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
  };

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    setBlurTwo(
      clickedoption === "USD" ||
        clickedoption === "GBP" ||
        clickedoption === "AUD" ||
        clickedoption === "KES" ||
        clickedoption === "EUR"
    );

    return;
  };

  const handleSelectedOption2 = (event) => {
    const clickedoption = event.target.value;
    setSelected2(clickedoption);
console.log(clickedoption)
if(clickedoption !== "NGN"){
setBlur(true);
setSymbol("₦")
}else if((clickedoption === "NGN" || " ") && blur === true){
     setBlur(false);
    }
    // setBlurTwo(
    //   clickedoption === "USD" ||
    //     clickedoption === "GBP" ||
    //     clickedoption === "AUD" ||
    //     clickedoption === "KES" ||
    //     clickedoption === "EUR" 
    // );
    // clickedoption === "NGN"
    //   ? setSymbol("₦")
    //   : clickedoption === "USD"
    //   ? setSymbol("$")
    //   : clickedoption === "GBP"
    //   ? setSymbol("£")
    //   : clickedoption === "AUD"
    //   ? setSymbol("AU$")
    //   : clickedoption === "KES"
    //   ? setSymbol("KSh")
    //   : clickedoption === "EUR"
    //   ? setSymbol("€")
    //   : setSymbol("");
    return;
  };
//console.log(ConfirmAcc);
return (
    <div className="h-[150%]">
      {/* ==============TOP BAR========== */}
      <TopBar />

      <div className="w-[100%] h-[200%]">
        {/* ============SIDE BAR========= */}
        {toggleSideBar && (
          <div className="absolute top-0 left-0 z-50">
            <SideBar fullname ={Data.UserFullName} userId ={Data.aremxyUserId}
            BvnVerify ={Data.ConfirmBvn} NinVerify={Data.ConfirmId}/>
          </div>
        )}
        <div
          className={`${
            toggleSideBar ? "lg:w-[73.5%] lg:float-right" : ""
          } w-[] mx-[5%] mt-[8%] lg:mt-[3%] h-[150%] mb-[5%] `}
        >
          {/* ==============HERO SECTION========== */}
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            speed="2000"
            loop="true"
          >
            <SwiperSlide>
              {" "}
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#FFC589] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px] ">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    Welcome TO AREMXYPLUG!
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    The most Reliable Platform for Telecom, Payments, and
                    Digital Services.
                  </h2>
                </div>

                <img
                  className="w-[91px] h-[66px] lg:w-[288px] lg:h-[200px]"
                  src="./Images/dashboardImages/hero1image.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#BAC5F4] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    SPEND GLOBALLY WITH AREMXYPLUG!
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    Send, Receive, and Store Money Securely without any Hassle.
                  </h2>
                </div>
                <div className="w-[91px] h-[66px] lg:w-[275px] lg:h-[200px]">
                  <img
                    src="./Images/dashboardImages/hero2image.png"
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#3FBDF1] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    OUR PLATFORM IS PROTECTED AND SECURED.
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    We use Industry-Standard Security Protocols and Advanced
                    Encryption to Protect your Data.
                  </h2>
                </div>
                <div className="w-[91px] h-[66px] lg:w-[220px] lg:h-[180px]">
                  <img
                    src="./Images/dashboardImages/hero3image.png"
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* ==============HERO SECTION CLOSE========== */}

          {/* ==========AVAILABLE BALANCE=========== */}
        
          <div className={` flex flex-col md:flex-row gap-5 mt-[10%] md:mt-4
            lg:mt-12 lg:rounded-[16.32px]  w-full`}>
            <div
              className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } w-[100%] md:w-1/2 flex flex-col h-auto rounded-[8px] md:rounded-[10px] lg:rounded-[16.32px]
              lg:p-[20px] md:p-[15px] p-[10px] justify-between`}
            >
              <Link to="/wallet">
                <button
                  className={`text-[10px] md:text-[11px] lg:text-[12px] font-[600] ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Wallets
                </button>
              </Link>
              <p 
                className={`cursor-pointer ${
                  toggleSideBar ? "lg:text-[18px]" : "lg:text-[24px]"
                } ${styles.walletText} `}
              >
                Available Balance
              </p>
              {blur && (
                <div
                  className={`${
                    isDarkMode ? " text-[#fff]" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "backdrop-blur-[4.5px] font-bold text-[13px] pt-[4%] md:absolute md:w-[30%]  md:ml-[3%] md:text-[19px] md:text-center lg:absolute lg:mt-2 lg:ml-[2%] lg:w-[33%] lg:text-[24px]  text-[#04177f] lg:pb-[70px]"
                      : "backdrop-blur-[4.5px] absolute w-[75%] md:w-[30%] text-[13px] font-bold text-center mt-[2%] md:mt-[5%] ml-[6%] pt-[8%] md:pt-[4%] md:text-[15px] md:pb-[6%] lg:pb-[8%]  md:text-extrabold lg:text-[24px] lg:mt-[0px] lg:ml-[4%] lg:w-[37%] lg:pt-[%] "}
                    ${activeButtons[1] 
                    ? "h-[130px] md:h-[100px] lg:h-[220px] md:pt-[8%]" :" h-[70px] md:h-[40px] lg:h-[90px] md:pt-[4%]"}`}>
                  This feature is currently not available...
                </div>
              )}
             
              {/* ================= */}
              {!activeButtons[2] ? (
                <div
                  className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                    styles.viewBalance
                  }`}
                >
                  <select
                    className={`${styles.selected}`}
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption2}
                    value={selected2}
                       
                  >
                    <option value="NGN">NGN</option>
                    <option  value="USD">USD</option>
                    <option  value="GBP">GBP</option>
                    <option  value="EUR">EUR</option>
                    <option  value="AUD">AUD</option>
                    <option  value="KES">KES</option>
                  </select>
                  {selected2 === "NGN" || " " ? (
                  visible ? (
                    <span
                      className={` ${
                        toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                      } text-[19px] leading-normal `}
                    >
                      ******
                    </span>
                  ) : (
                    <span className="text-[19px] leading-normal lg:text-[37px]">
                      {symbol}0.00
                    </span>
                    )) : (
                      <div className="backdrop-blur-lg p-4"/>

          
                    )}
                  <div onClick={visibilityHandler} className=" text-[#92ABFE]">
                    {visible ? (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEye />
                      </div>
                    ) : (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEyeInvisible />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                    styles.viewBalance
                  }`}
                >
                  {visible ? (
                    <span
                      className={` ${
                        toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                      } text-[19px] leading-normal `}
                    >
                      ******
                    </span>
                  ) : (
                    <span className="flex items-center text-[19px] leading-normal lg:text-[37px]">
                      0000.00
                    </span>
                  )}
                  <div onClick={visibilityHandler} className=" text-[#92ABFE]">
                    {visible ? (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEye />
                      </div>
                    ) : (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEyeInvisible />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* ==================== */}
              <div
                className={`${toggleSideBar ? "lg:mt-[20%]" : ""} ${
                  styles.fcp
                } flex justify-between items-center mt-[10%] md:mt-[9%] `}
              >
                <div
                  onClick={() => {
                    handleClick(0);
                    if(selected2 === "NGN"){
                    setBlur(false);
                    }else{
                    setBlur(true);
                    }
                    // setBlurThree();
                  }}
                  value="fiat"
                  className={`${styles.fcp2}  ${
                    activeButtons[0]
                      ? "bg-[#04177f] text-[#fff]"
                      : " bg-[#92ABFE2E]"
                  } ${
                    isDarkMode ? " border" : " "
                  } cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] `}
                >
                  Fiat
                </div>

                <div
                  onClick={() => {
                    handleClick(1);
                    setBlur(true);
                    // setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] ${
                    activeButtons[1]
                      ? "bg-[#04177f] text-[#fff]"
                      : "bg-[#92ABFE2E]"
                  } `}
                >
                  Crypto
                </div>

                <div
                  onClick={() => {
                    handleClick(2);
                    setBlur(false);
                    // setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  }  cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] ${
                    activeButtons[2]
                      ? "bg-[#04177f] text-[#fff]"
                      : "bg-[#92ABFE2E]"
                  } `}
                >
                  Points
                </div>
              </div>
            </div>

            {/* ==========VIRTUAL ACCOUNTS============= */}
            {dashLoading ? (<div className=" flex justify-center items-center md:w-1/2  lg:h-[200px] w-[100%] h-[100px]">
             <Loader/>
            </div>):
            (
            <div
            className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } w-full h-auto md:w-1/2 rounded-[8.32px] lg:rounded-[16.32px] md:rounded-[10px]
              flex flex-col justify-between lg:p-[20px] md:p-[15px] p-[10px]`} >
                <div className="h-full w-full">
         {Data.ConfirmAcc === false ? (
          <div ClassName="h-full w-full">
              <Link to="/virtual-account">
                {" "}
                <button
                  className={`text-[10px] md:text-[11px] lg:text-[12px] font-[600]  ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Accounts
                </button>
              </Link>
              <div>
                <div className="flex mt-[8%] gap-[30px] md:mt-[5%] lg:mt-[9%]">
                  <p 
                    className={`${styles.GVA} ${
                      toggleSideBar ? "lg:text-[10px]" : "lg:text-[24px]"
                    } text-[11px] font-extrabold cursor-pointer`}
                  >
                    Global Virtual Accounts
                  </p>

                  <select
                    className={`${styles.selected}`}
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption}
                    value={selected}
                  >
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="KES">KES</option>
                  </select>
                </div>
                <p className="w-[50%] text-[8px] md:text-[10px] text-[#04177f] leading-normal font-bold lg:text-[11px]">
                  The below accounts are reserved for your wallet only.
                </p>
              </div>

              {blurTwo && (
                <div
                  className={` ${
                    isDarkMode ? " text-[#fff]" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "backdrop-blur-[5px]  font-extrabold absolute lg:h-[27%] lg:w-[35%] lg:ml-[-8px] lg:flex lg:justify-start lg:mt-[11%] lg:pt-[2%] lg:text-[25px] lg:text-[#04177f]"
                      : "backdrop-blur-[4.5px] absolute text-[14px] h-[13%] w-[85%] mt-[28%] lg:mt-[11%] font-extrabold flex justify-start pt-[7%] md:h-[11%] md:text-[25px] md:pt-[5%] lg:w-[45%] lg:h-[28%] lg:ml-[-1%]"
                  } `}
                >
                  Coming Soon...
                </div>
              )}

              <div
                className={`${
                  toggleSideBar ? "lg:gap-[20px]" : "lg:gap-[30px]"
                } mt-[5%] flex flex-col gap-[10px] `}
              >
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px] lg:mt-[1%]" : ""
                  } flex text-[10px] gap-[20px]  md:text-[15px]`}
                >
                  <h2 className="font-semibold w-1/2 text-[10px]  md:text-[11px] lg:text-[12px]">Bank Name</h2>
               <p className="text-[10px] text-right w-1/2 md:text-[11px] lg:text-[12px] font-[400]">{bankNameState ? bankNameState : Data.aremxyBankName ?Data.aremxyBankName : "" }</p> 
                </div>
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[10px]  md:text-[11px] lg:text-[12px]">Account Name</h2>
                  <p className="text-[10px] w-1/2 md:text-[11px] text-right lg:text-[12px] font-[400]">{accountNameState ? accountNameState :Data.aremxyAccountName ? Data.aremxyAccountName.slice(11) : ""}</p>
                </div>
               
                <div
                className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[10px] md:text-[11px] lg:text-[12px]">Account Number</h2>
                  <div className="flex justify-end items-center w-1/2 gap-[10px]">
                    <p className="text-[10px]  md:text-[11px] lg:text-[12px] font-[400]" ref={textRef}>{accountNumberState ? accountNumberState : Data.aremxyAccountNumber ? `${Data.aremxyAccountNumber.slice(0,4)}********` : ""}</p>
                    <div
                      onClick={handleCopyClick}
                      className="text-[#92abfec3] text-[13px] font-extrabold lg:text-[16px]"
                    >
                      <RiFileCopyFill />
                    </div>
                  </div>
                
                </div>
               
                </div>
                </div>
                ): (
                  <div className="h-full w-full flex flex-col items-center justify-center ">
              <p className={`text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] 
                 md:leading-[18px] lg:leading-[22px] font-[500] lg:font-[600]
              md:my-[5%] lg:my-[7%] 
               ${isDarkMode ? "text-white" : "text-black"}  `}>
         Add a means of identification to create a virtual Account.
              </p>
              <p className={`lg:text-[16px] font-[500] lg:leading-[24px] hidden md:block ${isDarkMode ? "text-white" : "text-black"}`}>
                This is Collected for secure and cyber-attack-free transactions among AremxyPlug's users</p>
                </div>
                )}
                </div>
                {/* Point of implementation */}
              <Link to={{
    pathname: "/ProfileSettingMain",
    state: { verificationOpen: true }
  }}>
                {" "}

                <button
                  className={`text-[10px] md:text-[11px] lg:text-[12px] font-[600] mt-[20px] lg:mt-[30px] ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
               {(Data.ConfirmId === false && Data.ConfirmBvn === false) ? "Verify" : `${Data.ConfirmAcc === false  ?  "Verified" : "Generate"}` }
                </button>
              </Link>
            </div>
                )}
            {/* Stop*/}
          </div>
          {/* ================VIRTUAL ACCOUNT CLOSE=============== */}

          <div
            className={`flex justify-between w-[100%] ${
              toggleSideBar ? "lg:gap-[63px]" : "lg:gap-[80px]"
            } flex mt-[5%] gap-[10px] md:gap-[50px] `}
          >
            <Link
              to="/top-up"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] rounded-[10px] lg:rounded-[19px] lg:py-[15px]
               py-[12px] flex items-center px-[10px] gap-[10%]
                `}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/topup.png"
                alt="topup"
              />
              <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Topup</p>
            </Link>
            <Link
              to="/money-transfer"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f] "
              } w-[25%] py-[12px] px-[10px] lg:py-[15px]
               flex items-center gap-[10%] rounded-[10px] lg:rounded-[19px]`}
            >
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/transfer.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Transfer</p>
            </Link>
            <Link
              to="/withdraw"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] py-[12px] px-[10px] lg:py-[15px]
              flex items-center gap-[10%] rounded-[10px] lg:rounded-[19px]`}
            >
              {" "}
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/withdraw.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Withdraw</p>
            
            </Link>
            <Link
              to="/currencyConversion"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] py-[12px] flex items-center gap-[10%] 
              rounded-[10px] lg:py-[15px] lg:rounded-[19px] px-[10px]`}
            >
                <img
                  className="w-[11px] h-[11px]
                   md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/convert.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[14px] lg:text-[16px] 
                font-[500] lg:font-[600]">Convert</p>
              
            </Link>
          </div>

          <QuickFeatures />
          <WalletInOutFlows className={styles.selected} />
          <RecentTransaction />
        </div>
        <div
        className={`transaction2 flex justify-center pb-[10%]`}
          >
            <div className="flex gap-[15px] items-center md:mt-[40px]">
              <div className="text-[8px] md:text-[12px] lg:text-[14px]">
                You need help ?
              </div>
              <Link to="/ContactUs">
                <div
                  className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                    style.contactus
                  }`}
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </div> 
      </div>
    </div>
  );
};
