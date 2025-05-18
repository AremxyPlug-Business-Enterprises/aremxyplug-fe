import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { useState } from "react";
import styles from "../TransferComponent/transfer.module.css";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg";
import arrow from "../ElectricitySubscription/Electricity-sub-images/arrow-square-right.png";
import logo from "../ElectricitySubscription/Electricity-sub-images/34-341783_kaduna-electricity-distribution-company-kaduna-electricity-distribution-company 1.svg";
import arrowDown from "../ElectricitySubscription/Electricity-sub-images/arrow-down.png";
import nig from "../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png";

import Joi from "joi";
import { Modal } from "../../../Screens/Modal/Modal";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

import {
  PostFunction,
  VerifyTransPin,
} from "../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../Loader/Loader";

const KAEDCO = () => {
  const navigate = useNavigate();
  const {
    isDarkMode,
    toggleSideBar,
    kaedcoMeterNumber,
    setKaedcoMeterNumber,
    showList,
    kaedcoVerifiedName,
    setKaedcoVerifiedName,
    setShowList,
    setSelected,
    selected,
    globalCountry,
    setGlobalCountry,
    globalTransferErrors,
    kaedcoPhoneNumber,
    setKaedcoPhoneNumber,
    kaedcoEmail,
    setKaedcoEmail,
    kaedcoAmount,
    setKaedcoAmount,
    toggleVisibility,
    isVisible,
    setKaedcoBillGenerate,
    kaedcoServiceID,
    setKaedcoServiceID,
    kaedcoFlag,
    setKaedcoFlag,
    selectedKaedcoMeterType,
    setSelectedKaedcoMeterType,
    kaedcoOrderId,
    setKaedcoOrderId,
    kaedcoTransactionId,
    setKaedcoTransactionId,
    kaedcoShowDescription,
    setKaedcoShowDescription,
    kaedcoFetchedResponse,
    setKaedcoFetchedResponse,
    newBalance
  } = useContext(ContextProvider);

  const [showProductList, setShowProductList] = useState(false);

  const pointsEarned = "+2.00";

  // const handleValidate = () => {

  //   if (isEmailOrNumberValid(email) || isEmailOrNumberValid(number)) {
  //     setErrorMessage('')
  //     setAccountId(email);
  //   setShowAccountId(true);;
  //   } else {
  //     setErrorMessage('Invalid Email or Smile Account ID')
  //   setShowAccountId(false);
  //   }
  // };
  const productList = [
    {
      id: 1,
      name: "Prepaid",
    },

    {
      id: 2,
      name: "Postpaid",
    },
  ];
  const handleSelectProduct = (productName) => {
    setSelectedKaedcoMeterType(productName);
    // setSelectedOption("");
    setShowProductList(false);
    // setShowOptionList(false);
  };
  //   const { selectedOption, setSelectedOption } = useContext(ContextProvider);
  //   const [showOptionList, setShowOptionList] = useState(false);
  const countryList = [
    {
      id: 1,
       name: `NGN Wallet ${newBalance}`,
      code: "Nigerian NGN Wallet",
      flag: require("../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "USD Wallet. (00)",
      code: "USD",
      flag: require("../ElectricitySubscription/Electricity-sub-images/americaFlag.png"),
    },
    {
      id: 3,
      name: " GBP Wallet. (00)",
      code: "GBP",
      flag: require("../ElectricitySubscription/Electricity-sub-images/ukFlag.png"),
    },
    {
      id: 4,
      name: "EUR Wallet. (00)",
      code: "EUR ",
      flag: require("../ElectricitySubscription/Electricity-sub-images/europeanFlag.png"),
    },
    {
      id: 5,
      name: "AUD Wallet. (00)",
      code: "AUD",
      flag: require("../ElectricitySubscription/Electricity-sub-images/australiaFlag.png"),
    },
    {
      id: 6,
      name: "KES Wallet. (00)",
      code: "KES",
      flag: require("../ElectricitySubscription/Electricity-sub-images/kenyaFlag.png"),
    },
  ];
  const [errors, setErrors] = useState({});
  const [proceed, setProceed] = useState(false);

  const handleProceed = (e) => {
    // e.preventDefault();

    const { error } = schema.validate({
      kaedcoPhoneNumber,
      kaedcoEmail,
      kaedcoMeterNumber,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    kaedcoPhoneNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    kaedcoMeterNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Invalid meter number",
      }),
    kaedcoEmail: Joi.string()
      .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      .required()
      .messages({
        "string.pattern.base": "Invalid Email",
      }),
  });

  // const isEmailValid = (input) => {
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //   if (emailRegex.test(input) ) {
  //     return true;
  //   }
  //   return false;
  // };

  const handleCountryClick = (name, flag, id, code) => {
    setKaedcoFlag(flag);
    setShowList(false);
    setGlobalCountry(name);
    setSelected(true);
    // setCountryCode(code);
    // setCurrencyAvailable(id !== 1);
  };
  const handleVerifiedName = (event) => {
    const newValue = event.target.value;
    setKaedcoVerifiedName(newValue);
  };
  const handleMeterNumber = (event) => {
    const newValue = event.target.value;
    setKaedcoMeterNumber(newValue);
  };
  const handlePhoneNumber = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/\D/g, "").slice(0, 11);
    setKaedcoPhoneNumber(newValue);
  };
  const handleEmail = (event) => {
    const newValue = event.target.value;
    setKaedcoEmail(newValue);
  };
  const handleKaedcoAmount = (event) => {
    const newValue = event.target.value;
    // setIkedcamount(newValue);
    if (newValue.startsWith("")) {
      setKaedcoAmount(newValue);
    } else {
      setKaedcoAmount(`₦${newValue}`);
    }
  };
  const [successPopup, setSuccessPopup] = useState(false);
  const [failedPopup, setFailedPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  const [pinSuccess, setPinSuccess] = useState(false);
  const [pinFailed, setPinFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const verifyPin = async () => {
    async function ElectricityHandler() {
      const path = "electric-bill";
      const parsedAmount = parseInt(kaedcoAmount, 10);
      const data = {
        meter_type: selectedKaedcoMeterType,
        meter_no: kaedcoMeterNumber,
        phone: kaedcoPhoneNumber, // Use the parsed integer value
        email: kaedcoEmail,
        amount: parsedAmount,
        // amount: "",
        disco_type: "kaduna-electric",
      };
      // const parsedAmount = parseInt(amount, 10);
      const SuccessHandler = () => {
        setInputPinPopUp(false);
        setSuccessPopup(true);
      };
      const FailedHandler = () => {
        setInputPinPopUp(false);
        setFailedPopup(true);
      };

      await PostFunction(
        path,
        setLoading,
        data,
        SuccessHandler,
        FailedHandler,
        setKaedcoFetchedResponse
      );
    }
    await VerifyTransPin(
      inputPin,
      setPinSuccess,
      setPinFailed,
      setLoading,
      setErrorMessage,
      ElectricityHandler
    );
  };

  function handleReceivedData() {
    setLoading(true);
    const receivedData = () => {
      setKaedcoBillGenerate(kaedcoFetchedResponse.data.bill_generated);
      setKaedcoOrderId(kaedcoFetchedResponse.data.order_id);
      setKaedcoTransactionId(kaedcoFetchedResponse.data.transaction_id);
      setKaedcoServiceID(kaedcoFetchedResponse.data.request_id);
      setKaedcoShowDescription(kaedcoFetchedResponse.data.description);
    };
    receivedData();
    if (receivedData) {
      setSuccessPopup(false);
      setLoading(false);
      navigate("/kaedco-receipt");
    }
  }

  const [InputPinPopUp, setInputPinPopUp] = useState(false);
  const [inputPin, setInputPin] = useState("");

  const handle = () => {
    setInputPinPopUp(false);
    setProceed(true);
  };

  const handleSwitch = () => {
    setInputPinPopUp(true);
    setProceed(false);
  };

  return (
    <DashBoardLayout>
      <div
        className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col w-full justify-between h-full `}
      >
        <div>
          {/* top part after nav bar */}
          <div className="flex flex-row w-full pt-[10px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
            <div className="flex flex-col gap-2  ">
              <div className="text-[11px] font-semibold  pt-[10px] md:text-[12px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
                ELECTRICITY BILLS, PREPAID AND POSTPAID <br /> PAYMENTS.
              </div>
              <div className="text-[9px] font-normal leading-[12px] md:text-[10px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] ">
                Recharge your metre and pay bills with our electricity bills
                <br /> payment feature for both prepaid and postpaid metertypes.
              </div>
            </div>
            <div>
              <img
                className="w-[55px] h-[70px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
                src={bulb}
                alt=""
              />
            </div>
          </div>
          <div
            className={`flex lg:mt-[20px] text-[9px] md:text-[12px] lg:text-[16px] font-semibold pt-[30px] items-center ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            }`}
          >
            <div>Recharge</div>
            <div>
              <img className="w-[35px] lg:w-[3.5rem] ml-1" src={logo} alt="" />
            </div>
            <div className=" ml-1">
              Kaduna Electric Payment-KAEDCO Meter Instantly
            </div>
            <div className=" ml-1">
              <img className="w-[18px] lg:w-[24px]" src={arrow} alt="" />
            </div>
          </div>
          <div className="lg:flex lg:items-start ">
            <div
              className={`mt-[10px] lg:mt-[15px] border border-[] from-[#E2F3FF] font-bold text-[10px] lg:text-[16px] lg:rounded-sm lg:py-2 text-center lg:px-3 py-1 to-[#FFF]
            ${
              isDarkMode
                ? "text-white bg-black border border-white"
                : "bg-gradient-to-b"
            }`}
            >
              Kaduna Electric Covers: Kaduna State | Kebbi State | Sokoto State
              | Zamfara State.
            </div>
          </div>

          <div
            className={`text-[14px] lg:text-[16px] font-semibold mt-[20px] ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            } `}
          >
            Select <span className="text-[#04177F] font-bold">Prepaid </span>
            MeterType if you load token on your meter.
          </div>
          <div
            className={`text-[14px] lg:text-[16px] font-semibold mt-[10px] ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            } `}
          >
            Select <span className="text-[#04177F] font-bold">Postpaid </span>
            MeterType if you get a bill at the end of the month.
          </div>

          {/* input sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-6 items-center lg:mt-[20px] ">
            <div className="flex flex-col mt-[20px] relative gap-2 lg:gap-2.5">
              <div
                className={`text-[14px] lg:text-[16px]  md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Select Meter Type
              </div>
              <div
                className={`flex justify-between items-center py-[12px] pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                  isDarkMode
                    ? "text-white bg-black border border-white"
                    : "text-[#7E7E7E] bg-white"
                }`}
                onClick={() => setShowProductList(!showProductList)}
              >
                <h2
                  className={`text-[12px] font-normal  leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]
                   ${isDarkMode ? "text-white bg-black" : "text-[#7C7C7C]"}`}
                >
                  {selectedKaedcoMeterType}
                </h2>
                <button className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showProductList && (
                <div
                  className={`
                    ${
                      isDarkMode
                        ? "text-white divide-white bg-black border-white"
                        : " text-[#7C7C7C] bg-white"
                    }
                    border flex flex-col divide-y items-center text-[14px] md:text-[12px] lg:text-[16px] mt-20 lg:mt-20  rounded-[4px] md:rounded-[10px] absolute top-1 lg:top-[1rem] w-full z-[10]`}
                >
                  {productList.map((item) => (
                    <div
                      key={item.name}
                      className={`pb-[18px] pt-[8px] md:py-[14px] font-bold cursor-pointer md:text-[12px] lg:text-[16px] w-full  md:rounded-[0px] lg:mt- text-[12px] pl-[5px]transition-all duration-300 hover:bg-slate-50 pl-[5px]
                      ${
                        isDarkMode
                          ? "bg-black text-white hover:bg-slate-800 hover:rounded-t-[10px]"
                          : "text-[#7C7C7C]"
                      }
                      ${selectedKaedcoMeterType === item.name ? "" : ""}  `}
                      onClick={() => handleSelectProduct(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:mt-[10px] md:mt-[23px] lg:mt-[23px] gap-2 lg:gap-2.5">
              <div
                className={` text-[14px] lg:text-[16px] md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Meter Number
              </div>
              <div>
                <input
                  type="number"
                  value={kaedcoMeterNumber}
                  onChange={handleMeterNumber}
                  onClick={() => setShowProductList(false)}
                  className={`py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full w-full  ${
                    isDarkMode
                      ? "bg-black text-white border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
              </div>
              {errors.meterNumber && (
                <div className="text-[14px] text-red-500 italic lg:text-[14px]">
                  {errors.meterNumber}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:gap-2.5">
              <div
                className={`text-[#7E7E7E] text-[14px] lg:text-[16px] md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Verified Name
              </div>
              <div>
                <input
                  type="text"
                  value={kaedcoVerifiedName}
                  onChange={handleVerifiedName}
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-2.5">
              <div
                className={`text-[#7E7E7E] text-[14px] lg:text-[16px] md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Phone Number
              </div>
              <div>
                <input
                  type="number"
                  value={kaedcoPhoneNumber}
                  onChange={handlePhoneNumber}
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <div className="text-[14px] text-red-500 italic lg:text-[14px]">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:gap-2.5">
              <div
                className={`text-[#7E7E7E] text-[14px] lg:text-[16px] md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Email
              </div>
              <div>
                <input
                  type="text"
                  value={kaedcoEmail}
                  onChange={handleEmail}
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
              </div>
              {errors.ikedcEmail && (
                <div className="text-[14px] text-red-500 italic lg:text-[14px]">
                  {errors.ikedcEmail}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:gap-2.5">
              <div
                className={`text-[#7E7E7E] text-[14px] lg:text-[16px] md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Amount
              </div>
              <div
                className={`flex items-center lg:text-[16px] text-[12px] border pl-2 rounded-[10px] ${
                  isDarkMode
                    ? "text-white bg-black border-white"
                    : "text-[#7E7E7E] border-[#9C9C9C]"
                }`}
              >
                &#8358;
                <input
                  type="number"
                  name="ikedcamount"
                  value={kaedcoAmount}
                  onChange={handleKaedcoAmount}
                  className={`w-full py-[10.33px] pl-[5.867px] pr-1 md:py-3 md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none
                 ${isDarkMode ? "text-white bg-black " : "text-[#7E7E7E]"}`}
                />
              </div>
            </div>

            <div className=" flex flex-col relative gap-2 lg:gap-2.5">
              <div
                className={`text-[#7E7E7E] text-[14px] lg:text-[16px] md:font-semibold ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Payment Method
              </div>
              <div
                className={`py-[10.33px] pl-[5.867px] pr-1 md:py-3 md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none flex items-center justify-between  ${
                  isDarkMode
                    ? "text-white bg-black border border-white"
                    : "text-[#7E7E7E]"
                }`}
                onClick={() => setShowList(!showList)}
              >
                <p></p>
                {selected ? (
                  <div
                    className={`flex w-full justify-between items-center
                    ${isDarkMode ? "text-white bg-black" : "text-[#7E7E7E]"}`}
                  >
                    <p
                      className={`text-[12px] lg:text-[14px]
                      ${isDarkMode ? "text-white bg-black" : "text-[#7E7E7E]"}`}
                    >
                      {/* font-extrabold */}
                      {globalCountry}
                    </p>
                    <img
                      className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                      src={kaedcoFlag}
                      alt=""
                    />
                  </div>
                ) : (
                  <img
                    className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px]  "
                    src="./Images/dashboardImages/arrow-down2.png"
                    alt="dropdown"
                  />
                )}
              </div>
              {globalTransferErrors.country && (
                <div
                  className={`text-[14px] text-red-500 italic lg:text-[14px]
                   ${
                     isDarkMode ? "text-white bg-black border border-white" : ""
                   }`}
                >
                  {globalTransferErrors.country}
                </div>
              )}
              {showList && (
                <div
                  className={`
                  ${
                    isDarkMode
                      ? "bg-black text-white border border-white divide-white"
                      : "text-[#7C7C7C] bg-white"
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  ${
                    styles.countryDropDown
                  } rounded-br-[7px] rounded-bl-[7px] shadow-xl border w-full lg:w-full lg:rounded-br-[14px] lg:rounded-bl-[14px] flex flex-col divide-y absolute top-20`}
                >
                  {countryList.map((country) => (
                    <div
                      className={`py-[18px] md:py-[14px] font-normal cursor-pointer px-2 flex items-center gap-[5px] text-[12px] md:text-[14px] lg:text-[16px] transition-all duration-300 hover:bg-slate-50
                      ${
                        isDarkMode
                          ? "text-white hover:bg-slate-800 bg-black border border-white"
                          : "text-[#7E7E7E]"
                      }`}
                      key={country.id}
                      onClick={() =>
                        handleCountryClick(
                          country.name,
                          country.flag,
                          country.id,
                          country.code
                        )
                      }
                    >
                      <img
                        className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                        src={country.flag}
                        alt="/"
                      />
                      {country.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            onClick={handleProceed}
            className={`text-[12px] mt-[30px] md:mt-[40px] bg-[#0008] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6 py-3 rounded-md font-semibold text-center text-white
            ${
              !kaedcoMeterNumber ||
              !kaedcoVerifiedName ||
              !kaedcoPhoneNumber ||
              !kaedcoEmail ||
              !selectedKaedcoMeterType ||
              !selected ||
              !kaedcoAmount
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary cursor-pointer"
            }`}
            disabled={
              !kaedcoMeterNumber ||
              !kaedcoVerifiedName ||
              !kaedcoPhoneNumber ||
              !kaedcoEmail ||
              !selectedKaedcoMeterType ||
              !selected ||
              !kaedcoAmount
            }
          >
            Proceed
          </div>
        </div>
        <footer className="flex justify-center text-center gap-[20px] mt-[200px] pb-[10%] md:mt-[750px]  lg:mt-[850px]">
          <p className="text-[11px] md:text-[12px] lg:text-[18px] font-medium leading-[9.1px] mt-[5px] lg:mt-[13px]">
            You need help?
          </p>

          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "bg-[#04177f] " : "bg-[#04177f]"
              } text-[11px] p-1.5 text-white rounded-[8px] lg:text-[16px]`}
            >
              Contact Us
            </div>
          </Link>
        </footer>
      </div>

      {/* Confirmation Transaction Popup */}
      {proceed && (
        <Modal>
          <div
            className={`${
              isDarkMode
                ? "absolute h-[505px] shrink-0 bottom-0 shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] rounded-[8px] md:h-[620px] md:rounded-xl md:bottom-[30%] lg:h-[550px] lg:rounded-[20px] lg:bottom-[7%] bg-black border border-white text-white"
                : styles.transferMoneyPop
            } ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } w-[90%] md:w-[60%] overflow-auto`}
          >
            <img
              onClick={() => setProceed(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[3%] md:w-6 md:h-6 lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[9%] md:mt-[8%] md:h-[10px]" />
            <h2 className="text-[12px] font-semibold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction
            </h2>
            <p
              className={`text-[12px] pt-[20px] font-medium text-center mb-2 md:text-[12px] lg:text-[14px] ${
                isDarkMode ? "text-white" : "text-[#000]"
              }`}
            >
              You are about to Purchase{" "}
              <span
                className={`font-extrabold text-[12px] md:text-[14px] lg:text-[12px] ${
                  isDarkMode ? "text-white" : "text-[#000]"
                }`}
              >
                {selectedKaedcoMeterType} Meter (&#8358;{kaedcoAmount}){" "}
              </span>
              {/* Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                &#8358;{}
              </span> */}
              From <br /> your NGN Wallet to
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Disco Type
                </p>
                <span className="flex items-center gap-1 ">
                  <div>
                    <img className="w-[30px]" src={logo} alt="" />
                  </div>
                  <div>Kaduna-KAEDCO</div>
                </span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Type
                </p>
                <span>{selectedKaedcoMeterType} </span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Number
                </p>
                <span>{kaedcoMeterNumber} </span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Verified Name
                </p>
                <span>{kaedcoVerifiedName}</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Phone Number
                </p>
                <span>{kaedcoPhoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Email
                </p>
                <span>{kaedcoEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Amount
                </p>
                <span>&#8358;{kaedcoAmount}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Payment Method
                </p>
                <span>Nigerian NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Points Earned
                </p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

            <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 items-center">
                <div
                  className={`rounded-full h-[27px] w-[27px] flex justify-center items-center ${
                    isDarkMode ? "bg-[#0001] " : "bg-white"
                  }`}
                >
                  <img className="w-[16px] h-[16px]" src={nig} alt="/" />
                </div>
                <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                  Available Balance
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-[#000] "}`}
                  >
                    (&#8358;50,000.00)
                  </span>
                </p>
              </div>
              <img
                className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              onClick={handleSwitch}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}

      {/* Input pin pop up */}
      {InputPinPopUp && (
        <Modal>
          <div
            className={`${
              isDarkMode
                ? "bg-black absolute pt-4 h-[250px] shrink-0 rounded-lg shadow border border-white md:h-[350px] w-[481.25px] md:bottom-auto md:top-auto lg:h-[450px] lg:rounded-[20px] "
                : styles.inputPin
            }
               ${
                 toggleSideBar
                   ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]"
                   : "lg:w-[40%]"
               } md:w-[55%] w-[90%] `}
          >
            <img
              onClick={handle}
              className={`absolute right-2 w-[18px] h-[18px] my-[1%] md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] ${
                isDarkMode ? "my-7" : ""
              }`}
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr
              className={`h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px] ${
                isDarkMode ? "md:mt-10" : ""
              }`}
            />
            <p className="text-[12px] md:text-[16px] font-extrabold text-center my-[10%] lg:my-[%] ">
              Input PIN to complete transaction
            </p>
            <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[8%]">
              <div className=" flex justify-center  ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                {isVisible ? (
                  <div className="flex flex-col gap-y-1">
                    <OtpInput
                      value={inputPin}
                      inputType="tel"
                      onChange={setInputPin}
                      numInputs={4}
                      shouldAutoFocus={true}
                      inputStyle={{
                        color: isDarkMode ? "#ffffff" : "#403f3f",
                        width: 30,
                        height: 30,
                        borderRadius: 3,
                        backgroundColor: isDarkMode ? "black" : "white",
                        border: isDarkMode
                          ? "1px solid white"
                          : "1px solid #ccc",
                      }}
                      renderInput={(props) => (
                        <input {...props} className="inputOTP mx-[3px]" />
                      )}
                    />
                    <span className="">
                      {pinSuccess && (
                        <p className="text-[12px] text-green-500 text-center font-medium">
                          Pin matches
                        </p>
                      )}
                      {pinFailed && errorMessage && (
                        <p className="text-[12px] text-center text-red-600 font-medium">
                          Incorrect Pin
                        </p>
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">* * * *</div>
                )}
                <div
                  className="text-[#0003] text-[13px] md:text-3xl"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <p className="text-[10px] md:text-[12px] text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              disabled={inputPin.length !== 4 ? true : false}
              onClick={verifyPin}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                isDarkMode ? "border border-white" : ""
              }`}
            >
              Purchase
            </button>
          </div>
        </Modal>
      )}

      {/* purchase Successful Popup */}
      {successPopup && (
        <Modal>
          <div
            className={`${styles.successfulTwo} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setSuccessPopup(false)}
                className=" w-[18px]   md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => {
                  setSelectedKaedcoMeterType("");
                  setKaedcoMeterNumber("");
                  setKaedcoVerifiedName("");
                  setKaedcoPhoneNumber("");
                  setKaedcoEmail("");
                  setKaedcoAmount("");
                  setGlobalCountry("");
                  setKaedcoFlag("");
                  setSuccessPopup(false);
                }}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Purchase Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p
              className={`text-[10px] lg:text-[16px] font-medium text-center mb-2 md:text-[14px] ${
                isDarkMode ? "text-white" : "text-[#000]"
              }`}
            >
              You have successfully Purchased
              <span
                className={`font-extrabold text-[11px] md:text-[16px] lg:text-[14px] ${
                  isDarkMode ? "text-white" : "text-[#000]"
                }`}
              >
                Kaduna {selectedKaedcoMeterType} Meter
              </span>
              <br></br>
              <span
                className={`font-extrabold text-[10px] md:text-[16px] lg:text-[14px] ${
                  isDarkMode ? "text-white" : "text-[#000]"
                }`}
              >
                (&#8358;{kaedcoAmount})
              </span>
              From your NGN Nigerian Wallet to
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Disco Type
                </p>
                <span className="flex items-center gap-1 ">
                  <div>
                    <img className="w-[30px]" src={logo} alt="" />
                  </div>
                  <div>{kaedcoServiceID}</div>
                </span>
              </div>
              <div className="flex text-[10px]  md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Type
                </p>
                <span>{selectedKaedcoMeterType} </span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Number
                </p>
                <span>{kaedcoMeterNumber} </span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Verified Name
                </p>
                <span>{kaedcoVerifiedName}</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Phone Number
                </p>
                <span>{kaedcoPhoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Email
                </p>
                <span>{kaedcoEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Amount
                </p>
                <span>&#8358;{kaedcoAmount}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Payment Method
                </p>
                <span>Nigerian NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Points Earned
                </p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

            <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[11px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px]">
                The electricity bills / token purchase has been generated
                successfully. Please kindly check receipt to confirm the bills /
                token. You can contact us for any further assistance.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center my-6  gap-[6%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setSuccessPopup(false);
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>

              <button
                onClick={handleReceivedData}
                className={`border w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Receipt
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* purchase Failed Popup */}
      {failedPopup && (
        <Modal>
          <div
            className={`${styles.successfulTwo} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setFailedPopup(false)}
                className=" w-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => {
                  setSelectedKaedcoMeterType("");
                  setKaedcoMeterNumber("");
                  setKaedcoVerifiedName("");
                  setKaedcoPhoneNumber("");
                  setKaedcoEmail("");
                  setKaedcoAmount("");
                  setGlobalCountry("");
                  setKaedcoFlag("");
                  setSuccessPopup(false);
                }}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[5%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Transaction Failed
            </h2>
            <img
              className="w-[120px] h-[120px] mx-auto my-[10%] lg:w-[150px] lg:h-[150px]"
              src="./Images/failed.png"
              alt="/"
            />
            <p
              className={`text-[10px] mx-[10px] text-center my-[60px] md:text-[14px] lg:text-[12px] ${
                isDarkMode ? "text-white" : "text-[#0008]"
              }`}
            >
              An unexpected error has occurred, please try again.
            </p>
            <div className="flex w-[70%] mx-auto items-center my-6  gap-[6%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setFailedPopup(false);
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              <Link
                to="/kaedco-receipt-failed"
                state={{
                  selectedNetworkProduct: selectedKaedcoMeterType,
                  meterNumber: kaedcoMeterNumber,
                  phoneNumber: kaedcoPhoneNumber,
                  ikedcEmail: kaedcoEmail,
                  ikedcamount: kaedcoAmount,
                  orderId: kaedcoOrderId,
                  transactionId: kaedcoTransactionId,
                  serviceID: kaedcoServiceID,
                  showDescription: kaedcoShowDescription,
                }}
              >
                <button
                  onClick={() => {
                    setFailedPopup(false);
                  }}
                  className={`border w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </DashBoardLayout>
  );
};

export default KAEDCO;
