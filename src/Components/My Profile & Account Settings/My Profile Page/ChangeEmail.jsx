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
import Success from "../ProfileImages/success.gif";
import { PostFunction } from "../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../Loader/Loader";
const ChangeEmail = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { emailId, setEmailId,  networkIssue,  setSessionModal, setNetworkIssue } = useContext(ContextProvider);
  const [verificationPinError, setVerificationPinError] = useState(false)
  
  const {
    toggleSideBar,
    toggleVisibility,
    isVisible,
  } = useContext(ContextProvider);

  const [countdown, setCountdown] = useState(60);
  const [resendActive, setResendActive] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchedResponse, setFetchedResponse] = useState({})
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
  const [errorMessage, setErrorMessage] = useState("");
  const [emailChange, setEmailChange] = useState("")
  const [emailInputColor, setEmailInputColor] = useState("");

  
   const HandleChangeEmail = async()=> {
  
      const FailedHandler=async(ErrorType)=> {
        
     if(ErrorType === "Bad request"){
      alert("The email you entered is already in use. Please try another email.")
     }else if(ErrorType === "unauthorised"){
        await PostFunction("change-email",
       setLoading, 
       body, 
       SuccessHandler,
       ()=> {
        setSessionModal(true)
       },
         setFetchedResponse, setNetworkIssue)
     }else if(ErrorType === "Server error"){
        alert("Failed to process your request. Please try again later.")
     }else if(ErrorType === "Network error" || ErrorType === "User error"){
     if(networkIssue) return;
     if(!networkIssue) setNetworkIssue(true)
     }else{
      alert("An Unexpected error occured, please try again later.")
     }
      }
      const SuccessHandler =()=> {
       // console.log("Successful")
     setErrorMessage("");
      setEmailInputColor("#2ED173");
      setUpdate(true);
      setCountdown(60);
       
      }
      const body = {
        new_email: emailChange
      }
     const handleUpdate = async(e) => {
    const isEmail = (input) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;
      return emailRegex.test(emailChange);
    };

    if (isEmail(emailId)) {
     
       await PostFunction("change-email",
       setLoading, 
       body, 
       SuccessHandler,
        FailedHandler,
         setFetchedResponse, setNetworkIssue)
    } else {
      setErrorMessage("Invalid email..");
      setEmailInputColor("#F95252");
      setUpdate(false);
    }
  
     };
     handleUpdate()
   }
    const VerifyPopUpHandler =async()=> {
          const FailedHandler= async(Error)=> {
                 if(Error === "Server error" ){
              setVerificationPinError(true);
                 }else if(Error  === "Network error" || Error === "user error"){
             if(networkIssue) return;
             if(!networkIssue) return setNetworkIssue(true)
               }else if(Error === "unauthorised"){
               await PostFunction("change-email/update",
              setLoading, 
              body, 
              SuccessHandler,
               ()=> {
                 setSessionModal(true)
               },
                setFetchedResponse, setNetworkIssue)  
               }else if(Error === undefined){
              if(networkIssue) return;
              if(!networkIssue) return setNetworkIssue(true)
               }
                 else{
                 alert("An unexpected error occured, please try again later.")
               }
             }
        const SuccessHandler =(response)=> {
         // console.log("Successful")
         setVerificationPinError("");
          setUpdate(false);
       setVerify(true);
       setOtp("");
       localStorage.setItem("userEmail",JSON.stringify(response?.data?.data?.email) )
       window.location.reload();
        }
        const body ={
          new_email: emailChange,
          otp : otp
        }
      await PostFunction("change-email/update",
         setLoading, 
         body, 
         SuccessHandler,
          FailedHandler,
           setFetchedResponse, setNetworkIssue)  
      }
      
    
    
 const handleResendOTP = async() => {
      setCountdown(60);
      setResendActive(false);
      await HandleChangeEmail();
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

          {/* <Link to="/ChangePin"> */}
          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[px]">
            <p
              className={`text-[13px] leading-[130%] md:text-[14px] lg:text-[18px] 2xl:text-[28px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Change Email
            </p>
            <img
              src={Email}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>
          {/* </Link> */}

          <div>
            <p
              className={`text-[#9C9C9C] text-[13px] md:text-[14px] lg:text-[18px] font-semibold ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              Kindly Input Your New Email
            </p>
          </div>

          <div className="mt-[30px]">
            <h2
              className={`text-[12px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px] ${
                isDarkMode ? "text-white" : ""
              }`}
            >
              New Email
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="text"
                className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
                placeholder=""
                value={emailChange}
                style={{ borderColor: emailInputColor }}
                onChange={(event) => {
                  setEmailChange(event.target.value);
                  setEmailInputColor("");
                }}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-start text-[12px] mt-[5px]">
                {errorMessage}
              </p>
            )}
          </div>

          <div className="py-[30px] lg:py-[60px]">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[12px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] bg-primary
              `}
              onClick={HandleChangeEmail}
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
                onClick={() => setUpdate(false)}
                className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                src={Cancel}
                alt=""
              />

              <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[6%] md:mt-[7%] md:h-[10px]" />
              <p className="md:mt-[15%] lg:mt-[10%] text-[12px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[4%] md:my-[5%]">
                Verification code has been sent to your email - {emailChange}
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
                        <input {...props} className="inputOTP text-base mx-[3px]" />
                      )}
                    />
                  ) : (
                    <div className="text-[24px] md:text-[24px] ">
                      * * * * * *{" "}
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
                } my-[2%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
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
                toggleSideBar
                  ? "bottom-[0%] absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] md:ml-[20%] h-[250px] lg:h-[405px] shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] top-[0%]"
                  : "bottom-[0%] absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] h-[250px] lg:h-[405px]  shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)]"
              } flex flex-col justify-between items-center pb-[10px] md:pb-[30px] lg:pb-[30px] md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px] ${
                isDarkMode ? "bg-stone-950 border-white border" : "bg-white"
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
                  Your New Email has been updated successfully.
                </p>
              </div>

              <img src={Success} alt="" className="h-[50%] md:h-[40%]" />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setVerify(false);
                  setEmailId("");
                  setEmailInputColor("");
                }}
                className={`my-[%] mt-0  bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
            </div>
          </Modal>
        )}

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
    
    </DashBoardLayout>
  );
};

export default ChangeEmail;
