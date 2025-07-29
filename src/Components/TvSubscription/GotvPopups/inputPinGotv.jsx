import React from "react";
import "../../TvSubscription/TvSubscription.css";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import styles from "../../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { Link } from "react-router-dom";


export const InputGotvPopup = ({VerifyPinHandler}) => {
    const {
      inputPinGotv,
      inputPin,
      setInputPin,
      toggleSideBar,
      toggleVisibility,
      errorMessage,
      isVisible,
      setInputPinGotv,
      authenticationOpen,
      isDarkMode
     // setGotvSuccessful,
   } = useContext(ContextProvider)

   const handleGotvSuccessful = async() =>{
    await VerifyPinHandler();
  }

   const [isFocused, setIsFocused] = useState(false);
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };

      const cancelInputGotv = () => {
        setInputPinGotv(false);
        window.location.reload();
      }
   return(
    <>
    {inputPinGotv &&
            (
            <Modal>
         <div className="flex items-end justify-center lg:items-center lg:justify-center 
         h-[100%] w-[100%]  px-[10px] rounded-[10px]">
        <div className={`bvnQuery flex flex-col justify-center mb-[50px] py-[2px] h-[250px] lg:h-auto overflow-scroll ${
              toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%] " : "lg:w-[40%]"
            } md:w-[55%] w-[90%] ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white"}`}
            >
            <div className=" pr-3 lg:pr-5 flex justify-end">
            <img  onClick={cancelInputGotv}
                className="w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px] self-center"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="flex flex-col">
            <p className="font-extrabold text-[8px] md:text-[10px] lg:text-[16px] text-center my-[8%] 
            ">Input PIN to complete transaction</p>
            <div className="flex flex-col items-center gap-[1px] font-extrabold mb-[7%]">
              <div className=" flex items-center ml-[5%] md:ml-[5%] gap-[10px]">
                {" "}
                {isVisible ? (
                  <OtpInput
                    value={inputPin}
                    inputType="tel"
                    onChange={setInputPin}
                    numInputs={4}
                    shouldAutoFocus={true}
                    inputStyle={{
                      color: "#000000",
                      fontSize: '14px',
                      fontWeight: 700,
                      borderRadius: 4,
                      height: '35px',
                      width: '35px',
                      border : "1px",
                      borderColor : "#04177f"
                    }
                }
                    
                    renderInput={(props) => (
                      <input{...props} className={`inputOTP  border-[1px] border-[#000]
                        mx-[2px] ${isFocused ? 'focused' : ''}`} onFocus={handleFocus}
                      onBlur={handleBlur}/>
                    )}
                  />
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">
                    * * * *{" "}
                  </div>
                )}
                <div
                  className="text-[#0003]"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" /> : <AiFillEyeInvisible  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"/>}
                </div>
              </div>
              <Link to = {{
               pathname : "/ProfileSettingMain",
                state :  authenticationOpen
              }} 
               className="text-[8px] md:text-[12px] leading-[5px] my-3 text-[#04177f]">
                Forgot Pin ?
              </Link>
            </div>
            {errorMessage && (
              <p className="font-[400] md:font-[500] text-center leading-[15px] text-red-400 mb-[10px] lg:mb-[0px]">
                 Incorrect Pin
              </p>
            ) 
            }
            </div>
            <button
              onClick={handleGotvSuccessful}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 && !isDarkMode ? "bg-[#0008]" : 
                 inputPin.length !== 4 && isDarkMode ? "bg-gray-300" : "bg-[#04177f]"
              } lg:my-[52px] w-[225px] md:w-[94px] lg:w-[163px] flex justify-center items-center
               mx-auto cursor-pointer text-[12px] md:text-[10px] py-[10px] lg:text-[16px] font-extrabold h-[40px] lg:h-[38px] md:h-[22px]
                text-white rounded-[6px] md:rounded-[6.88px]  lg:rounded-[12px]
               `}
            >
              Purchase
            </button>
        </div>
        </div>
           </Modal>
          )} 
    </>
   )
}