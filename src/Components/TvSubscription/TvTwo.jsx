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
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { GetFunction } from "../ApiCollection.jsx/ApiBuck";

const DsTv = () => {

  const {
    setConfirmDstvPopup,
    selectedOptionDstv,
   setSelectedOptionDstv,
    showDropdownDstv,
    setShowDropdownDstv,
    formatNumberWithCommas,
    mobileNumber,
    setCardName,
    cardName,
    tvEmail,
    smartCard,
    setSmartCard,
    setTvEmail,
    setMobileNumber,
    decoderActive,
    setDecoderActive,
    setDecoderType,
    decoderType,
    methodImage,
    setMethodImage,
    isDarkMode,
    fetchedDstvPlans,
    fetchedGotvPlans,
    setFetchedGotvPlans,
    fetchedShowMaxPlans,
    setFetchedShowMaxPlans,
    fetchedStarTimesPlans,
    setFetchedStarTimesPlans,
    dstvAmount,
    setDstvAmount,
    newBalance
  } = useContext(ContextProvider);
 
const navigate = useNavigate();
const [loading, setLoading] = useState(false)
// console.log(DstvPlans)
 

  // const handleDstv = (event) =>{
  //       event.preventDefault();
  //       setConfirmDstvPopup(true)
  //     }
    
  const handleOptionClickDstv = (option) => {
       // setSelectedOptionDstv(option);
        setShowDropdownDstv(false);
      };
    
     
    
      const Decoders  = [
        { decoderType :'Dstv',  id : 1},
          { decoderType :'GOtv', path : "/GoTv", id : 3 },
          { decoderType :' StarTimes', path :  "/StarTimes", id : 2 },
        { decoderType :'Showmax', path : "/Showmax", id : 4 }
         ]
    


  // function waecQuantityDropDown(){
  //   setQuantityActive(!quantityActive);
  // document.querySelector('.imgdrop').classList.toggle('DropIt');
  // }

  const handleCardName = (e) => {
    const inputValue = e.target.value;
    setCardName(inputValue);
  }
  const handleSmartCard = (e) => {
    const inputValue = e.target.value;
    setSmartCard(inputValue);
  }
  const handleTvEmail = (e) => {
    const inputValue = e.target.value;
    setTvEmail(inputValue);
  }

  const handleDstv = (event) => {
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
      setConfirmDstvPopup(true);
      setErrors({});
    }
  }
  const [errors, setErrors] = useState({});


  const GetOtherDataTv = async(id, path)=> {
   const SuccessHandler = ()=> {
    navigate(path);
   }
   const FailedHandler = ()=> {
    console.log("Error")
   }
  
   const SubscriptionPresent =()=> {
    if((fetchedStarTimesPlans.status === 200 || 201) && id === 2 ){
      return navigate(path)
    }else if((fetchedGotvPlans.status === 200 || 201) && id === 3) {
     return navigate(path)
    }else if((fetchedShowMaxPlans.status === 200 || 201) && id === 4) {
     return navigate(path)
    }
    
   }
  
   let TvPath;
   let fetchedResponse;
    if((fetchedStarTimesPlans.status === undefined || null) && id === 2 ){
      TvPath = `products/tvsub/startimes`;
    fetchedResponse = setFetchedStarTimesPlans;
     await GetFunction(TvPath, setLoading, SuccessHandler, FailedHandler, fetchedResponse)
    
   }else if((fetchedGotvPlans.status === undefined || null) && id === 3){
      TvPath = `products/tvsub/gotv`;
    fetchedResponse = setFetchedGotvPlans;
     await GetFunction(TvPath, setLoading, SuccessHandler, FailedHandler, fetchedResponse)
   
  }else if ((fetchedShowMaxPlans.status === undefined || null) && id === 4){
    TvPath = `products/tvsub/showmax`;
    fetchedResponse = setFetchedShowMaxPlans;
     await GetFunction(TvPath, setLoading, SuccessHandler, FailedHandler, fetchedResponse)
   
  }else{
    return SubscriptionPresent();
  }
  }
  
  
       const DstvPlans = fetchedDstvPlans.data ? fetchedDstvPlans.data.data.data : []
      useEffect(()=> {
        if(DstvPlans.length < 1){
          navigate("/TvSubscription")
        }
      })
       // console.log(DstvPlans)
  
      
   
 
  // const GOTVSchema = Joi.object({
  //   mobileNumber: Joi.string().regex(/^\d{11}$/).required(),
  // });

  const schema = Joi.object({
    smartCard: Joi.string().regex(/^\d{10,}$/).required()
      .messages({
        "string.pattern.base": "Smart card number should be more than 10 digits",
      }),
    mobileNumber: Joi.string().regex(/^\d{11}$/).required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits",
      }),
      tvEmail: Joi.string()
      .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      .required()
      .messages({ "string.pattern.base": "Invalid email" 
    })
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
    document.querySelector('.methodDrop').classList.toggle('DropIt');
  }

  const [methodOptions, setMethodOptions] = useState([
    { method: 'NGN Wallet',  balance: `(${newBalance})`, flag: nigerianFlag, id: 1 },
    { method: 'USD Wallet ', balance: '(0.00)', flag: americaFlag, id: 2 },
    { method: 'EUR Wallet', balance: '(0.00)', flag: britainFlag, id: 3 },
    { method: 'GBP Wallet', balance: '(0.00)', flag: euroFlag, id: 4 },
    { method: 'AUD Wallet', balance: '(0.00)', flag: austriaFlag, id: 5 },
    { method: 'KES Wallet', balance: '(0.00)', flag: kenyaFlag, id: 6 }
  ])
const [errorFillDecoder, setErrorFillDecoder] = useState(false)
  function packageDropdown() {
    if (!decoderType) {
      setShowDropdownDstv(false);
      setErrorFillDecoder(true)
    }
    else {
    setShowDropdownDstv(!showDropdownDstv)
      document.querySelector('.imgdrop').classList.toggle('DropIt');
    
    }
  }

  function decoderDropdown() {
    setDecoderActive(!decoderActive)
    document.querySelector('.decdrop').classList.toggle('DropIt');
    if(decoderType){
      setErrorFillDecoder(false);
    }
  }


  return (
    <div>
      <DashBoardLayout>

        <div className={style.AirtimeTops}>
          <div className={style.airtimeTop}>
            <div>
            <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
          <div className="py-[11.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
            <p className="text-[9px] lg:text-[24px] md:text-[13.75px font-semibold">
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
              <div onClick={decoderDropdown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={decoderDropdown} ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C]"
    }`} >
                {decoderType}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle decdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" src={arrowDown} alt="" />
      
              </div>
              {errorFillDecoder && (
                <p className="text-[10px] leading-[14px] font-[400] lg:text-[14px] lg:leading-[20px] text-left text-red-500">
                 Select a decoder to choose a package
                </p>
              )}
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
               <p href={decoder.path}
               onClick={(e =>{
          setDecoderType(decoder.decoderType);
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

            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px md:font-[600] font-[400]">
                Select Package</label>

              <div onClick={packageDropdown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center" onClick={packageDropdown} ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`}>
                {selectedOptionDstv}
                <img className="absolute left-[90%] lg:left-[94%] self-center align-middle imgdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[15px]" src={arrowDown} alt="" />
              </div>

              {    showDropdownDstv && (
                <ul className="dropdown-options z-[2] absolute top-[100%] w-full h-[300px] overflow-y-scroll bg-white cursor-pointer">
                  {DstvPlans.map((option, index) => (
                    <li
                      className={`pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] 
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
                        setSelectedOptionDstv(`${option.PackageName}`)
                        setDstvAmount(option.Amount)
                      }
                      }
                    >
                    {`${option.PackageName} `}
                    </li>
                  ))}
                </ul>
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
                })}
                onChange={handleSmartCard} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] text-[9px] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`} />
             {errors.smartCard && <p className="text-[#F95252] text-[13.2px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.smartCard}</p>}
            </div>

            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Card Name</label>
              <input type="text"
                onChange={handleCardName} onInput={(event)=> {event.target.value = event.target.value.replace(/[0-9]/g, '')}} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.9270px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
  }`} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Phone Number</label>
              <input id="val" value={mobileNumber}
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
                type="tel" maxLength={11} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center ${
      isDarkMode 
        ? "bg-black text-white border border-white" 
        : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
    }`} />
              {errors.mobileNumber && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.mobileNumber}</p>}
            </div>
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="Email" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Email</label>
              <input type="email" onChange={handleTvEmail} placeholder="example@gmail.com" required className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[14px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode 
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
  }`} />
              {errors.tvEmail && <p className="text-[#F95252] text-[13.4px] md:text-[12px] lg:text-[14px font-[400] italic">
                {errors.tvEmail}</p>}
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Amount</label>


              <input
                type="text"
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] p-4 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[500]  leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px] self-center ${
                  isDarkMode 
                  ? "bg-black text-white border border-white" 
                  : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
              }`}
                value={`₦${dstvAmount} `}
              readOnly/>

            </div>

            <div className="flex relative flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[15px] lg:text-[17px] md:text-[13px font-[400] md:font-[600]">
                Payment Method</label>
              <div onClick={methodDropDown} className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13px] p-4 sm:p-3 sm:text-lg flex items-center justify-between border-[0.23px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] border-[#9C9C9C] ${
                    isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "hover:bg-[#EDEAEA] border-[#9C9C9C] text-[#7C7C7C] "
                }`}>
                <p className='font-[500] text-[13px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
                   {`${flagResult} ' ' ${tvWalletBalance}`}
                </p>
                <img className='methodDrop h-[16px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
                  src={methodImage} alt="" />
              </div>
              {methodPayment && (
                <div className={`absolute top-[102%] z-0 flex flex-col w-[100%]  cursor-pointer    
                  ${
                    isDarkMode 
        ? "bg-black text-white border border-white" 
        : "bg-white"
                  }`}>

                  {(methodOptions.map(methodOption => {
                    return (
                      <div
                        onClick={(e => {
                          onchange = { setMethodOptions }
                          setFlagResult(methodOption.method);
                          setTvWalletBalance(methodOption.balance)
                          setMethodImage(methodOption.flag);
                          setMethodPayment(false);
                          document.querySelector('.methodDrop').classList.remove('DropIt');
                        })}
                        className={`pb-[20px] pt-[20px] md:pb-0 md:pt-0 flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer  items-center 
        shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]  ${
                    isDarkMode 
        ? "bg-black text-white border border-white" 
        : "bg-white hover:bg-[#EDEAEA]"
                  }`}
                        key={methodOption.id}>

                        <img className='md:h-[29.27px]  h-[14.27px]' src={methodOption.flag} alt="" />

                        <h2
                          className={`text-[13px] leading-[10.4px]
               font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px]  
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer ${
          isDarkMode 
? "bg-black text-white" 
: "bg-white hover:bg-[#EDEAEA]"
        }`} >
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

        <button onClick={handleDstv}
          disabled={mobileNumber.length !== 11 || !cardName || !tvEmail || !smartCard || !decoderType || !selectedOptionDstv}
          className={`
             ${mobileNumber.length !== 11 || !cardName || !tvEmail || !smartCard || !decoderType || !selectedOptionDstv || !flagResult
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
  {loading && (
    <Modal>
      <Loader/>
    </Modal>
  )}

      </DashBoardLayout>
      <ConfirmDstvPopup/>
      <InputDstvPopup/>
      <DstvSuccessfulPopup />
    </div>
  )
}

export default DsTv