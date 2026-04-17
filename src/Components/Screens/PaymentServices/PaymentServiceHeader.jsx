import React from 'react'
import { Link } from 'react-router-dom';
import paymentMain from './images/PaymentMain.svg'

const PaymentServiceHeader = () => {
  return (
   <div className="py-10  h-auto flex flex-col 
      gap-10 justify-center  lg:gap-15 px-[5%]">
         <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className="flex flex-col lg:gap-10 gap-5 md:w-1/2 w-full">
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
       </div>
         <div className='w-[291px] h-[164.37px] mx-auto md:mx-0
       md:w-[269.15px] md:h=[155.8px] lg:w-[464.7px] lg:h-[262.47px]'>
        <img src={paymentMain} alt="payment_img" className='w-full h-full object-contain'/>
      </div>
        
      </div>
     
        <Link to={`/signUp`} 
          className='py-[20px] text-center w-full px-[35px] text-[14px] md:w-[179px]
      leading-[11.31px] rounded-[7px] lg:py-[15px] lg:px-[37px] bg-primary text-white
       lg:rounded-[8px] capitalize lg:text-[14px] lg:leading-[16px] font-bold'>
            Sign Up</Link>
    </div>
  )
}

export default PaymentServiceHeader;
