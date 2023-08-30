import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { RiFileCopyFill } from "react-icons/ri";
import { Modal } from "../../../../Screens/Modal/Modal";
import { Link } from "react-router-dom";
import styles from "../../TransferComponent/transfer.module.css";

export const TransactSuccesfulPopUp = () => {
  const {
    toggleSideBar,
    transferFee,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    amtToTransfer,
    textRef,
    handleCopyClick,
  } = useContext(ContextProvider);

  const handleTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };

  return (
    <div>
      {transactSuccessPopUp && (
        <Modal>
          <div
            className={`${styles.successful} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%]`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setTransactSuccessPopUp(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => setTransactSuccessPopUp(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Transaction Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p className="text-[8px] text-[#0008] text-center mb-2 md:text-[14px] lg:text-[12px]">
              You have successfully transferred{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                &#8358;{amtToTransfer}.00{" "}
              </span>
              from your NGN wallet to{" "}
            </p>

            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Bank Name</p>
                <span>Sporta Bank</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Account Name</p>
                <span>Habib Kamaldeen</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Account Number</p>
                <span>7785695102</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Transfaction fee</p>
                <span>&#8358;{transferFee}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Order Number</p>
                <span>122555556464564</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Session ID</p>
                <div className="flex items-center">
                  <span ref={textRef}>
                    1232455566664654 <br /> 1232455566664654
                  </span>
                  <div
                    onClick={handleCopyClick}
                    className="text-[#92abfec3] text-[13px] font-extrabold lg:text-[14px]"
                  >
                    <RiFileCopyFill />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[6px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px]">
                The transfer has been sent successfully. Please contact the
                recipient bank with the Session ID if payment not received
                within 5-15 minutes.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%]">
              <button
                onClick={handleTransactionSuccessClose}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              <Link to="/Receipt">
                <button
                  onClick={handleTransactionSuccessClose}
                  className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
