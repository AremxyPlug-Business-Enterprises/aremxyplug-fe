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
      <div className=' flex flex-col lg:h-[700px] h-[500px] justify-between '>
    <div>
         {/* hero section */}
 <HeroComponent/>
       
      <div className='flex text-[8px] leading-[12px] mb-[20px] lg:gap-[15px] md:gap-[5.87px]  md:mb-[40px]' >
    <h2 className='font-[500] md:text-[11.737px] md:leading-[18px]
    lg:text-[20px] text-[#7C7C7C] lg:leading-[30px]'>
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
       <div className='flex h-[100%] p-[5.868px] gap-[2.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
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
        <div className='flex h-[100%] p-[5.868px] gap-[2.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
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
       <div className='flex h-[100%] p-[5.868px] gap-[2.35px] md:p-[5.868px] md:gap-[2.347px] rounded-[2.934px]
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
        <div className='flex h-[100%] p-[5.868px] gap-[2.35px] md:p-[5.868px] md:gap-[2.347px]
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
      <div className="flex md:gap-[14.896px] gap-[14.9px] py-[10.865px] justify-center px-[8.594px]">
              <p
                className="font-[500] text-[7px] leading-[9.1px]  
                lg:text-[12px] lg:leading-[15.6px]  md:text-[6.875px]
  text-[#707070] md:leading-[8.938px]"
              >
                You need help?
              </p>
              <Link to = "/contactUs"
               
                className="font-[500] text-white  text-[7px] leading-[9.1px]  lg:text-[8px] lg:leading-[10.4px] 
  md:text-[4.583px]  py-[2.865px] 
 px-[8.594px] md:leading-[5.985px] rounded-[5.156px] lg:py-[5px]
 lg:px-[15px] lg:rounded-  bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
      </div>
 </DashBoardLayout>
      
  )
}
