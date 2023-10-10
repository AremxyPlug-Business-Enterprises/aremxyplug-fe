import React, {useState} from "react";
import "../../CurrencyConversion/currencyConversion.css";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { ContextProvider } from "../../../../src/Components/Context";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
// md:border-b-[12px] lg:border-b-[20px]

const InputPinToConvert = () =>{
    const {
        inputPin,
        setInputPin,
        inputPinHandler,
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

    return(
        <>
        {pinInput &&
            (
            <ConversionModal>
              
        <div className="InputPinToConvert mx-auto w-[312px] md:w-[483px] lg:w-[840px] h-[250px] md:h-[267px] lg:h-[465px]">
            <div className="border-b-[6px] lg:border-b-[22px] md:border-b-[13px] border-[#04177F]">
                <img src="" alt="close" />
            </div>
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
                      height: '27px',
                      width: '27px',
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
              <p className="text-[8px] md:text-[12px] lg:text-[14px] text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              onClick={inputPinHandler}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } lg:my-[52px] w-[225px] md:w-[94px] lg:w-[163px] flex justify-center items-center mx-auto cursor-pointer text-[12px] md:text-[10px] lg:text-[16px] font-extrabold h-[40px] lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px] lg:rounded-[12px]`}
            >
              Convert
            </button>
        </div>
</ConversionModal>
          )} 

        </>
    )
}






export default InputPinToConvert;