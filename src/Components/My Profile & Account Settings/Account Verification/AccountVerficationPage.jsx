import React, {useContext} from 'react';
import { ContextProvider } from '../../Context';
import Arrowright from '../../EducationPins/imagesEducation/educationArrowRight.svg'
import IdVerification from './IdVerification';
import BvnVerification from './BvnVerification';
import AccountUpgrade from '../My Profile Page/AccountUpgrade';
import { Link } from 'react-router-dom';

export default function AccountVerficationPage() {
    const {verificationOpen} = useContext(ContextProvider);
    const {idVerificationOpen, setIdVerificationOpen} = useContext(ContextProvider);
    const {bvnVerificationOpen, setBvnVerificationOpen} = useContext(ContextProvider);
    const {accountUpgrade, setAccountUpgrade} = useContext(ContextProvider);
  return (
    
    <div className='flex flex-col '>
      <div className=''>
        { verificationOpen && (
        <div>
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
        <div className={ `flex gap-[8.729px]  md:gap-[14.896px] 
     justify-center px-[8.594px] mb-[130px]
     ${verificationOpen
     ? 'block'
    :  'hidden'}`} >
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
  )
}
