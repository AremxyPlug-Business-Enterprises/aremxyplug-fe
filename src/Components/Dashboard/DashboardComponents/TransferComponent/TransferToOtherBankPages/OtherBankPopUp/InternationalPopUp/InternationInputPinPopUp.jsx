import React from "react";
import { Modal } from "../../../../../../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { ContextProvider } from "../../../../../../Context";
import styles from "../../../../TransferComponent/transfer.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { InternationalTransactionSuccessPopUp } from "./InternationalTransactionSuccessPopUp";
// import { TransactionSuccessToOtherBank } from "./TransactionSuccessToOtherBank";

export const InternationalInputPinPopUp = ({
  otherInputPinPopUp,
  setOtherInputPinPopUp,
  internationalInputPinPopUp,
  setInternationalInputPinPopUp,
}) => {
  const { toggleSideBar, toggleVisibility, isVisible } =
    useContext(ContextProvider);

  const [inputPin, setInputPin] = useState("");
  const [internationalTransactSuccess, setInternationalTransactSuccess] =
    useState(false);

  const inputPinHandler = (e) => {
    setInputPin(e.target.value);
    setInternationalTransactSuccess(true);
    setInternationalInputPinPopUp(false);
  };

  return (
    <div>
      {" "}
      {internationalInputPinPopUp && (
        <Modal>
          <div
            className={`${styles.inputPin} ${
              toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
            } md:w-[55%] w-[90%]`}
          >
            <img
              onClick={() => setOtherInputPinPopUp(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[10%] lg:my-[%]">
              Input PIN to complete transaction
            </p>
            <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[8%]">
              <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                {" "}
                {isVisible ? (
                  <OtpInput
                    value={inputPin}
                    inputType="tel"
                    onChange={setInputPin}
                    numInputs={4}
                    shouldAutoFocus={true}
                    inputStyle={{
                      color: "#403f3f",
                      width: 30,
                      height: 30,
                      borderRadius: 3,
                    }}
                    renderInput={(props) => (
                      <input {...props} className="inputOTP mx-[3px]" />
                    )}
                  />
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">
                    * * * *{" "}
                  </div>
                )}
                <div
                  className="text-[#0003] text-xl md:text-3xl"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <p className="text-[8px] md:text-[12px] text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              onClick={inputPinHandler}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Send
            </button>
          </div>
        </Modal>
      )}
      {/* <TransactionSuccessToOtherBank
        transactSuccessToOtherBank={transactSuccessToOtherBank}
        setTransactSuccessToOtherBank={setTransactSuccessToOtherBank}
      /> */}
      <InternationalTransactionSuccessPopUp
        internationalTransactSuccess={internationalTransactSuccess}
        setInternationalTransactSuccess={setInternationalTransactSuccess}
      />
    </div>
  );
};
