import React from 'react';
import '../../../App.css';
import ProfilePic from '../ProfileImages/ProfilePic.svg';
export default function ProfileUpdate() {
    
  return (
    <div>

    <div className='mt-[50px]'>
    <div className='flex flex-col'>
        {/* Profile pic */}
    <div className='flex lg:gap-[12px]'>
   <img src={ProfilePic} className='lg:h-[150px] lg:w-[150px] rounded-[150px]' alt="" />
   {/* Profile text */}
   <div className='flex flex-col justify-center gap-[12px]'>
  <p className='font-[500] lg:text-[16px] leading-[20.8px]'>
    Habib Kamaldeen
    </p>
  <p className='font-[500] text-[#7C7C7C] lg:text-[12px] lg:leading-[15.6px]'>
    habib@aremxyplug.com
    </p>
   </div>
    </div>

    </div>
    </div>


    </div>
  )
}
