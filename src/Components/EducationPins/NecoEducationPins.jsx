import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { useContext } from "react";
import HeroComponent from "./heroComponent";
import NecoImg from "../EducationPins/imagesEducation/Neco_official_banner 1.svg";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { useState, useEffect } from "react";
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
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
import NecoReceipt from "./ReceiptEducationPins/necoReceipt";
import axios from "axios";
import eduFailed from "./imagesEducation/WaecFailedTransaction.svg";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import { GetFunction, PostFunction } from "../ApiCollection.jsx/ApiBuck";
import { BalanceLoading, Loader } from "../Loader/Loader";

export default function NecoEducationPins() {
  const {
    isDarkMode,
    necoQuantityResult,
    setNecoQuantityResult,
    necoQuantityActive,
    setNecoQuantityActive,
    necoPaymentResult,
    setNecoPaymentResult,
    necoMethodActive,
    setNecoMethodActive,
    necoExamType,
    setNecoExamType,
    necoExamActive,
    setNecoExamActive,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    necoEducationPinPhone,
    setNecoEducationPinPhone,
    necoEducationPinEmail,
    setNecoEducationPinEmail,
    necoEducationAmount,
    setNecoEducationAmount,
    necoQuantityAmount,
    setNecoQuantityAmount,
    necoWalletBalance,
    setNecoWalletBalance,
    setEducationPinStatus,
    necoEduResponse,
    setNecoEduResponse,
    newBalance,
  } = useContext(ContextProvider);

  // UseStates
  const [necoImageState, setNecoImageState] = useState(arrowDown);
  const [necoEducationProceed, setNecoEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [necoEducationConfirm, setNecoEducationConfirm] = useState(false);
  const [receipt] = useState(false);
  const [necoFailedTransaction, setNecoFailedTransaction] = useState(false);

  //==========  QUANTITY RESULT SLIP CHECKERS ==============
  function necoQuantityDropDown() {
    setNecoQuantityActive(!necoQuantityActive);
    document.querySelector(".imgdrop").classList.toggle("DropIt");
  }
  const necoOptions = [
    { quantity: "1 Piece Of Result Checker", Amount: "₦1200", id: 1 },
    { quantity: "2 Piece Of Result Checker", Amount: "₦2400", id: 2 },
    { quantity: "3 Piece Of Result Checker", Amount: "₦3600", id: 3 },
    { quantity: "4 Piece Of Result Checker", Amount: "₦4800", id: 4 },
    { quantity: "5 Piece Of Result Checker", Amount: "₦6000", id: 5 },
  ];

  // WALLET

  function necoMethodDropDown() {
    setNecoMethodActive(!necoMethodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
  }
  const necoMethodOptions = [
    {
      method: "NGN Wallet",
      balance: `(${newBalance})`,
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
  const necoExams = [
    { examType: "NECO", id: 1 },
    { examType: "WAEC (₦3400)", path: "/WaecEducationPin", id: 2 },
    { examType: "NABTEB (₦1000)", path: "/NabtebEducationPin", id: 3 },
    { examType: "JAMB (₦100)", path: "/JambEducationPin", id: 4 },
  ];
  function necoExamDropDown() {
    setNecoExamActive(!necoExamActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
  }
  // FUNCTION OTP FOR THE POPPINS
  const { toggleSideBar, inputPin, setInputPin, toggleVisibility, isVisible } =
    useContext(ContextProvider);

  const necoProceed = () => {
    const { error } = schema.validate({
      necoEducationPinPhone,
      necoEducationPinEmail,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setNecoEducationProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    necoEducationPinPhone: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    necoEducationPinEmail: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
  });

  // Get Amount
  const [isFailedAmount, setIsFailedAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAmountLoading, setIsAmountLoading] = useState(false);

  const getAmount = async function handleGetAmount() {
    const id = 2;
    const path = `products/edu/${id}`;
    const SuccessHandler = () => {
      setNecoEduResponse((response) => {
        const amount = response?.data?.data?.data?.Amount;
        if (amount) {
          setNecoQuantityAmount(amount);
        } else {
          setNecoQuantityAmount("");
        }
        return response;
      });
    };

    const FailedHandler = () => {
      setIsFailedAmount(true);
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setNecoEduResponse
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
    setNecoExamType("");
    setNecoQuantityResult("");
    setNecoEducationPinPhone("");
    setNecoEducationPinEmail("");
    setNecoEducationAmount("");
    setNecoPaymentResult("");
  }

  function handleCalculatedAmount(quantity) {
    setIsAmountLoading(true);
    const amountCalculated =
      necoQuantityAmount > 0 ? Number(necoQuantityAmount) * quantity : "";

    setTimeout(() => {
      setIsAmountLoading(false);
      setNecoEducationAmount(amountCalculated);
    }, 1000);
  }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance);
  let educationAmountToNumber = Number(necoEducationAmount);
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
    setNecoEducationProceed(false);
    setNecoEducationConfirm(true);
  };

  const waecTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };
  const necoReceipt = () => {
    setTransactSuccessPopUp(false);
  };
  const necoEduPinSuccess = (e) => {
    setTransactSuccessPopUp(true);
    setNecoEducationConfirm(false);
    setInputPin("");
  };
  const necoEduPinFailed = () => {
    setNecoEducationConfirm(false);
    setNecoFailedTransaction(true);
    setInputPin("");
  };
  // const handleNecoSubmitPost = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const sendNecoForm = {
  //       exam_type: necoExamType.toLowerCase(),
  //       quantity: parseInt(necoQuantityResult.slice(0, 1)),
  //       phone_no: necoEducationPinPhone,
  //       email: necoEducationPinEmail,
  //       amount: necoEducationAmount.slice(1),
  //       wallet_type: "",
  //     };
  //     console.log(sendNecoForm);

  //     const response = await axios.post(
  //       "https://aremxyplug.onrender.com/api/v1/edu",
  //       sendNecoForm
  //     );
  //     if (response.status === "success" || 201 || "Successful" || 200) {
  //       necoEduPinSuccess();
  //       setEducationPinStatus(true);
  //     }
  //     alert("submitted");
  //   } catch (error) {
  //     console.error(`The Data brought back an error Of ${error}`);
  //     necoEduPinFailed();
  //   }
  // };
  // GET RESPONSE SUCCESSFUL
  
  const handleNecoSubmitPost = async (e) => {
      e.preventDefault();
      // const id = 1;
      const path = `edu`;
      const body = {
        exam_type: necoExamType.toLowerCase(),
        quantity: parseInt(necoQuantityResult.slice(0, 1)),
        phone_no: necoEducationPinPhone,
        email: necoEducationPinEmail,
        // amount: educationAmount.slice(1),
        amount: String(necoEducationAmount),
        wallet_type: "",
      };
      const SuccessHandler = () => {
        necoEduPinSuccess();
        setEducationPinStatus(true);
      };
      const FailedHandler = () => {
       necoEduPinFailed();
      };
  
      await PostFunction(
        path,
        setIsLoading,
        body,
        SuccessHandler,
        FailedHandler,
        setNecoEduResponse
      );
    };
  
  
  
  const requestEducationPin = async () => {
    try {
      const EducationResponse = await axios.get(
        "https://aremxyplug.onrender.com/api/v1/edu"
      );
      return EducationResponse.data;
    } catch (error) {
      console.error("There was error fetching the Education Pins", error);
      return null;
    }
  };
  // useEffect(() => {
  //   const acceptData = async () => {
  //     try {
  //       const dataCollected = await requestEducationPin();
  //       if (dataCollected) {
  //         setNecoEduResponse(dataCollected);
  //       }
  //     } catch (error) {
  //       console.error("There was an error trying to get the token:", error);
  //     }
  //   };

  //   acceptData();
  //   // eslint-disable-next-line
  // }, []);
  // console.log(necoEduResponse);

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between lg:h-[120%] h-[115%]">
        <div className="">
          {/* Hero-section */}
          <HeroComponent />
          <div className="flex lg:gap-[8px] items-center gap-[4.694px] md:gap-[5.868px] mb-[20px] lg:mb-[50px] md:mb-[30px]">
            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              } `}
            >
              Purchase
            </h2>

            <img
              className="h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center"
              src={NecoImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              }`}
            >
              NECO E-PINs Instantly
            </h2>
            <img
              className="md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-3.5 w-3.5"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* Input for Request of examination pins  */}
          <form action="">
            <div className=" flex flex-col gap-[20px] md:h-[172.73px] md:gap-[14.67px] lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px]">
              {/* container for the first two input */}
              <div className=" w-full flex flex-col md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px]">
                {/* First Step Confirm exam type */}
                <div className="relative flex flex-col w-full gap-2 md:w-1/2 lg:gap-2.5">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Confirm Exam Type
                  </h2>
                  {/* input */}
                  <div
                    // className="w-full relative"
                    onClick={(e) => {
                      necoExamDropDown();
                      console.log(e.target.value);
                      setNecoQuantityActive(false);
                      setNecoMethodActive(false);
                    }}
                    className={`flex justify-between items-center py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px]  placeholder:text-xs placeholder:leading-[10.4px] lg:placeholder:text-base lg:placeholder:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                      isDarkMode
                        ? "text-white bg-black border-white"
                        : "text-[#7E7E7E] bg-white border-[#9C9C9C]"
                    }`}
                  >
                    <input
                      type="text"
                      value={necoExamType}
                      className={`text-xs font-normal leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base focus:outline-none lg:leading-[24px]
                      ${isDarkMode ? "text-white bg-black" : "text-[#7C7C7C]"}`}
                      readOnly
                    />

                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer Examdrop"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {necoExamActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[75px] top-[68px] border divide-y z-[5] rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50  border-white"
                          : "text-[#7C7C7C]"
                      }`}
                      // lg:h-225px md:h-[210px]
                    >
                      {necoExams.map((exam) => {
                        return (
                          <a
                            href={exam.path}
                            onClick={(e) => {
                              setNecoExamType(exam.examType);
                              setNecoExamActive(false);
                              document
                                .querySelector(".Examdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`pb-[21px] md:pb-[14px] md:pt-[14px] pt-[21px] text-[13.2px] leading-[10.4px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] md:py-[15px] py-[8px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800 "
                                : " hover:bg-[#EDEAEA] bg-[white] text-[#7C7C7C]"
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
                <div className="relative flex flex-col w-full gap-2 md:w-1/2 lg:gap-2.5">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Quantity
                  </h2>
                  {/* input */}
                  <div
                    // className="w-full relative"
                    className={`flex justify-between items-center py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                      isDarkMode
                        ? "text-white bg-black border-white"
                        : "text-[#7E7E7E] bg-white border-[#9C9C9C]"
                    }`}
                    onClick={(e) => {
                      necoQuantityDropDown();
                      console.log(e.target.value);
                      setNecoExamActive(false);
                      setNecoMethodActive(false);
                    }}
                  >
                    <input
                      type="text"
                      value={necoQuantityResult}
                      className={`text-xs font-normal leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base focus:outline-none lg:leading-[24px]
                      ${isDarkMode ? "text-white bg-black" : "text-[#7C7C7C]"}`}
                      readOnly
                    />

                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer imgdrop"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {necoQuantityActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[75px] top-[68px] border divide-y z-[5] rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-y-white border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {necoOptions.map((option) => {
                        return (
                          <h2
                            onClick={(e) => {
                              setNecoQuantityResult(option.quantity);
                              setNecoQuantityActive(false);
                              // setNecoEducationAmount(option.Amount);
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                              handleCalculatedAmount(option.id);
                            }}
                            className={`pb-[21px] md:pb-[14px] md:pt-[14px] pt-[21px] text-[13.5px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-medium  shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] md:text-[13.227px] md:leading-[17.195px] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300  
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800"
                                : "text-[#7C7C7C] bg-white"
                            }`}
                            key={option.id}
                          >
                            {option.quantity}
                          </h2>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* container for Phone number and Email */}
              <div className=" w-full flex flex-col md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] ">
                {/* LeftSide */}
                <div className=" container-phone gap-2 flex flex-col md:w-1/2 md:gap-2.5 ">
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Phone Number
                  </h2>

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
                    className={`py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] lg:placeholder:text-base lg:placeholder:leading-[20.8px] rounded-lg sm:rounded-[10px]
                    ${
                      isDarkMode
                        ? "bg-black text-white  border-white"
                        : " border-[#9C9C9C] bg-white text-black"
                    }`}
                    type="tel"
                    name="phone"
                    id="phone"
                    maxLength={11}
                    placeholder=""
                    value={necoEducationPinPhone}
                    onChange={(e) => {
                      setNecoEducationPinPhone(e.target.value);
                    }}
                  />
                  {errors.necoEducationPinPhone && (
                    <div className="text-xs text-red-500 italic lg:text-sm">
                      {errors.necoEducationPinPhone}
                    </div>
                  )}
                </div>

                {/* right-side */}
                <div className="flex flex-col gap-2 md:w-1/2 md:gap-2.5">
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
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
                    value={necoEducationPinEmail}
                    onChange={(e) => {
                      setNecoEducationPinEmail(e.target.value);
                    }}
                    type="Email"
                    placeholder="example@gmail.com"
                  />
                  {errors.necoEducationPinEmail && (
                    <div
                      className={`text-xs text-red-500 italic lg:text-sm
                       ${isDarkMode ? "bg-black text-white" : ""}`}
                    >
                      {errors.necoEducationPinEmail}
                    </div>
                  )}
                </div>
              </div>

              {/* Conatiner for Amount and Payment method */}
              <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[12.91px] lg:gap-[22px]">
                {/* Amount Step /Leftside */}
                <div className="relative top-0 flex flex-col gap-[5.868px] w-full md:w-1/2 md:gap-2.5">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Amount
                  </h2>
                  {/* input */}
                  <input
                    className={`py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] lg:placeholder:text-base lg:placeholder:leading-[20.8px] rounded-lg sm:rounded-[10px] 
                    ${
                      isDarkMode
                        ? "text-white bg-black border-white"
                        : "text-[#7E7E7E] bg-white border-[#9C9C9C]"
                    }`}
                    value={isAmountLoading ? "" : necoEducationAmount}
                    // onChange={(e) => {
                    //   setNecoEducationAmount(e.target.value);
                    // }}
                    readOnly
                  />
                  {isAmountLoading && (
                    <p className="left-4 absolute top-7 md:top-9 lg:top-12">
                      <BalanceLoading />
                    </p>
                  )}
                </div>
                {/* payment method */}
                <div className="relative payment-parent gap-2 flex w-full flex-col md:w-1/2 md:gap-2.5 ">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Payment Method
                  </h2>
                  {/* input */}
                  <div
                    // className="w-full relative"
                    onClick={(e) => {
                      necoMethodDropDown();
                      console.log(e.target.value);
                      setNecoExamActive(false);
                      setNecoQuantityActive(false);
                    }}
                    className={`flex justify-between items-center py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px]  placeholder:text-xs placeholder:leading-[10.4px] lg:placeholder:text-base lg:placeholder:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                      isDarkMode
                        ? "text-white bg-black border-white"
                        : "text-[#7E7E7E] bg-white border-[#9C9C9C]"
                    }`}
                  >
                    <input
                      type="text"
                      value={necoPaymentResult}
                      className={`text-xs font-normal leading-[12px] capitalize focus:outline-none md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]
                      ${isDarkMode ? "text-white bg-black" : "text-[#7C7C7C]"}`}
                      readOnly
                    />

                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer methodDrop"
                      src={necoImageState}
                      alt="CountryFlag"
                    />
                  </div>
                  {/* drop down */}

                  {necoMethodActive && (
                    <div
                      className={`flex flex-col w-full  absolute rounded z-[1] lg:top-[90px] md:top-[75px] top-[72px] border divide-y   
                      ${
                        isDarkMode
                          ? "bg-black text-white border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {necoMethodOptions.map((methodOption) => {
                        return (
                          <div
                            onClick={(e) => {
                              setNecoPaymentResult(methodOption.method);
                              setNecoWalletBalance(methodOption.balance);
                              setNecoImageState(methodOption.flag);
                              setNecoMethodActive(false);
                              document
                                .querySelector(".methodDrop")
                                .classList.remove("DropIt");
                            }}
                            className={`flex gap-2.5 lg:py-[15px] py-[10px] pl-[10px] cursor-pointer items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] transition-colors duration-300
                            ${
                              isDarkMode
                                ? " text-white hover:bg-gray-800"
                                : "hover:bg-[#EDEAEA] bg-white"
                            }`}
                            key={methodOption.id}
                          >
                            <img
                              className="md:h-[29.27px]  h-[14.27px]"
                              src={methodOption.flag}
                              alt=""
                            />

                            <h2
                              className={`pb-[18px] pt-[18px] md:pb-0 md:pt-0 font-normal text-[13px] leading-[10.4px] md:text-xs md:leading-[17.195px] lg:text-base lg:leading-[20.8px] self-center cursor-pointer   
                              ${
                                isDarkMode
                                  ? "bg-black text-white"
                                  : "text-[#7C7C7C] "
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
            {necoEducationProceed && (
              <Modal>
                <div
                  //   className={`deleteRecipientSuccess mx-[5%] ${
                  //     isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  //   } ${
                  //     toggleSideBar ? "confirm01" : "confirm"
                  //   } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative
                  // md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                  className={`deleteRecipientSuccess mx-[5%] ${
                    isDarkMode ? "border bg-[#000] md:h-[620px]" : "bg-[#fff]"
                  } ${
                    toggleSideBar ? "confirm01" : "confirm"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
                md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                  // className={`${
                  //   isDarkMode
                  //     ? "absolute h-[505px] shrink-0 bottom-0 shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] rounded-[8px] md:h-[620px] md:rounded-xl md:bottom-[30%] lg:h-[550px] lg:rounded-[20px] lg:bottom-[7%] bg-black border border-white text-white"
                  //     : styles.transferMoneyPop
                  // } ${
                  //   toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                  // } w-[90%] md:w-[60%] overflow-auto`}
                >
                  <div
                    className="w-full flex justify-end items-center border-b-[6px]
                 border-primary px-[12px] h-[35px] md:h-[45px] lg:h-[60px] lg:border-b-[10px] "
                  >
                    <img
                      src={closeIcon}
                      alt=""
                      onClick={() => setNecoEducationProceed(false)}
                      className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
                    md:h-[25px] lg:w-[35px] lg:h-[35px]"
                    />
                  </div>

                  <div>
                    <h2 className="lg:text-base lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-semibold mt-[20px] leading-[12px]">
                      Confirm Transaction
                    </h2>
                    <h2
                      className="lg:text-base md:text-xs md:leading-[20px] md:px-[30px] 
                  lg:leading-[24px] 
                  text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px] font-medium"
                    >
                      You are about to purchase{" "}
                      <span className="font-semibold">{necoExamType} </span>{" "} PIN (
                      ₦{necoEducationAmount})
                      from your {necoPaymentResult} to
                    </h2>

                    <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs 
                      md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Exam Type
                        </h2>
                        <div className="flex gap-1">
                          <div
                            className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden
                         md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                          >
                            <img
                              src={NecoImg}
                              alt=""
                              className="w-full h-full object-cover md:h-[15px]"
                            />
                          </div>
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px]
                         lg:text-base lg:leading-[24px] font-medium"
                          >
                            {necoExamType}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px]
                       md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Quantity
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {necoQuantityResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Phone Number
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {necoEducationPinPhone}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Email
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px]  
                        md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {necoEducationPinEmail}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Amount
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            ₦{necoEducationAmount}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Payment Method
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px]  md:text-xs 
                        md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {necoPaymentResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Transaction Fee
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            ₦0.00
                          </h2>
                        </div>
                      </div>

                      {/* POINTS EARNED */}
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Points Earned
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] text-[#2ED173] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            +2.00
                          </h2>
                        </div>
                      </div>

                      {/* WALLET */}
                      <div className="my-[5px] relative flex justify-between items-center gap-2 bg-slate-200 -mx-[20px] px-[15px] h-[55px] py-[18px]">
                        <div className="flex gap-2 items-center">
                          <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                            <img
                              className="w-[16px] h-[16px]"
                              src={necoImageState}
                              alt="/"
                            />
                          </div>
                          <p className="text-[10px] md:text-sm  lg:text-base font-medium">
                            Available Balance{" "}
                            <span className="text-[#00000063]">
                              (₦{necoWalletBalance})
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
            {necoEducationConfirm && (
              <Modal>
                <div
                  className={`confirm2 ${styles.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <img
                    onClick={() => setNecoEducationConfirm(false)}
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
                        className="text-[#0003] text-xl md:text-3xl"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                    <p className="text-[8px] md:text-xs text-[#04177f]">
                      Forgot Pin ?
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      handleNecoSubmitPost(e);
                    }}
                    disabled={inputPin.length !== 4}
                    className={`${
                      inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                    } my-[5%] w-[225px] flex justify-center items-center mx-auto 
                  cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] 
                  md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                  >
                    Purchase
                  </button>
                </div>
              </Modal>
            )}

            {transactSuccessPopUp && (
              <Modal>
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
                      className="w-[18px] h-[18px] md:w-[35px]
                     md:h-[35px] lg:w-[35px] lg:h-[42px]"
                      src={AremxyPlugIcon}
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setTransactSuccessPopUp(false);
                        window.location.reload();
                      }}
                      className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer
                     md:h-[35px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                  <h2
                    className="text-xs my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-sm
                 lg:my-[2%] font-semibold"
                  >
                    Purchase Successful
                  </h2>
                  <img
                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
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
                        {necoExamType} PIN{" "}
                      </span>
                      from your {necoPaymentResult} to{" "}
                    </p>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Exam Type
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={NecoImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2
                          className="text-[10px] leading-[12px] 
                       md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          NECO
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] 
                    md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Quantity
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px]  md:text-xs md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {necoQuantityResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] 
                    md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] 
                      lg:text-base lg:leading-[24px] font-medium"
                        >
                          {necoEducationPinPhone}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Email
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px]
                       md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          {necoEducationPinEmail}
                        </h2>
                      </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]">
                        {selectedAmount}
                      </h2>
                    </div>
                  </div> */}

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] md:text-xs 
                      md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          {necoPaymentResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                      >
                        Order Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] c md:text-xs md:leading-[11.92px] 
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
                      className="text-[9px] text-[#7C7C7C] text-center  md:text-[11px] 
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
                      to="/NecoEducationPin"
                      onClick={() => {
                        waecTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Done
                    </Link>

                    <Link
                      to="/NecoReceipt"
                      onClick={() => {
                        setNecoFailedTransaction(false);
                      }}
                      className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                     flex justify-center items-center text-center  cursor-pointer text-xs 
                     font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Receipt
                    </Link>
                  </div>
                </div>
              </Modal>
            )}

            {/* =========== RECEIPT ============* */}
            {receipt && (
              <NecoReceipt
                Exam="WAEC"
                ExamType={necoExamType}
                ListOfResultCheckers={necoQuantityResult}
                PhoneNumber={necoEducationPinPhone}
                Amount={necoEducationAmount}
                Email={necoEducationPinEmail}
                walletBalance={necoWalletBalance}
                walletName={necoPaymentResult}
              />
            )}

            <div className="py-[30px] lg:py-[60px] mt-10 lg:mb-[80px] mb-[50px] md:mb-[100px]">
              <button
                className={`font-extrabold h-[43px] w-full py-[3.534px] px-[5.301px] 
              mb-[40px] md:mb-[0px] rounded-[4.241px] md:h-auto
              md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] 
             md:text-[9.389px] md:leading-[14px] md:rounded-[7.042px] 
             lg:text-base lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px] ${
               !necoExamType ||
               !necoQuantityResult ||
               !necoEducationPinPhone ||
               !necoEducationPinEmail ||
               !necoPaymentResult ||
               !necoEducationAmount
                 ? "bg-[#63616188] cursor-not-allowed"
                 : "bg-primary"
             }`}
                onClick={(e) => {
                  necoProceed();
                  e.preventDefault();
                }}
                disabled={
                  !necoExamType ||
                  !necoQuantityResult ||
                  !necoEducationPinPhone ||
                  !necoEducationPinEmail ||
                  !necoPaymentResult ||
                  !necoEducationAmount
                }
              >
                Proceed
              </button>
            </div>
          </form>
        </div>

        {/*==================== NECO TRANSACTION FAILED POP UP=========== */}
        {necoFailedTransaction && (
          <Modal>
            <div
              className={`deleteRecipientSuccess  mx-[5%]  ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar ? "confirm01" : "confirm"
              } grow  pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
              md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
            >
              <div
                className="w-full flex justify-between border-b-[6px] items-center
               border-primary px-[12px] h-[45px] md:h-[55px] lg:h-[70px]  lg:border-b-[10px] "
              >
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer
                  md:h-[35px] lg:w-[35px] lg:h-[42px]"
                  src={AremxyPlugIcon}
                  alt=""
                />

                <img
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setNecoFailedTransaction(false);
                    window.location.reload();
                  }}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] lg:w-[35px] lg:h-[35px]"
                />
              </div>

              <div className="flex flex-col justify-between items-center h-[100%]">
                <h2
                  className="lg:text-base lg:leading-[24px] text-center mb-1
                text-xs md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-[16px]"
                >
                  Purchase Failed
                </h2>
                <img
                  src={eduFailed}
                  className="w-[150px] md:w-[200px]"
                  alt="transaction failed"
                />

                <p
                  className="text-center text-[#F95252]  lg:text-base lg:leading-[20.8px] font-semibold
                text-xs md:text-[13px] md:leading-[20px] leading-[16px]"
                >
                  An unexpected error has occurred, please try again.
                </p>
                <div
                  className="flex  justify-center  w-full 
              items-center gap-[15px] md:gap-[20px] mt-[50px]  lg:gap-[20px] 
              lg:my-[5%] md:mt-[20px] mb-[20px] "
                >
                  <Link
                    to="/NecoEducationPin"
                    onClick={() => {
                      setNecoFailedTransaction(false);
                      window.location.reload();
                    }}
                    className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] `}
                  >
                    Done
                  </Link>
                  <Link
                    to="/NecoFailedReceipt"
                    onClick={necoReceipt}
                    className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                 flex justify-center items-center text-center  cursor-pointer text-xs 
                 font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                 md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                  >
                    Receipt
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}

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
