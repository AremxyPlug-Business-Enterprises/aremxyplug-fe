import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { useState } from "react";
import arrowDown from '../EducationPins/imagesEducation/arrow-down.svg';
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import ConfirmGotvPopup from "./GotvPopups/confirmGotvPopup";
import { InputGotvPopup } from "./GotvPopups/inputPinGotv"
import GotvSuccessfulPopup from "./GotvPopups/GotvSuccessfulPopup";
import nigerianFlag from '../../Components/EducationPins/imagesEducation/Nigeriaflag.svg';
import americaFlag from '../../Components/EducationPins/imagesEducation/Usa.svg';
import britainFlag from '../../Components/EducationPins/imagesEducation/Britain.svg';
import euroFlag from '../../Components/EducationPins/imagesEducation/GBP.svg';
import austriaFlag from '../../Components/EducationPins/imagesEducation/Austria.svg';
import kenyaFlag from '../../Components/EducationPins/imagesEducation/Kenya.svg';

const GoTv = () => {

  const {
    setConfirmGotvPopup,
    selectedOptionGOTV,
    showDropdownGOTV,
    setShowDropdownGOTV,
    setSelectedOptionGOTV,
    formatNumberWithCommas,
    mobileNumber,
    setCardName,
    cardName,
    tvEmail,
    smartCard,
    setSmartCard,
    setTvEmail,
    setTvAmount,
    setMobileNumber,
    decoderActive,
    setDecoderActive,
    setDecoderType,
    decoderType,
    methodImage,
    setMethodImage,
  } = useContext(ContextProvider)


  const handleOptionClickGOTV = (option) => {
    setSelectedOptionGOTV(option);
    setShowDropdownGOTV(false);
    document.querySelector('.imgdrop').classList.remove('DropIt');
  };

  const getNumericValue = (option) => {
    const numericPart = option.match(/\d+/);
    if (numericPart) {
      return formatNumberWithCommas(parseInt(numericPart[0], numericPart[2], 10));
    }
    return '';
  };

  const options = [
    `Gotv Smallie (₦1100) ~ Monthly`,
    `GOtv Jinja (₦2250) ~ Monthly`,
    `GOtv Jinja (₦4500) ~ 2 Months`,
    `GOtv Lite (₦2900) ~ 3 Months`,
    `GOtv Lite (₦8600) ~ Annually`,
    `GOtv Max (₦4850) ~ Monthly`,
    `GOtv Max (₦9700) ~ 2 Months`,
    `GOtv Joli (₦3300) ~ Monthly`,
    `GOtv Joli (₦6600) ~ 2 Months`,
    `GOtv SUPA (₦6400) ~ Monthly`,
    `GOtv SUPA (₦12800) ~ 2 Months`,
    `GOtv SUPA plus (₦21000) ~ 2 Months`,
  ]

 

  // function waecQuantityDropDown(){
  //   setQuantityActive(!quantityActive);
  // document.querySelector('.imgdrop').classList.toggle('DropIt');
  // }

<<<<<<< HEAD
  const [confirmDecoderGOTV, setConfirmDecoderGOTV] = useState(false);
  const handleDecoderClickGOTV = (option, index) => {
    setSelectedDecoderGOTV(false);
  setConfirmDecoderGOTV(false);
};


    return(
        <div>
        <DashBoardLayout>
            
            <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                <div className="py-[9.57px] md:py-[16.61px] align-middle flex flex-col gap-1.5">
                    <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold w-[194.12px] lg:w-[600px] md:w-[450px]">
                        SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                        </p>
                    <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px] w-[180px] lg:w-[539px] md:w-[350.8px]">
                    Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                      </p>
                </div>
                <div className="flex w-[25%] h-[97%] pt-2">
                    <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                </div>
            </div>

            <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                <div className="text-[#7E7E7E] text-[8px] lg:text-xl md:text-[11.46px] font-medium">
                    <span>Subscribe Your</span>
                    <span>Gotv</span>
                    <span> GOTV Decoder Instantly</span>
                </div>                
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />     
            </div>

          <div className="flex flex-col gap-[20px] md:gap-0">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Confirm Decoder Type</label>
                    {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
                    <div className="dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={() => setConfirmDecoderGOTV(!confirmDecoderGOTV)}>
                        {selectedDecoderGOTV || `Gotv`}
                      </div>
                   
                    {confirmDecoderGOTV && (
                      <ul className="dropdown-options absolute top-[92%] w-[312px] bg-white cursor-pointer">
                        {decoders.map((option, index) => (
                        <li
                        className={`dropdownCSS h-[30px] md:h-[35px] lg:h-[50px] font-medium text-[12.93px] flex items-center text-[#7C7C7C]`}
                          key={index}
                        onClick={() => handleDecoderClickGOTV(option)}
                          >
                            {option}
                        </li>
                        ))}
                      </ul>
                    )}
                </div>
                
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                    Select Package</label>
                   
                      <div className="dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={() => setShowDropdownGOTV(!showDropdownGOTV)}>
                        {selectedOptionGOTV || `Gotv Smallie ${formatNumberWithCommas(1100)} ~ Monthly`}
                      </div>
                   
                    {showDropdownGOTV && (
                      <ul className="dropdown-options absolute top-[100%] bg-white cursor-pointer">
                        {options.map((option, index) => (
                        <li
                        className={`dropdownCSS h-[30px] md:h-[35px] lg:h-[50px] font-medium text-[12.93px] flex items-center text-[#7C7C7C]`}
                          key={index}
                        onClick={() => handleOptionClickGOTV(option)}
                          >
                            {option}
                        </li>
                        ))}
                      </ul>
                    )}
                  
                </div>
            
        
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                    Smart Card / IUC Number</label>
                    <input type="number" max='10' placeholder="1234567890" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
                
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Card Name</label>
                    <input type="text" placeholder="Aremxyplug" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Phone Number</label>
                        <input type="number" max='10' placeholder="7744115566" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                       {/* <input onInput={(e =>{
=======
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
  const handleTvAmount = (e) => {
    const inputValue = e.target.value;
    setTvAmount(inputValue)
  }
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
  

 
  const Decoders  = [
    { decoderType :'GOtv',  id : 1},
      { decoderType :'DStv', path :  "/DsTv", id : 2 },
      { decoderType :'StarTimes', path : "/StarTimes", id : 3 },
    { decoderType :'Showmax', path : "/Showmax", id : 4 }
     ]
  //   function GotvDropDown(){
  //     setDecoderActive(!decoderActive);
  //   document.querySelector('.Decoderdrop').classList.toggle('DropIt');
  // }
  

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
      setConfirmGotvPopup(true);
      setErrors({});
    }
  }
  const [errors, setErrors] = useState({});

 
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

    // const validation = GOTVSchema.validate({ mobileNumber: inputValue });

    // if (validation.error) {
    //   setGOTVErrorMessage('Incorrect Phone Number..');
    // } else {
    //   setGOTVErrorMessage('');
    // }
  };

  const { flagResult, setFlagResult } = useContext(ContextProvider);
  const { methodPayment, setMethodPayment } = useContext(ContextProvider);
  const { tvWalletBalance, setTvWalletBalance } = useContext(ContextProvider);



  function methodDropDown() {
    setMethodPayment(!methodPayment);
    document.querySelector('.methodDrop').classList.toggle('DropIt');
  }

  const [methodOptions, setMethodOptions] = useState([
    { method: 'NGN Wallet', balance: " (50,000.00)", flag: nigerianFlag, id: 1 },
    { method: 'USD Wallet ', balance: '(0.00)', flag: americaFlag, id: 2 },
    { method: 'EUR Wallet', balance: '(0.00)', flag: britainFlag, id: 3 },
    { method: 'GBP Wallet', balance: '(0.00)', flag: euroFlag, id: 4 },
    { method: 'AUD Wallet', balance: '(0.00)', flag: austriaFlag, id: 5 },
    { method: 'KES Wallet', balance: '(0.00)', flag: kenyaFlag, id: 6 }
  ])

  function packageDropdown() {
    if (!decoderType) {
      setShowDropdownGOTV(false);
    }
    else {
    setShowDropdownGOTV(!showDropdownGOTV)
      document.querySelector('.imgdrop').classList.toggle('DropIt');
    
    }
  }

  function decoderDropdown() {
    setDecoderActive(!decoderActive)
    document.querySelector('.decdrop').classList.toggle('DropIt');
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
            <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px]">
              Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
            </p>
          </div>
          <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
            <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
          </div>
        </div>

        <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[37px] md:py-[28.64px]">
          <div className="flex text-[#7E7E7E] text-[10px] lg:text-[18px] md:text-[13px] font-semibold">
            <span>Subscribe Your</span> &nbsp;
            <img src="./Images/TvSubscription/gotvIcon.svg" alt="" className="md:w-[60px] md:h-[15px] lg:w-[100px] lg:h-[18.6px]"/>
            <span> Decoder Instantly</span>
          </div>
          <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
        </div>

        <div className="flex flex-col gap-[20px] md:gap-0">
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Confirm Decoder Type</label>
              {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-1/2 h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
              <div className="relative  flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={decoderDropdown}>
                {decoderType}
                <img className="decdrop absolute left-[92%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[14px]" src={arrowDown} alt="" />
              </div>

            
              {decoderActive && (
         <div className='absolute lg:top-[90px] md:top-[60px]  top-[50px] z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
        '>
          {(Decoders.map(decoder => {
            return (
               <a href={decoder.path}
               onClick={(e =>{
          setDecoderType(decoder.decoderType);
                 setDecoderActive(false);
             document.querySelector('.decdrop').classList.remove('DropIt');
             console.log(e);
              })}
              className=' text-[8px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] bg-white
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer hover:bg-[#EDEAEA]' 
         key= {decoder.id}>
      <h2>{decoder.decoderType}   </h2>
         </a>
        
            )
          }))}
         
          
             </div>
      )}
            </div>

            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Select Package</label>

              <div className=" flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={packageDropdown}>
                {selectedOptionGOTV}
                <img className="imgdrop absolute left-[90%] lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[14px]" src={arrowDown} alt="" />
              </div>

              {showDropdownGOTV && (
                <ul className="dropdown-options absolute top-[100%] w-full bg-white cursor-pointer z-[2]">
                  {options.map((option, index) => (
                    <li
                      className={`text-[8px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
                      md:text-[13.227px] md:leading-[17.195px] 
                      shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] bg-white
                      lg:text-[16px] lg:leading-[20.8px] cursor-pointer hover:bg-[#EDEAEA]`}
                      key={index}
                      onClick={() => handleOptionClickGOTV(option) }
                      
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

            </div>


          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Smart Card / IUC Number</label>
                {/* style={{ backgroundColor: smartCard.length !== 10 ? '#FFD8D8' : 'white' }} */}
              <input type="tel" onChange={handleSmartCard}
                onInput={(e =>{
  
                  const numericValue = e.target.value.replace(/\D/g, '');
                      e.target.value = numericValue
                })}
                className=" flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" />
              {errors.smartCard && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] font-semibold italic">
                {errors.smartCard}</p>}
            </div>

            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Card Name</label>
              <input type="text"
                onChange={handleCardName} onInput={(event)=> {event.target.value = event.target.value.replace(/[0-9]/g, '')}} className=" flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Phone Number</label>
              <input id="val" value={mobileNumber} onChange={handleGOTVMobileNumberChange}
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
                type="tel" maxLength={11} className=" flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" />
              {errors.mobileNumber && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] font-semibold italic">
                {errors.mobileNumber}</p>}

            </div>
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="Email" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Email</label>
              <input type="email" onChange={handleTvEmail} placeholder="example@gmail.com" required className="flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" />
             {errors.tvEmail && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] font-semibold italic">
                {errors.tvEmail}</p>}
            </div>

          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
            <div className="flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[9px] lg:text-[16px] md:text-[12px] font-semibold">
                Amount</label>


              <input
                type="text"
                className=" flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[600] text-[9px] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] hover:bg-[#EDEAEA] items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center"
                value={'₦' + getNumericValue(selectedOptionGOTV)} onChange={handleTvAmount}
              />

            </div>

            <div className="relative flex flex-col gap-[3px] lg:gap-[5px] w-full md:w-1/2">
              <label htmlFor="decoderType" className="text-[#7E7E7E] text-[10px] lg:text-[17px] md:text-[13px] font-semibold">
                Payment Method</label>
              <div onClick={methodDropDown} className="flex items-center justify-between border-[0.23px] lg:border-[0.4px] w-full h-[30px] md:h-[35px] lg:h-[50px] px-[11px] md:px-[6px] lg:px-[10px] border-[#9C9C9C]">
                <p className='font-[500] text-[9px] leading-[10.4px] md:text-[12px] md:leading-[12.206px] lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
                  {flagResult + tvWalletBalance}
                </p>
                <img className='methodDrop h-[14px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
                  src={methodImage} alt="" />
              </div>
              {methodPayment && (
                <div className='absolute top-[102%] z-0 flex flex-col w-[100%] bg-white cursor-pointer '>

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
                        className='flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer hover:bg-[#EDEAEA] items-center bg-white
        shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'
                        key={methodOption.id}>

                        <img className='md:h-[29.27px]  h-[14.27px]' src={methodOption.flag} alt="" />

                        <h2
                          className='text-[8px] leading-[10.4px]
               font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer' >
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

        <button onClick={handleGotv}
          disabled={!cardName || !tvEmail || !smartCard || !decoderType || !selectedOptionGOTV}
          className={`
             ${mobileNumber.length < 11 || !cardName || !tvEmail || !smartCard || !decoderType || !selectedOptionGOTV || !flagResult
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
      <ConfirmGotvPopup />
      <InputGotvPopup />
      <GotvSuccessfulPopup />
    </div>
  )
}

export default GoTv