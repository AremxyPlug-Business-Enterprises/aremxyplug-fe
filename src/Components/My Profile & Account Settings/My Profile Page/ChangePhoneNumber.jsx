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
import { InternalLoginSession } from "../../ApiCollection.jsx/ApiBuck";
const ChangePhoneNumber = () => {
  const { isDarkMode } = useContext(ContextProvider);
  // const { recipientPhoneNumber, setRecipientPhoneNumber } =
  //   useContext(ContextProvider);
    const [loading, setLoading] = useState(false);
    const [fetchedResponse, setFetchedResponse] = useState({});
  const [sessionModal, setSessionModal] = useState(false)
   
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
        alert("Kindly check your internet connection.")
      }else if(Error === "unauthorised"){
      await PostFunction("change-phone/update",
     setLoading, 
     body, 
     SuccessHandler,
      ()=> {
        setSessionModal(true)
      },
       setFetchedResponse)  
      }else if(Error === undefined){
        alert("Your internet connection is quite unstable.")
      }
        else{
        alert("An unexpected error occured, please try again later.")
      }
    }

    
    const SuccessHandler =(response)=> {
     // console.log("Successful")
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
       setFetchedResponse)  
  }
  


  //The implementation for the Change email,
  const HandleChangePhoneNumber = async()=> {

    const FailedHandler=async(ErrorType)=> {
      if(ErrorType === "Server error" ){
   //  setVerificationPinError(true)
   alert("Failed to process your request, please try again later.")
      }else if(ErrorType  === "Network error" || ErrorType === "User error"){
        alert("Kindly check your internet connection.")
      }else if(ErrorType === "unauthorised"){
     await PostFunction("change-phone",
     setLoading, 
     body, 
     SuccessHandler,
     ()=> {
      setSessionModal(true);
     },
       setFetchedResponse)
      }else if(ErrorType === undefined){
        alert("Your internet connection is quite unstable.")
      }else if(ErrorType=== "Bad request"){
        alert("The phone number you entered is already in use. Please try another phone number.")
      }else{
        alert("An unexpected error occured, please try again later.")
      }
    }
    const SuccessHandler =(response)=> {
     // console.log("Successful")
    setUpdate(true);
      setErrors({});
      setCountdown(60);
     console.log("Successful");
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
       setFetchedResponse)
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

  
  
   console.log(fetchedResponse)
  
  
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
              className={`text-[12px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px] ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              New Phone Number
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="tel"
             
                className={`w-full md:w-[50%] lg:w-[40%] py-[10.33px] pl-[5.867px] pr-1 md:py-[10] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none ${
                  isDarkMode ? "bg-black text-white border-white" : ""
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
                  ? "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] md:ml-[20%] h-[250px] lg:h-[405px] shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] top-[0%]"
                  : "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] h-[250px] lg:h-[405px]  shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)]"
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
                <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                  {" "}
                  {isVisible ? (
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
                        <input {...props} className="inputOTP mx-[3px]" />
                      )}
                    />
                  ) : (
                    <div className="text-[24px] md:text-[24px] ">
                      * * * * * *
                    </div>
                  )}
                  <div
                    className={` text-xl md:text-3xl ${
                      isDarkMode ? "text-white" : "text-[#0003]"
                    } cursor-pointer`}
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
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
            <div
              className={` ${
                    toggleSideBar ? "bottom-[0%] absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] md:ml-[20%] h-[250px] lg:h-[405px] shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] top-[0%]" : "bottom-[0%] absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] h-[250px] lg:h-[405px]  shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)]"
                    } flex flex-col justify-between items-center pb-[10px] md:pb-[30px] lg:pb-[30px] md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px] ${isDarkMode ? "bg-stone-950 border-white border": "bg-white"}`}
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
      {sessionModal && (
        <InternalLoginSession setExpiredSessionModal ={setSessionModal}/>
      )}
    
           
         {/*TRANSACTION SUCCESSFUL MODAL STOPS HERE */}
        
              {/* FORM OVERLAY AND RESET TRANSACTION PIN  HERE */}
             
      
    </DashBoardLayout>
  );
};

export default ChangePhoneNumber;
