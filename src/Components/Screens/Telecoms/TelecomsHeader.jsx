import React from 'react'
import { Link } from 'react-router-dom';
import MainImage from './images/telecomsMain.svg'

const TelecomsHeader = () => {
  return (
 <div className="py-10  h-auto flex flex-col 
      gap-10 justify-center  lg:gap-15">
         <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className="flex flex-col lg:gap-10 gap-5 md:w-1/2 w-full">
        <h1 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">Telecom Services
        </h1>
        <p className="text-[14px] md:text-left text-center font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
          Our Telecom services offers fast and secure connectivity for
           all your telecommunication needs. Whether you need to make calls,
            send messages, or access the internet, our telecom products and
             service has got you covered.</p>
 </div>
          <div className='flex w-full justify-center md:w-1/2 md:justify-end'>
            <img src={MainImage} alt="telecoms_img" className='w-[180.19px] h-[172.78px] md:w-[197.94px]
         md:h-[189.79px] lg:w-[311.78px] lg:h-[298.85px] lg:object-contain'/>
        </div>    
        </div>
      
   
      
        <Link to='/signUp'  className='py-[20px] text-center w-full px-[35px] text-[14px] md:w-[179px]
      leading-[11.31px] rounded-[7px] lg:py-[15px] lg:px-[37px] bg-primary text-white
       lg:rounded-[8px] capitalize lg:text-[14px] lg:leading-[16px] font-bold'>
        Sign Up
        </Link>
     
   </div>
  )
}

export default TelecomsHeader;
