import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext , useEffect} from "react";
import { useState } from "react";
import arrowDown from '../EducationPins/imagesEducation/arrow-down.svg';
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import ConfirmDstvPopup from "./DstvPopups/confirmDstvPopup";
import { InputDstvPopup } from "./DstvPopups/inputPinDstv"
import DstvSuccessfulPopup from "./DstvPopups/DstvSuccessfulPopup";
import nigerianFlag from '../../Components/EducationPins/imagesEducation/Nigeriaflag.svg';
import americaFlag from '../../Components/EducationPins/imagesEducation/Usa.svg';
import britainFlag from '../../Components/EducationPins/imagesEducation/Britain.svg';
import euroFlag from '../../Components/EducationPins/imagesEducation/GBP.svg';
import austriaFlag from '../../Components/EducationPins/imagesEducation/Austria.svg';
import kenyaFlag from '../../Components/EducationPins/imagesEducation/Kenya.svg';
import {InternalLoginSession, RestrictionPopUp, VerifyTransPin} from "../../Components/ApiCollection.jsx/ApiBuck";
import { Modal } from "../Screens/Modal/Modal";
import {Loader} from "../Loader/Loader"
import {PostFunction} from "../../Components/ApiCollection.jsx/ApiBuck"
import { useNavigate } from "react-router-dom";
import { GetFunction } from "../ApiCollection.jsx/ApiBuck";
import { BalanceLoading } from "../Loader/Loader";
import { GetLocalStorage } from "../LocalStorage/LocalStorage";
const DsTv = () => {
  const {
    dstvFlagResult,
    setDstvFlagResult,
    setConfirmDstvPopup,
    selectedOptionDstv,
   setSelectedOptionDstv,
    showDropdownDstv,
    setShowDropdownDstv,
    dstvEmail,
    setDstvEmail,
    dstvSmartCard,
    decoderActive,
    setDecoderActive,
    methodImage,
    setMethodImage,
    isDarkMode,
    setErrorMessage,
    setDstvSuccessful,
    setInputPinDstv,
    fetchedDstvPlans,
    fetchedGotvPlans,
    dstvAmount,
    setDstvAmount,
     dstvDecoderType,
     setDstvDecoderType,
    setFetchedGotvPlans,
    fetchedShowMaxPlans,
    setFetchedShowMaxPlans,
    fetchedStarTimesPlans,
    setFetchedStarTimesPlans,
    dstvSubscriptionResponse,
    setDstvSubscriptionResponse,
    inputPin,
    setInputPin,
    packageDstv,
    setPackageDstv,
      setDstvOrderId,
   setDstvTransactionId,
    setDstvRequestId,
      setDstvDescription,
      setDstvSmartCard,
      dstvMobileNumber,
      setDstvMobileNumber,
        newBalance,
        setNewBalance,
        setFetchedDstvPlans,
        toggleSideBar,
        
 } = useContext(ContextProvider);
const Data = GetLocalStorage();
   // const [packageDstv, setPackageDstv] = useState("");
  //   const [tvTwoOtp, setTvTwoOtp] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const [failedPopup, setFailedPopup] = useState(false);
     const [dstvData, setDstvData] = useState([]);
     const [passDataBalance, setPassDataBalance] = useState({});
     const [dstvVerifyResponse, setDstvVerifyResponse] = useState({});
     const [dstvLoading, setDstvLoading] = useState(false);
     const [stateInvalidDecoderNumber, setStateInvalidDecoderNumber] = useState(false);
     const [sessionModal, setSessionModal] = useState(false);
     const {purchaseDstvErrorType, setPurchaseDstvErrorType} = useContext(ContextProvider);
     const { setDstvCardName} = useContext(ContextProvider)
      const [checkNetworkError, setCheckNetworkError] = useState(false)
       const [restrictUser, setRestrictUser] = useState(false);
       const [balanceLoader, setBalanceLoader] = useState(false)
      const navigate = useNavigate();
  
const handleOptionClickDstv = (option) => {
       //setSelectedOptionDstv(option);
        setShowDropdownDstv(false);
      };
    
     const Decoders  = [
        { decoderType :'DStv',  id : 1},
          { decoderType :'GOtv', path : "/GoTv", id : 3 },
          { decoderType :' StarTimes', path :  "/StarTimes", id : 2 },
        { decoderType :'Showmax', path : "/Showmax", id : 4 }
         ]
    
const ReceiptButton = ()=> {
    
    setFailedPopup(false);
    handleReceivedData();
   //navigate("/DsTv");
  }

  const ExitTheDoneButton = ()=> {
      setDstvEmail("")
   setDstvMobileNumber("")
   setDstvSmartCard("");
   setDstvCardName("")
   setDstvAmount("");
   setDstvOrderId("");
   setDstvDescription("")
   setDstvTransactionId("");
   setSelectedOptionDstv("");
   setPackageDstv("");
   setDstvDecoderType("")
    setDstvFlagResult("");
    setDstvWalletBalance("");
    setFailedPopup(false);
    setDstvSubscriptionResponse({})
    // navigate("/DsTv");
  }
console.log(dstvSubscriptionResponse?.data?.status);
  

  const handleTvEmail = (e) => {
    const inputValue = e.target.value;
    setDstvEmail(inputValue);
  }

  const handleDstv = (event) => {
    setDstvSubscriptionResponse({})
    event.preventDefault();
    
    const { error } = schema.validate({
      dstvMobileNumber,
      dstvEmail,
      dstvSmartCard,
    });
   if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } 
    else {
      setConfirmDstvPopup(true);
      setErrors({});
    }
};
  const [errors, setErrors] = useState({});

  useEffect(()=> {
  // alert("Who do you think is handling that?")
  if( dstvVerifyResponse?.data?.name?.length < 1 ){
   setStateInvalidDecoderNumber(true);
  }else{
    setStateInvalidDecoderNumber(false)
  }
},[dstvVerifyResponse?.data?.name])

  const GetOtherDataTv = async(id, path)=> {
   const SuccessHandler = ()=> {
    navigate(path);
   };
   const FailedHandler = async(ErrorType)=> {
    console.log("Error");
    if(ErrorType === "unauthorised"){
      await GetFunction(TvPath,
         setIsLoading,
          SuccessHandler,
           (ErrorType)=> {
            if(ErrorType === "unauthorised"){
             return setSessionModal(true);
            }
           }, 
           fetchedResponse)
    }
    
   };
   const SubscriptionPresent =()=> {
    if((fetchedStarTimesPlans.status === 200 || fetchedStarTimesPlans.status ===  201) && id === 2){
      return navigate(path);
    }else if((fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201) && id === 3) {
     return navigate(path);
    }else if((fetchedShowMaxPlans.status === 200 || fetchedShowMaxPlans.status ===  201) && id === 4) {
     return navigate(path);
    }
    }
   let TvPath;
   let fetchedResponse;
    if((fetchedStarTimesPlans.status === undefined || fetchedStarTimesPlans.status ===  null) && id === 2 ){
      TvPath = `products/tvsub/startimes`;
    fetchedResponse = setFetchedStarTimesPlans;
     await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
   }else if((fetchedGotvPlans.status === undefined || fetchedGotvPlans.status === null) && id === 3){
      TvPath = `products/tvsub/gotv`;
    fetchedResponse = setFetchedGotvPlans;
     await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
   }else if ((fetchedShowMaxPlans.status === undefined || fetchedShowMaxPlans.status ===  null) && id === 4){
    TvPath = `products/tvsub/showmax`;
    fetchedResponse = setFetchedShowMaxPlans;
     await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
   }else{
    return SubscriptionPresent();
  }
  }
  
  

  const RetrieveGotvPlans = async()=> {
  if(!navigator.onLine) return setCheckNetworkError(true)
          const SuccessHandler = ()=> {
    console.log("Successfully fetched dstv plans");
   }
     const failedHandler = async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
    await GetFunction(`products/tvsub/dstv`, 
      setIsLoading,
       SuccessHandler,
        (ErrorType)=> {
         if(ErrorType === "User error" || ErrorType === "Network error"){
             setCheckNetworkError(true);
          }else if(ErrorType === "Server error"){
             alert("Failed to fetch DStv Plans, try again later")
          }else{
            alert("An unexpected error has occured try again later.")
          }
      },
         setFetchedDstvPlans);
      }else if(ErrorType === "User error" || ErrorType === "Network error"){
             setCheckNetworkError(true);
          }else if(ErrorType === "Server error"){
             alert("Failed to fetch Gotv Plans, try again later")
          }else{
            alert("An unexpected error has occured try again later.")
          }
     }
      
 await GetFunction(`products/tvsub/dstv`, 
  setIsLoading, 
  SuccessHandler,
   failedHandler,
    setFetchedDstvPlans);
}

const DstvOptionalPlan = dstvData?.length < 1 && fetchedDstvPlans.status === 200 ? fetchedDstvPlans?.data?.data?.data : dstvData;

//=========Retrieving GOtv Plans =====
 
//Retrieving User's Balance ======
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
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setCheckNetworkError(true)
              alert("Kindly check your internet connection to retrieve balance.")
        }else {
          alert("An unexpected error has occured on attempt to retrieve balance.")
        }
       },
        setPassDataBalance
      );
       }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setCheckNetworkError(true)
           alert("Kindly check your internet connection to retrieve balance")
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
        setIsLoading,
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
          setCheckNetworkError(true)
 alert("Kindly check your internet connection to retrieve balance")
      }else{
        alert("An Unexpected error occured in attempt to retrieve balance")
      }

       },
        setPassDataBalance
      );
          }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setCheckNetworkError(true)
 alert("Kindly check your internet connection to retrieve the balance")
            setCheckNetworkError(true)
          }else{
            alert("An Unexpected error occured in attempt to retrieve balance")
          }
        },
        setPassDataBalance
      );
    }
          else if(ErrorType === "Network error" || ErrorType === "User error"){
            //The operation was interrupted by a network error
             setCheckNetworkError(true)
            alert("Kindly check your internet connection to retrieve balance.")
         }else {
          //An alien error has occured with the re-run of the "Server error" ErrorType
          alert("An unexpected error occured in attempt to retrieve the balance.")
         }
       },
        setPassDataBalance
      );
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
        setCheckNetworkError(true)
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
      useEffect(()=> {
        if(Data?.ConfirmAcc === "true"){
       if(fetchedDstvPlans.status === 200 || fetchedDstvPlans.status === 201){
      setDstvData(fetchedDstvPlans?.data?.data?.data);
      }else if(fetchedDstvPlans.status === undefined){
      RetrieveGotvPlans()
}

                     // Simulate async data loading
                     
                  
                        GetBalance();
                        if(GetBalance){
                         setNewBalance(passDataBalance?.data?.data?.data !== undefined
                           ? passDataBalance?.data?.data?.data?.balance : "");
                        }
                      
                      }else{
                       setRestrictUser(true)
                      }
     //eslint-disable-next-line             
      },[])
       
  

  const schema = Joi.object({
    dstvSmartCard: Joi.string().regex(/^\d{10,}$/).required()
      .messages({
        "string.pattern.base": "Smart card number should be more than 10 digits",
      }),
    dstvMobileNumber: Joi.string().regex(/^\d{11}$/).required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits",
      }),
      dstvEmail: Joi.string()
      .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      .required()
      .messages({ "string.pattern.base": "Invalid email" 
    })
  });

  const handleGOTVMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setDstvMobileNumber(inputValue);

  };


  const { methodPayment, setMethodPayment } = useContext(ContextProvider);
  const { dstvWalletBalance, setDstvWalletBalance } = useContext(ContextProvider);



  function methodDropDown() {
    setMethodPayment(!methodPayment);
    document.querySelector('.methodDrop').classList.toggle('DropIt');
  }

  const updateBalance = passDataBalance?.data?.data  ? passDataBalance?.data?.data?.data?.balance : "";
  const updateBalanceToNumber = Number( updateBalance);
  const newBalanceToNumber = Number(newBalance)
  const methodOptions = [
    { method: 'NGN Wallet', 
       balance : 
       newBalance === "" || newBalance === null || newBalance === undefined  ? `(${updateBalanceToNumber?.toLocaleString("en-NG",{
        style : "currency",
        currency : "NGN"
       })})` : `(${ newBalanceToNumber?.toLocaleString("en-NG",{
        style : "currency",
        currency : "NGN"
       }) })`, 
       flag: nigerianFlag, id: 1 },
    { method: 'USD Wallet ', balance: '($0.00)', flag: americaFlag, id: 2 },
    { method: 'EUR Wallet', balance: '(€0.00)', flag: britainFlag, id: 3 },
    { method: 'GBP Wallet', balance: '(£0.00)', flag: euroFlag, id: 4 },
    { method: 'AUD Wallet', balance: '(AU$0.00)', flag: austriaFlag, id: 5 },
    { method: 'KES Wallet', balance: '(KSh0.00)', flag: kenyaFlag, id: 6 }
  ];

const [errorFillDecoder, setErrorFillDecoder] = useState(false);
  function packageDropdown() {
    if (!dstvDecoderType) {
      setShowDropdownDstv(false);
      setErrorFillDecoder(true)
    }
    else {
    setShowDropdownDstv(!showDropdownDstv)
      document.querySelector('.imgdrop').classList.toggle('DropIt');
      setErrorFillDecoder(false);
    
    }
  }

  function decoderDropdown() {
    setDecoderActive(!decoderActive)
    document.querySelector('.decdrop').classList.toggle('DropIt');
    if(dstvDecoderType){
      setErrorFillDecoder(false);
    }
  }

  const handleReceivedData = () => {
  setIsLoading(true);
  const receivedData = () => {
    // Seting the relevant data from the TV subscription response
    setDstvOrderId(dstvSubscriptionResponse?.data ? dstvSubscriptionResponse?.data?.order_id : "");
    setDstvTransactionId(dstvSubscriptionResponse?.data ?  dstvSubscriptionResponse?.data?.transaction_id : "");
    setDstvRequestId(dstvSubscriptionResponse?.data ?  dstvSubscriptionResponse?.data?.request_id : "");
    setDstvDescription(dstvSubscriptionResponse?.data ? dstvSubscriptionResponse?.data?.transaction_description : "");
  };

  receivedData();
  
  if (receivedData) {
    setDstvSuccessful(false);
    setIsLoading(false);
    navigate("/DstvReceipt");
     }
};

// VerifyPinHandler to handle both success and failure cases:
const VerifyPinHandler = async () => {
    const DstvHandler = async () => {

      const requestData = {
        decoder_type: dstvDecoderType.toLowerCase(),
        package: packageDstv,
        iuc_number: dstvSmartCard,
        email: dstvEmail,
        amount: dstvAmount,
        phone: dstvMobileNumber,
      };

      const Path = "bills/tvsub";
      const successHandler = (response) =>{
       if(response?.data?.data?.data?.status === "success"
          || response?.data?.data?.data?.status === "delivered"
        ||  response?.data?.data?.data?.status === "successful" ||
        response?.data?.data?.data?.status === "Successful"
        ){
          setPurchaseDstvErrorType("");
        setDstvSuccessful(true);
        setInputPinDstv(false);
        setInputPin("");
        }else if(response?.data?.data?.data?.status === "failed"
          || response?.data?.data?.data?.status === "Failed"
        ||  response?.data?.data?.data?.status === "unsuccessful"){
            setPurchaseDstvErrorType("Plan Unavailable: Purchase Failed")
          setFailedPopup(true);
          setInputPinDstv(false);
          setInputPin("");
        }
      //  handleReceivedData()
      }
      const FailedHandler = async(ErrorType) =>{
        //Then for the Failed Handler all we have to do is create a state
        // to handle which set to the ErrorType then placed into the faiked popup
        if(ErrorType === "unauthorised"){
         await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        (ErrorType)=> {
          if(ErrorType === "unauthorised"){
            return setSessionModal(true)
          }else if(ErrorType === "Server error"){
          //Why arepition did not occur here,
          //We dont want it to be only about User experience here,
          //There are several things that could happen to the backend,
          // and there is also a possibility that the server was able to process and 
          //initiate the transaction but still returned 500,
          //so we need to prevent the case of carrying two transaction for a user,
          //which doesn't only affect us through service of the platform we are using,
          //but also unrest and panic to the user and the amount for purchase and 
          //been removed twice without a result or successful output.
          setPurchaseDstvErrorType("Server Error: Purchase Failed")
       setFailedPopup(true);
       setInputPinDstv(false);
         setInputPin("")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setPurchaseDstvErrorType("Network Error: Purchase Failed");
          setFailedPopup(true);
       setInputPinDstv(false);
         setInputPin("")
        }else {
           setFailedPopup(true);
       setInputPinDstv(false);
         setInputPin("")
      setPurchaseDstvErrorType("An Unexpected error has occured");
        }
        },
        setDstvSubscriptionResponse
      );
        }else if(ErrorType === "Server error"){
          //Why arepition did not occur here,
          //We dont want it to be only about User experience here,
          //There are several things that could happen to the backend,
          // and there is also a possibility that the server was able to process and 
          //initiate the transaction but still returned 500,
          //so we need to prevent the case of carrying two transaction for a user,
          //which doesn't only affect us through service of the platform we are using,
          //but also unrest and panic to the user and the amount for purchase and 
          //been removed twice without a result or successful output.
          setPurchaseDstvErrorType("Server Error: Purchase Failed")
       setFailedPopup(true);
       setInputPinDstv(false);
         setInputPin("")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setPurchaseDstvErrorType("Network Error: Purchase Failed");
          setFailedPopup(true);
       setInputPinDstv(false);
         setInputPin("")
        }else {
     setFailedPopup(true);
        setInputPinDstv(false);
         setInputPin("")
      setPurchaseDstvErrorType("An Unexpected error has occured");
        }
      }
      
      await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        FailedHandler,
         setDstvSubscriptionResponse
      );
    };
  
    const setFailedConfig= async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
        //The concept behind this code : A user session is regulated by tokens,
        // the moment we notice it expires we try to get the token for the user before
        // a transaction completed(i.e we get it during a transaction process), when unauthorised
        //we get the necessary tokens, then re-run the transaction, there are different errors that 
        //could occur, when re-running such as: it could return same unauthorised errorType,
        //a server error and even network connection issue or an unexpected error
        //hence, the reason we account for other types of errors even while re-running,
        //due to the inpredictability of the output of the transaction.
    await VerifyTransPin(
      inputPin,
       async(ErrorType)=> {
        if(ErrorType === "unauthorised"){
          return setSessionModal(true)
        }else if(ErrorType === "Server error"){
         await VerifyTransPin(
      inputPin,
      (ErrorType)=> {
        if(ErrorType === "Server error"){
        alert("Failed to process your request, try again some other time")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          alert("Kindly check your internet connection.")
        }else{
          alert("Failed to process your request, try some other time.")
        }
      },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
        }
       },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
   //Handling of user error or network error for the general
   //  conditional statement under the setPinFailed
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
        }
       },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
   //End of the "unauthorised" ErrorType handling on "server error"
   //  ErrorType re-run.

}else if(ErrorType === "User error" || ErrorType === "Network error"){
  //A network error occured  during trying to re-try the code on server error
  alert("Kindly check your internet connection");
}
      },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
       //The general error message on an "Network error, User error" ErrorType
      }else if( ErrorType === "User error"
    || ErrorType === "Network error" ){
  alert("Kindly check your internet connection")
  }
    }

    //The first run of the verifyTransPin
    await VerifyTransPin(
      inputPin,
       setFailedConfig,
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );

   //In any case the the ""User error, Network error, Bad request," occurs
   //it returns to the user the necessary information through the alert message
   //then they know what to do, especially if it is an internet connection error, they know to retry 
   //the request(which happens manually).
   //
 };

 let userVerifiedName = dstvVerifyResponse?.data ? dstvVerifyResponse?.data?.name : "";
//Function to help Verify users account
const VerifyUserAccount = async(UserTvSubscription)=> {
 setDstvVerifyResponse({});
  const body = {
       decoder_type : dstvDecoderType.toLowerCase(),
       iuc_number : UserTvSubscription
        }
        const bodyToJson = JSON.stringify(body)
 const SuccessHandler = (response)=> {
  console.log("Succesfully verified tv subscription account.");
setDstvSmartCard(UserTvSubscription);
setDstvCardName(response?.data?.data?.data?.name);

}


//Handling the Failed Handler
const FailedHandler = async(ErrorType)=> {
  //1.
if(ErrorType === "unauthorised"){
  //Handling  the various cases that could occur on 
  //the ErrorType "unauthorised"
   await PostFunction("bills/verify",
     setDstvLoading, 
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
       await PostFunction("bills/verify", setDstvLoading, 
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
   setDstvVerifyResponse)
   //2.Handling the ErrorType "Server error" on the general conditional statement
      
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
      //3. Handling the ErrorType "Network error, User error" for the general "unauthorised" 
      //function
      alert("Kindly check your internet connection.")
      }

   }, setDstvVerifyResponse);
  //2. Handling the server for the general conditional 
        // statement under the failedHandler then re-running 
  }else if(ErrorType === "Server error"){
         await PostFunction("bills/verify", setDstvLoading, 
  bodyToJson,
  SuccessHandler, 
  async(ErrorType)=> {
   if(ErrorType === "Server error"){
     alert("Failed to process your request, try again some other time.")
   }else if(ErrorType === "unauthorised"){
    //The ErrorType "unauthorised" can occur on trying to
    //re-run the code due aforementioned reason
        await PostFunction("bills/verify", setDstvLoading, 
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
   setDstvVerifyResponse)
   }else if(ErrorType === "Network error" || ErrorType === "User error") {
//Handling the network error for the server error of the general function
alert("Kindly check your internet connection.")
   }else{
    //When an alien errorType occured
    alert("An unexpected error has occured, try again some other time.")
   }
  },
   setDstvVerifyResponse)
   //3.Handling the ErrorType "Network error, User error"
}else if(ErrorType === "Network error" || ErrorType === "User error"){
  alert("Kindly check your internet connection")
}else {
  //4. Handling the "alien" ErrorType.
   alert("An unexpected error has occured, try again some other time.")
}
}

//The Call to verify the decoder number
   if(UserTvSubscription?.length === 10 && 
    (UserTvSubscription !== "" && 
      UserTvSubscription !== null && 
      UserTvSubscription !== undefined)){
       await PostFunction("bills/verify",
        setDstvLoading, 
      bodyToJson,
      SuccessHandler, 
     FailedHandler,
   setDstvVerifyResponse)
}
}
//console.log(userVerifiedName)

 const handleSmartCard = async(e) => {
    const inputValue = e.target.value;
  await VerifyUserAccount(inputValue);
 }
 
console.log(dstvAmount)

//======Running the Balance and the retrieving if the following 
//Conditions are met
if(Data?.ConfirmAcc === "true"){
window.addEventListener("online", ()=> {
   if(checkNetworkError === true &&
     (updateBalance === undefined || updateBalance === null || updateBalance === "")
    && (newBalance === null || newBalance === undefined || newBalance === "") ){
   return GetBalance()
   }
   if(checkNetworkError === true && (fetchedDstvPlans.status !== 200 || fetchedDstvPlans.status === undefined) ) {
    return RetrieveGotvPlans()
   }
  })
}


  return (
    <div>
      <DashBoardLayout>

        <div className={style.AirtimeTops}>
          <div className={style.airtimeTop}>
            <div>
             <div id='tvBackground' className="min-h-[90px] py-[15px] lg:h-[196px] 
             md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] 
             lg:rounded-[20px] mx-auto  flex gap-6 justify-between
              px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                            <div className="py-[9.57px] md:py-[16.61px] align-middle 
                            self-center flex flex-col gap-1.5 w-[70%]">
                                <p className="text-[11px] leading-[13px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">
                                    SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                                    </p>
                                <p className="text-[10px] leading-[13px] lg:leading-[25px]
                                 lg:text-[20px] md:text-[11.46px]">
                                Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                                </p>
                            </div>
                            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                                <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                            </div>
                        </div>

        <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[37px] md:py-[28.64px]">
          <div className="flex text-[#7E7E7E] text-[10px] lg:text-[18px] md:text-[14px font-semibold">
            <span>Subscribe Your</span> &nbsp;
            <img src="./Images/TvSubscription/dstvIcon.svg" alt="" className="md:w-[60px] md:h-[15px] lg:w-[98px] lg:h-[18.6px]"/>
            <span>Decoder Instantly</span>
          </div>
          <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
        </div>

        <div className="flex flex-col gap-[20px] md:gap-0">
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px md:font-[600] font-[400]">
                Confirm Decoder Type</label>
                <div className="flex flex-col gap-[5px] lg:gap-[10px]">
              <div onClick={decoderDropdown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={decoderDropdown} ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
    }`} >
                {dstvDecoderType}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle decdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" src={arrowDown} alt="" />
      
              </div>
             
            </div>

                      {decoderActive && (
         <div className={`absolute lg:top-[90px] md:top-[60px] top-[74px] z-[2] flex flex-col w-[100%] lg:h-225px md:h-[210px]  
        ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : ""
    }`}>
          {(Decoders.map(decoder => {
            return (
               <p 
               onClick={(e =>{
          setDstvDecoderType(decoder.id === 1 ? decoder.decoderType : "");
          GetOtherDataTv(decoder.id, decoder.path)
                 setDecoderActive(false);
             document.querySelector('.decdrop').classList.remove('DropIt');
             console.log(e);
              })}
              className={`pb-[20px] md:pb-[14px] pt-[20px] md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500]   
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer ${
          isDarkMode 
            ? "bg-black text-white border border-white" 
            : "hover:bg-[#EDEAEA] bg-white border-[#9C9C9C] text-[#7C7C7C] "
        }`} 
         key= {decoder.id}>
      <h2>{decoder.decoderType}   </h2>
         </p>
        
            )
          }))}
         
          
             </div>
      )}
            </div>

            <div className="relative flex flex-col gap-[3px] 
            lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px md:font-[600] font-[400]">
                Select Package</label>

              <div onClick={packageDropdown}
               className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={packageDropdown} ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`}>
                {selectedOptionDstv}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle
                 imgdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[15px]" src={arrowDown} alt="" />
              </div>

              {    showDropdownDstv && (
                <ul className={`dropdown-options z-[2] absolute top-[100%]
                 w-full ${DstvOptionalPlan?.length > 1 ? "h-[300px] overflow-y-scroll" : "h-[0px]"} bg-white cursor-pointer`}>
                  {DstvOptionalPlan.map((option, index) => (
                    <li
                      className={`pb-[20px] pt-[20px] md:pb-[14px] 
                        md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] 
                        md:py-[15px] py-[8px] pl-[10px] font-[500] 
                      md:text-[13.227px] md:leading-[17.195px] 
                      shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                      lg:text-[16px] lg:leading-[20.8px] cursor-pointer  dropdownCSS ${
                        isDarkMode 
                          ? "bg-black text-white border border-white" 
                          : "hover:bg-[#EDEAEA] border-[#9C9C9C]  bg-white text-[#7C7C7C] "
                      }`}
                      key={index}
                      onClick={() =>{
                        handleOptionClickDstv();
                        setSelectedOptionDstv(`${option?.PackageName}`)
                        setPackageDstv(option?.Package)
                        setDstvAmount(option?.Amount)
                        document.querySelector(".imgdrop").classList.remove("DropIt");
                      }
                      }
                    >
                    {`${option.PackageName} `}
                    </li>
                  ))}
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
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px font:[400] md:font-[600]">
                Smart Card / IUC Number</label>
              <input type="tel"
              onInput={(e =>{
                const numericValue = e.target.value.replace(/\D/g, '');
                    e.target.value = numericValue
                })} placeholder={"XXXXXXXXXX"}
                onChange={handleSmartCard} 
                maxLength ={10}
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`} />
             {errors.dstvSmartCard && <p className="text-[#F95252] text-[13.2px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.dstvSmartCard}</p>}
                {(!errors.dstvSmartCard && stateInvalidDecoderNumber) && (
                   <p className ="text-[14px] top-0 font-[500] text-red-500 text-left
           lg:text-[14px] lg:leading-[20px] leading-[18px] ">
            Invalid iuc number
          </p>
                )}
            </div>

            <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Card Name</label>
              <input type="text"
              readOnly value={userVerifiedName}
              placeholder="Input card number to get verified name"
                 className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 
                  text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.9270px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
  }`} />
  {dstvLoading && (
      <p className="left-[10px] absolute top-[60%]">
     <BalanceLoading/>
     </p>
  )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Phone Number</label>
              <input id="val" value={dstvMobileNumber}
                onChange={handleGOTVMobileNumberChange}
                onInput={(e =>{
    
                  const numericValue = e.target.value.replace(/\D/g, '');
                      e.target.value = numericValue
                     if(numericValue.length === 11){
                      e.target.style.border = '2px solid green';
                    }
                    else if(e.target.value.length < 11){
                    e.target.style.border = '2px solid red';
                  }
                
                   })}
                   placeholder="XXX XXXX XXXX"
                type="tel" maxLength={11} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`} />
              {errors.dstvMobileNumber && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.dstvMobileNumber}</p>}
            </div>
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="Email" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Email</label>
              <input type="email" onChange={handleTvEmail} 
              placeholder="example@gmail.com" 
              
              required 
              className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
                md:p-0 text-[14px]  sm:p-3 sm:text-lg flex justify-between 
                pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  
                leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px]
     md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
  }`} />
              {errors.dstvEmail && <p className="text-[#F95252] text-[13.4px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.dstvEmail}</p>}
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Amount</label>


              <input
                type="text"
                placeholder={"0.00"}
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[500]  leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] self-center ${
                  isDarkMode 
                  ? "bg-black text-white border border-white" 
                  : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
              }`}
                value={`${(dstvAmount !==  undefined || dstvAmount !== null) ? dstvAmount?.toLocaleString("en-NG", {
                  style : "currency",
                  currency : "NGN"
                }) : "₦"  }`}
                // value={`₦${dstvAmount !== " "? dstvAmount : ""}`}
              readOnly/>

            </div>

            <div className="flex relative flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Payment Method</label>
              <div onClick={methodDropDown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13px] sm:p-3 sm:text-lg flex items-center justify-between border-[0.23px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] border-[#9C9C9C] ${
                    isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
                }`}>
                <p className={`font-[500] text-[13px] leading-[10.4px] md:text-[9.389px] 
                md:leading-[12.206px] lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer
                ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                   {`${dstvFlagResult}  ${" "} ${dstvWalletBalance}`}
                </p>
                <img className='methodDrop h-[16px] w-[14px] md:h-[14.038px]
                 md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
                  src={methodImage} alt="" />
              </div>
              {methodPayment && (
                <div className={`absolute top-[102%] z-0 flex flex-col w-[100%]  cursor-pointer    
                ${
                    isDarkMode
                      ? "bg-black border-white rounded-[7px] text-white"
                      : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  shadow-xl border w-full lg:w-full  flex flex-col divide-y absolute top-20`}>

                  {(methodOptions.map(methodOption => {
                    return (
                      <div
                        onClick={(e => {
                           setDstvFlagResult(methodOption.id === 1 ? methodOption.method : (dstvFlagResult === "NGN Wallet" && methodOption.id !== 1 ) ? "NGN Wallet" : "");
                          setDstvWalletBalance(methodOption.id === 1 && dstvWalletBalance === ""? 
                                                          newBalance === "" || newBalance === null || newBalance === undefined
                                    ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
                                         style : "currency",
                                         currency : "NGN"
                                    }) : ""})`
                                    : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                    }) : ""})` : dstvFlagResult === "NGN Wallet"  ?  newBalance === "" || newBalance === null || newBalance === undefined
                                    ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
                                         style : "currency",
                                         currency : "NGN"
                                    }) : ""})`
                                    : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                    }) : ""})` : "");
                          setMethodImage(methodOption.id === 1 ? methodOption.flag : methodImage);
                                setMethodPayment(false);
                               setMethodPayment(()=> {
                            if(methodOption.id === 1){
                            setMethodPayment(false)
                             document.querySelector('.methodDrop').classList.remove('DropIt');
                            }else{
                              setMethodPayment(true);
                                document.querySelector('.methodDrop').classList.add('DropIt');
                            }
                          });
                        })}
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
                        key={methodOption.id}>
 <img className='md:h-[29.27px]  h-[14.27px]' 
 src={methodOption.flag} alt="" />

         {methodOption.method } {" "}
                     {balanceLoader === true && methodOption.id === 1 ? <BalanceLoading/> :  methodOption.balance}
                      </div>

                    )
                  }))}


                </div>
              )}

            </div>
          </div>
        </div>

        <button onClick={handleDstv}
          disabled={dstvMobileNumber.length !== 11 || !userVerifiedName || !dstvEmail || !dstvSmartCard || !dstvDecoderType || !selectedOptionDstv ||!dstvFlagResult}
          className={`
             ${dstvMobileNumber.length !== 11 || !userVerifiedName || !dstvEmail || !dstvSmartCard || !dstvDecoderType || !selectedOptionDstv || !dstvFlagResult
              ? "bg-[#63616188] "
              : "bg-primary"
            }
            mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-cente font-[400] text-[12px] md:text-[11px] lg:text-[16px] text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center md:pt-2 pt-3`}>
          Proceed</button>
            </div>
          </div>

          <div className={style.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
          </div>
            
        </div>
 

      </DashBoardLayout>
      <ConfirmDstvPopup  passDataBalance ={passDataBalance} userVerifiedName ={userVerifiedName}/>
      <InputDstvPopup VerifyPinHandler={VerifyPinHandler}/>
      <DstvSuccessfulPopup handleReceivedData = {handleReceivedData} userVerifiedName = {userVerifiedName} />
     {/* Failed Transaction Popup */}
   {failedPopup && (
    <Modal>
       <div  className={`w-[90%] md:w-[50%] lg:w-[35%] mx-auto 
           rounded-lg overflow-hidden
            ${isDarkMode ? "bg-black border-[1px] rounded-[7px] border-white": "bg-white"}`}>
         <div className="flex justify-between items-center p-4">
           <img
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
                   ${isDarkMode ? "bg-black rounded-full border-[0.1px] border-black"
                    : "bg-white"}`}
             src="./Images/failed.png"
             alt="Failed"
           />
           <p className="text-sm text-red-500 font-[600] mb-8">
             {purchaseDstvErrorType}
           </p>
              {dstvSubscriptionResponse?.data?.status ?
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
           rounded-md font-medium ${isDarkMode ? "text-blue-900 bg-white border-[0.2px] rounded-[10px]" 
           :  "bg-white border-[0.2px]  rounded-[2px] text-black border-blue-900"}`}>
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
                  <Loader/>
   
              </Modal>
         ) } 
         {sessionModal && (
           <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
         )}
         {sessionModal=== false && restrictUser && (
          <RestrictionPopUp/>
         )}
    </div>
  )
}

export default DsTv