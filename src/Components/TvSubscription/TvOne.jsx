//import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import ConfirmGotvPopup from "./GotvPopups/confirmGotvPopup";
import { InputGotvPopup } from "./GotvPopups/inputPinGotv";
import GotvSuccessfulPopup from "./GotvPopups/GotvSuccessfulPopup";
import nigerianFlag from "../../Components/EducationPins/imagesEducation/Nigeriaflag.svg";
import americaFlag from "../../Components/EducationPins/imagesEducation/Usa.svg";
import britainFlag from "../../Components/EducationPins/imagesEducation/Britain.svg";
import euroFlag from "../../Components/EducationPins/imagesEducation/GBP.svg";
import austriaFlag from "../../Components/EducationPins/imagesEducation/Austria.svg";
import kenyaFlag from "../../Components/EducationPins/imagesEducation/Kenya.svg";
import { VerifyTransPin } from "../../Components/ApiCollection.jsx/ApiBuck";
import { PostFunction } from "../../Components/ApiCollection.jsx/ApiBuck";
import { useNavigate } from "react-router-dom";
import { GetFunction } from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import { BalanceLoading } from "../Loader/Loader";
import { HandleUserSession } from "../../Components/ApiCollection.jsx/ApiBuck";

// import { duration } from "html2canvas/dist/types/css/property-descriptors/duration";

const GoTv = () => {
  const {
    setConfirmGotvPopup,
    selectedOptionGOTV,
    showDropdownGOTV,
    setShowDropdownGOTV,
    setSelectedOptionGOTV,
    //formatNumberWithCommas,
    mobileNumber,
    setCardName,
    cardName,
    tvEmail,
    smartCard,
    setSmartCard,
    setTvEmail,
    tvAmount,
    setTvAmount,
    setMobileNumber,
    decoderActive,
    setDecoderActive,
    setDecoderType,
    decoderType,
    methodImage,
    setMethodImage,
    isDarkMode,
    setErrorMessage,
    setGotvSuccessful,
    setInputPinGotv,
    fetchedGotvPlans,
    fetchedDstvPlans,
    setFetchedDstvPlans,
    fetchedShowMaxPlans,
    setFetchedShowMaxPlans,
    fetchedStarTimesPlans,
    setFetchedStarTimesPlans,
    tvSubscriptionResponse,
    inputPin,
    setInputPin,
    setGotvTransactionId,
    setGotvOrderId,
    packageGotv,
    setFetchedGotvPlans,
    setPackageGotv,
    setGotvRequestId,
    setGotvDescription,
    setTvSubscriptionResponse,
    newBalance,
    setNewBalance,
  } = useContext(ContextProvider);
  const [successConfig, setSuccessConfig] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [gotvData, setGotvData] = useState([]);
  const [stateInvalidDecoderNumber, setStateInvalidDecoderNumber] =
    useState(false);
  const [sessionModal, setSessionModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [failedPopup, setFailedPopup] = useState(false);
  const [gotvLoading, setGotvLoading] = useState(false);
  const [gotvVerifyResponse, setGotvVerifyResponse] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // alert("Who do you think is handling that?")
    if (gotvVerifyResponse?.data?.name?.length < 1) {
      setStateInvalidDecoderNumber(true);
    } else {
      setStateInvalidDecoderNumber(false);
    }
  }, [gotvVerifyResponse?.data?.name]);

  const handleOptionClickGOTV = () => {
    setShowDropdownGOTV(false);
    document.querySelector(".imgdrop").classList.remove("DropIt");
  };

  const GetOtherDataTv = async (id, path) => {
    console.log(id, path);
    const SuccessHandler = () => {
      navigate(path);
    };
    const FailedHandler = async (ErrorType) => {
      //alert("Error");
      if (ErrorType === "unauthorised") {
        await GetFunction(
          TvPath,
          setIsLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              return setSessionModal(true);
            }
          },
          fetchedResponse
        );
      }
    };

    const SubscriptionPresent = () => {
      if ((fetchedDstvPlans.status === 200 || 201) && id === 2) {
        return navigate(path);
      } else if ((fetchedStarTimesPlans.status === 200 || 201) && id === 3) {
        return navigate(path);
      } else if ((fetchedShowMaxPlans.status === 200 || 201) && id === 4) {
        return navigate(path);
      }
    };

    let TvPath;
    let fetchedResponse;
    if (
      (fetchedDstvPlans.status !== 200 || fetchedDstvPlans.status !== 201) &&
      id === 2
    ) {
      TvPath = `products/tvsub/dstv`;
      fetchedResponse = setFetchedDstvPlans;
      await GetFunction(
        TvPath,
        setIsLoading,
        SuccessHandler,
        FailedHandler,
        fetchedResponse
      );
    } else if (
      (fetchedStarTimesPlans.status !== 200 ||
        fetchedStarTimesPlans.status !== 201) &&
      id === 3
    ) {
      TvPath = `products/tvsub/startimes`;
      fetchedResponse = setFetchedStarTimesPlans;
      await GetFunction(
        TvPath,
        setIsLoading,
        SuccessHandler,
        FailedHandler,
        fetchedResponse
      );
    } else if (
      (fetchedShowMaxPlans.status !== 200 ||
        fetchedShowMaxPlans.status !== 201) &&
      id === 4
    ) {
      TvPath = `products/tvsub/showmax`;
      fetchedResponse = setFetchedShowMaxPlans;
      await GetFunction(
        TvPath,
        setIsLoading,
        SuccessHandler,
        FailedHandler,
        fetchedResponse
      );
    } else {
      console.log(fetchedDstvPlans.status);
      return SubscriptionPresent();
    }
  };

  //console.log(fetchedGotvPlans.status)
  const GotvOptionalPlan =
    gotvData?.length < 1 && fetchedGotvPlans.status === 200
      ? fetchedGotvPlans.data.data.data
      : gotvData;
  useEffect(() => {
    if (fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201) {
      setGotvData(fetchedGotvPlans?.data?.data?.data);
    } else if (fetchedGotvPlans.status === undefined) {
      const RetrieveGotvPlans = async () => {
        const SuccessHandler = () => {
          console.log("Successfully fetched gotv plans");
        };
        const failedHandler = async (ErrorType) => {
          // console.log("Couldn't fetch gotv plans");
          if (ErrorType === "unauthorised") {
            await GetFunction(
              `products/tvsub/gotv`,
              setIsLoading,
              SuccessHandler,
              (ErrorType) => {
                if (ErrorType === "unauthorised") {
                  return setSessionModal(true);
                }
              },
              setFetchedGotvPlans
            );
          }
        };

        await GetFunction(
          `products/tvsub/gotv`,
          setIsLoading,
          SuccessHandler,
          failedHandler,
          setFetchedGotvPlans
        );
        // console.log(fetchedGotvPlans);
      };
      RetrieveGotvPlans();
    }

    const GetBalance = async () => {
      const SuccessHandler = () => {
        //alert("Successful");
        console.log("successfully retrieved balance");
        //alert("Successful")
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
          await GetFunction(
            `products/tvsub/gotv`,
            setIsLoading,
            SuccessHandler,
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(true);
              }
            },
            setFetchedGotvPlans
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
    // Simulate async data loading

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

    //eslint-disable-next-line
  }, []);

  const handleTvEmail = (e) => {
    const inputValue = e.target.value;
    setTvEmail(inputValue);
  };

  const Decoders = [
    { decoderType: "GOtv", id: 1 },
    { decoderType: "DStv", path: "/DsTv", id: 2 },
    { decoderType: "StarTimes", path: "/StarTimes", id: 3 },
    { decoderType: "Showmax", path: "/Showmax", id: 4 },
  ];

  const handleGotv = (event) => {
    event.preventDefault();

    const { error } = schema.validate({
      mobileNumber,
      tvEmail,
      smartCard,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      // sendDataToBackend(decoderType, planName, smartCard, tvEmail, '₦' + getNumericValue(selectedOptionGOTV), mobileNumber);
      // console.log(decoderType, planName, smartCard, tvEmail, '₦' + getNumericValue(selectedOptionGOTV), mobileNumber);
      setConfirmGotvPopup(true);
      setErrors({});
    }
  };
  const [errors, setErrors] = useState({});

  // const GOTVSchema = Joi.object({
  //   mobileNumber: Joi.string().regex(/^\d{11}$/).required(),
  // });

  const schema = Joi.object({
    smartCard: Joi.string()
      .regex(/^\d{10,}$/)
      .required()
      .messages({
        "string.pattern.base":
          "Smart card number should be more than 10 digits",
      }),
    mobileNumber: Joi.string()
      .regex(/^\d{11}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits",
      }),
    tvEmail: Joi.string()
      .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      .required()
      .messages({ "string.pattern.base": "Invalid email" }),
  });

  const handleGOTVMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);
  };

  const { flagResult, setFlagResult } = useContext(ContextProvider);
  const { methodPayment, setMethodPayment } = useContext(ContextProvider);
  const { tvWalletBalance, setTvWalletBalance } = useContext(ContextProvider);

  function methodDropDown() {
    setMethodPayment(!methodPayment);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
  }
  const updateBalance = passDataBalance?.data?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";

  //console.log(passDataBalance);
  //console.log(updateBalance);
  const methodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance})`
          : `(${newBalance})`,
      flag: nigerianFlag,
      id: 1,
    },
    { method: "USD Wallet", balance: "(0.00)", flag: americaFlag, id: 2 },
    { method: "EUR Wallet", balance: "(0.00)", flag: britainFlag, id: 3 },
    { method: "GBP Wallet", balance: "(0.00)", flag: euroFlag, id: 4 },
    { method: "AUD Wallet", balance: "(0.00)", flag: austriaFlag, id: 5 },
    { method: "KES Wallet", balance: "(0.00)", flag: kenyaFlag, id: 6 },
  ];

  function packageDropdown() {
    if (!decoderType) {
      setShowDropdownGOTV(false);
    } else {
      setShowDropdownGOTV(!showDropdownGOTV);
      document.querySelector(".imgdrop").classList.toggle("DropIt");
    }
  }

  function decoderDropdown() {
    setDecoderActive(!decoderActive);
    document.querySelector(".decdrop").classList.toggle("DropIt");
  }

  const handleReceivedData = () => {
    setIsLoading(true);
    const receivedData = () => {
      // Seting the relevant data from the TV subscription response
      setGotvOrderId(
        tvSubscriptionResponse?.data
          ? tvSubscriptionResponse?.data?.order_id
          : ""
      );
      setGotvTransactionId(
        tvSubscriptionResponse?.data
          ? tvSubscriptionResponse?.data?.transaction_id
          : ""
      );
      setGotvRequestId(
        tvSubscriptionResponse?.data
          ? tvSubscriptionResponse?.data?.request_id
          : ""
      );
      setGotvDescription(
        tvSubscriptionResponse?.data
          ? tvSubscriptionResponse?.data?.transaction_description
          : ""
      );
      setCardName(userVerifiedName);
    };
    receivedData();
    if (receivedData) {
      setGotvSuccessful(false);
      setIsLoading(false);
      navigate("/GotvReceipt");
    }
  };

  const VerifyPinHandler = async () => {
    const GotvHandler = async () => {
      const requestData = {
        decoder_type: decoderType.toLowerCase(),
        package: packageGotv,
        iuc_number: smartCard,
        email: tvEmail,
        amount: tvAmount,
        phone: mobileNumber,
      };
      const DataJson = JSON.stringify(requestData);

      const Path = "bills/tvsub";
      const successHandler = () => {
        setGotvSuccessful(true);
        setInputPinGotv(false);
        setInputPin("");
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
          await PostFunction(
            Path,
            setIsLoading,
            DataJson,
            successHandler,
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(true);
              }
            },
            setTvSubscriptionResponse
          );
        } else {
          setFailedPopup(true);
          setInputPinGotv(false);
          setInputPin("");
        }
      };

      await PostFunction(
        Path,
        setIsLoading,
        DataJson,
        successHandler,
        FailedHandler,
        setTvSubscriptionResponse
      );
    };

    const setFailedConfig = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        await VerifyTransPin(
          inputPin,
          setSuccessConfig,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              return setSessionModal(true);
            }
          },
          setIsLoading,
          setErrorMessage,
          GotvHandler
        );
      }
    };
    await VerifyTransPin(
      inputPin,
      setSuccessConfig,
      setFailedConfig,
      setIsLoading,
      setErrorMessage,
      GotvHandler
    );
  };
  //console.log( passDataBalance.status)

  let userVerifiedName = gotvVerifyResponse?.data
    ? gotvVerifyResponse?.data?.name
    : "";
  //Function to help Verify users account
  const VerifyUserAccount = async (UserTvSubscription) => {
    setGotvVerifyResponse({});

    if (
      UserTvSubscription?.length === 10 &&
      UserTvSubscription !== "" &&
      UserTvSubscription !== null &&
      UserTvSubscription !== undefined
    ) {
      const body = {
        decoder_type: decoderType.toLowerCase(),
        iuc_number: UserTvSubscription,
      };
      const bodyToJson = JSON.stringify(body);
      const SuccessHandler = () => {
        console.log("Succesfully verified tv subscription account.");
        setSmartCard(UserTvSubscription);
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
          await PostFunction(
            "bills/verify",
            setGotvLoading,
            bodyToJson,
            SuccessHandler,
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(true);
              }
            },
            setGotvVerifyResponse
          );
        }
      };

      await PostFunction(
        "bills/verify",
        setGotvLoading,
        bodyToJson,
        SuccessHandler,
        FailedHandler,
        setGotvVerifyResponse
      );
    }
  };
  //console.log(userVerifiedName)

  const handleSmartCard = async (e) => {
    const inputValue = e.target.value;
    await VerifyUserAccount(inputValue);
  };

  const ReceiptButton = () => {
    setFailedPopup(false);
    handleReceivedData();
  };
  const ExitTheDoneButton = () => {
    setTvEmail("");
    setMobileNumber("");
    setSmartCard("");
    setTvAmount("");
    setSelectedOptionGOTV("");
    setPackageGotv("");
    setDecoderType("");
    setFlagResult("");
    setTvWalletBalance("");
    setFailedPopup(false);
    //  navigate("/GoTv");
  };

  return (
    <div>
      <DashBoardLayout>
        <div className={style.AirtimeTops}>
          <div className={style.airtimeTop}>
            <div>
              <div
                id="tvBackground"
                className="min-h-[90px] py-[15px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between
                 px-[16.51px] md:px-[28.65px] lg:px-[50px]"
              >
                <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
                  <p className="text-[11px] leading-[14px]  lg:leading-[30px] lg:text-[24px] md:text-[13.75px] font-semibold">
                    SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                  </p>
                  <p className="text-[10px] leading-[13px] lg:text-[20px] lg:leading-[25px] md:text-[11.46px]">
                    Never miss a beat! Subscribe your tv channels on our
                    platform to watch and stream your favorite movies without
                    any hassle.
                  </p>
                </div>
                <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                  <img
                    src="./Images/TvSubscription/tv.svg"
                    alt=""
                    className=""
                  />
                </div>
              </div>

              <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[37px] md:py-[28.64px]">
                <div className="flex text-[#7E7E7E] text-[12px] lg:text-[18px] md:text-[13px] font-semibold">
                  <span>Subscribe Your</span> &nbsp;
                  <img
                    src="./Images/TvSubscription/gotvIcon.svg"
                    alt=""
                    className="md:w-[60px] md:h-[15px] lg:w-[100px] lg:h-[18.6px]"
                  />
                  <span> Decoder Instantly</span>
                </div>
                <img
                  src="./Images/currencyImages/right.svg"
                  alt=""
                  className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]"
                />
              </div>

              <div className="flex flex-col gap-[20px] md:gap-0">
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                  <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Confirm Decoder Type
                    </label>
                    {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-1/2 h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
                    <div
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                      onClick={decoderDropdown}
                    >
                      {decoderType}
                      <img
                        className="decdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                        src={arrowDown}
                        alt=""
                      />
                    </div>

                    {decoderActive && (
                      <div
                        className={`absolute lg:top-[90px] md:top-[60px]  top-[74px] z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
          ${
            isDarkMode
              ? "bg-black text-white border border-white"
              : "hover:bg-[#EDEAEA]"
          }`}
                      >
                        {Decoders.map((decoder) => {
                          return (
                            <p
                              onClick={(e) => {
                                setDecoderType(
                                  decoder.id === 1 ? decoder.decoderType : ""
                                );
                                setDecoderActive(false);
                                GetOtherDataTv(decoder.id, decoder.path);
                                document
                                  .querySelector(".decdrop")
                                  .classList.remove("DropIt");
                                console.log(e);
                              }}
                              className={`pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer ${
           isDarkMode
             ? "bg-black text-white border border-white"
             : "hover:bg-[#EDEAEA] bg-white text-[#7C7C7C]"
         }`}
                              key={decoder.id}
                            >
                              <h2
                                className={`${
                                  isDarkMode
                                    ? "bg-black text-white"
                                    : "bg-white text-[#7C7C7C]"
                                }`}
                              >
                                {decoder.decoderType}{" "}
                              </h2>
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Select Package
                    </label>

                    <div
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] sm:p-3 sm:text-lg  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                      onClick={packageDropdown}
                    >
                      {selectedOptionGOTV}
                      <img
                        className="imgdrop absolute left-[90%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                        src={arrowDown}
                        alt=""
                      />
                    </div>

                    {showDropdownGOTV && (
                      <ul
                        className={`dropdown-options absolute top-[100%] w-full ${
                          GotvOptionalPlan?.length > 1
                            ? " h-[300px] overflow-y-scroll"
                            : "h-[0px]"
                        } cursor-pointer z-[2]
                   ${
                     isDarkMode
                       ? "bg-black text-white border border-white"
                       : "hover:bg-[#EDEAEA] bg-white"
                   }`}
                      >
                        {GotvOptionalPlan.map((option) => {
                          // const duration = option.duration;

                          return (
                            <li
                              className={` pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] font-weight-bold text-[15px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
                      md:text-[13.227px] md:leading-[17.195px] 
                      shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                      lg:text-[16px] lg:leading-[20.8px] cursor-pointe  ${
                        isDarkMode
                          ? "bg-black text-white border border-white"
                          : "hover:bg-[#EDEAEA]  bg-white"
                      }`}
                              key={option.id}
                              onClick={() => {
                                handleOptionClickGOTV();
                                setSelectedOptionGOTV(option.PackageName);
                                setTvAmount(option.Amount);
                                setPackageGotv(option.Package);
                              }}
                            >
                              {`${option.PackageName} (${option.Amount})`}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
                  <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Smart Card / IUC Number
                    </label>
                    {/* style={{ backgroundColor: smartCard.length !== 10 ? '#FFD8D8' : 'white' }} */}
                    <input
                      type="tel"
                      onChange={handleSmartCard}
                      onInput={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        e.target.value = numericValue;
                      }}
                      maxLength={10}
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] hover:bg-[#EDEAEA] text-[#7C7C7C]"
    }`}
                    />
                    {errors.smartCard && (
                      <p className="text-[#F95252] text-[13px] md:text-[12px] lg:text-[14px] font-[400] italic">
                        {errors.smartCard}
                      </p>
                    )}
                    {stateInvalidDecoderNumber && !errors.smartCard && (
                      <p
                        className="text-[14px] top-0 font-[500] text-red-500 text-left
           lg:text-[14px] lg:leading-[20px] leading-[18px] "
                      >
                        Invalid iuc number
                      </p>
                    )}
                  </div>

                  <div className="flex  flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Card Name
                    </label>
                    <input
                      type="text"
                      value={userVerifiedName}
                      readOnly
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] hover:bg-[#EDEAEA] text-[#7C7C7C]"
    }`}
                    />
                    {gotvLoading && (
                      <p className="left-[10px] absolute top-[60%]">
                        <BalanceLoading />
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                  <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="val"
                      value={mobileNumber}
                      onChange={handleGOTVMobileNumberChange}
                      onInput={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        e.target.value = numericValue;
                        if (numericValue.length === 11) {
                          e.target.style.border = "2px solid green";
                        } else if (e.target.value.length < 11) {
                          e.target.style.border = "2px solid red";
                        }
                      }}
                      type="tel"
                      maxLength={11}
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[12.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[13px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white text-[12px]"
        : "border border-[#0003] border-[#9C9C9C] hover:bg-[#EDEAEA] text-[#7C7C7C]"
    }`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-[#F95252] text-[14px] md:text-[12px] lg:text-[14px] font-[400] italic">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="Email"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={tvEmail}
                      onChange={handleTvEmail}
                      placeholder="example@gmail.com"
                      required
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] text-[14px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
    }`}
                    />
                    {errors.tvEmail && (
                      <p className="text-[#F95252] text-[13.4px] md:text-[14px] lg:text-[14px] font-[400] italic">
                        {errors.tvEmail}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                  <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[16px] md:text-[12px] md:font-[600] font-[400]"
                    >
                      Amount
                    </label>

                    <input
                      type="text"
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px] sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }`}
                      value={`₦ ${tvAmount}`}
                      readOnly
                    />
                  </div>

                  <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
                    >
                      Payment Method
                    </label>
                    <div
                      onClick={methodDropDown}
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center justify-between border-[0.23px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  ${
                        isDarkMode
                          ? "bg-black text-white border border-white"
                          : "border-[#9C9C9C]"
                      }`}
                    >
                      <p className="font-[500] text-[13px] leading-[10.4px] md:text-[12px] md:leading-[12.206px] lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer">
                        {`${flagResult}  ${" "} ${tvWalletBalance}`}
                      </p>
                      <img
                        className="methodDrop h-[16px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]"
                        src={methodImage}
                        alt=""
                      />
                    </div>
                    {methodPayment && (
                      <div
                        className={`absolute top-[102%] z-0 flex flex-col w-[100%]  
                          cursor-pointer border-[1px] border-gray-100 rounded-[3px]  ${
                            isDarkMode
                              ? "bg-black text-white border border-white"
                              : "bg-white"
                          }`}
                      >
                        {methodOptions.map((methodOption) => {
                          return (
                            <div
                              onClick={(e) => {
                                //onchange = { setMethodOptions }
                                setFlagResult(
                                  methodOption.id === 1
                                    ? methodOption.method
                                    : flagResult === "NGN Wallet" &&
                                      methodOption.id !== 1
                                    ? "NGN Wallet"
                                    : ""
                                );
                                setTvWalletBalance(
                                  methodOption.id === 1
                                    ? methodOption.balance
                                    : flagResult === "NGN Wallet"
                                    ? newBalance === "" || newBalance === null
                                      ? `(${updateBalance})`
                                      : `(${newBalance})`
                                    : ""
                                );
                                setMethodImage(
                                  methodOption.id === 1
                                    ? methodOption.flag
                                    : methodImage
                                );
                                setMethodPayment(false);
                                setMethodPayment(() => {
                                  if (methodOption.id === 1) {
                                    setMethodPayment(false);
                                    document
                                      .querySelector(".methodDrop")
                                      .classList.remove("DropIt");
                                  } else {
                                    setMethodPayment(true);
                                    document
                                      .querySelector(".methodDrop")
                                      .classList.add("DropIt");
                                  }
                                });
                              }}
                              className={`flex gap-[10px] lg:py-[15px] 
                                py-[10px] pl-[10px] pb-[20px] pt-[20px] md:pb-0 md:pt-0 border-b-[1px] border-b-gray-400 cursor-pointer  items-center  ${
                                  methodOption.id !== 1 && !isDarkMode
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : methodOption.id !== 1 && isDarkMode
                                    ? "bg-black"
                                    : methodOption.id === 1 && !isDarkMode
                                    ? "bg-white"
                                    : "bg-black"
                                } `}
                              key={methodOption.id}
                            >
                              <img
                                className="md:h-[29.27px]  h-[14.27px]"
                                src={methodOption.flag}
                                alt=""
                              />

                              <h2
                                className={`text-[14px] leading-[10.4px]
               font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer   ${
           isDarkMode ? "text-white bg-black" : "text-[#7C7C7C] "
         }`}
                              >
                                {methodOption.method +
                                  " " +
                                  methodOption.balance}
                              </h2>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleGotv}
                disabled={
                  !userVerifiedName ||
                  !tvEmail ||
                  !decoderType ||
                  !selectedOptionGOTV
                }
                className={`
             ${
               mobileNumber.length < 11 ||
               !userVerifiedName ||
               !tvEmail ||
               !decoderType ||
               !selectedOptionGOTV ||
               !flagResult
                 ? "bg-[#63616188] "
                 : "bg-primary"
             }
            mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-center font-semibold text-[12px] md:text-[11px] lg:text-[16px] text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center`}
              >
                Proceed
              </button>
            </div>
          </div>

          <div className={style.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={style.btnContact}>
              Contact Us
            </Link>
          </div>
        </div>
      </DashBoardLayout>
      <ConfirmGotvPopup
        passDataBalance={passDataBalance}
        userVerifiedName={userVerifiedName}
      />
      <InputGotvPopup VerifyPinHandler={VerifyPinHandler} />
      <GotvSuccessfulPopup
        handleReceivedData={handleReceivedData}
        userVerifiedName={userVerifiedName}
      />

      {/* Failed Transaction Popup */}
      {failedPopup && (
        <Modal>
          <div className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto  rounded-lg overflow-hidden
            ${isDarkMode ? "bg-black": "bg-white"}`}>
            <div className="flex justify-between items-center p-4 ">
              <img
                onClick={() => setFailedPopup(false)}
                className={`w-6 h-6  `}
                src="/Images/login/arpLogo.png"
                alt="Logo"
              />
              <img
                onClick={() => setFailedPopup(false)}
                className="w-6 h-6 cursor-pointer"
                src="/Images/transferImages/close-circle.png"
                alt="Close"
              />
            </div>
            <hr className="h-1 bg-[#04177f] border-none" />
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold my-4">
                Transaction Failed
              </h2>
              <img
                className={`w-32 h-32 mx-auto my-6  ${isDarkMode ? "bg-black rounded-full border-[0.1px] border-black": "bg-white"}`}
                src="./Images/failed.png"
                alt="Failed"
              />
              <p className="text-sm text-gray-600 mb-8">
                An unexpected error has occurred, please try again.
              </p>
              <div className="flex gap-[10px] justify-between w-full px-[10px]">
                <button
                  onClick={() => ExitTheDoneButton()}
                  className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2
           text-white rounded-md font-medium"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    ReceiptButton();
                  }}
                  className="w-[50%] bg-white max-w-xs mx-auto py-2 text-blue-900
           rounded-md font-medium"
                >
                  Receipt
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {sessionModal && <HandleUserSession />}
    </div>
  );
};

export default GoTv;
