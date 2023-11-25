import React, {useContext, useState} from 'react';
import '../../../App.css';
import { ContextProvider } from '../../Context'
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
 import messageIcon from '../ProfileImages/message-question.svg';
 import ArrowDown from '../ProfileImages/arrow-down.svg';
 import UploadDoc from '../ProfileImages/document-upload.svg';
import idVerified from '../ProfileImages/user-tick.svg';
import { Modal } from '../../Screens/Modal/Modal';
import frontView from '../ProfileImages/UploadFront.svg';
import closeIcon from '../ProfileImages/Cancel.svg';
import BackView from '../ProfileImages/UploadBackView.svg';
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
   const [idStatus, setIdStatus] = useState('Not Verified')
    const [errorSubmit, setErrorSubmit] = useState(false);
    const [idFrontView, setIdFrontView] = useState(false);
    const [idBackView, setIdBackView] = useState(false);
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
    e.target.setCustomValidity(addAddress ? '' : 'Your Address must be inputed');
  }
  //  CUSTOM VALIDITY FOR CITY
  const validCity  = (e) => {
    const addCity = e.target.value;
    e.target.setCustomValidity(addCity ? '' : 'Your City must be inputed')
  }
  // CUSTOM VALIDITY FOR STATE
  const validState  = (e) => {
    const addState = e.target.value;
    e.target.setCustomValidity(addState ? '' : 'Your City must be inputed')
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
    idAddress &&
    idCity &&
    idState &&
    idLGA &&
    idPostalCode &&
    idNumber ){
     setVerifyImage(idVerified);
      setIdStatus('Verified');
      setErrorSubmit(false);
    }
    
 else {
     setErrorSubmit(true);
     setVerifyImage(NotVerifiedIcon);
     setIdStatus('Not Verified');
    }
  }

  
  return (
    <div className='flex flex-col mb-[100px]'>
        { idVerificationOpen && (
        <div className={`  ${verificationOpen
            ? 'block' : 'hidden'}`}>
         <div className='flex md:gap-[25px] gap-[11px] lg:mb-[50px] mb-[35px]'>
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
        <img src={messageIcon} alt="" 
        className='h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px]'/>
    </div>
         </div>
         {/* Forms */}
         
      <form onSubmit={(e) => {
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
    type="text" onInvalid={validAddress} required/>
   
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
    type="text" onInvalid={validCity} required/>
   
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
    type="text" onInvalid={validLGA} required/>
   
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
    type="text" inputMode='numeric'/>
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
    type="text" inputMode='numeric' maxLength={11} onInvalid={validId} required/>
   
    </div>
      </div>
      {/* UPLOAD IMAGES OFOR ID VERIFICATION */}
      <div className='flex lg:gap-[40px] md:w-[60%] w-[100%] md:justify-start justify-between gap-[24px]'>
        {/* FRONT VIEW */}
    <div className='flex  lg:py-[14px] py-[8.771px] pr-[20.785px] pl-[20px]
     lg:pr-[28px] lg:pl-[16px] md:gap-[14px] gap-[8.21px]
    border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   Upload ID Front View
   </h2>
   <img onClick={()=> {
     setIdFrontView(true);
   }} src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
    </div>
{/* UPLOAD BACK VIEW */}
<div className='flex py-[8.771px] pr-[20.785px] pl-[20px]
  lg:py-[14px] lg:pr-[28px] lg:pl-[16px] gap-[8.21px] md:gap-[14px]
border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   Upload Back View
   </h2>
   <img onClick={() => {
    setIdBackView(true);
   }} src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
  
    </div>

      </div>

        </div>
        {/* SUBMIT BUTTON */}
        <div className='flex flex-col md:gap-[15px] gap-[10px] justify-start'>
        <button onClick={() => {
          checkform();
        }}
         className={`lg:py-[13px] py-[16.531px] rounded-[4.241px] w-[100%] md:w-[150px] lg:w-[163px] lg:rounded-[12px] bg-[#04177F]
         font-[600] text-[12px] leading-[18px] lg:text-[16px] text-center text-white lg:leading-[24px`}>
        Submit
        </button>
       { errorSubmit  && (
        <h2 className={`font-[500] lg:text-[13px] lg:leading-[18px] md:text-[10px] md:leading-[14px] 
        text-[9px] leading-[13px] text-red-600` }>
          Fill all the forms to proceed
       </h2>
       )}
       
       
        </div>
    {idFrontView && (
<Modal>
  <div className='flex flex-col rounded-[8px] w-[100%] h-[257.07px]  md:h-[404px] 
  lg:h-[404px] bg-white md:w-[45%] lg:rounded-[12px] mx-[19px] 
  shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:mx-[0px]
   lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)]'>
    <div className='flex justify-end p-[10px]'>
  <img onClick={() => {
    setIdFrontView(false);
  }} 
  src={closeIcon} alt=""
  className='h-[32px] w-[32px]  '/>
  </div>
  <div className='flex flex-col  lg:gap-[30px] gap-[20px] justify-center items-center '>
    <h2 className=' font-[500] text-center text-[10px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
      Upload ID Front View
      </h2>
      <img className='lg:h-[200px] lg:w-[197px] h-[91px] w-[89px]'
    src={frontView} alt="" />
      <button className='font-[600] text-white md:w-[30%] text-[12px] leading-[18px] 
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
        <div className='flex flex-col rounded-[8px] w-[100%] h-[257.07px]  md:h-[404px] 
        lg:h-[404px] bg-white md:w-[45%] lg:rounded-[12px] mx-[19px] 
        shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:mx-[0px]
         lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)]'>
          <div className='flex justify-end p-[10px]'>
        <img onClick={() => {
          setIdBackView(false);
        }} 
        src={closeIcon} alt=""
        className='h-[32px] w-[32px]  '/>
        </div>
        <div className='flex flex-col  lg:gap-[30px] gap-[20px] justify-center items-center '>
          <h2 className=' font-[500] text-center text-[10px] leading-[14.4px] 
         lg:text-[16px] lg:leading-[20.8px]'>
            Upload ID Back View
            </h2>
            <img className='lg:h-[200px] lg:w-[197px] h-[91px] w-[89px]'
          src={BackView} alt="" />
            <button className='font-[600] text-white md:w-[30%] text-[12px] leading-[18px] 
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
      
        </div>
        )}
        </div>
  )
}
