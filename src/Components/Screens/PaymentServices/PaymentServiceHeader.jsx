import React from 'react'
import { Link } from 'react-router-dom';
import paymentMain from './images/PaymentMain.svg'

const PaymentServiceHeader = () => {
  return (
     <div className='flex flex-col gap-[50px] my-[30px] px-[5%]  w-full md:flex-row  md:justify-between md:gap-[10px] md:items-center 
    md:mb-[120px] lg:gap-[310px] lg:mb-[150px]'>
      <div className=" flex flex-col gap-10 lg:gap-10 md:w-1/2  w-full">
        <h2 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">
          Payment Services
          </h2>
        <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
          Thanks for visiting our
           payment services! We offer quick and secure payment processing to make sure your transactions go off without a hitch, using our user-friendly interface to receive money both locally and internationally.</p>
       
          <Link to={`/signUp`} 
          className='md:w-[179px] md:text-left text-center w-full 
             py-[16px] text-white font-bold text-[10px] leading-[11.31px]
              bg-primary rounded-[7px] md:py-[9px] md:px-[21px] lg:px-[37px]
               lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>
            Sign Up</Link>
        
      </div>
      <div className='w-[291px] h-[164.37px] mx-auto md:mx-0 md:w-[269.15px] md:h=[155.8px] lg:w-[464.7px] lg:h-[262.47px]'>
        <img src={paymentMain} alt="payment_img" className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}

export default PaymentServiceHeader;
