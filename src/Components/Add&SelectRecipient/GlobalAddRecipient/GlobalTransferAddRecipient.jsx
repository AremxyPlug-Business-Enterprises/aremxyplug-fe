import React from 'react';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import RecipientHero from '../RecipientHero';
import ArrowRight from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import Nigerianflag from '../../EducationPins/imagesEducation/Nigeriaflag.svg';
import ImageDrop from '../../EducationPins/imagesEducation/arrow-down.svg';
import AccountRecipient from '../RecipientImages/AccountRecipient.svg';
export default function GlobalTransferAddRecipient() {
  return (
    
        <DashBoardLayout>
            <RecipientHero/>
            <div className='flex flex-col lg:gap-[50px]'>
                {/* FIRST HEADING TEXT */}
        <div className='flex gap-[5px]'>
    <h2 className='font-[500] text-[#7C7C7C] lg:text-[20px] lg:leading-[30px]'>
    Add a bank account details to save as recipient
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] self-center'/>
        </div>
        {/* SECOND HEADING TEXT */}
        <div className='flex gap-[5px]'>
    <h2 className='font-[500] text-[#000] lg:text-[20px] lg:leading-[30px]'>
    Recipient Details 
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] self-center'/>
        </div>

        <div className='flex flex-col md:flex-row lg:gap-[100px] w-[100%] justify-between'>
      {/* CONTAINER FOR SELECT RECIPIENT */}
   <div className='flex flex-col lg:gap-[10px]  md:w-[50%] w-[100%]'>
    {/* INPUTS TO SELECT RECIPIENT */}
    <h2 className=' font-[600] text-left  lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
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

   {/* ACCOUNTS INFORMATION */}
   <div className='flex flex-col lg:gap-[10px]  md:w-[50%] w-[100%] '>
   <h2 className='font-[500] lg:text-[16px] lg:leading-[20.8px]'>
   Account Number 
    </h2>
    <div className='relative'>
         <input type="text"
         onInput={(e => {
            const numbersOnly = e.target.value.replace(/\D/g, '');
            e.target.value = numbersOnly;
         })} className='w-[100%] font-[500]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px]  lg:pl-[10px] lg:py-[16px] border-[1px]
         border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric' maxLength={12} />
         <img src={AccountRecipient} alt="" 
         className='absolute top-[16px] right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>



    </div>
        </div>
    </DashBoardLayout>
    
  )
}
