import React, { useState } from "react";
import { Modal } from "../Screens/Modal/Modal";
import { VerificationTwo } from "../VerificationTwo/VerificationTwo";

export const Verification = () => {
  const [buttonColor, setButtonColor] = useState("#0003");
  const [verifyTwo, setVerifyTwo] = useState(false);

  const onClick = () => {
    setButtonColor("#04177f");
  };

  const submitHandler = () => {
    setVerifyTwo(true);
  };

  return (
    <>
      <div className="p-4 flex flex-col gap-[5px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:h-[301px] lg:w-[348px] lg:rounded-[15px] lg:">
        <p className="text-[8px] lg:text-[14px]">
          Select where we sent you verification-code
        </p>
        <div className="flex flex-col gap-[8px]">
          <div
            onClick={onClick}
            className="flex h-[32px] w-[92px] border hover:border-[#D166FF] rounded-[4.5px] p-1 gap-[5px] lg:w-[161px] lg:h-[60px] lg:rounded-[8px]"
          >
            <img
              className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
              src="./Images/signupimages/sms.png"
              alt=""
            />
            <div className="text-[6px] lg:text-[12px]">
              <div>Via SMS</div>
              <div>0700&#42;&#42;&#42;&#42;&#42;&#42;</div>
            </div>
          </div>
          <div
            onClick={onClick}
            className="flex h-[32px] w-[92px] border hover:border-[#D166FF] rounded-[4.5px] p-1 gap-[5px] lg:w-[161px] lg:h-[60px] lg:rounded-[8px]"
          >
            <img
              className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]"
              src="./Images/signupimages/email.png"
              alt=""
            />
            <div className="text-[6px] lg:text-[12px]">
              <div>Via Email</div>
              <div>Habib@&#42;&#42;&#42;&#42;&#42;</div>
            </div>
          </div>
          <div
            onClick={submitHandler}
            style={{ backgroundColor: buttonColor }}
            className="mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
          >
            Continue
          </div>
        </div>
      </div>
      {verifyTwo && (
        <Modal>
          <VerificationTwo />
        </Modal>
      )}
    </>
  );
};
