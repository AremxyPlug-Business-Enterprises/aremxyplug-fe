import React from "react";
import "../../TvSubscription/TvSubscription.css";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { VerifyTransPin } from "../../ApiCollection.jsx/ApiBuck";
//import { Loader } from "../../Loader/Loader";
//import { Modal } from "../../Screens/Modal/Modal";
export const InputDstvPopup = ({VerifyPinHandler}) => {
    const {
      inputPinDstv,
      inputPin,
      setInputPin,
      setInputPinDstv,
      errorMessage,
      toggleSideBar,
      toggleVisibility,
      isVisible,
      authenticationOpen,
      isDarkMode,
     // isDarkMode,
    //  setDstvSuccessful,
   } = useContext(ContextProvider)

// const [loading, setLoading] = useState(true)
// const [errorMessage, setErrorMessage] = useState(false)
   const handleDstvSuccessful = async(event) =>{
await  VerifyPinHandler()
 
  }

   const [isFocused, setIsFocused] = useState(false);
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };

      const cancelInputDstv = () => {
        setInputPinDstv(false);
        window.location.reload()
      }
   return(
    <>
    {inputPinDstv &&
            (
            <Modal>
            <div className="flex items-end justify-center
             lg:items-center lg:justify-center 
   w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
        <div className={`  flex flex-col lg:mb-[0px]  mb-[50px]
         lg:h-[350px] overflow-scroll h-[300px] bvnQuery  ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full   ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white rounded-[10px]"}`}
            >
            <div className="pr-3 lg:pr-2 py-[5px] flex justify-end">
            <img  onClick={cancelInputDstv}
                className="w-[25px] h-[25px]  md:w-[35px] md:h-[35px] 
                lg:w-[25px] lg:h-[25px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="flex flex-col w-full  justify-center 
             py-[15px] lg:py-[0px]
             h-[100%] gap-[15px] ">
            <p className="font-extrabold text-[12px] leading-[16px] 
            pb-[20px]
             md:text-[10px]
             lg:text-[16px] text-center 
            ">Input PIN to complete transaction</p>
            <div className="flex flex-col items-center lg:gap-[0px]
             gap-[5px] font-extrabold">
              <div className=" flex w-full justify-center items-center  gap-[10px]">
                  <OtpInput
                    value={inputPin}
                    inputType={"tel" }
                    onChange={setInputPin}
                    numInputs={4}
                    shouldAutoFocus={true}
                    inputStyle={{
                     color: isDarkMode ? "#ffffff" : "#000000",
                        // width: 30,
                        // height: 30,
                        // borderRadius: 3,
                        fontWeight: 700,
                        borderRadius: 4,
                        height: "35px",
                        width: "35px",
                        backgroundColor: isDarkMode ? "black" : "white",
                        border: isDarkMode
                          ? "1px solid white"
                          : "1px solid #ccc",
                    }
                }
                    
                   renderInput={(props) => (
                      <input {...props} className={`inputOTP text-base mx-[2px] 
                           ${isFocused ? 'focused' : ''} ${isVisible ? 'otp-visible' : 'otp-hidden'}`} onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    
                                  
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
              <Link  to = {{
               pathname : "/ProfileSettingMain",
                state :  authenticationOpen
              }} className="text-[10px] leading-[14px] font-extrabold 
              md:text-[12px]
                my-2 text-[#04177f]">
                Forgot Pin ?
              </Link>
            </div>
            {errorMessage && (
              <p className="font-bold text-[14px]  lg:text-[16px] md:font-[500] 
              text-center leading-[18px] lg:leading-[20px]   text-red-600">
                 Incorrect Pin
              </p>
            ) 
            }
             <div className="flex flex-col gap-[10px] px-[20px]" >
            <button
              onClick={handleDstvSuccessful}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 && !isDarkMode ? "bg-[#0008]" : 
                 inputPin.length !== 4 && isDarkMode ? "bg-gray-300" : "bg-[#04177f]"
              }  w-full  md:w-[94px] lg:w-[163px] flex 
              justify-center items-center mx-auto cursor-pointer text-[12px]
               md:text-[10px] lg:text-[16px] font-extrabold h-[50px] 
               lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px]
                lg:rounded-[12px]`}
            >
              Purchase
            </button>
            {/* {errorMessage && (
              <p className="text-[10px] leading-[16px] font-[400]
              lg:text-[12px] lg:leading-[18px] lg:font-[500] text-red-500">
                Incorrect Pin
                </p>

            )} */}
            </div>
             </div>
           
        </div>
        </div>
           </Modal>
          )} 
          {/* {loading && (
            <Modal>
            <Loader/>
            </Modal>
          )} */}
    </>
   )
}