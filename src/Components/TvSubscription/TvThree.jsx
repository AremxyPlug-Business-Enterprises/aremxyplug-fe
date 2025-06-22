import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import arrowDown from '../EducationPins/imagesEducation/arrow-down.svg';
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import ConfirmStarTimesPopup from "./StarTimesPopups/confirmStarTimesPopup";
import { InputStarTimesPopup } from "./StarTimesPopups/inputPinStarTimes"
import StarTimesSuccessfulPopup from "./StarTimesPopups/StarTimesSuccessfulPopup";
import nigerianFlag from '../../Components/EducationPins/imagesEducation/Nigeriaflag.svg';
import americaFlag from '../../Components/EducationPins/imagesEducation/Usa.svg';
import britainFlag from '../../Components/EducationPins/imagesEducation/Britain.svg';
import euroFlag from '../../Components/EducationPins/imagesEducation/GBP.svg';
import austriaFlag from '../../Components/EducationPins/imagesEducation/Austria.svg';
import kenyaFlag from '../../Components/EducationPins/imagesEducation/Kenya.svg';
import {VerifyTransPin} from "../../Components/ApiCollection.jsx/ApiBuck";
import {Loader} from "../Loader/Loader";
import {Modal} from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import {PostFunction} from "../../Components/ApiCollection.jsx/ApiBuck";
import { GetFunction } from "../ApiCollection.jsx/ApiBuck";
import { BalanceLoading } from "../Loader/Loader";

const StarTimes = () => {

  const {
    setConfirmStarTimesPopup,
    selectedOptionStarTimes,
    showDropdownStarTimes,
    setShowDropdownStarTimes,
    setSelectedOptionStarTimes,
  inputPin,
    setCardName,
   // cardName,
   starTimesEmail,
   setStarTimesEmail,

    setStarTimesSmartCard,
    starTimesSmartCard,
   setInputPin,
  setStarTimesDecoderType,
  starTimesDecoderType,
    decoderActive,
    setDecoderActive,
    setMethodImage,
    methodImage,
    isDarkMode,
    fetchedStarTimesPlans,
    starTimesAmount,
    setStarTimesAmount,
    setStarTimesSuccessful,
     setInputPinStarTimes,
     setErrorMessage,
    // setSuccessPopup,
      fetchedGotvPlans,setFetchedGotvPlans,
    fetchedDstvPlans, setFetchedDstvPlans,
    fetchedShowMaxPlans, setFetchedShowMaxPlans,
     setStarTimesOrderId,
     setStarTimesTransactionId,
 //setStarTimesRequestId,
   setStarTimesDescription,
     starTimesSubscriptionResponse,
     setStarTimesSubscriptionResponse,
    newBalance,
    setNewBalance,
    packageStarTimes,
    setPackageStarTimes,
    starTimesMobileNumber,
    setStarTimesMobileNumber,
    setFetchedStarTimesPlans
  } = useContext(ContextProvider);
      

   
 
    const [isLoading, setIsLoading] = useState(false)
    const [failedPopup, setFailedPopup] = useState(false);
      const [successConfig, setSuccessConfig] = useState("")
           const [failedConfig, setFailedConfig] = useState("");
             const [starTimesVerifyResponse, setStarTimesVerifyResponse] = useState({});
                const [starTimesLoading, setStarTimesLoading] = useState(false);
                const [stateInvalidDecoderNumber, setStateInvalidDecoderNumber] = useState(false);
                const [passDataBalance, setPassDataBalance] = useState({});
                const [starTimesData, setStarTimesData] = useState([]);
    const navigate = useNavigate();

    
    useEffect(()=> {
      // alert("Who do you think is handling that?")
      if( starTimesVerifyResponse?.data?.name?.length < 1 ){
       setStateInvalidDecoderNumber(true);
      }else{
        setStateInvalidDecoderNumber(false)
      }
    },[starTimesVerifyResponse?.data?.name])
           

  const handleOptionClickStarTimes = (option) => {
    //setSelectedOptionStarTimes(option);
    setShowDropdownStarTimes(false);
  };

  const GetOtherDataTv = async(id, path)=> {
    const SuccessHandler = ()=> {
     navigate(path);
    }
    const FailedHandler = async()=> {
     console.log("Error")
     await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
    }
   
    const SubscriptionPresent =()=> {
     if((fetchedDstvPlans.status === 200 || fetchedDstvPlans.status ===  201) && id === 2 ){
       return navigate(path)
     }else if((fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201) && id === 3) {
      return navigate(path)
     }else if((fetchedShowMaxPlans.status === 200 || fetchedShowMaxPlans.status === 201) && id === 4) {
      return navigate(path)
     }
     
    }
   
    let TvPath;
    let fetchedResponse;
     if((fetchedDstvPlans.status === undefined || fetchedDstvPlans.status === null) && id === 2 ){
       TvPath = `products/tvsub/dstv`;
     fetchedResponse = setFetchedDstvPlans;
      await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
     
    }else if((fetchedGotvPlans.status === undefined || fetchedGotvPlans.status === null) && id === 3){
       TvPath = `products/tvsub/gotv`;
     fetchedResponse = setFetchedGotvPlans;
      await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
    
   }else if ((fetchedShowMaxPlans.status === undefined || fetchedShowMaxPlans.status === null) && id === 4){
     TvPath = `products/tvsub/showmax`;
     fetchedResponse = setFetchedShowMaxPlans;
      await GetFunction(TvPath, setIsLoading, SuccessHandler, FailedHandler, fetchedResponse)
    
   }else{
     return SubscriptionPresent();
   }
   }

   const starTimesOptionalPlan = starTimesData?.length < 1 && fetchedStarTimesPlans.status === 200 ? fetchedStarTimesPlans.data.data.data : starTimesData;
         useEffect(()=> {
          if(fetchedDstvPlans.status === 200 || fetchedDstvPlans.status === 201){
         setStarTimesData(fetchedStarTimesPlans.data.data.data);
         }else if(fetchedStarTimesPlans.status === undefined){
          const RetrieveGotvPlans = async()=> {
             const SuccessHandler = ()=> {
       console.log("Successfully fetched startimes plans");
      }
        const failedHandler = async()=> {
       console.log("Couldn't fetch starTimes plans");
       await GetFunction(`products/tvsub/startimes`, setIsLoading, SuccessHandler, failedHandler, setFetchedStarTimesPlans);
       }
         
    await GetFunction(`products/tvsub/startimes`, setIsLoading, SuccessHandler, failedHandler, setFetchedStarTimesPlans);
   
     }
   RetrieveGotvPlans()
   }
    const GetBalance =   async()=> {
                           const SuccessHandler = ()=> {
                         //alert("Successful");
                    console.log("successfully retrieved balance");
                    //alert("Successful")
                      }
                     const FailedHandler = async()=> {
                       console.log(`Failed to retrieve balance`)
                       await GetFunction("balance", setIsLoading, SuccessHandler, FailedHandler,setPassDataBalance)
                     }
                     await GetFunction("balance", setIsLoading, SuccessHandler, FailedHandler,setPassDataBalance)
                       } 
                        // Simulate async data loading
                       if(newBalance === "" || newBalance === null || newBalance === undefined){
                           GetBalance();
                           if(GetBalance){
                            setNewBalance(passDataBalance?.data ? passDataBalance.data.data.data.balance : "");
                           }
                         }
        //eslint-disable-next-line             
         },[])
          
     
     
   

  
  const Decoders  = [
    { decoderType :'StarTimes',  id : 1},
      { decoderType :'DStv', path :  "/DsTv", id : 2 },
      { decoderType :'GOtv', path : "/GoTv", id : 3 },
    { decoderType :'Showmax', path : "/Showmax", id : 4 }
     ]


  // function waecQuantityDropDown(){
  //   setQuantityActive(!quantityActive);
  // document.querySelector('.imgdrop').classList.toggle('DropIt');
  // }


  const handleTvEmail = (e) => {
    const inputValue = e.target.value;
    setStarTimesEmail(inputValue);
  }

  // const handleStarTimes = (event) => {
  //   event.preventDefault();
  //   setConfirmStarTimesPopup(true)
  // }
  const handleStarTimes = (event) => {
    event.preventDefault();
    
    const { error } = schema.validate({
      starTimesMobileNumber,
      starTimesEmail,
      starTimesSmartCard,
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
      setConfirmStarTimesPopup(true);
      setErrors({});
    }


};
  const [errors, setErrors] = useState({});
 
  // const StarTimesSchema = Joi.object({
  //   mobileNumber: Joi.string().regex(/^\d{11}$/).required(),
  // });

  const schema = Joi.object({
    starTimesSmartCard: Joi.string().regex(/^\d{10,}$/).required()
      .messages({
        "string.pattern.base": "Smart card number should be more than 10 digits",
      }),
    starTimesMobileNumber: Joi.string().regex(/^\d{11}$/).required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits",
      }),
      starTimesEmail: Joi.string()
      .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      .required()
      .messages({ "string.pattern.base": "Invalid email" 
    })
  });

  const handleStarTimesMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setStarTimesMobileNumber(inputValue);

    // const validation = StarTimesSchema.validate({ mobileNumber: inputValue });

    // if (validation.error) {
    //   setStarTimesErrorMessage('Incorrect Phone Number..');
    // } else {
    //   setStarTimesErrorMessage('');
    // }
  };

  const { flagResult, setFlagResult } = useContext(ContextProvider);
  const { methodPayment, setMethodPayment } = useContext(ContextProvider);
  const {starTimesWalletBalance,setStarTimesWalletBalance } = useContext(ContextProvider);



  function methodDropDown() {
    setMethodPayment(!methodPayment);
    document.querySelector('.methodDrop').classList.toggle('DropIt');
  }

   const updateBalance = passDataBalance?.data?.data  ? passDataBalance.data.data.data.balance : "";
  const methodOptions = [
    { method: 'NGN Wallet', balance:newBalance === "" || newBalance === null || newBalance === undefined  ? `(${updateBalance})` : `(${newBalance})`,  
    flag: nigerianFlag, id: 1 },
    { method: 'USD Wallet ', balance: '(0.00)', flag: americaFlag, id: 2 },
    { method: 'EUR Wallet', balance: '(0.00)', flag: britainFlag, id: 3 },
    { method: 'GBP Wallet', balance: '(0.00)', flag: euroFlag, id: 4 },
    { method: 'AUD Wallet', balance: '(0.00)', flag: austriaFlag, id: 5 },
    { method: 'KES Wallet', balance: '(0.00)', flag: kenyaFlag, id: 6 }
  ]

  function packageDropdown() {
    if (!starTimesDecoderType) {
      setShowDropdownStarTimes(false);
    }
    else {
    setShowDropdownStarTimes(!showDropdownStarTimes)
      document.querySelector('.imgdrop').classList.toggle('DropIt');
    
    }
  }

  function decoderDropdown() {
    setDecoderActive(!decoderActive)
    document.querySelector('.decdrop').classList.toggle('DropIt');
  }

    const handleReceivedData = () => {
    setIsLoading(true);
    const receivedData = () => {
      // Seting the relevant data from the TV subscription response
      setStarTimesOrderId(starTimesSubscriptionResponse?.data ? starTimesSubscriptionResponse?.data?.order_id : "");
      setStarTimesTransactionId(starTimesSubscriptionResponse?.data?.transcation_id ? starTimesSubscriptionResponse?.data?.transcation_id : ""  );
     // setStarTimesRequestId(starTimesSubscriptionResponse.data.request_id);
      setStarTimesDescription(starTimesSubscriptionResponse?.data?.description ? starTimesSubscriptionResponse?.data?.description : "");
      setCardName(userVerifiedName);
}
  
    receivedData();
    
    if (receivedData) {
      setStarTimesSuccessful(false);
      setIsLoading(false);
      navigate("/StarTimesReceipt");
    }
  };

// VerifyPinHandler to handle both success and failure cases:
const VerifyPinHandler = async () => {
    const StarTimesHandler = async () => {
      const requestData = {
        decoder_type: starTimesDecoderType.toLowerCase(),
        package:  packageStarTimes,
        iuc_number: starTimesSmartCard,
        email: starTimesEmail,
        amount: starTimesAmount,
        phone: starTimesMobileNumber,
      };
      const Path = "bills/tvsub";
      const successHandler = () =>{
        setStarTimesSuccessful(true);
        setInputPinStarTimes(false);
        setInputPin("")
      //  handleReceivedData()
      }
      const FailedHandler = () =>{
       setFailedPopup(true);
       setInputPinStarTimes(false);
       setInputPin("")
      }
      
      await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        FailedHandler,
       setStarTimesSubscriptionResponse
      );
    };
  
    await VerifyTransPin(
      inputPin,
      setSuccessConfig,
      setFailedConfig,
      setIsLoading,
      setErrorMessage,
      StarTimesHandler,
     );
 };

 let userVerifiedName = starTimesVerifyResponse?.data ? starTimesVerifyResponse?.data?.name : "";
 //Function to help Verify users account
 const VerifyUserAccount = async(UserTvSubscription)=> {
  setStarTimesVerifyResponse({});
    if(UserTvSubscription?.length === 10 && 
     (UserTvSubscription !== "" && 
       UserTvSubscription !== null && 
       UserTvSubscription !== undefined)){
         const body = {
            decoder_type : starTimesDecoderType.toLowerCase(),
           iuc_number : UserTvSubscription
         }
         const bodyToJson = JSON.stringify(body);
 await PostFunction("bills/verify", setStarTimesLoading, bodyToJson, ()=> {
   console.log("Succesfully verified tv subscription account.");
   setStarTimesSmartCard(UserTvSubscription);
 
   
 }, ()=> {
   console.log("Failed to verify tv subscription account.")
 }, setStarTimesVerifyResponse )
 }
 }
 //console.log(userVerifiedName)
 
  const handleSmartCard = async(e) => {
     const inputValue = e.target.value;
   await VerifyUserAccount(inputValue);
  }

  //To exit the failed popup with the done button.
  const ExitTheDoneButton = ()=> {
      setStarTimesEmail("")
   setStarTimesMobileNumber("")
   setStarTimesSmartCard("");
   setStarTimesAmount("");
   setSelectedOptionStarTimes("");
   setPackageStarTimes("");
   setStarTimesDecoderType("")
    setFlagResult("");
    setStarTimesWalletBalance("");
    setFailedPopup(false);
     handleReceivedData();
   //navigate("/DsTv");
  }

  return (
    <div>
      <DashBoardLayout>

        <div className={style.AirtimeTops}>
          <div className={style.airtimeTop}>
            <div>
            <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
          <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
            <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold">
              SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
            </p>
            <p className="text-[8px] lg:text-[20px] md:text-[11.46px]">
              Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
            </p>
          </div>
          <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
            <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
          </div>
        </div>

        <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[37px] md:py-[28.64px]">
          <div className="flex text-[#7E7E7E] text-[13px] lg:text-[18px] md:text-[13px] font-semibold">
            <span>Subscribe Your</span> &nbsp;
            <img src="./Images/TvSubscription/startimesIcon.svg" alt="" className="md:w-[74px] md:h-[27px] lg:w-[90px] lg:h-[35px]" />
            <span>Decoder Instantly</span>
          </div>
          <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
        </div>

        <div className="flex flex-col gap-[20px] md:gap-0">
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Confirm Decoder Type</label>
              {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-1/2 h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">StarTimes</button> */}
              <div onClick={decoderDropdown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.5px] sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center" onClick={decoderDropdown} 
       ${
        isDarkMode
            ? "bg-black text-white border border-white"
            : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA]"
       }`}
    >
                {starTimesDecoderType}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle decdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] " src={arrowDown} alt="" />
              </div>

              {decoderActive && (
         <div className='absolute lg:top-[90px] md:top-[60px]  top-[74px] z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
        '>
          {(Decoders.map(decoder => {
            return (
               <p
               onClick={(e =>{
                GetOtherDataTv(decoder.id, decoder.path)
          setStarTimesDecoderType(decoder.id === 1 ? decoder.decoderType : "");
                 setDecoderActive(false);
             document.querySelector('.decdrop').classList.remove('DropIt');
             console.log(e);
              })}
              className={`pb-[20px] md:pb-[14px] pt-[20px] md:pt-[14px] font-weight-bold text-[15px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer   ${
        isDarkMode
            ? "bg-black text-white border border-white"
            : "bg-white hover:bg-[#EDEAEA]"
       }`} 
         key= {decoder.id}>
      <h2>{decoder.decoderType}   </h2>
         </p>
        
            )
          }))}
         
          
             </div>
      )}
            </div>

            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] md:font-[600] font-[400]">
                Select Package</label>

              <div onClick ={packageDropdown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.4px] sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={packageDropdown} ${
      
        isDarkMode
            ? "bg-black text-white border border-white"
            : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA]"
       }`} >
                {selectedOptionStarTimes}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle imgdrop  md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" src={arrowDown} alt="" />
              </div>

              {showDropdownStarTimes && (
                <ul className="dropdown-options z-[2] absolute top-[100%] w-full bg-white cursor-pointer h-[300px] overflow-y-scroll">
                  {starTimesOptionalPlan.map((option, index) => (
                    <li
                      className={`pb-[20px] md:pb-[14px] pt-[20px] md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] 
                      md:text-[13.227px] md:leading-[17.195px] 
                      shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                      lg:text-[16px] lg:leading-[20.8px] cursor-pointer  dropdownCSS 
                       ${
        isDarkMode
            ? "bg-black text-white border border-white"
            : "border-[#9C9C9C] bg-white text-[#7C7C7C] hover:bg-[#EDEAEA]"
       }`}
                      key={index}
                      onClick={() => {
                        handleOptionClickStarTimes();
                        setStarTimesAmount(option.Amount)
                        setSelectedOptionStarTimes(`${option.PackageName}`)
                        setPackageStarTimes(option.Package);
                      }}
                    >
                     {`${option.PackageName}`}
                    </li>
                  ))}
                </ul>
              )}

            </div>


          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Smart Card / IUC Number</label>
              <input type="tel"
              maxLength ={10}
              onInput={(e =>{
                const numericValue = e.target.value.replace(/\D/g, '');
                    e.target.value = numericValue
                })}
                onChange={handleSmartCard} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "text-[#7C7C7C] border-[#9C9C9C]"
    }`}  />
            {errors.starTimesSmartCard && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] font-[400] italic">
                {errors.starTimesSmartCard}</p>}
                  {(!errors.starTimesSmartCard && stateInvalidDecoderNumber) && (
                   <p className ="text-[14px] top-0 font-[500] text-red-500 text-left
           lg:text-[14px] lg:leading-[20px] leading-[18px] ">
            Invalid iuc number
          </p>
                )}
            </div>
            

            <div className="flex flex-col relative gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Card Name</label>
              <input type="text"
              value={userVerifiedName}
              readOnly
                 className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "text-[#7C7C7C] border-[#9C9C9C] hover:bg-[#EDEAEA]"
  }`}    />
  {starTimesLoading && (
    <p className ="absolute left-[10px] top-[60%]">
     <BalanceLoading/>
    </p>
  )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Phone Number</label>
              <input id="val" value={starTimesMobileNumber}
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
                onChange={handleStarTimesMobileNumberChange} type="tel" maxLength={11} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "text-[#7C7C7C] border-[#9C9C9C] hover:bg-[#EDEAEA]"
  }`}      />
              {errors.starTimesMobileNumber && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] font-[400] italic">
                {errors.starTimesMobileNumber}</p>}
            </div>
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="Email" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Email</label>
              <input type="email" onChange={handleTvEmail} placeholder="example@gmail.com"
               required className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[14px] sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "text-[#7C7C7C] border-[#9C9C9C] hover:bg-[#EDEAEA]"
  }`}      />
             {errors.starTimesEmail && <p className="text-[#F95252] text-[13.4px] md:text-[12px] lg:text-[14px] font-[400] italic">
                {errors.starTimesEmail}</p>}
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Amount</label>


              <input
                type="text"
                readOnly
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] self-center ${
                  isDarkMode 
                  ? "bg-black text-white border border-white" 
                  : "text-[#7C7C7C] border-[#9C9C9C] hover:bg-[#EDEAEA]"
              }`}    
                value={`₦ ${starTimesAmount}`}
              />

            </div>

            <div className="flex relative flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px] font-[400] md:font-[600]">
                Payment Method</label>
              <div onClick={methodDropDown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13px]  sm:p-3 sm:text-lg flex items-center justify-between border-[0.23px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] ${
       isDarkMode 
       ? "bg-black text-white border border-white" 
       : " border-[#9C9C9C]"
   }`}     >
                <p className='font-[400] text-[13px] leading-[10.4px] md:text-[12px] md:leading-[12.206px] lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
                   {`${flagResult}  ${" "} ${starTimesWalletBalance}`}
                </p>
                <img className='methodDrop h-[16px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
                  src={methodImage} alt="" />
              </div>
              {methodPayment && (
                <div className='absolute top-[102%] z-0 flex flex-col w-[100%] bg-white cursor-pointer '>

                  {(methodOptions.map(methodOption => {
                    return (
                      <div
                        onClick={(e => {
                          setFlagResult(methodOption.id === 1 ?
                                  methodOption.method : ""
                                );
                          setStarTimesWalletBalance( methodOption.id === 1 ? methodOption.balance : "")
                          setMethodImage(methodOption.id === 1 ? methodOption.flag : arrowDown);
                          setMethodPayment(false);
                          document.querySelector('.methodDrop').classList.remove('DropIt');
                        })}
                        className={`pb-[20px] md:pb-0 pt-[20px] md:pt-0 font-weight-bold text-[15px] flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer items-center 
        shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
         ${methodOption.id === 1 ? "bg-white" : "bg-gray-300"}
        ${ isDarkMode 
          ? "bg-black text-white border border-white" 
          : "bg-white hover:bg-[#EDEAEA]"
      }`}    
                        key={methodOption.id} >
        <img className='md:h-[29.27px]  h-[14.27px]' src={methodOption.flag} alt="" />
 <h2 className={`text-[14px] leading-[10.4px]
               font-[500]   
         md:text-[13.227px] md:leading-[17.195px]  
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer  
          ${ isDarkMode 
          ? "bg-black text-white" 
          : "text-[#7C7C7C]"
      }`}    >
                          {methodOption.method + ' ' + methodOption.balance}
                        </h2>
                      </div>

                    )
                  }))}


                </div>
              )}

            </div>
          </div>
        </div>

        <button onClick={handleStarTimes}
          disabled={starTimesMobileNumber.length !== 11 || !userVerifiedName || !starTimesEmail || !starTimesSmartCard || !starTimesDecoderType || !selectedOptionStarTimes}
          className={`
             ${starTimesMobileNumber.length !== 11 || !userVerifiedName || !starTimesEmail || !starTimesSmartCard || !starTimesDecoderType || !selectedOptionStarTimes || !flagResult
              ? "bg-[#63616188] "
              : "bg-primary"
            }
            mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-center font-semibold text-[12px] md:text-[11px] lg:text-[16px] text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center`}>
          Proceed</button>
            </div>
          </div>

          <div className={style.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
          </div>

        </div>

      </DashBoardLayout>
      <ConfirmStarTimesPopup passDataBalance={passDataBalance} userVerifiedName ={userVerifiedName} />
      <InputStarTimesPopup VerifyPinHandler={VerifyPinHandler}/>
      <StarTimesSuccessfulPopup handleReceivedData = {handleReceivedData} userVerifiedName={userVerifiedName}/>
            {/* Failed Transaction Popup */}
      {failedPopup && (
        <Modal>
             <div className="w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-white rounded-lg overflow-hidden">
               <div className="flex justify-start w-full items-center p-4">
                 <img
                   className="w-6 h-6"
                   src="/Images/login/arpLogo.png"
                   alt="Logo"
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
                   alt="Failed"
                 />
                 <p className="text-sm text-gray-600 mb-8">
                   An unexpected error has occurred, please try again.
                 </p>
                <div className="flex gap-[10px] justify-between w-full px-[10px]">
        <button
          onClick={() => setFailedPopup(false)}
          className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2
           text-white rounded-md font-medium">
          Done
        </button>
           <button
          onClick={() =>{
            ExitTheDoneButton()
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
                     <Loader/>
      
                 </Modal>
            ) } 
            
    </div>
  )
}

export default StarTimes