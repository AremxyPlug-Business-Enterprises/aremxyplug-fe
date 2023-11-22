import React, {useContext} from 'react'
import { ContextProvider } from '../../Context'
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
 import messageIcon from '../ProfileImages/message-question.svg';
export default function IdVerification() {
    const {idVerificationOpen} = useContext(ContextProvider)
  return (
    <div>
        { idVerificationOpen && (
        <div>
         <div className='flex lg:gap-[25px] '>
            {/* ICON == NOT VERIFIED */}
    <div className=' flex gap-[5px] py-[25px] pr-[41px] pl-[16px]'>
    <img src={NotVerifiedIcon} alt="" />
     <div className='flex flex-col gap-[8px]'>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px]'>ID Status</h2>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px]'>NotVerified</h2>
     </div>
    </div>

    <div className='flex gap-[7px] items-center'>
        <h2 className='font-[500] text-[#7E7E7E] lg:text-[16px] lg:leading-[20.8px]'>
        Why Account Verification with my ID Document?

        </h2>
        <img src={messageIcon} alt="" />
    </div>
         </div>
        </div>
        )}
        </div>
  )
}
