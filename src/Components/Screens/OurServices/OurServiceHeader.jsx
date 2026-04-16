import React from 'react'
import ButtonLink from './ButtonLink';
import OurServiceMain from './images/OurServicesMain.png'

const OurServiceHeader = () => {
  return (
    <div className='flex flex-col gap-[50px] my-[30px]  w-full md:flex-row  md:justify-between md:gap-[10px] md:items-center 
    md:mb-[120px] lg:gap-[310px] lg:mb-[150px]'>
      <div className=" flex flex-col gap-10 lg:gap-10 md:w-1/2  w-full">
        <h1 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">
          Our Services
        </h1>
        <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
          At AremxyPlug, we're dedicated to providing high-quality services to help you achieve your goals. Contact us today to learn more about our services and how we can help you achieve your goals.</p>
        <ButtonLink name={'sign up'} link={'signUp'}/> 
        {/* created link for sign up from the service page */}
      </div>
      <div className="w-full h-[178.08] md:w-1/2 lg:mx-0 lg:w-[315px] lg:h-[231.79px] 
      md:mx-0  md:h-[134.41px]">
        <img src={OurServiceMain} alt="our_service_img" className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default OurServiceHeader;
