import React, { useState, useRef } from "react";
import { SideBar } from "../Layout/SideBar";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../../Context";
import { TopBar } from "./TopBar";
import "react-multi-carousel/lib/styles.css";
import styles from "./Dashboard.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { RiFileCopyFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import QuickFeatures from "../DashboardComponents/QuickFeatures";
import { WalletInOutFlows } from "../DashboardComponents/WalletInOutFlows";
import { RecentTransaction } from "../DashboardComponents/RecentTransaction";
import { Link } from "react-router-dom";

export const MainDashboard = () => {
  const { setHideNavbar, toggleSideBar, isDarkMode } =
    useContext(ContextProvider);
  const [visible, setVisibility] = useState(true);
  const [activeButtons, setActiveButtons] = useState([false, false, false]);
  const [blur, setBlur] = useState(false);
  const [blurTwo, setBlurTwo] = useState(false);
  const [blurThree, setBlurThree] = useState(false);
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

  useEffect(() => {
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
    // setBlurThree(
    //   clickedoption === "USD" ||
    //     clickedoption === "GBP" ||
    //     clickedoption === "AUD" ||
    //     clickedoption === "KES" ||
    //     clickedoption === "EUR" ||
    //     clickedoption === "fiat"
    // );
    clickedoption === "NGN"
      ? setSymbol("₦")
      : clickedoption === "USD"
      ? setSymbol("$")
      : clickedoption === "GBP"
      ? setSymbol("£")
      : clickedoption === "AUD"
      ? setSymbol("AU$")
      : clickedoption === "KES"
      ? setSymbol("KSh")
      : clickedoption === "EUR"
      ? setSymbol("€")
      : setSymbol("");
    return;
  };

  return (
    <div>
      {/* ==============TOP BAR========== */}
      <TopBar />

      <div className="w-[100%]">
        {/* ============SIDE BAR========= */}
        {toggleSideBar && (
          <div className="absolute top-0 left-0 z-50">
            <SideBar />
          </div>
        )}
        <div
          className={`${
            toggleSideBar ? "lg:w-[73.5%] lg:float-right" : ""
          } w-[] mx-[5%] mt-[8%] lg:mt-[3%] `}
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
          <div className={styles.balance}>
            <div
              className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } ${styles.balance1}`}
            >
              <Link to="/wallet">
                <button
                  className={`${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Wallets
                </button>
              </Link>
              <p
                className={`${
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
                      ? "backdrop-blur-[4.5px] md:absolute md:w-[80%] md:h-[65px] md:ml-[3%] md:text-[19px] md:text-center lg:absolute lg:mt-2 lg:ml-[2%] lg:w-[28%] lg:text-[20px] lg:h-[89px] text-[#04177f]"
                      : "backdrop-blur-[4.5px] absolute w-[70%] h-[70px] text-[13px] font-bold text-center ml-[6%] pt-[3%] md:text-[20px] md:mt-[%] md:pb-[8%] md:pt-[0%] md:h-[40px] md:text-extrabold lg:text-[24px] lg:ml-[4%] lg:w-[33%] lg:pt-[1%] lg:h-[90px]"
                  } `}
                >
                  This feature is currently not available...
                </div>
              )}
              {blurThree && (
                <div
                  className={`${
                    isDarkMode ? " text-[#fff]" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "backdrop-blur-[4.5px] md:absolute md:w-[80%] md:h-[65px] md:ml-[3%] md:text-[19px] md:text-center lg:absolute lg:mt-12 lg:font-extrabold lg:ml-[2%] lg:w-[14%] lg:text-[22px] lg:h-[50px] lg:left-[33%] text-[#04177f]"
                      : "backdrop-blur-[4.5px] absolute w-[38%] right-[23%] h-[70px] text-[13px] font-bold text-center ml-[6%] pt-[5%] md:text-[20px] md:mt-[%] md:pb-[8%] md:pt-[0%] md:h-[40px] md:text-extrabold lg:text-[24px] lg:ml-[%] lg:w-[21%] lg:pb-0 lg:h-[60px] lg:flex lg:justify-center lg:items-center lg:mt-[2%] lg:right-[60%]"
                  } `}
                >
                  Coming Soon...
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
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption2}
                    value={selected2}
                  >
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="KES">KES</option>
                  </select>
                  {visible ? (
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
                      5000.00
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
                } flex justify-center items-center gap-[75px] mt-[10%] md:mt-[9%] `}
              >
                <div
                  onClick={() => {
                    handleClick(0);
                    setBlur(false);
                    // setBlurThree();
                  }}
                  value="fiat"
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } bg-[#92ABFE2E] cursor-pointer w-[17%] md:w-[10%] flex py-[3.92px] justify-center items-center text-[7px] md:text-[10px] font-semibold leading-normal rounded-[10px] lg:text-[13px] lg:w-[16%] lg:py-[7.47px] lg:rounded-[19px] hover:bg-[#04177f] hover:text-white active:bg-[#04177f] ${
                    activeButtons[0] ? "bg-[#04177f] " : "bg-[#92ABFE2E]"
                  } `}
                >
                  Fiat
                </div>

                <div
                  onClick={() => {
                    handleClick(1);
                    setBlur(true);
                    setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } md:text-[10px] md:w-[10%] bg-[#92ABFE2E] cursor-pointer w-[17%] flex py-[3.92px] justify-center items-center text-[7px] font-semibold leading-normal rounded-[10px] lg:w-[16%] lg:text-[13px] lg:py-[7.47px] lg:rounded-[19px]  hover:bg-[#04177f] hover:text-white active:bg-[#04177f]${
                    activeButtons[1] ? "bg-[#04177f]" : "bg-[#92ABFE2E]"
                  } `}
                >
                  Crypto
                </div>

                <div
                  onClick={() => {
                    handleClick(2);
                    setBlur(false);
                    setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } md:text-[10px] md:w-[10%] bg-[#92ABFE2E] cursor-pointer w-[17%] flex py-[3.92px] justify-center items-center text-[7px] font-semibold leading-normal rounded-[10px] lg:w-[16%] lg:text-[13px] lg:py-[7.47px] lg:rounded-[19px] hover:bg-[#04177f] hover:text-white active:bg-[#04177f]${
                    activeButtons[2] ? "bg-[#04177f]" : "bg-[#92ABFE2E]"
                  } `}
                >
                  Points
                </div>
              </div>
            </div>

            {/* ==========VIRTUAL ACCOUNTS============= */}
            <div
              className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } ${styles.balance2}`}
            >
              <Link to="/virtual-account">
                {" "}
                <button
                  className={`${
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
                    } text-[11px] font-extrabold `}
                  >
                    Global Virtual Accounts
                  </p>

                  <select
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
                      ? "backdrop-blur-[5px] absolute lg:h-[25%] lg:w-[30%] lg:ml-[-8px] lg:flex lg:justify-center lg:pt-[4%] lg:text-[25px] lg:text-[#04177f]"
                      : "backdrop-blur-[4.5px] absolute text-[14px] h-[13%] w-[85%] font-extrabold flex justify-center pt-[7%] md:h-[11%] md:text-[25px] md:pt-[5%] lg:w-[32%] lg:h-[28%] lg:ml-[-1%]"
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
                  } flex text-[10px] gap-[90px] md:gap-[110px]  md:text-[15px]`}
                >
                  <div className="md:font-semibold">Bank Name</div>
                  <div>SBI</div>
                </div>
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[75px] md:gap-[80px] md:text-[15px] `}
                >
                  <div className="md:font-semibold">Account Name</div>
                  <div>Habib Kamaldeen</div>
                </div>
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[65px] md:gap-[60px] md:text-[15px] `}
                >
                  <div className="md:font-semibold">Account Number</div>
                  <div className="flex items-center gap-[10px]">
                    <div ref={textRef}>1400 00xx xxxx</div>
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
          </div>
          {/* ================VIRTUAL ACCOUNT CLOSE=============== */}

          <div
            className={`${styles.ttwc} ${
              toggleSideBar ? "lg:gap-[63px]" : "lg:gap-[80px]"
            } flex mt-[7%] gap-[30px] md:gap-[90px] `}
          >
            <Link
              to="/top-up"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button}`}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/topup.png"
                alt="topup"
              />
              <p>Topup</p>
            </Link>
            <Link
              to="/money-transfer"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f] "
              } ${styles.button}`}
            >
              <div className="flex items-center gap-[10%]">
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/transfer.png"
                  alt="topup"
                />
                <p>Transfer</p>
              </div>
            </Link>
            <Link
              to="/withdraw"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button} pr-3`}
            >
              {" "}
              <div className="flex items-center gap-[10%]">
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/withdraw.png"
                  alt="topup"
                />
                <p>Withdraw</p>
              </div>
            </Link>
            <Link
              to="/currencyConversion"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button}`}
            >
              <div className="flex items-center gap-[10%]">
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/convert.png"
                  alt="topup"
                />
                <p>Convert</p>
              </div>
            </Link>
          </div>

          <QuickFeatures />
          <WalletInOutFlows />
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};
