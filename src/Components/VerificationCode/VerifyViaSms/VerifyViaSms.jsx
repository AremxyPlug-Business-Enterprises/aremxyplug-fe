import React, { useState } from "react";
import ReactCodeInput from "dees-verification-code-input";
import { Modal } from "../../Screens/Modal/Modal";
import { VerificationSuccessful } from "../VeirifcationSuccessful/VerificationSuccessful";
import { VerifyViaEmail } from "../VeirifyViaEmail/VerifyViaEmail";

export const VerifyViaSms = ({ Email }) => {
  const [buttonColor, setButtonColor] = useState("#0003");
  const [verificationCode, setVerificationCode] = useState("");
  const [success, setSuccess] = useState("");
  const [viaEmail, setViaEmail] = useState(false);

  const onClick = (code) => {
    setButtonColor("#04177f");
    setVerificationCode(code);
    // window.location.href="/dashboard";
  };

  const submitHandler = () => {
    setSuccess(true);
  };

  const emailHandler =() => {
    setViaEmail(true)
  }

  return (
    <div className="p-4 flex flex-col gap-[10px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:gap-[18px] lg:h-[301px] lg:w-[348px] lg:rounded-[15px] lg:">
      <p className="text-[8px] lg:text-[14px]">
        Verification code has been sent to your phone
      </p>
      <div className="flex flex-col gap-[15px] lg:gap-[28px]">
        <p onClick={emailHandler} className="cursor-pointer hover:underline text-[#737373] text-[6px] lg:text-[10px]">
          Use email instead
        </p>

        <div className="flex flex-col gap-[2px] md:gap-[6px]">
          <div className="lg:hidden">
            <ReactCodeInput
              className="custom-verification-input"
              length={6}
              type="text"
              value={verificationCode}
              onChange={onClick}
              autoFocus
            />
          </div>
          <div className="hidden lg:block mx-auto w-[100%] ml-[5%]">
            <ReactCodeInput
              className="custom-verification-input"
              length={6}
              type="text"
              value={verificationCode}
              onChange={onClick}
              autoFocus
              fieldHeight={36}
              fieldWidth={42}
            />
          </div>

          <div className="flex justify-between w-full lg:w-[90%] items-center mx-auto">
            <p className="text-[#04177f] text-[5.7px] md:text-[7px] lg:text-[10px]">
              60sec
            </p>
            <p className="text-[#04177f] text-[5.7px] md:text-[7px] lg:text-[10px]">
              Resend OTP
            </p>
          </div>
        </div>

        <div
          onClick={submitHandler}
          style={{ backgroundColor: buttonColor }}
          className="cursor-pointer mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-[4.5px] lg:rounded-[8px] md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
        >
          Continue
        </div>
      </div>
      {success && (
        <Modal>
          <VerificationSuccessful />
        </Modal>
      )}

      {viaEmail && (
        <Modal>
          <VerifyViaEmail />
        </Modal>
      )}
    </div>
  );
};
