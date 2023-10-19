import React from 'react';
import { useContext } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import HeroComponent from './heroComponent';
import WaecImg from '../EducationPins/imagesEducation/WaecImg.svg';
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
// import WaecReceipt from './ReceiptEducationPins/waecReceipt';

export default function WaecEducationPin() {
  const { isDarkMode } = useContext(ContextProvider);
  const {quantityResult, setQuantityResult} = useContext(ContextProvider);
const {waecActive, setWaecActive} = useContext(ContextProvider);
const {paymentResult, setPaymentResult} = useContext(ContextProvider);
const {methodActive, setMethodActive} = useContext(ContextProvider);
const {examType, setExamType} = useContext(ContextProvider);
const {examActive, setExamActive} = useContext(ContextProvider);
const { transactSuccessPopUp, setTransactSuccessPopUp } =
useContext(ContextProvider);
const {educationPinPhone, setEducationPinPhone} = useContext(ContextProvider);
// const {educationPinEmail, setEducationPinEmail} = useContext(ContextProvider);


// UseStates
const [imageState, setImageState] = useState(arrowDown);
const [educationProceed, setEducationProceed] = useState(false);
const [errors, setErrors] = useState({});
const [educationConfirm, setEducationConfirm] = useState(false);
// const [receipt] = useState(false);
// const [waecAmount, setWaecAmount] = ('');

//==========  QUANTITY RESULT SLIP CHECKERS ==============
function clickDropDown(){
  setWaecActive(!waecActive);
document.querySelector('.imgdrop').classList.toggle('DropIt');
}
const options = [
  {quantity :  '1 Piece Of Result Checker', Amount : "₦100", id : 1},
  {quantity :  '2 Piece Of Result Checker', Amount : "₦200", id : 2},
  {quantity :  '3 Piece Of Result Checker', Amount : "₦300", id : 3},
  {quantity :  '4 Piece Of Result Checker', Amount : "₦400", id : 4},
  {quantity :  '5 Piece Of Result Checker', Amount : "₦500", id : 5}
]



// WALLET 

function methodDropDown(){
  setMethodActive(!methodActive);
document.querySelector('.methodDrop').classList.toggle('DropIt');
}
const [methodOptions,setMethodOptions] = useState([
 {method : 'NGN Wallet', balance :" (50,000.00)", flag : nigerianFlag, id : 1},
{method : 'USD Wallet ', balance :'(0.00)', flag : americaFlag, id : 2 },
{method : 'EUR Wallet', balance :'(0.00)', flag : britainFlag, id : 3 },
{method :  'GBP Wallet', balance :'(0.00)', flag : euroFlag, id : 4 },
{method : 'AUD Wallet', balance :'(0.00)', flag : austriaFlag, id : 5 },
{method : 'KES Wallet',balance :'(0.00)', flag : kenyaFlag, id: 6 }
])

// CONFIRM EXAM TYPE
const Exams  = [
{ examType :'WAEC (₦100)',  id : 1},
  { examType :'NECO (₦100)', path :  "/NecoEducationPin", id : 2 },
  { examType :'NABTEB (₦100)', path : "/NabtebEducationPin", id : 3 },
{ examType :'JAMB (₦100)', path : "/JambEducationPin", id : 4 }
 ]
function examDropDown(){
  setExamActive(!examActive);
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

const waecProceed = () => {
  

  const { error } = schema.validate({
    educationPinPhone,
  });

  if (error) {
    setErrors(
      error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {})
    );
  } else {
    setEducationProceed(true);
    setErrors({});
  }
};

const schema = Joi.object({
  educationPinPhone: Joi.string()
    .pattern(new RegExp(/^\d{11,}/))
    .required()
    .messages({
      "string.pattern.base": "Phone number should be 11 digits ",
    })
    // educationPinEmail: Joi.string()
    // .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    // .required()
    // .messages({ "string.pattern.base": "Invalid email " })
});

const confirmButton = () => {
  setEducationProceed(false);
  setEducationConfirm(true);
};

const waecTransactionSuccessClose = () => {
  setTransactSuccessPopUp(false);
};
const waecReceipt = () => {
  setTransactSuccessPopUp(false);
};


  return (
  <DashBoardLayout>
      <div className='flex flex-col lg:h-[700px] justify-between '>
   <div className=''>
    {/* Hero-section */}
 <HeroComponent/>
      <div className='flex lg:gap-[8px] items-center md:gap-[4.694px] mb-[20px]  lg:mb-[50px] md:mb-[30px]'>

        <h2 className='font-[600] text-[8px] leading-[12px] md:text-[9.389px]
         md:leading-[11.267px] lg:text-[16px] text-[#7E7E7E] lg:leading-[19.2px]'>
      Purchase
        </h2>

        <img className='h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center'
        src={WaecImg} alt="" />

        <h2 className='font-[600] text-[8px] leading-[12px] md:text-[9.389px]
         md:leading-[11.267px] lg:text-[16px] text-[#7E7E7E] lg:leading-[19.2px]'>
        WAEC E-PINs Instantly
        </h2>
        <img className='md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]'
        src={arrowRight} alt="" />
      </div>
      {/* Input for Request of examination pins  */}
      <form action=''>
      <div  className='flex flex-col gap-[20px]  md:h-[172.73px] md:gap-[14.67px] 
      md:w-[80%] lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px] bg-blue-400'>
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
   onClick={examDropDown}
  className='relative w-[100%] flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
  md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]
  hover:bg-[#EDEAEA]'>
      <h2 
      className='font-[500] text-[8px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] 
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
      {examType}
        </h2>
        <img  
        className='Examdrop md:h-[14.083px] md:w-[14.083px] lg:h-[24px] 
        lg:w-[24px] h-[14px] w-[14px]'
        src= {arrowDown} alt="" />
         </div>
         {examActive && (
           <div className='absolute md:top-[90px] top-[50px] z-[3]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
           md:shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>
            {(Exams.map(exam => {
              return (
                 <a href={exam.path}
                 onClick={(e =>{
            setExamType(exam.examType);
                   setExamActive(false);
               document.querySelector('.Examdrop').classList.remove('DropIt');
               console.log(e);
                })}
                className=' text-[8px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
           md:text-[13.227px] md:leading-[17.195px] 
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
  onClick={clickDropDown}
  className=' flex  justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
   md:pt-[8.802px] md:pb-[7.042px] 
  md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
  border-[0.4px] border-[#9C9C9C] hover:bg-[#EDEAEA]'>
      <h2 className='font-[500] text-[8px] leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
      {quantityResult}
        </h2>
        <img 
         className='imgdrop md:h-[14.038px] md:w-[14.038px] 
        lg:h-[24px] lg:w-[24px] w-[14px] h-[14px]'
        src={arrowDown} alt="" />
         </div>
         {/* drop down */}
         
        {waecActive && (
           <div className='absolute z-0 md:top-[90px] top-[50px]   flex flex-col w-[100%] lg:h-225px md:h-[210px]  
           md:shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>
            {(options.map(option => {
              return (
                <h2 onClick={(e =>{
                  setQuantityResult(option.quantity)
                  setWaecActive(false);
                document.querySelector('.imgdrop').classList.remove('DropIt');
           
                })}
                className='text-[8px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-[500] text-[#7C7C7C]  
           md:text-[13.227px] md:leading-[17.195px] 
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
     flex flex-col  md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] z-0'>
      {/* LeftSide */}
       <div className=' container-phone gap-[5.868px] 
       flex flex-col md:w-1/2 md:gap-[10px] z-0'>
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
     className='h-[29.927px] lg:h-[51px]  md:h-[29.93px] w-[100%] border-[0.4px] border-[#9C9C9C] 
     pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
     focus:outline-none 
     md:pt-[8.802px] md:pb-[7.042px] 
     md:pr-[5.282px] md:pl-[5.867px] 
     lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px]
     placeholder:text-[8px] placeholder:leading-[10.4px] 
     lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] placeholder:text-[#7E7E7E]
     md:placeholder:text-[9.389px] md:placeholder:leading-[12.206px]'
      type="tel" name='phone' id='phone' maxLength={11} placeholder='090*****2340'
      value={educationPinPhone} onChange={(e)=>{
        setEducationPinPhone(e.target.value);
      }}/>
     
     </div>
     {errors.educationPinPhone && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.educationPinPhone}
              </div>
            )}
     {/* right-side */}
     <div className='flex flex-col gap-[5.868px] md:w-1/2 md:gap-[10px]'>
     <h2 className='font-[600] text-[8px] leading-[10.4px]
     text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
     Email
     </h2>
     
     < input 
     
     className='flex h-[29.927px] lg:h-[51px] md:h-[29.93px] w-[100%]
      pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
      border-[0.4px] border-[#9C9C9C] focus:outline-none self-center
     md:pt-[8.802px] md:pb-[7.042px] 
     md:pr-[5.282px] md:pl-[5.867px] 
     placeholder:text-[8px] placeholder:leading-[10.4px]
     lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px] 
     lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] placeholder:text-[#7E7E7E]
     md:placeholder:text-[9.389px] md:placeholder:leading-[12.206px]
      md:placeholder:text-[#7E7E7E]'
      type="Email" 
      placeholder='Habib@aremxy.com'
    />
      
    
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
      <input
      onInput={(e =>{
        const onlyNum = e.target.value.replace(/\D/g, '');
        e.target.value = onlyNum;
      if(e.target.value.length === 4){
      
        }
      })}
        className='h-[29.927px]  lg:h-[51px] md:h-[29.93px]
        md:pt-[8.802px] md:pb-[7.042px] 
       pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
     md:pr-[5.282px] md:pl-[5.867px]
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]
  focus:outline-none text-start
    placeholder:text-[8px] placeholder:leading-[10.4px]
   placeholder:font-[500]  placeholder:md:text-[9.389px] placeholder:md:leading-[12.206px]
  placeholder:lg:text-[16px] placeholder:text-[#7C7C7C] placeholder:lg:leading-[20.8px]
  ' placeholder=' ₦'
   maxLength={7}
   
   />

 
      </div>
      {/* payment method */}
      <div className=' payment-parent gap-[5.868px]
       flex w-[100%] flex-col md:w-1/2  md:gap-[5.868px] lg:gap-[10px]'>
      {/* header */}
      <h2 className='font-[600] text-[8px] leading-[10.4px]
       text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
       lg:text-[16px] lg:leading-[20.8px]'>
      Payment Method
      </h2>
      {/* input */}
  <div 
   onClick={methodDropDown}
  className='flex  justify-between  pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
  md:pt-[8.802px] md:pb-[7.042px] 
  md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
  border-[0.4px] border-[#9C9C9C]  hover:bg-[#EDEAEA]'>
      <h2 className='font-[500] text-[8px] leading-[10.4px]
       md:text-[9.389px] md:leading-[12.206px]
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px] cursor-pointer'>
      {paymentResult}
        </h2>
        <img 
       
        className='methodDrop h-[14px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
        src={imageState} alt="" />
         </div>
         {/* drop down */}
         
        {methodActive && (
           <div className=' flex flex-col w-[100%]  
           md:shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>

          {(methodOptions.map(methodOption => {
              return (
          <div 
          onClick={(e =>{
          onchange={setMethodOptions}
            setPaymentResult(methodOption.method + ' ' + methodOption.balance);
            setImageState(methodOption.flag);
            setMethodActive(false);
         document.querySelector('.methodDrop').classList.remove('DropIt');
          })}
          className='flex gap-[10px] md:py-[15px] py-[3px] pl-[10px]
          cursor-pointer hover:bg-[#EDEAEA] items-center' 
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
      {educationProceed && (
            <Modal>
              <div
                className={`confirm mx-[5%] ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] md:mt-[1%] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:mb-[18%] md:overflow-auto`}
              >
                <div className="w-full flex justify-end border-b-[6px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">
                  <img
                    src={closeIcon}
                    alt=""
                    onClick={() => setEducationProceed(false)}
                    className="md:h-[120%] lg:h-[400%] lg:mt-[-25px] lg:pb-[20px]"
                  />
                </div>

                <div>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                    Confirm Transaction
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[12px] md:px-[30px] lg:leading-[24px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]">
                    You are about to purchase{" "}
                    <span className="font-[600]">{examType}</span> from
                    your {paymentResult + " Wallet"} to
                  </h2>

           <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Exam Type
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={WaecImg}
                            alt=""
                            className="w-full h-full object-cover md:h-[15px]"
                          />
                        </div>
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          WAEC
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Quantity
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {quantityResult}
                        </h2>
                      </div>
                    </div>

                   

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {educationPinPhone}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                       Email
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                       Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        ₦100
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                       Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {paymentResult + " Wallet"}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Transaction Fee
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          0.00
                        </h2>
                      </div>
                    </div>

                    {/* POINTS EARNED */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Points Earned
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] text-[#2ED173] 
                        leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] 
                        lg:text-[16px] lg:leading-[24px]">
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
                            src={imageState}
                            alt="/"
                          />
                        </div>
                        <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                          Available Balance{" "}
                          <span className="text-[#0003]">
                            ( (₦50,000.00) )
                          </span>
                        </p>
                      </div>
                      <img
                        src={arrowRight}
                        alt=""
                        className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                      />
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] md:text-[12px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px] md:py-[10px]"
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
 {educationConfirm && (
            <Modal>
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <img
                  onClick={() => setEducationConfirm(false)}
                  className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
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
                    setEducationConfirm(false);
                    inputPinHandler(e);
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                    inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                  } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                 Fund
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
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      setTransactSuccessPopUp(false);
                      window.location.reload();
                    }}
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                  Purchase Successful
                </h2>
                <img 
                  className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[250px] lg:h-[250px]"
                  src="./Gif/checkMarkGif.gif"
                  alt="/"
                />

                <div className="flex flex-col gap-2 lg:gap-4 px-[20px]">
                  <p className="text-[8px] text-[#0008] text-center mb-2 md:text-[14px] lg:text-[12px]">
                    You have successfully purchased{" "}
                    <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                    WAEC (₦100)
                    </span>
                    from your {paymentResult} to{" "}
                  </p>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Exam Type
                    </h2>
                    <div className="flex gap-1">
                      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                        <img
                          src={WaecImg}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                           WAEC
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Quantity
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {quantityResult}
                      </h2>
                    </div>
                  </div>

                  

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Phone Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {educationPinPhone}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                       Email
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        
                      </h2>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedAmount}
                      </h2>
                    </div>
                  </div> */}

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Payment Method
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {paymentResult + " Wallet"}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Order Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        0124yend44
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[75px] md:mx-[20px] md:rounded-[15px] lg:h-[75px]">
                  <p className="text-[6px] text-center mx-auto w-[171px] md:text-[9px] md:w-full lg:text-[14px]">
                    The data purchase has been sent successfully to the
                    recipient phone number. Please kindly engage the recipient
                    to check his/her balance to confirm the value. You can
                    contact us for any further assistance.
                  </p>
                </div>
                <div className="flex w-full justify-center mx-auto px-[50px] 
                items-center gap-[5%] md:gap-[10%] mt-[50px] md:w-[50%] lg:gap-[10%] lg:mx-auto  
                lg:my-[5%] md:mt-[40px]">
                   <Link to="/WaecReceipt">
                    <button
                      onClick={waecReceipt}
                      className={`border-[1px] w-[100px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Share Receipt
                    </button>
                  </Link>

                  <Link to="/">
                    <button
                      onClick={() => {
                        waecTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Save As Pdf
                    </button>
                  </Link>
                  </div>
              </div>
            </Modal>
          )}

   {/* =========== RECEIPT ============*/}
   {/* {receipt && (
            <WaecReceipt
               Exam ="WAEC"
              ExamType={examType}
               ListOfResultCheckers={quantityResult}
               PhoneNumber={educationPinPhone}
              Email={educationPinEmail}
             walletName={paymentResult}
            />
          )} */}
                 
                 <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className={`font-600 h-[43px] w-[100%] py-[3.534px] px-[5.301px] mb-[40px] md:mb-[0px] rounded-[4.241px]
              md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] 
             md:text-[9.389px] md:leading-[14px] md:rounded-[7.042px]
             lg:text-[16px] lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px] ${
                !examType ||
                !quantityResult ||
                !educationPinPhone ||
                // !educationPinEmail ||
                !paymentResult
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={waecProceed}
              disabled={
                !examType ||
                !quantityResult ||
                !educationPinPhone ||
                // !educationPinEmail ||
                !paymentResult
              }
            >
              Proceed
            </button>
          </div>

      </form>

      

      <div className="md:hidden flex gap-[5.729px] py-[2.865px] justify-center px-[8.594px] ">
              <p className="font-[500] text-[8px] text-[#707070] leading-[10.4px]">
                You need help?
              </p>
              <Link to ="/contactUs"
                className="font-[500] text-white text-[8px]  py-[2.865px] 
 px-[8.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
    </div>
    </div>
    </DashBoardLayout>

  )
}


