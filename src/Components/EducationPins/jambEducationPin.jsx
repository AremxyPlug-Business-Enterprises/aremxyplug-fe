import { useContext, useEffect } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import HeroComponent from "./heroComponent";
import jambImg from "../EducationPins/imagesEducation/jamb-logo 1.svg";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import nigerianFlag from "./imagesEducation/Nigeriaflag.svg";
import americaFlag from "./imagesEducation/Usa.svg";
import britainFlag from "./imagesEducation/Britain.svg";
import euroFlag from "./imagesEducation/GBP.svg";
import austriaFlag from "./imagesEducation/Austria.svg";
import kenyaFlag from "./imagesEducation/Kenya.svg";
import closeIcon from "./imagesEducation/close-circle.svg";
import { ContextProvider } from "../Context";
import Joi from "joi";
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Modal } from "../Screens/Modal/Modal";
import JambReceipt from "./ReceiptEducationPins/jambReceipt";
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import { GetFunction, PostFunction } from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import {
  handleFormattedAmount,
  validateNigerianNumberByNetwork,
} from "./waecEducationPin";

export default function JambEducationPin() {
  const {
    isDarkMode,
    jambQuantityResult,
    setJambQuantityResult,
    jambQuantityActive,
    setJambQuantityActive,
    jambPaymentResult,
    setJambPaymentResult,
    jambMethodActive,
    setJambMethodActive,
    jambExamType,
    setJambExamType,
    jambExamActive,
    setJambExamActive,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    jambEducationPinPhone,
    setJambEducationPinPhone,
    jambEducationAmount,
    setJambEducationAmount,
    jambQuantityAmount,
    setJambQuantityAmount,
    jambEducationPinEmail,
    setJambEducationPinEmail,
    jambWalletBalance,
    setJambWalletBalance,
    // jambEduResponse,
    setJambEduResponse,
    newBalance,
  } = useContext(ContextProvider);

  // UseStates
  const [jambImageState, setJambImageState] = useState(arrowDown);
  const [jambEducationProceed, setJambEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [jambEducationConfirm, setJambEducationConfirm] = useState(false);
  const [receipt] = useState(false);

  //==========  QUANTITY RESULT SLIP CHECKERS ==============
  function jambQuantityDropDown() {
    if (!jambExamType) {
      setJambQuantityActive(false);
    } else {
      setJambQuantityActive(!jambQuantityActive);
      document.querySelector(".imgdrop").classList.toggle("DropIt");
    }
    setJambMethodActive(false);
  }
  const jambOptions = [
    { quantity: "1 Piece Of Result Checker", Amount: "₦100", id: 1 },
    { quantity: "2 Piece Of Result Checker", Amount: "₦200", id: 2 },
    { quantity: "3 Piece Of Result Checker", Amount: "₦300", id: 3 },
    { quantity: "4 Piece Of Result Checker", Amount: "₦400", id: 4 },
    { quantity: "5 Piece Of Result Checker", Amount: "₦500", id: 5 },
  ];

  // WALLET

  function jambMethodDropDown() {
    setJambMethodActive(!jambMethodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
    setJambQuantityActive(false);
    setJambExamActive(false);
  }
  const jambMethodOptions = [
    {
      method: "NGN Wallet",
      balance: `(₦${newBalance})`,
      flag: nigerianFlag,
      id: 1,
    },
    { method: "USD Wallet ", balance: "(0.00)", flag: americaFlag, id: 2 },
    { method: "EUR Wallet", balance: "(0.00)", flag: britainFlag, id: 3 },
    { method: "GBP Wallet", balance: "(0.00)", flag: euroFlag, id: 4 },
    { method: "AUD Wallet", balance: "(0.00)", flag: austriaFlag, id: 5 },
    { method: "KES Wallet", balance: "(0.00)", flag: kenyaFlag, id: 6 },
  ];

  // CONFIRM EXAM TYPE
  const jambExams = [
    { examType: "JAMB", id: 1 },
    { examType: "NECO", path: "/NecoEducationPin", id: 2 },
    { examType: "NABTEB", path: "/NabtebEducationPin", id: 3 },
    { examType: "WAEC", path: "/WaecEducationPin", id: 4 },
  ];
  function jambExamDropDown() {
    setJambExamActive(!jambExamActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
    setJambQuantityActive(false);
    setJambMethodActive(false);
  }
  // FUNCTION OTP FOR THE POPPINS
  const {
    toggleSideBar,
    inputPin,
    setInputPin,
    inputPinHandler,
    toggleVisibility,
    isVisible,
  } = useContext(ContextProvider);

  const jambProceed = () => {
    const { error } = schema.validate({
      jambEducationPinPhone,
      jambEducationPinEmail,
    });
    const network = validateNigerianNumberByNetwork(jambEducationPinPhone);

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (network === "Unknown network") {
      setErrors({
        educationPinPhone:
          "Invalid phone number. Please enter a valid Nigerian network number.",
      });
    } else {
      setJambEducationProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    jambEducationPinPhone: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    jambEducationPinEmail: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
  });

  // Get Amount
  // const [isFailedAmount, setIsFailedAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isAmountLoading, setIsAmountLoading] = useState(false);

  const getAmount = async function handleGetAmount() {
    const id = 3;
    const path = `products/edu/${id}`;
    const SuccessHandler = () => {
      setJambEduResponse((response) => {
        const amount = response?.data?.data?.data?.Amount;
        if (amount) {
          setJambQuantityAmount(amount);
        } else {
          setJambQuantityAmount("");
        }
        return response;
      });
    };

    const FailedHandler = (name) => {
      // setIsFailedAmount(true);
      if (name === "Server error") {
        alert("Unable to get WAEC PINS. Please try again later");
      }
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setJambEduResponse
    );
  };
  // get the amount on entering the page
  useEffect(() => {
    getAmount();
    handleResetFields();
    // eslint-disable-next-line
  }, []);

  // function to reset the fields
  function handleResetFields() {
    setJambExamType("JAMB");
    setJambQuantityResult("");
    setJambEducationPinPhone("");
    setJambEducationPinEmail("");
    setJambEducationAmount("");
    setJambPaymentResult("");
    setJambQuantityActive(false);
    setJambMethodActive(false);
    setJambExamActive(false);
  }

  function handleCalculatedAmount(quantity) {
    // setIsAmountLoading(true);
    const amountCalculated =
      jambQuantityAmount > 0 ? Number(jambQuantityAmount) * quantity : "";
    return handleFormattedAmount(amountCalculated);

    // setTimeout(() => {
    //   setIsAmountLoading(false);
    //   setJambEducationAmount(amountCalculated);
    // }, 1000);
  }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance);
  let educationAmountToNumber = Number(jambEducationAmount);
  let CheckSufficiency = educationAmountToNumber > balanceStringToNum;
  useEffect(() => {
    const HandleBalanceStatus = () => {
      if (CheckSufficiency) {
        setBalanceStatus("Insufficient fund");
      } else {
        setBalanceStatus("");
      }
    };
    HandleBalanceStatus();
  }, [CheckSufficiency]);

  const confirmButton = () => {
    setJambEducationProceed(false);
    setJambEducationConfirm(true);
  };

  const jambTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };
  const jambReceipt = () => {
    setTransactSuccessPopUp(false);
  };

  const handleJambSubmitPost = async (e) => {
    e.preventDefault();
    // const id = 1;
    const path = `edu`;
    const body = {
      exam_type: jambExamType.toLowerCase(),
      quantity: parseInt(jambQuantityResult.slice(0, 1)),
      phone_no: jambEducationPinPhone,
      email: jambEducationPinEmail,
      // amount: educationAmount.slice(1),
      amount: String(jambEducationAmount),
      wallet_type: "",
    };
    const SuccessHandler = () => {
      // eduPinSuccess();
      // setEducationPinStatus(true);
    };
    const FailedHandler = () => {
      // waecEduPinFailed();
    };

    await PostFunction(
      path,
      setIsLoading,
      body,
      SuccessHandler,
      FailedHandler
      // setEduResponse
    );
  };

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-[115%] lg:h-[120%]">
        <div className="">
          {/* Hero-section */}
          <HeroComponent />
          <div className="flex lg:gap-[8px] items-center md:gap-[5.694px] mb-[20px] lg:mb-[50px] md:mb-[30px] gap-[4.694px]">
            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              } `}
            >
              Purchase
            </h2>

            <img
              className="h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center"
              src={jambImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              }`}
            >
              JAMB E-PINs Instantly
            </h2>
            <img
              className="md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* Input for Request of examination pins  */}
          <form action="" onSubmit={handleJambSubmitPost}>
            <div className="flex flex-col gap-5 md:gap-0">
              {/* container for the first two input */}
              <div className="  w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
                {/* First Step Confirm exam type */}
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-[14px] lg:text-[17px] md:text-[13px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Confirm Exam Type
                  </h2>
                  {/* input */}
                  <div
                    onClick={jambExamDropDown}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
                      isDarkMode
                        ? "bg-black text-white border border-white"
                        : "hover:bg-[#EDEAEA]"
                    }`}
                  >
                    <h2
                      className={`
                      ${
                        isDarkMode
                          ? "bg-black text-white"
                          : " text-[#7C7C7C] hover:bg-[#EDEAEA] "
                      }`}
                      // font-normal text-xs leading-[10.4px] md:leading-[12.206px] capitalize lg:text-base  lg:leading-[20.8px]cursor-pointer
                    >
                      {jambExamType}
                    </h2>
                    <img
                      className="Examdrop lg:w-6 lg:h-6 w-4 h-4 cursor-pointer"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {jambExamActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[60px] top-[74px] z-[2] flex flex-col w-full divide-y lg:h-225px md:h-[210px]
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50 border border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {jambExams.map((exam) => {
                        return (
                          <a
                            href={exam.path}
                            onClick={() => {
                              setJambExamType(exam.examType);
                              setJambExamActive(false);
                              document
                                .querySelector(".Examdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`py-5 text-sm leading-[10.4px] md:py-[14px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300 
                            ${
                              isDarkMode
                                ? "bg-black text-white  hover:bg-gray-800"
                                : " text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                            }`}
                            key={exam.id}
                          >
                            <h2>{exam.examType} </h2>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Quantity input Two / RightSide */}
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2 ">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Quantity
                  </h2>
                  {/* input */}
                  <div
                    onClick={jambQuantityDropDown}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] sm:p-3 sm:text-lg  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                      isDarkMode
                        ? "bg-black text-white border border-white"
                        : "hover:bg-[#EDEAEA] border-[0.24px] lg:border-[0.4px] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                  >
                    <h2
                      className={`w-full h-full 
                      ${
                        isDarkMode
                          ? "bg-black text-white "
                          : " text-[#7C7C7C] hover:bg-[#EDEAEA] "
                      }`}
                    >
                      {jambQuantityResult}
                    </h2>
                    <img
                      className="imgdrop lg:w-6 lg:h-6 w-4 h-4 cursor-pointer"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {jambQuantityActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[60px] top-[74px] z-[1] flex flex-col w-full divide-y rounded
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50 border border-white"
                          : "text-[#7C7C7C] hover:bg-[#EDEAEA]"
                      }`}
                    >
                      {jambOptions.map((option) => {
                        return (
                          <h2
                            onClick={() => {
                              setJambQuantityResult(
                                jambQuantityAmount > 0
                                  ? `${
                                      option.quantity
                                    } (₦${handleCalculatedAmount(option.id)})`
                                  : option.quantity
                              );
                              setJambQuantityActive(false);
                              setJambEducationAmount(
                                jambQuantityAmount > 0
                                  ? handleFormattedAmount(
                                      Number(jambQuantityAmount) * option.id
                                    )
                                  : ""
                              );
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`py-5 md:py-[14px]  text-[13.5px] leading-[10.4px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800 "
                                : " hover:bg-[#EDEAEA] bg-[white] text-[#7C7C7C]"
                            }`}
                            key={option.id}
                          >
                            {jambQuantityAmount > 0
                              ? `${option.quantity} (₦${handleCalculatedAmount(
                                  option.id
                                )})`
                              : option.quantity}
                          </h2>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* container for Phone number and Email */}
              <div className=" w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
                {/* LeftSide */}
                <div className=" container-phone flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2 ">
                  <label
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Phone Number
                  </label>

                  <input
                    onInput={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "");
                      e.target.value = numericValue;
                      if (numericValue.length === 11) {
                        e.target.style.border = "2px solid green";
                      } else if (e.target.value.length < 11) {
                        e.target.style.border = "2px solid red";
                      }
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                    }`}
                    type="tel"
                    name="phone"
                    id="phone"
                    maxLength={11}
                    placeholder=""
                    value={jambEducationPinPhone}
                    onChange={(e) => {
                      setJambEducationPinPhone(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        jambEducationPinPhone: "",
                      }));
                    }}
                  />
                  {errors.jambEducationPinPhone && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.jambEducationPinPhone}
                    </div>
                  )}
                </div>

                {/* right-side */}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  <h2
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Email
                  </h2>

                  <input
                    className={`EmailPins mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={jambEducationPinEmail}
                    onChange={(e) => {
                      setJambEducationPinEmail(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        jambEducationPinEmail: "",
                      }));
                    }}
                    type="email"
                    placeholder="example@gmail.com"
                  />

                  {errors.jambEducationPinEmail && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.jambEducationPinEmail}
                    </div>
                  )}
                </div>
              </div>

              {/* Conatiner for Amount and Payment method */}
              <div className="w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
                {/* Amount Step /Leftside */}
                <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal  text-sm md:text-[13px]  lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Amount
                  </label>
                  {/* input */}
                  <input
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={
                      jambEducationAmount ? `₦${jambEducationAmount}` : "₦"
                    }
                    readOnly
                  />
                  {/* {isAmountLoading && (
                    <p className="left-4 absolute top-7 md:top-9 lg:top-12">
                      <BalanceLoading />
                    </p>
                  )} */}
                </div>
                {/* payment method */}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Payment Method
                  </h2>
                  {/* input */}
                  <div
                    onClick={jambMethodDropDown}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center justify-between border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                  >
                    <h2
                      className={`font-medium text-[13px] leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base  lg:leading-[20.8px] cursor-pointer
                      ${
                        isDarkMode ? "bg-black text-white" : " text-[#7C7C7C] "
                      }`}
                    >
                      {/* {jambPaymentResult + "" + jambWalletBalance} */}
                      {jambPaymentResult}
                    </h2>
                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer methodDrop"
                      src={jambPaymentResult?jambImageState:arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {jambMethodActive && (
                    <div
                      className={`absolute lg:top-[85px] md:top-[60px] top-[72px] border divide-y z-[5] rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50  border-white"
                          : "text-[#7C7C7C] bg-white"
                      }`}
                    >
                      {jambMethodOptions.map((methodOption) => {
                        return (
                          <div
                            onClick={() => {
                              if (methodOption.method === "NGN Wallet") {
                                setJambPaymentResult(newBalance
                                    ? `${methodOption.method} ${methodOption.balance}`
                                    : methodOption);
                                setJambWalletBalance(methodOption.balance);
                                setJambImageState(methodOption.flag);
                                setJambMethodActive(false);
                                document
                                  .querySelector(".methodDrop")
                                  .classList.remove("DropIt");
                              } else {
                                setJambMethodActive(true);
                              }
                            }}
                            className={`flex gap-2.5 lg:py-[15px] py-[10px] pl-[10px] transition-colors duration-300 items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                            ${
                                methodOption.id !== 1 && !isDarkMode
                                  ? "bg-gray-300 cursor-not-allowed"
                                  : methodOption.id !== 1 && isDarkMode
                                  ? "bg-black cursor-not-allowed"
                                  : methodOption.id === 1 && !isDarkMode
                                  ? "bg-white hover:bg-[#EDEAEA] cursor-pointer"
                                  : "bg-black cursor-pointer hover:bg-gray-800"
                              }
                            `}
                            key={methodOption.id}
                          >
                            <img
                              className="md:h-[29.27px]  h-[14.27px]"
                              src={methodOption.flag}
                              alt=""
                            />

                            <h2
                              className={`py-5 md:pb-0 md:pt-0 font-normal text-[13.5px] leading-[10.4px] md:text-[13.227px] md:leading-[17.195px] lg:text-base lg:leading-[20.8px] self-center
                              ${
                                isDarkMode
                                  ? "bg-black text-white"
                                  : "text-[#7C7C7C]"
                              }`}
                            >
                              {methodOption.method + " " + methodOption.balance}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* end of */}
            </div>
            {jambEducationProceed && (
              <Modal>
                <div
                  className={`deleteRecipientSuccess mx-[5%] ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar ? "confirm01" : "confirm"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
                md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                >
                  <div
                    className="w-full flex justify-end border-b-[6px] items-center
                 border-primary px-[12px] h-[35px] md:h-[45px] lg:h-[60px] lg:border-b-[10px]"
                  >
                    <img
                      src={closeIcon}
                      alt=""
                      onClick={() => setJambEducationProceed(false)}
                      className=" w-[18px] h-[18px]  md:w-[25px] cursor-pointer
                    md:h-[25px] lg:w-[35px] lg:h-[35px]"
                    />
                  </div>

                  <div>
                    <h2 className="lg:text-base lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-semibold mt-[20px] leading-[12px]">
                      Confirm Transaction
                    </h2>
                    <h2
                      className="lg:text-base md:text-[12px] md:px-[30px] 
                  lg:leading-[24px] text-[10px] leading-[12px] text-center 
                  mt-[26px] mx-[10px] mb-[20px] font-medium"
                    >
                      You are about to purchase{" "}
                      <span className="font-semibold lg:text-[16.9px] md:text-[14.9px] text-[10.9px]">
                        {jambExamType} PIN (₦{jambEducationAmount}){" "}
                      </span>{" "}
                      from your {jambPaymentResult} to
                    </h2>

                    <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px]
                       md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Exam Type
                        </h2>
                        <div className="flex gap-1">
                          <div
                            className="rounded-full w-[12.02px] h-[12.02px] flex items-center
                         justify-center text-[6px] overflow-hidden md:w-[12.02px] 
                         lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                          >
                            <img
                              src={jambImg}
                              alt=""
                              className="w-full h-full object-cover md:h-[15px]"
                            />
                          </div>
                          <h2
                            className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                        lg:text-base lg:leading-[24px] font-medium"
                          >
                            {jambExamType}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] 
                      md:text-[12px] md:leading-[11.92px] 
                    lg:text-base lg:leading-[24px] font-medium"
                        >
                          Quantity
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                        lg:text-base lg:leading-[24px] font-medium"
                          >
                            {jambQuantityResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] 
                       md:text-[12px] md:leading-[11.92px] 
                       lg:text-base lg:leading-[24px] font-medium"
                        >
                          Phone Number
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                        md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {jambEducationPinPhone}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] 
                       md:text-[12px] md:leading-[11.92px] lg:text-base
                        lg:leading-[24px] font-medium"
                        >
                          Email
                        </h2>
                        <input
                          className={`py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] lg:placeholder:text-base lg:placeholder:leading-[20.8px] rounded-lg sm:rounded-[10px]
                          ${
                            isDarkMode
                              ? "bg-black text-white placeholder:text-white border-white"
                              : " placeholder:text-[#7E7E7E] border-[#9C9C9C] text-[#7E7E7E]"
                          }`}
                          value={jambEducationPinEmail}
                          onChange={(e) => {
                            setJambEducationPinEmail(e.target.value);
                          }}
                          type="Email"
                          placeholder="example@gmail.com"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px]
                       md:text-[12px] md:leading-[11.92px] 
                       lg:text-base lg:leading-[24px] font-medium"
                        >
                          Amount
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-[12px]  md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium">
                            ₦{jambEducationAmount}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium">
                          Payment Method
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                        md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {jambPaymentResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px]  md:text-[12px] 
                      md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Transaction Fee
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                        md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            ₦0.00
                          </h2>
                        </div>
                      </div>

                      {/* POINTS EARNED */}
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-[12px] 
                      md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Points Earned
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] text-[#2ED173] 
                        leading-[12px] md:text-[12px] md:leading-[11.92px] 
                        lg:text-base lg:leading-[24px] font-medium"
                          >
                            +2.00
                          </h2>
                        </div>
                      </div>

                      {/* WALLET */}
                      <div
                        className="my-[5px] relative flex justify-between items-center gap-2 
                  bg-slate-200 -mx-[20px] px-[15px] h-[55px] py-[18px]"
                      >
                        <div className="flex gap-2 items-center">
                          <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                            <img
                              className="w-[16px] h-[16px]"
                              src={jambImageState}
                              alt="/"
                            />
                          </div>
                          <p className="text-[10px] md:text-sm  lg:text-base font-medium">
                            Available Balance{" "}
                            <span className="text-[#00000063] font-medium">
                              (₦{jambWalletBalance})
                            </span>
                          </p>
                        </div>
                        <img
                          src={arrowRight}
                          alt=""
                          className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                        />
                        <span className="text-gray-500 text-xs font-normal leading-[20px] lg:text-[16px] lg:leading-[22px] text-left absolute left-[3.2rem] top-8 ">
                          {balanceStatus}
                        </span>
                      </div>

                      <div className="flex items-center justify-center mb-[60px]">
                        <button
                          className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:text-xs leading-[15px] lg:text-base lg:leading-[24px] py-[15px] md:py-[10px] font-extrabold   ${
                            CheckSufficiency ? "bg-gray-400" : "bg-primary"
                          }`}
                          onClick={() => {
                            confirmButton();
                          }}
                          disabled={CheckSufficiency}
                        >
                          Confirmed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {/* CONFIRM TRANSACTION */}
            {jambEducationConfirm && (
              <Modal>
                <div
                  className={`confirm2 ${styles.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <img
                    onClick={() => setJambEducationConfirm(false)}
                    className="absolute cursor-pointer top-[5.5px] 
                  right-2 w-[18px] h-[18px] 
                  md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px]"
                    src={closeIcon}
                    alt=""
                  />

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                  <p className="text-[10px] md:text-base lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]">
                    Input PIN to complete transaction
                  </p>
                  <div className="flex flex-col gap-2.5 justify-center items-center font-extrabold mb-[7%]">
                    <div className=" flex justify-center items-center ml-[5%] gap-2.5 md:ml-[5%] md:gap-[30px]">
                      {" "}
                      {isVisible ? (
                        <OtpInput
                          value={inputPin}
                          inputType="tel"
                          onChange={setInputPin}
                          numInputs={4}
                          shouldAutoFocus={true}
                          inputStyle={{
                            color: "#403f3f",
                            width: 30,
                            height: 30,
                            borderRadius: 3,
                          }}
                          renderInput={(props) => (
                            <input {...props} className="inputOTP mx-[3px]" />
                          )}
                        />
                      ) : (
                        <div className="text-[24px] md:text-[24px] mt-1">
                          * * * *{" "}
                        </div>
                      )}
                      <div
                        className="text-[#0003] text-[13.5px] md:text-3xl"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                    <p className="text-[8px] md:text-[12px] text-[#04177f]">
                      Forgot Pin ?
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setJambEducationConfirm(false);
                      inputPinHandler(e);
                    }}
                    disabled={inputPin.length !== 4}
                    className={`${
                      inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                    } my-[5%] w-[225px] flex justify-center items-center 
                  mx-auto cursor-pointer text-[10px] font-extrabold h-[40px]
                   text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base 
                   lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                  >
                    Purchase
                  </button>
                </div>
              </Modal>
            )}

            {transactSuccessPopUp && (
              <Modal>
                {/* <TransactFailedPopUp/> */}
                <div
                  className={`confirm ${styles.successfulTwo} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:ml-[20%] lg:w-[40%]"
                      : "lg:w-[40%]"
                  } md:w-[45%] w-[90%] md:my-auto md:mt-[.5%] mx-auto overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                    <img
                      onClick={() => {
                        setTransactSuccessPopUp(false);
                        window.location.reload();
                      }}
                      className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                      src={AremxyPlugIcon}
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setTransactSuccessPopUp(false);
                        window.location.reload();
                      }}
                      className=" w-[18px] h-[18px]  cursor-pointer
                    md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                  <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-sm lg:my-[2%]">
                    Purchase Successful
                  </h2>
                  <img
                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[250px] lg:h-[250px]"
                    src="./Gif/checkMarkGif.gif"
                    alt="/"
                  />

                  <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px] px-[20px]">
                    <p
                      className="text-[10px] font-medium text-[#000] text-center mb-2 
                md:text-sm lg:text-base leading-[15px] md:leading-[20px] lg:leading-[16px] "
                    >
                      You have successfully purchased{" "}
                      <span
                        className="text-[#000] font-semibold text-[10.9px] md:text-[14.9px]
                    lg:text-[16.9px]"
                      >
                        JAMB (₦100){" "}
                      </span>
                      from your {jambPaymentResult} to{" "}
                    </p>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Exam Type
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={jambImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2
                          className="text-[10px] leading-[12px]  md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          JAMB
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] 
                     md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Quantity
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {jambQuantityResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-[12px] 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {jambEducationPinPhone}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-[12px] 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Email
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {jambEducationPinEmail}
                        </h2>
                      </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px]">
                        {selectedAmount}
                      </h2>
                    </div>
                  </div> */}

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-[12px] md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {jambPaymentResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-[12px] 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Order Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px]  md:text-[12px] md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          0124yend44
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-[#F2FAFF] mx-5 h-[45px] my-5 flex p-[10.193px] 
                items-center justify-center   
              md:mx-[20px] md:rounded-[15px] lg:rounded-[16.308px] lg:h-[75px]"
                  >
                    <p
                      className="text-[9px] text-[#7C7C7C] text-center  md:text-[12px] 
                lg:text-[14.231px] lg:leading-[20px]"
                    >
                      <span className="md:block">
                        The e-pins purchase has been generated successfully.
                        Please kindly check
                      </span>
                      <span className="md:block">
                        {" "}
                        receipt to confirm the pin / token. You can contact us
                        for any further{" "}
                      </span>{" "}
                      assistance.
                    </p>
                  </div>
                  <div
                    className="flex  justify-center  w-full 
              items-center gap-[15px] md:gap-[20px] mt-[50px]  lg:gap-[20px] 
              lg:my-[5%] md:mt-[20px] mb-[20px]"
                  >
                    <Link
                      to="/JambEducationPin"
                      onClick={() => {
                        jambTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-[12px] font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Done
                    </Link>

                    <Link
                      to="/JambReceipt"
                      onClick={jambReceipt}
                      className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                     flex justify-center items-center text-center  cursor-pointer text-[12px] 
                     font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Receipt
                    </Link>
                  </div>
                </div>
              </Modal>
            )}

            {/* =========== RECEIPT ============*/}
            {receipt && (
              <JambReceipt
                Exam="JAMB"
                ExamType={jambExamType}
                ListOfResultCheckers={jambQuantityResult}
                PhoneNumber={jambEducationPinPhone}
                Email={jambEducationPinEmail}
                walletName={jambPaymentResult}
                walletBalance={jambWalletBalance}
                Amount={jambEducationAmount}
              />
            )}

            <div className="py-[30px] lg:py-[60px] mt-10 lg:mb-[80px] mb-[50px] md:mb-[100px]">
              <button
                className={`font-extrabold h-[43px] w-full py-[3.534px] px-[5.301px] 
             md:mb-[0px] rounded-[4.241px] md:h-auto
              md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] 
             md:text-[9.389px] md:leading-[14px] md:rounded-[7.042px]
             lg:text-base lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px] ${
               !jambExamType ||
               !jambQuantityResult ||
               !jambEducationPinPhone ||
               !jambEducationPinEmail ||
               !jambEducationAmount ||
               !jambPaymentResult
                 ? "bg-[#63616188] cursor-not-allowed"
                 : "bg-primary"
             }`}
                onClick={(e) => {
                  jambProceed(e);
                  e.preventDefault();
                }}
                disabled={
                  !jambExamType ||
                  !jambQuantityResult ||
                  !jambEducationPinPhone ||
                  !jambEducationPinEmail ||
                  !jambEducationAmount ||
                  !jambPaymentResult
                }
              >
                Proceed
              </button>
            </div>
          </form>
        </div>

        <div
          className=" flex gap-[8.729px]  md:gap-[14.896px]
       justify-center px-[8.594px] mb-[50px]"
        >
          <p
            className="font-medium text-[11px] md:text-[12px]
              leading-[10.4px] lg:text-base lg:leading-[15.6px] md:leading-[12.938px] self-center"
          >
            You need help?
          </p>
          <Link
            to="/contactUs"
            className={`${
              isDarkMode ? "bg-[#04177f] " : "bg-[#04177f]"
            } text-[11px] p-1.5 text-white rounded-[8px] lg:text-base`}
          >
            Contact Us
          </Link>
        </div>
      </div>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </DashBoardLayout>
  );
}
