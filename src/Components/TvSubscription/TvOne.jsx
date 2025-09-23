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
import {  RestrictionPopUp } from "../../Components/ApiCollection.jsx/ApiBuck";
import { GetLocalStorage } from "../LocalStorage/LocalStorage";
import { InternalLoginSession } from "../../Components/ApiCollection.jsx/ApiBuck";


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
  //  cardName,
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
    purchaseGotvErrorType,
     setPurchaseGotvErrorType,
    toggleSideBar
  } = useContext(ContextProvider);
  //const [successConfig, setSuccessConfig] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [gotvData, setGotvData] = useState([]);
  const [stateInvalidDecoderNumber, setStateInvalidDecoderNumber] =
    useState(false);
  const [sessionModal, setSessionModal] = useState(false);
const [balanceLoader , setBalanceLoader] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [failedPopup, setFailedPopup] = useState(false);
  const [gotvLoading, setGotvLoading] = useState(false);
  const [gotvVerifyResponse, setGotvVerifyResponse] = useState({});
  const [errorFillDecoder, setErrorFillDecoder] = useState(false);
  const [checkNetworkError, setCheckNetworkError] = useState(false);
  const [restrictUser, setRestrictUser] = useState(false);

//  const [holdCurrentFunction, setHoldCurrentFunction] = useState("")
//  const [userBlocked, setUserBlocked] = useState(false)
const Data = GetLocalStorage();
//console.log(Data?.ConfirmAcc)
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

// ========= Get User's Balance =======
   const GetBalance = async () => {
    if(!navigator.onLine) return setCheckNetworkError(true)
      const SuccessHandler = () => {
       console.log("successfully retrieved balance");
       };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
       await GetFunction(
            `balance`,
            setBalanceLoader,
            SuccessHandler,
            //Handling the error Use Cases of the Unauthorised inside
            // of the statement.
            async(ErrorType) => {
              if (ErrorType === "unauthorised") {
              return setSessionModal(true);
              }else if(ErrorType === "Server error"){
                  await GetFunction(
        "balance",
        setBalanceLoader,
        SuccessHandler,
       async(ErrorType)=> {
        if(ErrorType === "Server error"){
          alert("Failed to retrieve the balance.")
        }
        else if(ErrorType === "Network error" || ErrorType === "User error"){
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
        setBalanceLoader,
        SuccessHandler,
       async(ErrorType)=> {
         if(ErrorType === "unauthorised"){
            await GetFunction(
        "balance",
       setBalanceLoader,
        SuccessHandler,
        async(ErrorType)=> {
          if(ErrorType === "unauthorised"){
            return setSessionModal(true)
          }else if(ErrorType === "Server error"){
               await GetFunction(
        "balance",
        setBalanceLoader,
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
         setBalanceLoader,
        SuccessHandler,
        FailedHandler,
        setPassDataBalance
      );
    };


    //=========Retrieving Gotv Plans=====
    const RetrieveGotvPlans = async () => {
       if(!navigator.onLine) return setCheckNetworkError(true)
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
               if(ErrorType === "User error" || ErrorType === "Network error"){
             setCheckNetworkError(true);
          }else if(ErrorType === "Server error"){
             alert("Failed to fetch Gotv Plans, try again later")
          }else{
            alert("An unexpected error has occured try again later.")
          }
              },
              setFetchedGotvPlans
            );
          }else if(ErrorType === "User error" || ErrorType === "Network error"){
             setCheckNetworkError(true);
          }else if(ErrorType === "Server error"){
             alert("Failed to fetch Gotv Plans, try again later")
          }else{
            alert("An unexpected error has occured try again later.")
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
  //console.log(fetchedGotvPlans.status)
  const GotvOptionalPlan =
    gotvData?.length < 1 && fetchedGotvPlans.status === 200
      ? fetchedGotvPlans?.data?.data?.data
      : gotvData;
  useEffect(() => {
     if(Data?.ConfirmAcc === "true"){
    if (fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201) {
      setGotvData(fetchedGotvPlans?.data?.data?.data);
    } else if (fetchedGotvPlans.status === undefined) {
     RetrieveGotvPlans();
    }
 // Simulate async data loading

  
    GetBalance();
      if (GetBalance) {
        setNewBalance(
          passDataBalance?.data?.data?.data !== undefined
            ? passDataBalance?.data?.data?.data?.balance
            : "");
        }
      
      } else{
           setRestrictUser(true)
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
     setTvSubscriptionResponse({})
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
  const updateBalance = passDataBalance?.data?.data?.data !== undefined
    ? passDataBalance?.data?.data?.data?.balance
    : "";

  //console.log(passDataBalance);
  //console.log(updateBalance);
  const updateBalanceToNumber = Number(updateBalance)
  const newBalanceToNumber = Number(newBalance)
  const methodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-Ng", {
            style : "currency",
            currency : "NGN"
          }) : ""})`,
      flag: nigerianFlag,
      id: 1,
    },
    { method: "USD Wallet", balance: "($0.00)", flag: americaFlag, id: 2 },
    { method: "EUR Wallet", balance: "(€0.00)", flag: britainFlag, id: 3 },
    { method: "GBP Wallet", balance: "(£0.00)", flag: euroFlag, id: 4 },
    { method: "AUD Wallet", balance: "(AU$0.00)", flag: austriaFlag, id: 5 },
    { method: "KES Wallet", balance: "(KSh0.00)", flag: kenyaFlag, id: 6 },
  ];

  function packageDropdown() {
    if (!decoderType) {
      setShowDropdownGOTV(false);
      setErrorFillDecoder(true)
    } else {
      setErrorFillDecoder(false);
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
      const successHandler = (response) => {
        //console.log(response?.data?.data)
        if(response?.data?.data?.data?.status === "success"
          || response?.data?.data?.data?.status === "delivered"
        ||  response?.data?.data?.data?.status === "successful" ||
        response?.data?.data?.data?.status === "Successful"
        ){
          setPurchaseGotvErrorType("");
        setGotvSuccessful(true);
        setInputPinGotv(false);
        setInputPin("");
        }else if(response?.data?.data?.data?.status === "failed"
          || response?.data?.data?.data?.status === "Failed"
        ||  response?.data?.data?.data?.status === "unsuccessful"){
            setPurchaseGotvErrorType("Plan Unavailable: Purchase Failed")
          setFailedPopup(true);
          setInputPinGotv(false);
          setInputPin("");
        }
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
          await PostFunction(
            Path,
            setIsLoading,
            DataJson,
            successHandler,
            (ErrorType) => {
              if(ErrorType === "unauthorised") {
                return setSessionModal(true);
              }else if(ErrorType ==="Server error"){
                setPurchaseGotvErrorType("Server Error: Purchase Failed")
              }else if(ErrorType === "Network error" || ErrorType === "User error"){
              setPurchaseGotvErrorType("Network Error : Purchase Failed")
              }else{
                setPurchaseGotvErrorType("An Unexpected error has occured")
              }
            },
            setTvSubscriptionResponse
          );
        } else if(ErrorType === "Network error" || ErrorType === "User error") {
             setPurchaseGotvErrorType("Network Error: Purchase Failed")
          setFailedPopup(true);
          setInputPinGotv(false);
          setInputPin("");
        }else if(ErrorType === "Server error") {
        setPurchaseGotvErrorType("Server Error: Purchase Failed")
          setFailedPopup(true);
          setInputPinGotv(false);
          setInputPin("");
        }else{
            setPurchaseGotvErrorType("An Unexpected error has occured")
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

      const setFailedConfig= async(ErrorType)=> {
         if(ErrorType === "unauthorised"){
        setSessionModal(true);
           //  setHoldCurrentFunction(VerifyPinHandler)
           //The concept behind this code : A user session is regulated by tokens,
           // the moment we notice it expires we try to get the token for the user before
           // a transaction completed(i.e we get it during a transaction process), when unauthorised
           //we get the necessary tokens, then re-run the transaction, there are different errors that 
           //could occur, when re-running such as: it could return same unauthorised errorType,
           //a server error and even network connnection issue or an unexpected error
           //hence, the reason we account for other types of errors even while re-running,
           //due to the inpredictability of the output of the transaction.
      //  await VerifyTransPin(
      //    inputPin,
      //     async(ErrorType)=> {
      //       // unauthorisation >>> unauthorisation ErrorTypes
      //      if(ErrorType === "unauthorised"){
      //        return setSessionModal(true);
      //      }else if(ErrorType === "Server error"){
      //      await VerifyTransPin(
      //      inputPin,
      //      (ErrorType)=> {
      //       //unauthorisation >>> Server error then error Types
      //      if(ErrorType === "Server error"){
      //      alert("Failed to process your request, try again some other time")
      //      }else if(ErrorType === "Network error" || ErrorType === "User error"){
      //        alert("Kindly check your internet connection.");
      //      }else{
      //       if(ErrorType !== "Bad request"){
      //        alert("Failed to process your request, try some other time.")
      //       }
      //      }
      //    },
      //    setIsLoading,
      //    setErrorMessage,
      //  GotvHandler,
      // );
      // //unauthorisation >>> the "Network error" and "User error" ErrorType
      //      }else if(ErrorType === "Network error" || ErrorType === "User error"){
      //        alert("Kindly check your internet connection.");
      //      }else{
      //       if(ErrorType !== "Bad request"){
      //        alert("Failed to process your request, try some other time.")
      //       }
      //     }
      //     },
      //    setIsLoading,
      //    setErrorMessage,
      //  GotvHandler,
      // );
    //immediate ErrorType to the Failed function...
     }else if(ErrorType === "Server error"){
       //The server could return a 500 then be successful
       //  on next call, so let us try twice.
        await VerifyTransPin(
         inputPin,
         async(ErrorType)=> {
   if(ErrorType === "Server error"){
    alert("Failed to process your request try some other time.")
   }else if(ErrorType === "unauthorised"){
   // Error When "Server error" occured on first try then the server notices 
   // an "unauthorised" ErrorType.
      await VerifyTransPin(
         inputPin,
          (ErrorType)=> {
           //handling of ErrorTypes after unauthorisation occurs in server error re-try
           if(ErrorType === "unauthorised"){
             return setSessionModal(true);
           }else if(ErrorType === "Server error"){
             alert("The server is currently experiencing a downtime, try again some other time.")
           }else if(ErrorType === "User error" || ErrorType === "Network error"){
             alert("Kindly check your internet connection")
           }else{
            if(ErrorType !== "Bad request" || ErrorType !== "User Blocked"){
             alert("Failed to process your request, try some other time.")
            }
          }
          },
         setIsLoading,
         setErrorMessage,
       GotvHandler,
      );
      //End of the "unauthorised" ErrorType handling on "server error"
      //  ErrorType re-run.
    }else if(ErrorType === "User error" || ErrorType === "Network error"){
     //A network error occured  during trying to re-try the code on server error
     alert("Kindly check your internet connection");
   }else{
            if(ErrorType !== "Bad request" || ErrorType !== "User Blocked"){
             alert("Failed to process your request, try some other time.")
            }
          }
         },
         setIsLoading,
         setErrorMessage,
       GotvHandler,
      );
          //The immediate ErrorType on "Network error, User error" ErrorType
         }else if( ErrorType === "User error"
       || ErrorType === "Network error" ){
     alert("Kindly check your internet connection")
     }else{
            if(ErrorType !== "Bad request" || ErrorType !== "User Blocked"){
             alert("Failed to process your request, try some other time.")
            }
          }
         }
   
    await VerifyTransPin(
      inputPin,
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
      const SuccessHandler = (response) => {
        console.log("Succesfully verified tv subscription account.");
        setSmartCard(UserTvSubscription);
        setCardName(response?.data?.data?.data?.name);
        setStateInvalidDecoderNumber(false)
      };
     const FailedHandler = async(ErrorType)=> {
       //1.
     if(ErrorType === "unauthorised"){
       //Handling  the various cases that could occur on 
       //the ErrorType "unauthorised"
        await PostFunction("bills/verify",
          setGotvLoading, 
          bodyToJson, 
          SuccessHandler,
          async(ErrorType)=> {
         if(ErrorType === "unauthorised"){
          return setSessionModal(true);
           }else if(ErrorType === "Server error"){
             //A server error returns only if the auth Token
             //has been retrieved then communication with the server occurs
             //which wouldn't have returned "Server error", if the 
             //"unauthorised" ErrorType occured as a result of authToken
             //being expired and not retrieved through cookies
             //  but 401 returning as error cause.
             //hence we are running again in the ErrorType "Server error" statememt
             //from the unauthorization which was the error from
             //inception or beginning.
             //Not also leaving handling the other ErrorTypes the UI 
             //could be vulnerable to on re-try on server error.
            await PostFunction("bills/verify", setGotvLoading, 
       bodyToJson,
       SuccessHandler, 
      (ErrorType)=> {
       if(ErrorType === "Server error"){
         alert("Failed to process your request, try again some other time.")
       }else if(ErrorType === "Network error" || ErrorType === "User error"
          ){
           alert("Kindly check your internet connection")
          }
      },
        setGotvVerifyResponse)
        //2.Handling the ErrorType "Server error" on the general conditional statement    
           }else if(ErrorType === "Network error" || ErrorType === "User error"){
           //3. Handling the ErrorType "Network error, User error" for the general "unauthorised" 
           //function
           alert("Kindly check your internet connection.")
           }
        }, setGotvVerifyResponse);
        //2. Handling the server for the general conditional 
        // statement under the failedHandler
       }else if(ErrorType === "Server error"){
              await PostFunction("bills/verify", setGotvLoading, 
       bodyToJson,
       SuccessHandler, 
       async(ErrorType)=> {
        if(ErrorType === "Server error"){
          alert("Failed to process your request, try again some other time.")
        }else if(ErrorType === "unauthorised"){
        
             await PostFunction("bills/verify", setGotvLoading, 
       bodyToJson,
       SuccessHandler, 
      (ErrorType)=> {
       if(ErrorType==="unauthorised"){
         setSessionModal(true)
       }else if(ErrorType === "Server error"){
        alert("Failed to process your request, try again some other time")
       }else if(ErrorType === "Network error" || ErrorType === "User error"){
         alert("Kindly check your internet connection")
       }else{
         alert("An unexpected error has occured.")
       }
      },
        setGotvVerifyResponse)
        }else if(ErrorType === "Network error" || ErrorType === "User error") {
     //Handling the network error for the server error of the general function
     alert("Kindly check your internet connection.")
        }else{
         //When an alien errorType occured
         alert("An unexpected error has occured, try again some other time.")
        }
       },
        setGotvVerifyResponse)
        //3.Handling the ErrorType "Network error, User error"
     }else if(ErrorType === "Network error" || ErrorType === "User error"){
       alert("Kindly check your internet connection")
     }
     else if(ErrorType === "Bad request"){
      setStateInvalidDecoderNumber(true)
     }
      else {
       //4. Handling the "alien" ErrorType.
        alert("An unexpected error has occured, try again some other time.")
     }
     }
     

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
    setTvEmail("")
   setMobileNumber("")
   setSmartCard("");
   setTvAmount("");
   setGotvOrderId("");
   setGotvDescription("")
   setGotvTransactionId("");
   setSelectedOptionGOTV("");
   setPackageGotv("");
   setDecoderType("")
    setFlagResult("");
    setTvWalletBalance("");
    setFailedPopup(false);
     setTvSubscriptionResponse({});
    //  navigate("/GoTv");
  };

  if(Data?.ConfirmAcc === "true"){
  window.addEventListener("online", ()=> {
   if(checkNetworkError === true &&
     (updateBalance === undefined || updateBalance === null || updateBalance === "")
    && (newBalance === null || newBalance === undefined || newBalance === "") ){
   return GetBalance()
   }
   if(checkNetworkError === true && (fetchedGotvPlans.status !== 200 || fetchedGotvPlans.status === undefined) ) {
    return RetrieveGotvPlans()
   }
  })
}
console.log(tvSubscriptionResponse?.data?.status)

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
                <div className="py-[9.57px] md:py-[16.61px] align-middle self-center
                 flex flex-col gap-1.5 w-[70%]">
                  <p className="text-[11px] leading-[14px]  lg:leading-[30px]
                   lg:text-[24px] md:text-[13.75px] font-semibold">
                    SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                  </p>
                  <p className="text-[10px] leading-[13px] lg:text-[20px]
                   lg:leading-[25px] md:text-[11.46px]">
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
                <div className="flex flex-col md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                  <div className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[14px] lg:text-[17px]
                       md:text-[13px] '
                      md:font-[600] font-[400]"
                    >
                      Confirm Decoder Type
                    </label>
                    {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-1/2 h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
                    <div
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
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
                        className={`absolute lg:top-[90px] md:top-[60px]  top-[74px] 
                          z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
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
                              className={`pb-[20px] pt-[20px] md:pb-[14px] 
                                md:pt-[14px] font-weight-bold text-[14px] leading-[18.4px] 
                                md:py-[15px]
                                 py-[8px] pl-[10px] font-[500]  
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

                  <div  className="relative flex flex-col gap-[3px] 
            lg:gap-[5px] w-full md:w-1/2">
                    <label
                      htmlFor="decoderType"
                      className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]"                   >
                      Select Package
                    </label>

                    <div
  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
    sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
    pb-[7.794px] pr-[13px]
     pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px]
      md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={packageDropdown} ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[rgb(156,156,156)] text-[#7C7C7C] "
    }`}
                      onClick={packageDropdown}
                    >
                      {selectedOptionGOTV}
                      <img
                        className="imgdrop absolute left-[90%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
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
                      {errorFillDecoder && (
                <p className="text-[12px] leading-[14px] font-semibold 
                lg:text-[14px] lg:leading-[20px] text-left text-red-700">
                 Select a decoder to choose a package
                </p>
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
                      placeholder="XXXXXXXXXX"
                      onChange={handleSmartCard}
                      onInput={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        e.target.value = numericValue;
                      }}
                      maxLength={10}
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
                        md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
                        pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] hover:bg-[#EDEAEA] text-[#7C7C7C]"
    }`}
                    />
                    {errors.smartCard && (
                      <p className="text-[#F95252] text-[13px] 
                      md:text-[12px] lg:text-[14px] font-[400] italic">
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
                       placeholder="Input card number to get verified name"
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
                      className="text-[#7E7E7E] text-[15px] 
                      lg:text-[17px] md:text-[13px] md:font-[600] font-[400]"
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
                      placeholder="XXX XXXX XXXX"
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
                      className={`mt-2 md:mt-0 rounded-[10px] 
                        md:rounded-0 p-[20px] md:p-0  sm:p-3 sm:text-lg 
                        flex justify-between pt-[8.803px] pb-[7.794px] 
                        pr-[13px] pl-[10.876px] font-[400] text-[14px] 
                        leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
     items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full 
     h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] 
      self-center ${
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
                      className="text-[#7E7E7E] text-[15px] 
                      lg:text-[16px] md:text-[12px] md:font-[600] font-[400]"
                    >
                      Amount
                    </label>

                    <input
                    placeholder={"0.00"}
                      type="text"
                      className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]
                         md:p-0 text-[13.8px] 
                        sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
                        pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
                md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px]
                 lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }`}
                      value={`${tvAmount !== undefined ? tvAmount?.toLocaleString("en-NG", {
                      style : "currency",
                      currency : "NGN"
                      }) : "₦"}`}
                      readOnly
                    />
                  </div>

                  <div className="relative flex flex-col gap-[3px] 
                  lg:gap-[5px] w-full md:w-1/2">
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
                      <p className={`font-[500] text-[13px] leading-[10.4px] 
                      md:text-[12px] md:leading-[12.206px] lg:text-[16px]
                       lg:leading-[20.8px] cursor-pointer
                         ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
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
                          cursor-pointer border-[1px] border-gray-100 rounded-[3px]  
                          
                  ${
                    isDarkMode
                      ? "bg-black border-white rounded-[7px] text-white"
                      : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  shadow-xl border w-full lg:w-full  flex flex-col divide-y absolute top-20`}
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
                                setTvWalletBalance(methodOption.id === 1 && tvWalletBalance === ""? 
                                newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
            style : "currency",
            currency : "NGN"
          }) : ""})` : flagResult === "NGN Wallet" ?  newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
            style : "currency",
            currency : "NGN"
          }) : ""})` : "");
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
                             className={`py-[18px] md:py-[14px] font-normal px-2 flex
                         items-center gap-[5px] text-[12px] md:text-[14px] 
                         lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                          transition-all duration-300 hover:bg-slate-50
                       ${
                         isDarkMode
                           ? "text-white hover:bg-slate-800 bg-black "
                           : "text-[#7E7E7E]"
                       } ${
                        methodOption.method === "NGN Wallet"
                          ? "cursor-pointer"
                          : "cursor-not-allowed opacity-50"
                      }`}
                      
                              key={methodOption.id}
                            >
                              <img
                                className="md:h-[29.27px]  h-[14.27px]"
                                src={methodOption.flag}
                                alt=""
                              />

                            
                              
                                {methodOption.method} 
                                  {" "} 

                                {balanceLoader === true && methodOption.id === 1 ? <BalanceLoading/> :  methodOption.balance}
                              
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
            mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px]
             md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] 
             h-[43px] md:h-[30px] lg:h-[40px] flex items-center 
             font-semibold text-[12px] md:text-[11px] lg:text-[16px] 
             text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center`}
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
          <div className={`w-[90%] md:w-[50%] lg:w-[35%] mx-auto 
           rounded-lg overflow-hidden
            ${isDarkMode ? "bg-black border-[1px] rounded-[7px] border-white": "bg-white"}`}>
            <div className="flex justify-between items-center p-4">
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
                className={`w-32 h-32 mx-auto my-6 
                   ${isDarkMode ? "bg-black rounded-full border-[0.1px] border-black": "bg-white"}`}
                src="./Images/failed.png"
                alt="Failed"
              />
              <p className="text-sm text-red-500 font-[600] mb-8">
                {purchaseGotvErrorType}
              </p>
              {tvSubscriptionResponse?.data?.status  ?
               (
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
                  className={`w-[50%]  max-w-xs 
                  mx-auto py-2 
           rounded-md font-medium ${isDarkMode ? "text-blue-900 bg-white border-[0.2px] rounded-[10px]" : "bg-black border-[0.2px] text-white border-blue-900"}`}
                >
                  Receipt
                </button>
              </div>
         
                ): (
                   <button
                  onClick={() => ExitTheDoneButton()}
                  className="bg-[#04177f] w-[100%] max-w-xs mx-auto py-2
           text-white rounded-md font-medium"
                >
                  Done
                </button>
                 )}
                 </div>
                
          </div>
        </Modal>
      )}
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    
      {restrictUser && sessionModal === false && (
        <RestrictionPopUp/>
      )}
  {sessionModal && (
     <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
  ) }
    </div>
  );
};

export default GoTv;
