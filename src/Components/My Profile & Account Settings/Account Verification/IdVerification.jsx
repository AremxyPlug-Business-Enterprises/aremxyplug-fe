import React, {useContext, useState} from 'react';
import '../../../App.css';
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { ContextProvider } from '../../Context';
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
 import messageIcon from '../ProfileImages/message-question.svg';
 import ArrowDown from '../ProfileImages/arrow-down.svg';
 import UploadDoc from '../ProfileImages/document-upload.svg';
import Pending from '../ProfileImages/Pending.svg';
import { Modal } from '../../Screens/Modal/Modal';
import frontView from '../ProfileImages/UploadFront.svg';
import closeIcon from '../ProfileImages/Cancel.svg';
import BackView from '../ProfileImages/UploadBackView.svg';
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg"
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg"
import Success from "../ProfileImages/success.gif"
import QueryId from '../ProfileImages/IdCustomerQuery.svg';

export default function IdVerification() {
  const {verificationOpen} = useContext(ContextProvider)
    const {idVerificationOpen} = useContext(ContextProvider);
    const {dropDownGender, setDropDownGender} = useContext(ContextProvider);
    const [idDropDown, setIdDropDown]= useState(false);
    const {idAddress, setIdAddress} = useContext(ContextProvider);
    const {idState, setIdState} = useContext(ContextProvider);
    const {idCity, setIdCity} = useContext(ContextProvider);
    const {idLGA, setIdLGA} = useContext(ContextProvider);
    const {idNumber, setIdNumber} = useContext(ContextProvider);
    const {idPostalCode, setIdPostalCode} = useContext(ContextProvider);
   const [verifyImage, setVerifyImage] = useState(NotVerifiedIcon);
   const [idStatus, setIdStatus] = useState('Not Verified');
    const [errorSubmit, setErrorSubmit] = useState(false);
    const [idFrontView, setIdFrontView] = useState(false);
    const [idBackView, setIdBackView] = useState(false);
      const [idPopVerified, setIdPopVerified] = useState(false);
      const [idCustomerQuery, setIdCustomerQuery] = useState(false);
 const {toggleSideBar} = useContext(ContextProvider);

    // Genders
    const genderInfo = ['Male', 'Female', 'Others..'];
    const [genderResult, setGenderResult] = useState('');
   const chooseGender = () => {
    setDropDownGender(!dropDownGender);
    document.querySelector('.genderDrop').classList.toggle('DropIt');
   }

   // ID 
   const idType = ['National ID', 'International Passport', 'Permanent Voters Card', 'Driver’s License','NIN Slip'];
   const [idResult, setIdResult] = useState('');
   const chooseId = () => {
    setIdDropDown(!idDropDown);
    document.querySelector('.idDrop').classList.toggle('DropIt');
   }
  //  CUSTOM VALIDITY FORHOUSE ADDRESS
  const validAddress = (e) => {
    const addAddress = e.target.value;
    e.target.setCustomValidity(addAddress ? '' : 'Your Address must be entered');
  }
  //  CUSTOM VALIDITY FOR CITY
  const validCity  = (e) => {
    const addCity = e.target.value;
    e.target.setCustomValidity(addCity ? '' : 'Your City must be entered')
  }
  // CUSTOM VALIDITY FOR STATE
  const validState  = (e) => {
    const addState = e.target.value;
    e.target.setCustomValidity(addState ? '' : 'Your State must be entered')
  }
  //CUSTOM VALIDITY FOR ID
  const validId = (e) => {
    const addId = e.target.value;
   e.target.setCustomValidity(addId ? '' : 'Your ID must be inputed and must be 11 digits');
 }
 //CUSTOM VALIDITY FOR LGA
 const validLGA = (e) => {
  const addLGA = e.target.value;
 e.target.setCustomValidity(addLGA ? '' : 'This is required to proceed');
}

const checkform = () =>{

  if(genderResult &&
    idResult &&
    idAddress &&
    idCity &&
    idState &&
    idLGA &&
    idPostalCode &&
    idNumber){
     setVerifyImage(Pending);
      setIdStatus('Pending');
      setErrorSubmit(false);
    setTimeout(()=> {
     setIdPopVerified(true);
     
    },2000)
  }
 else   {
  
     setErrorSubmit(true);
     setVerifyImage(NotVerifiedIcon);
     setIdStatus('Not Verified');
     
    }
  }

  
  return (
    <div className='flex flex-col '>
        { idVerificationOpen && (
        <div className={`flex flex-col  ${verificationOpen
            ? 'block' : 'hidden'}
            ${idVerificationOpen
            ? ' pb-[100px] lg:pb-[150px]'
             : 'pb-[0px]'}`}>
         <div className='flex md:gap-[25px] gap-[11px] lg:pt-[50px]  pt-[35px] lg:mb-[50px] mb-[35px] '>
            {/* ICON == NOT VERIFIED */}
    <div className=' flex gap-[5px] py-[23px] pr-[12px] pl-[12px] md:py-[25px] md:pr-[41px] md:pl-[16px] bg-white
   shadow-[0px_2.34722px_5.86806px_0px_rgba(0,0,0,0.25)]
     md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
    <img src={verifyImage} alt="" 
     className={`h-[24px] w-[24px] md:h-[44px] md:w-[44px] lg:h-[62px] lg:w-[62px]`}/>
     <div className='flex flex-col gap-[4.694px] md:gap-[8px] justify-center'>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          ID Status</h2>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          {idStatus}
          </h2>
     </div>
    </div>
  {/*  */}
    <div className='flex md:gap-[14px] gap-[11px] items-center'>
        <h2 className='font-[500] text-[#7E7E7E] text-[8px] leading-[10.4px]
        lg:text-[16px] lg:leading-[20.8px]'>
        Why Account Verification with my ID Document?
       </h2>
        <img onClick={() => {
          setIdCustomerQuery(true);
        }}
         src={messageIcon} alt="" 
        className='h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px] cursor-pointer'/>
    </div>
         </div>
         {/* Forms */}
         
      <form 
      onSubmit={(e) => {
        e.preventDefault();
      }} action="">
        {/* Container for all Forms */}
        <div className='flex flex-col  lg:gap-[25px] gap-[20px]  w-[100%] mb-[50px]'>
      {/*  Full Name / Gender */}
      <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
    {/* Full Name */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    Full Name
    </h2>
    <div
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]'>
      Habib Kamaldeen
   </div>
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
    value={idAddress}
    onChange={(e) =>{
      setIdAddress(e.target.value)
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text" onInvalid={validAddress}  required/>
   
    </div>
    {/* STATE */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    State or Province
    </h2>
    <input 
    value={idState}
    onChange={(e) =>{
      setIdState(e.target.value)
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder='' 
    type="text" onInvalid={validState} required/>
   
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
    value={idCity}
    onChange={(e) => {
    setIdCity(e.target.value)
}}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder=''
    type="text" onInvalid={validCity}   required/>
   
    </div>
    {/* LGA */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     L.G.A
    </h2>
    <input 
    value={idLGA}
    onChange={(e) => {
      setIdLGA(e.target.value);
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text"  onInvalid={validLGA}  required/>
   
    </div>
      </div>
      {/* POSTAL CODE */}
     
      <div className='flex flex-col md:w-[49%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    Postal Code
    </h2>
    <input onInput={(e => {
       const numbersOnly = e.target.value.replace(/\D/g, '');
       e.target.value = numbersOnly;
    })}
    value={idPostalCode}
    onChange={(e) => {
      setIdPostalCode(e.target.value);
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder=''
    type="text" inputMode='numeric' required/>
    </div>

    {/* ID TYPE & ID NUMBER */}
    <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
        {/* ID TYPE */}
        <div className='relative flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     ID Type
    </h2>
    <div onClick={chooseId}
    className='flex justify-between font-[500] py-[10.33px] pl-[5.867px] pr-[10.917px]
     lg:pl-[16px] lg:py-[15.5px] lg:pr-[10px]
     border-[0.4px] border-[#9C9C9C] border-[solid]'>
      <h2 className='text-[#000] font-[500] text-[8px] leading-[10.4px]
      lg:text-[16px] lg:leading-[20.8px]'>
        {idResult}
      </h2>
      <img src={ArrowDown} alt=""
      className='idDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]'/>
      </div>
      {idDropDown  && (
        <div 
        className=' absolute lg:top-[90px] md:top-[60px] top-[60px] z-[5] flex flex-col w-[100%]'>
      {(idType.map(info => {
        return (
          <h2 onClick={() => {
            setIdResult(info);
             setIdDropDown(false);
             document.querySelector('.idDrop').classList.remove('DropIt');
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
  
    {/*  */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     ID Number
    </h2>
    <input onInput={( e => {
      const numbersOnly = e.target.value.replace(/\D/g, '');
      e.target.value = numbersOnly;
    })}
    value={idNumber}
    onChange={(e) => {
      setIdNumber(e.target.value)
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text" inputMode='numeric' maxLength={11} onInvalid={validId}  required/>
   
    </div>
      </div>
      {/* UPLOAD IMAGES OFOR ID VERIFICATION */}
      <div className='flex lg:gap-[40px] md:w-[60%] w-[100%] md:justify-start justify-between gap-[24px]'>
        {/* FRONT VIEW */}
    <div onClick={()=> {
     setIdFrontView(true);
   }} 
    className='flex  lg:py-[14px] py-[8.771px] pr-[20.785px] pl-[20px]
     lg:pr-[28px] lg:pl-[16px] md:gap-[14px] gap-[8.21px]
    border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   Upload ID Front View
   </h2>
   <img src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
    </div>
{/* UPLOAD BACK VIEW */}
<div onClick={() => {
    setIdBackView(true);
   }}
 className='flex py-[8.771px] pr-[20.785px] pl-[20px]
  lg:py-[14px] lg:pr-[28px] lg:pl-[16px] gap-[8.21px] md:gap-[14px]
border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   Upload Back View
   </h2>
   <img src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
  
    </div>

      </div>

        </div>
        {/* SUBMIT BUTTON */}
        <div className='flex flex-col md:gap-[15px] gap-[10px] justify-start'>
        <button onClick={() => {
          checkform();
        }}
         className={`lg:py-[13px] md:py-[5.868px] md:rounded-[7.042px] py-[16.531px] rounded-[4.241px] w-[100%] md:w-[150px] lg:w-[163px] lg:rounded-[12px] bg-[#04177F]
         font-[600] text-[12px] leading-[18px] lg:text-[16px] text-center text-white lg:leading-[24px`}>
        Submit
        </button>
       { errorSubmit  && (
        <h2 className={`font-[500] lg:text-[14px] lg:leading-[18px] md:text-[14px] md:leading-[18px] 
        text-[12px] leading-[16px] text-red-600` }>
          Fill the forms complete to proceed
       </h2>
       )}
       
       
        </div>
        {idCustomerQuery && (
          <Modal>
            <div className='bg-white flex flex-col  lg:h-[890px] md:h-[504.893px] md:rounded-[11.736px]
            md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:w-[80%] lg:w-[70%] lg:rounded-[20px]
            lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] justify-center items-center md:gap-[50px] lg:gap-[100px]'>
          <div className='flex flex-col lg:gap-[25px] md:gap-[15px] items-center'>
       <p className='font-[400] text-[13px] text-center leading-[16.206px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    ID Verification confirms your identity using a Government-issued ID document. 
    </p>
    <p className='font-[400] text-[13px] text-center leading-[16.206px] 
   lg:text-[16px] lg:leading-[20.8px]'>
This verification protects you and us from fraudulent activities.
 Your information remains confidential and is used solely for verification.
 </p>
 <img src={QueryId} alt="" 
          className='lg:w-[294px] lg:h-[234px] md:w-[172px] md:h-[135.893px]'/>
          </div>
          {/*  */}
          
          <div className='flex flex-col lg:gap-[40px] md:gap-[23.47px] mb-[50px]'>
            {/* Header */}
   <h2 className='font-[700] lg:text-[16px] lg:leading-[19.2px] text-[13px] leading-[16.206px] 
   text-center'>
   Why do we need your ID document for account verification?
   </h2>
   {/* Paragraph */}
   <div className='flex flex-col lg:gap-[20px]'>
  <p className='font-[700] lg:text-[16px] lg:leading-[19.2px] 
  text-center  text-[13px] leading-[16.206px]'>
  1. Security: Your safety is our priority. Verifying your ID helps us
   protect your account from unauthorized access and potential fraud.
</p>
<p className='font-[700] lg:text-[16px] lg:leading-[19.2px]
 text-center   text-[13px] leading-[16.206px]'>
2. Trust: We want to build a trusted relationship with you. 
Confirming your identity ensures that the person accessing the account is indeed you.
</p>
   </div>

          </div>
          <div className='flex'>
   <button onClick={() => {
    setIdCustomerQuery(false);
   }} 
   className='font-[600] bg-[#04177F] md:w-[163px] md:py-[5.868px] lg:py-[13px] text-white lg:rounded-[12px]
   lg:text-[16px] lg:leading-[24px] md:rounded-[7.042px]'>
    Okay
   </button>
          </div>
 </div>
          
            
          </Modal>
        )}
    {idFrontView && (
<Modal>
  <div className='flex flex-col rounded-[8px] w-[100%]   h-[257.07px]  md:h-[350px] 
  lg:h-[404px] bg-white lg:w-[45%] md:w-[60%] lg:rounded-[12px] mx-[19px] 
  shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:mx-[0px]
   lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)]'>
    <div className='flex justify-end p-[10px]'>
  <img onClick={() => {
    setIdFrontView(false);
  }} 
  src={closeIcon} alt=""
  className='h-[32px] w-[32px]  cursor-pointer'/>
  </div>
  <div className='flex flex-col h-[100%]   md:gap-[30px] gap-[20px] justify-center items-center'>
    <h2 className=' font-[500] text-center text-[10px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
      Upload ID Front View
      </h2>
      <img className='lg:h-[200px] lg:w-[197px] md:w-[115.339px] md:h-[117.361px] h-[91px] w-[89px]'
    src={frontView} alt="" />
      <button onClick={(e) => {
        e.preventDefault();
      }}
       className='font-[600] text-white md:w-[150px] text-[12px] leading-[18px] 
      lg:text-[16px] 
      lg:leading-[24px] bg-[#04177F]  w-[80%] py-[10px]
      lg:rounded-[12px] lg:py-[10px] rounded-[4.61px]'>
      Upload
      </button>
  </div>
  </div>
</Modal>
    )}
    {idBackView && (
      <Modal>
        <div className='flex flex-col rounded-[8px] w-[100%] h-[257.07px]  md:h-[350px] 
        lg:h-[404px] bg-white md:w-[60%] lg:w-[45%] lg:rounded-[12px] mx-[19px] 
        shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:mx-[0px]
         lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)]'>
          <div className='flex justify-end p-[10px]'>
        <img onClick={() => {
          setIdBackView(false);
        }} 
        src={closeIcon} alt=""
        className='h-[32px] w-[32px]  cursor-pointer'/>
        </div>
        <div className='flex flex-col h-[100%]  md:gap-[30px] gap-[20px] justify-center items-center '>
          <h2 className=' font-[500] text-center text-[10px] leading-[14.4px] 
         lg:text-[16px] lg:leading-[20.8px]'>
            Upload ID Back View
            </h2>
            <img className='lg:h-[200px] lg:w-[197px] md:w-[115.339px] md:h-[117.361px]  h-[91px] w-[89px]'
          src={BackView} alt="" />
            <button onClick={(e) =>{
              e.preventDefault();
            }} 
            className='font-[600] text-white  md:w-[150px] text-[12px] leading-[18px] 
            lg:text-[16px] 
            lg:leading-[24px] bg-[#04177F]  w-[80%] py-[10px]
            lg:rounded-[12px] lg:py-[10px] rounded-[4.61px]'>
            Upload
            </button>
        </div>
        </div>
      </Modal>
          )}
    </form>  
    {idPopVerified && (
          <Modal className="">
            <div
              className={`confirm2 ${styles.inputPin} ${
                toggleSideBar
                  ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                  : "lg:w-[40%]"
              }relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
            >
              <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                <img src={PopUpGreen} alt="" className="md:hidden rounded-tr-[10px]" />
                <img src={PopUpGreenTab} alt="" className="hidden md:block lg:hidden rounded-tr-[10px]" />
                <img src={PopUpGreenDeskTop} alt="" className="hidden lg:block rounded-tr-[20px]" />
              </div>

              <div className="relative z-10">
               

                <p
                  className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] 
                  font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                  Your request has been submitted successfully. 
                  You can check your ID Status in the next 24 hours.
                </p>
              </div>

              <div>
                <img src={Success} alt="" className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%]"/>
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIdPopVerified(false);
                 setGenderResult('');
                  setIdAddress('')
                  setIdCity('')
                  setIdState('')
                  setIdLGA('')
                  setIdPostalCode('')
                  setIdNumber('');
                  setIdResult('');
                }}
                className={`my-[5%] bg-[#04177f] w-[90%] flex 
                justify-center items-center mx-auto cursor-pointer text-[10px] 
                font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              </div>
          </Modal>
        )}
        </div>
        )}
        </div>
  )
}
