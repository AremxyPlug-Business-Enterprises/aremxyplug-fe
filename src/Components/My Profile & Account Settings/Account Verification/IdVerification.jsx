import React, {useContext, useState} from 'react';
import '../../../App.css';
import { ContextProvider } from '../../Context'
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
 import messageIcon from '../ProfileImages/message-question.svg';
 import ArrowDown from '../ProfileImages/arrow-down.svg';
export default function IdVerification() {
  const {verificationOpen} = useContext(ContextProvider)
    const {idVerificationOpen} = useContext(ContextProvider);
    const {dropDownGender, setDropDownGender} = useContext(ContextProvider);

    // Genders
    const genderInfo = ['Male', 'Female', 'Others..'];
    const [genderResult, setGenderResult] = useState('');
   const chooseGender = () => {
    setDropDownGender(!dropDownGender);
    document.querySelector('.genderDrop').classList.toggle('DropIt');
   }
  return (
    <div>
        { idVerificationOpen && (
        <div className={`${verificationOpen
            ? 'block' : 'hidden'}`}>
         <div className='flex md:gap-[25px] gap-[11px] lg:mb-[50px] mb-[35px]'>
            {/* ICON == NOT VERIFIED */}
    <div className=' flex gap-[5px] py-[23px] pr-[4px] pl-[5px] md:py-[25px] md:pr-[41px] md:pl-[16px] bg-white
   shadow-[0px_2.34722px_5.86806px_0px_rgba(0,0,0,0.25)]
     md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
    <img src={NotVerifiedIcon} alt="" 
     className='h-[24px] w-[24px] md:h-[44px] md:w-[44px] lg:h-[62px] lg:w-[62px]'/>
     <div className='flex flex-col gap-[4.694px] md:gap-[8px] justify-center'>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          ID Status</h2>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          NotVerified
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
         {/* Forms */}
         
      <form action="">
        {/* Container for all Forms */}
        <div className='flex flex-col  lg:gap-[25px] gap-[20px] md:w-[80%] w-[100%] mb-[50px]'>
      {/*  Full Name / Gender */}
      <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
    {/* Full Name */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    Full Name
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
     placeholder:text-[8px] placeholder:leading-[10.4px] 
    lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] focus:outline-none'
    placeholder='Habib Kamaldeen'
    type="text"/>
   
    </div>
    {/* Gender */}
    
    <div className='relative flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     Gender
    </h2>
    <div onClick={chooseGender}
    className='flex justify-between font-[500] py-[10.33px] pl-[5.867px] pr-[10.917px]
     lg:pl-[16px] lg:py-[15.5px] lg:pr-[10px]
     border-[0.4px] border-[#9C9C9C] border-[solid]'>
      <h2 className='text-[#000] font-[500] text-[8px] leading-[10.4px]
      lg:text-[16px] lg:leading-[20.8px]'>
        {genderResult}
      </h2>
      <img src={ArrowDown} alt=""
      className='genderDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]'/>
      </div>
      {dropDownGender  && (
        <div 
        className=' absolute lg:top-[90px] md:top-[60px] top-[60px] z-[5] flex flex-col w-[100%]'>
      {(genderInfo.map(info => {
        return (
          <h2 onClick={() => {
            setGenderResult(info);
             setDropDownGender(false);
             document.querySelector('.genderDrop').classList.remove('DropIt');
          }}
           className='font-[500] text-[#7C7C7C] text-[8px] leading-[10.4px]
           lg:text-[16px] lg:leading-[20.8px] md:py-[20px] py-[15px] pl-[10px]
          lg:pl-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
          md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] bg-white cursor-pointer'>
        {info}
          </h2>
        )
      }))}
        </div>
      )}
   </div>
  
      </div>
      {/* HOUSE ADDRESS AND STATE*/}
      <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
        {/* HOUSE ADDRESS */}
      <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    House Address
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text"/>
   
    </div>
    {/* STATE */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    State or Province
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder=''
    type="text"/>
   
    </div>

      </div>
      {/* CITY AND LGA */}
      <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
        {/* CITY */}
      <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    City
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder=''
    type="text"/>
   
    </div>
    {/* LGA */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     L.G.A
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text"/>
   
    </div>
      </div>
      {/* POSTAL CODE */}
      <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
      <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    Postal Code
    </h2>
    <input 
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder=''
    type="text"/>
   
    </div>
      </div>
        </div>
      </form>
         
        </div>
        )}
        </div>
  )
}
