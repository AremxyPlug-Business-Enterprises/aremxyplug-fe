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
    <div className='flex flex-col justify-between md:h-[1500px] h-[950px] '>
    <div className=''>
      
    <RecipientHero/>
    <div className='flex flex-col lg:gap-[45px] md:gap-[30px] gap-[25px]'>
    <div className='flex md:gap-[10px] gap-[3.27px]'>
   <h2 className='text-[#7C7C7C] font-[500] text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px]'>
    Select the recipients account below
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] h-[10px] w-[10px] self-center'/>
    </div>
    {/* INPUTS TO SELECT COUNTRY */}
    <div className=''>
    <h2 className=' font-[600] text-left lg:mb-[20px] mb-[5.868px] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
    <div className='flex flex-col md:flex-row lg:gap-[100px] md:gap-[90px] gap-[25px] w-[100%] md:justify-between'>
      {/* CONTAINER FOR SELECT RECIPIENT */}
   <div className='flex flex-col  md:w-[50%] w-[100%]'>
    {/* INPUTS TO SELECT RECIPIENT */}
    <div className='flex justify-between py-[8.178px] pl-[3.672px] pr-[7px] lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   md:border-[1px] border-[0.5px] border-[solid] border-[#7C7C7C] rounded-[3.671px] lg:rounded-[10px] bg-white'>
      <div className='flex lg:gap-[10px] gap-[5.868px]'>
    <img src={Nigerianflag} alt="" 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
   <h2 className='font-[600] text-[9px]  leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
    Nigeria
    </h2>
   </div>
   <img src={ImageDrop}  alt=""
   className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]' />
    </div>
     </div>

   {/* ADD RECIPIENTS */}
   <Link to = '/GlobalTransferAddRecipient'
    className='flex md:w-[50%] justify-between lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   shadow-[0px_0px_1.468px_0px_rgba(0,0,0,0.25)]  py-[8.178px] pl-[3.671px] pr-[7px]
   md:border-[1px] border-[0.5px] border-[solid] rounded-[3.671px] border-[#7C7C7C] lg:rounded-[10px] bg-white'>
  <h2 className='font-[600] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
  Add Recipient
    </h2>
    <img src={AddRecipientIcon} alt='' 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
  </Link>



    </div>
    </div>
    <div className='relative md:w-[50%] w-[60%]  '>
         <input type="text" className='focusSearch w-[100%] font-[500] text-[9px] leading-[12px]
          lg:text-[16px] lg:leading-[20.8px] placeholder-[9px] placeholder:leading-[12px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] lg:p-[10px] lg:pr-[20px] p-[5.868px] pr-[20px] md:border-[1px]
         border-[0.338px]
         border-[solid] border-[#7C7C7C] rounded-[4.052px] lg:rounded-[10px] focus:outline-none'
         placeholder='Search Account Number or Name' />
         <img 
         onClick={(e) => {
          document.querySelector('.focusSearch').focus();
          console.log(e);
         }}
         src={SearchIcon} alt="" 
         className='absolute md:top-[10px] md:right-[10px] top-[7.997px] right-[7.997px] 
          lg:w-[20px] lg:h-[20px] h-[12px] w-[12px] cursor-pointer'/>
    </div>



    <div className='Tabs flex flex-col lg:gap-[30px] gap-[8.28px] my-[30px] md:mt-[60px] md:mb-[80px]'>
    <div className='flex w-[100%] lg:gap-[25px] border-b-[0.33pxpx] md:border-b-[3px] border-[#ECECEC]'>
     <h2 className='w-[25%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px] py-[5.671px] lg:py-[10px]
     bg-[#E2F3FF] md:border-b-[4px] border-b-[1.987px] border-[#04177F] lg:rounded-[6px] rounded-[1.325px]'>
  Recipients
     </h2>
     <h2 className='w-[25%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] 
      lg:leading-[30px] lg:py-[10px] py-[5.671px]'>
  Favorites
     </h2>
    </div>
    <div className='flex justify-center '>
    <img src={NoRecordImage} alt="" 
    className='lg:w-[517px] lg:h-[456px] '/>
    </div>
    </div>
    </div>
    </div> 
    {/* CONTACT US */}
    <div className=" flex gap-[8.729px]  md:gap-[14.896px]
       justify-center px-[8.594px] mb-[70px] md:mb-[130px]">
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
