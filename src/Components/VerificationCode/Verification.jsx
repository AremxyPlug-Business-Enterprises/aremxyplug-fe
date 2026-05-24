import React, { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import CloseIcon from '../EducationPins/imagesEducation/close-circle.svg';
import axios from "axios";
import { BASE_URL } from "../../config";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";

function Verification() {
    const {
    viaEmail,
    viaSms,
    setViaSms, 
    setViaEmail,
    setViaEmailOrSms,
  verification,
  setVerification,
    viaEmailOrSms,
    success,
     otpVerifyEmailSignup,
    setOtpVerifyEmailSignup, 
    otpVerifySmsSignup,
    setOtpVerifySmsSignup,
    setSuccess,
    state,
    setState,
    setAlertCustom,
    customerDetail,
    pendingLoginToken,
      setOpenTranspin,
    
  } = useContext(ContextProvider);
const { phoneNumber, email} = state;
const location = useLocation();
const pathname = location?.pathname;



//VerifyViaEmail Authentication ==============
const [loading, setLoading] = useState(false);
const [countdown, setCountdown] = useState(60);

  const [canResend, setCanResend] = useState(false);
  //const [verificationPinError, setVerificationPinError] = useState(false);
  const [verificationPinError, setVerificationPinError] = useState(false);


 



  const {email : Email, phone} = customerDetail;

const emailBasedOnState = pathname?.includes("/signUp") ?
 email?.toLowerCase() || "" : 
pathname === "/Login" ? Email?.toLowerCase() || "" : "";

// PHONE BASED ON STATE
 const phoneBasedOnState = pathname?.includes("/signUp") ?
 phoneNumber?.toLowerCase() || "" : 
pathname === "/Login" ? phone?.toLowerCase() || "" : "";
// PASSING THE SEND OTP FUNCTION
const getOtpSmsorEmail = async(channel)=> {
  if(!navigator.onLine) {
 return setAlertCustom({
    message : "Check your internet connection",
    type : "error",
    show : true

  })
}
// const [sendSmsOrEmail, setSendSmsOrEmail] = useState("")
  const holdSignUpDetails = async(body, url)=> {
    if(pathname?.includes("/signUp")){
  if(channel === "sms"){
    const parsedPhone = phoneNumber  ?
   phoneNumber : "";
    body = {
      phone_number : parsedPhone
    }
    
     url =`${BASE_URL}/sms/send`;

  }else if(channel === "email" ){
   const parsedEmail =   email  ? email?.toLowerCase() : "";
    body = {
    email : parsedEmail
   }
   url = `${BASE_URL}/send-otp/signup`
}else if(channel === "whatsapp"){
  const parsedPhone = phoneNumber  ?
   phoneNumber :  "";
    body = {
      phone_number : parsedPhone
    }
    
     url =`${BASE_URL}/whatsapp/send`;
}
    }else if(pathname === "/Login"){
      if(channel === "sms"){
    const parsedPhone = phone  ?
   phone :"";
    body = {
      phone_number : parsedPhone,
      pending_login_token : pendingLoginToken
    }
    
     url =`${BASE_URL}/sms/send`;

  }else if(channel === "email" ){
   const parsedEmail =   Email  ? Email?.toLowerCase() : "";
    body = {
    email : parsedEmail,
    pending_login_token : pendingLoginToken
   }
   url = `${BASE_URL}/send-otp/signup`
}else if(channel === "whatsapp"){
  const parsedPhone = phone  ?
   phone: "";
    body = {
      phone_number : parsedPhone,
      pending_login_token  : pendingLoginToken
    }
    
     url =`${BASE_URL}/whatsapp/send`;
}
    }

 if(navigator.onLine ){
  await gettingOtpFunction(body,url)
 }
  }
  holdSignUpDetails()
  

}
   //THIS FUNCTION IS TO DERIVE THE OTP FROM THE BACKEND
  const gettingOtpFunction= async(body, url)=> {
   
    setLoading(true);
    if(!navigator.onLine) setAlertCustom({
      message : "Check your internet connection",
      type : "error",
      show : true
    })
    if(navigator.onLine){
    try{
 
    const response = await axios.post(url,body, {headers:{ "Content-Type": "application/json"}})

if(response.status === 200 || response.status === 201){
  twoStepVerificationHandler(url);
  setAlertCustom({
    message : "An Otp has been sent to you",
    type : "success",
    show : true
 })
} 
 }catch(error){
  if(error && error?.response === undefined){
    setAlertCustom({
    message : "Your Internet connection is quite unstable.",
    type : "error",
    show : true

  })
  }else if(error.response && error.response.status === 404){
  setAlertCustom({
    message : "User not found",
    type : "error",
    show : true

  })
  setTimeout(()=> {
    window.location.reload()
  },3500)
  } else if(error.response && error.response.status === 500){
    setAlertCustom({
    message : "SERVER_ERROR",
    type : "error",
    show : true

  })
  }else{
    setAlertCustom({
    message : "An unexpected error has occured",
    type : "error",
    show : true

  })
  }
  }finally{
    setLoading(false);
    setCountdown(60);
    setCanResend(false)
  }
}
}

//IF SUCCESSFUL RUN THIS FUNCTION TO CLOSE THE TWO STEP MODAL
function twoStepVerificationHandler(url) {

 setVerification(false); 
    if(url?.includes("sms")){
      setViaSms(true)
      setViaEmail(false)
      setViaEmailOrSms("sms")
    }else if(url?.includes("whatsapp")){
      setViaSms(true)
        setViaEmail(false)
       setViaEmailOrSms("whatsapp")
      }  else{
      setViaEmail(true);
      setViaSms(false)
      setViaEmailOrSms("email")
    }
}

const gettingSmsOrEmailFunctionOtp = async(url, body)=> {
// WHEN THE INTERNET IS UNSTABLE OR IS NOT AVAILABLE
  if(!navigator.onLine) {
      setAlertCustom({
        message : "Check your internet connection",
        type : "error",
        show : true
      })
  } 
  if(pathname?.includes("/signUp")){
  if( viaEmailOrSms === "email"){
     url = `${BASE_URL}/verify-otp/signup?email=${email ? email?.toLowerCase() :  ""}`
       body ={
       otp :otpVerifyEmailSignup
       }
    
      }else if(viaEmailOrSms === "sms"){
       url = `${BASE_URL}/sms/verify/signup?phone=${phoneNumber ? phoneNumber :  ""}`
       body ={
       otp :otpVerifySmsSignup
       }
        }else if(viaEmailOrSms === "whatsapp"){
         url = `${BASE_URL}/whatsapp/verify/signup?phone=${phoneNumber ? phoneNumber :  ""}`
       body ={
       otp :otpVerifySmsSignup
       }
        }
      }else if(pathname === "/Login"){
 if( viaEmailOrSms === "email"){
     url = `${BASE_URL}/verify-otp/signup?email=${email ? email?.toLowerCase() :  ""}`
       body ={
       otp :otpVerifyEmailSignup,
       pending_login_token : pendingLoginToken
       }
    
      }else if(viaEmailOrSms === "sms"){
       url = `${BASE_URL}/sms/verify/signup?phone=${phoneNumber ? phoneNumber :  ""}`
       body ={
       otp :otpVerifySmsSignup,
       pending_login_token : pendingLoginToken
       }
        }else if(viaEmailOrSms === "whatsapp"){
         url = `${BASE_URL}/whatsapp/verify/signup?phone=${phoneNumber ? phoneNumber :  ""}`
       body ={
       otp :otpVerifySmsSignup,
       pending_login_token : pendingLoginToken
       }
        }
      }
        
   if(navigator.onLine){
        await VerifyOtpFunction(url, body)
}}



const VerifyOtpFunction = async(url, body)=>{
  setLoading(true);
  if(!navigator.onLine)  setAlertCustom({
    message : "Check your internet connection",
    tyoe : "error",
    show : true
  })
  if(navigator.onLine){
  try{
 const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json"}})

    if(response.status === 200 || response.status === 201){
      submitVerify()
    } 
  }catch(error){
    if(error && error?.response === undefined){
     setAlertCustom({
      message : "Your internet connection is quite unstable",
      type : "error",
      show : true
     })
    }else if( error.response  && error.response.status === 400){
      setVerificationPinError(true);
 
    } if( error.response  && error.response.status === 404){
     setAlertCustom({
    message : "User not found",
    type : "error",
    show : true

  })
  setTimeout(()=> {
   window.location.reload();
  },3500)
    }else if(error.response &&error.response.status === 500){
      setAlertCustom({
    message : "SERVER_ERROR",
    type : "error",
    show : true

  })
    }else {
       return;
    }
  }finally{
    setLoading(false);
  }
}
  }








  useEffect(() => {
if (viaSms === true || viaEmail === true) {
      let timer;
      if (countdown > 0) {
        timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
      } else {
        setCanResend(true);
      }
return () => clearInterval(timer);
    }
  }, [countdown,viaSms, viaEmail, viaEmailOrSms ]);

//SetTimer for Email
  
// useEffect(() => {

//   if (viaEmail === true && viaEmailOrSms === "email") {
//     let timer;
//     if (countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown2((prevCountdown2) => prevCountdown2 - 1);
//       }, 1000);
//     } else {
//       setCanResend(true);
    
//     }
// return () => clearInterval(timer);
//   }
 

// }, [countdown2,viaEmail, viaEmailOrSms]);
  // Resend OTP
  const handleResendOTP = () => {
    if((viaEmailOrSms === "sms" || viaEmailOrSms === "whatsapp") && canResend === true){
    getOtpSmsorEmail(viaEmailOrSms)
    setCanResend(false);
    setVerificationPinError(false);
    setOtpVerifySmsSignup("");
    }else if(viaEmailOrSms === "email" && canResend === true){
   getOtpSmsorEmail("email");
    setCanResend(false);
    setVerificationPinError(false);
    setOtpVerifyEmailSignup("")
    } 
   };
  // const handleResendOTP2 = () => {
  //   getOtpSmsorEmail("email");
  //   setCanResend2(false);
  //   setVerificationPinError(false);
  //   setOtpVerifyEmailSignup("")
  //   };
  

  const submitVerify = () => {
  
      setViaSms(false);
      setViaEmail(false);
      setVerification(false);
      setOtpVerifyEmailSignup('');
      setOtpVerifySmsSignup("");
      if(pathname?.includes("/signUp")){
        setSuccess(true)
      }else if(pathname === "/Login"){
         setOpenTranspin(true)
      }
  };

  //VERIFY_VIA_SMS CODE ================



 


 

//End of VerifyViaEmail Code


//Verifaction successful ====================
 
  const navigate = useNavigate();
 
  const redirectHandler = () => {
    navigate("/Login");
    setSuccess(false);
    setState({
      country: "",
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      checkbox : false
    });
    window.location.reload()
  };

 
  return (
 <div>
 {verification === true && (
// NEW CODE

  <Modal>
          <div className="w-full  mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
            <div
              className=" p-4 flex flex-col gap-[5px] rounded-[8.6px] h-auto w-full bg-white
             lg:h-auto lg:w-[35%] md:w-[45%] lg:rounded-[15px]"
            >
              <div className="w-full flex justify-end ">
                <img
                  onClick={() =>{
                   setVerification(false)
       setState({
      country: "",
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      checkbox : false
    });
    window.location.reload()
                  }}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
              <div className="mb-[25px] lg:mb-[30px]">
                <p className="text-center text-[14px] leading-[18px] lg:leading-[20px] lg:text-[16px] font-[500] lg:font-[700]  mb-[10px] lg:mb-[10px]">
                  Select where you prefer to get the verification code.
                </p>
                <p className="text-center text-gray-500 font-[400] lg:font-[500] lg:text-[14px] text-[12px] leading-[16px]">
                  To ensure a safety security of your account, we want to verify
                  it’s really you.
                </p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                
                {/* VIA Email STARTS HERE*/}
                <div
                  className=" flex items-center  w-full px-[10px] cursor-pointer rounded-[7.5px] 
               min-h-[60px] p-[7px] gap-[5px] md:w-[161px] lg:h-[60px] lg:rounded-[8px] "
                  onClick={() => {
                    setViaEmailOrSms("email");
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: viaEmailOrSms === "email" ? "#d166ff" : "#b3b3b3",
                  }}
                >
                  <img
                    className="w-[30px] h-[30px] lg:w-[25px] lg:h-[25px]"
                    src="./Images/signupimages/email.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[11px] leading-[14px] lg:text-[14px] font-[400] lg:font-[600]">
                      {" "}
                      Via Email
                    </p>
                    <p className="text-[9px] leading-[13px] lg:text-[12px]  text-gray-500 font-[400] lg:font-[600]">
                      { `${emailBasedOnState?.slice(
                      0,
                      3
                    )}****** ${email?.slice(15)}` }</p>
                  </div>
                </div>
                {/* VIA Email ENDS HERE*/}
   {/* WHATSAPP STARTS HERE */}

                <div
                  className="flex items-center  min-h-[60px] w-full px-[10px] cursor-pointer rounded-[7.5px] p-[7px]   gap-[5px] 
                lg:rounded-[8px] md:w-[161px] lg:h-[60px]"
                  onClick={() => {
                    setViaEmailOrSms("whatsapp")
                    
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: viaEmailOrSms === "whatsapp" ? "#d166ff" : "#b3b3b3",
                  }}
                >
                  <img
                    className="w-[30px] h-[30px] lg:w-[25px] lg:h-[25px]"
                    src={"/Images/dashboardImages/whatsapp.png"}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[11px] leading-[14px] lg:text-[14px] font-[400] lg:font-[600]">
                      Via WhatsApp
                    </p>
                    <p className="text-[9px] leading-[13px] lg:text-[12px] text-gray-500 font-[400] lg:font-[600]">
                   {`+${phoneBasedOnState.slice(0, 3)}******${phoneBasedOnState.slice(10)}`}
                    </p>
                  </div>
                </div>
                {/* VIA WHATSAPP ENDS HERE*/}



                {/* VIA SMS STARTS HERE*/}
                <div
                  className="flex items-center  min-h-[60px] w-full px-[10px] cursor-pointer rounded-[7.5px] p-[7px]   gap-[5px] 
                lg:rounded-[8px] md:w-[161px] lg:h-[60px]"
                  onClick={() => {
                    setViaEmailOrSms("sms")
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: viaEmailOrSms === "sms" ? "#d166ff" : "#b3b3b3",
                  }}
                >
                  <img
                    className="w-[30px] h-[30px] lg:w-[25px] lg:h-[25px]"
                    src="./Images/signupimages/sms.png"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[11px] leading-[14px] lg:text-[14px] font-[400] lg:font-[600]">
                      Via SMS
                    </p>
                    <p className="text-[9px] leading-[13px] lg:text-[12px] text-gray-500 font-[400] lg:font-[600]">
                   {   `+${phoneBasedOnState?.slice(0, 3)}******${phoneBasedOnState?.slice(10)}`}
                    </p>
                  </div>
                </div>
                {/* VIA SMS ENDS HERE*/}

                <div className="w-full flex justify-center mt-[30px] md:mt-[35px] lg:mt-[50px]">
                  <button
                    onClick={()=>{
                      getOtpSmsorEmail(viaEmailOrSms)
                    }}
                    type="submit"
                    disabled={viaEmailOrSms === "" ? true : false}
                    className={` ${
                      viaEmailOrSms === ""
                        ? " bg-[#b3b3b3] cursor-not-allowed"
                        : "bg-[#04177F] cursor-pointer"
                    } inline-flex justify-center items-center text-[#fff] text-center font-bold
                 w-full py-[20px] text-[14px] leading-[18px] rounded-[4px]
                  lg:text-[14px] lg:leading-[24px] lg:py-[5px]  lg:w-[140px] 
                   lg:rounded-[7px] lg:px-[37px]
`}
                  >
                    <p> Continue</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>


// OLD CODE
//     <Modal>
//     <div className="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">

//       <div className=" p-4 flex flex-col gap-[5px] rounded-[8.6px] h-auto w-[100%] bg-white   lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
//         <div className="flex w-full justify-end">
//       <img onClick={()=>{
//              setVerification(false);
//             }}
//              src={CloseIcon} className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
//                md:h-[25px] " alt="" />  
//                </div>
//         <p className="text-[10px] font-[500] lg:font-[700] lg:text-[14px] mb-[20px] text-center">
//           Select where you prefer to get the verification code.
//         </p>
//         <div className="flex flex-col gap-[20px] items-center">
//           {/* ========Button to verify through SMS====== */}
          
//            <div
//               onClick={()=>{
//                 setViaEmailOrSms("sms");
//               }}
//               className={`${viaEmailOrSms === "sms" ? "border-[1px] border-[#d166ff]" :  "border-[1px] border-gray-400" }
//                 flex h-auto w-[92px] cursor-pointer rounded-[4.5px] p-[7px]   gap-[5px] 
//               lg:w-[161px] lg:h-[60px] lg:rounded-[8px]`}
//             >
//               <img
//                 className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
//                 src="./Images/signupimages/sms.png"
//                 alt=""
//               />
//               <div className="flex flex-col">
//                 <p className="text-[10px] lg:text-[12px] font-[400] lg:font-[600]">
//                   Via SMS
//                   </p>
//                 <p className="text-[8px] lg:text-[10px] font-[400] lg:font-[600]">
//                  {state.phoneNumber.length > 1 ? `${state.phoneNumber.slice(3,6)}*******` :
//                   Data.UserPhone ? ` ${Data.UserPhone.slice(3,6)}*******` : ""}
//                   </p>
//               </div>
//             </div>
         

//           {/* =========Button to verify through Email====== */}
        
//             <div
//               onClick={()=>{
//                 setViaEmailOrSms("email");
//               }}
              
//               className={` ${viaEmailOrSms === "email" ? "border-[1px] border-[#d166ff]" : "border-[1px] border-gray-400"}
//                 flex h-auto w-[92px] cursor-pointer rounded-[4.5px] p-[7px]  gap-[5px]  lg:w-[161px]
//                lg:h-[60px] lg:rounded-[8px]`}
//             >
//               <img
//                 className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
//                 src="./Images/signupimages/email.png"
//                 alt=""
//               />
//               <div className="flex flex-col">
//                 <p className="text-[10px] lg:text-[12px] font-[400] lg:font-[600]">Via Email</p>
//                 <p className="text-[8px] lg:text-[10px] font-[400] lg:font-[600]">
//                    {state.email.length > 1 ? `${state.email.slice(0,3)}*******` :
//                  Data.UserEmail ? `${Data.UserEmail.slice(0,3)}*******` : "" }</p>
//               </div>
//             </div>
       

//           {/* ==========Continue Button======== */}
//           <button
//             onClick={getOtpSmsorEmail}
//             disabled={viaEmailOrSms=== "" ? true : false}
//  className={`${viaEmailOrSms === "" ? "bg-gray-200"  : "bg-blue-800"}
//   cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
//             text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]`}>
//             Continue
//           </button>
//         </div>
//       </div>
// </div>
// </Modal>
 )}
      {/* ========Email verification pop up==== */}
      {viaEmail === true && (
//NEW

 <Modal>
          <div
            className="lg:ml-[38.5%] md:ml-[40%] lg:w-[30%] md:w-[45%]  md:-mt-[20%] lg:-mb-[30%] w-full mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px] relative"
          >
            <div className="flex flex-col gap-[3px] mb-[25px] lg:mb-[30px]">
              <div className="absolute top-4 right-4 ">
                <img
               onClick={() => {
                    setViaEmail(false);
                     setVerificationPinError(false);
                    setOtpVerifyEmailSignup("")
                     setState({
      country: "",
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      checkbox : false
    });
    window.location.reload()
                    }}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
            <div className="flex flex-col gap-2 mb-3">
              <p className="  lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px] font-[500] lg:font-[700]">
                Verification code has been sent to your email
              </p>
              <p className=" lg:text-[16px] text-[16px] leading-[16px] lg:leading-[20px] font-bold lg:font-[700] mb-[7] lg:mb-[10px]">
               {`${emailBasedOnState.slice(0, 4) }******** ${emailBasedOnState.slice(emailBasedOnState?.length - 9, emailBasedOnState?.length) }`}
              </p>
              </div>
              <div className="flex items-center gap-5">
              <p
                className="text-[#737373] p-2 bg-blue-300 rounded-lg
                lg:text-[14px] font-semibold lg:font-[600]
                 text-[12px] leading-[16px] lg:leading-[18px] cursor-pointer"
                onClick={() => {
                  if(canResend === true ){
                setCountdown(60);
                  setViaEmailOrSms("sms");
                  getOtpSmsorEmail("sms");
                    setVerificationPinError(false);
                  setCanResend(false)
                  }else{
                    setAlertCustom({
                      message : "Retry when the timer elapses",
                      type : "info",
                      show : true
                    })
                  }
                }}
              >
                Use SMS
              </p>

                <p
                className="text-[#737373] p-2 bg-green-300 rounded-lg lg:text-[14px] 
                font-medium lg:font-[600]
                 text-[12px] leading-[16px] lg:leading-[18px] cursor-pointer"
                onClick={() => {
                if(canResend === true){
                  setCountdown(60);
                  setViaEmailOrSms("whatsapp");
                  getOtpSmsorEmail("whatsapp");
                  setVerificationPinError(false);
                  setCanResend(false)
                }else{
                   setAlertCustom({
                      message : "Retry when the timer elapses",
                      type : "info",
                      show : true
                    })
                }
                }}
              >
                Use WhatsApp
              </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-[20px] w-full">
                <div className="flex justify-center">
                  <OtpInput
                    value={otpVerifyEmailSignup}
                    inputType="tel"
                    onChange={setOtpVerifyEmailSignup}
                    numInputs={6}
                    shouldAutoFocus={true}
                    inputStyle={{
                      width: "16.67%",
                      height: "50px",
                    }}
                    renderInput={(props) => (
                      <input
                        type="password"
                        {...props}
                        className="flex h-[35px] md:h-[45px] lg:h-[65px] text-base
                    lg:text-[20px] md:rounded-[12px] rounded-[10px]
                        lg:rounded-[14px] border-2 border-blue-300 lg:mx-2 mx-1 focus:outline-pink-300"
                      />
                    )}
                  />
                </div>
                {/* Error message starts here */}
                {verificationPinError === true ? (
                  <p
                    className="text-center text-[12px] leading-[16px] lg:leading-[20px]
                     text-red-500 md:font-[500] font-[500] 
                    lg:text-[16px]  "
                  >
                    Incorrect otp provided
                  </p>
                ) : (
                  ""
                )}
                {/* Error message ends here */}
                {/* Resend OTP starts here */}

                <div className="w-full flex justify-between">
                  <p className="text-[#04177F] font-[400] lg:font-[600] text-[12.729px] lg:text-[16px]">
                    {countdown}
                    <span>sec</span>
                  </p>
                  {canResend ? (
                    <p
                      className="text-[#04177F] font-[400] lg:font-[600] text-[12.729px] lg:text-[16px] cursor-pointer"
                      onClick={handleResendOTP}
                    >
                      Resend OTP
                    </p>
                  ) : (
                    <p className="text-gray-400 font-[400] lg:font-[600] text-[12.729px] lg:text-[16px] cursor-not-allowed">
                      Resend OTP
                    </p>
                  )}
                </div>

                {/* Resend OTP ends here */}
              </div>

              <div className="w-full flex justify-center mt-[35px] mb-[10px] lg:mb-[10px] lg:mt-[35px]">
                <button
                  onClick={gettingSmsOrEmailFunctionOtp}
                  type="submit"
                  disabled={otpVerifyEmailSignup.length !== 6 ? true : false}
                  className={` ${
                    otpVerifyEmailSignup.length !== 6
                      ? " bg-[#b3b3b3] cursor-not-allowed"
                      : "bg-[#04177F] cursor-pointer"
                  }inline-flex justify-center items-center text-[#fff] text-center font-bold
                 w-full py-[20px] text-[14px] leading-[18px] rounded-[4px]
                  lg:text-[14px] lg:leading-[24px] lg:py-[5px]  lg:w-[140px] 
                   lg:rounded-[7px] lg:px-[37px]
`}
                  // style={{
                  //   backgroundColor: primaryColor,
                  // }}
                >
                  <p> Continue</p>
                </button>
              </div>
            </div>
          </div>
        </Modal>


// OLD
//         <Modal>
//           <div className="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
//     <div className="p-4 flex flex-col gap-[10px] rounded-[8.6px] h-auto w-[100%] bg-white  lg:gap-[18px] 
//     lg:h-[301px] lg:w-[348px] lg:rounded-[15px] lg:">
//       <p className="text-[12px] lg:text-[14px] font-[500] lg:font-[700]">
//         Verification code has been sent to your email
//       </p>
//       <div className="flex flex-col gap-[15px] lg:gap-[28px]">
//         <p
//           onClick={emailorsmsHandler}
//           className="cursor-pointer font-[400] lg:font-[600] hover:underline text-[#737373] text-[10px] lg:text-[12px]"
//         >
//           Use mobile number instead
//         </p>

     
        
//           <div className="flex flex-col gap-[2px] md:gap-[6px]">
//              <OtpInput
//                 value={ otpVerifyEmailSignup}
//                 inputType="tel"
//                 onChange={setOtpVerifyEmailSignup}
//                 numInputs={6}
//                 // onFocus={() => handleFocused_otp()}
//                 // onBlur={() => handleBlur_otp()}
//                 inputStyle={{
//                   color: "#403f3f",
//                   width: 30,
//                   height: 30,
//                   borderRadius: 3,
//                 }}
//                 renderInput={(props) => (
//                   <input 
//                   type="password"
//                   {...props} className="inputOTP text-base mx-[3px] " />
//                 )}/>
//   {/* Error message starts here */}
//   {verificationPinError === true ? (
//                     <p className="text-center text-red-500 md:font-[500] font-[400] lg:text-[16px] text-[9.167px] mt-[3px] lg:mt-[15px]">
//                      Incorrect otp provided
//                     </p>
//                   ) : (
//                     ""
//                   )}


//  <div className="w-[100%] flex justify-between">
//                     <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px]">
//                       {countdown2}
//                       <span>sec</span>
//                     </p>
//                     {canResend2 ? (
//                       <p
//                         className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-pointer"
//                         onClick={handleResendOTP2}
//                       >
//                         Resend OTP
//                       </p>
//                     ) : (
//                       <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-not-allowed">
//                         Resend OTP
//                       </p>
//                     )}
//                   </div>
//           </div>

     

//         <button
//           onClick={gettingSmsOrEmailFunctionOtp}
//           disabled={ otpVerifyEmailSignup.length < 6 ? true : false}
//           className={`${
//              otpVerifyEmailSignup.length < 6 ? "bg-[#0003]" : "bg-[#04177f]"
//           } cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
//             text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%]
//              lg:w-[113px] lg:h-[38px] lg:text-[13px]`}
//         >
//           Continue
//         </button>
//       </div>
//       </div>
//       </div>
    //    </Modal>
      )}

      {viaSms === true && (
//NEW CODE
 <Modal>
          <div
            className="lg:ml-[38.5%] md:ml-[45%] lg:w-[30%] md:w-[45%] md:-mt-[20%]
             lg:-mb-[30%] w-full 
           mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] 
           md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px] relative"
          >
            <div className="flex flex-col gap-[3px] mb-[25px] lg:mb-[30px]">
              <div className="absolute top-4 right-4 ">
                <img
                  onClick={() => {
                    setViaSms(false);
                    setVerificationPinError(false);
                    setOtpVerifySmsSignup("");
                     setState({
              country: "",
            fullName: "",
            userName: "",
               email: "",
              phoneNumber: "",
            password: "",
           confirmPassword: "",
            checkbox : false
    });
    window.location.reload()
                  //  RemoveLocalStorage()
                    }}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
              <h2 className=" lg:text-[16px] font-[500] lg:font-[700] 
              text-[14px] leading-[18px] lg:leading-[20px]">
                Verification code has been sent to your {viaEmailOrSms === "sms" ? "Phone" : "WhatsApp"}
              </h2>
              <p className=" lg:text-[16px]  font-[500] lg:font-[700] text-[14px] mb-[7] lg:mb-[10px]">
                {`${ phoneBasedOnState?.slice(3, 6)}********`}
              </p>
            <div className ="flex gap-5 items-center">
              <p
                className="text-[#737373]   p-2 rounded-lg font-semibold
                 bg-pink-300  lg:font-[600]  lg:text-[14px] text-[12px] cursor-pointer"
                onClick={(e) => {
                  if(canResend === true){
                  setCountdown(60);
                  setViaEmailOrSms("email");
                  getOtpSmsorEmail("email");
                  setViaEmail(true);
                  setViaSms(false);
                  setVerificationPinError(false)
                  setCanResend(false)
                  }else{
                        setAlertCustom({
                      message : "Retry when the timer elapses",
                      type : "info",
                      show : true
                    })
                  }
                }}
              >
                Use email address
              </p>

              {/* WHATSAPP OR SMS */}
               <p
                className={`text-[#737373]  p-2 rounded-lg font-semibold
                  lg:font-[600] ${viaEmailOrSms === "sms" ? "bg-blue-300" : "bg-green-300"}
                 lg:text-[14px] text-[12px] cursor-pointer`}
                onClick={(e) => {
                  if(viaEmailOrSms === "whatsapp" && canResend === true){
                  setCountdown(60);
                  setViaEmailOrSms("whatsapp");
                  getOtpSmsorEmail("whatsapp");
                  setViaEmail(false);
                  setViaSms(true);
                  setVerificationPinError(false)
                  setCanResend(false);
                  }else if(viaEmailOrSms === "sms" && canResend === true){
                  setCountdown(60);
                  setViaEmailOrSms("sms");
                  getOtpSmsorEmail("sms");
                  setViaEmail(false);
                  setViaSms(true);
                  setVerificationPinError(false)
                  setCanResend(false);
                  }else{
                       setAlertCustom({
                      message : "Retry when the timer elapses",
                      type : "info",
                      show : true
                    })
                  }
                }}
              >
               {viaEmailOrSms === "sms" ? "Use Sms" : "Use WhatsApp" }
              </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center gap-[35px] lg:gap-[15px] flex-col w-full">
                <div className="flex justify-center">
                  <OtpInput
                    value={otpVerifySmsSignup}
                    inputType="tel"
                    onChange={setOtpVerifySmsSignup}
                    numInputs={6}
                    shouldAutoFocus={true}
                    inputStyle={{
                      height: "50px",
                      width: "16.67%",
                    }}
                    renderInput={(props) => (
                      <input
                        type="password"
                        {...props}
                        className="flex h-[35px] md:h-[45px] lg:h-[65px] text-base
                lg:text-[20px] md:rounded-[12px] rounded-[10px]
                        lg:rounded-[14px] border-2 border-blue-300 lg:mx-2 mx-1 focus:outline-pink-300"
                      />
                    )}
                  />
                </div>
                {/* Error message starts here */}
                {verificationPinError === true ? (
                  <p
                    className="text-center text-red-500 md:font-[500] 
                    font-[500] lg:text-[16px] text-[12px] leading-[16px] lg:leading-[20px]"
                  >
                    Incorrect otp provided
                  </p>
                ) : (
                  ""
                )}
                {/* Error message ends here */}
                {/* Resend OTP starts here */}

                <div className="w-full flex justify-between">
                  <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[16px]">
                    {countdown}
                    <span>sec</span>
                  </p>
                  {canResend ? (
                    <p
                      className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] md:text-[12px] 
                        lg:text-[16px] cursor-pointer"
                      onClick={handleResendOTP}
                    >
                      Resend OTP
                    </p>
                  ) : (
                    <p
                      className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] md:text-[12px] 
                      lg:text-[16px] cursor-not-allowed"
                    >
                      Resend OTP
                    </p>
                  )}
                </div>

                {/* Resend OTP ends here */}
              </div>

              <div className="w-full flex justify-center mt-[30px] mb-[10px] lg:mb-[10px] lg:mt-[50px]">
                <button
                  onClick={gettingSmsOrEmailFunctionOtp}
                  type="submit"
                  disabled={otpVerifySmsSignup.length !== 6 ? true : false}
                  className={` ${
                    otpVerifySmsSignup.length !== 6
                      ? " bg-[#b3b3b3] cursor-not-allowed"
                      : "bg-[#04177F] cursor-pointer"
                  }  inline-flex justify-center items-center text-[#fff] text-center font-bold
                 w-full py-[20px] text-[14px] leading-[18px] rounded-[4px]
                  lg:text-[14px] lg:leading-[24px] lg:py-[5px]  lg:w-[140px] 
                   lg:rounded-[7px] lg:px-[37px]
`}
                  // style={{
                  //   backgroundColor: primaryColor,
                  // }}
                >
                  <p> Continue</p>
                </button>
              </div>
            </div>
          </div>
        </Modal>


// OLD CODE
      //   <Modal>
      //     <div className ="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
      //  <div className="p-4 flex flex-col gap-[10px] rounded-[8.6px] h-auto w-[100%] bg-white lg:gap-[18px] lg:h-[301px] lg:w-[348px] lg:rounded-[15px] ">
      // <p className="text-[12px] lg:text-[14px] font-[500] lg:font-[700]">
      //   Verification code has been sent to your phone.
      // </p>
      // <div className="flex flex-col gap-[15px] lg:gap-[28px]">
      //   <p
      //     onClick={emailorsmsHandler}
      //     className="cursor-pointer hover:underline font-[400] lg:font-[600] text-[#737373] text-[10px] lg:text-[12px]"
      //   >
      //     Use email address instead
      //   </p>

      //   <div className="flex flex-col gap-[2px] md:gap-[6px]">

      //     <OtpInput
      //           value={otpVerifySmsSignup}
      //           inputType="tel"
      //           onChange={setOtpVerifySmsSignup}
      //           numInputs={6}
      //           inputStyle={{
      //             color: "#403f3f",
      //             width: 30,
      //             height: 30,
      //             borderRadius: 3,
      //           }}
      //           renderInput={(props) => (
      //             <input 
      //             type="password"
      //             {...props} className="inputOTP text-base mx-[3px] " />
      //           )}/>
      
      //  {/* Error message starts here */}
      //  {verificationPinError === true ? (
      //               <p className="text-center text-red-500 md:font-[500] font-[400] lg:text-[16px] text-[9.167px] mt-[3px] lg:mt-[15px]">
      //                Incorrect otp provided
      //               </p>
      //             ) : (
      //               ""
      //             )}
      //             {/* Error message ends here */}

      //               {/* Resend OTP starts here */}

      //               <div className="w-[100%] flex justify-between">
      //               <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px]">
      //                 {countdown}
      //                 <span>sec</span>
      //               </p>
      //               {canResend ? (
      //                 <p
      //                   className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-pointer"
      //                   onClick={handleResendOTP}
      //                 >
      //                   Resend OTP
      //                 </p>
      //               ) : (
      //                 <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-not-allowed">
      //                   Resend OTP
      //                 </p>
      //               )}
      //             </div>

      //             {/* Resend OTP ends here */}
      //     </div>

        
      //   </div>

      //   <button
      //     onClick={gettingSmsOrEmailFunctionOtp}
      //     disabled={otpVerifySmsSignup.length < 6 ? true : false}
      //     className={`${
      //       otpVerifySmsSignup.length < 6 ? "bg-[#0003]" : "bg-[#04177f]"
      //     } cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
      //       text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] 
      //       lg:w-[113px] lg:h-[38px] lg:text-[13px]`}
      //   >
      //     Continue
      //   </button>
      //   </div>
      //   </div>
      //   </Modal>
      )}
   {success && (
        <Modal> 
          <div className="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
           <div className="justify-between text-center border border-[#58DA8F] p-4 flex flex-col
            gap-[5px] rounded-[8.6px] h-auto w-[100%] bg-white  lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
      <div className="flex flex-col gap-[5px]">
        <h1 className="text-[10px] font-[600] lg:font-[700] text-green-500 lg:text-[14px]">Verification Successful</h1>
        <p className="text-[#737373] font-[400] lg:font-[600] text-[10px] lg:text-[12px]">
          Sign in to your account to continue operations!
        </p>
      </div>
      <img
        className="flex justify-center items-center mx-auto w-[60px] h-[60px] md:h-[] lg:w-[110px] lg:h-[110px]"
        src="./Gif/checkMarkGif.gif"
        alt="successful"
      />
      {/* <Link to="/Login"> */}
      <div className="flex w-full justify-center">
      <button
        onClick={redirectHandler}
        className="bg-[#04177f] md:w-[179px]  cursor-pointer mt-[5%]
         w-full py-[16px] flex justify-center font-bold items-center text-[#ffffff] 
            text-[14px] leading-[20px]  lg:font-[600] rounded-md  md:h-[26px] lg:leading-[24px]
             md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[15px]"
      >
        Continue
      </button>
      </div>
      {/* </Link> */}
    </div>
        </div>
        </Modal>
      )}
  {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
     
    </div>
   
    
  );
}
export default Verification;
