import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { Link } from "react-router-dom";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg";
import bill1 from "../ElectricitySubscription/Electricity-sub-images/pngaaa 1.svg";
import bill2 from "../ElectricitySubscription/Electricity-sub-images/1584714918161-ekedc-logo 1.svg";
import bill3 from "../ElectricitySubscription/Electricity-sub-images/AEDC1 1.svg";
import bill4 from "../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg";
import bill5 from "../ElectricitySubscription/Electricity-sub-images/PHED 1.svg";
import bill6 from "../ElectricitySubscription/Electricity-sub-images/Jos-Electric-JED 1.svg";
import bill7 from "../ElectricitySubscription/Electricity-sub-images/34-341783_kaduna-electricity-distribution-company-kaduna-electricity-distribution-company 1.svg";
import bill8 from "../ElectricitySubscription/Electricity-sub-images/eedclogo 1.svg";
import bill9 from "../ElectricitySubscription/Electricity-sub-images/ibedc-logo 1.svg";
import bill10 from "../ElectricitySubscription/Electricity-sub-images/BEDC-Logo-new-dark-1 1.svg";
import "./Electricity.css";

const ElectricitySubscription = () => {
  const {
    isDarkMode,
    toggleSideBar,
    setShowList,
    setShowProductList,
    setSelectedAedcMeterType,
    setAedcMeterNumber,
    setAedcVerifiedName,
    setAedcPhoneNumber,
    setAedcEmail,
    setAedcAmount,
    setAedcCountry,
    setAedcFlag,
    setAedcPaymentResult,
    setSelectedBedcMeterType,
    setBedcMeterNumber,
    setBedcVerifiedName,
    setBedcPhoneNumber,
    setBedcEmail,
    setBedcAmount,
    setBedcCountry,
    setBedcFlag,
    setBedcPaymentResult,
    setSelectedEedcMeterType,
    setEedcMeterNumber,
    setEedcVerifiedName,
    setEedcPhoneNumber,
    setEedcEmail,
    setEedcAmount,
    setEedcCountry,
    setEedcFlag,
    setEedcPaymentResult,
    setSelectedEkedcMeterType,
    setEkedcMeterNumber,
    setEkedcVerifiedName,
    setEkedcPhoneNumber,
    setEkedcEmail,
    setEkedcAmount,
    setEkedcCountry,
    setEkedcFlag,
    setEkedcPaymentResult,
    setSelectedIkedcMeterType,
    setIkedcMeterNumber,
    setIkedcVerifiedName,
    setIkedcPhoneNumber,
    setIkedcEmail,
    setIkedcAmount,
    setIkedcCountry,
    setIkedcFlag,
    setIkedcPaymentResult,
    setSelectedIbedcMeterType,
    setIbedcMeterNumber,
    setIbedcVerifiedName,
    setIbedcPhoneNumber,
    setIbedcEmail,
    setIbedcAmount,
    setIbedcCountry,
    setIbedcFlag,
    setIbedcPaymentResult,
    setSelectedJedMeterType,
    setJedMeterNumber,
    setJedVerifiedName,
    setJedPhoneNumber,
    setJedEmail,
    setJedAmount,
    setJedCountry,
    setJedFlag,
    setJedPaymentResult,
    setSelectedKaedcoMeterType,
    setKaedcoMeterNumber,
    setKaedcoVerifiedName,
    setKaedcoPhoneNumber,
    setKaedcoEmail,
    setKaedcoAmount,
    setKaedcoCountry,
    setKaedcoFlag,
    setKaedcoPaymentResult,
    setSelectedKedcoMeterType,
    setKedcoMeterNumber,
    setKedcoVerifiedName,
    setKedcoPhoneNumber,
    setKedcoEmail,
    setKedcoAmount,
    setKedcoCountry,
    setKedcoFlag,
    setKedcoPaymentResult,
    setSelectedPhedMeterType,
    setPhedMeterNumber,
    setPhedVerifiedName,
    setPhedPhoneNumber,
    setPhedEmail,
    setPhedAmount,
    setPhedCountry,
    setPhedFlag,
    setPhedPaymentResult,
  } = useContext(ContextProvider);


  function handleResetAedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedAedcMeterType("");
    setAedcMeterNumber("");
    setAedcVerifiedName("");
    setAedcPhoneNumber("");
    setAedcEmail("");
    setAedcAmount("");
    setAedcCountry("");
    setAedcFlag("");
    setAedcPaymentResult("");
  }
  function handleResetBedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedBedcMeterType("");
    setBedcMeterNumber("");
    setBedcVerifiedName("");
    setBedcPhoneNumber("");
    setBedcEmail("");
    setBedcAmount("");
    setBedcCountry("");
    setBedcFlag("");
    setBedcPaymentResult("");
  }
  function handleResetEedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedEedcMeterType("");
    setEedcMeterNumber("");
    setEedcVerifiedName("");
    setEedcPhoneNumber("");
    setEedcEmail("");
    setEedcAmount("");
    setEedcCountry("");
    setEedcFlag("");
    setEedcPaymentResult("");
  }
  function handleResetEkedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedEkedcMeterType("");
    setEkedcMeterNumber("");
    setEkedcVerifiedName("");
    setEkedcPhoneNumber("");
    setEkedcEmail("");
    setEkedcAmount("");
    setEkedcCountry("");
    setEkedcFlag("");
    setEkedcPaymentResult("");
  }
  function handleResetIkedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedIkedcMeterType("");
    setIkedcMeterNumber("");
    setIkedcVerifiedName("");
    setIkedcPhoneNumber("");
    setIkedcEmail("");
    setIkedcAmount("");
    setIkedcCountry("");
    setIkedcFlag("");
    setIkedcPaymentResult("");
  }
  function handleResetIbedcFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedIbedcMeterType("");
    setIbedcMeterNumber("");
    setIbedcVerifiedName("");
    setIbedcPhoneNumber("");
    setIbedcEmail("");
    setIbedcAmount("");
    setIbedcCountry("");
    setIbedcFlag("");
    setIbedcPaymentResult("");
  }
  function handleResetJedFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedJedMeterType("");
    setJedMeterNumber("");
    setJedVerifiedName("");
    setJedPhoneNumber("");
    setJedEmail("");
    setJedAmount("");
    setJedCountry("");
    setJedFlag("");
    setJedPaymentResult("");
  }
  function handleResetKaedcoFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedKaedcoMeterType("");
    setKaedcoMeterNumber("");
    setKaedcoVerifiedName("");
    setKaedcoPhoneNumber("");
    setKaedcoEmail("");
    setKaedcoAmount("");
    setKaedcoCountry("");
    setKaedcoFlag("");
    setKaedcoPaymentResult("");
  }
  function handleResetKedcoFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedKedcoMeterType("");
    setKedcoMeterNumber("");
    setKedcoVerifiedName("");
    setKedcoPhoneNumber("");
    setKedcoEmail("");
    setKedcoAmount("");
    setKedcoCountry("");
    setKedcoFlag("");
    setKedcoPaymentResult("");
  }
  function handleResetPhedFields() {
    setShowList(false);
    setShowProductList(false);
    setSelectedPhedMeterType("");
    setPhedMeterNumber("");
    setPhedVerifiedName("");
    setPhedPhoneNumber("");
    setPhedEmail("");
    setPhedAmount("");
    setPhedCountry("");
    setPhedFlag("");
    setPhedPaymentResult("");
  }

  return (
    <DashBoardLayout>
      <div
        className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col justify-between h-full w-full `}
      >
        <div>
          {/* top part after nav bar */}
          <div className="flex flex-row w-full pt-[10px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
            <div className="flex flex-col gap-2  ">
              <div className="text-[11px] font-semibold pt-[10px] md:text-[12px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
                ELECTRICITY BILLS, PREPAID AND POSTPAID <br /> PAYMENTS.
              </div>
              <div className="text-[9px] font-normal leading-[12px] md:text-[10px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] ">
                Recharge your metre and pay bills with our electricity bills
                payment feature for both prepaid and postpaid metertypes.
              </div>
            </div>
            <div>
              <img
                className="w-[55px] h-[70px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
                src={bulb}
                alt=""
              />{" "}
            </div>
          </div>

          <div
            className={`text-[12px] flex gap-2 items-center font-medium mt-[20px] md:mt-[30px] lg:mt-[70px] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] ${
              isDarkMode ? "text-white" : "text-[#7C7C7C]"
            }`}
          >
            <p>Select Disco Type</p>
            <img
              className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
              src="./Images/dashboardImages/arrowright.png"
              alt="/"
            />
          </div>

          {/* <div className={ ` ${toggleSideBar ?   " alignwidth md:gap-5 lg:gap-[60px] " : "alignwidth1 md:gap-10 lg:gap-20 xl:gap-[100px]"   } mt-[20px] flex flex-wrap w-full justify-between lg:mt-[70px] gap-6  ` }>  */}
          <div
            className={` ${
              toggleSideBar ? "alignwidth " : "alignwidth1 xl:gap-[100px]"
            } mt-[20px] grid grid-cols-3 sm:grid-cols-5 w-full justify-between gap-4 lg:mt-[70px] md:gap-6  `}
          >
            <Link to="/ikedc" onClick={handleResetIkedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[42.9px] lg:w-[82px] lg:h-[100px] h-[53px] pt-2"
                    src={bill1}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  IKEDC
                </div>
              </div>
            </Link>
            <Link to="/ekedc" onClick={handleResetEkedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-2 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[58.7px] lg:w-[100px] pt-3 "
                    src={bill2}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  EKEDC
                </div>
              </div>
            </Link>

            <Link to="/aedc" onClick={handleResetAedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-1 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[60px] lg:w-[100px] pt-4"
                    src={bill3}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  AEDC
                </div>
              </div>
            </Link>
            <Link to="/kedco" onClick={handleResetKedcoFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-1 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img className="w-[42.9px] lg:w-[73px] " src={bill4} alt="" />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  {" "}
                  KEDCO
                </div>
              </div>
            </Link>
            <Link to="/phed" onClick={handleResetPhedFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-1 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img className="w-[89px] lg:w-[100px]" src={bill5} alt="" />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  PHED
                </div>
              </div>
            </Link>
            <Link to="/jed" onClick={handleResetJedFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-0 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img className="w-[70px] lg:w-[80px]  " src={bill6} alt="" />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  JED
                </div>
              </div>
            </Link>
            <Link to="/kaedco" onClick={handleResetKaedcoFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-0 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[70px] lg:w-[100px] pt-2 "
                    src={bill7}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  KAEDCO
                </div>
              </div>
            </Link>
            <Link to="/eedc" onClick={handleResetEedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-0 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[70px] lg:w-[100px] pt-2  "
                    src={bill8}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  EEDC
                </div>
              </div>
            </Link>
            <Link to="/ibedc" onClick={handleResetIbedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-0 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[70px] lg:w-[80px] pt-2  "
                    src={bill9}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  IBEDC
                </div>
              </div>
            </Link>
            <Link to="/bedc" onClick={handleResetBedcFields}>
              <div
                className={`flex flex-col justify-between items-center rounded-md border pt-0 pb-3 lg:pb-5 px-4 w-[100px] h-[94px] ${
                  toggleSideBar
                    ? "md:w-[94px] md:h-[94px]"
                    : "md:w-[120px] md:h-[120px]"
                } lg:w-[160px] lg:h-[160px] transition delay-75 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-md ${
                  isDarkMode ? "hover:bg-slate-900" : "hover:bg-slate-50"
                }`}
              >
                <div>
                  <img
                    className="w-[90px] lg:w-[120px] pt-4  "
                    src={bill10}
                    alt=""
                  />
                </div>
                <div className="text-[12px] lg:text-[16px] font-medium leading-[11.27px]">
                  BEDC
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-[200px] pb-[10%] md:mt-[38%] lg:mt-[75%] gap-2">
          <div
            className={`text-[10px] lg:text-[12px] font-semibold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[12px] text-[10px] px-2 py-1 leading-[10.5px] rounded-lg md:rounded-md text-center">
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default ElectricitySubscription;
