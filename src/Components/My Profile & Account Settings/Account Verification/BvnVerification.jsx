import React, {useContext, useState} from 'react';
import { ContextProvider } from '../../Context';
import Arrowright from '../../EducationPins/imagesEducation/educationArrowRight.svg'
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
import messageIcon from '../ProfileImages/message-question.svg';

export default function BvnVerification() {
    const {bvnVerificationOpen} = useContext(ContextProvider);
    const {verificationOpen} = useContext(ContextProvider);
   const [bvnVerifyImage] = useState(NotVerifiedIcon);
   const [bvnStatus] = useState('Not Verified');
  return (
    <div>
        {bvnVerificationOpen && (
    <div className= {`${verificationOpen
      ? 'block'  : 'hidden'}`}>
      

      <div className='flex lg:gap-[10px] lg:py-[50px] py-[35px] '> 
     <h2 className='font-[500] text-[#7C7C7C] text-[9.389px] leading-[14px] 
     lg:text-[20px] lg:leading-[30px]'>
      For Nigerian Use Only
</h2>
<img  className='lg:h-[24px] lg:w-[24px] h-[14.083px] w-[14.083px] md:self-center'
src={Arrowright} alt="" />
       </div>
       {/* VERIFICATION */}
       <div className='flex md:gap-[25px] gap-[11px] lg:mb-[50px] mb-[35px]'>
            {/* ICON == NOT VERIFIED */}
    <div className=' flex gap-[5px] py-[23px] pr-[12px] pl-[12px] md:py-[25px] md:pr-[41px] md:pl-[16px] bg-white
   shadow-[0px_2.34722px_5.86806px_0px_rgba(0,0,0,0.25)]
     md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
    <img src={bvnVerifyImage} alt="" 
     className={`h-[24px] w-[24px] md:h-[44px] md:w-[44px] lg:h-[62px] lg:w-[62px]`}/>
     <div className='flex flex-col gap-[4.694px] md:gap-[8px] justify-center'>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          ID Status</h2>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          {bvnStatus}
          </h2>
     </div>
    </div>
  {/*  */}
    <div className='flex md:gap-[14px] gap-[11px] items-center'>
        <h2 className='font-[500] text-[#7E7E7E] text-[8px] leading-[10.4px]
        lg:text-[16px] lg:leading-[20.8px]'>
        Why Account Verification with my ID Document?
       </h2>
        <img src={messageIcon} alt="" 
        className='h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px]'/>
    </div>
         </div>

      </div>
    
        )}
        </div>
  )
}
