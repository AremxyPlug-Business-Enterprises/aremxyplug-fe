import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css"
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";
import axios from "axios";
import CloseIcon from '../EducationPins/imagesEducation/close-circle.svg';
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
//import {  SetLocalStorage } from "../LocalStorage/LocalStorage";
import { RemoveLocalStorage } from "../LocalStorage/LocalStorage";
//import { GetLocalStorage } from "../LocalStorage/LocalStorage";
import { CheckVirtualAcc } from "../ApiCollection.jsx/ApiBuck";
import VerificationSuccess from "../My Profile & Account Settings/ProfileImages/user-tick.svg";
import NotVerifiedImage from "../My Profile & Account Settings/ProfileImages/NotVerifiedIcon.svg";
import { SetLocalStorage } from "../LocalStorage/LocalStorage";
function LoginPopUp() {
 // Data = GetLocalStorage();
  const {
    openTranspin,
    setOpenTranspinSuccessful,
    openTranspinSuccessful,
    openResetTranspin,
    open2StepVerification,
    open2StepOTP,
    setOpen2StepOTP,
    setOpenTranspin,
    setOpenResetTranspin,
    setOpen2StepVerification,
  //  loginAuthorisation,
    setLoginAuthorisation,
    twoStepVerificationSuccess, 
    setTwoStepVerificationSuccess,
    customerDetail,
      setVirtualAccCreated,
      setAccountNumberState,
    setBankNameState,
     setAccountNameState,
     setIdButtonState,
     setBvnButtonState,
     setBvnStatus,
     setIdStatus,
     setVerifyImage,
     setBvnVerifyImage,
     setIdNumber,
     setBvnNumber

} = useContext(ContextProvider);

const {
  email,
  phone
  } = customerDetail;

  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [countdown2, setCountdown2] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [canResend2, setCanResend2] = useState(false);

  const [otp, setOtp] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");

  const [transpinError, setTranspinErrors] = useState("");
  const [verificationPinError, setVerificationPinError] = useState(false);
  const [smsOrEmail, setSmsOrEmail] = useState("");
  
  const navigate = useNavigate();
  // const receiveAuthToken = localStorage.getItem("authorizationToken");
// API fetch function for getting the OTP

   //THIS FUNCTION IS TO DERIVE THE OTP FROM THE BACKEND
  const gettingOtpFunction= async(url, body)=> {

    setLoading(true);
    try{
    
    const response = await axios.post(url,body)

if((response.status === 200 || 201) && (response.headers.hasAuthorization)){
  twoStepVerificationHandler();
 alert("An Otp has been sent to you")
} else if(!response.status){
  alert("Check your network connection");
}
 }catch(error){
  if(error && error.response === undefined){
  alert("Check your internet connection.")
  } else if(error.response && error.response.status === 401){
  console.log(error.response.headers);
        console.log(error.response.headers.get("x-new-auth-token"))
        console.log(error.response.headers["x-new-auth-token"])
        console.log(error.response.headers.hasAuthorization());
        // console.log(error.response.headers.hasAuthorization);
        if(error.response.headers["x-new-auth-token"] === "" || error.response.headers.get("x-new-auth-token") ){
       
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") === "true"){
             console.log(newToken)
        const emailLogin = localStorage.setItem("authorisedLogin", newToken);
            if(emailLogin){
              try{
               await getOtpSmsorEmail();
              }catch{
                alert("Session expired, kindly login again.")
              }
            } else { 
    const smsLogin =  localStorage.setItem("getToken", newToken)
    if(smsLogin){
      try{
        await getOtpSmsorEmail()
      }catch{
        alert("Session expired, kindly login again.")
      }
    }
    }
  }
        }
  } else if(error.response.status === 404){
   alert(`ERROR: ${error.response.data.data.message.toUpperCase()}`)
  } 
  else if(error.response && error.response.status === 500){
    alert(`SERVER ERROR`)
  }else{
    alert("Check your network connection")
  }
  }finally{
    setLoading(false);
    setCountdown2(60);
    setCountdown(60)
  }
}
// Function to help store get the url and send-otp type
const getOtpSmsorEmail = async(url, body)=> {
  // const [sendSmsOrEmail, setSendSmsOrEmail] = useState("")
  if(smsOrEmail === "sms"){
  body = {
    phone_number : phone
  }
  url ="https://aremxyplug.onrender.com/api/v1/sms/send"
 
  }else if(smsOrEmail === "email" ){
    body = {
      email : email
     }
     url = "https://aremxyplug.onrender.com/api/v1/send-otp/signin"
  }
  if(!navigator.onLine) return alert("Check your internet connection");
 if(navigator.onLine){
await  gettingOtpFunction(url,body)
}
}
 // Function to help resetthe login and local storage authToenand getToken to help for User LoogIn
const Close2StepPopUp =()=> {
  setOpen2StepVerification(false)
  setLoginAuthorisation("");
  RemoveLocalStorage();
  localStorage.removeItem("authorisedLogin");
  localStorage.removeItem("getToken");
}






  // FUNCTION TO HANDLE VERIFICATION OF OTP
const handleVerificationOTP = ()=> {
  if (otp3) {
     setVerificationPinError("");  
      setTwoStepVerificationSuccess(true);
    setOtp3("");
     setOpen2StepOTP(false);
    console.log(otp3);
 } 
  }


// Function to help check the verification status of a user
//Verification with Bvn or NiN and if the user has created an account
  const ConfirmVirtualState = async() => {
    const getToken = localStorage.getItem("getToken");
   const authToken = localStorage.getItem("authorisedLogin");
  if (authToken || getToken) {
  const url = 'https://aremxyplug.onrender.com/api/v1/check-verification';
   //
   try{
     setLoading(true);
    const response = await axios.get(url,{headers : {"Content-Type" : "application/json",
    Authorization : authToken || getToken
    }})
  if (response.status === 201 || 200 ) {
   
    console.log(response);
    localStorage.setItem("AccCreated",true);
    const nin = response.data.data.nin;
    const bvn = response.data.data.bvn;
    //console.log(bvn,nin)
  if( !bvn && nin){
  setIdButtonState("Virtual Account Created");
  setVerifyImage(VerificationSuccess);
  setIdStatus("Verified")
  setIdNumber(response.data.data.nin)
  localStorage.setItem("bvnVerification",false);
  localStorage.setItem("idVerification",true);
  }else if(bvn && !nin){
    setBvnButtonState("Virtual Account Created");
    setBvnVerifyImage(VerificationSuccess);
    setBvnStatus("Verified")
    setBvnNumber(response.data.data.bvn)
    localStorage.setItem("bvnVerification",true);
    localStorage.setItem("idVerification",false);
  }else if(bvn && nin){
    setIdButtonState("Virtual Account Created");
  setVerifyImage(VerificationSuccess);
  setIdStatus("Verified")
  setBvnButtonState("Virtual Account Created");
    setBvnVerifyImage(VerificationSuccess);
    setBvnStatus("Verified")
    setBvnNumber(response.data.data.bvn)
    setIdNumber(response.data.data.nin)
    localStorage.setItem("bvnVerification",true);
    localStorage.setItem("idVerification",true);
  }
  }
      } catch(error){
       if(error && (error.response=== undefined)){
    alert("Check your network connection");
 }
   else  if(error.status === 400){
     // alert(`ERROR : ${error}`)
      console.log(error);
     // console.log(error.response.data.message);
      if(error && error.response.data.message === "unverified"){
          setBvnNumber("");
          setIdNumber("");
        localStorage.setItem("idVerification",false);
        localStorage.setItem("bvnVerification",false);
        localStorage.setItem("AccCreated",false);
        setVerifyImage(NotVerifiedImage);
        setBvnVerifyImage(NotVerifiedImage);
        setIdStatus("Not Verified");
        setBvnStatus("Not Verified");
       console.log("ERROR",error.response.data.message)
      }else if(error && error.response.data.message === "action_required"){
        localStorage.setItem("AccCreated", false);
        const bvnCheck = error.response.data.data.bvn;
        
        const ninCheck = error.response.data.data.nin;
        console.log(bvnCheck, ninCheck)
        
        if(bvnCheck && !ninCheck){
          setBvnButtonState("Verified");
          setBvnVerifyImage(VerificationSuccess);
          setBvnStatus("Verified");
            setVerifyImage(VerificationSuccess)
          setIdStatus("Verified");
           setBvnNumber( error.response.data.bvn);
          localStorage.setItem("bvnVerification",true);
          localStorage.setItem("idVerification",true);
          // setIdButtonState("Verify");
          // setVerifyImage(NotVerifiedImage)
          // setIdStatus("Not Verified");
         
        }else if(ninCheck && !bvnCheck){
           setIdButtonState("Verified");
           setBvnButtonState("Verified");
          setBvnVerifyImage(VerificationSuccess);
          setBvnStatus("Verified");
          setVerifyImage(VerificationSuccess)
          setIdStatus("Verified");
          setIdNumber( error.response.data.nin);
          localStorage.setItem("idVerification",true);
          localStorage.setItem("bvnVerification",true);
          // setBvnButtonState("Verify");
          // setBvnVerifyImage(NotVerifiedImage)
          // setBvnStatus("Not Verified")
          // setIdButtonState("Verified");
          //  setBvnButtonState("Verified");
          // setBvnVerifyImage(VerificationSuccess);
          // setBvnStatus("Verified");
          // setVerifyImage(VerificationSuccess)
          // setIdStatus("Verified");
          // setIdNumber( error.response.data.nin);
          // localStorage.setItem("idVerification",true);
          // localStorage.setItem("bvnVerification",true)
        
        } else if(bvnCheck && ninCheck) {
          setBvnButtonState("Create Virtual Account");
          setBvnVerifyImage(VerificationSuccess)
          setBvnStatus("Verified");
          setIdButtonState("Create Virtual Account");
          setVerifyImage(VerificationSuccess)
          setIdStatus("Verified");
          setBvnNumber(error.response.data.bvn);
          setIdNumber(error.response.data.nin);
          localStorage.setItem("idVerification",true);
          localStorage.setItem("bvnVerification",true);
        }
      }

      }else if (error && error.status === 404){
        alert("Network Error:, Please Check your Connection and try again");
      }else if(error && error.status === 401){
    
        console.log(error.response.headers);
        console.log(error.response.headers.get("x-new-auth-token"))
        console.log(error.response.headers["x-new-auth-token"])
        console.log(error.response.headers.hasAuthorization());
        // console.log(error.response.headers.hasAuthorization);
        if(error.response.headers["x-new-auth-token"] === "" || error.response.headers.get("x-new-auth-token") ){
       
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
         if(newToken !== "" && localStorage.getItem("authorisedLogin") === "true"){
             console.log(newToken)
        const emailLogin = localStorage.setItem("authorisedLogin", newToken);
            if(emailLogin){
            try {
              await ConfirmVirtualState()
            }catch{
              alert("Your Session has expired, kindly login again")
            }
            } 
      }else if(newToken !== "" && localStorage.getItem("getToken") === "true"){
        const smsLogin = localStorage.setItem("getToken", newToken)
        if(smsLogin) {
         try{
          await ConfirmVirtualState()
         }catch{
          alert("Your Session has expired, kindly login again")
         }
        } 
    }
  }
} else if(error.status === 500){
        alert('Error:', "A SERVER ERROR");
     }else if(error.status === undefined){
    alert("Check your internet connection and try logging in again.");
 }else{
      alert("Check your internet connection and try logging in again.");
      //Create a pop up to assist the user into navigating back to the login page.
   }}finally{
       setLoading(false);
      }
    }}
  
    

  //Function to help set the user's account details such as bank name, 
  //account name and account Number
const handleAccountDetails = async(AuthUsed)=> {
  const authToken = localStorage.getItem("authorisedLogin");
  const getToken = localStorage.getItem("getToken")
  AuthUsed = authToken || getToken;
//   const {bank_name, account_no, account_name} = virtualAccCreated
//  // console.log(virtualAccCreated);

//   if(virtualAccCreated){
//   // setTwoStepVerificationSuccess(false);
//     SetLocalStorage(email, full_name,phone, username, bank_name, account_name, account_no, id);
//      GetVirtualAccountValue(bank_name, account_name, account_no);
 
      await CheckVirtualAcc( AuthUsed, customerDetail, setLoading, setVirtualAccCreated, 
        setBankNameState, setAccountNameState, setAccountNumberState,twoStepVerificationSuccess, setTwoStepVerificationSuccess,
         ConfirmVirtualState);
         console.log(twoStepVerificationSuccess)
         if(CheckVirtualAcc){
      navigate("/dashboard");
       document.cookie = `sessionToken=${AuthUsed}; path=/; max-age=900`;
      //   }
         }
  }



// THE FUNCTION FOR DERIVING THE GET OPT METHOD
const gettingSmsOrEmailFunctionOtp = async(url, body)=> {
  if( smsOrEmail === "email"){
     url = `https://aremxyplug.onrender.com/api/v1/verify-otp/signin?email=${email}`
       body ={
       otp : otp3
       }
     console.log(otp3);
      }else if(smsOrEmail === "sms"){
       url = `https://aremxyplug.onrender.com/api/v1/sms/verify/signin?phone=${phone}`
       body ={
       otp :otp3
       }
       console.log(otp3);
        }
        console.log(`URL:${url}`,`BODY:${body}`)
        if(!navigator.onLine) return alert("Check your internet connection")
        if(navigator.onLine){
        await VerifyOtpFunction(url, body)
        }
}




  //Verification of the otp
  const VerifyOtpFunction = async(url, body)=>{
    setLoading(true);
    try{
     const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json"}})
      if(response.status === 200 || 201){
        handleVerificationOTP();
         } 
    }catch(error){
      if( error && error.response ===  undefined){
           alert("Check your network connection");
         }else if( error && error.response.status === 400){
        setVerificationPinError(true);
        console.log("The Verification failed");
      }else if(error.response.status === 404){
     setVerificationPinError(true);
      alert("OOPs, an error has occured");
      
    }else if(error && error.response.status === 401){
    console.log(error.response.headers);
        console.log(error.response.headers.get("x-new-auth-token"))
        console.log(error.response.headers["x-new-auth-token"])
        console.log(error.response.headers.hasAuthorization());
        // console.log(error.response.headers.hasAuthorization);
        if(error.response.headers["x-new-auth-token"] === "" || error.response.headers.get("x-new-auth-token") ){
       
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") === "true"){
             console.log(newToken)
        const emailLogin = localStorage.setItem("authorisedLogin", newToken);
            if(emailLogin){
              try{
               await gettingSmsOrEmailFunctionOtp();
              }catch{
                alert("Session expired, kindly login again.")
              }
            } else { 
    const smsLogin =  localStorage.setItem("getToken", newToken)
    if(smsLogin){
      try{
        await  gettingSmsOrEmailFunctionOtp()
      }catch{
        alert("Session expired, kindly login again.")
      }
    }
    }
  }
        }
    }
    else if(error.response && error.response.status === 500){
        alert("SERVER ERROR");
      }else{
        alert("Check your network connection");
      }
    }finally{
      setLoading(false);
    }
    }




 useEffect(() => {
    if (open2StepOTP === true && smsOrEmail === "sms") {
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
  }, [countdown, open2StepOTP, smsOrEmail]);

//SetTimer for Email
useEffect(() => {
  if (open2StepOTP === true && smsOrEmail === "email") {
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
}, [countdown2, open2StepOTP, smsOrEmail]);

  const handleResendOTP = () => {
    if(!navigator.onLine) return alert("Check your internet connection.")
    if(navigator.onLine){
    getOtpSmsorEmail();
    setCanResend(false);
    setVerificationPinError("")
    }
  };

  const handleResendOTP2 = () => {
    if(!navigator.onLine) return alert("Check your internet connection.")
    if(navigator.onLine){
    getOtpSmsorEmail()
    setCanResend2(false);
    setVerificationPinError("")
    }
  };

  function HandleTranspin () {
    if(!navigator.onLine) return alert("Check your internet connection.")
    if (otp === otp2 && navigator.onLine) {
     SendTransactPin()
     setTranspinErrors("");
     setOpenTranspin(false);
     setOtp("");
     setOtp2("");
     localStorage.setItem("userTransactionOtp", otp);
 } else {
      setTranspinErrors("Pin does not match!");
    }
  }

//THE FUNCTION TO OPEN VERIFICATION POPUP FOR EITHER SMS OR EMAIL
  function twoStepVerificationHandler() {
    setOpen2StepVerification(false); 
    setOpen2StepOTP(true);
  }


   const SetLocalStorageInputPin = ()=> {
    setLoading(true)
    if(customerDetail){
     const {email, full_name, phone, username, id} = customerDetail;
     const bank_name = "";
     const account_name = "";
     const account_no = "";
     SetLocalStorage(email,full_name,phone, username, bank_name, account_name, account_no ,id)
    if(SetLocalStorage){
      localStorage.setItem("UserStatus", true);
      navigate("/dashboard")
      setLoading(false);
         setBvnNumber("");
          setIdNumber("")
      }
    }
  }
  //THE FUNCTION BELOW HELPS TO SEND THE USER's TRANSACTION PIIN TO THE BACKEND
  const SendTransactPin = async()=>{
    const getToken = localStorage.getItem("getToken");
    const authToken = localStorage.getItem("authorisedLogin")
    if(!navigator.onLine) return alert("Check your internet connection")
   if((authToken || getToken) && navigator.onLine){
    setLoading(true)
  try{
   const forwardPin ={
    pin: otp
   }
   const DataJson = JSON.stringify(forwardPin)
   console.log(DataJson);
   const response = await axios.post("https://aremxyplug.onrender.com/api/v1/pin",DataJson,{headers: {"Content-Type" : "application/json",
        Authorization : getToken || authToken
      }})
      if(response.status === 200|| 201){
      console.log(response);
      SetLocalStorageInputPin()
        // navigate("/dashboard");
      }else {
        alert("Check your Network Connection")
      }
    
  }
    catch(error){
      if(error && error.response === undefined){
        alert("Check your internet connection");
      } if(error && error.response.status === 401){
      
           console.log(error.response.headers);
        console.log(error.response.headers.get("x-new-auth-token"))
        console.log(error.response.headers["x-new-auth-token"])
        console.log(error.response.headers.hasAuthorization());
        // console.log(error.response.headers.hasAuthorization);
        if(error.response.headers["x-new-auth-token"] === "" || error.response.headers.get("x-new-auth-token") ){
       
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") === "true"){
             console.log(newToken)
        const emailLogin = localStorage.setItem("authorisedLogin", newToken);
            if(emailLogin){
              try{
               await SendTransactPin();
              }catch{
                alert("Session expired, kindly login again.")
              }
            } else { 
    const smsLogin =  localStorage.setItem("getToken", newToken)
    if(smsLogin){
      try{
        await SendTransactPin()
      }catch{
        alert("Session expired, kindly login again.")
      }
    }
    }
  }
        }
        }else if(error && error.response.status === 404){
          alert(`Please check your internet connection`);
        } else if(error && error.response.status === 500){
          alert(`Server error : Please try again later`);
        }else{
          alert("Check your network Connection");
        }
          //alert(error.response.data.message)
        }
      finally{
      setLoading(false);
    }
  }
  }
 
 


//console.log(GetLocalStorage());
  return (
    <div>
      {/* FORM OVERLAY AND 2 STEP VERIFICATION */}
      {open2StepVerification === true && (
        <Modal>
          <div className="w-[100%]  mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
          <div className=" p-4 flex flex-col gap-[5px] rounded-[8.6px] h-auto w-[100%] bg-white
             lg:h-auto lg:w-[35%] lg:rounded-[15px]">
            <div 
            className="w-[100%] flex justify-end ">
            <img onClick={()=>(
             Close2StepPopUp()
      )}
             src={CloseIcon} className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] " alt="" />  
               </div>
            <div className="mb-[25px] lg:mb-[30px]">
              <p className="text-center text-[12px] lg:text-[16px] font-[500] lg:font-[700]  mb-[7] lg:mb-[10px]">
                2-Step Verification!!!
              </p>
              <p className="text-center text-gray-500 font-[400] lg:font-[500] lg:text-[14px] text-[10px]">
                To ensure a safety security of your account, we want to verify
                it’s really you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* VIA SMS STARTS HERE*/}
              <div
                className="flex items-center  h-auto w-[92px] cursor-pointer rounded-[4.5px] p-[7px]   gap-[5px] 
                lg:rounded-[8px] lg:w-[161px] lg:h-[60px] "
                onClick={() => setSmsOrEmail("sms")}
                style={{
                  borderWidth: 1,
                  borderColor: smsOrEmail === "sms" ? "#d166ff" : "#b3b3b3",
                }}
              >
                <img
                  className="w-[22px] h-[22px] lg:w-[25px] lg:h-[25px]"
                  src="./Images/signupimages/sms.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[10px] lg:text-[14px] font-[400] lg:font-[600]">Via SMS</p>
                  <p className="text-[8px] lg:text-[12px] text-gray-500 font-[400] lg:font-[600]">
                    {`${phone.slice(0,3)}***${phone.slice(10)}`}
                    </p>
                </div>
              </div>
              {/* VIA SMS ENDS HERE*/}
              {/* VIA Email STARTS HERE*/}
              <div
                className=" flex items-center mt-[17px]  w-[92px] cursor-pointer rounded-[4.5px] 
               h-auto p-[7px] gap-[5px] lg:w-[161px] lg:h-[60px] lg:rounded-[8px]"
                onClick={() => {
                  setSmsOrEmail("email");
                  console.log(customerDetail);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: smsOrEmail === "email" ? "#d166ff" : "#b3b3b3",
                }}
              >
                <img
                  className="w-[22px] h-[22px] lg:w-[25px] lg:h-[25px]"
                  src="./Images/signupimages/email.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[10px] lg:text-[14px] font-[400] lg:font-[600]"> Via Email</p>
                  <p className="text-[8px] lg:text-[12px]  text-gray-500 font-[400] lg:font-[600]">{`${email.slice(0,3)}****** ${email.slice(15)}`}</p>
                </div>
              </div>
              {/* VIA Email ENDS HERE*/}

              <div className="w-full flex justify-center mt-[30px] md:mt-[35px] lg:mt-[50px]">
                <button
                  onClick={getOtpSmsorEmail}
                  type="submit"
                  disabled={smsOrEmail === "" ? true : false}
                  className={` ${
                    smsOrEmail === ""
                      ? " bg-[#b3b3b3] cursor-not-allowed"
                      : "bg-[#04177F] cursor-pointer"
                  } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
                >
                  <p> Signin</p>
                </button>
              </div>
            </div>
          </div>
          </div>
        </Modal>
      )}

      {/* FORM OVERLAY AND 2 STEP VERIFICATION ENDS HERE*/}

      {/* FORM OVERLAY AND TRANSACTION PIN INPUT STARTS HERE */}
      {openTranspin === true && (
        <Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] md:-mt-[20%] lg:-mb-[30%] px-[17.609px] py-[35.536px]
           bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
            <p className="lg:text-[16px] text-[9.167px] text-[#000] mb-[30px] text-center">
              Create your transaction pin to continue operations!
            </p>
            <p className="lg:text-[16px] font-[600] text-[9.167px] text-[#000] my-4 text-center">
              Input pin
            </p>

            {/* TRANSACTION PIN INPUT STARTS HERE */}
            <div className="flex justify-center">
              <OtpInput
                value={otp}
                inputType="tel"
                onChange={setOtp}
                numInputs={4}
                shouldAutoFocus={true}

                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input 
                  
                  {...props} className="inputOTP mx-[3px]" />
                )}
              />
            </div>
            {/* TRANSACTION PIN INPUT ENDS HERE */}

            <p className="lg:text-[16px] text-[9.167px] text-[#000] my-4 text-center">
              Confirm pin
            </p>

            {/* TRANSACTION CONFIRM PIN STARTS HERE */}
            <div className="flex justify-center ">
              <OtpInput
                value={otp2}
                inputType="tel"
                onChange={setOtp2}
                numInputs={4}
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
                  {...props} className="inputOTP mx-[3px]"/>
                )}
              />
            </div>
            {/* TRANSACTION CONFIRM PIN ENDS HERE */}
            {transpinError.length > 0 ? (
              <p className="text-center text-red-500 lg:text-[16px] text-[9.167px] mt-[3px] mb-[-10px] lg:mb-[-15px] lg:mt-[15px]">
                {transpinError}
              </p>
            ) : (
              ""
            )}
            <div className="w-full flex justify-center mt-[20px] mb-[10px] lg:mb-[10px] lg:mt-[50px]">
              <button
                onClick={HandleTranspin}
                 type="submit"
                disabled={otp.length !== 4 || otp2.length !== 4 ? true : false}
                className={` ${
                  otp.length !== 4 || otp2.length !== 4
                    ? " bg-[#b3b3b3] cursor-not-allowed"
                    : "bg-[#04177F] cursor-pointer"
                } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
              
              >
                <p> Create</p>
              </button>
            </div>

           
          </div>
        </Modal>
      )}
      {/* FORM OVERLAY AND CHILD TRANSACTION PIN ENDS HERE*/}

      {/* FORM OVERLAY AND 2 STEP OTP VERIFICATION STARTS HERE*/}

      {open2StepOTP === true && smsOrEmail === "sms" && (
        <Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] md:w-[30%] md:-mt-[20%] lg:-mb-[30%] w-[100%] 
           mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] 
           md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px]">
            <div className="mb-[25px] lg:mb-[30px]">
              <p className=" lg:text-[16px] font-[500] lg:font-[700] text-[12px] ">
                Verification code has been sent to your phone
              </p>
              <p className=" lg:text-[16px] font-[500] lg:font-[700] text-[12px] mb-[7] lg:mb-[10px]">
              {`${phone.slice(3,6)}********`}
              </p>
              <p
                className="text-[#737373] font-[400] lg:font-[600] lg:text-[14px] text-[12px] cursor-pointer"
                onClick={() => {
                  setCountdown2(60);
                  setSmsOrEmail("email");
                }}
              >
                Use email address instead
              </p>
            </div>
            <div>
              <div className="flex justify-center gap-[10px] flex-col w-[100%]">
               <div className="flex justify-center">
                  <OtpInput
                    value={otp3}
                    inputType="tel"
                    onChange={setOtp3}
                    numInputs={6}
                    shouldAutoFocus={true}
                    inputStyle={{
                      width  : "16.67%",
                    }}
                    renderInput={(props) => (
                      <input
                      type="password"
                      {...props} className="flex h-[35px] md:h-[45px] lg:h-[65px] text-[12px]
                   md:text-[14px] lg:text-[20px] md:rounded-[12px] rounded-[10px]
                        lg:rounded-[14px] border-2 border-blue-300 lg:mx-2 mx-1 focus:outline-pink-300"/>
                    )}
                  />
                </div>
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
                      <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] md:text-[12px] 
                      lg:text-[16px] cursor-not-allowed">
                        Resend OTP
                      </p>
                    )}
                  </div>

                  {/* Resend OTP ends here */}
                </div>
              

              <div className="w-full flex justify-center mt-[20px] mb-[10px] lg:mb-[10px] lg:mt-[50px]">
                <button
                  onClick={gettingSmsOrEmailFunctionOtp}
                  type="submit"
                  disabled={otp3.length !== 6 ? true : false}
                  className={` ${
                    otp3.length !== 6
                      ? " bg-[#b3b3b3] cursor-not-allowed"
                      : "bg-[#04177F] cursor-pointer"
                  } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
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
      )}
      {open2StepOTP === true && smsOrEmail === "email" && (
        <Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] lg:w-[30%] md:w-[35%] md:-mt-[20%] lg:-mb-[30%] w-[100%] 
           mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] 
           md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px]">
            <div className="mb-[25px] lg:mb-[30px]">
              <p className="  lg:text-[16px] text-[14px] font-[500] lg:font-[700]">
                Verification code has been sent to 
              </p>
              <p className=" lg:text-[16px] text-[12px] font-[500] lg:font-[700] mb-[7] lg:mb-[10px]">
                your email  {`${email.slice(0,3)}********`}
              </p>
              <p
                className="text-[#737373] lg:text-[14px] font-[400] lg:font-[600] text-[10px] cursor-pointer"
                onClick={() => {
                  setCountdown(60);
                  setSmsOrEmail("sms");
                }}
              >
                Use phone number instead
              </p>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-[10px] w-[100%]">
                <div className="flex justify-center">
                  <OtpInput
                    value={otp3}
                    inputType="tel"
                    onChange={setOtp3}
                    numInputs={6}
                    shouldAutoFocus={true}
                    inputStyle={{
                     width : "16.67%",
                    }}
                    renderInput={(props) => (
                      <input 
                      type="password"
                      {...props} className="flex h-[35px] md:h-[45px] lg:h-[65px] text-[12px]
                   md:text-[14px] lg:text-[20px] md:rounded-[12px] rounded-[10px]
                        lg:rounded-[14px] border-2 border-blue-300 lg:mx-2 mx-1 focus:outline-pink-300" />
                    )}
                  />
                  </div>
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
                    <p className="text-[#04177F] font-[400] lg:font-[600] text-[12.729px] lg:text-[16px]">
                      {countdown2}
                      <span>sec</span>
                    </p>
                    {canResend2 ? (
                      <p
                        className="text-[#04177F] font-[400] lg:font-[600] text-[12.729px] lg:text-[16px] cursor-pointer"
                        onClick={handleResendOTP2}
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

              <div className="w-full flex justify-center mt-[20px] mb-[10px] lg:mb-[10px] lg:mt-[35px]">
          
                <button
                  onClick={gettingSmsOrEmailFunctionOtp}
                  type="submit"
                  disabled={otp3.length !== 6 ? true : false}
                  className={` ${
                    otp3.length !== 6
                      ? " bg-[#b3b3b3] cursor-not-allowed"
                      : "bg-[#04177F] cursor-pointer"
                  } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
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
      )}

      {/* FORM OVERLAY AND 2 STEP OTP VERIFICATION ENDS HERE*/}

      {/* FORM OVERLAY AND TRANSACTION PIN SUCCESSFUL HERE */}
      {openTranspinSuccessful === true && (
        <Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] md:-mt-[20%] lg:-mb-[30%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
            <div>
              <div className="flex justify-center">
                <div className="flex w-[75%] ">
                  <p className="lg:text-[14px] font-[500] lg:font-[700] text-[12.021px]  text-[#000] mb-[30px]">
                    You have successfully created your transaction pin.
                  </p>

                  <img
                    className="lg:w-[50px] lg:h-[50px] w-[32px] h-[32px] "
                    src="./Gif/checkMarkGif.gif"
                    alt="thumbsUpGif"
                  />
                </div>
              </div>
              {/* <Link to="/"> */}
              <div className="w-full flex justify-center mt-[20px]  lg:mt-[50px]">
                <Link to="/dashboard">
                  <div
                    onClick={() => setOpenTranspinSuccessful(false)}
                    className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    <p> Done</p>
                  </div>
                </Link>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </Modal>
      )}
      {/* FORM OVERLAY AND TRANSACTION PIN SUCCESSFUL ENDS HERE*/}
  {/*TRANSACTION SUCCESSFUL MODAL STARTS HERE */}
  {twoStepVerificationSuccess === true && (
        <Modal>
          <div className="flex flex-col lg:items-center  lg:mx-[0px] mx-[20px] w-[100%] md:w-[30%]  px-[20px]
           py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] ">
            
                <div className="flex flex-col items-center w-[100%] ">
                  <p className="lg:text-[14px] font-[500]  text-[12.021px]  text-green-500 mb-[30px]">
                    Verification Successful.
                  </p>

                  <img
                    className="lg:w-[50px] lg:h-[50px] w-[32px] h-[32px]"
                    src="./Gif/checkMarkGif.gif"
                    alt="thumbsUpGif"
                  />
                </div>
           
              {/* <Link to="/"> */}
               <div className="w-[100%] flex justify-center">
                  <div onClick={() =>handleAccountDetails()}
                   className="flex w-[100%] lg:w-[50%]  rounded-[8px] lg:rounded-[16px]
                mt-[20px] justify-center  lg:mt-[50px]  cursor-pointer text-[10px] font-bold leading-[11.31px] 
                     py-[14px]   lg:py-[15px] lg:text-[14px]"  style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    <p className="text-[12px] text-white lg:text-[16px] text-center"> 
                      Okay
                      </p>
                  </div>
                </div>
              
              {/* </Link> */}
        
          </div>
        </Modal>
      )}
 {/*TRANSACTION SUCCESSFUL MODAL STOPS HERE */}

      {/* FORM OVERLAY AND RESET TRANSACTION PIN  HERE */}
      {openResetTranspin === true && (
<Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] md:-mt-[20%] lg:-mb-[30%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
            <div>
              <div className="flex justify-center">
                <div className="w-[80%]">
                  <p className="lg:text-[16px] text-[9.167px] text-center  text-[#000] mb-[25px]">
                    We notice you just reset your password.
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] text-center">
                    We recommend you to reset your
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] mb-[30px] text-center">
                    transaction pin for security purpose.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center lg:mt-[50px]">
                <div
                  onClick={() => setOpenResetTranspin(false)}
                  className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <p>Reset</p>
                </div>
              </div>
              <p
                onClick={() => setOpenResetTranspin(false)}
                className="text-[#f95252] text-[6.875px] tracking-wider md:text-[12px]  text-center mt-[15px] font-semibold cursor-pointer"
              >
                Cancel
              </p>
            </div>
          </div>
          </Modal>     
      )}
      {/* FORM OVERLAY AND RESET TRANSACTION PIN ENDS HERE*/}


      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </div>
  );
}

export default LoginPopUp;

