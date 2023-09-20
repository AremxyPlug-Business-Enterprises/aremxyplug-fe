import React, { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../../../Context";
import { Modal } from "../../../../../../Screens/Modal/Modal";
import styles from "../../../../TransferComponent/transfer.module.css";
import { InternationalInputPinPopUp } from "./InternationInputPinPopUp";

export const ConfirmInterTransactionPopUp = () => {
  const {
    toggleSideBar,
    transferFee,
    image,
    internationalBankConfirmation,
    setInternationalBankConfirmation,
    bankName,
    accountNumber,
    accountName,
    swiftCode,
    recipientAddress,
    purposeOfPayment,
    receive,
    transfer,
  } = useContext(ContextProvider);

  const [internationalInputPinPopUp, setInternationalInputPinPopUp] =
    useState(false);

  // const TotalAmount = transferamount;
  const pointsEarned = "+2.00";

  const handleSwitch = () => {
    setInternationalInputPinPopUp(true);
    setInternationalBankConfirmation(false);
  };
  return (
    <div>
      {internationalBankConfirmation && (
        <Modal>
          (
          <div
            className={`${styles.transferConfirmation} ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[562px]"
            } w-[90%] overflow-auto`}
          >
            <img
              //   onClick={() => setOtherBankConfirmation(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction
            </h2>
            <p className="text-[7px] text-[#0008] text-center mb-2 md:text-[12px] lg:text-[14px]">
              You are about to transfer{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                &#8358;{transfer}.00 for &#36;{receive}{" "}
              </span>
              from your NGN wallet to{" "}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Bank Name</p>
                <span>{bankName}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Account Name</p>
                <span>{accountName}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Account Number</p>
                <span>{accountNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Swift Code / Sort Code / Routine</p>
                <span>{swiftCode}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Recipient Address</p>
                <span>{recipientAddress}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Purpose of Payment</p>
                <span>{purposeOfPayment}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Amount to Transfer</p>
                <span>&#8358;{transfer}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Recipient Will Receive</p>
                <span>&#36; {receive}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Transfaction fee</p>
                <span>&#8358;{transferFee}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Completion Time</p>
                <span>Instantly</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Points Earned</p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

            <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                  <img className="w-[16px] h-[16px]" src={image} alt="/" />
                </div>
                <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                  Available Balance{" "}
                  <span className="text-[#0003]">(&#8358;50,000.00)</span>
                </p>
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              onClick={handleSwitch}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Confirmed
            </button>
          </div>
          )
        </Modal>
      )}
      {
        <InternationalInputPinPopUp
          internationalInputPinPopUp={internationalInputPinPopUp}
          setInternationalInputPinPopUp={setInternationalInputPinPopUp}
        />
      }
    </div>
  );
};
