import React, {useContext, useState} from 'react';
import { ContextProvider } from '../../Context';
import '../../../App.css';
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import Arrowright from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import { Modal } from '../../Screens/Modal/Modal';
import NotVerifiedIcon from '../ProfileImages/NotVerifiedIcon.svg';
import messageIcon from '../ProfileImages/message-question.svg';
import bvnVerifiedSuccess from '../ProfileImages/user-tick.svg';
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg"
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg"
import Success from "../ProfileImages/success.gif";
import BvnQueryImage from '../ProfileImages/Bvnqueryimage.svg';
import BvnMessageImage from '../ProfileImages/BvnMessageImage.svg';

export default function BvnVerification() {
    const {bvnVerificationOpen} = useContext(ContextProvider);
    const {verificationOpen} = useContext(ContextProvider);
   const [bvnVerifyImage, setBvnVerifyImage] = useState(NotVerifiedIcon);
   const [bvnStatus, setBvnStatus] = useState('Not Verified');
   const[bvnDateOfBirth, setBvnDateOfBirth] = useState('');
   const[ bvnNumber, setBvnNumber] = useState('');
   const [bvnQuery, setBvnQuery] = useState(false);
   const [bvnPhone, setBvnPhone] = useState('');
   const[bvnPopVerified, setBvnPopVerified] = useState(false);
   const [bvnPhoneMessage, setBvnPhoneMessage] = useState(false);
   const [errorVerify, setErrorVerify] = useState(false);
   const {toggleSideBar} = useContext(ContextProvider);
   
   const checkBvnform = () =>{

    if(bvnNumber && bvnPhone && bvnDateOfBirth ){
       setBvnVerifyImage(bvnVerifiedSuccess);
        setBvnStatus('Verified');
          setTimeout(()=>{
      setBvnPopVerified(true);
      setErrorVerify(false);
      },2000)
        }
   else   {
    setBvnVerifyImage(NotVerifiedIcon);
       setBvnStatus('Not Verified');
       setErrorVerify(true);
        }
    }
    //======= SETTING DATE FORMAT FOR DATE OF BIRTH =====
// let inputDate = "20231129";
// let  trimmedDate = inputDate.trim();
// let formattedDate = trimmedDate.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3');
// console.log(formattedDate);


  
console.log(bvnDateOfBirth);
  return (
    <div>
        {bvnVerificationOpen && (
    <div className= {` flex flex-col ${verificationOpen
      ? 'block'  : 'hidden'} `}>
      
      <div className='flex lg:gap-[10px] lg:py-[50px] py-[35px] '> 
     <h2 className='font-[500] text-[#7C7C7C] text-[9.389px] leading-[14px] 
     lg:text-[20px] lg:leading-[30px]'>
      For Nigerian User's Only
</h2>
<img  className='lg:h-[24px] lg:w-[24px] h-[14.083px] w-[14.083px] md:self-center'
src={Arrowright} alt="" />
       </div>
       {/* VERIFICATION */}
       <div className='flex md:gap-[25px] gap-[11px] lg:mb-[50px] mb-[35px]'>
            {/* ICON == NOT VERIFIED */}
    <div className=' flex gap-[5px] py-[23px] pr-[12px] pl-[12px] md:py-[25px] md:pr-[41px] md:pl-[16px] bg-white
   shadow-[0px_2.34722px_5.86806px_0px_rgba(0,0,0,0.25)]
     md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
    <img src={bvnVerifyImage} alt="" 
     className={`h-[24px] w-[24px] md:h-[44px] md:w-[44px] lg:h-[62px] lg:w-[62px]`}/>
     <div className='flex flex-col gap-[4.694px] md:gap-[8px] justify-center'>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          Bvn Status</h2>
        <h2 className='font-[500] lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[10.45px]'>
          {bvnStatus}
          </h2>
     </div>
    </div>
  {/*  */}
    <div className='flex md:gap-[14px] gap-[11px] items-center'>
        <h2 className='font-[500] text-[#7E7E7E] text-[8px] leading-[10.4px]
        lg:text-[16px] lg:leading-[20.8px]'>
        Why Account Verification with my BVN?
       </h2>
        <img onClick={()=>{
          setBvnQuery(true);
        }} src={messageIcon} alt="" 
        className='h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px] cursor-pointer'/>
    </div>
     </div>
     {/* FORMS ON BVN */}
   <form onSubmit={(e) => {
    e.preventDefault();
   }}
   action="">
    {/* Header Container */}
    
   <div className='flex flex-col  lg:gap-[25px] gap-[20px]  w-[100%] '>
   <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
    {/* Full Name */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    Full Name
    </h2>
    <div
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px]
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]'>
      Habib Kamaldeen
   </div>
  </div>
  {/* PHONE NUMBER */}
   <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
    {/* header */}
   <div className='flex md:gap-[10px] gap-[5px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   Phone Number
   </h2>
   <img onClick={() => {
     setBvnPhoneMessage(true);
   }} 
   src= {messageIcon} alt="" 
   className='h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px] cursor-pointer'/>
   </div>
   {/* Input */}
   <input value={bvnPhone} onChange={(e) =>{
    setBvnPhone(e.target.value);
   }} type="tel" name='phone' id='phone' maxLength={11} inputMode='tel' required
   className='font-[500] py-[10.33px] pl-[5.867px] 
   lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
   md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px]
   text-[8px] leading-[10.4px] 
    border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
     focus:outline-none placeholder:text-[8px] placeholdee:leading-[10.4px]
     placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px]'/>
   </div>
   </div>
{/* Date of Birth / BVN */}
<div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
<div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     D.O.B
    </h2>
    <input 
    value={bvnDateOfBirth}
   
    onChange={(e => {
      setBvnDateOfBirth(e.target.value);
   })}
    className=' font-[500] w-[100%] py-[10.33px] pl-[5.867px] bg-white
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
    md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px]
    text-[8px] leading-[10.4px] lg:pr-[16px] pr-[9px]
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none cursor-pointer'
    type="date" id='dob' name='dob' />
 
    </div>

    {/*========= BVN ==========*/}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     BVN Number
    </h2>
    <input onInput={( e => {
      const numbersOnly = e.target.value.replace(/\D/g, '');
      e.target.value = numbersOnly;
    })}
    value={bvnNumber}
    onChange={(e) => {
      setBvnNumber(e.target.value)
    }}
    className=' font-[500] py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
    md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px]
    text-[8px] leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    type="text"  inputMode='numeric' maxLength={11}   required/>
   
    </div>
</div>

<div className='flex flex-col md:gap-[15px] gap-[10px] justify-start'>
        <button onClick={()=>{
          checkBvnform()
        }}
         className={`lg:py-[13px] md:py-[7.868px] py-[16.531px] rounded-[4.241px] w-[100%] md:w-[150px] lg:w-[163px] lg:rounded-[12px] bg-[#04177F]
         font-[600] text-[12px] leading-[18px] lg:text-[16px] text-center text-white lg:leading-[24px`}>
        Verify
        </button>
        { errorVerify  && (
        <h2 className={`font-[500] lg:text-[14px] lg:leading-[18px] md:text-[14px] md:leading-[18px] 
        text-[12px] leading-[16px] text-red-600` }>
          Fill all to Confirm Verification
       </h2>
       )}
        </div>
    </div>

 
   </form>
   {/* ========== MODALS ========= */}
   {bvnQuery && (
          <Modal>
        <div className=' h-[100%] flex flex-col w-[100%] items-center justify-center  '>
            <div className='bvnQuery flex bg-white flex-col shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] rounded-[8px] 
             shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] md:rounded-[11.736px]  lg:rounded-[20px] md:w-[55%]
            md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25) lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] 
            justify-center  items-center px-[18px] md:px-[30px] md:h-[550px]   
            h-[430px] gap-[10px] md:gap-[40px] lg:gap-[50px] lg:justify-normal 
            md:mx-[0px] mx-[19px]  lg:pt-[30px]  md:pt-[270px] pt-[270px]'>
            
          <div className='flex flex-col   items-center '>
            <div className='flex flex-col  md:gap-[20px] gap-[10px]'>
       <p className='font-[400] text-[13px] text-center leading-[16.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
   BVN (Bank Verification Number) validates your bank details for security.
 
    </p>
    <p className='font-[400] text-[13px] text-center leading-[16.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
This verification enhance security, prevent fraud, and ensure accurate payouts. 
Your personal data is securely encrypted.
 </p>
 </div>
 <img src={BvnQueryImage} alt="" 
          className='lg:w-[460px] lg:h-[490.72px] md:h-[290px] md:w-[290px] w-[100%] h-[206.742px] cursor-pointer' />
          </div>
          {/*  */}
          
          <div className='flex flex-col gap-[20px] md:gap-[23.47px] lg:gap-[40px] mb-[50px]'>
            {/* Header */}
   <h2 className='font-[700] lg:text-[16px] lg:leading-[19.2px] text-center
   text-[13px] leading-[16.4px] '>
   Why do we request your BVN for account verification?
   </h2>
   {/* Paragraph */}
   <div className='flex flex-col md:gap-[20px] gap-[10px] items-center'>
  <p className='font-[500] lg:text-[16px] lg:leading-[19.2px] text-left
  text-[13px] leading-[16.4px] '>
 <span className='font-[700]'>1. Security:</span>  We take your financial security seriously. 
  Verifying your BVN helps us confirm your bank details, 
  ensuring that your transactions are secure.


</p>
<p className='font-[500] lg:text-[16px] lg:leading-[19.2px] text-left
text-[13px] leading-[16.4px]'>
<span className='font-[700]'>2. Accuracy: </span>To provide you with the best service, we need accurate information.
 Verifying your BVN ensures precise payouts and helps prevent errors in your transactions.

</p>
   </div>

          </div>
          <div className='flex w-[100%] md:justify-center'>
   <button onClick={() => {
    setBvnQuery(false);
   }} 
   className='font-[600] w-[100%] bg-[#04177F] md:w-[163px] md:py-[5.868px] lg:py-[13px]
    text-white lg:rounded-[12px] text-[13px] leading-[16.4px] rounded-[7.042px]
   lg:text-[16px] lg:leading-[24px]   py-[16.531px] md:mb-[40px] mb-[20px]'>
    Okay
   </button>
   
          </div>
 </div>
           </div>
          </Modal>
        )}
       {bvnPopVerified && (
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
               <p className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] 
                  font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}>
                    Successful
                  </p>

                <p
                  className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] 
                  font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                 Your BVN has been verified successfully.

                </p>
              </div>

              <div>
                <img src={Success} alt="" className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%]"/>
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setBvnPopVerified(false);
                  setBvnDateOfBirth('');
                  setBvnNumber('');
                  setBvnPhone('');
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
        {bvnPhoneMessage && (
          <Modal>
          <div className='flex flex-col lg:gap-[44px] md:gap-[25px] gap-[20px] lg:h-[465px] h-[330px] w-[100%] md:w-[45%]
          shadow-[0px_0px_8.3274px_0px_rgba(0,0,0,0.25)] rounded-[8px] px-[18px] md:px-[0px]
          lg:rounded-[12px] lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] mx-[19px] md:mx-[0px]
           bg-white md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)]
          items-center justify-center'>
      <h2 className='font-[600] lg:text-[16px] lg:leading-[24px]  text-[13px] text-center leading-[16.206px] '>
      The phone number associated with your BVN for verification.
      </h2>
      <div className='flex justify-center  w-[100%]'>
      <img src={BvnMessageImage} alt="" 
      className='lg:w-[223px] lg:h-[223px] md:h-[130.858px] 
      md:w-[130.858px] h-[130.858px] w-[130.858px]'/>
      </div>
      {/* OKAY BUTTON PHONE MESSAGE */}
      <div className='flex w-[100%] md:justify-center'>
      <button onClick={() =>{
        setBvnPhoneMessage(false);
      }}
      className='font-[600] lg:py-[13px] md:py-[5.868px] py-[16.531px]  md:w-[163px] w-[100%]
       text-white bg-[#04177F]  rounded-[4.61px]
      lg:rounded-[12px] lg:text-[16px] lg:leading-[24px]  text-[13px]  leading-[16.206px] '>
     Okay
      </button>
      </div>
          </div>
         </Modal>
        )}
        </div>
        )}
 
      </div>
  )
}