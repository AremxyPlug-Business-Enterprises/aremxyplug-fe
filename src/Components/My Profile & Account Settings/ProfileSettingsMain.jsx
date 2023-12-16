import React, {useContext} from 'react';
import '../../App.css';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import ProfileHero from './ProfileHero';
import ProfileUpdate from './My Profile Page/ProfileUpdate';
import { ContextProvider } from '../Context';
import AccountVerficationPage from './Account Verification/AccountVerficationPage';
import BusinessKYC from './My Profile Page/BusinessKYC';
import ChangePin from './My Profile Page/ChangePin';
import { Link } from 'react-router-dom';

export default function ProfileSettingsMain() {
const {profilePage, setProfilePage} = useContext(ContextProvider);
const {verificationOpen, setVerificationOpen} = useContext(ContextProvider);
const {setBusinessPopUp} = useContext(ContextProvider);
const {authenticationOpen, setAuthenticationOpen} = useContext(ContextProvider);

return (
    <DashBoardLayout>
        <div className=''>
     <div className=' '>
     <ProfileHero/>
        <div className='flex flex-wrap md:flex-nowrap  mt-[23px] md:w-[100%]  
        md:gap-[53.4px] lg:gap-[91px] 
        md:border-b-[2px] md:border-[#D9D9D999] border-opacity-[60%]   
        justify-between '>
            {/* Profile Tab */}
            <div 
            onClick={() => {
               setProfilePage(true);
               setVerificationOpen(false);
               setAuthenticationOpen(false);
            }}
            className='flex flex-col md:w-1/4 w-[50%]  lg:gap-[23px] cursor-pointer 
          md:border-none border-b-[1.7px] border-[#D9D9D999] border-opacity-[60%]'>

         <h2 className=' font-[600] text-[#A3A3A3] py-[8px] text-start pl-[10px]
         text-[9.389px] lg:p-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
                    My Profile
                    </h2>
                    {/* Profile Cursor */}
                    {profilePage && (
                    <div className='flex w-[100%] md:w-[60%]
                     h-[2px] rounded-[10px]  bg-[#04177F]'></div>
                    )}
                    </div>
                    {/* ACCOUNT VERIFICATION TAB */}
                    <div 
                    onClick={() => {
                        setProfilePage(false);
                        setVerificationOpen(true);
                        setAuthenticationOpen(false);
                    }}
                    className='flex flex-col md:w-1/4 w-[50%]  lg:gap-[23px] cursor-pointer 
                    md:border-none border-b-[1.7px] border-[#D9D9D999] border-opacity-[60%]'>
                    <h2  className=' font-[600] text-[#A3A3A3] text-center md:text-start
                    text-[9.389px] lg:p-[10px] py-[8px]
                  leading-[14px] lg:text-[16px] lg:leading-[24px]  cursor-pointer'>
                    Account Verification
                    </h2>
                    {/* VERIFICATION CURSOR */}
                    {verificationOpen && (
                    <div className='flex w-[100%] md:w-[60%]  h-[2px] rounded-[10px]  bg-[#04177F]'></div>
                    )}
                    </div>
                    <div onClick={() => {
                      setBusinessPopUp(true);
                    }}
                    className='md:w-1/4 w-[50%] md:pt-[0px] pt-[30px] lg:gap-[23px] cursor-pointer
                    md:border-none border-b-[1.7px] border-[#D9D9D999] border-opacity-[60%]'>
                      {/* BUSINESS KYC TAB */}
                    <h2  className='lg:p-[10px] font-[600] text-[#A3A3A3] 
                     text-[9.389px] leading-[14px]   py-[8px] text-start pl-[10px]
                    lg:text-[16px] lg:leading-[24px]  cursor-pointer'>
                    Business KYC / KYB
                    </h2>
                   
                    </div>
                    <div onClick={() => {
                      setAuthenticationOpen(true);
                      setVerificationOpen(false);
                      setProfilePage(false);
                    }}
                     className='md:w-1/4 w-[50%] flex flex-col md:pt-[0px] pt-[30px] lg:gap-[23px] cursor-pointer
                    md:border-none border-b-[1.7px] border-[#D9D9D999] border-opacity-[60%]'>
                      {/* AUTHETICATION TAB */}
                    <h2  className=' lg:p-[10px] font-[600] text-[#A3A3A3] 
                    text-[9.389px] leading-[14px] md:text-start text-center py-[8px]
                    lg:text-[16px] lg:leading-[24px]  cursor-pointer'>
                    Authentication Settings
                    </h2>
                     {/* AUTHENTICATION CURSOR */}
                     {authenticationOpen && (
                    <div className='flex w-[100%] md:w-[70%]  h-[2px] rounded-[10px]
                      bg-[#04177F]'></div>
                    )}
                    </div>

        </div>
       
        <ProfileUpdate/>
        <AccountVerficationPage/>
        <BusinessKYC/>
        <ChangePin/>
     </div>
     <div className=" flex gap-[8.729px]  md:pt-[120%] md:pb-[50%] pt-[40%] pb-[30%]  md:gap-[14.896px] 
     justify-center px-[8.594px]  ">
              <p className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px] md:leading-[12.938px] self-center">
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
