import React from 'react'
import '../../../App.css';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import ProfileHero from '../ProfileHero';
import ArrowRight from  '../../EducationPins/imagesEducation/educationArrowRight.svg';
import EditPic from '../ProfileImages/ProfilePic.svg';
import changePic from '../ProfileImages/pickPinIcon.svg';
import { Link } from 'react-router-dom';
export default function EditProfile() {
  return (
    <div>
       <DashBoardLayout>
        <div className='flex flex-col justify-between md:h-[1000px] h-[900px] '>
          <div className=''>
       <ProfileHero/>
       <div className='flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]'>
        {/* Edit Profile */}
       <div className='flex lg:gap-[10px] gap-[5.87px]'>
    <h2 className='text-[#7C7C7C] font-[500] md:text-[11.736px] md:leading-[18px]
    lg:text-[20px] lg:leading-[30px]'>
      Edit Profile
      </h2>
    <img className='lg:h-[24px] lg:w-[24px] md:h-[14.083px] md:w-[14.083px] self-center'
    src={ArrowRight} alt="" />
       </div>
       {/* EDIT PROFILE PIC */}
       <div className='flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]'>
      <div className='relative'>
      <img src={EditPic} className='h-[48px] w-[46.753px] rounded-[48px]
      lg:h-[150px] lg:w-[150px] 
      md:h-[88.801px]  md:w-[88.801px]
      md:rounded-[88.201px] lg:rounded-[150px]' alt="profilePic"/>
   <img  src={changePic}
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
    {/* CHANGE EMAIL AND PHONE NUMBERS */}
    <div className='flex flex-col gap-[20px]
        md:flex md:flex-row  md:gap-[12.91px] lg:gap-[22px] w-[100%]'> 
        {/* SELECT EMAIL CHANGE */}
<div className='flex flex-col w-[100%] md:w-[50%] 
gap-[5.868px] lg:gap-[10px] cursor-default'>
     <h2 className='text-[#7E7E7E] font-[600] 
     text-[8px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] '>
     Email
     </h2>
     <div className='flex  items-center h-[30px] md:h-[40px] lg:h-[51px]
        pl-[5.868px]  lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid] lg:mb-[26px] md:mb-[15.26px] mb-[20px]'>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
   habib@aremxy.com
     </p>
     </div>
      <button className='text-[12px] leading-[18px]
      md:text-[9.389px]  md:leading-[14px]
        lg:w-[163px] md:rounded-[12px] rounded-[4.241px]
       font-[600] lg:text-[16px] lg:leading-[24px]
       bg-[#04177F] py-[10px]
       text-white text-center'>
        Change
        </button>
        </div>
    
    {/* SELECT PHONE NUMBER CHANGE */}
    <div className='flex flex-col w-[100%] md:w-[50%] 
gap-[5.868px] lg:gap-[10px] cursor-default'>
    <h2 className=' text-[#7E7E7E] font-[600] 
    text-[8px] leading-[10.4px]
    md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px]
     cursor-default'>
       Phone Number
     </h2>
     <div className='flex  items-center md:h-[40px] h-[30px]
      lg:h-[51px] pl-[5.586px] lg:pl-[10px] 
      border-[0.4px] border-[#9C9C9C] 
     border-[solid] lg:mb-[26px] md:mb-[15.26px] mb-[20px]'>
      <p className='font-[500] text-[#7E7E7E] 
      text-[8px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px] cursor-default'>
     09087654321
     </p>
     </div>
     <button className='text-[12px] leading-[18px] md:text-[9.389px]  md:leading-[14px]
     lg:w-[163px] md:rounded-[12px] rounded-[4.241px]
       font-[600] lg:text-[16px] lg:leading-[24px]
       bg-[#04177F] py-[10px] 
       text-white text-center'>
        Change
        </button>
    </div>
    </div>
       </div>
       </div>
       {/* CONTACT US */}
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
       </DashBoardLayout>
    </div>
  )
}
