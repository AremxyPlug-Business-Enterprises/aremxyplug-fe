import React, { useEffect } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { useContext } from "react";
import "../../App.css";
import HeroComponent from "./heroComponent";
import WaecImg from "../EducationPins/imagesEducation/WaecImg.svg";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { useState } from "react";
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
// import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import style from "../AirTimePage/AirtimeVtu.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Modal } from "../Screens/Modal/Modal";
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
// import WaecReceipt from "./ReceiptEducationPins/waecReceipt";
// import axios from "axios";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import eduFailed from "./imagesEducation/WaecFailedTransaction.svg";
import {
  GetFunction,
  HandleUserSession,
  PostFunction,
  VerifyTransPin,
} from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";

// export function handleFormattedAmount(value) {
//   return value.toLocaleString("en-NG", {
//     // style: "currency",
//     currency: "NGN",
//   });
// }
// export function handleFormattedAmount(value) {
//   return value.toLocaleString("en-NG", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// }

export function validateNigerianNumberByNetwork(number) {
  const networks = [
    {
      name: "GLO",
      values: ["0705", "0805", "0807", "0811", "0815", "0905", "0915"],
    },
    {
      name: "AIRTEL",
      values: [
        "0701",
        "0708",
        "0802",
        "0808",
        "0812",
        "0901",
        "0902",
        "0904",
        "0907",
        "0912",
        "0911",
      ],
    },
    {
      name: "9MOBILE",
      values: ["0809", "0817", "0818", "0909", "0908"],
    },
    {
      name: "GLO",
      values: ["0705", "0805", "0807", "0811", "0815", "0905", "0915"],
    },
    {
      name: "MTN",
      values: [
        "0703",
        "0704",
        "0814",
        "0706",
        "0803",
        "0806",
        "0810",
        "0813",
        "0814",
        "0816",
        "0903",
        "0906",
        "0913",
        "0916",
      ],
    },
  ];

  for (let network of networks) {
    for (let prefix of network.values) {
      if (number.startsWith(prefix) && number.length === 11) {
        return network.name;
      }
    }
  }

  return "Unknown network";
}

export default function WaecEducationPin() {
  const {
    isDarkMode,
    toggleSideBar,
    inputPin,
    setInputPin,
    toggleVisibility,
    isVisible,

    quantityResult,
    setQuantityResult,
    quantityActive,
    setQuantityActive,
    paymentResult,
    setPaymentResult,
    methodActive,
    setMethodActive,
    examType,
    setExamType,
    examActive,
    setExamActive,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    educationPinPhone,
    setEducationPinPhone,
    educationAmount,
    setEducationAmount,
    quantityAmount,
    setQuantityAmount,
    walletBalance,
    setWalletBalance,
    setEducationPinStatus,
    educationPinEmail,
    setEducationPinEmail,
    // eduResponse,
    setEduResponse,
    newBalance,
    setNewBalance,

    setWaecPinsGenerated,
    waecOrderId,
    setWaecOrderId,
    setWaecTransactionId,
    setWaecShowDescription,
    setWaecFullName,
    setWaecTransactionProduct,

    authenticationOpen,
    purchaseEduErrorType,
    setPurchaseEduErrorType,
  } = useContext(ContextProvider);

  const navigate = useNavigate();
  // UseStates
  const [imageState, setImageState] = useState(arrowDown);
  const [educationProceed, setEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [educationConfirm, setEducationConfirm] = useState(false);
  // const [receipt] = useState(false);
  const [waecFailedTransaction, setWaecFailedTransaction] = useState(false);

  // Get Amount
  const [isLoading, setIsLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});

  const options = [
    {
      quantity: "1 Piece Of Result Checker",
      Amount:
        quantityAmount !== undefined ||
        quantityAmount !== null ||
        quantityAmount !== ""
          ? quantityAmount * 1
          : "",
      id: 1,
    },
    {
      quantity: "2 Piece Of Result Checker",
      Amount:
        quantityAmount !== undefined ||
        quantityAmount !== null ||
        quantityAmount !== ""
          ? quantityAmount * 2
          : "",
      id: 2,
    },
    {
      quantity: "3 Piece Of Result Checker",
      Amount:
        quantityAmount !== undefined ||
        quantityAmount !== null ||
        quantityAmount !== ""
          ? quantityAmount * 3
          : "",
      id: 3,
    },
    {
      quantity: "4 Piece Of Result Checker",
      Amount:
        quantityAmount !== undefined ||
        quantityAmount !== null ||
        quantityAmount !== ""
          ? quantityAmount * 4
          : "",
      id: 4,
    },
    {
      quantity: "5 Piece Of Result Checker",
      Amount:
        quantityAmount !== undefined ||
        quantityAmount !== null ||
        quantityAmount !== ""
          ? quantityAmount * 5
          : "",
      id: 5,
    },
  ];

  const getAmount = async function handleGetAmount() {
    const id = 1;
    const path = `products/edu/${id}`;

    const SuccessHandler = (response) => {
      const amount = response?.data?.data?.data?.Amount;
      if (amount !== undefined && amount !== null && amount !== "") {
        setQuantityAmount(Number(amount));
      } else {
        setQuantityAmount("");
      }
    };

    const FailedHandler = (ErrorType) => {
      if (ErrorType === "Server error") {
        alert("Unable to get WAEC PINS. Please try again later");
      } else if (ErrorType === "unauthorised") {
        return setSessionModal(true);
      }
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setEduResponse
    );
  };
  const GetBalance = async () => {
    const SuccessHandler = () => {
      console.log("successfully retrieved balance");
    };
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await GetFunction(
          `products/edu/1`,
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
  function waecQuantityDropDown() {
    if (!examType) {
      setQuantityActive(false);
    } else {
      setQuantityActive(!quantityActive);
      document.querySelector(".imgdrop").classList.toggle("DropIt");
    }
    setMethodActive(false);
  }

  // WALLET

  function waecMethodDropDown() {
    setMethodActive(!methodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
    setExamActive(false);
    setQuantityActive(false);
  }

  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";

  const methodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(₦${updateBalance})`
          : `(₦${newBalance})`,
      flag: nigerianFlag,
      id: 1,
    },
    { method: "USD Currency", balance: "(0.00)", flag: americaFlag, id: 2 },
    { method: "EUR Wallet", balance: "(0.00)", flag: britainFlag, id: 3 },
    { method: "GBP Wallet", balance: "(0.00)", flag: euroFlag, id: 4 },
    { method: "AUD Wallet", balance: "(0.00)", flag: austriaFlag, id: 5 },
    { method: "KES Wallet", balance: "(0.00)", flag: kenyaFlag, id: 6 },
  ];

  // CONFIRM EXAM TYPE
  const Exams = [
    { examType: "WAEC", id: 1 },
    { examType: "NECO", path: "/NecoEducationPin", id: 2 },
    { examType: "NABTEB", path: "/NabtebEducationPin", id: 3 },
    { examType: "JAMB", path: "/JambEducationPin", id: 4 },
  ];
  function waecExamDropDown() {
    setExamActive(!examActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
    setMethodActive(false);
    setQuantityActive(false);
  }
  // FUNCTION OTP FOR THE POPPINS

  const waecProceed = () => {
    const { error } = schema.validate({
      educationPinPhone,
      educationPinEmail,
    });
    const network = validateNigerianNumberByNetwork(educationPinPhone);
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
      setEducationProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    educationPinPhone: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    educationPinEmail: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
  });

  // function to reset the fields
  function handleResetFields() {
    setExamType("WAEC");
    setQuantityResult("");
    setEducationPinPhone("");
    setEducationPinEmail("");
    setEducationAmount("");
    setPaymentResult("");
    setQuantityActive(false);
    setMethodActive(false);
    setExamActive(false);
  }

  // function handleCalculatedAmount(quantity) {
  //   // setIsAmountLoading(true);
  //   const amountCalculated =
  //     quantityAmount > 0 ? Number(quantityAmount) * quantity : "";
  //   return handleFormattedAmount(amountCalculated);
  //   // setEducationAmount(amountCalculated);
  //   // setTimeout(() => {
  //   //   setIsAmountLoading(false);
  //   //   setEducationAmount(amountCalculated);
  //   // }, 1000);
  // }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance || updateBalance);
  let educationAmountToNumber = Number(educationAmount);
  let CheckSufficiency = educationAmountToNumber > balanceStringToNum;
  // function to check if the balance is sufficient
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
    setEducationProceed(false);
    setEducationConfirm(true);
  };

  const waecTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
    setInputPin("");
    handleResetFields();
  };

  const eduPinSuccess = () => {
    setTransactSuccessPopUp(true);
    setEducationConfirm(false);
  };
  const waecEduPinFailed = () => {
    setEducationConfirm(false);
    setWaecFailedTransaction(true);
    // setInputPin("");
  };

  const [errorMessage, setErrorMessage] = useState(false);
  const [fetchedPurchaseResponse, setFetchedPurchaseResponse] = useState({});

  const handleWaecSubmitPost = async () => {
    async function EduPinHandler() {
      const path = `edu`;
      const body = {
        exam_type: examType.toLowerCase(),
        phone_no: educationPinPhone,
        amount: String(educationAmount),
        email: educationPinEmail,
        quantity: parseInt(quantityResult.split(" (")[0].slice(0, 1)),
      };
      const SuccessHandler = (response) => {
        eduPinSuccess();
        setEducationPinStatus(true);
        setWaecOrderId(response?.data?.data?.data?.order_id);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "Bad request") {
          waecEduPinFailed();
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
          setWaecFailedTransaction(true);
          setEducationConfirm(false);
        } else if (
          ErrorType === "Network error" ||
          ErrorType === "User error"
        ) {
          setPurchaseEduErrorType("An internet connection error");
          setWaecFailedTransaction(true);
          setEducationConfirm(false);
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

    //Hello Judith,
    //kindly write these conditional statements in the failedHandler of other education pins
    //Do not write this code for other api requests apart from the verifyTransPin
    //The failed handler handling errors for the post function initiating the transaction
    //would also be handled differently.
    //The balance alert message would also be handled
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
      setWaecPinsGenerated(fetchedPurchaseResponse?.data?.pins_generated);
      setWaecOrderId(fetchedPurchaseResponse?.data?.order_id);
      setWaecTransactionId(fetchedPurchaseResponse?.data?.transaction_id);
      setWaecShowDescription(
        fetchedPurchaseResponse?.data?.transaction_description
      );
      setWaecFullName(fetchedPurchaseResponse?.data?.full_name);
      setWaecTransactionProduct(
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
    setWaecFailedTransaction(false);
    handleReceivedData();
    // setInputPin("");
    // setIsLoading(false);
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
      <div className="flex flex-col lg:h-[150%] h-[115%] justify-between ">
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
              src={WaecImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-3 md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              }`}
            >
              WAEC E-PINs Instantly
            </h2>
            <img
              className="md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-3.5 w-3.5"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* Input for Request of examination pins  */}
          <div>
            <div className="flex flex-col gap-5 md:gap-0">
              {/* container for the first two input */}
              <div className=" w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
                {/* First Step Confirm exam type */}
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal text-sm lg:text-base md:text-[13px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Confirm Exam Type
                  </label>
                  {/* input */}
                  <div
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border border-white"
                        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    onClick={() => {
                      waecExamDropDown();
                    }}
                  >
                    {/* <input
                      type="text"
                      value={examType}
                      onChange={(e) => {
                        setExamType(e.target.value);
                      }}
                      className={` bg-transparent
                        text-xs focus:outline-none
                      ${
                        isDarkMode
                          ? "bg-black text-white"
                          : " text-[#7C7C7C] hover:bg-[#EDEAEA] "
                      }`}
                      readOnly
                    /> */}
                    {examType}
                    <img
                      className="Examdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-[14px] h-[16px]"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {examActive && (
                    <div
                      className={`
                    ${
                      isDarkMode
                        ? "text-white bg-black  "
                        : " text-[#7C7C7C] bg-white hover:bg-[#EDEAEA]"
                    } flex flex-col absolute lg:top-[80px] md:top-[60px] top-[74px] transition-colors duration-300 z-[2] w-full`}
                    >
                      {Exams?.map((exam) => {
                        return (
                          <Link
                            to={exam.path}
                            onClick={() => {
                              setExamType(exam.examType);
                              setExamActive(false);
                              document
                                .querySelector(".Examdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`py-5 md:py-[14px] font-semibold cursor-pointer lg:text-base lg:leading-[20.8px] w-full md:rounded-[0px] text-sm leading-[10.4px] pl-2.5 md:text-[13.227px] transition-colors duration-300 md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                        ${
                          isDarkMode
                            ? "bg-black text-white hover:bg-slate-800 border border-white"
                            : "text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
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
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2 ">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Quantity
                  </label>
                  {/* input */}
                  <div
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] sm:p-3 sm:text-lg  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center outline-0 w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border border-white"
                        : "hover:bg-[#EDEAEA] border-[0.24px] lg:border-[0.4px] border-[#9C9C9C] text-[#7C7C7C]"
                    }
                    ${
                      !quantityAmount ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (quantityAmount) {
                        waecQuantityDropDown();
                      }
                    }}
                  >
                    {quantityResult}

                    <img
                      className="imgdrop absolute left-[90%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-3.5 h-4"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {quantityActive && quantityAmount && (
                    <div
                      className={`dropdown-options absolute top-[100%] w-full z-[2]
                      ${
                        isDarkMode
                          ? "bg-black text-white border border-white divide-y divide-white"
                          : "text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                      }`}
                    >
                      {options?.map((option) => {
                        return (
                          <h2
                            onClick={() => {
                              setQuantityResult(
                                `${
                                  option.quantity
                                } (₦${option?.Amount?.toLocaleString()})`
                              );
                              setQuantityActive(false);
                              setEducationAmount(option?.Amount);
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                            }}
                            className={`py-5 md:py-[14px] text-[15px] leading-[10.4px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
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
                <div className=" container-phone flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
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
                      if (numericValue?.length === 11) {
                        e.target.style.border = "1px solid green";
                      } else if (e.target.value?.length < 11) {
                        e.target.style.border = "1px solid red";
                      }
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                    }`}
                    type="tel"
                    name="Waec-Phone"
                    id="phone"
                    maxLength={11}
                    placeholder=""
                    value={educationPinPhone}
                    onFocus={() => {
                      setErrors((prev) => ({ ...prev, educationPinPhone: "" }));
                    }}
                    onChange={(e) => {
                      setEducationPinPhone(e.target.value);
                    }}
                  />
                  {errors.educationPinPhone && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.educationPinPhone}
                    </div>
                  )}
                </div>

                {/* right-side */}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  <label
                    className={`md:font-semibold font-normal text-sm md:text-[13px] lg:text-base ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Email
                  </label>

                  <input
                    // EmailPins
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal text-sm leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center  focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] self-center 
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    name="Waec-Email"
                    value={educationPinEmail}
                    onChange={(e) => {
                      setEducationPinEmail(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({ ...prev, educationPinEmail: "" }));
                    }}
                    type="email"
                    placeholder="example@gmail.com"
                  />

                  {errors.educationPinEmail && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.educationPinEmail}
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
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 text-sm flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-not-allowed focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={
                      educationAmount
                        ? `₦${educationAmount.toLocaleString()}`
                        : "₦"
                    }
                    readOnly
                  />
                  {/* {isAmountLoading && (
                    <p className="left-4 absolute top-7 md:top-9 lg:top-12">
                      <BalanceLoading />
                    </p>
                  )}
                  {isFailedAmount && (
                    <div className="text-xs text-red-500 italic lg:text-sm absolute left-0 -bottom-4 ">
                      Unable to get Amount. Try Again
                    </div>
                  )} */}
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
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center cursor-pointer justify-between border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                    onClick={() => {
                      waecMethodDropDown();
                    }}
                  >
                    <p
                      className={`font-medium text-[13px] leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base  lg:leading-[20.8px] cursor-pointer
                      ${isDarkMode ? " text-white" : " text-[#7C7C7C] "}`}
                      readOnly
                    >
                      {paymentResult}
                    </p>

                    <img
                      className="lg:w-6 lg:h-6 md:h-[14.038px] md:w-[14.038px] w-3.5 h-4 cursor-pointer methodDrop"
                      src={paymentResult ? imageState : arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {methodActive && (
                    <div
                      // className={`absolute lg:top-[85px] md:top-[60px] top-[72px] border divide-y z-[5] rounded flex flex-col w-full
                      // ${
                      //   isDarkMode
                      //     ? "bg-black text-white divide-gray-50  border-white"
                      //     : "text-[#7C7C7C]"
                      // }`}
                      className={`absolute lg:top-[85px] md:top-[60px] top-[74px] z-[5] border rounded flex flex-col w-full cursor-pointer  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-y divide-white  border-white"
                          : "text-[#7C7C7C] bg-white border-gray-100"
                      }`}
                    >
                      {methodOptions?.map((methodOption) => {
                        return (
                          <div
                            onClick={() => {
                              if (methodOption.method === "NGN Wallet") {
                                setPaymentResult(
                                  `${methodOption.method} ${methodOption.balance}`
                                );
                                setWalletBalance(methodOption.balance);
                                setImageState(methodOption.flag);
                                setMethodActive(false);
                                document
                                  .querySelector(".methodDrop")
                                  .classList.remove("DropIt");
                              } else {
                                setMethodActive(true);
                              }
                            }}
                            // className={`flex gap-2.5 lg:py-[15px] py-[10px] pl-[10px] pb-[20px] pt-[20px] md:py-1 transition-colors duration-300 items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                            // ${
                            //   methodOption.id !== 1 && !isDarkMode
                            //     ? "bg-gray-300 cursor-not-allowed"
                            //     : methodOption.id !== 1 && isDarkMode
                            //     ? "bg-black cursor-not-allowed"
                            //     : methodOption.id === 1 && !isDarkMode
                            //     ? "bg-white hover:bg-[#EDEAEA] cursor-pointer"
                            //     : "bg-black cursor-pointer hover:bg-gray-800"
                            // }
                            // `}
                            //bg-white opacity-50

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
                                isDarkMode ? "text-white " : "text-[#7C7C7C] "
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
            </div>
            {educationProceed && (
              <Modal>
                <div
                  // className={`${
                  //   isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  // } deleteRecipientSuccess mx-[5%]  ${
                  //   toggleSideBar ? "confirm01 " : "confirm"
                  // } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative
                  // md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                  className={`w-full flex justify-center h-full py-[30px] px-[15px] lg:px-[0px] lg:items-center items-end`}
                >
                  <div
                    // className="w-full flex justify-end border-b-[6px] items-center border-primary px-[12px] h-[35px] md:h-[45px] lg:h-[60px] :border-b-[10px] "
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
                        onClick={() => setEducationProceed(false)}
                        // className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
                        className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                      />
                    </div>
                    <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                    <div className="mx-auto">
                      <h2 className="text-xs my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] font-extrabold lg:text-base">
                        Confirm Transaction
                      </h2>
                      <p className="text-[10px] font-semibold text-center mb-2 md:text-xs lg:text-sm mx-2">
                        You are about to purchase{" "}
                        <span className="font-extrabold text-[10px] md:text-base lg:text-xs">
                          {examType} PIN (₦
                          {educationAmount.toLocaleString()})
                        </span>{" "}
                        from your {paymentResult.split(" (")[0]} to
                      </p>

                      <div className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7">
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                            // text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium
                          >
                            Exam Type
                          </h2>
                          <div className="flex gap-1 items-center">
                            <div
                            // className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                            >
                              <img
                                src={WaecImg}
                                alt=""
                                className="w-full h-full object-cover md:h-[15px]"
                              />
                            </div>
                            <h2
                              // className="text-[10px] leading-3 capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium"
                              className=" capitalize"
                            >
                              {examType}
                            </h2>
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
                          <span
                          // className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium `}
                          >
                            {quantityResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </h2>
                          <h2
                          // className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium"
                          >
                            {educationPinPhone}
                          </h2>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                            // text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium
                          >
                            Email
                          </h2>
                          <span className="">{educationPinEmail}</span>
                        </div>

                        <div
                          // className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium"
                          className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center"
                        >
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Amount
                          </h2>
                          <span className="">
                            {educationAmount
                              ? `₦${educationAmount.toLocaleString()}.00`
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
                            Nigerian {paymentResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Transaction Fee
                          </h2>
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            ₦0.00
                          </h2>
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
                          <span
                            // className="text-[10px] text-[#2ED173] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium"
                            className="text-[#2ED173]"
                          >
                            +2.00
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* WALLET */}
                    <div
                      // className="my-[5px] relative flex justify-between items-center gap-2 bg-slate-200 -mx-[20px] px-[15px] h-[55px] py-[18px]"
                      className={`w-[95%] h-auto my-5 lg:my-8 flex py-[7px] justify-between items-center px-[4%] mx-auto rounded-[10px]  ${
                        isDarkMode
                          ? "bg-black border rounded-[10px]  border-white"
                          : "bg-[#F6F7F7] "
                      }`}
                    >
                      <div
                        // className="flex gap-2 items-center"
                        className="flex flex-col gap-2  "
                      >
                        {/* <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center"> */}
                        <div className="flex gap-[10px] justify-center items-center">
                          <img
                            className="w-[16px] h-[16px] bg-white"
                            src={imageState}
                            alt="/"
                          />
                          <div className="flex gap-[10px] items-center font-medium">
                            <p
                              className={`text-xs md:text-sm leading-[20px] lg:leading-[22px]  lg:text-base ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                            >
                              Available Balance {"  "}
                            </p>
                            <span
                            className={`${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}
                            >
                              {walletBalance !== "" ? walletBalance : "₦"}
                            </span>
                          </div>
                        </div>
                        <span
                          // className="text-gray-500 text-xs font-normal leading-[20px] lg:text-base lg:leading-[22px] text-left absolute left-[3.2rem] top-8 "
                          className="text-gray-500 text-sm font-bold leading-[20px] lg:text-base lg:leading-[22px] text-left"
                        >
                          {balanceStatus}
                        </span>
                      </div>

                      <img
                        src={arrowRight}
                        alt=""
                        className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                      />
                    </div>

                    {/* <div className="flex items-center justify-center mb-[60px]"> */}
                    <button
                      className={`my-[5%] w-[90%] flex justify-center items-center mx-auto text-sm font-extrabold h-[50px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-base lg:text-sm lg:w-[163px] lg:h-[38px] lg:my-[2%]   ${
                        CheckSufficiency
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary cursor-pointer"
                      }`}
                      // w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:text-xs leading-[15px] lg:text-base lg:leading-6 py-[15px] md:py-[10px] font-extrabold
                      onClick={() => {
                        confirmButton();
                      }}
                      disabled={CheckSufficiency}
                    >
                      Confirmed
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </Modal>
            )}
            {/* <div>
                    <h2 className="lg:text-base lg:leading-6 text-center mb-1 text-[10px] md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-3">
                      Confirm Transaction
                    </h2>
                    <h2 className="lg:text-base md:text-xs md:px-[30px] lg:leading-6 md:leading-[20px] text-[10px] leading-3 text-center mt-[26px] mx-[10px] mb-[20px] font-medium ">
                      You are about to purchase{" "}
                      <span className="font-semibold lg:text-[16.9px] md:text-[14.9px] text-[10.9px]">
                        {examType}
                      </span>{" "}
                      PIN (₦
                      {educationAmount.toLocaleString()}) from your{" "}
                      {paymentResult.split(" (")[0]} to
                    </h2>

                    <div className="flex flex-col gap-[15px] px-5 mt-[50px] md:gap-[25px]">
                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Exam Type
                        </h2>
                        <div className="flex gap-1">
                          <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                            <img
                              src={WaecImg}
                              alt=""
                              className="w-full h-full object-cover md:h-[15px]"
                            />
                          </div>
                          <h2 className="text-[10px] leading-3 capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            {examType}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Quantity
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium `}
                          >
                            {quantityResult.split(" (")[0]}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Phone Number
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            {educationPinPhone}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Email
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            {educationPinEmail}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Amount
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            {educationAmount
                              ? `₦${educationAmount.toLocaleString()}`
                              : "₦"}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Payment Method
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            Nigerian {paymentResult.split(" (")[0]}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Transaction Fee
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            ₦0.00
                          </h2>
                        </div>
                      </div>

                      {/* POINTS EARNED 
                      <div className="flex items-center justify-between">
                        <h2
                          className={`text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium ${
                            isDarkMode ? "text-white" : "text-[#7C7C7C]"
                          }`}
                        >
                          Points Earned
                        </h2>
                        <div className="flex gap-1">
                          <h2 className="text-[10px] text-[#2ED173] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium">
                            +2.00
                          </h2>
                        </div>
                      </div>

                      {/* WALLET 
                      <div className="my-[5px] relative flex justify-between items-center gap-2 bg-slate-200 -mx-[20px] px-[15px] h-[55px] py-[18px]">
                        <div className="flex gap-2 items-center">
                          <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                            <img
                              className="w-[16px] h-[16px]"
                              src={imageState}
                              alt="/"
                            />
                          </div>
                          <p className="text-[10px] text-black md:text-sm  lg:text-base">
                            Available Balance{" "}
                            <span
                              className={`font-medium ${
                                isDarkMode ? "text-black" : "text-black"
                              }`}
                            >
                              {walletBalance}
                            </span>
                          </p>
                        </div>
                        <img
                          src={arrowRight}
                          alt=""
                          className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                        />
                        <span className="text-gray-500 text-xs font-normal leading-[20px] lg:text-base lg:leading-[22px] text-left absolute left-[3.2rem] top-8 ">
                          {balanceStatus}
                        </span>
                      </div>

                      <div className="flex items-center justify-center mb-[60px]">
                        <button
                          className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:text-xs leading-[15px] lg:text-base lg:leading-6 py-[15px] md:py-[10px] font-extrabold   ${
                            CheckSufficiency
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-primary"
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
                  </div> */}

            {/* CONFIRM TRANSACTION */}
            {educationConfirm && (
              <Modal>
                <div
                  className="flex items-end justify-center lg:items-center lg:justify-center w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]"
                >
                  <div
                    // className={`confirm2 ${styles.inputPin} ${
                    //   toggleSideBar
                    //     ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    //     : "lg:w-[40%]"
                    // } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                    // className={`${
                    //   isDarkMode
                    //     ? "bg-black absolute pt-4 h-[250px] shrink-0 rounded-lg shadow border border-white md:h-[350px] w-[481.25px] md:bottom-auto md:top-auto lg:h-[450px] lg:rounded-[20px] "
                    //     : styles.inputPin
                    // }
                    //  ${
                    //    toggleSideBar
                    //      ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]"
                    //      : "lg:w-[40%]"
                    //  } md:w-[55%] w-[90%] `}
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
                        onClick={() => setEducationConfirm(false)}
                        // className="absolute cursor-pointer top-[5.5px] right-2 w-[18px] h-[18px] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px]"
                        className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                        src={closeIcon}
                        alt=""
                      />
                    </div>
                    {/* <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" /> */}
                    {/* <p className="text-[10px] md:text-base lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]"> */}
                    <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                    <div className="flex flex-col w-full justify-center py-[15px] lg:py-[0px] h-[100%] gap-[15px] ">
                      <p
                        className="font-extrabold text-xs leading-[16px] pb-[20px] md:text-[10px] lg:text-base text-center">
                        Input PIN to complete transaction
                      </p>
                      <div
                        // className="flex flex-col gap-2.5 justify-center items-center font-extrabold mb-[7%]"
                        className="flex flex-col items-center lg:gap-[0px] gap-[5px] font-extrabold"
                      >
                        <div
                          // className=" flex justify-center items-center ml-[5%] gap-2.5 md:ml-[5%] md:gap-[30px]"
                          className=" flex items-center gap-2.5"
                        >
                          {" "}
                          {isVisible ? (
                            // <div className="flex flex-col gap-y-1">
                            <OtpInput
                              value={inputPin}
                              inputType="tel"
                              onChange={setInputPin}
                              numInputs={4}
                              shouldAutoFocus={true}
                              inputStyle={{
                                color: isDarkMode ? "#ffffff" : "#000000",
                                fontSize: "14px",
                                // width: 30,
                                // height: 30,
                                // borderRadius: 3,
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
                                  className={`inputOTP mx-[2px] 
                        ${isFocused ? "focused" : ""}`}
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
                            // className="text-[#0003] text-xl md:text-3xl"
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
                          // className="text-[8px] md:text-xs text-[#04177f]"
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
                            handleWaecSubmitPost();
                          }}
                          disabled={inputPin.length !== 4}
                          // className={`${
                          //   inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                          // } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                          //   isDarkMode ? "border border-white" : ""
                          // }`}
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
                {/* <TransactFailedPopUp/> */}
                <div
                  className={`w-full flex justify-center h-full py-[30px] px-[15px] lg:items-center items-end`}
                >
                  <div
                    // className={`confirm ${styles.successfulTwo} ${
                    //   isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                    // } ${
                    //   toggleSideBar
                    //     ? "md:w-[45%] md:ml-[20%] lg:ml-[20%] lg:w-[40%]"
                    //     : "lg:w-[40%]"
                    // } md:w-[45%] w-[90%] md:my-auto md:mt-[.5%] mx-auto overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
                    className={` bvnQuery lg:rounded-[12px] rounded-[10px] h-[520px] ${
                      toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } w-[100%] md:w-[60%] overflow-auto  ${
                      isDarkMode
                        ? "bg-black text-white border rounded-[10px] border-white"
                        : "bg-white text-black"
                    } `}
                  >
                    <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                      <div>
                        <img
                          onClick={() => {
                            setTransactSuccessPopUp(false);
                            setInputPin("");
                            handleResetFields();
                            // window.location.reload();
                          }}
                          // className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer md:h-[35px] lg:w-[35px] lg:h-[42px]"
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
                          navigate("/WaecEducationPin");
                          // window.location.reload();
                        }}
                        // className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                        className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] cursor-progress"
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
                        // className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                        className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
                        src="./Gif/checkMarkGif.gif"
                        alt="/"
                      />

                      {/* <div className="flex flex-col gap-[15px] md:gap-5 lg:gap-[30px]  px-5"> */}
                      <p
                        // className="text-[8px] font-semibold  text-center mb-2 md:text-sm lg:text-base"
                        className="w-[97%] mx-auto text-[10px] font-bold text-center mb-2 md:pb-2 lg:pb-3 md:text-sm lg:text-sm "
                      >
                        You have successfully purchased{" "}
                        <span
                          className={` ${
                            isDarkMode ? "text-white" : "text-black"
                          } font-bold text-[10px] md:text-base lg:text-sm`}
                        >
                          {" "}
                          {examType} PIN (₦{educationAmount.toLocaleString()}){" "}
                        </span>
                        from your {paymentResult.split(" (")[0]} to{" "}
                      </p>

                      {/* <div className="flex items-center justify-between"> */}
                      <div className="flex mt-4 flex-col gap-2 lg:gap-4 ">
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                            // text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium
                          >
                            Exam Type
                          </h2>
                          <div className="flex gap-1 items-center">
                            {/* <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"> */}
                            <img
                              src={WaecImg}
                              alt=""
                              // className="w-full h-full object-cover"
                              className=" w-[12.02px] h-[12.02px] md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                              // md:w-[60px] md:h-[15px] lg:w-[98px] lg:h-[18.6px]
                            />
                            {/* </div> */}
                            <span
                            // className="text-[10px] leading-3 font-medium md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6"
                            >
                              {examType}
                            </span>
                          </div>
                        </div>

                        {/* <div className="flex items-center justify-between"> */}
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                            // text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium
                          >
                            Quantity
                          </span>
                          {/* <div className="flex gap-1"> */}
                          <span
                          // className="text-[10px] leading-3 font-medium md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6"
                          >
                            {quantityResult.split(" (")[0]}
                          </span>
                          {/* </div> */}
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </span>
                          <span className="">{educationPinPhone}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium items-center">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Email
                          </span>
                          <span className="">{educationPinEmail}</span>
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
                            {paymentResult.split(" (")[0]}
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
                          <span className="">
                            {waecOrderId}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      // className={`bg-[#F2FAFF] mx-5 h-[45px] my-5 flex p-[10.193px] items-center justify-center md:mx-[20px] md:rounded-[15px] lg:rounded-[16.308px] md:h-[65px] lg:h-[75px] ${
                      //   isDarkMode ? "bg-slate-800" : "bg-[#F2FAFF]"
                      // }`}
                      className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px] ${
                        isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
                      }`}
                    >
                      <p
                        // className={`text-[9px] text-center mx-auto w-[90%] md:w-[90%] md:text-[11px] lg:text-[14.231px] font-medium ${
                        //   isDarkMode ? "text-white" : "text-[#7C7C7C]"
                        // }`}
                        className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] lg:text-sm  font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        The e-pins purchase has been generated successfully.
                        Please kindly check receipt to confirm the pin / token.
                        You can contact us for any further assistance.
                      </p>
                    </div>
                    <div
                      // className="flex justify-center  w-full items-center gap-[15px] md:gap-5 mt-[50px]  lg:gap-5 lg:my-[5%] md:mt-[20px] mb-[20px]"
                      className="flex w-full justify-center items-center gap-[10px] pb-4 md:gap-[8.59px] lg:gap-[15px] md:pb-2"
                    >
                      <Link
                        to="/WaecEducationPin"
                        onClick={() => {
                          waecTransactionSuccessClose();
                        }}
                        //     className={`bg-[#04177f] w-[111px] flex justify-center items-center cursor-pointer text-center text-xs font-extrabold h-[40px]
                        //  text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                        className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-6 lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                      >
                        Done
                      </Link>

                      <Link
                        to="/WaecReceipt"
                        onClick={handleReceivedData}
                        style={{
                          boxShadow:
                            "0px 0px 2.0368096828460693px 0px #00000040",
                        }}
                        //     className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center text-center cursor-pointer text-xs
                        //  font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                        //    isDarkMode ? "text-black" : "text-black"
                        //  }`}
                        className={`border  w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center
                    items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                      >
                        Receipt
                      </Link>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {/* =========== RECEIPT ============*/}
            {/* {receipt && (
        <WaecReceipt
          Exam="WAEC"
          ExamType={examType}
          ListOfResultCheckers={quantityResult}
          PhoneNumber={educationPinPhone}
          Email={educationPinEmail}
          Amount={educationAmount}
          walletbalance={walletBalance}
          walletName={paymentResult}
        />
      )} */}

            {/* <div className="py-[30px] lg:py-[60px] mt-5 lg:mb-[80px] mb-[50px] md:mb-[100px]"
            // mt-10
            > */}
            <button
              // font-extrabold h-[43px] w-full py-[3.534px] px-[5.301px] md:mb-[0px] rounded-[4.241px] md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] md:h-auto md:text-xs md:leading-[14px] md:rounded-[7.042px] lg:text-base lg:leading-6 lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px]
              className={`mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-cente font-[400] text-xs md:text-[11px] lg:text-base text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center md:pt-2 pt-3 ${
                !examType ||
                !quantityResult ||
                !educationPinPhone ||
                !educationPinEmail ||
                !paymentResult ||
                !educationAmount
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={(e) => {
                waecProceed();
                e.preventDefault();
              }}
              disabled={
                !examType ||
                !quantityResult ||
                !educationPinPhone ||
                !educationPinEmail ||
                !paymentResult ||
                !educationAmount
              }
            >
              Proceed
            </button>
            {/* </div> */}
          </div>
        </div>

        {/* end of */}
      </div>

      {waecFailedTransaction && (
        <Modal>
          {/* <div
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
            > */}
          <div
            className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto overflow-hidden ${
              isDarkMode
                ? "bg-black text-white border rounded-[10px] border-white"
                : "bg-white text-black rounded-lg"
            } `}
          >
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
                  setWaecFailedTransaction(false);
                  setInputPin("");
                  handleResetFields();
                  setPurchaseEduErrorType("");
                  navigate("/WaecEducationPin");
                  // window.location.reload();
                }}
                className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
              />
            </div>
            <hr className="h-1 bg-[#04177f] border-none" />
            {/* <div className="flex flex-col justify-between items-center h-[100%]">
              <h2
                className="lg:text-base lg:leading-6 text-center mb-1
                text-xs md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-[16px]"
              > */}
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold my-4">
                Purchase Failed
              </h2>
              <img
                src={eduFailed}
                // className="w-[150px] md:w-[200px]"
                className="w-32 h-32 mx-auto my-6"
                alt="transaction failed"
              />

              {/* <p
                className="text-center text-[#F95252]  lg:text-base lg:leading-[20.8px] font-semibold
                text-xs md:text-[13px] md:leading-[20px] leading-[16px]"
              >
                An unexpected error has occurred, please try again.
              </p> */}
              <p className={`text-sm mb-8 ${isDarkMode ? "text-white":"text-gray-600"}`}>
                {purchaseEduErrorType}
              </p>
              {/* <div
                className="flex  justify-center  w-full 
              items-center gap-[15px] md:gap-5 mt-[50px]  lg:gap-5 
              lg:my-[5%] md:mt-[20px] mb-[20px] "
              > */}
              <div className="flex gap-[10px] justify-between w-full px-[10px]">
                <Link
                  to="/WaecEducationPin"
                  onClick={() => {
                    setWaecFailedTransaction(false);
                    setInputPin("");
                    handleResetFields();
                    setPurchaseEduErrorType("");
                    // window.location.reload();
                  }}
                  // className={`bg-[#04177f] w-[111px] flex justify-center
                  //   items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                  //    text-white rounded-[6px] md:w-[150px] md:rounded-[8px]
                  //    md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] `}
                  className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2 text-white rounded-md font-medium"
                >
                  Done
                </Link>
                <Link
                  to="/WaecFailedReceipt"
                  onClick={handleFailedData}
                  style={{
                    boxShadow: "0px 0px 2.0368096828460693px 0px #00000040",
                  }}
                  // className={`bg-[#ffffff] border w-[111px] border-[#0003] flex justify-center items-center text-center cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                  //   isDarkMode ? "text-black" : "text-black"
                  // }`}
                  className={`w-[50%] max-w-xs mx-auto border py-2  rounded-md font-medium transition-colors ${isDarkMode ?"bg-black hover:bg-slate-800 ":"bg-white"}`}
                >
                  Receipt
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* <div className=" flex gap-[8.729px] md:gap-[14.896px] items-center justify-center px-[8.594px] mt-[21rem] md:mt-0 ">
        <p className="font-medium text-[11px] leading-[10.4px] lg:text-base lg:leading-[15.6px] md:leading-[12.938px] self-center">
          You need help?
        </p>
        <Link
          to="/contactUs"
          className="font-medium text-white text-[11px] px-[10.594px] rounded-[8px] bg-[#04177F] lg:text-xs lg:leading-[14.4px] py-1.5 md:px-[14.594px]  lg:py-[10px] lg:px-[16px] lg:rounded-[9px]"
        >
          Contact Us
        </Link>
      </div> */}
      <div className="mt-[38rem] md:mt-[15rem]">
        <div className={style.help}>
          <h2>You need help?</h2>
          <Link to={`/ContactUs`} className={style.btnContact}>
            Contact Us
          </Link>
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
