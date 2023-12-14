import React from "react";
import "../../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import arrowRight from "../../../Components/EducationPins/imagesEducation/educationArrowRight.svg";

const ConfirmShowmaxPopup = () => {

  const {
    confirmShowmaxPopup,
    setConfirmShowmaxPopup,
    toggleSideBar,
    formatNumberWithCommas,
    setInputPinShowmax,
    mobileNumber,
    tvEmail,
    smartCard,
    selectedOptionShowmax,
    cardName,
    methodImage,
    tvWalletBalance,
    flagResult,
  } = useContext(ContextProvider)



  const handleInputShowmax = (event) => {
    event.preventDefault();
    setConfirmShowmaxPopup(false);
    setInputPinShowmax(true);
  }
  const getNumericValue = (option) => {
    const numericPart = option.match(/\d+/);
    if (numericPart) {
      return formatNumberWithCommas(parseInt(numericPart[0], numericPart[2], 10));
    }
    return '';
  };

  const valueWithoutTilde = selectedOptionShowmax.split(" ~ ");
  // const trimmedValue = valueWithoutTilde.trim();

  return (
    <>
      {confirmShowmaxPopup &&
        (
          <Modal >

            <div 
              className={`confirmTV mx- auto  ${toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                } w-[90%]`}
            >
              <div className="flex justify-end pr-2 mt-1 mb-3 md:mt-2 md:mb-2 lg:mb-0 lg:mt-1">
              <img onClick={() => { setConfirmShowmaxPopup(false); window.location.reload()}}
                  className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
              <div className="mx-auto">
                <div className="text-[12px] my-[5%] font-medium text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                  Confirm Transaction</div>
                  <div className="text-[10px] font-bold text-[#0008] text-center mb-2 md:text-[11px] lg:text-[13px]">
                  You are about to purchase&nbsp;
                  <span className="text-[#000] text-[11px] md:text-[13px] lg:text-[14px]">{valueWithoutTilde}</span>&nbsp;
                from your {" "}
                {flagResult} {" "} to
                </div>

                <div className="flex flex-col gap-3 mt-4 md:mt-6 lg:mt-7">

                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Decoder Type</span>
                    <span>Showmax</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Package</span>
                    <span>{selectedOptionShowmax}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Smartcard / IUC Number</span>
                    <span>{smartCard}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Card Name</span>
                    <span>{cardName}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Phone Number</span>
                    <span>{mobileNumber}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Email</span>
                    <span>{tvEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Amount</span>
                    <span>{'₦' + getNumericValue(selectedOptionShowmax)}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Payment Method</span>
                    <span>{flagResult}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>₦0.00</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Points Earned</span>
                    <span className="text-[#2ED173]">+2.00</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F7F7] h-[45px] my-5 lg:my-8 flex justify-between items-center px-[4%]">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                    <img
                      className="w-[16px] h-[16px]"
                      src={methodImage}
                      alt="/"
                    />
                  </div>
                  <p className="text-[10px] md:text-[14px]  lg:text-[16px] font-[500]">
                    Available Balance{" "}
                    <span className="text-[#0003]">
                      {tvWalletBalance}
                    </span>
                  </p>
                </div>
                <img
                  src={arrowRight}
                  alt=""
                  className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                />
              </div>
              <button
                onClick={handleInputShowmax}
                className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Confirmed
              </button>
            </div>
          </Modal>
        )}
    </>
  )
}


export default ConfirmShowmaxPopup