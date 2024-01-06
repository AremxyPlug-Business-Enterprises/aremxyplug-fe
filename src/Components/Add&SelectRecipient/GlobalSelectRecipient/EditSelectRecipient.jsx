import React, {useState} from 'react'
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import RecipientHero from '../RecipientHero';
import ArrowRight from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import euroFlag from '../../EducationPins/imagesEducation/GBP.svg';
import nigerianFlag from '../../EducationPins/imagesEducation/Nigeriaflag.svg';
import americaFlag from '../../EducationPins/imagesEducation/Usa.svg';
import britainFlag from '../../EducationPins/imagesEducation/Britain.svg';
import austriaFlag from '../../EducationPins/imagesEducation/Austria.svg';
import kenyaFlag from '../../EducationPins/imagesEducation/Kenya.svg';
import ImageDrop from '../../EducationPins/imagesEducation/arrow-down.svg';
import AccountRecipient from '../RecipientImages/AccountRecipient.svg';
import Bank from '../RecipientImages/bank.svg';
import closeIcon from '../../My Profile & Account Settings/ProfileImages/Cancel.svg';
import { Modal } from '../../Screens/Modal/Modal';
import SuccessIcon from '../../My Profile & Account Settings/ProfileImages/success.gif';
import AremxyLogo from '../../EducationPins/imagesEducation/AremxyPlug.svg';
import imageCurrencyNotAvalaible from '../RecipientImages/CurrencyNotAvaliable.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../../App.css';
export default function EditSelectRecipient() {
  const [accountNumber, setAccountNumber] =  useState('');
const [accountName, setAccountName] = useState('');
const [bankName,  setBankName] = useState('');
const [confirmRecipient, setConfirmRecipient] = useState(false);
const [errorRecipient , setErrorRecipient] = useState(false);
const [changeRecipientSuccess, setChangeRecipientSuccess] = useState(false);
const [addRecipientCountry, setAddRecipientCountry] = useState('');
const [addRecipientCountryFlag,setAddRecipientCountryFlag] = useState(false);
const [addRecipientActive, setAddRecipientActive] = useState(false);
const [addCurrencyNotAvalaible, setAddCurrencyNotAvalaible]= useState(false);
// const [bvnError, setBvnError] = useState({});
// const [checkAccountDigit, setCheckAccountDigit] = useState('');
const [recipientCountrySelection] = useState([
 {method : 'Nigeria',  flag : nigerianFlag, id : 1},
{method : 'United states ',  flag : americaFlag, id : 2 },
{method : 'United Kingdom',flag : britainFlag, id : 3 },
  {method :  'European',  flag : euroFlag, id : 4 },
{method : 'Austria',  flag : austriaFlag, id : 5 },
{method : 'Kenya', flag : kenyaFlag, id: 6 }
])
//========== RECIPIENT DROPDOWN  ==============
function AddRecipientDropDown(){
setAddRecipientActive(!addRecipientActive);
document.querySelector('.AddRecipientDrop').classList.toggle('DropIt');
}

const saveRecipientButton = () => {
  if(addRecipientCountry && accountNumber && accountName && bankName){
   setConfirmRecipient(true);
   setErrorRecipient(false)
  }else {
  setErrorRecipient(true);
   }
}
//  const {id} = useParams();
  return (
    <DashBoardLayout>
          <div className='flex flex-col justify-between lg:h-[1400px] md:h-[1550px] h-[750px]'>
          <div>
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
   <div className='relative flex flex-col lg:gap-[10px] gap-[5px]  md:w-[50%] w-[100%] '>
    {/* INPUTS TO SELECT RECIPIENT */}
    <h2 className=' font-[600] text-left text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
    <div onClick={AddRecipientDropDown}
    className='flex justify-between py-[8.178px] pl-[5.868px] pr-[10px] md:py-[8.02px] md:pr-[8.598px] md:pl-[5.73px]
     lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
    md:border-[1px]  border-[0.5px] rounded-[3.197px] border-[solid]
     border-[#7C7C7C] lg:rounded-[10px] bg-white cursor-pointer'>
      <div className='flex lg:gap-[10px] gap-[5px]'>
    <img src={addRecipientCountryFlag} alt="" 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
   <h2 className='font-[600] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
    {addRecipientCountry}
    </h2>
   </div>
   <img src={ImageDrop}  alt=""
   className='AddRecipientDrop lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]' />
    </div>
    {/* DROP DOWN  */}
    {addRecipientActive && (
      <div className='absolute lg:top-[90px] md:top-[60px]  top-[50px] z-[2]  
      flex flex-col w-[100%] lg:h-225px md:h-[210px]  '>
      {(recipientCountrySelection.map(recipientCountry =>{
        return (
          <div  onClick={() => {
            setAddRecipientActive(false);
            document.querySelector('.AddRecipientDrop').classList.remove('DropIt')
            if(recipientCountry.id === 1){
              setAddRecipientCountry("Nigeria");
              setAddRecipientCountryFlag(nigerianFlag);
             }else {
               setAddCurrencyNotAvalaible(true);
             }
          }}
          className='flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
          cursor-pointer hover:bg-[#EDEAEA] items-center bg-white
          shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>

          <img className='md:h-[29.27px]  h-[14.27px]' src={recipientCountry.flag} alt=""/>
          <p className='text-[8px] leading-[10.4px] font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer'
          key={recipientCountry.id}> 
          {recipientCountry.method}
          </p>
           </div>
          
        )
      }) )}
      </div>
    ) }
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
         md:py-[8.02px] md:pr-[8.598px] md:pl-[5.73px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder='' inputMode='numeric' maxLength={10} />
         <img src={AccountRecipient} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] 
         right-[7.997px] md:top-[8.02px] md:right-[8.598px] lg:top-[16px] lg:right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>
    </div>
{/* ======== BANK NAME ======= */}
<div className='flex flex-col md:flex-row lg:gap-[100px] md:gap-[90px] gap-[20px] w-[100%] justify-between'>
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
         md:py-[8.02px] md:pr-[8.598px] md:pl-[5.73px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none'
         placeholder=''   />
         <img src={Bank} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] right-[7.997px] lg:top-[16px] 
         md:top-[8.02px] md:right-[8.598px] lg:right-[16px] lg:w-[20px] lg:h-[20px]'/>
         </div>
    </div>

    {/* ACCOUNT NAME */}
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
         md:py-[8.02px] md:pr-[8.598px] md:pl-[5.73px]
          rounded-[3.197px] md:border-[1px] border-[solid] border-[#7C7C7C] lg:rounded-[10px] focus:outline-none '
         placeholder=''  />
         <img src={AccountRecipient} alt="" 
         className='absolute h-[12px] w-[12px] top-[7.997px] right-[7.997px] md:top-[8.02px] md:right-[8.598px] 
         lg:top-[16px] lg:right-[16px] lg:w-[20px] lg:h-[20px]'/>
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
  className='bg-[#04177F] md:mt-[40px] mt-[60px] md:py-[9px] lg:py-[10px] rounded-[4.21px] py-[16px] lg:w-[163px] md:w-[150px] text-white text-center
  lg:rounded-[12px] font-[600] text-[11px] ledaing-[15px] lg:text-[16px] lg:leading-[24px] '>
   Save Account
  </button>
  </div>
    </form>
    {confirmRecipient && (
          <Modal>
            <div className=' h-[100%] w-[100%] flex justify-center md:items-center items-end md:mx-[0px] mx-[19px]'>
          <div className='confirmRecipient flex flex-col md:w-[50%] h-[420px]  lg:h-[550px] bg-white rounded-t-[8px] md:rounded-[20px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[40px] md:pb-[80px]'>
    <div className='flex justify-end w-[100%] md:py-[15px] py-[10px] pr-[14px] border-b-[10px]  md:border-b-[15px] border-[solid] border-[#04177F]'>
   <img onClick={()=> {
    setConfirmRecipient(false);
   }} src={closeIcon} alt="" 
   className='lg:h-[35px] lg:w-[35px] h-[20px] w-[20px] '/>
    </div>
    <div className='flex flex-col gap-[50px] lg:gap-[130px] md:gap-[90px] justify-between  lg:w-[100%] lg:pt-[20px] pt-[20px]  items-center h-[100%]'>
      <div className='flex flex-col lg:w-[80%] w-[80%] lg:gap-[30px] gap-[20px]'>
      {/* HEADER */}
     <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[20.8px]'>
     Please Confirm!!!
     </h2>
     <p className='font-[400] text-[#4A4A4A] text-center text-[10px] leading-[14px] lg:text-[16px]
      lg:leading-[20.8px] py-[8px] px-[10px] bg-[#FFF0BA] rounded-[8px]'>
     Are you sure you want to add this account to your recipients? 
     Kindly re-confirm the identity, and be informed any funds transfer to any strange accounts 
     cannot be reversed.
</p>

  {/* COUNTRY */}
<div className='flex justify-between'>
 <p className='font-[600] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Country</p>
  <p className='font-[600] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Nigeria
    </p>
</div>
{/* BANK NAME */}
<div className='flex justify-between'>
<p className='font-[600] w-[50%] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Bank Name</p>
  <p className='font-[600] md:w-auto w-[50%] text-end text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    {bankName}
    </p>
</div>
{/* ACCOUNT NAME */}
<div className='flex justify-between'>
 <p className='font-[600] md:w-auto w-[50%] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
  Account Name</p>
  <p className='font-[600] md:w-auto w-[50%] text-end text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    {accountName}
    </p>
</div>
{/* ACCOUNT NUMBER */}
<div className='flex justify-between'>
 <p className='font-[600] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
 Account Number
 </p>
  <p className='font-[600] text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
   {accountNumber}
    </p>
</div>
</div>
{/* CONFIRM BUTTON */}
<div className='w-[80%]  flex justify-center'>
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
          <div className='deleteRecipientSuccess flex flex-col   lg:w-[35%] md:w-[45%] h-[320px] md:h-[400px] w-[100%] lg:h-[550px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[11.458px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[60px] lg:pb-[80px] md:pb-[50px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between lg:w-[100%] lg:pt-[20px] pt-[30px] items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%]  md:pb-[0px] pb-[40px]  lg:gap-[40px] gap-[20px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Successful
    </h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    <p className='font-[600] text-[#2ED173] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    New recipient account has been added successfully.

    </p>
  </div>
  <Link to = '/GlobalTransferSelectRecipient'
  className='w-[100%] flex justify-center'>
  <button onClick={() => {
    setChangeRecipientSuccess(false);
    setAddRecipientCountryFlag('');
    setAddRecipientCountry('')
     setAccountNumber('') 
     setAccountName('')
     setBankName('')
  }}
className='bg-[#04177F] w-[80%] md:py-[9px] py-[13px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Continue
</button>
</Link>
  </div>
          </div>
          </div>
          </Modal>
        )}
        </div>
        </div>
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
            {addCurrencyNotAvalaible && (
              <Modal>
              <div className='h-[100%] w-[100%] md:justify-center flex 
              items-center  md:mx-[0px] mx-[19px]'>
         <div className='flex flex-col lg:w-[38%] md:w-[45%]  h-[269px]  w-[100%] lg:h-[420px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] md:rounded-[7.153px] rounded-[8px]
          md:shadow-[0px_0px_11.922px_0px_rgba(0, 0, 0, 0.25)] 
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] lg:py-[23px] lg:px-[0px] py-[10px] px-[24px]'>
          <div className='flex flex-col lg:w-[100%] lg:gap-[20px] gap-[10px]  justify-between  items-center h-[100%]'>
  
   <h2 className='font-[600] text-[#04177F] text-center text-[10px] leading-[14px] lg:text-[16.647px] lg:leading-[24px]'>
   This Currency is Currently Not Available.
    </h2>
    <img src={imageCurrencyNotAvalaible} alt=""
    className='lg:w-[217.263px] lg:h-[187.283px] h-[100px] w-[100px]'/>
  
  <div className='flex flex-col-reverse md:flex-row lg:gap-[125px] md:gap-[60px] w-[100%] 
  justify-end gap-[20px] lg:pr-[30px]'>
  <button onClick={() => {
    setAddCurrencyNotAvalaible(false);
  }}
className='bg-[#04177F] w-[100%] lg:py-[10px] md:py-[9px] py-[13px] md:w-[97.02px]
 text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
  Okay
</button>
<p className='font-[600]  text-[10px] leading-[14px] 
lg:text-[16px] lg:leading-[24px] md:self-start self-end'>
Coming Soon...
</p>
</div>
  </div>
         </div>
              </div>
              </Modal>
            )}
        </div>
          
      
    </DashBoardLayout>
    
  )
}
