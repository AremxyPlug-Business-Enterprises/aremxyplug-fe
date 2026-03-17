import React, { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import CloseIcon from '../EducationPins/imagesEducation/close-circle.svg';
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { GetLocalStorage } from "../LocalStorage/LocalStorage";


function Verification( Data) {
  Data = GetLocalStorage()
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
    emailorsmsHandler, 
     otpVerifyEmailSignup,
    setOtpVerifyEmailSignup, 
    otpVerifySmsSignup,
    setOtpVerifySmsSignup,
    setSuccess,
    state,
    setState
  } = useContext(ContextProvider);
const { phoneNumber, email} = state;
// console.log("Phone:",phoneNumber)
// console.log("Email:", email)



//VerifyViaEmail Authentication ==============
const [loading, setLoading] = useState(false);
const [countdown, setCountdown] = useState(60);
  const [countdown2, setCountdown2] = useState(60);
  const [canResend, setCanResend] = useState(false);
  //const [verificationPinError, setVerificationPinError] = useState(false);
  const [verificationPinError, setVerificationPinError] = useState(false);
  const [canResend2, setCanResend2] = useState(false);

 
// PASSING THE SEND OTP FUNCTION
const getOtpSmsorEmail = async(body, url)=> {
  // const [sendSmsOrEmail, setSendSmsOrEmail] = useState("")
  if(viaEmailOrSms === "sms"){
    const parsedPhone = phoneNumber  ?
   phoneNumber : Data.UserPhone ? Data.UserPhone : "";
    body = {
      phone_number : parsedPhone
    }
    console.log(body);
    url ="https://api.aremxyplug.com/api/v1/sms/send";
  }else if(viaEmailOrSms === "email" ){
   const parsedEmail =   email  ? email : Data.UserEmail ? Data.UserEmail : "";
    body = {
    email : parsedEmail
   }
console.log(body)
   url = "https://api.aremxyplug.com/api/v1/send-otp/signup"
}
if(!navigator.onLine) return alert("Check your internet connection");
 if(navigator.onLine){
  await gettingOtpFunction(body,url)
}}
   //THIS FUNCTION IS TO DERIVE THE OTP FROM THE BACKEND
  const gettingOtpFunction= async(body, url)=> {
    setLoading(true);
    try{
 
    const response = await axios.post(url,body, {headers:{ "Content-Type": "application/json"}})
console.log(url,body)
if(response.status === 200 || 201){
  twoStepVerificationHandler();
 alert("An Otp has been sent to you")
} 
 }catch(error){
  if(error.response && error.response.status === 404){
  alert("ERROR:", "An error occured from your end")
  } else if(error.response && error.response.status === 500){
    alert(`INTERNAL_SERVER_ERROR`)
  }else{
    alert(`ERROR: ${error.message}`)
   //console.log(error)
  }
  }finally{
    setLoading(false);
    setCountdown2(60);
    setCountdown(60)
  }
}

//IF SUCCESSFUL RUN THIS FUNCTION TO CLOSE THE TWO STEP MODAL
function twoStepVerificationHandler() {
 setVerification(false); 
    if(viaEmailOrSms === "sms"){
      setViaSms(true)
    }else{
      setViaEmail(true);
    }
}

const gettingSmsOrEmailFunctionOtp = async(url, body)=> {
  if( viaEmailOrSms === "email"){
     url = `https://api.aremxyplug.com/api/v1/verify-otp/signup?email=${email ? email : Data.UserEmail ? Data.UserEmail : ""}`
       body ={
       otp :otpVerifyEmailSignup
       }
     console.log(otpVerifyEmailSignup);
      }else if(viaEmailOrSms === "sms"){
       url = `https://api.aremxyplug.com/api/v1/sms/verify/signup?phone=${phoneNumber ? phoneNumber : Data.UserPhone ? `${Data.UserPhone}` : ""}`
       body ={
       otp :otpVerifySmsSignup
       }
        }
        console.log(`URL:${url}`,`BODY:${body}`)
        if(!navigator.onLine) return alert("Check your internet connection")
        if(navigator.onLine){
        await VerifyOtpFunction(url, body)
}}



const VerifyOtpFunction = async(url, body)=>{
  setLoading(true);
  try{
 const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json"}})

    if(response.status === 200 || response.status === 201){
      submitVerify()
        localStorage.removeItem("ActiveSignUp");
    } 
  }catch(error){
    if( error.response  && error.response.status === 400){
      setVerificationPinError(true);
     console.log("The Verification failed");
    } if( error.response  && error.response.status === 404){
      alert(`ERROR: ${error.message}`,)
    }else if(error.response &&error.response.status === 500){
      alert("INTERNAL_SERVER_ERROR");
    }else {
      alert("Check your internet connection")
    }
  }finally{
    setLoading(false);
  }
  }








  useEffect(() => {
    if (viaSms === true &&  viaEmailOrSms=== "sms") {
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
  }, [countdown,viaSms, viaEmailOrSms ]);

//SetTimer for Email
  
useEffect(() => {

  if (viaEmail === true && viaEmailOrSms === "email") {
    let timer;
    if (countdown2 > 0) {
      timer = setInterval(() => {
        setCountdown2((prevCountdown2) => prevCountdown2 - 1);
      }, 1000);
    } else {
      setCanResend2(true);
    
    }
return () => clearInterval(timer);
  }
 

}, [countdown2,viaEmail, viaEmailOrSms]);
  // Resend OTP
  const handleResendOTP = () => {
    getOtpSmsorEmail()
    setCanResend(false);
  };
  const handleResendOTP2 = () => {
    getOtpSmsorEmail();
    setCanResend2(false);
    };
  

  const submitVerify = () => {
    setSuccess(true);
      setViaSms(false);
      setViaEmail(false);
      setVerification(false);
      setOtpVerifyEmailSignup('');
      setOtpVerifySmsSignup("")
  };

  //VERIFY_VIA_SMS CODE ================


  //const [verificationSmsCode, setVerificationSmsCode] = useState("");

  

  
//console.log(Data.UserPhone.slice(3));
 


 

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
    });
  
  };

 
  return (
 <div>
 {verification === true && (
    <Modal>
    <div className="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">

      <div className=" p-4 flex flex-col gap-[5px] rounded-[8.6px] h-auto w-[100%] bg-white   lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
        <div className="flex w-full justify-end">
      <img onClick={()=>{
             setVerification(false);
            }}
             src={CloseIcon} className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] " alt="" />  
               </div>
        <p className="text-[10px] font-[500] lg:font-[700] lg:text-[14px] mb-[20px] text-center">
          Select where you prefer to get the verification code.
        </p>
        <div className="flex flex-col gap-[20px] items-center">
          {/* ========Button to verify through SMS====== */}
          
           <div
              onClick={()=>{
                setViaEmailOrSms("sms");
                 console.log(viaEmailOrSms);
              }}
              className={`${viaEmailOrSms === "sms" ? "border-[1px] border-[#d166ff]" :  "border-[1px] border-gray-400" }
                flex h-auto w-[92px] cursor-pointer rounded-[4.5px] p-[7px]   gap-[5px] 
              lg:w-[161px] lg:h-[60px] lg:rounded-[8px]`}
            >
              <img
                className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
                src="./Images/signupimages/sms.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-[10px] lg:text-[12px] font-[400] lg:font-[600]">
                  Via SMS
                  </p>
                <p className="text-[8px] lg:text-[10px] font-[400] lg:font-[600]">
                 {state.phoneNumber.length > 1 ? `${state.phoneNumber.slice(3,6)}*******` :
                  Data.UserPhone ? ` ${Data.UserPhone.slice(3,6)}*******` : ""}
                  </p>
              </div>
            </div>
         

          {/* =========Button to verify through Email====== */}
        
            <div
              onClick={()=>{
                setViaEmailOrSms("email");
                console.log(viaEmailOrSms);
              }}
              
              className={` ${viaEmailOrSms === "email" ? "border-[1px] border-[#d166ff]" : "border-[1px] border-gray-400"}
                flex h-auto w-[92px] cursor-pointer rounded-[4.5px] p-[7px]  gap-[5px]  lg:w-[161px]
               lg:h-[60px] lg:rounded-[8px]`}
            >
              <img
                className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
                src="./Images/signupimages/email.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-[10px] lg:text-[12px] font-[400] lg:font-[600]">Via Email</p>
                <p className="text-[8px] lg:text-[10px] font-[400] lg:font-[600]">
                   {state.email.length > 1 ? `${state.email.slice(0,3)}*******` :
                 Data.UserEmail ? `${Data.UserEmail.slice(0,3)}*******` : "" }</p>
              </div>
            </div>
       

          {/* ==========Continue Button======== */}
          <button
            onClick={getOtpSmsorEmail}
            disabled={viaEmailOrSms=== "" ? true : false}
 className={`${viaEmailOrSms === "" ? "bg-gray-200"  : "bg-blue-800"}
  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
            text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]`}>
            Continue
          </button>
        </div>
      </div>
</div>
</Modal>
 )}
      {/* ========Email verification pop up==== */}
      {viaEmail === true && (
        <Modal>
          <div className="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
    <div className="p-4 flex flex-col gap-[10px] rounded-[8.6px] h-auto w-[100%] bg-white  lg:gap-[18px] 
    lg:h-[301px] lg:w-[348px] lg:rounded-[15px] lg:">
      <p className="text-[12px] lg:text-[14px] font-[500] lg:font-[700]">
        Verification code has been sent to your email
      </p>
      <div className="flex flex-col gap-[15px] lg:gap-[28px]">
        <p
          onClick={emailorsmsHandler}
          className="cursor-pointer font-[400] lg:font-[600] hover:underline text-[#737373] text-[10px] lg:text-[12px]"
        >
          Use mobile number instead
        </p>

     
        
          <div className="flex flex-col gap-[2px] md:gap-[6px]">
             <OtpInput
                value={ otpVerifyEmailSignup}
                inputType="tel"
                onChange={setOtpVerifyEmailSignup}
                numInputs={6}
                // onFocus={() => handleFocused_otp()}
                // onBlur={() => handleBlur_otp()}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input 
                  type="password"
                  {...props} className="inputOTP text-base mx-[3px] " />
                )}/>
  {/* Error message starts here */}
  {verificationPinError === true ? (
                    <p className="text-center text-red-500 md:font-[500] font-[400] lg:text-[16px] text-[9.167px] mt-[3px] lg:mt-[15px]">
                     Incorrect otp provided
                    </p>
                  ) : (
                    ""
                  )}


 <div className="w-[100%] flex justify-between">
                    <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px]">
                      {countdown2}
                      <span>sec</span>
                    </p>
                    {canResend2 ? (
                      <p
                        className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-pointer"
                        onClick={handleResendOTP2}
                      >
                        Resend OTP
                      </p>
                    ) : (
                      <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-not-allowed">
                        Resend OTP
                      </p>
                    )}
                  </div>
          </div>

     

        <button
          onClick={gettingSmsOrEmailFunctionOtp}
          disabled={ otpVerifyEmailSignup.length < 6 ? true : false}
          className={`${
             otpVerifyEmailSignup.length < 6 ? "bg-[#0003]" : "bg-[#04177f]"
          } cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
            text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%]
             lg:w-[113px] lg:h-[38px] lg:text-[13px]`}
        >
          Continue
        </button>
      </div>
      </div>
      </div>
        </Modal>
      )}

      {viaSms === true && (
        <Modal>
          <div className ="w-[100%] mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
       <div className="p-4 flex flex-col gap-[10px] rounded-[8.6px] h-auto w-[100%] bg-white lg:gap-[18px] lg:h-[301px] lg:w-[348px] lg:rounded-[15px] ">
      <p className="text-[12px] lg:text-[14px] font-[500] lg:font-[700]">
        Verification code has been sent to your phone.
      </p>
      <div className="flex flex-col gap-[15px] lg:gap-[28px]">
        <p
          onClick={emailorsmsHandler}
          className="cursor-pointer hover:underline font-[400] lg:font-[600] text-[#737373] text-[10px] lg:text-[12px]"
        >
          Use email address instead
        </p>

        <div className="flex flex-col gap-[2px] md:gap-[6px]">

          <OtpInput
                value={otpVerifySmsSignup}
                inputType="tel"
                onChange={setOtpVerifySmsSignup}
                numInputs={6}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input 
                  type="password"
                  {...props} className="inputOTP text-base mx-[3px] " />
                )}/>
      
       {/* Error message starts here */}
       {verificationPinError === true ? (
                    <p className="text-center text-red-500 md:font-[500] font-[400] lg:text-[16px] text-[9.167px] mt-[3px] lg:mt-[15px]">
                     Incorrect otp provided
                    </p>
                  ) : (
                    ""
                  )}
                  {/* Error message ends here */}

                    {/* Resend OTP starts here */}

                    <div className="w-[100%] flex justify-between">
                    <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px]">
                      {countdown}
                      <span>sec</span>
                    </p>
                    {canResend ? (
                      <p
                        className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-pointer"
                        onClick={handleResendOTP}
                      >
                        Resend OTP
                      </p>
                    ) : (
                      <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-not-allowed">
                        Resend OTP
                      </p>
                    )}
                  </div>

                  {/* Resend OTP ends here */}
          </div>

        
        </div>

        <button
          onClick={gettingSmsOrEmailFunctionOtp}
          disabled={otpVerifySmsSignup.length < 6 ? true : false}
          className={`${
            otpVerifySmsSignup.length < 6 ? "bg-[#0003]" : "bg-[#04177f]"
          } cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
            text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] 
            lg:w-[113px] lg:h-[38px] lg:text-[13px]`}
        >
          Continue
        </button>
        </div>
        </div>
        </Modal>
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
      <div
        onClick={redirectHandler}
        className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
            text-[10px] font-[400] lg:font-[600] rounded-md md:w-[95px] md:h-[26px]
             md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
      >
        Continue
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