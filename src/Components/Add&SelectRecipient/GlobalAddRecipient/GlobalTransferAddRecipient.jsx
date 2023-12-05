import React, {useState} from 'react';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import RecipientHero from '../RecipientHero';
import ArrowRight from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import Nigerianflag from '../../EducationPins/imagesEducation/Nigeriaflag.svg';
import ImageDrop from '../../EducationPins/imagesEducation/arrow-down.svg';
import AccountRecipient from '../RecipientImages/AccountRecipient.svg';
import Bank from '../RecipientImages/bank.svg';
import closeIcon from '../../My Profile & Account Settings/ProfileImages/Cancel.svg';
import { Modal } from '../../Screens/Modal/Modal';
import SuccessIcon from '../../My Profile & Account Settings/ProfileImages/success.gif';
import AremxyLogo from '../../EducationPins/imagesEducation/AremxyPlug.svg';

export default function GlobalTransferAddRecipient() {
const [accountNumber, setAccountNumber] =  useState('');
const [accountName, setAccountName] = useState('');
const [bankName,  setBankName] = useState('');
const [confirmRecipient, setConfirmRecipient] = useState(false);
const [errorRecipient , setErrorRecipient] = useState(false);
const [changeRecipientSuccess, setChangeRecipientSuccess] = useState(false);
const saveRecipientButton = () => {
  if(accountNumber && accountName && bankName){
   setConfirmRecipient(true);
   setErrorRecipient(false)
  }else {
  setErrorRecipient(true);
  
  }
}
  return (
    
        <DashBoardLayout>
            <RecipientHero/>
            <div className='flex flex-col lg:gap-[50px] gap-[20px]'>
                {/* FIRST HEADING TEXT */}
      <div className='flex md:gap-[10-px] gap-[3.27px]'>
    <h2 className='font-[500] text-[9px] leading-[12px] text-[#7C7C7C] 
    lg:text-[20px] lg:leading-[30px]'>
    Add bank account details to save as recipient
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] h-[10px] w-[10px] self-center'/>
        </div>
        {/* SECOND HEADING TEXT */}
        <div className='flex md:gap-[10px] gap-[3.67px]'>
    <h2 className='font-[500] text-[#000] text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px]'>
    Recipient Details 
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] h-[10px] w-[10px] self-center'/>
        </div>
    <form noValidate 
    onSubmit={(e) =>{
      e.preventDefault();
    }}
    action="" className='flex flex-col lg:gap-[25px] gap-[20px]'>
        <div className='flex flex-col md:flex-row lg:gap-[100px] gap-[20px] md:gap-[90px]  w-[100%] justify-between'>
      {/* CONTAINER FOR SELECT RECIPIENT */}
   <div className='flex flex-col lg:gap-[10px] gap-[5px]  md:w-[50%] w-[100%]'>
    {/* INPUTS TO SELECT RECIPIENT */}
    <h2 className=' font-[600] text-left text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
    <div className='flex justify-between py-[8.178px] pl-[5.868px] pr-[10px] lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
    md:border-[1px]  border-[0.5px] rounded-[3.197px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] bg-white'>
      <div className='flex lg:gap-[10px] gap-[5px]'>
    <img src={Nigerianflag} alt="" 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
   <h2 className='font-[600] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
    Nigeria
    </h2>
   </div>
   <img src={ImageDrop}  alt=""
   className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]' />
    </div>
     </div>

   {/* ACCOUNTS INFORMATION */}
   <div className='flex flex-col lg:gap-[10px] gap-[5px] md:w-[50%] w-[100%] '>
   <h2 className='font-[500] text-[9px]  leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
   Account Number 
    </h2>
    <div className='relative'>
         <input type="text"
         onInput={(e => {
            const numbersOnly = e.target.value.replace(/\D/g, '');
            e.target.value = numbersOnly;
         })} value={accountNumber} onChange={(e) => {
          setAccountNumber(e.target.value);
         }}  
         className='w-[100%] font-[500] text-[9px] leading-[12px]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] py-[8.178px] pl-[5.868px] pr-[20px] lg:pl-[10px] lg:py-[16px] border-[0.5px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric' maxLength={12} />
         <img src={AccountRecipient} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] 
         right-[7.997px] md:top-[16px] md:right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>
    </div>
{/* ======== ACCOUNT NAME ======= */}
<div className='flex flex-col md:flex-row lg:gap-[100px] md:gap-[90px] gap-[20px] w-[100%] justify-between'>
<div className='flex flex-col lg:gap-[10px] gap-[5px]  md:w-[50%] w-[100%] '>
   <h2 className='font-[500] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
   Account Name 
    </h2>
    <div className='relative'>
         <input type="text"
         value={accountName} onChange={(e) => {
          setAccountName(e.target.value);
         }}  
         className='w-[100%] font-[500] text-[9px] leading-[12px]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] py-[8.178px] pl-[5.868px] pr-[20px] lg:pl-[10px] lg:py-[16px] border-[0.5px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder=''  />
         <img src={AccountRecipient} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] right-[7.997px] md:top-[16px] 
         md:right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>

    {/* ACCOUNT */}
    <div className='flex flex-col lg:gap-[10px] gap-[5px]  md:w-[50%] w-[100%] '>
   <h2 className='font-[500] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
   Bank Name 
    </h2>
    <div className='relative'>
         <input type="text"
         onInput={(e => {
            const numbersOnly = e.target.value.replace(/\d/g, '');
            e.target.value = numbersOnly;
         })} value={bankName} onChange={(e) => {
          setBankName(e.target.value);
         }}  
         className='w-[100%] font-[500] text-[9px] leading-[12px]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] py-[8.178px] pl-[5.868px] pr-[20px] lg:pl-[10px] lg:py-[16px] border-[0.5px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder=''   />
         <img src={Bank} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] right-[7.997px] md:top-[16px] 
         md:right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>

</div>
<div className='flex flex-col md:gap-[25px] gap-[20px]'>
  {errorRecipient && (
    <h2 className='font-[600] text-red-500 text-[9px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>
   Incomplete Account Details
    </h2>
  )}
  <button onClick={() => {
    saveRecipientButton();
  }}
  className='bg-[#04177F] md:mt-[40px] mt-[60px] md:py-[10px] rounded-[4.21px] py-[16px] lg:w-[163px] md:w-[150px] text-white text-center
  lg:rounded-[12px] font-[600] text-[11px] ledaing-[15px] lg:text-[16px] lg:leading-[24px] '>
   Save Account
  </button>
  </div>
    </form>
    {confirmRecipient && (
          <Modal>
            <div className='h-[100%] flex justify-center md:items-center items-end md:mx-[0px] mx-[19px]'>
          <div className='flex flex-col lg:w-[50%] h-[420px]  lg:h-[680px] bg-white rounded-t-[8px] lg:rounded-[20px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[40px] md:pb-[80px] '>
    <div className='flex justify-end w-[100%] md:py-[15px] py-[10px] pr-[14px] border-b-[10px]  md:border-b-[15px] border-[solid] border-[#04177F]'>
   <img onClick={()=> {
    setConfirmRecipient(false);
   }} src={closeIcon} alt="" 
   className='lg:h-[30px] lg:w-[30px] lg:py-[15px] h-[20px] w-[20px]
   '/>
    </div>
    <div className='flex flex-col gap-[40px] md:gap-[10px] justify-between  lg:w-[100%] lg:pt-[20px] pt-[20px]  items-center h-[100%]'>
      <div className='flex flex-col lg:w-[80%] w-[80%] lg:gap-[40px] gap-[20px]'>
      {/* HEADER */}
     <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[20.8px]'>
     Please Confirm!!!
     </h2>
     <p className='font-[500] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[20.8px]'>
     Are you sure you want to add this account to your recipients? 
     Kindly re-confirm the identity, and be informed any funds transfer to any strange accounts 
     cannot be reversed.
</p>

  {/* COUNTRY */}
<div className='flex justify-between'>
 <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Country</p>
  <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Nigeria
    </p>
</div>
{/* BANK NAME */}
<div className='flex justify-between'>
 <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Bank Name</p>
  <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    {bankName}
    </p>
</div>
{/* ACCOUNT NAME */}
<div className='flex justify-between'>
 <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Account Name</p>
  <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    {accountName}
    </p>
</div>
{/* ACCOUNT NUMBER */}
<div className='flex justify-between'>
 <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
 Account Number
 </p>
  <p className='font-[500] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
   {accountNumber}
    </p>
</div>
</div>
{/* CONFIRM BUTTON */}
<div className='w-[80%] flex justify-center'>
<button onClick={() => {
  setChangeRecipientSuccess(true);
  setConfirmRecipient(false)
}}
className='bg-[#04177F] w-[100%] lg:py-[10px] py-[13px] lg:w-[163px]
 md:w-[150px] text-white text-center rounded-[4.41px]
  lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Confirmed
</button>
</div>
    </div>
    </div>
    </div>
        </Modal>
        )}
        {changeRecipientSuccess && (
          <Modal>
            <div className='h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'>
          <div className='flex flex-col  lg:w-[50%] h-[370px] w-[100%] lg:h-[680px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[30px] md:pb-[80px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px] pt-[30px]  items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[40px] gap-[20px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Successful
    </h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    <p className='font-[600] text-[#2ED173] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    New recipient account has been added successfully.

    </p>
  </div>
  <button onClick={() => {
    setChangeRecipientSuccess(false);
  }}
className='bg-[#04177F] w-[80%] lg:py-[10px] py-[13px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Continue
</button>
  </div>
          </div>
          </div>
          </Modal>
        )}
        </div>
          
      
    </DashBoardLayout>
    
  )
}
