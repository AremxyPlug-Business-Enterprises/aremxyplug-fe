import React from 'react'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout'
import { useContext } from 'react';
import NabtebImg from './imagesEducation/NabtebImg.svg'
import HeroComponent from './heroComponent';
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from '../EducationPins/imagesEducation/arrow-down.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import nigerianFlag from './imagesEducation/Nigeriaflag.svg';
import americaFlag from './imagesEducation/Usa.svg';
import britainFlag from './imagesEducation/Britain.svg';
import euroFlag from './imagesEducation/GBP.svg';
import austriaFlag from './imagesEducation/Austria.svg';
import kenyaFlag from './imagesEducation/Kenya.svg';
import  closeIcon from './imagesEducation/close-circle.svg';
import { ContextProvider } from '../Context';
import Joi from "joi";
import styles from '../Dashboard/DashboardComponents/TransferComponent/transfer.module.css';
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
 import { Modal } from '../Screens/Modal/Modal';
 import AremxyPlugIcon from './imagesEducation/AremxyPlug.svg';
import NabtebReceipt from './ReceiptEducationPins/nabtebReceipt';
import '../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css'

export default function NabtebEducationPins() {
  const { isDarkMode } = useContext(ContextProvider);
  const {nabtebQuantityResult, setNabtebQuantityResult} = useContext(ContextProvider);
const {nabtebQuantityActive, setNabtebQuantityActive} = useContext(ContextProvider);
const {nabtebPaymentResult, setNabtebPaymentResult} = useContext(ContextProvider);
const {nabtebMethodActive, setNabtebMethodActive} = useContext(ContextProvider);
const {nabtebExamType, setNabtebExamType} = useContext(ContextProvider);
const {nabtebExamActive, setNabtebExamActive} = useContext(ContextProvider);
const { transactSuccessPopUp, setTransactSuccessPopUp } =
useContext(ContextProvider);
const {nabtebEducationPinPhone, setNabtebEducationPinPhone} = useContext(ContextProvider);
const {nabtebEducationPinEmail, setNabtebEducationPinEmail} = useContext(ContextProvider);
const {nabtebEducationAmount, setNabtebEducationAmount} = useContext(ContextProvider);
const {nabtebWalletBalance, setNabtebWalletBalance } = useContext(ContextProvider);

// UseStates
const [nabtebImageState, setNabtebImageState] = useState(arrowDown);
const [nabtebEducationProceed, setNabtebEducationProceed] = useState(false);
const [errors, setErrors] = useState({});
const [nabtebEducationConfirm, setNabtebEducationConfirm] = useState(false);

const [receipt] = useState(false);

function nabtebQuantityDropDown(){
  setNabtebQuantityActive(!nabtebQuantityActive);
document.querySelector('.imgdrop').classList.toggle('DropIt');
}
const nabtebOptions = [
  {quantity :  '1 Piece Of Result Checker', Amount : "₦100", id : 1},
  {quantity :  '2 Piece Of Result Checker', Amount : "₦200", id : 2},
  {quantity :  '3 Piece Of Result Checker', Amount : "₦300", id : 3},
  {quantity :  '4 Piece Of Result Checker', Amount : "₦400", id : 4},
  {quantity :  '5 Piece Of Result Checker', Amount : "₦500", id : 5}
]



// WALLET 

function nabtebMethodDropDown(){
  setNabtebMethodActive(!nabtebMethodActive);
document.querySelector('.methodDrop').classList.toggle('DropIt');
}
const [nabtebMethodOptions,setNabtebMethodOptions] = useState([
 {method : 'NGN Wallet', balance :" (0.00)", flag : nigerianFlag, id : 1},
{method : 'USD Wallet ', balance :'(0.00)', flag : americaFlag, id : 2 },
{method : 'EUR Wallet', balance :'(0.00)', flag : britainFlag, id : 3 },
{method :  'GBP Wallet', balance :'(0.00)', flag : euroFlag, id : 4 },
{method : 'AUD Wallet', balance :'(0.00)', flag : austriaFlag, id : 5 },
{method : 'KES Wallet',balance :'(0.00)', flag : kenyaFlag, id: 6 }
])

// CONFIRM EXAM TYPE
const nabtebExams  = [
{ examType :'NABTEB (₦100)',   id : 1},
{ examType :'NECO (₦100)', path :  "/NecoEducationPin", id : 2 },
{ examType :'WAEC (₦100)', path : "/WaecEducationPin", id : 3 },
{ examType :'JAMB (₦100)', path : "/JambEducationPin", id : 4 }
 ]
function nabtebExamDropDown(){
  setNabtebExamActive(!nabtebExamActive);
document.querySelector('.Examdrop').classList.toggle('DropIt');
}
// FUNCTION OTP FOR THE POPPINS
const {
  toggleSideBar,
  inputPin,
  setInputPin,
  inputPinHandler,
  toggleVisibility,
  isVisible,
} = useContext(ContextProvider);

const nabtebProceed = (e) => {
 const { error } = schema.validate({
    nabtebEducationPinPhone,
    nabtebEducationPinEmail
  });

  if (error) {
    setErrors(
      error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {})
    );
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
    .messages({ "string.pattern.base": "Invalid email " })

});

const confirmButton = () => {
  setNabtebEducationProceed(false);
  setNabtebEducationConfirm(true);
};

const nabtebTransactionSuccessClose = () => {
  setTransactSuccessPopUp(false);
};
const nabtebReceipt = () => {
  setTransactSuccessPopUp(false);
};

  return (
    <DashBoardLayout>
    <div className='flex flex-col h-[115%] lg:h-[120%] justify-between '>
 <div className=''>
  {/* Hero-section */}
<HeroComponent/>
    <div className='flex lg:gap-[8px] items-center md:gap-[5.868px] gap-[4.694px] 
    mb-[20px]  lg:mb-[50px] md:mb-[30px]'>

      <h2 className='font-[600] text-[9px] leading-[12px] md:text-[9.389px]
       md:leading-[11.267px] lg:text-[16px] text-[#7E7E7E] lg:leading-[19.2px]'>
    Purchase
      </h2>

      <img className='h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center'
      src={NabtebImg} alt="" />

      <h2 className='font-[600] text-[9px] leading-[12px] md:text-[9.389px]
       md:leading-[11.267px] lg:text-[16px] text-[#7E7E7E] lg:leading-[19.2px]'>
      NABTEB E-PINs Instantly
      </h2>
      <img className='md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]'
      src={arrowRight} alt="" />
    </div>
    {/* Input for Request of examination pins  */}
    <form action=''>
    <div  className='flex flex-col gap-[20px]  md:h-[172.73px] md:gap-[14.67px] 
     lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px]'>
      {/* container for the first two input */}
      <div className=' w-[100%]
      flex flex-col md:flex-row gap-[20px] 
      md:gap-[12.91px] lg:gap-[22px]'>

        {/* First Step Confirm exam type */}
   <div className='relative flex flex-col w-[100%] gap-[5.868px] md:w-1/2 md:gap-[5.868px]  
   lg:gap-[10px]'>
    {/* header */}
    <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px]  
     md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px]'>
    Confirm Exam Type
    </h2>
    {/* input */}
<div 
 onClick={nabtebExamDropDown}
className='relative w-[100%] flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]
hover:bg-[#EDEAEA]'>
    <h2 
    className='font-[500] text-[8px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] 
    lg:text-[16px] text-black lg:leading-[20.8px] cursor-pointer'>
    {nabtebExamType}
      </h2>
      <img  
      className='Examdrop md:h-[14.083px] md:w-[14.083px] lg:h-[24px] 
      lg:w-[24px] h-[14px] w-[14px]'
      src= {arrowDown} alt="" />
       </div>
       {nabtebExamActive && (
         <div className='absolute lg:top-[90px] md:top-[60px] top-[50px] z-[3]  
         flex flex-col w-[100%] lg:h-225px md:h-[210px] '>
          {(nabtebExams.map(exam => {
            return (
               <a href={exam.path}
               onClick={(e =>{
          setNabtebExamType(exam.examType);
                 setNabtebExamActive(false);
             document.querySelector('.Examdrop').classList.remove('DropIt');
             console.log(e);
              })}
              className=' text-[8px] leading-[10.4px]
           bg-white    md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px]
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer hover:bg-[#EDEAEA]' 
         key= {exam.id}>
      <h2>{exam.examType}   </h2>
         </a>
        
            )
          }))}
         
          
             </div>
      )}
    </div>

    {/* Quantity input Two / RightSide */}
    <div className='relative gap-[5.868px] flex flex-col w-[100%] md:w-1/2  
    md:gap-[5.868px] lg:gap-[10px] '>
    {/* header */}
    <h2 className='  font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
    Quantity
    </h2>
    {/* input */}
<div 
onClick={nabtebQuantityDropDown}
className=' flex  justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
 md:pt-[8.802px] md:pb-[7.042px] 
md:pr-[5.282px] md:pl-[5.867px] 
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
border-[0.4px] border-[#9C9C9C] hover:bg-[#EDEAEA]'>
    <h2 className='font-[500] text-[8px] leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] text-black lg:leading-[20.8px] cursor-pointer'>
    {nabtebQuantityResult}
      </h2>
      <img 
       className='imgdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[14px]'
      src={arrowDown} alt="" />
       </div>
       {/* drop down */}
       
      {nabtebQuantityActive && (
         <div className='absolute z-[2] lg:top-[90px] md:top-[60px] top-[50px]  
          flex flex-col w-[100%]   
        '>
          {(nabtebOptions.map(option => {
            return (
              <h2 onClick={(e =>{
                setNabtebQuantityResult(option.quantity)
                setNabtebQuantityActive(false);
                setNabtebEducationAmount(option.Amount)
              document.querySelector('.imgdrop').classList.remove('DropIt');
         
              })}
              className='text-[8px] text-[#7E7E7E] leading-[10.4px] md:py-[15px] 
              py-[8px] pl-[10px] font-[500]
               bg-white shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
         md:text-[13.227px] md:leading-[17.195px] w-[100%]
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer hover:bg-[#EDEAEA]' 
         key={option.id}>
        {option.quantity}
         </h2>
            )
          }))}
         
          
             </div>
      )}
    </div>
   </div>
  {/* container for Phone number and Email */}
   <div className=' w-[100%] 
   flex flex-col  md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] '>
    {/* LeftSide */}
     <div className=' container-phone gap-[5.868px] 
     flex flex-col md:w-1/2 md:gap-[10px] '>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px] '>
  Phone Number

   </h2>
   
   <input onInput={(e =>{
  
  const numericValue = e.target.value.replace(/\D/g, '');
      e.target.value = numericValue
     if(numericValue.length === 11){
      e.target.style.border = '2px solid green';
    }
    else if(e.target.value.length < 11){
    e.target.style.border = '2px solid red';
  }

   })}
   className='h-[29.927px] lg:h-[51px]  md:h-[29.93px] font-[500]
   w-[100%] border-[0.4px] border-[#9C9C9C] 
   text-[14.389px] leading-[18.206px]
   lg:text-[16px] lg:leading-[20.8px] text-black
 pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
   focus:outline-none 
   md:pt-[8.802px] md:pb-[7.042px] 
   md:pr-[5.282px] md:pl-[5.867px] 
   lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px]
   placeholder:text-[14.389px] placeholder:leading-[18.809.4px] 
     lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] placeholder:text-[#7E7E7E]
     md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px]'
    type="tel" name='phone' id='phone' maxLength={11} placeholder=''
    value={nabtebEducationPinPhone} onChange={(e)=>{
      setNabtebEducationPinPhone(e.target.value);
    }}/>
     {errors.nabtebEducationPinPhone && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.nabtebEducationPinPhone}
            </div>
          )}
   </div>
   
        
   {/* right-side */}
   <div className='flex flex-col gap-[5.868px] md:w-1/2 md:gap-[10px]'>
   <h2 className='font-[600] text-[8px] leading-[10.4px]
   text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px]'>
   Email
   </h2>
   
   <input className ='EmailPins font-[500] flex h-[29.927px] lg:h-[51px] md:h-[29.93px] w-[100%]
   lg:text-[16px] lg:leading-[20.8px] 
   text-black
   text-[14.389px] leading-[18.206px] tracking-[0.4px]
   pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] 
    border-[0.4px] border-[#9C9C9C] focus:outline-none self-center
   md:pt-[8.802px] md:pb-[7.042px] 
   md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px] 
   placeholder:text-[14.389px] placeholder:leading-[18.809.4px] 
   lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] placeholder:text-[#7E7E7E]
   md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px]'
    value={nabtebEducationPinEmail}
   onChange={(e) =>{
    setNabtebEducationPinEmail(e.target.value)
   }}
    type="Email" 
    placeholder='example@gmail.com'/>
    
    {errors.nabtebEducationPinEmail && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.nabtebEducationPinEmail}
            </div>
          )}
              
   </div>
   
   </div>

   {/* Conatiner for Amount and Payment method */}
   <div className='flex w-[100%]
   flex-col gap-[20px] md:flex-row md:gap-[12.91px] lg:gap-[22px]'>

 {/* Amount Step /Leftside */}
   <div className='flex flex-col gap-[5.868px] w-[100%] md:w-1/2 md:gap-[10px]'>
    {/* header */}
    <h2 className='font-[600] text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
     text-[#7E7E7E] lg:text-[16px] lg:leading-[20.8px]'>
    Amount
    </h2>
    {/* input */}
    <div
      onchange={setNabtebEducationAmount}
     className='h-[29.927px] lg:h-[51px] md:h-[29.93px]
        md:pt-[8.802px] md:pb-[7.042px] 
       pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
     md:pr-[5.282px] md:pl-[5.867px]
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]
  focus:outline-none text-start
    text-[8px] leading-[10.4px]
   font-[500]  md:text-[9.389px] md:leading-[12.206px]
  lg:text-[16px] text-black lg:leading-[20.8px]'
  maxLength={7}>
  {nabtebEducationAmount}
   </div>


    </div>
    {/* payment method */}
    <div className=' relative gap-[5.868px]
     flex w-[100%] flex-col md:w-1/2   md:gap-[10px]'>
    {/* header */}
    <h2 className='font-[600] text-[8px] leading-[10.4px]
     text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
    Payment Method
    </h2>
    {/* input */}
<div 
 onClick={nabtebMethodDropDown}
className='flex  justify-between  pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
md:pt-[8.802px] md:pb-[7.042px] 
md:pr-[5.282px] md:pl-[5.867px] 
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
border-[0.4px] border-[#9C9C9C]  hover:bg-[#EDEAEA]'>
    <h2 className='font-[500] text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] text-black lg:leading-[20.8px] cursor-pointer'>
    {nabtebPaymentResult +  nabtebWalletBalance}
      </h2>
      <img 
     
      className='methodDrop h-[14px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
      src={nabtebImageState} alt="" />
       </div>
       {/* drop down */}
       
      {nabtebMethodActive && (
         <div className=' flex flex-col w-[100%]
         absolute z-0 lg:top-[90px] md:top-[60px] top-[50px]'>

        {(nabtebMethodOptions.map(methodOption => {
            return (
        <div 
        onClick={(e =>{
       setNabtebPaymentResult(methodOption.method);
          setNabtebWalletBalance(methodOption.balance);
          setNabtebImageState(methodOption.flag);
          setNabtebMethodActive(false);
       document.querySelector('.methodDrop').classList.remove('DropIt');
        })}
        onChange={setNabtebMethodOptions}
        className='
          flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer items-center bg-white  hover:bg-[#EDEAEA]
        shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]' 
        key={ methodOption.id }>

          <img className='md:h-[29.27px]  h-[14.27px]' src={methodOption.flag} alt=""/>

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
    {/* end of */}
    </div>
    {nabtebEducationProceed && (
          <Modal>
            <div
              className={`deleteRecipientSuccess mx-[5%] ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar
                  ? "confirm01"
                  : "confirm"
              } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
              md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
            >
              <div className="w-full flex justify-end border-b-[6px] items-center
               border-primary px-[12px] h-[35px] md:h-[45px] lg:h-[60px] lg:border-b-[10px]">
                <img
                  src={closeIcon}
                  alt=""
                  onClick={() => setNabtebEducationProceed(false)}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
                   md:h-[25px] lg:w-[35px] lg:h-[35px]"
                />
              </div>

              <div>
                <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                  Confirm Transaction
                </h2>
                <h2 className="lg:text-[16px]  md:text-[12px] md:leading-[20px] md:px-[30px] lg:leading-[24px] 
                text-[10px] leading-[15px] text-center mt-[26px] mx-[10px] mb-[20px] font-[600]">
                  You are about to purchase{" "}
                  <span className="font-[600] lg:text-[16.9px] md:leading-[14.9px] text-[10.9px]">
                    NABTEB PINS (₦100)</span> from
                  your {nabtebPaymentResult} to
                </h2>

         <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                  <div className="flex items-center justify-between font-[500]">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Exam Type
                    </h2>
                    <div className="flex gap-1">
                      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                        <img
                          src={NabtebImg}
                          alt=""
                          className="w-full h-full object-cover md:h-[15px]"
                        />
                      </div>
                      <h2 className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-[16px] lg:leading-[24px] font-[500]">
                        NABTEB
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] 
                    md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      Quantity
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                      md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                        {nabtebQuantityResult}
                      </h2>
                    </div>
                  </div>

                 

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                     font-[500] md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Phone Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                      md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                        {nabtebEducationPinPhone}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] 
                    md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                     Email
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-[16px] lg:leading-[24px] font-[500]">
                      {nabtebEducationPinEmail}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-[12px] 
                    md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                     Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                      lg:text-[16px] lg:leading-[24px] font-[500]">
                   {nabtebEducationAmount}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                    md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                     Payment Method
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] md:text-[12px]
                       md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      {nabtebPaymentResult}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      Transaction Fee
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                      md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                        0.00
                      </h2>
                    </div>
                  </div>

                  {/* POINTS EARNED */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                    md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      Points Earned
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] text-[#2ED173] 
                      leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] 
                      lg:text-[16px] lg:leading-[24px] font-[500]">
                      +2.00
                      </h2>
                    </div>
                  </div> 

                  {/* WALLET */}
                  <div className="my-[5px] flex justify-between items-center gap-2 bg-slate-200 -mx-[20px] px-[15px] h-[49px] py-[20px]">
                    <div className="flex gap-2 items-center">
                      <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src={nabtebImageState}
                          alt="/"
                        />
                      </div>
                      <p className="text-[10px] md:text-[14px]  lg:text-[16px] font-[600]">
                        Available Balance{" "}
                        <span className="text-[#0003] font-[500]">
                          {nabtebWalletBalance}
                        </span>
                      </p>
                    </div>
                    <img
                      src={arrowRight}
                      alt=""
                      className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                    />
                  </div>

                  <div className="flex items-center justify-center mb-[60px] ">
                    <button
                      className="w-full md:w-fit bg-primary text-white rounded-md
                       px-[28px] text-[10px] md:text-[12px] leading-[15px] lg:text-[16px]
                        lg:leading-[24px] py-[15px] md:py-[10px] font-extrabold "
                      onClick={() => {
                        confirmButton();
                      }}
                    >
                      Confirmed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* CONFIRM TRANSACTION */}
{nabtebEducationConfirm && (
          <Modal>
            <div
              className={`confirm2 ${styles.inputPin} ${
                toggleSideBar
                  ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                  : "lg:w-[40%]"
              } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
            >
              <img
                onClick={() => setNabtebEducationConfirm(false)}
                className="absolute cursor-pointer md:top-[5.5px] top-[5.5px]
                     right-2 w-[18px] h-[18px] 
                 md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px]"
                src={closeIcon}
                alt=""
              />

              <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
              <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]">
                Input PIN to complete transaction
              </p>
              <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                  {" "}
                  {isVisible ? (
                    <OtpInput
                      value={inputPin}
                      inputType="tel"
                      onChange={setInputPin}
                      numInputs={4}
                      shouldAutoFocus={true}
                      inputStyle={{
                        color: "#403f3f",
                        width: 30,
                        height: 30,
                        borderRadius: 3,
                      }}
                      renderInput={(props) => (
                        <input {...props} className="inputOTP mx-[3px]" />
                      )}
                    />
                  ) : (
                    <div className="text-[24px] md:text-[24px] mt-1">
                      * * * *{" "}
                    </div>
                  )}
                  <div
                    className="text-[#0003] text-xl md:text-3xl"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
                <p className="text-[8px] md:text-[12px] text-[#04177f]">
                  Forgot Pin ?
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNabtebEducationConfirm(false);
                  inputPinHandler(e);
                }}
                disabled={inputPin.length !== 4}
                className={`${
                  inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                } my-[5%] w-[225px] flex justify-center items-center 
                mx-auto cursor-pointer text-[10px] font-extrabold h-[40px]
                 text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                 md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
               Purchase
              </button>
            </div>
          </Modal>
        )}

{transactSuccessPopUp && (
          <Modal>
            {/* <TransactFailedPopUp/> */}
            <div
              className={`confirm ${styles.successfulTwo} ${
                toggleSideBar
                  ? "md:w-[45%] md:ml-[20%] lg:ml-[20%] lg:w-[40%]"
                  : "lg:w-[40%]"
              } md:w-[45%] w-[90%] md:my-auto md:mt-[.5%] mx-auto overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
            >
              <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                <img
                  onClick={() => {
                    setTransactSuccessPopUp(false);
                    window.location.reload();
                  }}
                  className="w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[42px]"
                  src={AremxyPlugIcon}
                  alt=""
                />

                <img
                  onClick={() => {
                    setTransactSuccessPopUp(false);
                    window.location.reload();
                  }}
                  className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer
                  md:h-[35px] lg:w-[29px] lg:h-[29px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
              <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px]
               lg:my-[2%] font-[600]">
                Purchase Successful
              </h2>
              <img 
                className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                src="./Gif/checkMarkGif.gif"
                alt="/"
              />

              <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px] px-[20px]">
                <p className="text-[10px] font-[500] text-[#000] text-center mb-2 
                md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[20px] lg:leading-[16px]">
                  You have successfully purchased{" "}
                  <span className="text-[#000] font-[600] text-[10.9px] md:text-[14.9px]
                    lg:text-[16.9px]">
                 NABTEB PIN (₦100) {' '}
                  </span>
                  from your {nabtebPaymentResult} to{" "}
                </p>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12.1px] md:text-[12px] 
                  md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      Exam Type
                  </h2>
                  <div className="flex gap-1">
                    <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center 
                    justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] 
                    md:h-[12.02px] lg:h-[25px]">
                      <img
                        src={NabtebImg}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                    lg:text-[16px] lg:leading-[24px] font-[500]">
                        NABTEB
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] 
                  md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                    Quantity
                  </h2>
                  <div className="flex gap-1">
                    <h2 className="text-[10px] leading-[12px] md:text-[12px] md:leading-[11.92px] 
                    lg:text-[16px] lg:leading-[24px] font-[500]">
                      {nabtebQuantityResult}
                    </h2>
                  </div>
                </div>

                

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                   md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                    Phone Number
                  </h2>
                  <div className="flex gap-1">
                    <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] 
                    md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      {nabtebEducationPinPhone}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]  
                  md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                     Email
                  </h2>
                  <div className="flex gap-1">
                    <h2 className="text-[10px] leading-[12px]  md:text-[12px] md:leading-[11.92px]
                     lg:text-[16px] lg:leading-[24px] font-[500]">
                  {nabtebEducationPinEmail}
                    </h2>
                  </div>
                </div>

               
                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] 
                  md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                    Payment Method
                  </h2>
                  <div className="flex gap-1">
                    <h2 className="text-[10px] leading-[12px]  md:text-[12px] md:leading-[11.92px] 
                    lg:text-[16px] lg:leading-[24px] font-[500]">
                      {nabtebPaymentResult}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7C7C7C] text-[10px] leading-[12px]
                   md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                    Order Number
                  </h2>
                  <div className="flex gap-1">
                    <h2 className="text-[10px] leading-[12px]  md:text-[12px] 
                    md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] font-[500]">
                      0124yend44
                    </h2>
                  </div>
                </div>
              </div>

              <div className="bg-[#F2FAFF] mx-5 h-[45px] my-5 flex p-[10.193px] items-center justify-center   
              md:mx-[20px] md:rounded-[15px] lg:rounded-[16.308px] lg:h-[75px]">
                <p className="text-[9px] text-[#7C7C7C] text-center  md:text-[11px] 
                lg:text-[14.231px] lg:leading-[20px]">
               <span className='md:block'>The e-pins purchase has been generated successfully. 
                Please kindly check</span>
             <span className='md:block'> receipt to confirm the pin / token. 
                You can contact us for any further </span> assistance.

                </p>
              </div>
              <div className="flex  justify-center  w-[100%] 
              items-center gap-[15px] md:gap-[20px] mt-[50px]  lg:gap-[20px] 
              lg:my-[5%] md:mt-[20px] mb-[20px]">
                 
                <Link 
               to="/NabtebEducationPin"
                 onClick=  {() => {
                      nabtebTransactionSuccessClose();
                      window.location.reload();
                    }}
                    className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-[12px] font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}>
                  
                    Done
               
                </Link>
                
                <Link to="/NabtebReceipt"
                
                    onClick=
                      {nabtebReceipt}
                     className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                     flex justify-center items-center text-center  cursor-pointer text-[12px] 
                     font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}>
                  
                    Receipt
                  
                </Link>
               
                </div>
            </div>
          </Modal>
        )}

 {/* =========== RECEIPT ============*/}
 {receipt && (
          <NabtebReceipt
             Exam ="NABTEB"
            ExamType={nabtebExamType}
             ListOfResultCheckers={nabtebQuantityResult}
             PhoneNumber={nabtebEducationPinPhone}
            Email={nabtebEducationPinEmail}
            Amount={nabtebEducationAmount}
            walletBalance = {nabtebWalletBalance}
           walletName={nabtebPaymentResult}
          />
        )}
               
               <div className="py-[30px] lg:py-[60px] mt-10 lg:mb-[80px] mb-[50px] md:mb-[100px]">
          <button
            className={`font-extrabold h-[43px] w-[100%] py-[3.534px] px-[5.301px]  md:mb-[0px] rounded-[4.241px]
            md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px]  md:h-auto
           md:text-[9.389px] md:leading-[14px] md:rounded-[7.042px]
           lg:text-[16px] lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px] ${
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

    </form>
</div>
    

    <div className="flex gap-[8.729px]  md:gap-[14.896px] 
   justify-center px-[8.594px] mb-[50px]">
            <p className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center">
              You need help?
            </p>
            <Link to ="/contactUs"
              className="font-[500] text-white text-[10px]  py-[4.865px] 
              px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
              lg:text-[12px] lg:leading-[14.4px] 
               md:text-[4.583px]  md:py-[4.865px] 
              md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
              lg:px-[16px] lg:rounded-[9px]"
            >
              Contact Us
            </Link>
          </div>
  
  </div>
  </DashBoardLayout>

  )
}
