import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { useContext } from "react";
import NabtebImg from "./imagesEducation/NabtebImg.svg";
import HeroComponent from "./heroComponent";
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
// import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import style from "../AirTimePage/AirtimeVtu.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Modal } from "../Screens/Modal/Modal";
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
// import NabtebReceipt from "./ReceiptEducationPins/nabtebReceipt";
// import axios from "axios";
import eduFailed from "./imagesEducation/WaecFailedTransaction.svg";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import {
  GetFunction,
  PostFunction,
  VerifyTransPin,
  RestrictionPopUp,
  InternalLoginSession
} from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { validateNigerianNumberByNetwork } from "./waecEducationPin";
 import { GetLocalStorage } from "../LocalStorage/LocalStorage";
export default function NabtebEducationPins() {
  const navigate = useNavigate();
  const {
    isDarkMode,
    // FUNCTION OTP FOR THE POPPINS
    toggleSideBar,
    inputPin,
    setInputPin,
    toggleVisibility,
    isVisible,

    nabtebQuantityResult,
    setNabtebQuantityResult,
    nabtebQuantityActive,
    setNabtebQuantityActive,
    nabtebPaymentResult,
    setNabtebPaymentResult,
    nabtebMethodActive,
    setNabtebMethodActive,
    nabtebExamType,
    setNabtebExamType,
    nabtebExamActive,
    setNabtebExamActive,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    nabtebEducationPinPhone,
    setNabtebEducationPinPhone,
    nabtebEducationPinEmail,
    setNabtebEducationPinEmail,
    nabtebEducationAmount,
    setNabtebEducationAmount,
    nabtebQuantityAmount,
    setNabtebQuantityAmount,
    setNabtebEduResponse,
    nabtebWalletBalance,
    setNabtebWalletBalance,
    setEducationPinStatus,
    newBalance,
    setNewBalance,

     nabtebEduResponse,
    setNabtebPinsGenerated,
    nabtebOrderId,
    setNabtebOrderId,
    setNabtebTransactionId,
    setNabtebShowDescription,
    setNabtebFullName,
    setNabtebTransactionProduct,

    authenticationOpen,
    purchaseEduErrorType,
    setPurchaseEduErrorType,
  } = useContext(ContextProvider);
const Data = GetLocalStorage();
  // UseStates
  
  const [nabtebImageState, setNabtebImageState] = useState(arrowDown);
  const [nabtebEducationProceed, setNabtebEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [nabtebEducationConfirm, setNabtebEducationConfirm] = useState(false);
  const [nabtebFailedTransaction, setNabtebFailedTransaction] = useState(false);
  const [restrictUser, setRestrictUser] = useState(false);
  const [checkNetworkError, setCheckNetworkError] = useState(false)
  // const [receipt] = useState(false);

  // Get Amount
  const [isLoading, setIsLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});

  const nabtebOptions = [
    {
      quantity: "1 Piece Of Result Checker",
      Amount:
        nabtebQuantityAmount !== undefined ||
        nabtebQuantityAmount !== null ||
        nabtebQuantityAmount !== ""
          ? nabtebQuantityAmount * 1
          : "",
      id: 1,
    },
    {
      quantity: "2 Piece Of Result Checker",
      Amount:
        nabtebQuantityAmount !== undefined ||
        nabtebQuantityAmount !== null ||
        nabtebQuantityAmount !== ""
          ? nabtebQuantityAmount * 2
          : "",
      id: 2,
    },
    {
      quantity: "3 Piece Of Result Checker",
      Amount:
        nabtebQuantityAmount !== undefined ||
        nabtebQuantityAmount !== null ||
        nabtebQuantityAmount !== ""
          ? nabtebQuantityAmount * 3
          : "",
      id: 3,
    },
    {
      quantity: "4 Piece Of Result Checker",
      Amount:
        nabtebQuantityAmount !== undefined ||
        nabtebQuantityAmount !== null ||
        nabtebQuantityAmount !== ""
          ? nabtebQuantityAmount * 4
          : "",
      id: 4,
    },
    {
      quantity: "5 Piece Of Result Checker",
      Amount:
        nabtebQuantityAmount !== undefined ||
        nabtebQuantityAmount !== null ||
        nabtebQuantityAmount !== ""
          ? nabtebQuantityAmount * 5
          : "",
      id: 5,
    },
  ];

  const getAmount = async function handleGetAmount() {
    if (!navigator.onLine) alert("Kindly check your internet connection");
    const id = 3;
    const path = `products/edu/${id}`;
    const SuccessHandler = (response) => {
      const amount = response?.data?.data?.data?.Amount;

      if (amount !== undefined && amount !== null && amount !== "") {
        setNabtebQuantityAmount(Number(amount));
      } else {
        setNabtebQuantityAmount("");
      }
    };

    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "Server error") {
        await GetFunction(
          path,
          setIsLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "Sever error") {
           alert("Unable to get NABTEB PINS. Please try again later");
            }else if(ErrorType === "Network error" || ErrorType === "User error"){
          alert("Your internet connection is quite unstable.")
            }
          },
          setNabtebEduResponse
        );
      } else if (ErrorType === "unauthorised") {
        await GetFunction(
          path,
          setIsLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              return setSessionModal(true);
            }
          },
          setNabtebEduResponse
        );
      }
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setNabtebEduResponse
    );
  };
  const GetBalance = async () => {
      if(!navigator.onLine) return setCheckNetworkError(true)
        const SuccessHandler = () => {
          //alert("Successful");
          console.log("successfully retrieved balance");
          //alert("Successful")
        };
        const FailedHandler = async (ErrorType) => {
          if (ErrorType === "unauthorised") {
            await GetFunction(
              `balance`,
              setIsLoading,
              SuccessHandler,
              //Handling the error Use Cases of the Unauthorised inside
              // of the statement.
              async(ErrorType) => {
                if (ErrorType === "unauthorised") {
                  return setSessionModal(true);
                }else if(ErrorType === "Server error"){
                    await GetFunction(
          "balance",
          setIsLoading,
          SuccessHandler,
         async(ErrorType)=> {
          if(ErrorType === "Server error"){
            alert("Failed to retrieve the balance.")
          }else if(ErrorType === "Network error" || ErrorType === "User error"){
             setCheckNetworkError(true);
                alert("Kindly check your internet connection to retrieve balance.")
          }else {
            alert("An unexpected error has occured on attempt to retrieve balance.")
          }
         },
          setPassDataBalance
        );
         }else if(ErrorType === "Network error" || ErrorType === "User error"){
           setCheckNetworkError(true);
             alert("Kindly check your internet connection to retrieve balance");
             setCheckNetworkError(true);
         }else {
          alert("An unexpected error has occured on attempt to retrieve the balance")
         }
              },
               setPassDataBalance
            );
          }else if(ErrorType === "Server error"){
              await GetFunction(
          "balance",
          setIsLoading,
          SuccessHandler,
         async(ErrorType)=> {
           if(ErrorType === "unauthorised"){
              await GetFunction(
          "balance",
          setIsLoading,
          SuccessHandler,
          async(ErrorType)=> {
            if(ErrorType === "unauthorised"){
              return setSessionModal(true)
            }else if(ErrorType === "Server error"){
                 await GetFunction(
          "balance",
          setIsLoading,
          SuccessHandler,
         async(ErrorType)=> {
          //if Statements
        //We run again cause the previous one was interrupted by 401
        //Let us re-run server error
        if(ErrorType === "Server error"){
          alert("Failed to retrieve the balance")
        }else if(ErrorType === "unauthorised"){
          return sessionModal(true)
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
           setCheckNetworkError(true);
         alert("Kindly check your internet connection to retrieve balance")
        }else{
         // console.log("yeah bro i am the one running blehh")
          alert("An Unexpected error occured in attempt to retrieve balance")
        }
  
         },
          setPassDataBalance
        );
            }else if(ErrorType === "Network error" || ErrorType === "User error"){
               setCheckNetworkError(true);
              alert("Kindly check your internet connection to retrieve the balance")
            }else if(ErrorType === "Server error"){
              alert("Failed to retrieve the balance.")
            }else{
              alert("An Unexpected error occured in attempt to retrieve balance")
            }
          },
          setPassDataBalance
        );
      }
            else if(ErrorType === "Network error" || ErrorType === "User error"){
              //The operation was interrupted by a network error
               setCheckNetworkError(true);
              alert("Kindly check your internet connection to retrieve balance.")
           }else {
            //Place 
            //An alien error has occured with the re-run of the "Server error" ErrorType
            alert("An unexpected error occured in attempt to retrieve the balance.")
           }
         },
          setPassDataBalance
        );
          }else if(ErrorType === "Network error" || ErrorType === "User error"){
              setCheckNetworkError(true);
          }else{
             
            alert("An unexpected error occured in attempt to retrieve balance.")
          }
        }
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
    if(Data?.ConfirmAcc === "true"){
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
  }else {
    setRestrictUser(true)
  }
    // handleResetFields();
    // eslint-disable-next-line
  }, []);

  // function to reset the fields
  function handleResetFields() {
    setNabtebExamType("NABTEB");
    setNabtebQuantityResult("");
    setNabtebEducationPinPhone("");
    setNabtebEducationPinEmail("");
    setNabtebEducationAmount("");
    setNabtebPaymentResult("");
    setNabtebQuantityActive(false);
    setNabtebMethodActive(false);
    setNabtebExamActive(false);
  }

  function nabtebQuantityDropDown() {
    if (!nabtebExamType) {
      setNabtebQuantityActive(false);
    } else {
      setNabtebQuantityActive(!nabtebQuantityActive);
      document.querySelector(".imgdrop").classList.toggle("DropIt");
    }
    setNabtebMethodActive(false);
  }

  // WALLET

  function nabtebMethodDropDown() {
    setNabtebMethodActive(!nabtebMethodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
    setNabtebQuantityActive(false);
    setNabtebExamActive(false);
  }

  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";
  const updateBalanceToNumber = Number(updateBalance);
  const newBalanceToNumber = Number(newBalance);
  const otherCurrencyBalance = 0.0;

  const nabtebMethodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${
              updateBalance > 1
                ? updateBalanceToNumber?.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })
                : ""
            })`
          : `(${
              newBalance > 1
                ? newBalanceToNumber?.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })
                : ""
            })`,
      flag: nigerianFlag,
      id: 1,
    },
    {
      method: "USD Currency",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })})`,
      flag: americaFlag,
      id: 2,
    },
    {
      method: "EUR Wallet",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-EU", {
        style: "currency",
        currency: "EUR",
      })})`,
      flag: britainFlag,
      id: 3,
    },
    {
      method: "GBP Wallet",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      })})`,
      flag: euroFlag,
      id: 4,
    },
    {
      method: "AUD Wallet",
      balance: `(${otherCurrencyBalance?.toLocaleString("en", {
        style: "currency",
        currency: "AUD",
      })})`,
      flag: austriaFlag,
      id: 5,
    },
    {
      method: "KES Wallet",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-KE", {
        style: "currency",
        currency: "KES",
      })})`,
      flag: kenyaFlag,
      id: 6,
    },
  ];

  // CONFIRM EXAM TYPE
  const nabtebExams = [
    { examType: "NABTEB", id: 1 },
    { examType: "NECO", path: "/NecoEducationPin", id: 2 },
    { examType: "WAEC", path: "/WaecEducationPin", id: 3 },
   // { examType: "JAMB ", path: "/JambEducationPin", id: 4 },
  ];
  function nabtebExamDropDown() {
    setNabtebExamActive(!nabtebExamActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
    setNabtebQuantityActive(false);
    setNabtebMethodActive(false);
  }

  const nabtebProceed = () => {
    const { error } = schema.validate({
      nabtebEducationPinPhone,
      nabtebEducationPinEmail,
    });
    const network = validateNigerianNumberByNetwork(nabtebEducationPinPhone);

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (network === "Unknown network") {
      setErrors({
        nabtebEducationPinPhone:
          "Invalid phone number. Please enter a valid Nigerian network number.",
      });
    } else {
      setNabtebEducationProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    nabtebEducationPinPhone: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),

    nabtebEducationPinEmail: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
  });

  // function handleCalculatedAmount(amountCalculated) {
  //   const amountCalculated =
  //     nabtebQuantityAmount > 0 ? Number(nabtebQuantityAmount) * quantity : "";
  //   return handleFormattedAmount(amountCalculated);
  // }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance || updateBalance);

  let educationAmountToNumber = Number(nabtebEducationAmount);
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
    setNabtebEducationProceed(false);
    setNabtebEducationConfirm(true);
  };

  const nabtebTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
    setInputPin("");
    handleResetFields();
  };

  const nabtebEduPinSuccess = (e) => {
    setTransactSuccessPopUp(true);
    setNabtebEducationConfirm(false);
  };
  const nabtebEduPinFailed = () => {
    setNabtebEducationConfirm(false);
    setNabtebFailedTransaction(true);
    // setTransactSuccessPopUp(false);
  };

  const [fetchedPurchaseResponse, setFetchedPurchaseResponse] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const handleNabtebSubmitPost = async () => {
    async function EduPinHandler() {
      const path = `edu`;
      const body = {
        exam_type: nabtebExamType.toLowerCase(),
        phone_no: nabtebEducationPinPhone,
        // amount: String(
        //   parseInt(nabtebEducationAmount.replace(/[₦,]/g, ""), 10)
        // ),
        // amount: String(nabtebEducationAmount.replace(/[₦,]/g, "")),
        amount: String(nabtebEducationAmount),
        email: nabtebEducationPinEmail,
        quantity: parseInt(nabtebQuantityResult.split(" (")[0].slice(0, 1)),
      };
      const SuccessHandler = (response) => {
        nabtebEduPinSuccess();
        setEducationPinStatus(true);
        setNabtebOrderId(response?.data?.data?.data?.order_id);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "Bad request") {
          nabtebEduPinFailed();
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
            "Server error: Purchase Failed"
          );
          setNabtebFailedTransaction(true);
          setNabtebEducationConfirm(false);
        } else if (
          ErrorType === "Network error" ||
          ErrorType === "User error"
        ) {
          setPurchaseEduErrorType("An internet connection error");
          setNabtebFailedTransaction(true);
          setNabtebEducationConfirm(false);
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
        if(ErrorType !== "Bad request"){
        alert("An unexpected has occured try again some other time.");
        }
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
      setNabtebPinsGenerated(fetchedPurchaseResponse?.data?.pins_generated);
      setNabtebOrderId(fetchedPurchaseResponse?.data?.order_id);
      setNabtebTransactionId(fetchedPurchaseResponse?.data?.transaction_id);
      setNabtebShowDescription(
        fetchedPurchaseResponse?.data?.transaction_description
      );
      setNabtebFullName(fetchedPurchaseResponse?.data?.full_name);
      setNabtebTransactionProduct(
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
    setNabtebFailedTransaction(false);
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

  if(Data?.ConfirmAcc === "true"){
  window.addEventListener("online", ()=> {
   if(checkNetworkError === true &&
     (updateBalance === undefined || updateBalance === null || updateBalance === "")
    && (newBalance === null || newBalance === undefined || newBalance === "") ){
   return GetBalance();
   }
   if(checkNetworkError === true &&
     (nabtebEduResponse?.data?.data?.Amount === undefined  || nabtebEduResponse?.data?.data?.Amount === null) ) {
    return getAmount();
   }
  })
}
  return (
    <DashBoardLayout>
      <div className="flex flex-col h-[115%] lg:h-[120%] justify-between ">
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
              src={NabtebImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-3 md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              }`}
            >
              NABTEB E-PINs Instantly
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
                    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Confirm Exam Type
                  </label>
                  {/* input */}
                  <div
                    onClick={nabtebExamDropDown}
                    // className="relative w-full "
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
                      isDarkMode
                        ? "bg-black text-white hover:bg-gray-800 border border-white"
                        : "hover:bg-[#EDEAEA]"
                    }`}
                  >
                    {nabtebExamType}
                    <img
                      // decdrop
                      className="Examdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-[14px] h-[16px]"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {nabtebExamActive && (
                    <div
                      className={`
                    ${
                      isDarkMode
                        ? "text-white bg-black  "
                        : " text-[#7C7C7C] bg-white hover:bg-[#EDEAEA]"
                    } flex flex-col absolute lg:top-[80px] md:top-[60px] top-[74px] transition-colors duration-300 z-[2] w-full`}
                    >
                      {nabtebExams?.map((exam) => {
                        return (
                          <Link
                            to={exam.path}
                            onClick={() => {
                              setNabtebExamType(exam.examType);
                              setNabtebExamActive(false);
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
                    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Quantity
                  </label>
                  {/* input */}
                  <div
                    onClick={() => {
                      if (nabtebQuantityAmount) {
                        nabtebQuantityDropDown();
                      }
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px] sm:p-3 sm:text-lg  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center outline-0 w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                      isDarkMode
                        ? "bg-black hover:bg-gray-800 text-white border border-white"
                        : "hover:bg-[#EDEAEA] border-[0.24px] lg:border-[0.4px] border-[#9C9C9C] text-[#7C7C7C]"
                    } ${
                      !nabtebQuantityAmount
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    {nabtebQuantityResult}

                    <img
                      className="imgdrop absolute left-[90%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-6 lg:w-6 w-3.5 h-4"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {nabtebQuantityActive && nabtebQuantityAmount && (
                    <div
                      // className={`absolute lg:top-[90px] md:top-[60px] top-[74px] z-[1] flex flex-col w-full divide-y rounded
                      // ${
                      //   isDarkMode
                      //     ? "bg-black text-white divide-gray-50 border border-white"
                      //     : "text-[#7C7C7C] hover:bg-[#EDEAEA]"
                      // }`}
                      className={`dropdown-options absolute top-[100%] w-full z-[2]
                      ${
                        isDarkMode
                          ? "bg-black text-white border border-white divide-y divide-white"
                          : "text-[#7C7C7C] hover:bg-[#EDEAEA]"
                      }`}
                    >
                      {nabtebOptions?.map((option) => {
                        return (
                          <h2
                            onClick={() => {
                              setNabtebQuantityResult(
                                `${
                                  option.quantity
                                } (₦${option?.Amount?.toLocaleString()})`
                              );
                              setNabtebQuantityActive(false);
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                              setNabtebEducationAmount(option?.Amount);
                            }}
                            className={`py-5 md:py-[14px] text-[13.5px] leading-[10.4px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800 "
                                : " hover:bg-[#EDEAEA] bg-[white] text-[#7C7C7C]"
                            }`}
                            key={option.id}
                          >
                            {/* {nabtebQuantityAmount > 0
                              ? `${option.quantity} (₦${handleCalculatedAmount(
                                  option.id
                                )})`
                              : option.quantity} */}
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
                    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Phone Number
                  </label>

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
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                    }`}
                    type="tel"
                    name="phone"
                    id="phone"
                    maxLength={11}
                    placeholder="XXX XXXX XXXX"
                    value={nabtebEducationPinPhone}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        nabtebEducationPinPhone: "",
                      }));
                    }}
                    onChange={(e) => {
                      setNabtebEducationPinPhone(e.target.value);
                    }}
                  />
                  {errors.nabtebEducationPinPhone && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.nabtebEducationPinPhone}
                    </div>
                  )}
                </div>

                {/* right-side */}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  <label
                    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Email
                  </label>

                  <input
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal text-sm leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center  focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] self-center 
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    value={nabtebEducationPinEmail}
                    onChange={(e) => {
                      setNabtebEducationPinEmail(e.target.value);
                    }}
                    onFocus={() => {
                      setErrors((prev) => ({
                        ...prev,
                        nabtebEducationPinEmail: "",
                      }));
                    }}
                    type="Email"
                    placeholder="example@gmail.com"
                  />

                  {errors.nabtebEducationPinEmail && (
                    <div className="text-[#F95252] italic text-[13px] md:text-xs lg:text-sm">
                      {errors.nabtebEducationPinEmail}
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
                    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Amount
                  </label>
                  {/* input */}
                  <input
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 text-sm flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-not-allowed focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    // value={
                    //   nabtebEducationAmount
                    //     ? `${
                    //         nabtebEducationAmount.toString().includes("₦")
                    //           ? `${nabtebEducationAmount.toLocaleString()}`
                    //           : `₦${nabtebEducationAmount.toLocaleString()}`
                    //       }`
                    //     : ""
                    // }
                    value={
                      nabtebEducationAmount
                        ? `₦${nabtebEducationAmount.toLocaleString()}`
                        : "₦0.00"
                    }
                    readOnly
                  />
                </div>

                {/*================== PAYMENT METHOD ===============*/}
                <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                  {/* header */}
                  <label
                     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}
                  >
                    Payment Method
                  </label>
                  {/* input */}
                  <div
                    onClick={() => {
                      nabtebMethodDropDown();
                    }}
                    // className="relative w-full"
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center justify-between border lg:border-[0.4px] cursor-pointer w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] ${
                      isDarkMode
                        ? "bg-black text-white hover:bg-gray-800 border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                  >
                    <p
                      className={`font-medium text-[13px] leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base  lg:leading-[20.8px] cursor-pointer
                      ${isDarkMode ? " text-white" : " text-[#7C7C7C] "}`}
                      readOnly
                    >
                      {nabtebPaymentResult}
                    </p>

                    <img
                      className="lg:w-6 lg:h-6 md:h-[14.038px] md:w-[14.038px] w-3.5 h-4 cursor-pointer methodDrop"
                      src={nabtebPaymentResult ? nabtebImageState : arrowDown}
                      alt="CountryFlag"
                    />
                  </div>
                  {/* drop down */}

                  {nabtebMethodActive && (
                    // divide-y divide-gray-50
                    <div
                      className={`absolute lg:top-[85px] md:top-[60px] top-[74px] border z-[5] rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black divide-y divide-white text-white  border-white"
                          : "text-[#7C7C7C] bg-white border-gray-100"
                      }`}
                    >
                      {nabtebMethodOptions?.map((methodOption) => {
                        return (
                          <div
                            onClick={() => {
                              if (methodOption.method === "NGN Wallet") {
                                setNabtebPaymentResult(
                                  `${methodOption.method} ${methodOption.balance}`
                                );
                                setNabtebWalletBalance(methodOption.balance);
                                setNabtebImageState(methodOption.flag);
                                setNabtebMethodActive(false);
                                document
                                  .querySelector(".methodDrop")
                                  .classList.remove("DropIt");
                              } else {
                                setNabtebMethodActive(true);
                              }
                            }}
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
              {/* end of */}
            </div>
            {nabtebEducationProceed && (
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
                        onClick={() => setNabtebEducationProceed(false)}
                        className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                      />
                    </div>
                    <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                    <div className="mx-auto">
                      <h2 className="text-xs my-[5%] text-center font-extrabold md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-base">
                        Confirm Transaction
                      </h2>
                      <p className="text-[10px] font-semibold text-center mb-2 md:text-xs lg:text-sm mx-2">
                        You are about to purchase{" "}
                        <span className="font-extrabold text-[10px] md:text-base lg:text-xs">
                          {nabtebExamType} PIN (₦
                          {nabtebEducationAmount.toLocaleString()}) from your
                        </span>{" "}
                        {nabtebPaymentResult.split(" (")[0]} to
                      </p>

                      <div className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7">
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Exam Type
                          </h2>
                          <div className="flex gap-1 items-center">
                            <div className=" w-[12.02px] h-[12.02px] md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                              <img
                                src={NabtebImg}
                                alt=""
                                className="w-full object-cover h-[15px]"
                              />
                            </div>
                            <span className="capitalize">{nabtebExamType}</span>
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
                          <span className="">
                            {nabtebQuantityResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </h2>
                          <span className="">{nabtebEducationPinPhone}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Email
                          </h2>
                          <span className="">{nabtebEducationPinEmail}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Amount
                          </h2>
                          <span className="">
                            {/* <h2 className="text-[10px] leading-3 md:text-xs md:leading-[11.92px] lg:text-base lg:leading-6 font-medium"> */}
                            {nabtebEducationAmount
                              ? `₦${nabtebEducationAmount.toLocaleString()}.00`
                              : ""}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Payment Method
                          </h2>
                          <span className="">
                            Nigerian {nabtebPaymentResult.split(" (")[0]}
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
                            className={` ${
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
                            src={nabtebImageState}
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
                            <span
                              className={`${
                                isDarkMode ? "text-white" : "text-[#7C7C7C]"
                              }`}
                            >
                              {nabtebWalletBalance !== ""
                                ? nabtebWalletBalance
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
                    </div>

                    <button
                      className={`my-[5%] w-[90%] flex justify-center items-center mx-auto text-sm font-extrabold h-[50px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-base lg:text-sm lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                        CheckSufficiency
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary cursor-pointer"
                      }`}
                      onClick={() => {
                        confirmButton();
                        setInputPin("");
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
            {nabtebEducationConfirm && (
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
                        onClick={() => setNabtebEducationConfirm(false)}
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
                          <OtpInput
                            value={inputPin}
                            inputType={!isVisible ? "tel" : "password"}
                            onChange={setInputPin}
                            numInputs={4}
                            shouldAutoFocus={true}
                            inputStyle={{
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
                            handleNabtebSubmitPost();
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
                {/* <TransactFailedPopUp/> */}
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
                    } `}
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
                          navigate("/NabtebEducationPin");
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
                          {/* NABTEB PIN (₦100){" "} */}
                          {nabtebExamType} PIN (₦
                          {nabtebEducationAmount.toLocaleString()}){" "}
                        </span>
                        from your {nabtebPaymentResult.split(" (")[0]} to{" "}
                      </p>

                      <div className="flex mt-4 flex-col gap-2 lg:gap-4">
                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-[15px] font-medium">
                          <span
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Exam Type
                          </span>
                          <div className="flex gap-1 items-center">
                            <img
                              src={NabtebImg}
                              alt=""
                              className=" w-[12.02px] h-[12.02px] md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                            />

                            <span>{nabtebExamType}</span>
                          </div>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Quantity
                          </h2>
                          <span className="">
                            {nabtebQuantityResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Phone Number
                          </h2>
                          <span className="">{nabtebEducationPinPhone}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <h2
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Email
                          </h2>
                          <span className="">{nabtebEducationPinEmail}</span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <h2
                            className={` ${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Payment Method
                          </h2>
                          <span className="">
                            {nabtebPaymentResult.split(" (")[0]}
                          </span>
                        </div>

                        <div className="flex text-[10px] md:text-sm w-[90%] mx-auto items-center justify-between lg:text-[15px] font-medium">
                          <span
                            className={`${
                              isDarkMode ? "text-white" : "text-[#7C7C7C]"
                            }`}
                          >
                            Order Number
                          </span>
                          <span className="">{nabtebOrderId}</span>
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
                        to="/NabtebEducationPin"
                        onClick={() => {
                          nabtebTransactionSuccessClose();
                        }}
                        className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-6 lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                      >
                        Done
                      </Link>

                      <Link
                        to="/NabtebReceipt"
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

            {/* =========== RECEIPT ============*/}
            {/* {receipt && (
              <NabtebReceipt
                Exam="NABTEB"
                ExamType={nabtebExamType}
                ListOfResultCheckers={nabtebQuantityResult}
                PhoneNumber={nabtebEducationPinPhone}
                Email={nabtebEducationPinEmail}
                Amount={nabtebEducationAmount}
                walletBalance={nabtebWalletBalance}
                walletName={nabtebPaymentResult}
              />
            )} */}

            <button
              className={`mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-cente font-[400] text-xs md:text-[11px] lg:text-base text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center md:pt-2 pt-3 ${
                !nabtebExamType ||
                !nabtebQuantityResult ||
                !nabtebEducationPinPhone ||
                !nabtebEducationPinEmail ||
                !nabtebPaymentResult ||
                !nabtebEducationAmount
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={(e) => {
                nabtebProceed();
                e.preventDefault();
              }}
              disabled={
                !nabtebExamType ||
                !nabtebQuantityResult ||
                !nabtebEducationPinPhone ||
                !nabtebEducationPinEmail ||
                !nabtebPaymentResult ||
                !nabtebEducationAmount
              }
            >
              Proceed
            </button>
          </div>
        </div>
        {nabtebFailedTransaction && (
          <Modal>
            <div
              className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto overflow-hidden ${
                isDarkMode
                  ? "bg-black text-white border rounded-[10px] border-white"
                  : "bg-white text-black rounded-lg"
              } `}
            >
              <div className="flex justify-between w-full items-center p-4">
                <img className=" w-6 h-6" src={AremxyPlugIcon} alt="" />

                <img
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setNabtebFailedTransaction(false);
                    setInputPin("");
                    handleResetFields();
                    setPurchaseEduErrorType("");
                    navigate("/NabtebEducationPin");
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

                <p
                 className="text-sm text-red-500 font-[600] mb-8"
                >
                  {purchaseEduErrorType}
                </p>
                <div className="flex gap-[10px] justify-between w-full px-[10px]">
                  <Link
                    to="/NabtebEducationPin"
                    onClick={() => {
                      setNabtebFailedTransaction(false);
                      setInputPin("");
                      // window.location.reload();
                      handleResetFields();
                      setPurchaseEduErrorType("");
                    }}
                    className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2 text-white rounded-md font-medium"
                  >
                    Done
                  </Link>
                  {/* RECEIPT FAILED */}
                  <Link
                    to="/NabtebFailedReceipt"
                    onClick={handleFailedData}
                    style={{
                      boxShadow: "0px 0px 2.0368096828460693px 0px #00000040",
                    }}
                    className={`w-[50%] max-w-xs mx-auto border py-2  rounded-md font-medium transition-colors ${
                      isDarkMode ? "bg-black hover:bg-slate-800 " : "bg-white"
                    }`}
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
      {sessionModal && <InternalLoginSession setExpiredSessionLogin={setSessionModal} />}
      {sessionModal === false && restrictUser && (
        <RestrictionPopUp/>
      )}
    </DashBoardLayout>
  );
}
