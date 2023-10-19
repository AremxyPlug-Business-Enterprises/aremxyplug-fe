import React, {useState} from "react";
import "../../CurrencyConversion/currencyConversion.css";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { ContextProvider } from "../../../../src/Components/Context";
import { Modal } from "../../Screens/Modal/Modal";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
// import SuccessfulConversion from "./SucessfulConversionPopup";
// md:border-b-[12px] lg:border-b-[20px]

const InputPinToConvert = () =>{
    const {
        inputPin,
        setInputPin,
        // conversionSuccessful,
        setConversionSuccessful,
        toggleVisibility,
        isVisible,
      } = useContext(ContextProvider);

      const [isFocused, setIsFocused] = useState(false);

      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };

      const [pinInput, setPinInput] = useState(true)
       const handleConversionSuccessful = () =>{
        setPinInput(false);
        setConversionSuccessful(true)
      }

    return(
        <>
        {pinInput && (
            <Modal>
              
              <div className="InputPinToConvert bg-white mx-auto w-[312px] md:w-[483px] lg:w-[840px] h-[250px] md:h-[267px] lg:h-[465px]">
            <div className="lg:h-[60px] md:h-[35px] h-[18px]  pr-3 lg:pr-5 flex justify-end">
            <img  onClick={()=>setPinInput(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] self-center"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[15px] lg:h-[22px]" />
            <div className="font-semibold text-[8px] md:text-[10px] lg:text-[16px] text-center pt-[33px]
             md:pt-[16px] lg:pt-[20px] pb-4 lg:pb-[70px]">Input PIN to complete transaction</div>
            <div className="flex flex-col gap-[20px] items-center lg:gap-[25px] font-extrabold mb-[7%]">
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
                      fontSize: '10px',
                      fontWeight: 600,
                      borderRadius: 4,
                      height: '35px',
                      width: '35px',
                    }
                }
                    
                    renderInput={(props) => (
                      <input {...props} className={`inputOTP mx-[2px] ${isFocused ? 'focused' : ''}`} onFocus={handleFocus}
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
                  {isVisible ? <AiFillEye color="#04177F" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" /> : <AiFillEyeInvisible  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" color="#04177F"/>}
                </div>
              </div>
              <p className="text-[8px] md:text-[12px] lg:text-[14px] my-3 text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              onClick={handleConversionSuccessful}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } lg:my-[52px] w-[225px] md:w-[94px] lg:w-[163px] flex justify-center items-center mx-auto cursor-pointer text-[12px] md:text-[10px] lg:text-[16px] font-extrabold h-[40px] lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px] lg:rounded-[12px]`}
            >
              Convert
            </button>
        </div>
            </Modal>
     )}

        </>
    )
}






export default InputPinToConvert;