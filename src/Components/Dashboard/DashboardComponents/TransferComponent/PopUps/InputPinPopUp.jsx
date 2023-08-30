import React from "react";
import { Modal } from "../../../../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";

export const InputPinPopUp = () => {
  const {
    toggleSideBar,
    inputPin,
    setInputPin,
    inputPinPopUp,
    setInputPinPopUp,
    inputPinHandler,
  } = useContext(ContextProvider);
  return (
    <div>
      {" "}
      {inputPinPopUp && (
        <Modal>
          <div
            className={`${styles.inputPin} ${
              toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
            } md:w-[55%] w-[90%]`}
          >
            <img
              onClick={() => setInputPinPopUp(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[10%] lg:my-[%]">
              Input PIN to complete transaction
            </p>
            <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[8%]">
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
    </div>
  );
};
