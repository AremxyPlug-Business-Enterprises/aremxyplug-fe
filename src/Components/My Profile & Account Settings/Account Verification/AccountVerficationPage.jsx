import React, {useContext} from 'react';
import { ContextProvider } from '../../Context';
import Arrowright from '../../EducationPins/imagesEducation/educationArrowRight.svg'
import IdVerification from './IdVerification';
import BvnVerification from './BvnVerification';
import AccountUpgrade from '../My Profile Page/AccountUpgrade';


export default function AccountVerficationPage() {
    const {verificationOpen} = useContext(ContextProvider);
    const {idVerificationOpen, setIdVerificationOpen} = useContext(ContextProvider);
    const {bvnVerificationOpen, setBvnVerificationOpen} = useContext(ContextProvider);
    const {accountUpgrade, setAccountUpgrade} = useContext(ContextProvider);
  return (
    
    
      <div className=''>
        { verificationOpen && (
        <div className=''>
       <div className='flex lg:gap-[10px] lg:py-[50px] py-[35px]'> 
     <h2 className='font-[500] text-[#7C7C7C] text-[9.389px] leading-[14px] 
     lg:text-[20px] lg:leading-[30px]'>
        Verify your account to upgrade your transaction limit with other benefits.
</h2>
<img  className='lg:h-[24px] lg:w-[24px] h-[14.083px] w-[14.083px] md:self-center'
src={Arrowright} alt="" />
       </div>
       {/* TABS VERIFICATION */}
       <div className='flex w-[100%] lg:gap-[25px] border-b-[2px] border-[#D9D9D999]
       '>
        {/* ========== ID VERIFICATION  ======== */}
    <div onClick={() => {
        setIdVerificationOpen(true);
        setBvnVerificationOpen(false);
        setAccountUpgrade(false);
    }}
    className= {`w-1/3 md:py-[10px] py-[5.868px] cursor-pointer
       ${idVerificationOpen 
        ? "bg-[#E2F3FF] lg:rounded-[6px] lg:border-b-[4px] border-b-[2px] rounded-[3.521px] border-[#04177F]"
       : "bg-transparent" } `}>
     <h2 className='font-[500] text-center text-[10px] leading-[14px] 
     lg:text-[20px] lg:leading-[30px]'>
     ID Verification
     </h2>
    </div>
    {/* ========= BVN VERIFICATION =========== */}
    <div onClick={() => {
        setIdVerificationOpen(false);
        setBvnVerificationOpen(true);
        setAccountUpgrade(false);
    }}
    className= {`w-1/3 lg:py-[10px] py-[5.868px] cursor-pointer
       ${bvnVerificationOpen 
        ? "bg-[#E2F3FF] lg:rounded-[6px] lg:border-b-[4px] border-b-[2px] rounded-[3.521px] border-[#04177F]"
       : "bg-transparent"}  `} >
     <h2 className='font-[500] text-center  text-[10px] leading-[14px]
     lg:text-[20px] lg:leading-[30px]'>
     BVN Verification
     </h2>
    </div>
    {/* ======   ACCOUNT UPGRADE ========== */}
    <div onClick={() => {
      setAccountUpgrade(true);
      setBvnVerificationOpen(false);
      setIdVerificationOpen(false);
    }}
    className= {`w-1/3 lg:py-[10px] py-[5.868px] cursor-pointer
    ${accountUpgrade
    ? "bg-[#E2F3FF] lg:rounded-[6px] lg:border-b-[4px] border-b-[2px] rounded-[3.521px] border-[#04177F]"
    : "bg-transparent"}  `} >
     <h2 className='font-[500] text-center text-[10px] leading-[14px]
     lg:text-[20px] lg:leading-[30px]'>
     Account Upgrade
     </h2>
    </div>
       </div>
       </div>
        )}
        <IdVerification/>
        <BvnVerification/>
        <AccountUpgrade/>
        
        
    </div> 
  )
}
