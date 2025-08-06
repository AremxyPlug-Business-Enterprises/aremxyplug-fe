import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { useContext } from "react";
import HeroComponent from "./heroComponent";
import NecoImg from "../EducationPins/imagesEducation/Neco_official_banner 1.svg";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import nigerianFlag from "./imagesEducation/Nigeriaflag.svg";
import americaFlag from "./imagesEducation/Usa.svg";
import britainFlag from "./imagesEducation/Britain.svg";
import euroFlag from "./imagesEducation/GBP.svg";
import austriaFlag from "./imagesEducation/Austria.svg";
import kenyaFlag from "./imagesEducation/Kenya.svg";
import closeIcon from "./imagesEducation/close-circle.svg";
import { ContextProvider } from "../Context";
import Joi from "joi";
import style from "../AirTimePage/AirtimeVtu.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Modal } from "../Screens/Modal/Modal";
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
// import NecoReceipt from "./ReceiptEducationPins/necoReceipt";
// import axios from "axios";
import eduFailed from "./imagesEducation/WaecFailedTransaction.svg";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import {
  GetFunction,
  HandleUserSession,
  PostFunction,
  VerifyTransPin,
} from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { validateNigerianNumberByNetwork } from "./waecEducationPin";

export default function NecoEducationPins() {
  const {
    isDarkMode,

    // // FUNCTION OTP FOR THE POPPINS
    toggleSideBar,
    inputPin,
    setInputPin,
    toggleVisibility,
    isVisible,

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
    // necoEduResponse,
    setNecoEduResponse,
    newBalance,
    setNewBalance,

    setNecoPinsGenerated,
    necoOrderId,
    setNecoOrderId,
    setNecoTransactionId,
    setNecoShowDescription,
    setNecoFullName,
    setNecoTransactionProduct,

    authenticationOpen,
    purchaseEduErrorType,
    setPurchaseEduErrorType,
  } = useContext(ContextProvider);

  const navigate = useNavigate();

  // UseStates
  const [necoImageState, setNecoImageState] = useState(arrowDown);
  const [necoEducationProceed, setNecoEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [necoEducationConfirm, setNecoEducationConfirm] = useState(false);
  // const [receipt] = useState(false);
  const [necoFailedTransaction, setNecoFailedTransaction] = useState(false);

  // Get Amount
  const [isLoading, setIsLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});

  const necoOptions = [
    {
      quantity: "1 Piece Of Result Checker",
      Amount:
        necoQuantityAmount !== undefined ||
        necoQuantityAmount !== null ||
        necoQuantityAmount !== ""
          ? necoQuantityAmount * 1
          : "",
      id: 1,
    },
    {
      quantity: "2 Piece Of Result Checker",
      Amount:
        necoQuantityAmount !== undefined ||
        necoQuantityAmount !== null ||
        necoQuantityAmount !== ""
          ? necoQuantityAmount * 2
          : "",
      id: 2,
    },
    {
      quantity: "3 Piece Of Result Checker",
      Amount:
        necoQuantityAmount !== undefined ||
        necoQuantityAmount !== null ||
        necoQuantityAmount !== ""
          ? necoQuantityAmount * 3
          : "",
      id: 3,
    },
    {
      quantity: "4 Piece Of Result Checker",
      Amount:
        necoQuantityAmount !== undefined ||
        necoQuantityAmount !== null ||
        necoQuantityAmount !== ""
          ? necoQuantityAmount * 4
          : "",
      id: 4,
    },
    {
      quantity: "5 Piece Of Result Checker",
      Amount:
        necoQuantityAmount !== undefined ||
        necoQuantityAmount !== null ||
        necoQuantityAmount !== ""
          ? necoQuantityAmount * 5
          : "",
      id: 5,
    },
  ];

  const getAmount = async function handleGetAmount() {
    const id = 2;
    const path = `products/edu/${id}`;
    const SuccessHandler = (response) => {
      const amount = response?.data?.data?.data?.Amount;
      if (amount !== undefined && amount !== null && amount !== "") {
        setNecoQuantityAmount(Number(amount));
      } else {
        setNecoQuantityAmount("");
      }
    };

    const FailedHandler = (ErrorType) => {
      if (ErrorType === "Server error") {
        alert("Unable to get NECO PINS. Please try again later");
      } else if (ErrorType === "unauthorised") {
        return setSessionModal(true);
      }
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setNecoEduResponse
    );
  };
  const GetBalance = async () => {
    const SuccessHandler = () => {
      console.log("successfully retrieved balance");
    };
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await GetFunction(
          `products/edu/2`,
          setIsLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              return setSessionModal(true);
            }
          },
          setPassDataBalance
        );
      }
    };
    await GetFunction(
      "balance",
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setPassDataBalance
    );
  };
  // get the amount and balance on entering the page
  useEffect(() => {
    getAmount();
    if (newBalance === "" || newBalance === null || newBalance === undefined) {
      GetBalance();
      if (GetBalance) {
        setNewBalance(
          passDataBalance?.data?.data
            ? passDataBalance?.data?.data?.data?.balance
            : ""
        );
      }
    }
    // handleResetFields();
    // eslint-disable-next-line
  }, []);

  //==========  QUANTITY RESULT SLIP CHECKERS ==============
  function necoQuantityDropDown() {
    if (!necoExamType) {
      setNecoQuantityActive(false);
    } else {
      setNecoQuantityActive(!necoQuantityActive);
      document.querySelector(".imgdrop").classList.toggle("DropIt");
    }
  }

  // WALLET

  function necoMethodDropDown() {
    setNecoMethodActive(!necoMethodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
  }

  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";

  const necoMethodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(₦${updateBalance})`
          : `(₦${newBalance})`,
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
    { examType: "WAEC", path: "/WaecEducationPin", id: 2 },
    { examType: "NABTEB", path: "/NabtebEducationPin", id: 3 },
    { examType: "JAMB", path: "/JambEducationPin", id: 4 },
  ];
  function necoExamDropDown() {
    setNecoExamActive(!necoExamActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
    setNecoMethodActive(false);
  }

  const necoProceed = () => {
    const { error } = schema.validate({
      necoEducationPinPhone,
      necoEducationPinEmail,
    });
    const network = validateNigerianNumberByNetwork(necoEducationPinPhone);

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (network === "Unknown network") {
      setErrors({
        necoEducationPinPhone:
          "Invalid phone number. Please enter a valid Nigerian network number.",
      });
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

  // function to reset the fields
  function handleResetFields() {
    setNecoExamType("NECO");
    setNecoQuantityResult("");
    setNecoEducationPinPhone("");
    setNecoEducationPinEmail("");
    setNecoEducationAmount("");
    setNecoPaymentResult("");
    setNecoQuantityActive(false);
    setNecoMethodActive(false);
    setNecoExamActive(false);
  }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance || updateBalance);
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

  const necoTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
    setInputPin("");
    handleResetFields();
  };
  // const necoReceipt = () => {
  //   setTransactSuccessPopUp(false);
  // };
  const necoEduPinSuccess = () => {
    setTransactSuccessPopUp(true);
    setNecoEducationConfirm(false);
  };
  const necoEduPinFailed = () => {
    setNecoEducationConfirm(false);
    setNecoFailedTransaction(true);
  };

  const [errorMessage, setErrorMessage] = useState(false);
  const [fetchedPurchaseResponse, setFetchedPurchaseResponse] = useState({});

  const handleNecoSubmitPost = async () => {
    async function EduPinHandler() {
      const path = `edu`;
      const body = {
        exam_type: necoExamType.toLowerCase(),
        phone_no: necoEducationPinPhone,
        amount: String(necoEducationAmount),
        email: necoEducationPinEmail,
        quantity: parseInt(necoQuantityResult.split(" (")[0].slice(0, 1)),
      };
      const SuccessHandler = (response) => {
        necoEduPinSuccess();
        setEducationPinStatus(true);
        setNecoOrderId(response?.data?.data?.data?.order_id);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "Bad request") {
          necoEduPinFailed();
        } else if (ErrorType === "unauthorised") {
          await PostFunction(
            path,
            setIsLoading,
            body,
            SuccessHandler,
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(true);
              }
            },
            setFetchedPurchaseResponse
          );
        } else if (ErrorType === "Server error") {
          setPurchaseEduErrorType(
            "Failed to process your request, try again some other time"
          );
          setNecoFailedTransaction(true);
          setNecoEducationConfirm(false);
        } else if (
          ErrorType === "Network error" ||
          ErrorType === "User error"
        ) {
          setPurchaseEduErrorType("An internet connection error");
          setNecoFailedTransaction(true);
          setNecoEducationConfirm(false);
        } else {
        }
      };

      await PostFunction(
        path,
        setIsLoading,
        body,
        SuccessHandler,
        FailedHandler,
        setFetchedPurchaseResponse
      );
    }
    const setPinFailed = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await VerifyTransPin(
          inputPin,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              setSessionModal(true);
            } else if (
              ErrorType === "Network error" ||
              ErrorType === "User error"
            ) {
              return alert("Kindly Check your internet connection");
            } else if (ErrorType === "Server error") {
              alert(
                "The server is currently experiencing a downtime, try again some other time."
              );
            } else {
              alert("An unexpected has occured try again some other time.");
            }
          },
          setIsLoading,
          setErrorMessage,
          EduPinHandler
        );
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        return alert("Kindly Check your internet connection");
      } else if (ErrorType === "Server error") {
        alert(
          "The server is currently experiencing a downtime, try again some other time."
        );
      } else {
        alert("An unexpected has occured try again some other time.");
      }
    };
    await VerifyTransPin(
      inputPin,
      setPinFailed,
      setIsLoading,
      setErrorMessage,
      EduPinHandler
    );
  };

  function handleReceivedData() {
    setIsLoading(true);
    const receivedData = () => {
      setNecoPinsGenerated(fetchedPurchaseResponse?.data?.pins_generated);
      setNecoOrderId(fetchedPurchaseResponse?.data?.order_id);
      setNecoTransactionId(fetchedPurchaseResponse?.data?.transaction_id);
      setNecoShowDescription(
        fetchedPurchaseResponse?.data?.transaction_description
      );
      setNecoFullName(fetchedPurchaseResponse?.data?.full_name);
      setNecoTransactionProduct(
        fetchedPurchaseResponse?.data?.transaction_product
      );
    };
    receivedData();
    if (receivedData) {
      setTransactSuccessPopUp(false);
      setIsLoading(false);
      setInputPin("");
    }
  }
  function handleFailedData() {
    // setIsLoading(true);
    setNecoFailedTransaction(false);
    handleReceivedData();
    // setIsLoading(false);
    // setInputPin("");
  }

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between lg:h-[120%] h-[115%]">
        <div className="">
          {/* Hero-section */}
          <HeroComponent />
          <div className="flex lg:gap-[8px] items-center md:gap-[5.868px] gap-[4.694px] mb-[20px] lg:mb-[50px] md:mb-[30px]">
            <h2
              className={`font-semibold text-sm leading-3 md:text-xs md:leading-[11.267px] lg:text-base lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              } `}
            >
              Purchase
            </h2>

            <img
              className="h-3 w-3 md:h-[14.083px] md-w-[14.083px] lg:h-6 lg:w-6 self-center"
              src={NecoImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-3 md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
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
          <div>
            <div className=" flex flex-col gap-5 md:gap-0">
              {/* container for the first two input */}
              <div className="  w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
                {/* First Step Confirm exam type */}
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <h2
                    className={`md:font-semibold font-normal text-sm lg:text-base md:text-[13px] ${
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
                      setNecoQuantityActive(false);
                      setNecoMethodActive(false);
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px] sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border border-white"
                        : "hover:bg-[#EDEAEA]"
                    }`}
                  >
                    {necoExamType}
                    <img
                      className="Examdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-[14px] h-[16px]"
                      src={arrowDown}
                      alt=""
                    />

                    {/* <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer Examdrop"
                      src={arrowDown}
                      alt=""
                    /> */}
                  </div>
                  {necoExamActive && (
                    <div
                      className={`
                    ${
                      isDarkMode
                        ? "text-white bg-black  "
                        : " text-[#7C7C7C] bg-white hover:bg-[#EDEAEA]"
                    } flex flex-col absolute lg:top-[80px] md:top-[60px] top-[74px] transition-colors duration-300 z-[2] w-full`}
                      // lg:h-225px md:h-[210px]
                    >
                      {necoExams?.map((exam) => {
                        return (
                          <Link
                            to={exam.path}
                            onClick={(e) => {
                              setNecoExamType(exam.examType);
                              setNecoExamActive(false);
                              document
                                .querySelector(".Examdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`py-5 md:py-[14px] font-semibold cursor-pointer lg:text-base lg:leading-[20.8px] w-full md:rounded-[0px] text-sm leading-[10.4px] pl-2.5 md:text-[13.227px] transition-colors duration-300 md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                            ${
                              isDarkMode
                                ? "bg-black text-white  hover:bg-gray-800"
                                : " text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                            }`}
                            key={exam.id}
                          >
                            <h2>{exam.examType} </h2>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Quantity input Two / RightSide */}
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
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
                    // className="w-full relative"
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px] sm:p-3 sm:text-lg  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center outline-0 w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border border-white"
                        : "hover:bg-[#EDEAEA] border-[0.24px] lg:border-[0.4px] border-[#9C9C9C] text-[#7C7C7C]"
                    } ${
                      !necoQuantityAmount
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (necoQuantityAmount) {
                        necoQuantityDropDown();
                        setNecoExamActive(false);
                        setNecoMethodActive(false);
                      }
                    }}
                  >
                    {necoQuantityResult}

                    {/* <img
                      className="lg:w-6 lg:h-6 w-4 h-4 imgdrop"
                      src={arrowDown}
                      alt=""
                      style={{
                        cursor: !necoQuantityAmount ? "not-allowed" : "pointer",
                      }}
                    /> */}
                    <img
                      className="imgdrop absolute left-[90%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-3.5 h-4"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {necoQuantityActive && necoQuantityAmount && (
                    <div
                      className={`dropdown-options absolute top-[100%] w-full z-[2]
                      ${
                        isDarkMode
                          ? "bg-black text-white border border-white divide-y divide-white"
                          : "text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                      }`}
                    >
                      {necoOptions?.map((option) => {
                        return (
                          <h2
                            onClick={() => {
                              // setNecoQuantityResult(
                              //   necoQuantityAmount > 0
                              //     ? `${
                              //         option.quantity
                              //       } (₦${handleCalculatedAmount(option.id)})`
                              //     : option.quantity
                              // );
                              setNecoQuantityResult(
                                `${
                                  option.quantity
                                } (₦${option?.Amount?.toLocaleString()})`
                              );
                              setNecoQuantityActive(false);
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                              setNecoEducationAmount(option?.Amount);
                              // setNecoEducationAmount(
                              //   necoQuantityAmount > 0
                              //     ? handleFormattedAmount(
                              //         Number(necoQuantityAmount) * option.id
                              //       )
                              //     : ""
                              // );
                            }}
                            className={`py-5 md:py-[14px]  text-[13.5px] leading-[10.4px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800 "
                                : " hover:bg-[#EDEAEA] bg-[white] text-[#7C7C7C]"
                            }`}
                            key={option.id}
                          >
                            {`${
                              option.quantity
                            } ₦${option?.Amount?.toLocaleString()}`}
                          </h2>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* container for Phone number and Email */}
              <div className=" w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4 ">
                {/* LeftSide */}
                <div className=" container-phone flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2 ">
                  <h2
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
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
                        e.target.style.border = "1px solid green";
                      } else if (e.target.value.length < 11) {
                        e.target.style.border = "1px solid red";
                      }
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-3 lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center
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
                    value={necoEducationPinPhone}
                    onChange={(e) => {
                      setNecoEducationPinPhone(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        necoEducationPinPhone: "",
                      }));
                    }}
                  />
                  {errors.necoEducationPinPhone && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.necoEducationPinPhone}
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
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-3 lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={necoEducationPinEmail}
                    onChange={(e) => {
                      setNecoEducationPinEmail(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        necoEducationPinEmail: "",
                      }));
                    }}
                    type="Email"
                    placeholder="example@gmail.com"
                  />
                  {errors.necoEducationPinEmail && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.necoEducationPinEmail}
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
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-3 lg:pr-[9px] lg:pl-[10px]  items-center cursor-not-allowed focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={
                      necoEducationAmount
                        ? `₦${necoEducationAmount.toLocaleString()}`
                        : "₦"
                    }
                    readOnly
                  />
                </div>
                {/* payment method */}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Payment Method
                  </label>
                  {/* input */}
                  <div
                    onClick={(e) => {
                      necoMethodDropDown();
                      setNecoExamActive(false);
                      setNecoQuantityActive(false);
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center justify-between border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] cursor-pointer px-[11px] md:px-[6px] lg:px-[10px] ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                  >
                    <p
                      className={`font-medium text-[13px] leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base  lg:leading-[20.8px] cursor-pointer
                      ${isDarkMode ? " text-white" : " text-[#7C7C7C] "}`}
                      readOnly
                    >
                      {necoPaymentResult}
                    </p>

                    <img
                      className="lg:w-6 lg:h-6 md:h-[14.038px] md:w-[14.038px] w-3.5 h-4 cursor-pointer methodDrop"
                      src={necoPaymentResult ? necoImageState : arrowDown}
                      alt="CountryFlag"
                    />
                  </div>
                  {/* drop down */}

                  {necoMethodActive && (
                    <div
                      className={`absolute lg:top-[85px] md:top-[60px] top-[74px] border z-0 rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-y divide-gray-50  border-white"
                          : "text-[#7C7C7C] bg-white border-gray-100"
                      }`}
                    >
                      {necoMethodOptions?.map((methodOption) => {
                        return (
                          <div
                            onClick={() => {
                              if (methodOption.method === "NGN Wallet") {
                                setNecoPaymentResult(
                                  `${methodOption.method} ${methodOption.balance}`
                                );
                                setNecoWalletBalance(methodOption.balance);
                                setNecoImageState(methodOption.flag);
                                setNecoMethodActive(false);
                                document
                                  .querySelector(".methodDrop")
                                  .classList.remove("DropIt");
                              } else {
                                setNecoMethodActive(true);
                              }
                            }}
                            // className={`flex gap-2.5 lg:py-[15px] py-[10px] pl-[10px] pb-[20px] pt-[20px] md:py-2 transition-colors duration-300 items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                            // ${
                            //   methodOption.id !== 1 && !isDarkMode
                            //     ? "bg-gray-300 cursor-not-allowed"
                            //     : methodOption.id !== 1 && isDarkMode
                            //     ? "bg-black cursor-not-allowed"
                            //     : methodOption.id === 1 && !isDarkMode
                            //     ? "bg-white hover:bg-[#EDEAEA] cursor-pointer"
                            //     : "bg-black cursor-pointer hover:bg-gray-800"
                            // }`}

                            className={`py-[18px] md:py-2 lg:py-[15px] font-normal pl-[10px] flex items-center gap-[5px] text-xs md:text-sm lg:text-base shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] transition-all duration-300
                       ${
                         isDarkMode
                           ? "text-white hover:bg-slate-800 bg-black "
                           : "text-[#7E7E7E] "
                       } ${
                              methodOption.method === "NGN Wallet"
                                ? "cursor-pointer hover:bg-[#EDEAEA]"
                                : "cursor-not-allowed opacity-50"
                            }`}
                            key={methodOption.id}
                          >
                            <img
                              className="md:h-[29.27px]  h-[14.27px]"
                              src={methodOption.flag}
                              alt=""
                            />

                            <h2
                              className={`text-sm leading-[10.4px] font-medium md:text-[13.227px] md:leading-[17.195px] lg:text-base lg:leading-[20.8px] self-center cursor-pointer   ${
                                isDarkMode ? "text-white" : "text-[#7C7C7C] "
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
                  className={`w-full flex justify-center h-full py-[30px] px-[15px] lg:px-[0px] lg:items-center items-end`}
                >
                  <div
                    className={` bvnQuery lg:rounded-[12px] rounded-[10px] h-[520px] ${
                      toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } w-[100%] md:w-[60%] overflow-auto  ${
                      isDarkMode
                        ? "bg-black text-white border rounded-[10px] border-white"
                        : "bg-white text-black"
                    } `}
                  >
                    <div className="flex justify-end pr-2 lg:py-[10px] py-[7px] ">
                      <img
                        src={closeIcon}
                        alt=""
                        onClick={() => setNecoEducationProceed(false)}
                        className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                      />
                    </div>
                    <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                    <div className="mx-auto">
                      <h2
                        // className="lg:text-base lg:leading-6 text-center mb-1 text-[10px] md:text-[13px] font-semibold mt-[20px] leading-3"
                        className="text-xs my-[5%] text-center md:my-[3%] md:text-[15px] font-extrabold lg:my-[2%] lg:text-base"
                      >
                        Confirm Transaction
                      </h2>
                      <p
                        // className="lg:text-base md:text-xs md:leading-[20px] md:px-[30px] lg:leading-6 text-[10px] leading-3 text-center mt-[26px] mx-[10px] mb-[20px] font-medium"
                        className="text-[10px] font-semibold text-center mb-2 md:text-xs lg:text-sm mx-2"
                      >
                        You are about to purchase{" "}
                        <span className="font-extrabold text-[10px] md:text-base lg:text-xs">
                          {necoExamType} PIN (₦
                          {necoEducationAmount.toLocaleString()})
                        </span>{" "}
                        from your {necoPaymentResult.split(" (")[0]} to
                      </p>

                      <div
                        // className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]"
                        className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7"
                      >
                        <div
                          // className="flex items-center justify-between"
                          className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center"
                        >
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Exam Type
                          </h2>
                          <div className="flex gap-1 items-center">
                            <div
                              className=" w-[12.02px] h-[12.02px] md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                            >
                              <img
                                src={NecoImg}
                                alt=""
                                className="w-full h-full object-cover md:h-[15px]"
                              />
                            </div>
                            <span className="capitalize">{necoExamType}</span>
                          </div>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Quantity
                          </h2>
                          <span>{necoQuantityResult.split(" (")[0]}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </h2>
                          <span>{necoEducationPinPhone}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Email
                          </h2>
                          <span>{necoEducationPinEmail}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Amount
                          </h2>
                          <span className="">
                            {/* ₦{necoEducationAmount.toLocaleString()} */}
                            {necoEducationAmount
                              ? `₦${necoEducationAmount.toLocaleString()}.00`
                              : "₦"}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Payment Method
                          </h2>
                          <span className="">
                            Nigerian {necoPaymentResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Transaction Fee
                          </h2>
                          <span className="">₦0.00</span>
                        </div>

                        {/* POINTS EARNED */}
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Points Earned
                          </h2>
                          <span className="text-[#2ED173]">+2.00</span>
                        </div>
                      </div>
                    </div>

                    {/* WALLET */}
                    <div
                      className={`w-[95%] h-auto my-5 lg:my-8 flex py-[7px] justify-between items-center px-[4%] mx-auto rounded-[10px]  ${
                        isDarkMode
                          ? "bg-black border rounded-[10px]  border-white"
                          : "bg-[#F6F7F7] "
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-[10px] justify-center items-center">
                          <img
                            className="w-[16px] h-[16px] bg-white"
                            src={necoImageState}
                            alt="/"
                          />
                          <div className="flex gap-[10px] items-center font-medium">
                            <p
                              className={`text-xs md:text-sm leading-[20px] lg:leading-[22px] lg:text-base ${
                                isDarkMode ? "text-white" : "text-black"
                              }`}
                            >
                              Available Balance {"  "}
                            </p>
                            <span className={`${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                              {necoWalletBalance !== ""
                                ? necoWalletBalance
                                : "₦"}
                            </span>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm font-bold leading-[20px] lg:text-base lg:leading-[22px] text-left">
                          {balanceStatus}
                        </span>
                      </div>
                      <img
                        src={arrowRight}
                        alt=""
                        className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                      />
                      {/* <span className="text-gray-500 text-xs font-normal leading-[20px] lg:text-[16px] lg:leading-[22px] text-left absolute left-[3.2rem] top-8 ">
                            {balanceStatus}
                          </span> */}
                    </div>

                    <button
                      className={`my-[5%] w-[90%] flex justify-center items-center mx-auto text-sm font-extrabold h-[50px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-base lg:text-sm lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                        CheckSufficiency
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary cursor-pointer"
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
              </Modal>
            )}

            {/* CONFIRM TRANSACTION */}
            {necoEducationConfirm && (
              <Modal>
                <div className="flex items-end justify-center lg:items-center lg:justify-center w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
                  <div
                    className={`flex flex-col lg:mb-[0px] mb-[50px] lg:h-[350px] overflow-scroll h-[300px] bvnQuery ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full ${
                      isDarkMode
                        ? "text-white bg-black border border-white rounded-[10px]"
                        : "text-black bg-white rounded-[10px]"
                    }`}
                  >
                    <div className="pr-3 lg:pr-2 py-[5px] flex justify-end">
                      <img
                        onClick={() => setNecoEducationConfirm(false)}
                        className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                        src={closeIcon}
                        alt=""
                      />
                    </div>

                    {/* <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" /> */}
                    <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                    <div className="flex flex-col w-full justify-center py-[15px] lg:py-[0px] h-[100%] gap-[15px] ">
                      <p className="font-extrabold text-xs leading-[16px] pb-[20px] md:text-[10px] lg:text-base text-center">
                        Input PIN to complete transaction
                      </p>
                      <div className="flex flex-col items-center lg:gap-[0px] gap-[5px] font-extrabold">
                        <div className="flex items-center gap-2.5">
                          {" "}
                          {isVisible ? (
                            <OtpInput
                              value={inputPin}
                              inputType="tel"
                              onChange={setInputPin}
                              numInputs={4}
                              shouldAutoFocus={true}
                              inputStyle={{
                                // color: isDarkMode ? "#ffffff" : "#403f3f",
                                color: isDarkMode ? "#ffffff" : "#000000",
                                fontWeight: 700,
                                borderRadius: 4,
                                height: "35px",
                                width: "35px",
                                backgroundColor: isDarkMode ? "black" : "white",
                                border: isDarkMode
                                  ? "1px solid white"
                                  : "1px solid #ccc",
                              }}
                              renderInput={(props) => (
                                <input
                                  {...props}
                                  className={`inputOTP mx-[2px] ${
                                    isFocused ? "focused" : ""
                                  }`}
                                  onFocus={handleFocus}
                                  onBlur={handleBlur}
                                />
                              )}
                            />
                          ) : (
                            <div className="text-[24px] md:text-[24px] mt-1">
                              * * * *{" "}
                            </div>
                          )}
                          <div
                            className="text-[#0003]"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <AiFillEye className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                            ) : (
                              <AiFillEyeInvisible className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                            )}
                          </div>
                        </div>
                        <Link
                          to={{
                            pathname: "/ProfileSettingMain",
                            state: authenticationOpen,
                          }}
                          className="text-[10px] leading-[14px] font-extrabold md:text-xs my-2 text-[#04177f]"
                        >
                          Forgot Pin ?
                        </Link>
                      </div>
                      {errorMessage && (
                        <p className="font-bold text-sm  lg:text-base md:font-medium text-center leading-[18px] lg:leading-[20px] text-red-600">
                          Incorrect Pin
                        </p>
                      )}
                      <div className="flex flex-col gap-[10px] px-[20px]">
                        <button
                          onClick={() => {
                            handleNecoSubmitPost();
                          }}
                          disabled={inputPin.length !== 4}
                          className={`${
                            inputPin.length !== 4 && !isDarkMode
                              ? "bg-[#0008]"
                              : inputPin.length !== 4 && isDarkMode
                              ? "bg-gray-300"
                              : "bg-[#04177f]"
                          }  w-full  md:w-[94px] lg:w-[163px] flex justify-center items-center mx-auto cursor-pointer text-xs md:text-[10px] lg:text-base font-extrabold h-[50px] lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px] lg:rounded-[12px]`}
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {transactSuccessPopUp && (
              <Modal>
                <div
                  className={`w-full flex justify-center h-full py-[30px] px-[15px] lg:items-center items-end`}
                >
                  <div
                    className={` bvnQuery lg:rounded-[12px] rounded-[10px] h-[520px] ${
                      toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } w-[100%] md:w-[60%] overflow-auto  ${
                      isDarkMode
                        ? "bg-black text-white border rounded-[10px] border-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                      <div>
                        <img
                          onClick={() => {
                            setTransactSuccessPopUp(false);
                            setInputPin("");
                            handleResetFields();
                          }}
                          className="w-[15px] h-[15px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                          src={AremxyPlugIcon}
                          alt=""
                        />
                      </div>

                      <img
                        onClick={() => {
                          setTransactSuccessPopUp(false);
                          setInputPin("");
                          handleResetFields();
                          navigate("/NecoEducationPin");
                        }}
                        className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] cursor-pointer"
                        src="/Images/transferImages/close-circle.png"
                        alt=""
                      />
                    </div>
                    <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                    <div className="">
                      <h2 className="text-xs my-[4%] font-medium text-center md:text-[20px] md:my-[3%] lg:text-sm lg:my-[2%]">
                        Purchase Successful
                      </h2>
                      <img
                        className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
                        src="./Gif/checkMarkGif.gif"
                        alt="/"
                      />

                      <p className="w-[97%] mx-auto text-[10px] font-bold text-center mb-2 md:pb-2 lg:pb-3 md:text-sm lg:text-sm ">
                        You have successfully purchased{" "}
                        <span className=" font-bold text-[10px] md:text-base lg:text-sm">
                          {necoExamType} PIN (₦
                          {necoEducationAmount.toLocaleString()}){" "}
                        </span>
                        from your {necoPaymentResult.split(" (")[0]} to{" "}
                      </p>

                      <div className="flex mt-4 flex-col gap-2 lg:gap-4">
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Exam Type
                          </span>
                          <div className="flex gap-1 items-center">
                            <img
                              src={NecoImg}
                              alt=""
                              className=" w-[12.02px] h-[12.02px] md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                            />

                            <span>{necoExamType}</span>
                          </div>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <span
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Quantity
                          </span>
                          <span className="">
                            {necoQuantityResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </span>
                          <span className="">{necoEducationPinPhone}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Email
                          </span>
                          <span className="">{necoEducationPinEmail}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Payment Method
                          </span>
                          <span className="">
                            {necoPaymentResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Order Number
                          </span>
                          <span className="">{necoOrderId}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`bg-[#F2FAFF] w-[90%] mx-auto p-[8px] my-5 flex justify-between items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px] ${
                        isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
                      }`}
                    >
                      <p
                        className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] lg:text-sm  font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        The e-pins purchase has been generated successfully.
                        Please kindly check receipt to confirm the pin / token.
                        You can contact us for any further assistance.
                      </p>
                    </div>

                    <div className="flex w-full justify-center items-center gap-[10px] pb-4 md:gap-[8.59px] lg:gap-[15px] md:pb-2">
                      <Link
                        to="/NecoEducationPin"
                        onClick={() => {
                          necoTransactionSuccessClose();
                        }}
                        className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-6 lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                      >
                        Done
                      </Link>

                      <Link
                        to="/NecoReceipt"
                        onClick={handleReceivedData}
                        style={{
                          boxShadow:
                            "0px 0px 2.0368096828460693px 0px #00000040",
                        }}
                        className={`border w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                      >
                        Receipt
                      </Link>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {/* =========== RECEIPT ============* */}
            {/* {receipt && (
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
            )} */}

            <button
              className={`mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-cente font-[400] text-xs md:text-[11px] lg:text-base text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center md:pt-2 pt-3 ${
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
        </div>

        {/*==================== NECO TRANSACTION FAILED POP UP=========== */}
        {necoFailedTransaction && (
          <Modal>
            <div
              className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto overflow-hidden ${
                isDarkMode
                  ? "bg-black text-white border rounded-[10px] border-white"
                  : "bg-white text-black rounded-lg"
              }`}
            >
              {/* <div className="w-full flex justify-between border-b-[6px] items-center border-primary px-[12px] h-[45px] md:h-[55px] lg:h-[70px]  lg:border-b-[10px] "> */}
              <div className="flex justify-between w-full items-center p-4">
                <img
                  // className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer md:h-[35px] lg:w-[35px] lg:h-[42px]"
                  className="w-6 h-6"
                  src={AremxyPlugIcon}
                  alt=""
                />

                <img
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setNecoFailedTransaction(false);
                    setInputPin("");
                    handleResetFields();
                    setPurchaseEduErrorType("");
                    navigate("/NecoEducationPin");
                  }}
                  className="w-[18px] h-[18px] md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
                />
              </div>
              <hr className="h-1 bg-[#04177f] border-none" />
              <div className="p-4 text-center">
                <h2 className="text-lg md:text-xl font-semibold my-4">
                  Purchase Failed
                </h2>
                <img
                  src={eduFailed}
                  className="w-32 h-32 mx-auto my-6"
                  alt="transaction failed"
                />

                {/* <p className="text-center text-[#F95252]  lg:text-base lg:leading-[20.8px] font-semibold text-xs md:text-[13px] md:leading-[20px] leading-[16px]">
                  An unexpected error has occurred, please try again.
                </p> */}
                <p className={`text-sm mb-8 ${isDarkMode ? "text-white":"text-gray-600"}`}>
                {purchaseEduErrorType}
              </p>
                <div className="flex gap-[10px] justify-between w-full px-[10px]"
                >
                  <Link
                    to="/NecoEducationPin"
                    onClick={() => {
                      setNecoFailedTransaction(false);
                      setInputPin("");
                      handleResetFields();
                    setPurchaseEduErrorType("");
                    }}
                    className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2 text-white rounded-md font-medium"
                  >
                    Done
                  </Link>
                  <Link
                    to="/NecoFailedReceipt"
                    onClick={handleFailedData}
                    style={{boxShadow: "0px 0px 2.0368096828460693px 0px #00000040",}}
                    className={`w-[50%] max-w-xs mx-auto border py-2  rounded-md font-medium transition-colors ${isDarkMode ?"bg-black hover:bg-slate-800 ":"bg-white"}`}
                  >
                    Receipt
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}

        <div className="mt-[38rem] md:mt-[15rem]">
        <div className={style.help}>
          <h2>You need help?</h2>
          <Link to={`/ContactUs`} className={style.btnContact}>
            Contact Us
          </Link>
        </div>
      </div>
      </div>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {sessionModal && <HandleUserSession />}
    </DashBoardLayout>
  );
}
