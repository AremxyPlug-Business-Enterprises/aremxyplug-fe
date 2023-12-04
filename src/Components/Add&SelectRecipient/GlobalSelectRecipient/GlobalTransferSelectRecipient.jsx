import React from 'react'
import '../../../App.css';
import RecipientHero from '../RecipientHero';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import ArrowRight from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import Nigerianflag from '../../EducationPins/imagesEducation/Nigeriaflag.svg';
import ImageDrop from '../../EducationPins/imagesEducation/arrow-down.svg';
import AddRecipientIcon from '../RecipientImages/AddRecipientIcon.svg';
import SearchIcon from '../RecipientImages/search-status.svg';
import NoRecordImage from '../RecipientImages/NoRecordImage.svg';
import { Link } from 'react-router-dom';
export default function GlobalTransferSelectRecipient() {
  return (

  <DashBoardLayout>
    <div>
      
    <RecipientHero/>
    <div className='flex flex-col lg:gap-[45px]'>
    <div className='flex md:gap-[10px]'>
   <h2 className='text-[#7C7C7C] font-[500] lg:text-[20px] lg:leading-[30px]'>
    Select the recipients account below
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] self-center'/>
    </div>
    {/* INPUTS TO SELECT COUNTRY */}
    <div className=''>
    <h2 className=' font-[600] text-left mb-[20px] lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
    <div className='flex flex-col md:flex-row lg:gap-[100px] w-[100%] justify-between'>
      {/* CONTAINER FOR SELECT RECIPIENT */}
   <div className='flex flex-col  md:w-[50%] w-[100%]'>
    {/* INPUTS TO SELECT RECIPIENT */}
    <div className='flex justify-between  lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] bg-white'>
      <div className='flex lg:gap-[10px]'>
    <img src={Nigerianflag} alt="" 
    className='lg:w-[24px] lg:h-[24px]'/>
   <h2 className='font-[600] lg:text-[16px] lg:leading-[20.8px]'>
    Nigeria
    </h2>
   </div>
   <img src={ImageDrop}  alt=""
   className='lg:w-[24px] lg:h-[24px]' />
    </div>
     </div>

   {/* ADD RECIPIENTS */}
   <div className='flex md:w-[50%] justify-between lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] bg-white'>
  <h2 className='font-[600] lg:text-[16px] lg:leading-[20.8px]'>
  Add Recipient
    </h2>
    <Link to = '/GlobalTransferAddRecipient'>
    <img src={AddRecipientIcon} alt='' 
    className='g:w-[24px] lg:h-[24px]'/>
    </Link>
   </div>



    </div>
    </div>
    <div className='relative md:w-[50%] w-[100%] '>
         <input type="text" className='w-[100%] font-[500] lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] lg:p-[10px] border-[1px]
         border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='Search Account Number or Name' />
         <img src={SearchIcon} alt="" 
         className='absolute top-[10px] right-[10px] lg:w-[20px] lg:h-[20px]'/>
    </div>



    <div className='Tabs flex flex-col lg:gap-[30px] mt-[60px] mb-[80px]'>
    <div className='flex w-[100%] lg:gap-[25px] border-b-[3px] border-[#ECECEC]'>
     <h2 className='w-[25%] font-[500] text-center lg:text-[20px] lg:leading-[30px] lg:py-[10px]
     bg-[#E2F3FF] border-b-[4px] border-[#04177F] lg:rounded-[6px]'>
  Recipients
     </h2>
     <h2 className='w-[25%] font-[500] text-center lg:text-[20px] lg:leading-[30px] lg:py-[10px]'>
  Favorites
     </h2>
    </div>
    <div className='flex justify-center '>
    <img src={NoRecordImage} alt="" 
    className='lg:w-[517px] lg:h-[456px]'/>
    </div>
    </div>
    </div>
    </div> 

  </DashBoardLayout>
       
  )
}
