import React, { useState, useEffect } from "react";
import "../../../App.css";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import ProfileHero from "../ProfileHero";
import Email from "../ProfileImages/Email.svg";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
import { Modal } from "../../Screens/Modal/Modal";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Cancel from "../ProfileImages/Cancel.svg";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import Joi from "joi";
import BusinessKYC from "./BusinessKYC";
import Success from "../ProfileImages/success.gif";
import { PostFunction } from "../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../Loader/Loader";
const ChangePhoneNumber = () => {
  const { isDarkMode, 
      networkIssue, setNetworkIssue, setSessionModal, setAlertCustom } = useContext(ContextProvider);
  // const { recipientPhoneNumber, setRecipientPhoneNumber } =
  //   useContext(ContextProvider);
    const [loading, setLoading] = useState(false);
   // const [fetchedResponse, setFetchedResponse] = useState({});

   
 const [otp, setOtp] = useState("");
 const [verificationPinError, setVerificationPinError] = useState("");

  const {
    toggleSideBar,
 
    toggleVisibility,
    isVisible,
  } = useContext(ContextProvider);

  const [kyc, setKyc] = useState("");

  const [countdown, setCountdown] = useState(60);
  const [resendActive, setResendActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //const [error, setError] = useState({})
  useEffect(() => {
    let timer;

    const decrementCountdown = () => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    };

    timer = setInterval(() => {
      decrementCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

 
  useEffect(() => {
    if (countdown === 0) {
      setResendActive(true);
    }
  }, [countdown]);

  const [update, setUpdate] = useState("");
  const [verify, setVerify] = useState("");
  const [emailInputColor, setEmailInputColor] = useState("");
  const [errors, setErrors] = useState({});

 

 

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setInputValue(numericValue);
  };


const VerifyPopUpHandler =async()=> {
      const FailedHandler= async(Error)=> {
        if(Error === "Server error" ){
     setVerificationPinError(true);
        }else if(Error  === "Network error" || Error === "User error"){
  if(!networkIssue) return setNetworkIssue(true)
      }else if(Error === "unauthorised"){
     setSessionModal(true) 
      }else if(Error === "Bad request"){
        verificationPinError(true);
      }else if(Error === undefined){
       if(networkIssue) return;
      if(!networkIssue) return setNetworkIssue(true)
      }
        else{
setAlertCustom({
  message : "An Unexpected error has occured",
  type : "error",
  show : true
})
      }
    }

    
    const SuccessHandler =(response)=> {
     setVerificationPinError("")
      setUpdate(false);
   setVerify(true);
   setOtp("");
   
     localStorage.setItem("userPhone",JSON.stringify(response?.data?.data?.phone) )
      window.location.reload()
     
    }
    const body ={
      new_phone: `234${inputValue?.slice(1)}`,
      otp : otp
    }
  await PostFunction("change-phone/update",
     setLoading, 
     body, 
     SuccessHandler,
      FailedHandler,
       ()=> {}, setNetworkIssue)  
  }
  


  //The implementation for the Change email,
  const HandleChangePhoneNumber = async()=> {

    const FailedHandler=async(ErrorType)=> {
      if(ErrorType === "Server error" ){
   //  setVerificationPinError(true)
           setAlertCustom({
                  message : "Failed to process your request",
                  type : "error",
                  show : true
                 })
      }
      else if(ErrorType  === "Network error" || ErrorType === "User error"){
       if(!networkIssue) setNetworkIssue(true)
      }else if(ErrorType === "unauthorised"){
       setSessionModal(true)
      }else if(ErrorType === "Network error"){
      if(networkIssue) return;
      if(!networkIssue) return setNetworkIssue(true)
      }else if(ErrorType=== "Bad request"){
    setAlertCustom({
      message : "The phone number you entered is already in use. Kindly try another phone number.",
      type : "error",
      show : true
    })
       
      }else{
         setAlertCustom({
      message : "An Unexpected error occured trying to update your phone Number",
      type : "error",
      show : true
    })
      }
    }
    const SuccessHandler =(response)=> {
    setUpdate(true);
      setErrors({});
      setCountdown(60);
   }
    const body ={
      new_phone: `234${inputValue?.slice(1)}`
    }
     const handleUpdate = async(e) => {
    const { error } = schema.validate({
      inputValue,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
     
      await PostFunction("change-phone",
     setLoading, 
     body, 
     SuccessHandler,
      FailedHandler,
       ()=> {}, setNetworkIssue)
  }
    }
    const schema = Joi.object({
    inputValue : Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });
  handleUpdate()
  };

  

  const handleResendOTP = async() => {
    setCountdown(60);
    setResendActive(false);
    await HandleChangePhoneNumber();
  };


  
  
  return (
    <DashBoardLayout>
      <div
        className={`relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between h-full`}
      >
        <section className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
          <ProfileHero></ProfileHero>

          {/* <Link to="/AccountUpgrade"> */}
          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[px]">
            <p
              className={`text-[12px] leading-[130%] md:text-[14px] lg:text-[18px] 2xl:text-[28px] ${
                isDarkMode ? "text-white" : "text-[#7c7c7c]"
              }`}
            >
              Change Phone Number
            </p>
            <img
              src={Email}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>
          {/* </Link> */}

          <div onClick={() => setKyc(true)}>
            <p
              className={`text-[#9C9C9C] text-[12px] md:text-[14px] lg:text-[18px] font-semibold ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              Kindly Input Your New Phone Number
            </p>
          </div>

          <div className="mt-[30px]">
            <h2
              className={`text-[13px]  font-semibold md:text-[14px] lg:text-[18px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              New Phone Number
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="tel"
             
                className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base  lg:w-1/2 md:w-3/4
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                placeholder="088*******"
                value={inputValue}
                style={{ borderColor: emailInputColor }}
                onChange={(event) => {
                  setInputValue(event.target.value);
                  handleChange(event);
                  setEmailInputColor("");
                }}
              />
            </div>

           {errors.inputValue && (
            <p className="text-red-500 text-[12px] md:text-[14px] lg:text-[16px] mt-[5px]">
            {errors.inputValue}
            </p>

           )}
          </div>

          <div className="py-[30px] lg:py-[60px]">
            <button
              className={`w-full bg-primary md:w-fit text-white rounded-md px-[28px] text-[12px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px]`}
              onClick={HandleChangePhoneNumber}
            >
              Update
            </button>
          </div>
        </section>

        {update && (
          <Modal>
            <div
              className={` ${
                toggleSideBar
                  ? "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] md:ml-[20%] h-[250px] lg:h-[405px] shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] top-[20%]"
                  : "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] h-[250px] lg:h-[405px] top-1/2  shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)]"
              } md:mx-auto md:my-auto rounded-[12px] ${
                isDarkMode ? "bg-black border-white border" : "bg-white"
              } `}
            >
              <img
                onClick={() => {
                  setUpdate(false)
                   setOtp("")
                   setVerificationPinError(false);
                }}
                className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                src={Cancel}
                alt=""
              />

              <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[6%] md:mt-[7%] md:h-[10px]" />
              <p className="md:mt-[15%] lg:mt-[10%] text-[12px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[4%] md:my-[5%]">
                Verification code has been sent to your phone number - {inputValue}
              </p>
              <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%] md:mb-[7%]">
                <div className=" flex justify-center items-center  w-full ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                  {" "}
                  
                    <OtpInput
                      value={otp}
                      inputType="tel"
                      onChange={setOtp}
                      numInputs={6}
                      shouldAutoFocus={true}
                      inputStyle={{
                        color: isDarkMode ? "#ffffff" : "#403f3f",
                        width: 30,
                        height: 30,
                        borderRadius: 3,
                        backgroundColor: isDarkMode ? "black" : "white",
                        border: isDarkMode
                          ? "1px solid white"
                          : "1px solid #ccc",
                      }}
                       renderInput={(props) => (
                        <input {...props} className={`inputOTP text-base mx-[2px] 
                             ${isVisible ? 'otp-visible' : 'otp-hidden'}`}
                              
                                         
                                      
                                    
                            style={{
                              ...props.style,
                              // Extra safety: force the color to stay consistent
                              color: isDarkMode ? "#ffffff" : "#000000",
                            }}
                          />
                        )}
                      />
                    
                      <div className="cursor-pointer" onClick={()=>  toggleVisibility()}>
                        {isVisible ? (
                          <AiFillEye className={isDarkMode ? "text-white" : "text-black"} />
                        ) : (
                          <AiFillEyeInvisible className={isDarkMode ? "text-white" : "text-black"} />
                        )}
                      </div>
                </div>
                <p
                  className={`flex justify-between w-[67%] md:w-[55%] lg:w-[45%] text-[12px] text-[#04177f] ${
                    isDarkMode ? "text-white" : ""
                  }`}
                >
                  <p>{countdown > 0 ? `${countdown}sec` : "0sec"}</p>
                  <p
                    onClick={() => {
                      if (resendActive) {
                        handleResendOTP();
                      }
                    }}
                    style={{
                      cursor: resendActive ? "pointer" : "not-allowed",
                      color: isDarkMode
                        ? "#ffffff"
                        : resendActive
                        ? "#04177f"
                        : "#808080",
                    }}
                  >
                    Resend OTP
                  </p>
                </p>
                {verificationPinError && (
                  <p className ="text-red-500 text-[12px] md:text-[14px] 
                  lg:text-[16px] mt-[5px]">
                     Incorrect otp
                    </p>
                )}
              </div>

              <button
                onClick={(e) => {
                 VerifyPopUpHandler()
                 
                }}
                disabled={otp.length !== 6}
                className={`${
                  otp.length !== 6 ? "bg-[#0008]" : "bg-[#04177f]"
                } my-[2%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[12px]
                 font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] 
                 lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                  isDarkMode ? "border border-white" : ""
                }`}
              >
                Verify
              </button>
            </div>
          </Modal>
        )}

        {verify && (
          <Modal className="">
           <div className=" h-[100%] flex flex-col w-[100%]
               items-center justify-center">
                <div
                  className={`bvnQuery flex flex-col shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)]
                     rounded-[8px] shadow-[0px_0px_8.3274px_0px_rgba(0,0,0,0.25)] md:rounded-[11.736px]  
                     lg:rounded-[20px] md:w-[55%]
            md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)]
             lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] justify-center 
              items-center px-[18px] md:px-[30px] md:h-[550px] h-[430px]
              gap-[10px] md:gap-[40px] lg:gap-[50px] lg:justify-normal md:mx-[0px]
               mx-[19px]  lg:pt-[30px]  md:pt-[270px] pt-[270px] ${
              isDarkMode ? "bg-black border border-white" : "bg-white"
            }`}
                >
              <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                <img
                  src={PopUpGreen}
                  alt=""
                  className="md:hidden rounded-tr-[10px]"
                />
                <img
                  src={PopUpGreenTab}
                  alt=""
                  className="hidden md:block rounded-tr-[10px]"
                />
                <img
                  src={PopUpGreenDeskTop}
                  alt=""
                  className="hidden rounded-tr-[20px]"
                />
              </div>

              <div className="relative z-10">
                <p
                  className={`text-[12px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[8%] lg:mt-[3%] z-[1000] ${styles.overlayText}`}
                >
                  Successful
                </p>

                <p
                  className={`text-[12px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                  Your New Phone Number has been updated successfully.
                </p>
              </div>

              <img src={Success} alt="" className="h-[50%] md:h-[40%]" />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setVerify(false);
                  setInputValue("");
                  setEmailInputColor("");
                }}
                className={`my-[%] mt-0  bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
            </div>
            </div>
          </Modal>
        )}

        {kyc && <BusinessKYC></BusinessKYC>}

        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[12%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
        >
          <div className="text-[12px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "bg-[#04177f]" : "bg-[#04177f]"
              } text-[12px] p-2 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      {loading && (
        <Modal>
          <Loader/>
        </Modal>
      )}
   
    
           
         {/*TRANSACTION SUCCESSFUL MODAL STOPS HERE */}
        
              {/* FORM OVERLAY AND RESET TRANSACTION PIN  HERE */}
             
      
    </DashBoardLayout>
  );
};

export default ChangePhoneNumber;
