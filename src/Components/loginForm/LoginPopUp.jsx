import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";
import axios from "axios";
import CloseIcon from "../EducationPins/imagesEducation/close-circle.svg";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { RemoveLocalStorage } from "../LocalStorage/LocalStorage";
import { CheckVirtualAcc, PostFunction, refreshToken } from "../ApiCollection.jsx/ApiBuck";
import VerificationSuccess from "../My Profile & Account Settings/ProfileImages/user-tick.svg";
import NotVerifiedImage from "../My Profile & Account Settings/ProfileImages/NotVerifiedIcon.svg";
import { SetLocalStorage } from "../LocalStorage/LocalStorage";
//import { GetLocalStorage } from "../LocalStorage/LocalStorage";

function LoginPopUp() {

  const {
    setOpenTaskBar,
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
    setBvnNumber,
    setNetworkIssue
  } = useContext(ContextProvider);

  const { email, phone } = customerDetail;
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
  const gettingOtpFunction = async (url, body) => {
    setLoading(true);
    try {
      const response = await axios.post(url, body);

      if (
        (response.status === 200 || response.status === 201) &&
        response.headers.hasAuthorization
      ) {
        twoStepVerificationHandler();
        alert("An Otp has been sent to you");
      } else if (!response.status) {
        alert("Check your network connection");
      }
    } catch (error) {
      if (error && error.response === undefined) {
        alert("Check your internet connection.");
      } else if (error.response && error.response.status === 401) {
        alert("You were timed out")
         setOpen2StepVerification(false)
      } else if (error.response.status === 404) {
        alert(`ERROR: Not Found`);
      } else if (error.response && error.response.status === 500) {
        alert(`SERVER ERROR`);
      } else {
        alert("Check your network connection");
      }
    } finally {
      setLoading(false);
      setCountdown2(60);
      setCountdown(60);
    }
  };

  // Function to help store get the url and send-otp type
  const getOtpSmsorEmail = async (paramSmsOrEmail) => {
    // const [sendSmsOrEmail, setSendSmsOrEmail] = useState("")
    const holdOtpDetails = async(url, body)=> {

      //The 2 Step OTP to select without the function of getOtpSmsOrEmail
    
      //Without the 2Step which triggers the function without the getOtpSmsOrEmail
    if ( paramSmsOrEmail === "sms") {
       body = {
        phone_number: phone,
      };
      url = "https://api.aremxyplug.com/api/v1/sms/send";
    } else if ( paramSmsOrEmail === "email") {
      body = {
        email: email,
      };
      url = "https://api.aremxyplug.com/api/v1/send-otp/signin";
    }
    if (!navigator.onLine) return alert("Check your internet connection");
    if(paramSmsOrEmail === undefined) alert("Select medium to receive your otp")
    if (navigator.onLine && paramSmsOrEmail !== undefined) {
      await gettingOtpFunction(url, body);
    }
   
  }
  holdOtpDetails();
  };
  // Function to help resetthe login and local storage authToenand getToken to help for User LoogIn
  const Close2StepPopUp = () => {
    setOpen2StepVerification(false);
    RemoveLocalStorage();
    localStorage.removeItem("xcss{}");
    localStorage.removeItem("xcss[]");
  };

  // FUNCTION TO HANDLE VERIFICATION OF OTP
 

  const handleVerificationOTP = () => {
      setVerificationPinError("");
      setTwoStepVerificationSuccess(true);
     //
      setOtp3("");
      setOpen2StepOTP(false);
  };

  // Function to help check the verification status of a user
  //Verification with Bvn or NiN and if the user has created an account
  const ConfirmVirtualState = async () => {
    const url = "https://api.aremxyplug.com/api/v1/check-verification";
      //
      try {
        setLoading(true);
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
       
          }, withCredentials : true
        });
        if (response.status === 201 || response.status === 200) {
          localStorage.setItem("80pcs", true);
          const nin = response?.data?.data?.nin;
          const bvn = response?.data?.data?.bvn;
          
          if (!bvn && nin) {
            setIdButtonState("Verified");
            setVerifyImage(VerificationSuccess);
            setIdStatus("Verified");
            setIdNumber(response.data.data.nin);
            localStorage.setItem("Zxfer", true);
            localStorage.setItem("Qhfde", true);
          } else if (bvn && !nin) {
            setBvnButtonState("Verified");
            setBvnVerifyImage(VerificationSuccess);
            setBvnStatus("Verified");
            setBvnNumber(response?.data?.data?.bvn);
 localStorage.setItem("Zxfer", true);// Bvn Verification
            localStorage.setItem("Qhfde", true);//Id Verfication
          } else if (bvn && nin) {
            setIdButtonState("Verified");
            setVerifyImage(VerificationSuccess);
            setIdStatus("Verified");
            setBvnButtonState("Virtual Account Created");
            setBvnVerifyImage(VerificationSuccess);
            setBvnStatus("Verified");
            setBvnNumber(response?.data?.data?.bvn);
            setIdNumber(response?.data?.data?.nin);
            localStorage.setItem("Zxfer", true);// Bvn Verification
            localStorage.setItem("Qhfde", true); // Id Verification
          }
        }
      } catch (error) {
        if (error && error.response === undefined) {
          alert("Check your network connection");
        } else if (error.response.status === 400) {
      
        
          if (error && error?.response?.data?.message === "unverified") {
            setBvnNumber("");
            setIdNumber("");
             localStorage.setItem("Zxfer", false);// Bvn Verification
            localStorage.setItem("Qhfde",false); // Id Verification
            localStorage.setItem("80pcs", false);
            setVerifyImage(NotVerifiedImage);
            setBvnVerifyImage(NotVerifiedImage);
            setIdStatus("Not Verified");
            setBvnStatus("Not Verified");
            setBvnButtonState("Verify");
            setIdButtonState("Verify");
          } else if (
            error &&
            error?.response?.data?.message === "action_required"
          ) {
            localStorage.setItem("80pcs", false);
            const bvnCheck = error?.response?.data?.data?.bvn;

            const ninCheck = error?.response?.data?.data?.nin
              if (bvnCheck && !ninCheck) {
              setBvnButtonState("Verified");
              setBvnVerifyImage(VerificationSuccess);
              setBvnStatus("Verified");
              setVerifyImage(VerificationSuccess);
              setIdStatus("Verified");
              setBvnNumber(error?.response?.data?.bvn);
                localStorage.setItem("Zxfer", true);// Bvn Verification
            localStorage.setItem("Qhfde", true); // Id Verification
              // setIdButtonState("Verify");
              // setVerifyImage(NotVerifiedImage)
              // setIdStatus("Not Verified");
            } else if (ninCheck && !bvnCheck) {
              setIdButtonState("Verified");
              setBvnButtonState("Verified");
              setBvnVerifyImage(VerificationSuccess);
              setBvnStatus("Verified");
              setVerifyImage(VerificationSuccess);
              setIdStatus("Verified");
              setIdNumber(error?.response?.data?.nin);
               localStorage.setItem("Zxfer", true);// Bvn Verification
            localStorage.setItem("Qhfde", true); // Id Verification
            } else if (bvnCheck && ninCheck) {
              setBvnButtonState("Verified");
              setBvnVerifyImage(VerificationSuccess);
              setBvnStatus("Verified");
              setIdButtonState("Verified");
              setVerifyImage(VerificationSuccess);
              setIdStatus("Verified");
              setBvnNumber(error?.response?.data?.bvn);
              setIdNumber(error?.response?.data?.nin);
           localStorage.setItem("Zxfer", true);// Bvn Verification
            localStorage.setItem("Qhfde", true); // Id Verification
            }
          }
        } else if (error && error.response.status === 404) {
          alert("Network Error:, Please Check your Connection and try again");
        } else if (error && error.response.status === 401) {
        setTwoStepVerificationSuccess(false);
        } else if (error.response.status === 500) {
          alert('An error occured while trying to confirm your details');
         return window.location.href = "/Login";
        } else {
          alert("Check your internet connection and try logging in again.");
          //Create a pop up to assist the user into navigating back to the login page.
        }
      } finally {
        setLoading(false);
      }
    
  };

//=======Session Management of the User========//
   const currentStandardTimeInMilliSeconds = Date.now();
 const SessionStandard = 1000 * 800;

 function SessionTiming(){
  const expirationTime = SessionStandard + currentStandardTimeInMilliSeconds;
  localStorage.setItem("SessionExpiration", expirationTime)
   return expirationTime;
   }

  //Function to help set the user's account details such as bank name,
  //account name and account Number
  const FirstUserIcon = "./Images/UserIcon/FirstUserIcon.png"
const SecondUserIcon = "./Images/UserIcon/ SecondUserIcon.png"
const  ThirdUserIcon = "./Images/UserIcon/ThirdUserIcon.png"
const FourthUserIcon = "./Images/UserIcon/FourthUserIcon.png"
const FifthUserIcon = "./Images/UserIcon/FifthUserIcon.png"
const SixthUserIcon = "./Images/UserIcon/SixthUserIcon.png"
const SeventhUserIcon ="./Images/UserIcon/SeventhUserIcon.png"
const EighthUserIcon = "./Images/UserIcon/EighthUserIcon.png"
const NinethUserIcon ="./Images/UserIcon/NinethUserIcon.png";
const UserIconFormatting = ()=> {
  const alphabetsName = "abcdefghijklmnopqrstuvwxyz".split("");
  const {username} = customerDetail
  const Username =  username !== null && username !== undefined ? username?.toString()?.toLowerCase()  : "";
const firstCharacter = Username?.charAt(0);
const alphabetPlacementIndex = alphabetsName?.indexOf(firstCharacter)
let assignImageByUsername ;//default Value/ Image
if(alphabetPlacementIndex >= 0 && alphabetPlacementIndex < 3){
   assignImageByUsername = FirstUserIcon;
}else if(alphabetPlacementIndex >= 3 && alphabetPlacementIndex < 6){
  assignImageByUsername = SecondUserIcon
}else if(alphabetPlacementIndex >= 6 && alphabetPlacementIndex < 9){
  assignImageByUsername = ThirdUserIcon;
}else if(alphabetPlacementIndex >= 9 && alphabetPlacementIndex < 12){
  assignImageByUsername = FourthUserIcon;
}else if(alphabetPlacementIndex >=12 && alphabetPlacementIndex < 15){
assignImageByUsername = FifthUserIcon;
}else if(alphabetPlacementIndex >= 15  && alphabetPlacementIndex < 18){
  assignImageByUsername =SixthUserIcon;
}else if(alphabetPlacementIndex >= 18 && alphabetPlacementIndex < 21){
  assignImageByUsername = SeventhUserIcon;
}else if(alphabetPlacementIndex >= 21 && alphabetPlacementIndex < 24){
  assignImageByUsername = EighthUserIcon;
}else if(alphabetPlacementIndex >=  24 && alphabetPlacementIndex <= 27){
    assignImageByUsername = NinethUserIcon;
}else {
  assignImageByUsername = FirstUserIcon
}
localStorage.setItem("UserIcon", assignImageByUsername)
return assignImageByUsername
}


  const handleAccountDetails = async (AuthToken) => {
  const authToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  AuthToken = authToken || emailToken
 await CheckVirtualAcc(
     AuthToken,
      customerDetail,
      setLoading,
      setVirtualAccCreated,
      setBankNameState,
      setAccountNameState,
      setAccountNumberState,
      twoStepVerificationSuccess,
      setTwoStepVerificationSuccess,
      ConfirmVirtualState,
      setNetworkIssue
    );
    if (CheckVirtualAcc) {
     SessionTiming();
     UserIconFormatting();
      refreshToken();
      setOpenTaskBar(true);
     if(UserIconFormatting && SessionTiming){
      navigate("/dashboard");
     }
    
    }
  };

  // THE FUNCTION FOR DERIVING THE GET OPT METHOD
  const gettingSmsOrEmailFunctionOtp = async (url, body) => {
    if (smsOrEmail === "email") {
      url = `https://api.aremxyplug.com/api/v1/verify-otp/signin?email=${email}`;
      body = {
        otp: otp3,
      };
    } else if(smsOrEmail === "sms") {
      url = `https://api.aremxyplug.com/api/v1/sms/verify/signin?phone=${phone}`;
      body = {
        otp: otp3,
      };
    }
    if (!navigator.onLine) return alert("Check your internet connection");
    if (navigator.onLine) {
      await VerifyOtpFunction(url, body);
    }
  };

  //Verification of the otp
  const VerifyOtpFunction = async (url, body) => {
    setLoading(true);
    try {
      const response = await axios.post(url, body, {
        headers: { "Content-Type": "application/json" }, withCredentials : true
      },
    );
      if (response.status === 200 || response.status ===  201) {
      handleVerificationOTP();
      }
    } catch (error) {
      if (error && error.response === undefined) {
        alert("Check your network connection");
      } else if (error && error.response.status === 400) {
        setVerificationPinError(true);
        setOtp3("");
      } else if (error.response.status === 404) {
        setVerificationPinError(true);
        alert("OOPs, an error has occured");
        setOtp3("");
      } else if (error && error.response.status === 401) {
        alert("You have been timed out")
        setOpen2StepOTP(false)
      } else if (error.response && error.response.status === 500) {
        setOtp3("");
        alert("SERVER ERROR");
      } else {
        alert("Check your network connection");
      }
    } finally {
      setLoading(false);
    }
  };

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
    if (!navigator.onLine) return alert("Check your internet connection.");
    if (navigator.onLine) {
      getOtpSmsorEmail("sms");
      setCanResend(false);
      setVerificationPinError("");
    }
  };

  const handleResendOTP2 = () => {
    if (!navigator.onLine) return alert("Check your internet connection.");
    if (navigator.onLine) {
      getOtpSmsorEmail("email");
      setCanResend2(false);
      setVerificationPinError("");
    }
  };

  function HandleTranspin() {
    if (!navigator.onLine) return alert("Check your internet connection.");
    if (otp === otp2 && navigator.onLine) {
      SendTransactPin();
      setTranspinErrors("");
      setOpenTranspin(false);
      setOtp("");
      setOtp2("");
      localStorage.setItem("uTrO", true)
    } else {
      setTranspinErrors("Pin does not match!");
    }
  }

  //THE FUNCTION TO OPEN VERIFICATION POPUP FOR EITHER SMS OR EMAIL
  function twoStepVerificationHandler() {
    setOpen2StepVerification(false);
    setOpen2StepOTP(true);
  }

  const SetLocalStorageInputPin = () => {
    setLoading(true);
    setOpenTranspinSuccessful(false);
     UserIconFormatting();
    SessionTiming();
    if (customerDetail) {
      const { email, full_name, phone, username, id } = customerDetail;
      const bank_name = "";
      const account_name = "";
      const account_no = "";
      SetLocalStorage(
        email,
        full_name,
        phone,
        username,
        bank_name,
        account_name,
        account_no,
        id
      );
      if (SetLocalStorage) {
        navigate("/dashboard")
        setLoading(false);
        setBvnNumber("");
        setIdNumber("");
      }
    }
  };

  const PinSuccessFlow = ()=> {
      localStorage.setItem("cxccxfd", true)
     refreshToken()
    setOpenTranspin(false);
    setOpenTranspinSuccessful(true)
  }

   const SendTransactPin = async () => {
    const body = {
      pin : otp
    }
   await PostFunction("pin", setLoading, body, ()=> {
   PinSuccessFlow();
   }, async(ErrorType)=> {
   if(ErrorType === "Bad request"){
  alert(`Please check your internet connection`);
   }else if(ErrorType === "Server error"){
   alert("Server error")
   }else if(ErrorType === "unauthorised"){
    alert("We lost connection with you over long period deciding your pin.")
      setOpenTranspin(false);
   }else if(ErrorType === "User error" || ErrorType === "Network error"){
    alert("Kindly check your internet connection.")
   }else{
    alert("Unexpected error has occured")
   }
   }, ()=> {})
  };
 

  return (
    <div>
      {/* FORM OVERLAY AND 2 STEP VERIFICATION */}
      {open2StepVerification === true && (
        <Modal>
          <div className="w-full  mx-[24px] flex justify-center lg:justify-end lg:mr-[300px]">
            <div
              className=" p-4 flex flex-col gap-[5px] rounded-[8.6px] h-auto w-full bg-white
             lg:h-auto lg:w-[35%] md:w-[45%] lg:rounded-[15px]"
            >
              <div className="w-full flex justify-end ">
                <img
                  onClick={() => Close2StepPopUp()}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
              <div className="mb-[25px] lg:mb-[30px]">
                <p className="text-center text-[14px] leading-[18px] lg:leading-[20px] lg:text-[16px] font-[500] lg:font-[700]  mb-[10px] lg:mb-[10px]">
                  2-Step Verification!!!
                </p>
                <p className="text-center text-gray-500 font-[400] lg:font-[500] lg:text-[14px] text-[12px] leading-[16px]">
                  To ensure a safety security of your account, we want to verify
                  it’s really you.
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* VIA SMS STARTS HERE*/}
                <div
                  className="flex items-center  min-h-[60px] w-full px-[10px] cursor-pointer rounded-[7.5px] p-[7px]   gap-[5px] 
                lg:rounded-[8px] md:w-[161px] lg:h-[60px]"
                  onClick={() => {
                    setSmsOrEmail("sms")
                    
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: smsOrEmail === "sms" ? "#d166ff" : "#b3b3b3",
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
                   { phone !== undefined && phone?.length  ?   `+${phone.slice(0, 3)}******${phone.slice(10)}` : ""}
                    </p>
                  </div>
                </div>
                {/* VIA SMS ENDS HERE*/}
                {/* VIA Email STARTS HERE*/}
                <div
                  className=" flex items-center mt-[17px]  w-full px-[10px] cursor-pointer rounded-[7.5px] 
               min-h-[60px] p-[7px] gap-[5px] md:w-[161px] lg:h-[60px] lg:rounded-[8px] "
                  onClick={() => {
                    setSmsOrEmail("email");
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: smsOrEmail === "email" ? "#d166ff" : "#b3b3b3",
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
                      {email !== undefined && email?.length ? `${email.slice(
                      0,
                      3
                    )}****** ${email.slice(15)}` : ""}</p>
                  </div>
                </div>
                {/* VIA Email ENDS HERE*/}

                <div className="w-full flex justify-center mt-[30px] md:mt-[35px] lg:mt-[50px]">
                  <button
                    onClick={()=>{
                      getOtpSmsorEmail(smsOrEmail === "sms" ? "sms" : "email")
                    }}
                    type="submit"
                    disabled={smsOrEmail === "" ? true : false}
                    className={` ${
                      smsOrEmail === ""
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
      )}

      {/* FORM OVERLAY AND 2 STEP VERIFICATION ENDS HERE*/}

      {/* FORM OVERLAY AND TRANSACTION PIN INPUT STARTS HERE */}
      {openTranspin === true && (
        <Modal>
          <div
            className="lg:ml-[38.5%] md:ml-[40%] md:-mt-[20%] lg:-mb-[30%] px-[17.609px] py-[35.536px]
           bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]"
          >
            <p className="lg:text-[16px] text-[12.167px] font-[600] text-[#000] mb-[30px] text-center">
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
                  width: 40,
                  height: 40,
                  borderRadius: 3,
            
                }}
                renderInput={(props) => (
                  <input {...props} className="inputOTP mx-[3px] text-base" />
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
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input
                    type="password"
                    {...props}
                    className="inputOTP mx-[3px] text-base"
                  />
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
text-[10px] font-bold leading-[11.31px] w-full md:w-[300px] px-[25px] py-5 rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
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
          <div
            className="lg:ml-[38.5%] md:ml-[45%] lg:w-[30%] md:w-[45%] md:-mt-[20%] lg:-mb-[30%] w-full 
           mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] 
           md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px] relative"
          >
            <div className="flex flex-col gap-[3px] mb-[25px] lg:mb-[30px]">
              <div className="absolute top-4 right-4 ">
                <img
                  onClick={() => {
                    setOpen2StepOTP(false);
                    RemoveLocalStorage()
                    }}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
              <p className=" lg:text-[16px] font-[500] lg:font-[700] text-[14px] leading-[18px] lg:leading-[20px]">
                Verification code has been sent to your phone
              </p>
              <p className=" lg:text-[16px] font-[500] lg:font-[700] text-[12px] mb-[7] lg:mb-[10px]">
                {`${phone.slice(3, 6)}********`}
              </p>
              <p
                className="text-[#737373] font-[400] lg:font-[600] lg:text-[14px] text-[12px] cursor-pointer"
                onClick={(e) => {
                  setCountdown2(60);
                  setSmsOrEmail("email");
                  getOtpSmsorEmail("email");
                }}
              >
                Use email address instead
              </p>
            </div>
            <div>
              <div className="flex justify-center gap-[35px] lg:gap-[15px] flex-col w-full">
                <div className="flex justify-center">
                  <OtpInput
                    value={otp3}
                    inputType="tel"
                    onChange={setOtp3}
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
                  disabled={otp3.length !== 6 ? true : false}
                  className={` ${
                    otp3.length !== 6
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
      )}
      {open2StepOTP === true && smsOrEmail === "email" && (
        <Modal>
          <div
            className="lg:ml-[38.5%] md:ml-[40%] lg:w-[30%] md:w-[45%]  md:-mt-[20%] lg:-mb-[30%] w-full mx-[24px] px-[20.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[40px] lg:px-[31px] relative"
          >
            <div className="flex flex-col gap-[3px] mb-[25px] lg:mb-[30px]">
              <div className="absolute top-4 right-4 ">
                <img
                  onClick={() => {
                    setOpen2StepOTP(false);
                    RemoveLocalStorage();
                    }}
                  src={CloseIcon}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] "
                  alt=""
                />
              </div>
              <p className="  lg:text-[16px] text-[14px] leading-[16px] lg:leading-[20px] font-[500] lg:font-[700]">
                Verification code has been sent to
              </p>
              <p className=" lg:text-[16px] text-[12px] leading-[16px] lg:leading-[20px] font-[500] lg:font-[700] mb-[7] lg:mb-[10px]">
                your email {`${email.slice(0, 3)}********`}
              </p>
              <p
                className="text-[#737373] lg:text-[14px] font-[400] lg:font-[600]
                 text-[12px] leading-[16px] lg:leading-[18px] cursor-pointer"
                onClick={() => {
                  setCountdown(60);
                  setSmsOrEmail("sms");
                  getOtpSmsorEmail("sms");
                }}
              >
                Use phone number instead
              </p>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-[20px] w-full">
                <div className="flex justify-center">
                  <OtpInput
                    value={otp3}
                    inputType="tel"
                    onChange={setOtp3}
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

              <div className="w-full flex justify-center mt-[35px] mb-[10px] lg:mb-[10px] lg:mt-[35px]">
                <button
                  onClick={gettingSmsOrEmailFunctionOtp}
                  type="submit"
                  disabled={otp3.length !== 6 ? true : false}
                  className={` ${
                    otp3.length !== 6
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
      )}

      {/* FORM OVERLAY AND 2 STEP OTP VERIFICATION ENDS HERE*/}

      {/* FORM OVERLAY AND TRANSACTION PIN SUCCESSFUL HERE */}
      {openTranspinSuccessful === true && (
        <Modal>
          <div className="lg:ml-[38.5%] md:ml-[40%] md:-mt-[20%] 
          lg:-mb-[30%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] 
          md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col w-[75%] items-center">
                  <p className="lg:text-[14px] font-[500] lg:font-[700] text-[12.021px]  text-[#000] mb-[30px]">
                    You have successfully created your transaction pin.
                  </p>

                  <img
                    className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] "
                    src="./Gif/checkMarkGif.gif"
                    alt="thumbsUpGif"
                  />
                </div>
              </div>
              {/* <Link to="/"> */}
              <div className="w-full flex justify-center px-[10px] mt-[20px]  lg:mt-[50px]">
             
                  <div
                    onClick={() => SetLocalStorageInputPin()}
                    className=" inline-flex justify-center items-center 
                    text-[#fff] w-full  text-center  cursor-pointer 
      text-[12px] leading-[16px] font-bold   py-[12px] rounded-[10px] 
      lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    <p> Done</p>
                  </div>
              
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
          <div
            className="flex flex-col lg:items-center  lg:mx-[0px] mx-[20px] w-full md:w-[30%]  px-[20px]
           py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] "
          >
            <div className="flex flex-col items-center w-full ">
              <p
                className="lg:text-[16px] font-[500]  text-[14px] leading-[18px] 
                  lg:leading-[20px]  text-green-500 mb-[30px]"
              >
                Verification Successful.
              </p>

              <img
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]"
                src="./Gif/checkMarkGif.gif"
                alt="thumbsUpGif"
              />
            </div>

            {/* <Link to="/"> */}
            <div className="w-full flex justify-center">
              <div
                onClick={() => handleAccountDetails()}
                className="flex w-full lg:w-[50%]  rounded-[8px] lg:rounded-[16px]
                mt-[20px] justify-center  lg:mt-[50px]  cursor-pointer text-[10px] font-bold leading-[11.31px] 
                     py-[20px]   lg:py-[15px] lg:text-[14px]"
                style={{
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
