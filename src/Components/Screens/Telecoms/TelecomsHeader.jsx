import React from 'react'
import { Link } from 'react-router-dom';
import MainImage from './images/telecomsMain.svg'

const TelecomsHeader = () => {
  return (
  <div className='flex flex-col gap-[50px] my-[30px] px-[5%]  w-full md:flex-row  md:justify-between md:gap-[10px] md:items-center 
    md:mb-[120px] lg:gap-[310px] lg:mb-[150px]'>
      <div className=" flex flex-col gap-10 lg:gap-10 md:w-1/2  w-full">
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
 
            <Link to='/signUp' className='md:w-[179px] md:text-left text-center w-full 
             py-[16px] text-white font-bold text-[10px] leading-[11.31px]
              bg-primary rounded-[7px] md:py-[9px] md:px-[21px] lg:px-[37px]
               lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Sign Up</Link>
        </div>
      
      <div className='flex justify-center'>
        <div className='w-[180.19px] h-[172.78px] md:w-[197.94px]
         md:h-[189.79px] lg:w-[311.78px] lg:h-[298.85px]'>
            <img src={MainImage} alt="telecoms_img" className='lg:w-full lg:h-full lg:object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default TelecomsHeader;
