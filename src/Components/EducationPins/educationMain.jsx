import React from 'react';
import HeroComponent from './heroComponent';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom/dist/react-router-dom.development';
import  arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import jamblogo from '../EducationPins/imagesEducation/jamblogo.svg';
import Neco from '../EducationPins/imagesEducation/necoImg.svg';
import Nabteb from '../EducationPins/imagesEducation/NabtebImg.svg';
import Waec from '../EducationPins/imagesEducation//WaecImg.svg';

export default function EducationMain() {
  return (
       
  <DashBoardLayout>
    <div className=' flex flex-col lg:h-[1000px] h-[110%]  justify-between'>
    <div className='flex flex-col'>
         {/* hero section */}
 <HeroComponent/>
       <div className='flex  mb-[20px] lg:gap-[15px] items-center
      md:gap-[8.87px] gap-[5px]  md:mb-[40px]' >
  <h2 className='font-[500] md:text-[14.737px] md:leading-[20px]
    lg:text-[20px] text-[#7C7C7C] lg:leading-[30px] text-[9px] leading-[14px]'>
     Select Exam Type
    </h2>
    
    <img className=' self-center md:h-[14.083px] md:w-[14.083px]
    lg:h-[24px] lg:w-[24px]' 
    src={arrowRight} alt="" />
      </div>
      {/* Examinations to click to request for the pins */}
      <div className='flex flex-wrap justify-between  gap-[25px] md:h-[70px] md:flex-row md:flex-nowrap  
      md:gap-[21.27px]  lg:h-[120px]  md:w-[100%] lg:gap-[37px]'>
        {/* WAEC Examination */}
        <Link to = "/WaecEducationPin"
        className="md:w-1/4  md:h-[100%] h-[70px] w-[144px]">
       <div className='flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
       border-[0.587px] border-[solid] border-[black] border-opacity-[30%]
      shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)]
       lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] 
       lg:border-[1px]  lg:border-[solid]
       lg:border-[black] lg:border-opacity-[30%]
         lg:p-[10px] lg:rounded-[5px] 
       lg:gap-[6px]  cursor-pointer'>
        
        {/* Waec Logo */}
         <img className='w-1/2 h-[100%]'
           src={Waec} alt="Waec logo" />
           {/* text */}
         <h2 className='w-1/2 font-[600] text-[10.563px] leading-[12.675px] 
         md:text-[10.563px] md:leading-[12.675px] 
         lg:text-[18px] lg:leading-[21.6px] self-center'>
            WAEC
         </h2>
          
       </div>
       </Link>
       {/* Neco Examination */}
       <Link to = "/NecoEducationPin"
       className="md:w-1/4 md:h-[100%] h-[70px] w-[144px]">
        <div className='flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
       border-[0.587px] border-[solid] border-[black] border-opacity-[30%]
      shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)]
       lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] 
       lg:border-[1px]  lg:border-[solid]
       lg:border-[black] lg:border-opacity-[30%]
         lg:p-[10px] lg:rounded-[5px] 
       lg:gap-[6px]  cursor-pointer'>
        {/* Neco Logo */}
         <img className='w-1/2'
           src={Neco} alt="Waec logo" />
           {/* text */}
         <h2 className='w-1/2 font-[600] text-[10.563px] leading-[12.675px]
          md:text-[10.563px] md:leading-[12.675px]
         lg:text-[18px] lg:leading-[21.6px] self-center'>
            NECO
         </h2>
       </div>
       </Link>
       {/* Nabteb Examination */}
       <Link to = "/NabtebEducationPin"
       className="md:w-1/4 md:h-[100%] h-[70px] w-[144px] ">
       <div className='flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
       border-[0.587px] border-[solid] border-[black] border-opacity-[30%]
      shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)]
       lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] 
       lg:border-[1px]  lg:border-[solid]
       lg:border-[black] lg:border-opacity-[30%]
         lg:p-[10px] lg:rounded-[5px] 
       lg:gap-[6px]  cursor-pointer'>
        {/* Nabteb Logo */}
         <img className='w-1/2'
           src={Nabteb} alt="Waec logo" />
           {/* text */}
         <h2 className='w-1/2 font-[600] text-[10.563px] leading-[12.675px]
          md:text-[10.563px] md:leading-[12.675px]
         lg:text-[18px] lg:leading-[21.6px] self-center'>
            NABTEB
         </h2>
       </div>
       </Link>
       {/* Jamb Examination */}
       <Link to = "/JambEducationPin"
        className="md:w-1/4 md:h-[100%] h-[70px] w-[144px]">
        <div className='flex h-[100%] p-[5.868px] gap-[3.35px] md:p-[5.868px] md:gap-[2.347px]
         rounded-[2.934px]
       border-[0.587px] border-[solid] border-[black] border-opacity-[30%]
      shadow-[0px_0.58686px_0.34722px_0px_rgba(0,0,0,0.25)]
       lg:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] 
       lg:border-[1px]  lg:border-[solid]
       lg:border-[black] lg:border-opacity-[30%]
         lg:p-[10px] lg:rounded-[5px] 
       lg:gap-[6px]  cursor-pointer'>
        {/* Jamb Logo */}
         <img className='w-1/2'
           src={jamblogo} alt="Waec logo" />
           {/* text */}
         <h2 className='w-1/2 font-[600] text-[10.563px] leading-[12.675px]
         md:text-[10.563px] md:leading-[12.675px]
         lg:text-[18px] lg:leading-[21.6px] self-center'>
            JAMB
         </h2>
       </div>
       </Link>
      </div>
      </div>
  
      {/* contact us */}
      <div className=" flex gap-[5.729px]  md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]">
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
