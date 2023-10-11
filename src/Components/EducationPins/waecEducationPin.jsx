import React from 'react'
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

export default function WaecEducationPin() {
const [quantityResult, setQuantityResult] = useState('1 Piece of Result Checker');
const [isActive, setIsActive] = useState(false);
function clickDropDown(){
  setIsActive(!isActive);
document.querySelector('.imgdrop').classList.toggle('DropIt');
}
const options = 
['1 Piece Of Result Checker', '2 Piece Of Result Checker', '3 Piece Of Result Checker','4 Piece Of Result Checker'];


const [paymentResult, setPaymentResult] = useState('');
const [methodActive, setMethodActive] = useState(false);
function methodDropDown(){
  setMethodActive(!methodActive);
document.querySelector('.methodDrop').classList.toggle('DropIt');
}
const [methodOptions,setMethodOptions] = useState([
 {method : 'NGN Wallet (50,000.00)', flag : nigerianFlag, id : 1},
{method : 'USD Wallet (0.00)', flag : americaFlag, id : 2 },
{method : 'EUR Wallet (0.00)', flag : britainFlag, id : 3 },
{method :  'GBP Wallet (0.00)', flag : euroFlag, id : 4 },
{method : 'AUD Wallet (0.00)', flag : austriaFlag, id : 5 },
{method : 'KES Wallet (0.00)', flag : kenyaFlag, id: 6 }
])



  return (
  <DashBoardLayout>
      <div className=' flex flex-col lg:h-[700px] justify-between '>
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
      md:w-[80%] lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px]'>
        {/* container for the first two input */}
        <div className='flex flex-col md:flex-row gap-[20px] 
        md:gap-[12.91px] lg:gap-[22px]'>

          {/* First Step Confirm exam type */}
     <div className='flex flex-col w-[100%] gap-[5.868px] md:w-1/2 md:gap-[5.868px]  
     lg:gap-[10px]'>
      {/* header */}
      <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px]  
       md:text-[9.389px] md:leading-[12.206px]
      lg:text-[16px] lg:leading-[20.8px]'>
      Confirm Exam Type
      </h2>
      {/* input */}
  <div className='flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
  md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]'>
      <h2 className='font-[500] text-[8px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] 
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px]'>
        WAEC (₦100)
        </h2>
        <img  className='md:h-[14.083px] md:w-[14.083px] lg:h-[24px] 
        lg:w-[24px] h-[14px] w-[14px]'
        src= {arrowDown} alt="" />
         </div>
      </div>

      {/* Quantity input Two / RightSide */}
      <div className='Quantity-parent gap-[5.868px] flex flex-col w-[100%] md:w-1/2  md:gap-[5.868px] lg:gap-[10px]'>
      {/* header */}
      <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px]
        md:text-[9.389px] md:leading-[12.206px]
       lg:text-[16px] lg:leading-[20.8px]'>
      Quantity
      </h2>
      {/* input */}
  <div className='flex  justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
   md:pt-[8.802px] md:pb-[7.042px] 
  md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
  border-[0.4px] border-[#9C9C9C] '>
      <h2 className='font-[500] text-[8px] leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px]'>
      {quantityResult}
        </h2>
        <img 
        onClick={clickDropDown}
        className='imgdrop md:h-[14.038px] md:w-[14.038px] 
        lg:h-[24px] lg:w-[24px] w-[14px] h-[14px]'
        src={arrowDown} alt="" />
         </div>
         {/* drop down */}
         
        {isActive && (
           <div className='Quantity-child flex flex-col w-[100%] lg:h-225px md:h-[210px]  
           md:shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>
            {(options.map(option => {
              return (
                <h2 onClick={(e =>{
                  setQuantityResult(option)
                  setIsActive(false);
               document.querySelector('.imgdrop').classList.remove('DropIt');
                })}
                className='text-[8px] leading-[10.4px] py-[15px] pl-[10px] font-[500] text-[#7C7C7C]  
           md:text-[13.227px] md:leading-[17.195px] 
           lg:text-[16px] lg:leading-[20.8px] cursor-pointer hover:bg-[#EDEAEA]' >
          {option}
           </h2>
              )
            }))}
           
            
               </div>
        )}
      </div>
     </div>
    {/* container for Phone number and Email */}
     <div className='flex flex-col  md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px]'>
      {/* LeftSide */}
       <div className='container-phone gap-[5.868px] 
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
      e.target.value = '2px solid red'
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
     md:placeholder:text-[9.389px] md:placeholder:leading-[12.206px] '
      type="tel" name='phone' id='phone' maxLength={11} placeholder='090*****2340'/>
     
     </div>
     {/* right-side */}
     <div className='flex flex-col gap-[5.868px] md:w-1/2 md:gap-[10px]'>
     <h2 className='font-[600] text-[8px] leading-[10.4px]
     text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
     Email
     </h2>
     
     < input className='flex h-[29.927px] lg:h-[51px] md:h-[29.93px] w-[100%]
      pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
      border-[0.4px] border-[#9C9C9C] focus:outline-none self-center
     md:pt-[8.802px] md:pb-[7.042px] 
     md:pr-[5.282px] md:pl-[5.867px] 
     placeholder:text-[8px] placeholder:leading-[10.4px]
     lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px] 
     lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] placeholder:text-[#7E7E7E]
     md:placeholder:text-[9.389px] md:placeholder:leading-[12.206px]
      md:placeholder:text-[#7E7E7E]'
      type="Email" placeholder='Habib@aremxy.com'/>
    
     </div>
     </div>

     {/* Conatiner for Amount and Payment method */}
     <div className='flex flex-col gap-[20px] md:flex-row md:gap-[12.91px] lg:gap-[22px]'>

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
       type='text' className='h-[29.927px]  lg:h-[51px] md:h-[29.93px]
        md:pt-[8.802px] md:pb-[7.042px] 
       pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
     md:pr-[5.282px] md:pl-[5.867px]
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] border-[#9C9C9C]
  focus:outline-none text-start
    placeholder:text-[8px] placeholder:leading-[10.4px]
   placeholder:font-[500]  placeholder:md:text-[9.389px] placeholder:md:leading-[12.206px]
  placeholder:lg:text-[16px] placeholder:text-[#7C7C7C] placeholder:lg:leading-[20.8px]
  ' placeholder=' ₦100' maxLength={7} />
  
 
      </div>
      {/* payment method */}
      <div className='Quantity-parent gap-[5.868px]
       flex w-[100%] flex-col md:w-1/2  md:gap-[5.868px] lg:gap-[10px]'>
      {/* header */}
      <h2 className='font-[600] text-[8px] leading-[10.4px]
       text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
       lg:text-[16px] lg:leading-[20.8px]'>
      Payment Method
      </h2>
      {/* input */}
  <div className='flex  justify-between  pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
  md:pt-[8.802px] md:pb-[7.042px] 
  md:pr-[5.282px] md:pl-[5.867px] 
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
  border-[0.4px] border-[#9C9C9C] '>
      <h2 className='font-[500] text-[8px] leading-[10.4px]
       md:text-[9.389px] md:leading-[12.206px]
      lg:text-[16px] text-[#7C7C7C] lg:leading-[20.8px]'>
      {paymentResult}
        </h2>
        <img 
        onClick={methodDropDown}
        className='methodDrop h-[14px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]'
        src={arrowDown} alt="" />
         </div>
         {/* drop down */}
         
        {methodActive && (
           <div className='Quantity-child flex flex-col w-[100%]  
           md:shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>

          {(methodOptions.map(methodOption => {
              return (
          <div 
          onClick={(e =>{
            setPaymentResult(methodOption.method)
            setMethodActive(false);
         document.querySelector('.methodDrop').classList.remove('DropIt');
          })}
          className='flex gap-[10px] py-[15px] pl-[10px]
          cursor-pointer hover:bg-[#EDEAEA] items-center' 
          key={ methodOption.id }>

            <img className='h-[100%]' src={methodOption.flag} alt=""/>

              <h2 
                className='text-[8px] leading-[10.4px]
                 font-[500] text-[#7C7C7C]  
           md:text-[13.227px] md:leading-[17.195px] 
           lg:text-[16px] lg:leading-[20.8px] self-center' >
          {methodOption.method}
           </h2>
          </div>
                
              )
            }))}
           
            
               </div>
        )}
      </div>
      </div>
      </div>
      <div className='flex'>
    <button onClick={(e =>{
      e.preventDefault();
    })}
     className='btn-proceed font-600 h-[43px] w-[100%] py-[3.534px] px-[5.301px] mb-[40px] md:mb-[0px] rounded-[4.241px]
     md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] 
    md:text-[9.389px] md:leading-[14px] md:rounded-[7.042px] bg-[#04177F] 
   lg:text-[16px] lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px]'>
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
