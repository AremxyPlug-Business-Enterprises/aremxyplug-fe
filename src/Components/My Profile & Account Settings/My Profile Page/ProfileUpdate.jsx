import React, {useContext} from 'react';
import '../../../App.css';
import ProfilePic from '../ProfileImages/ProfilePic.svg';
import pickPinIcon from '../ProfileImages/pickPinIcon.svg';
import  naijaFlag from "../../EducationPins/imagesEducation/Nigeriaflag.svg";
import messageQuestion from "../ProfileImages/message-question.svg";
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../Context';


export default function ProfileUpdate() {
  const {profilePage} = useContext(ContextProvider);

  return (
    <div>
     {profilePage && (
 <div className='flex flex-col justify-between md:h-[1000px] h-[900px]  mt-[40px]'>
  <div>
    <div className='flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
        {/* Profile pic */}
    <div className='flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]'>
      <div className='relative'>
      <img src={ProfilePic} className='h-[48px] w-[46.753px] rounded-[48px]
      lg:h-[150px] lg:w-[150px] 
      md:h-[88.801px]  md:w-[88.801px]
      md:rounded-[88.201px] lg:rounded-[150px]' alt="profilePic"/>
   <img  src={pickPinIcon}
   className='absolute bottom-0 right-0 h-[25px] w-[25px] 
   md:h-[25.82px] md:w-[25.82px] lg:h-[44px] lg:w-[44px]'  
   alt="" />
   </div>
   {/* Profile text */}
   <div className='flex flex-col justify-center gap-[3.52px] lg:gap-[12px]'>
  <p className='font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
  lg:text-[16px] lg:leading-[20.8px]'>
    Habib Kamaldeen
    </p>
  <p className='font-[500] text-[#7C7C7C] text-[10px] leading-[15px]
  md:text-[7.042px] md:leading-[9.154px]
  lg:text-[12px] lg:leading-[15.6px]'>
    habib@aremxyplug.com
    </p>
   </div>
   
    </div>
     {/* FORM / INPUTS */}
     {/*  */}
     <form action="">
      {/* Container for the three levels of the inputs */}
     <div className='flex flex-col gap-[20px] md:gap-[26.41px] lg:gap-[45px]  '>
    {/* Level 1 / First two inputs */}
        <div className='flex flex-col gap-[20px]
        md:flex md:flex-row md:gap-[12.91px] lg:gap-[22px] w-[100%]'>
          {/* Country */}
      <div className='flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px]'>
     <h2 className='text-[#7E7E7E] text-[8px] leading-[10.4px] 
     md:text-[9.389px] md:leading-[12.206px] 
     font-[600] lg:text-[16px] lg:leading-[20.8px] cursor-default'>
      Country
     </h2>
     <div className='flex lg:gap-[7px] gap-[5px] items-center h-[30px] md:h-[40px] lg:h-[51px]
      pl-[5.868px]  lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid] cursor-default'>
      <img src={naijaFlag} 
      className='h-[17.176px] w-[17.176px] lg:h-[29.27px] lg:w-[29.27px]'
      alt="" />
     <p className='font-[500] text-[#7E7E7E]
     text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
      Nigeria</p>
     </div>
      </div>
       
          {/* Country */}
      <div className='flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px] '>
     <h2 className='text-[#7E7E7E] font-[600] text-[8px] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] cursor-default'>
        Full Name
     </h2>
    <div className='flex  items-center h-[30px] md:h-[40px] lg:h-[51px] 
      pl-[5.868px]   lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid] '>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] cursor-default'>
     Habib Kamaldeen
     </p>
     </div>
    
        </div>
        </div>
          
  {/* End of level 1 */}

{/* Start of level Two */}
  <div className='flex flex-col gap-[20px]
        md:flex md:flex-row  md:gap-[12.91px] lg:gap-[22px] w-[100%]'>
  <div className='flex flex-col gap-[5.868px] w-[100%] md:w-[50%] lg:gap-[10px] '>
     <h2 className='text-[#7E7E7E] font-[600] 
     text-[8px] leading-[10.4px]
       md:text-[9.389px] md:leading-[12.206px] lg:text-[16px] 
     lg:leading-[20.8px] cursor-default'>
       UserName
     </h2>
     <div className='flex  items-center h-[30px] md:h-[40px] lg:h-[51px] 
       pl-[5.868px]  lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid]'>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] cursor-default'>
    AremxyPlug
     </p>
     </div>
    
        </div>
{/* second part level two */}
<div className='flex flex-col w-[100%] md:w-[50%] gap-[5.868px] lg:gap-[10px] cursor-default'>
     <h2 className='text-[#7E7E7E] font-[600] 
     text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] '>
     Email
     </h2>
     <div className='flex  items-center h-[30px] md:h-[40px] lg:h-[51px]
        pl-[5.868px]  lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid]'>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
   habib@aremxy.com
     </p>
     </div>
    
        </div>
    </div>
    {/* End of level two */}

    {/* Start of level three */}
      <div className=''>
    <h2 className='text-start text-[#7E7E7E] font-[600] 
    text-[8px] leading-[10.4px]
    md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px] lg:mb-[10px] mb-[5.868px] 
     cursor-default'>
       Phone Number
     </h2>
      {/* first part */}
    <div className=' flex flex-col 
        md:flex md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] w-[100%] '>
     <div className='flex  md:w-[50%] items-center md:h-[40px] h-[30px]
      lg:h-[51px] pl-[5.586px] lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid]'>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] cursor-default'>
     09087654321
     </p>
     </div>
     {/* Start of the message / 2nd part */}
     <div className='flex w-[100%]  md:w-[50%] items-center  gap-[10px] lg:gap-[16px]'>
   <div className='flex gap-[5px] md:gap-[8px]'>
  <h2 className='text-[#7E7E7E] font-[500]
  text-[8px] leading-[10.4px]
  md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px] gap-[10px] cursor-default'>
    About AremxyPlug
  </h2>
  <Link to = "/About-us">
  <img 
  className='cursor-pointer h-[12px] w-[12px]   
  md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px]'
  src={messageQuestion} alt="" />
  </Link>
   </div>
   {/* Faq */}
   <div className='flex gap-[5px] md:gap-[8px]'>
  <h2 className='text-[#7E7E7E] font-[500]
  text-[8px] leading-[10.4px]
  md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px] gap-[10px] cursor-default'>
   FAQ’s
  </h2>
  <Link to = '/faq'>
  <img 
  className='cursor-pointer h-[12px] w-[12px] md:h-[14.083px] md:w-[14.083px] 
  lg:h-[24px] lg:w-[24px]'
  src={messageQuestion} alt="" />
  </Link>
   </div>
        </div>
        {/* end of 2nd part */}
        </div>
       </div>
     <Link to ='/EditProfile'
     className='lg:w-[163px] w-[100%] py-[15.534px] rounded-[2.241px]  md:w-[95.649px] md:py-[5.868px] 
     lg:py-[10px] bg-[#04177F] md:rounded-[7.042px] lg:rounded-[12px] mt-[30px] md:mt-[0px]'>
      <p className='font-[600] text-white text-center 
      text-[12px] leading-[18px]
      md:text-[9.389px] md:leading-[14px] lg:text-[16px] lg:leading-[24px]'>
      Update Profile
      </p>
     </Link>
    </div>
      </form>
    </div>
    </div>
    {/* ==============     CONTACT US ================= */}
    <div className=" flex gap-[8.729px]  md:gap-[14.896px] 
     justify-center px-[8.594px] mb-[130px]">
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
     )}

    </div>
    
     

  )
}
