import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../../../Context";
import { useState } from "react";
import styles from "../TransferComponent/transfer.module.css";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg";
import arrow from "../ElectricitySubscription/Electricity-sub-images/arrow-square-right.png";
import logo from "../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg";
import arrowDown from "../ElectricitySubscription/Electricity-sub-images/arrow-down.png";
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

import {
  GetFunction,
  HandleUserSession,
  PostFunction,
  VerifyTransPin,
} from "../../../ApiCollection.jsx/ApiBuck";

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
    kedcoCountry,
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
    newBalance,
    setNewBalance,
  } = useContext(ContextProvider);

  const [showProductList, setShowProductList] = useState(false);
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

  const GetBalance = async () => {
    const SuccessHandler = () => {
      console.log("successfully retrieved balance");
    };
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await GetFunction(
          `bills/verify`,
          setLoading,
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
      setLoading,
      SuccessHandler,
      FailedHandler,
      setPassDataBalance
    );
  };
  // get the balance on entering the page
  useEffect(() => {
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

  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";

  const countryList = [
    {
      id: 1,
      name: `NGN Wallet ${
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(₦${updateBalance})`
          : `(₦${newBalance})`
      }`,
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

  // validating the network numbers
  function validateNigerianNumberByNetwork(number) {
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

  const handleCountryClick = (name, flag, id, code) => {
    if (id !== 1 && code !== "Nigerian NGN Wallet") return;
    setKedcoFlag(flag);
    setShowList(false);
    setKedcoCountry(name);
    setSelected(true);
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

  // const [fetchedResponse, setFetchedResponse] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [pinSuccess, setPinSuccess] = useState(false);
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
            await PostFunction(
              path,
              setMeterNumberLoading,
              body,
              SuccessHandler,
              (ErrorType) => {
                if (ErrorType === "unauthorised") {
                  return setSessionModal(true);
                }
              },
              setKedcoFetchedResponse
            );
          }
        };

        await PostFunction(
          path,
          setMeterNumberLoading,
          body,
          SuccessHandler,
          FailedHandler,
          setKedcoFetchedResponse
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
      const SuccessHandler = () => {
        setInputPinPopUp(false);
        setKedcoDiscoType(kedcoFetchedResponse?.data?.disco_type);
        setSuccessPopup(true);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "Bad request") {
          setInputPinPopUp(false);
          setFailedPopup(true);
        } else if (ErrorType === "unauthorised") {
          await PostFunction(
            path,
            setLoading,
            data,
            SuccessHandler,
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(true);
              }
            },
            setKedcoFetchedResponse
          );
        }
      };

      await PostFunction(
        path,
        setLoading,
        data,
        SuccessHandler,
        FailedHandler,
        setKedcoFetchedResponse
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
          setPinSuccess,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              setSessionModal(true);
            }
          },
          setLoading,
          setErrorMessage,
          ElectricityHandler
        );
      }
    };
    await VerifyTransPin(
      inputPin,
      setPinSuccess,
      setPinFailed,
      setLoading,
      setErrorMessage,
      ElectricityHandler
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
      setSuccessPopup(false);
      setLoading(false);
      navigate("/kedco-receipt");
    }
  }

  function handleFailedData() {
    setLoading(true);
    setFailedPopup(false);
    navigate("/kedco-receipt-failed");
    setLoading(false);
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
  let balanceStringToNum = Number(newBalance);
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-6 items-center lg:mt-[20px] ">
            <div className="flex flex-col mt-[20px] relative gap-2 lg:gap-2.5">
              <div
                className={`text-sm lg:text-base  md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Select Meter Type
              </div>
              <div
                className={`rounded-[10px] md:rounded-0 p-[20px] md:py-5 text-[13.2px]  sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
                  isDarkMode
                    ? "text-white bg-black border border-white"
                    : "text-[#7E7E7E] bg-white hover:bg-[#EDEAEA]"
                }`}
                onClick={() => setShowProductList(!showProductList)}
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
                        : " text-[#7C7C7C] bg-white hover:bg-[#EDEAEA]"
                    } flex flex-col absolute lg:top-[90px] md:top-[70px] top-[74px] transition-colors duration-300 z-[2] w-full`}
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

            <div className="flex flex-col relative gap-2 lg:gap-2.5 mt-5 ">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Meter Number
              </div>
              <div>
                <input
                  type="text"
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
                  className={`py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] border-[#9C9C9C] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full w-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E] bg-white"
                  }`}
                />
              </div>
              {errors.kedcoMeterNumber && (
                <div className="text-[13px] absolute left-0 -bottom-[1.3rem] text-red-500 italic lg:text-sm">
                  {errors.kedcoMeterNumber}
                </div>
              )}
              {!errors.kedcoMeterNumber && isFailedMeterNumber && (
                <div className="text-sm absolute left-0 -bottom-[1.3rem] text-red-500 italic lg:text-sm">
                  Invalid meter number
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:gap-2.5">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Verified Name
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={handleVerifiedName}
                  // onChange={handleVerifiedName}
                  readOnly
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] border-[#9C9C9C] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
                {meterNumberLoading && (
                  <p className="left-4 absolute top-3.5 lg:top-4">
                    <BalanceLoading />
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col relative gap-2 lg:gap-2.5">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Phone Number
              </div>
              <div>
                <input
                  type="number"
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
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px]  lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E] border border-[#9C9C9C]"
                  }`}
                />
              </div>
              {errors.kedcoPhoneNumber && (
                <div className="text-xs absolute left-0 -bottom-[1.5rem] leading-3 text-red-500 italic lg:text-sm">
                  {errors.kedcoPhoneNumber}
                </div>
              )}
            </div>
            <div className="flex flex-col relative gap-2 lg:gap-2.5">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Email
              </div>
              <div>
                <input
                  type="text"
                  value={kedcoEmail}
                  onChange={handleEmail}
                  onInput={() => {
                    setErrors((prev) => ({ ...prev, kedcoEmail: "" }));
                  }}
                  className={`w-full py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] border-[#9C9C9C] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full  ${
                    isDarkMode
                      ? "text-white bg-black border border-white"
                      : "text-[#7E7E7E]"
                  }`}
                />
              </div>
              {errors.kedcoEmail && (
                <div className="text-xs absolute left-0 -bottom-[1.3rem] text-red-500 italic md:text-sm">
                  {errors.kedcoEmail}
                </div>
              )}
            </div>
            <div className="flex flex-col relative gap-2 lg:gap-2.5">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Amount
              </div>
              <div
                className={`flex items-center py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] border-[#9C9C9C] lg:text-base lg:leading-[20.8px]  rounded-lg sm:rounded-[10px] h-full w-full ${
                  isDarkMode
                    ? "text-white bg-black border-white"
                    : "text-[#7E7E7E] border-[#9C9C9C]"
                }`}
              >
                &#8358;
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
                <p className="text-sm absolute left-0 -bottom-[1.3rem] text-red-500 italic lg:text-sm">
                  {amountError}
                </p>
              )}
            </div>

            <div className=" flex flex-col relative gap-2 lg:gap-2.5">
              <div
                className={`text-sm md:text-[13px] lg:text-base md:font-semibold font-normal ${
                  isDarkMode ? "text-white" : "text-[#7E7E7E]"
                }`}
              >
                Payment Method
              </div>
              <div
                className={`rounded-[10px] md:rounded-0 p-[20px] md:py-5 text-[13.2px]  sm:p-3 sm:text-lg relative  pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] flex items-center justify-between  ${
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
                      className={`text-xs lg:text-sm
                    ${isDarkMode ? "text-white bg-black" : "text-[#7E7E7E]"}`}
                    >
                      {/* font-extrabold */}
                      {kedcoCountry}
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
                      ? "bg-black border-white text-white"
                      : "text-[#7C7C7C] bg-white "
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  ${
                    styles.countryDropDown
                  } shadow-xl border w-full lg:w-full  flex flex-col divide-y absolute top-[4.3rem] md:top-[4.4rem]`}
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
                          country.code
                        )
                      }
                    >
                      <img
                        className="md:h-[29.27px]  h-[14.27px]"
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
            className={`text-xs mt-[30px] md:mt-[40px] bg-[#0008] md:w-fit lg:px-12 lg:text-base lg:px md:py-1 md:rounded-md md:px-6 py-3 rounded-md font-semibold text-center text-white
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
        <footer className="flex justify-center text-center gap-[20px] mt-[200px] pb-[10%] md:mt-[750px]  lg:mt-[850px]">
          <p className="text-[11px] md:text-xs lg:text-[18px] font-medium leading-[9.1px] mt-[5px] lg:mt-[13px]">
            You need help?
          </p>

          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "bg-[#04177f] " : "bg-[#04177f]"
              } text-[11px] p-1.5 text-white rounded-[8px] lg:text-base`}
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
            <h2 className="text-xs font-semibold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-base">
              Confirm Transaction
            </h2>
            <p
              className={`text-[10px] pt-[20px] font-medium text-center mb-2 md:text-xs lg:text-sm ${
                isDarkMode ? "text-white" : "text-[#000]"
              }`}
            >
              You are about to Purchase{" "}
              <span
                className={`font-extrabold text-xs md:text-sm lg:text-xs ${
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
              From <br /> your NGN Wallet to
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-sm pt-[10px] w-[90%] mx-auto justify-between  lg:text-base">
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
                  <div>Kano-KEDCO</div>
                </span>
              </div>
              <div className="flex text-[10px]  md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Type
                </p>
                <span>{selectedKedcoMeterType} </span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Number
                </p>
                <span>{kedcoMeterNumber} </span>
              </div>

              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Verified Name
                </p>
                <span>{kedcoCustomerName}</span>
              </div>

              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Phone Number
                </p>
                <span>{kedcoPhoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Email
                </p>
                <span>{kedcoEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Amount
                </p>
                <span>&#8358;{Number(kedcoAmount).toLocaleString()}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Payment Method
                </p>
                <span>Nigerian NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
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

            <div className="bg-[#0001] h-[55px] my-5 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 flex-col">
                <div className="flex gap-2 items-center">
                  <div
                    className={` rounded-full h-[27px] w-[27px] flex justify-center items-center ${
                      isDarkMode ? "bg-[#0001] " : "bg-white"
                    }`}
                  >
                    <img className="w-[16px] h-[16px]" src={nig} alt="/" />
                  </div>
                  <p className="text-[10px] md:text-sm  lg:text-base">
                    Available Balance
                    <span
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#000] "
                      }`}
                    >
                      {`(₦${newBalance})`}
                    </span>
                  </p>
                </div>
                <span className="text-gray-500 text-sm font-[400] leading-[20px] lg:text-base lg:leading-[22px] text-left">
                  {balanceStatus}
                </span>
              </div>
              <img
                className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              onClick={handleSwitch}
              disabled={CheckSufficiency}
              className={`my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-sm font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:text-sm lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                CheckSufficiency ? "bg-gray-400" : "bg-primary"
              }`}
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
            <p className="text-xs md:text-base font-extrabold text-center my-[10%] lg:my-[%] ">
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
                        <p className="text-xs text-green-500 text-center font-medium">
                          Pin matches
                        </p>
                      )}
                      {errorMessage && (
                        <p className="text-xs text-center text-red-600 font-medium">
                          Incorrect Pin
                        </p>
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">* * * *</div>
                )}

                <div
                  className={`text-[13px] md:text-3xl ${
                    isDarkMode ? "text-white" : "text-[#0003]"
                  }`}
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              disabled={inputPin.length !== 4 ? true : false}
              // onClick={handleSuccess}
              onClick={verifyPin}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                isDarkMode ? "border border-white" : ""
              }`}
            >
              Purchase
            </button>
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
          <div
            className={`${styles.successfulTwo} ${
              isDarkMode ? "bg-black border border-white" : "bg-white"
            } ${
              toggleSideBar
                ? "md:w-[65%] md:ml-[10rem] lg:ml-[20%] lg:w-[40%]"
                : "lg:w-[40%]"
            } md:w-[60%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => {
                  setSuccessPopup(false);
                  handleResetFields();
                }}
                className=" w-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => {
                  setSuccessPopup(false);
                  handleResetFields();
                }}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-xs my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-sm lg:my-[2%]">
              Purchase Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p
              className={`text-[10px] lg:text-base font-medium text-center mb-2 md:text-sm ${
                isDarkMode ? "text-white" : "text-[#000]"
              }`}
            >
              You have successfully Purchased
              <span
                className={`font-extrabold text-[11px] md:text-base lg:text-sm ${
                  isDarkMode ? "text-white" : "text-[#000]"
                }`}
              >
                Kano {selectedKedcoMeterType} Meter
              </span>
              <br></br>
              <span
                className={`font-extrabold text-[10px] md:text-base lg:text-sm ${
                  isDarkMode ? "text-white" : "text-[#000]"
                }`}
              >
                (&#8358;{Number(kedcoAmount).toLocaleString()})
              </span>
              From your NGN Nigerian Wallet to
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-sm pt-[10px] w-[90%] mx-auto justify-between  lg:text-base">
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
                  <div>{kedcoDiscoType}</div>
                </span>
              </div>
              <div className="flex text-[10px]  md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Type
                </p>
                <span>{selectedKedcoMeterType} </span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Meter Number
                </p>
                <span>{kedcoMeterNumber} </span>
              </div>

              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Verified Name
                </p>
                <span>{kedcoVerifiedName}</span>
              </div>

              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Phone Number
                </p>
                <span>{kedcoPhoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Email
                </p>
                <span>{kedcoEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Amount
                </p>
                <span>&#8358;{Number(kedcoAmount).toLocaleString()}</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                <p
                  className={`font-medium ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C] "
                  }`}
                >
                  Payment Method
                </p>
                <span>Nigerian NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
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

            <div
              className={`mx-4 h-[45px] my-5 flex justify-between items-center md:h-[65px] px-[4%] rounded-[8px] lg:h-[75px] ${
                isDarkMode ? "bg-slate-800" : "bg-[#F2FAFF]"
              }`}
            >
              <p className="text-[8px] text-center md:text-sm md:w-[97%] lg:w-[90%] md:mx-auto lg:text-sm font-medium">
                The electricity bills / token purchase has been generated
                successfully. Please kindly check receipt to confirm the bills /
                token. You can contact us for any further assistance.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center my-6  gap-[6%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setSuccessPopup(false);
                  handleResetFields();
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              {/*<Link
                to={`/kedco-receipt`}
                state={{
                  selectedNetworkProduct: selectedNetworkProduct,
                  meterNumber: meterNumber,
                  phoneNumber: phoneNumber,
                  ikedcEmail: ikedcEmail,
                  ikedcamount: ikedcamount,
                  orderId: orderId,
                  transactionId: transactionId,
                  serviceID: serviceID,
                  showDescription: showDescription,
                  billGenerate: billGenerate,
                }}
              >*/}
              <button
                onClick={handleReceivedData}
                className={`border w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:px-[50px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Receipt
              </button>
              {/* </Link> */}
            </div>
          </div>
        </Modal>
      )}

      {/* purchase Failed Popup */}
      {failedPopup && (
        <Modal>
          <div
            className={`${styles.successfulTwo} ${
              isDarkMode ? "bg-black border border-white" : "bg-white"
            } ${
              toggleSideBar
                ? "md:w-[65%] md:ml-[10rem] lg:ml-[20%] lg:w-[40%]"
                : "lg:w-[40%]"
            } md:w-[60%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => {
                  setFailedPopup(false);
                  handleResetFields();
                }}
                className=" w-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => {
                  setFailedPopup(false);
                  handleResetFields();
                }}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-xs my-[5%] text-center md:text-[20px] md:my-[3%] lg:text-sm lg:my-[2%]">
              Transaction Failed
            </h2>
            <img
              className="w-[120px] h-[120px] mx-auto my-[10%] lg:w-[150px] lg:h-[150px]"
              src="./Images/failed.png"
              alt="/"
            />
            <p
              className={`text-xs mx-[10px] text-center my-[60px] md:text-sm lg:text-xs ${
                isDarkMode ? "text-white" : "text-[#0008]"
              }`}
            >
              An error has occurred, please click on the receipt for more
              details.
            </p>
            <div className="flex w-[70%] mx-auto items-center my-6  gap-[6%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setFailedPopup(false);
                  handleResetFields();
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>

              <button
                onClick={handleFailedData}
                className={`border w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:px-[50px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Receipt
              </button>
            </div>
          </div>
        </Modal>
      )}
      {sessionModal && <HandleUserSession />}
    </DashBoardLayout>
  );
};

export default KEDCO;
