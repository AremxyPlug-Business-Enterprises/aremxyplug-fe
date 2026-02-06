import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../../../Context";
import { useState } from "react";
import styles from "../TransferComponent/transfer.module.css";
import style from "../../../AirTimePage/AirtimeVtu.module.css";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg";
import arrow from "../ElectricitySubscription/Electricity-sub-images/arrow-square-right.png";
import logo from "../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg";
import arrowDown from "../ElectricitySubscription/Electricity-sub-images/arrow-down.png";
import arrowRight from "../../../EducationPins/imagesEducation/educationArrowRight.svg";
import nig from "../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png";
// import { KedcoReceipt } from "./kedcoReceipt";
import { useNavigate } from "react-router-dom";

import Joi from "joi";
import { Modal } from "../../../Screens/Modal/Modal";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BalanceLoading, Loader } from "../../../Loader/Loader";
import { GetLocalStorage } from "../../../LocalStorage/LocalStorage";

import {
  GetFunction,
  InternalLoginSession,
  RestrictionPopUp,
  PostFunction,
  VerifyTransPin,
} from "../../../ApiCollection.jsx/ApiBuck";
import { validateNigerianNumberByNetwork } from "./AEDC";

const KEDCO = () => {
  const navigate = useNavigate();
  const {
    isDarkMode,
    toggleSideBar,
    kedcoMeterNumber,
    setKedcoMeterNumber,
    showList,
    kedcoVerifiedName,
    setKedcoVerifiedName,
    setShowList,
    setSelected,
    selected,
    // kedcoCountry,
    setKedcoCountry,
    globalTransferErrors,
    kedcoPhoneNumber,
    setKedcoPhoneNumber,
    kedcoEmail,
    setKedcoEmail,
    kedcoAmount,
    setKedcoAmount,
    toggleVisibility,
    isVisible,
    setKedcoBillGenerate,
    // kedcoServiceID,
    setKedcoServiceID,
    kedcoFlag,
    setKedcoFlag,
    kedcoDiscoType,
    setKedcoDiscoType,
    selectedKedcoMeterType,
    setSelectedKedcoMeterType,
    setKedcoOrderId,
    setKedcoTransactionId,
    setKedcoShowDescription,
    setKedcoFullName,
    setKedcoTransactionProduct,
    kedcoFetchedResponse,
    setKedcoFetchedResponse,
    kedcoWalletBalance,
    setKedcoWalletBalance,
    kedcoPaymentResult,
    setKedcoPaymentResult,
    setNetworkIssue,
    newBalance,
    setNewBalance,
    authenticationOpen,
    purchaseElectricityErrorType,
    setPurchaseElectricityErrorType,
  } = useContext(ContextProvider);
  const Data = GetLocalStorage()
  const [showProductList, setShowProductList] = useState(false);
  const [restrictUser, setRestrictUser] =  useState(false)
  // const [showDescription, setShowDescription] = useState(false);
  // const [orderId, setOrderId] = useState(false);
  // const [transactionId, setTransactionId] = useState(false);

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
    setSelectedKedcoMeterType(productName);
    // setSelectedOption("");
    setShowProductList(false);
    // setShowOptionList(false);
  };
  const [passDataBalance, setPassDataBalance] = useState({});
   const [balanceLoader, setBalanceLoader] = useState(false)
const GetBalance = async () => {

    const SuccessHandler = (response) => {
    setPassDataBalance(response)
    };
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
         if(sessionModal) return;
         if(!sessionModal) return setSessionModal(true)
      }
    };
    await GetFunction(
      "balance",
      setBalanceLoader,
      SuccessHandler,
      FailedHandler,
      setPassDataBalance,
      setNetworkIssue
    );
  };
  // get the balance on entering the page
  useEffect(() => {
    if(Data?.ConfirmAcc === "true"){
   
      GetBalance();
      if (GetBalance) {
        setNewBalance(
          passDataBalance?.data?.data
            ? passDataBalance?.data?.data?.data?.balance
            : ""
        );
      
    }
  }else{
    setRestrictUser(true)
  }
    // handleResetFields();
    // eslint-disable-next-line
  }, []);

  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";
  const updateBalanceToNumber = Number(updateBalance);
  const newBalanceToNumber = Number(newBalance);
  const otherCurrencyBalance = 0.0;

  const countryList = [
    {
      id: 1,
      name: "NGN Wallet",
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
      code: "Nigerian NGN Wallet",
      flag: require("../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "USD Wallet. ",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })})`,
      code: "USD",
      flag: require("../ElectricitySubscription/Electricity-sub-images/americaFlag.png"),
    },
    {
      id: 3,
      name: " GBP Wallet. ",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
      })})`,
      code: "GBP",
      flag: require("../ElectricitySubscription/Electricity-sub-images/ukFlag.png"),
    },
    {
      id: 4,
      name: "EUR Wallet. ",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-EU", {
        style: "currency",
        currency: "EUR",
      })})`,
      code: "EUR ",
      flag: require("../ElectricitySubscription/Electricity-sub-images/europeanFlag.png"),
    },
    {
      id: 5,
      name: "AUD Wallet. ",
      balance: `(${otherCurrencyBalance?.toLocaleString("en", {
        style: "currency",
        currency: "AUD",
      })})`,
      code: "AUD",
      flag: require("../ElectricitySubscription/Electricity-sub-images/australiaFlag.png"),
    },
    {
      id: 6,
      name: "KES Wallet. ",
      balance: `(${otherCurrencyBalance?.toLocaleString("en-KE", {
        style: "currency",
        currency: "KES",
      })})`,
      code: "KES",
      flag: require("../ElectricitySubscription/Electricity-sub-images/kenyaFlag.png"),
    },
  ];

  const [errors, setErrors] = useState({});
  const [proceed, setProceed] = useState(false);
  const [amountError, setAmountError] = useState("");

  const handleProceed = (e) => {
    // e.preventDefault();

    const { error } = schema.validate({
      kedcoPhoneNumber,
      kedcoEmail,
      kedcoMeterNumber,
    });

    const amount = Number(kedcoAmount);
    // validating the network numbers
    const network = validateNigerianNumberByNetwork(kedcoPhoneNumber);
    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (amount < 1000) {
      setAmountError("Amount must be at least ₦1000");
    } else if (network === "Unknown network") {
      setErrors({
        kedcoPhoneNumber:
          "Invalid phone number. Please enter a valid Nigerian network number.",
      });
    } else {
      setProceed(true);
      setErrors({});
      setAmountError("");
    }
  };

  const schema = Joi.object({
    kedcoPhoneNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    kedcoMeterNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Invalid meter number",
      }),
    kedcoEmail: Joi.string()
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

  const handleCountryClick = (name, flag, id, code, balance) => {
    if (id !== 1 && code !== "Nigerian NGN Wallet") return;
    setKedcoFlag(flag);
    setShowList(false);
    setKedcoCountry(name);
    setSelected(true);
    setKedcoWalletBalance(balance);
    setKedcoPaymentResult(`${name} ${balance}`);
    // setCountryCode(code);
    // setCurrencyAvailable(id !== 1);
  };
  // const handleVerifiedName = (event) => {
  //   const newValue = event.target.value;
  //   setKedcoVerifiedName(newValue);
  // };
  // const handleMeterNumber = (event) => {
  //   const newValue = event.target.value;
  //   setKedcoMeterNumber(newValue);
  // };
  const handlePhoneNumber = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/\D/g, "").slice(0, 11);
    setKedcoPhoneNumber(newValue);
  };
  const handleEmail = (event) => {
    const newValue = event.target.value;
    setKedcoEmail(newValue);
  };
  const handleKedcoAmount = (event) => {
    const newValue = event.target.value;
    // setIkedcamount(newValue);
    if (newValue.startsWith("")) {
      setKedcoAmount(newValue);
    } else {
      setKedcoAmount(`₦${newValue}`);
    }
  };
  const [successPopup, setSuccessPopup] = useState(false);
  const [failedPopup, setFailedPopup] = useState(false);
  const [kedcoCustomerName, setKedcoCustomerName] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFailedMeterNumber, setIsFailedMeterNumber] = useState(false);
  const [meterNumberLoading, setMeterNumberLoading] = useState(false);

  let passedMeterName;

  const verifyMeterNumber = async (meterNumber) => {
    async function HandleMeterNumber() {
      const path = "bills/verify";
      if (
        meterNumber?.length === 13 &&
        meterNumber !== "" &&
        meterNumber !== null &&
        meterNumber !== undefined
      ) {
        const body = {
          disco_type: "kano-electric",
          meter_no: meterNumber,
          meter_type: selectedKedcoMeterType.toLowerCase(),
        };
        const SuccessHandler = () => {
          setIsFailedMeterNumber(false);
          function handleReceivedMeterData() {
            if (kedcoFetchedResponse?.data?.name) {
              setKedcoCustomerName(kedcoFetchedResponse?.data?.name);
            } else {
              setKedcoCustomerName("");
            }
          }
          handleReceivedMeterData();
        };
        const FailedHandler = async (ErrorType) => {
          if (ErrorType === "Bad request") {
            setIsFailedMeterNumber(true);
          } else if (ErrorType === "unauthorised") {
           if(sessionModal) return;
           if(!sessionModal) return setSessionModal(true)
          }
        };

        await PostFunction(
          path,
          setMeterNumberLoading,
          body,
          SuccessHandler,
          FailedHandler,
          setKedcoFetchedResponse,
          setNetworkIssue
        );
      }
    }
    HandleMeterNumber();
    passedMeterName = kedcoFetchedResponse
      ? kedcoFetchedResponse?.data?.name
      : "";
  };

  const handleKedcoMeterNumber = async (e) => {
    const inputValue = e.target.value;
    setKedcoMeterNumber(inputValue);
    await verifyMeterNumber(inputValue);
  };

  const handleVerifiedName =
    kedcoMeterNumber?.length === 13 &&
    isFailedMeterNumber === false &&
    verifyMeterNumber &&
    kedcoCustomerName === ""
      ? passedMeterName
      : kedcoCustomerName;

  const verifyPin = async () => {
    async function ElectricityHandler() {
      const path = "bills/electric-bill";
      const parsedAmount = parseInt(kedcoAmount, 10);
      const data = {
        meter_type: selectedKedcoMeterType,
        meter_no: kedcoMeterNumber,
        phone: kedcoPhoneNumber, // Use the parsed integer value
        email: kedcoEmail,
        amount: parsedAmount,
        disco_type: "kano-electric",
      };
      const SuccessHandler = (response) => {
        setInputPinPopUp(false);
        setKedcoDiscoType(response?.data?.data?.data?.disco_type);
        setSuccessPopup(true);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "Bad request") {
          setInputPinPopUp(false);
          setFailedPopup(true);
        } else if (ErrorType === "unauthorised") {
         if(sessionModal) return;
         if(!sessionModal) return setSessionModal(true)
        } else if (ErrorType === "Server error") {
          setPurchaseElectricityErrorType("Server Error: Purchase Failed");
          setFailedPopup(true);
          setInputPinPopUp(false);
        } else if (
          ErrorType === "Network error" ||
          ErrorType === "User error"
        ) {
          setPurchaseElectricityErrorType("Network Error : Purchase Failed");
          setFailedPopup(true);
          setInputPinPopUp(false);
        } else {
          setPurchaseElectricityErrorType("An Unexpected error has occured");
        }
      };

      await PostFunction(
        path,
        setLoading,
        data,
        SuccessHandler,
        FailedHandler,
        setKedcoFetchedResponse,
        setNetworkIssue
      );
    }
    //Kindly uncomment the code below after implementing the errorMessage
    //rather than the pinfailed and pinSucess state
    //Kindly also remove the setPinFailed state as there
    //is no longer any use for it
    const setPinFailed = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await VerifyTransPin(
          inputPin,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              if(sessionModal) return;
            if(!sessionModal) return   setSessionModal(true);
            } else if (
              ErrorType === "Network error" ||
              ErrorType === "User error"
            ) {
              return setNetworkIssue(true)
            } else if (ErrorType === "Server error") {
              alert(
                "The server is currently experiencing a downtime, try again some other time."
              );
            } else {
              alert("An unexpected has occured try again some other time.");
            }
          },
          setLoading,
          setErrorMessage,
          ElectricityHandler
        );
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        return setNetworkIssue(true)
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
      setLoading,
      setErrorMessage,
      ElectricityHandler,
      setNetworkIssue
    );
  };

  // console.log(fetchedResponse);

  function handleReceivedData() {
    setLoading(true);
    const receivedData = () => {
      setKedcoBillGenerate(kedcoFetchedResponse?.data?.bill_generated);
      setKedcoOrderId(kedcoFetchedResponse?.data?.order_id);
      setKedcoTransactionId(kedcoFetchedResponse?.data?.transaction_id);
      setKedcoServiceID(kedcoFetchedResponse?.data?.RequestID);
      setKedcoShowDescription(
        kedcoFetchedResponse?.data?.transaction_description
      );
      setKedcoDiscoType(kedcoFetchedResponse?.data?.disco_type);
      setKedcoVerifiedName(kedcoFetchedResponse?.data?.verified_name);
      setKedcoFullName(kedcoFetchedResponse?.data?.full_name);
      setKedcoTransactionProduct(
        kedcoFetchedResponse?.data?.transaction_product
      );
    };
    receivedData();
    if (receivedData) {
      setLoading(false);
      setInputPin("");
    }
  }
  function handleSuccessData() {
    setSuccessPopup(false);
    handleReceivedData();
    navigate("/kedco-receipt");
  }

  function handleFailedData() {
    // setLoading(true);
    setFailedPopup(false);
    handleReceivedData();
    navigate("/kedco-receipt-failed");
    // setLoading(false);
  }

  function handleResetFields() {
    setSelectedKedcoMeterType("");
    setKedcoMeterNumber("");
    setKedcoVerifiedName("");
    setKedcoPhoneNumber("");
    setKedcoEmail("");
    setKedcoAmount("");
    setKedcoCountry("");
    setKedcoFlag("");
    setKedcoBillGenerate("");
    setKedcoOrderId("");
    setKedcoTransactionId("");
    setKedcoServiceID("");
    setKedcoShowDescription("");
  }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance ? newBalance : updateBalance);
  let aedcAmountToNumber = Number(kedcoAmount);
  let CheckSufficiency = aedcAmountToNumber > balanceStringToNum;
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

  // console.log(fetchedResponse.data)
  // console.log(fetchedResponse.data.description)
  // console.log(fetchedResponse.data.request_id)
  // console.log(fetchedResponse.data.transaction_id)
  // console.log(fetchedResponse.data.order_id)

  // const handleSuccess = async () => {
  //   async function buyKEDCO(meter_type, meter_no, phone, email, amount) {
  //     // const url = 'https://aremxyplug.onrender.com/api/v1/electric-bill';

  //     const parsedAmount = parseInt(amount, 10);

  // const data = {
  //   meter_type: selectedNetworkProduct,
  //   meter_no: meterNumber,
  //   phone: phoneNumber, // Use the parsed integer value
  //   email: ikedcEmail,
  //   amount: parsedAmount, // Use the parsed integer value
  //   disco_type: "kano-electric",
  // };

  //     console.log(data);

  // const path = "electric-bill";

  // const ElectricityHandler = () => {
  //   PostFunction(
  //     path,
  //     setLoading,
  //     data,
  //     functionAtSuccess,
  //     functionAtFailed
  //   );
  // };

  //     try {
  //       // const response = await axiosInstance.post(path, data);
  //       const response = await verifyPin;
  //       // if (pinFailed && errorMessage) return;
  //       console.log(response.data);
  //       console.log(response.status);
  //       setSelectedNetworkProduct(response.data.data.meter_type);
  // setMeterNumber(response.data.data.meter_number);
  // setPhoneNumber(response.data.data.phone);
  // setEmail(response.data.data.email);
  // setIkedcamount(response.data.data.amount);
  // setBillGenerate(response.data.data.bill_generated);
  // setOrderId(response.data.data.order_id);
  // setTransactionId(response.data.data.transaction_id);
  // setServiceID(response.data.data.disco_type);
  // setShowDescription(response.data.data.description);
  //       return { statusCode: response.status, data: response.data.data };
  //       // console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //       return { statusCode: error.response.status, data: null };
  //     }
  //   }

  //   // Usage
  //   const response = await buyKEDCO(
  //     selectedNetworkProduct,
  //     meterNumber,
  //     phoneNumber,
  //     ikedcEmail,
  //     ikedcamount
  //   );

  //   setInputPinPopUp(false);
  //   if (response.statusCode === 200) {
  //     // Success response
  //     setSuccessPopup(true); // Show success popup
  //   } else {
  //     // Failure response
  //     setFailedPopup(true); // Show failure popup
  //   }
  // };

  const [InputPinPopUp, setInputPinPopUp] = useState(false);
  const [inputPin, setInputPin] = useState("");

  const handle = () => {
    setInputPinPopUp(false);
    setProceed(true);
  };

  const handleSwitch = () => {
    setInputPinPopUp(true);
    setProceed(false);
    setInputPin("");
  };

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
          <div className="flex flex-row w-full pt-[10px] min-h-[91px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
            <div className="flex flex-col gap-2  ">
              <div className="text-[11px] font-semibold  pt-[10px] md:text-xs md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
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
              />
            </div>
          </div>
          <div
            className={`flex lg:mt-[20px] text-xs lg:text-base font-semibold pt-[30px] items-center ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            }`}
          >
            <div className="text-[9px] md:text-xs lg:text-base">Recharge</div>
            <div>
              <img className="w-[35px] lg:w-[3.5rem] ml-1" src={logo} alt="" />
            </div>
            <div className="text-[9px] md:text-xs lg:text-base ml-1">
              KEDCO-Kano Electric Meter Instantly
            </div>
            <div className=" ml-1">
              <img
                className="w-3.5 sm:w-[18px] lg:w-[24px]"
                src={arrow}
                alt=""
              />
            </div>
          </div>
          <div className="lg:flex lg:items-start ">
            <div
              className={` mt-[10px] lg:mt-[15px] border border-[] from-[#E2F3FF] font-bold text-[10px] lg:text-base lg:rounded-sm lg:py-2 text-center lg:px-3 py-1 to-[#FFF]
             ${
               isDarkMode
                 ? "bg-black text-white border border-white"
                 : "bg-gradient-to-b"
             }`}
            >
              Kano Electric Covers: Kano State | Katsina State | Jigawa State.
            </div>
          </div>

          <div
            className={`text-sm lg:text-base font-semibold mt-[20px] ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            } `}
          >
            Select <span className="text-[#04177F] font-bold">Prepaid </span>
            MeterType if you load token on your meter.
          </div>
          <div
            className={`text-sm lg:text-base font-semibold mt-[10px] ${
              isDarkMode ? "text-white" : "text-[#7E7E7E]"
            } `}
          >
            Select <span className="text-[#04177F] font-bold">Postpaid </span>
            MeterType if you get a bill at the end of the month.
          </div>

          {/* input sections */}
          <div className="flex flex-col gap-5 md:gap-0 mt-[20px] sm:mt-0">
            {/* container for the first two input */}
            <div className=" w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
              {/* First Step Select Meter Type */}
              <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                {/* header */}
                <label
                  className={`text-sm lg:text-base md:text-[13px]  md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Select Meter Type
                </label>
                <div
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center  ${
                    isDarkMode
                      ? "bg-black hover:bg-gray-800 text-white border border-white"
                      : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
                  }`}
                  onClick={() => {
                    setShowProductList(!showProductList);
                    setShowList(false);
                  }}
                >
                  {selectedKedcoMeterType}
                  <img
                    src={arrowDown}
                    alt=""
                    className="decdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                  />
                </div>
                {showProductList && (
                  <div
                    className={`
                    ${
                      isDarkMode
                        ? "text-white bg-black  "
                        : " text-[#7C7C7C] rounded bg-white hover:bg-[#EDEAEA]"
                    } flex flex-col absolute lg:top-[80px] md:top-[60px] top-[74px] transition-colors duration-300 z-[2] w-full`}
                  >
                    {productList?.map((item) => (
                      <div
                        key={item.name}
                        className={`py-5 md:py-[14px] font-semibold cursor-pointer lg:text-base lg:leading-[20.8px] w-full md:rounded-[0px] text-[14px] leading-[10.4px] pl-2.5 md:text-[13.227px] transition-colors duration-300 md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                        ${
                          isDarkMode
                            ? "bg-black text-white hover:bg-slate-800 border border-white"
                            : "text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                        }
                        ${selectedKedcoMeterType === item.name ? "" : ""}
                        
                        `}
                        onClick={() => handleSelectProduct(item.name)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity input Two / RightSide */}
              <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2 ">
                <label
                  className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Meter Number
                </label>
                <input
                  type="text"
                  placeholder="XXXXXXXXXXXXX"
                  value={kedcoMeterNumber}
                  // onChange={handleMeterNumber}
                  maxLength={13}
                  onInput={(e) => {
                    const numericValue = e.target.value.replace(/\D/g, "");
                    e.target.value = numericValue;
                    if (numericValue?.length === 13) {
                      e.target.style.border = "1px solid green";
                    } else {
                      e.target.style.border = "1px solid red";
                    }
                    setIsFailedMeterNumber(false);
                    setErrors((prev) => ({ ...prev, kedcoMeterNumber: "" }));
                  }}
                  onChange={handleKedcoMeterNumber}
                  onClick={() => setShowProductList(false)}
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                    }`}
                />

                {errors.kedcoMeterNumber && (
                  <div className="text-xs absolute left-0 -bottom-[1.3rem] text-red-500 italic md:text-sm">
                    {errors.kedcoMeterNumber}
                  </div>
                )}
                {!errors.kedcoMeterNumber && isFailedMeterNumber && (
                  <div className="text-xs absolute left-0 -bottom-[1.3rem] text-red-500 italic md:text-sm">
                    Invalid meter number
                  </div>
                )}
              </div>
            </div>

            {/* container for Verified Name and Phone Number */}
            <div className=" w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4 ">
              {/* LeftSide */}
              <div className=" flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                <label
                  className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Verified Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Input Meter Number to Verify Name"
                    value={handleVerifiedName}
                    // onChange={handleVerifiedName}
                    readOnly
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] cursor-not-allowed self-center
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                    }`}
                  />
                  {meterNumberLoading && (
                    <p className="left-4 absolute top-5 md:top-3 lg:top-4">
                      <BalanceLoading />
                    </p>
                  )}
                </div>
              </div>

              {/* right-side */}
              <div className=" container-phone relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                <label
                  className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="XXX XXXX XXXX"
                  value={kedcoPhoneNumber}
                  onInput={(e) => {
                    if (kedcoPhoneNumber?.length === 10) {
                      e.target.style.border = "1px solid green";
                    } else if (e.target.value?.length < 10) {
                      e.target.style.border = "1px solid red";
                    }
                    setErrors((prev) => ({ ...prev, kedcoPhoneNumber: "" }));
                  }}
                  // onBlur={(e) => {
                  //   isDarkMode
                  //     ? (e.target.style.border = "1px solid white")
                  //     : (e.target.style.border = "1px solid #9C9C9C");
                  // }}
                  onChange={handlePhoneNumber}
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-normal text-sm leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center  focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] self-center 
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                />

                {errors.kedcoPhoneNumber && (
                  <div className="text-xs absolute left-0 -bottom-4 sm:-bottom-[1.5rem] leading-3 text-red-500 italic lg:text-sm">
                    {errors.kedcoPhoneNumber}
                  </div>
                )}
              </div>
            </div>
            {/* Conatiner for Email and Amount */}
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
              {/* Leftside */}
              <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                {/* header */}
                <label
                  className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  value={kedcoEmail}
                  onChange={handleEmail}
                  onInput={() => {
                    setErrors((prev) => ({ ...prev, kedcoEmail: "" }));
                  }}
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 text-sm flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center focus:outline-0 outline-0 border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                />

                {errors.kedcoEmail && (
                  <div className="text-xs absolute left-0 -bottom-[1.3rem] text-red-500 italic md:text-sm">
                    {errors.kedcoEmail}
                  </div>
                )}
              </div>
              {/* amount */}
              <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                <label
                  className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white " : "text-[#7E7E7E]"
                  }`}
                >
                  Amount
                </label>
                <div
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 text-sm flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center   
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                >
                  <span className="mt-0.5">&#8358;</span>
                  <input
                    type="number"
                    name="kedcoamount"
                    value={kedcoAmount}
                    onChange={handleKedcoAmount}
                    onInput={() => {
                      setAmountError("");
                    }}
                    placeholder="Minimum of ₦1000"
                    className={`w-full ml-0.5 placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] focus:outline-none
                 ${isDarkMode ? "text-white bg-black " : "text-[#7E7E7E]"}`}
                  />
                </div>
                {amountError && (
                  <p className="text-xs absolute left-0 -bottom-[1.3rem] text-red-500 italic md:text-sm">
                    {amountError}
                  </p>
                )}
              </div>
            </div>

            {/* Conatiner for Payment Method */}
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-[22px] md:my-2 lg:my-4">
              <div className="flex flex-col gap-[3px] lg:gap-[5px] relative w-full md:w-1/2">
                <label
                  className={` text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                    isDarkMode ? "text-white" : "text-[#7E7E7E]"
                  }`}
                >
                  Payment Method
                </label>
                <div
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-5 md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center cursor-pointer justify-between border lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] ${
                    isDarkMode
                      ? "bg-black hover:bg-gray-800 text-white border-white"
                      : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                  }`}
                  onClick={() => {
                    setShowProductList(false);
                    setShowList(!showList);
                  }}
                >
                  <p></p>
                  {selected ? (
                    <div
                      className={`flex w-full justify-between items-center
                    ${isDarkMode ? "text-white " : "text-[#7E7E7E]"}`}
                    >
                      <p
                        className={`text-xs lg:text-sm
                    ${isDarkMode ? "text-white " : "text-[#7E7E7E]"}`}
                      >
                        {/* font-extrabold */}
                        {kedcoPaymentResult}
                      </p>
                      <img
                        className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                        src={
                          kedcoFlag
                            ? kedcoFlag
                            : "./Images/dashboardImages/arrow-down2.png"
                        }
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
                    className={`text-sm text-red-500 italic lg:text-sm
                  ${isDarkMode ? "text-white bg-black" : ""}`}
                  >
                    {globalTransferErrors.country}
                  </div>
                )}
                {showList && (
                  <div
                    className={`
                    ${
                      isDarkMode
                        ? "bg-black text-white divide-y divide-white  border-white"
                        : "text-[#7C7C7C] rounded bg-white border-gray-100"
                    }
                    ${
                      styles.countryDropDown
                    }  absolute lg:top-[85px] md:top-[60px] top-[74px] z-[5] border flex flex-col w-full cursor-pointer`}
                  >
                    {countryList?.map((country) => (
                      <div
                        className={`py-[18px] md:py-2 lg:py-[15px] pl-[10px] font-normal flex items-center gap-[5px] text-xs md:text-sm lg:text-base shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] transition-all duration-300
                       ${
                         isDarkMode ? "text-white bg-black " : "text-[#7E7E7E]"
                       } ${
                          country.code === "Nigerian NGN Wallet"
                            ? "cursor-pointer hover:bg-[#EDEAEA]"
                            : "cursor-not-allowed opacity-50"
                        }
                      ${
                        isDarkMode && country.code === "Nigerian NGN Wallet"
                          ? "hover:bg-slate-800"
                          : ""
                      }`}
                        key={country.id}
                        onClick={() =>
                          handleCountryClick(
                            country.name,
                            country.flag,
                            country.id,
                            country.code,
                            country.balance
                          )
                        }
                      >
                        <img
                          className="md:h-[29.27px]  h-[14.27px]"
                          src={country.flag}
                          alt="/"
                        />
                         {country.name} {' '}  {balanceLoader === true && country.id === 1 ? <BalanceLoading/> :  country.balance}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2"></div>
            </div>
          </div>
          <div
            onClick={handleProceed}
            className={`mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-cente font-[400] text-xs md:text-[11px] lg:text-base text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center md:pt-2 pt-3
            ${
              !kedcoMeterNumber ||
              !kedcoCustomerName ||
              !kedcoPhoneNumber ||
              !kedcoEmail ||
              !selectedKedcoMeterType ||
              !selected ||
              !kedcoAmount
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary cursor-pointer"
            }`}
            disabled={
              !kedcoMeterNumber ||
              !kedcoCustomerName ||
              !kedcoPhoneNumber ||
              !kedcoEmail ||
              !selectedKedcoMeterType ||
              !selected ||
              !kedcoAmount
            }
          >
            Proceed
          </div>
        </div>
        <div className="mt-[38rem] md:mt-[15rem]">
          <div className={style.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={style.btnContact}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Confirmation Transaction Popup */}
      {proceed && (
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
              <div className="flex justify-end pr-2 lg:py-[10px] py-[7px]">
                <img
                  onClick={() => setProceed(false)}
                  className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
              <div className="mx-auto">
                <h2 className="text-xs font-extrabold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-base">
                  Confirm Transaction
                </h2>
                <p
                  className={`text-[10px] font-semibold text-center mb-2 md:text-xs lg:text-sm mx-2 ${
                    isDarkMode ? "text-white" : "text-[#000]"
                  }`}
                >
                  You are about to purchase{" "}
                  <span
                    className={`font-extrabold text-[10px] md:text-base lg:text-xs ${
                      isDarkMode ? "text-white" : "text-[#000]"
                    }`}
                  >
                    {selectedKedcoMeterType} Meter (&#8358;
                    {Number(kedcoAmount).toLocaleString()}){" "}
                  </span>
                  {/* Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-base lg:text-xs">
                &#8358;{}
              </span> */}
                  from your {kedcoPaymentResult.split(" (")[0]} to
                </p>

                <div className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7">
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base items-center">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Disco Type
                    </p>
                    <div className="flex items-center gap-1 ">
                      <img className="w-[40px]" src={logo} alt="" />
                      <span>Kano-KEDCO</span>
                    </div>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Meter Type
                    </p>
                    <span>{selectedKedcoMeterType} </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Meter Number
                    </p>
                    <span>{kedcoMeterNumber} </span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Verified Name
                    </p>
                    <span>{kedcoCustomerName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Phone Number
                    </p>
                    <span>{kedcoPhoneNumber}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Email
                    </p>
                    <span>{kedcoEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Amount
                    </p>
                    <span>
                      {kedcoAmount
                        ? `₦${Number(kedcoAmount).toLocaleString()}.00`
                        : "₦"}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Payment Method
                    </p>
                    <span>Nigerian {kedcoPaymentResult.split(" (")[0]}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Points Earned
                    </p>
                    <span className="text-[#00AA48]">{pointsEarned}</span>
                  </div>
                </div>
              </div>

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
                      src={nig}
                      alt="/"
                    />

                    <div className="flex gap-[10px] items-center font-medium">
                      <p className="text-xs md:text-sm leading-[20px] lg:leading-[22px] lg:text-base ">
                        Available Balance
                      </p>
                      <span
                        className={`${
                          isDarkMode ? "text-white" : "text-[#7C7C7C]"
                        }`}
                      >
                        {kedcoWalletBalance !== "" ? kedcoWalletBalance : "₦"}
                      </span>
                    </div>
                  </div>

                  <span className="text-gray-500 text-sm font-bold leading-[20px] lg:text-base lg:leading-[22px] text-left">
                    {balanceStatus}
                  </span>
                </div>
                <img
                  className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                  // src="./Images/dashboardImages/arrowright.png"
                  src={arrowRight}
                  alt="/"
                />
              </div>
              <button
                onClick={handleSwitch}
                disabled={CheckSufficiency}
                className={`my-[5%] w-[90%] flex justify-center items-center mx-auto text-sm font-extrabold h-[50px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-base lg:text-sm lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                  CheckSufficiency
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary cursor-pointer"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Input pin pop up */}
      {InputPinPopUp && (
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
                  onClick={handle}
                  className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
              <div className="flex flex-col w-full justify-center py-[15px] lg:py-[0px] h-[100%] gap-[15px] ">
                <p className="font-extrabold text-xs leading-[16px] pb-[20px] md:text-[10px] lg:text-base text-center">
                  Input PIN to complete transaction
                </p>
                <div className="flex flex-col items-center lg:gap-[0px] gap-[5px] font-extrabold">
                  <div className="flex items-center gap-2.5">
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
                    <div className="text-[#0003] " onClick={toggleVisibility}>
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
                    disabled={inputPin.length !== 4 ? true : false}
                    onClick={verifyPin}
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

      {/* loading */}
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}

      {/* purchase Successful Popup */}
      {successPopup && (
        <Modal>
          <div className="w-full flex justify-center h-full py-[30px] px-[15px] lg:items-center items-end">
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
                      setSuccessPopup(false);
                      handleResetFields();
                    }}
                    className="w-[15px] h-[15px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />
                </div>

                <img
                  onClick={() => {
                    setSuccessPopup(false);
                    setInputPin("");
                    handleResetFields();
                    navigate("/kedco");
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
                  You have successfully Purchased{" "}
                  <span
                    className={`font-bold text-[10px] md:text-base lg:text-sm ${
                      isDarkMode ? "text-white" : "text-[#000]"
                    }`}
                  >
                    Kano {selectedKedcoMeterType} Meter (&#8358;
                    {Number(kedcoAmount).toLocaleString()}){" "}
                  </span>
                  from your {kedcoPaymentResult.split(" (")[0]} to
                </p>

                <div className="flex mt-4 flex-col gap-2 lg:gap-4">
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center lg:text-[15px] font-medium">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Disco Type
                    </p>
                    <div className="flex items-center gap-1 ">
                      <img className="w-[30px]" src={logo} alt="" />
                      <span className="capitalize">{kedcoDiscoType}</span>
                    </div>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Meter Type
                    </p>
                    <span>{selectedKedcoMeterType} </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Meter Number
                    </p>
                    <span>{kedcoMeterNumber} </span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Verified Name
                    </p>
                    <span>{kedcoVerifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Phone Number
                    </p>
                    <span>{kedcoPhoneNumber}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Email
                    </p>
                    <span>{kedcoEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Amount
                    </p>
                    <span>
                      {kedcoAmount
                        ? `₦${Number(kedcoAmount).toLocaleString()}.00`
                        : "₦"}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Payment Method
                    </p>
                    <span>Nigerian {kedcoPaymentResult.split(" (")[0]}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-[15px]">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Points Earned
                    </p>
                    <span className="text-[#2ED173]">{pointsEarned}</span>
                  </div>
                </div>
              </div>

              {/* mx-10 */}
              <div
                className={`bg-[#F2FAFF] w-[90%] mx-auto p-[8px] my-5 flex justify-between items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px] ${
                  isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
                }`}
              >
                <p className="text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] lg:text-sm  font-semibold">
                  The electricity bills / token purchase has been generated
                  successfully. Please kindly check receipt to confirm the bills
                  / token. You can contact us for any further assistance.
                </p>
              </div>
              <div className="flex w-full justify-center items-center gap-[10px] pb-4 md:gap-[8.59px] lg:gap-[15px] md:pb-2">
                <button
                  onClick={() => {
                    setSuccessPopup(false);
                    handleResetFields();
                    navigate("/kedco");
                  }}
                  className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-6 lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Done
                </button>

                <button
                  onClick={handleSuccessData}
                  className={`border w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-xs md:text-xs lg:text-base font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Receipt
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* purchase Failed Popup */}
      {failedPopup && (
        <Modal>
          <div
            className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto overflow-hidden ${
              isDarkMode
                ? "bg-black text-white border rounded-[10px] border-white"
                : "bg-white text-black rounded-lg"
            }`}
          >
            <div className="flex justify-between w-full items-center p-4">
              <img
                onClick={() => {
                  setFailedPopup(false);
                  setInputPin("");
                  handleResetFields();
                  setPurchaseElectricityErrorType("");
                  navigate("/kedco");
                }}
                // className="w-[18px] h-[18px] md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
                className="w-6 h-6"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => {
                  setSuccessPopup(false);
                  handleResetFields();
                }}
                className="w-[18px] h-[18px] md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-1 bg-[#04177f] border-none" />
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold my-4">
                Transaction Failed
              </h2>
              <img
                className="w-32 h-32 mx-auto my-6"
                src="./Images/failed.png"
                alt="/"
              />
              <p
                className={`text-sm mb-8 ${
                  isDarkMode ? "text-white" : "text-gray-600"
                }`}
              >
                {purchaseElectricityErrorType}
              </p>
              <div className="flex gap-[10px] justify-between w-full px-[10px]">
                <button
                  onClick={() => {
                    setFailedPopup(false);
                    setInputPin("");
                    handleResetFields();
                    setPurchaseElectricityErrorType("");
                    navigate("/kedco");
                  }}
                  className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2 text-white rounded-md font-medium"
                >
                  Done
                </button>

                <button
                  onClick={handleFailedData}
                  style={{
                    boxShadow: "0px 0px 2.0368096828460693px 0px #00000040",
                  }}
                  className={`w-[50%] max-w-xs mx-auto border py-2  rounded-md font-medium transition-colors ${
                    isDarkMode ? "bg-black hover:bg-slate-800 " : "bg-white"
                  }`}
                >
                  Receipt
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
     {sessionModal &&
       <InternalLoginSession setexpiredSessionLogin ={setSessionModal} />}
      {restrictUser && sessionModal === false && (
        <RestrictionPopUp/>
      ) }
    </DashBoardLayout>
  );
};

export default KEDCO;
