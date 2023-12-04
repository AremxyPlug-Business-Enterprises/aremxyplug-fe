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
            <div className='flex flex-col lg:gap-[50px]'>
                {/* FIRST HEADING TEXT */}
        <div className='flex gap-[5px]'>
    <h2 className='font-[500] text-[#7C7C7C] lg:text-[20px] lg:leading-[30px]'>
    Add bank account details to save as recipient
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
    <form noValidate 
    onSubmit={(e) =>{
      e.preventDefault();
    }}
    action="" className='flex flex-col lg:gap-[25px]'>
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
         })} value={accountNumber} onChange={(e) => {
          setAccountNumber(e.target.value);
         }}  
         className='w-[100%] font-[500]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px]  lg:pl-[10px] lg:py-[16px] border-[1px]
         border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric' maxLength={12} />
         <img src={AccountRecipient} alt="" 
         className='absolute top-[16px] right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>
    </div>
{/* ======== ACCOUNT NAME ======= */}
<div className='flex flex-col md:flex-row lg:gap-[100px] w-[100%] justify-between'>
<div className='flex flex-col lg:gap-[10px]  md:w-[50%] w-[100%] '>
   <h2 className='font-[500] lg:text-[16px] lg:leading-[20.8px]'>
   Account Name 
    </h2>
    <div className='relative'>
         <input type="text"
         value={accountName} onChange={(e) => {
          setAccountName(e.target.value);
         }}  
         className='w-[100%] font-[500]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px]  lg:pl-[10px] lg:py-[16px] border-[1px]
         border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric'  />
         <img src={AccountRecipient} alt="" 
         className='absolute top-[16px] right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>

    {/* ACCOUNT */}
    <div className='flex flex-col lg:gap-[10px]  md:w-[50%] w-[100%] '>
   <h2 className='font-[500] lg:text-[16px] lg:leading-[20.8px]'>
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
         className='w-[100%] font-[500]  lg:text-[16px] lg:leading-[20.8px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px]  lg:pl-[10px] lg:py-[16px] border-[1px]
         border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric'  />
         <img src={Bank} alt="" 
         className='absolute top-[16px] right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>

</div>
<div className='flex flex-col md:gap-[25px] gap-[20px]'>
  {errorRecipient && (
    <h2 className='font-[600] text-red-500 lg:text-[16px] lg:leading-[24px]'>
   Incomplete Account Details
    </h2>
  )}
  <button onClick={() => {
    saveRecipientButton();
  }}
  className='bg-[#04177F] lg:py-[10px] lg:w-[163px] md:w-[150px] text-white text-center
  lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px] '>
   Save Account
  </button>
  </div>
    </form>
    {confirmRecipient && (
          <Modal>
          <div className='flex flex-col  lg:w-[50%]  lg:h-[680px] bg-white lg:rounded-[20px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[80px]'>
    <div className='flex justify-end w-[100%] border-b-[15px] border-[solid] border-[#04177F]'>
   <img onClick={()=> {
    setConfirmRecipient(false);
   }} src={closeIcon} alt="" 
   className='lg:h-[60px] lg:w-[60px] lg:py-[15px] 
   '/>
    </div>
    <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px]  items-center h-[100%]'>
      <div className='flex flex-col lg:w-[80%] lg:gap-[40px]'>
      {/* HEADER */}
     <h2 className='font-[600] text-center lg:text-[16px] lg:leading-[20.8px]'>
     Please Confirm!!!
     </h2>
     <p className='font-[500] text-center lg:text-[16px] lg:leading-[20.8px]'>
     Are you sure you want to add this account to your recipients? 
     Kindly re-confirm the identity, and be informed any funds transfer to any strange accounts 
     cannot be reversed.
</p>

  {/* COUNTRY */}
<div className='flex justify-between'>
 <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
  Country</p>
  <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
    Nigeria
    </p>
</div>
{/* BANK NAME */}
<div className='flex justify-between'>
 <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
  Bank Name</p>
  <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
    {bankName}
    </p>
</div>
{/* ACCOUNT NAME */}
<div className='flex justify-between'>
 <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
  Account Name</p>
  <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
    {accountName}
    </p>
</div>
{/* ACCOUNT NUMBER */}
<div className='flex justify-between'>
 <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
 Account Number
 </p>
  <p className='font-[500] lg:text-[16px] lg:leading-[24px]'>
   {accountNumber}
    </p>
</div>
</div>
{/* CONFIRM BUTTON */}
<div className='w-[100%] flex justify-center'>
<button onClick={() => {
  setChangeRecipientSuccess(true);
  setConfirmRecipient(false)
}}
className='bg-[#04177F] lg:py-[10px] lg:w-[163px] md:w-[150px] text-white text-center
  lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Confirmed
</button>
</div>
    </div>
    </div>
        </Modal>
        )}
        {changeRecipientSuccess && (
          <Modal>
          <div className='flex flex-col  lg:w-[50%]  lg:h-[680px] bg-white lg:rounded-[20px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[80px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px]  
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  
   '/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px]  items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[40px]'>
   <h2 className='font-[600] text-center lg:text-[16px] lg:leading-[24px]'>
    Successful
    </h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px]' />
    <p className='font-[600] text-[#2ED173] text-center lg:text-[16px] lg:leading-[24px]'>
    New recipient account has been added successfully.

    </p>
  </div>
  <button onClick={() => {
    setChangeRecipientSuccess(false);
  }}
className='bg-[#04177F] lg:py-[10px] lg:w-[163px] md:w-[150px] text-white text-center
  lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Continue
</button>
  </div>
          </div>
          </Modal>
        )}
        </div>
          
      
    </DashBoardLayout>
    
  )
}
