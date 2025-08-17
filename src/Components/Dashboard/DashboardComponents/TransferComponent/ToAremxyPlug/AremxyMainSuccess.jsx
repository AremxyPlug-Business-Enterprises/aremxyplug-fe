import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
import { Link } from "react-router-dom";
import styles from "../../../../AirTimePage/AirtimeVtu.module.css";
// import { TransactFailedPopUp } from "./TransactionFailedPopUp";

export const AremxyMainSuccess = ({
  transactSuccessToOtherBank,
  setTransactSuccessToOtherBank,
}) => {
  const {
    toggleSideBar,
    transferFee,
    amtToTransfer,
    transferAmount,
    mainEmailUsername,
    mainUserPhoneNumber,
    isDarkMode,
    transferResponse
  } = useContext(ContextProvider);

  const handleTransactionSuccessClose = () => {
    setTransactSuccessToOtherBank(false);
    window.location.reload();
  };

  const handleTransactionSuccessReciept = () => {
    setTransactSuccessToOtherBank(false);
  };
console.log(transferResponse);
  return (
    <div>
      {transactSuccessToOtherBank && (
        <Modal>
          {/* <TransactFailedPopUp/> */}
          <div
           className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:items-center
              items-end`}
          >
            <div  className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}>
           <div className="flex justify-between items-center 
            mx-[3%] my-[2%] lg:my-[1%]">
          
          
              <img
                onClick={() => setTransactSuccessToOtherBank(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => setTransactSuccessToOtherBank(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
              </div>
         
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="">
             <p className={`text-[12px] font-extrabold my-[4%] 
            text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%] ${isDarkMode ? "text-white" : "text-[#000]"}`}
            >Transaction Successful</p>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
                />
            <p className={`font-semibold w-[97%] mx-auto text-[10px] text-center
               mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[14px]
               ${isDarkMode ? "text-white" : "text-black" }`}>
              You have successfully transferred{" "}
              <span className="text-[#000] font-extrabold text-[10px] 
              md:text-[16px] lg:text-[14px]">
                &#8358;{transferAmount !== undefined || transferAmount!== null ?
                transferAmount?.toLocaleString("en-NG", {
                  style : "currency",
                  currency : "NGN"
                }) : "₦"}{" "}
              </span>
              from your NGN wallet to{" "}
            </p>

            <div className="flex mt-4 flex-col gap-2 lg:gap-4">
              <div className="flex text-[10px] md:text-[14px]
               w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Username or Email</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{mainEmailUsername}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone Number</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{mainUserPhoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%]
               mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transfaction fee</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{transferFee}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] 
              w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Order Number</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>122555556464564</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transaction ID</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>0331njokdhtf55</span>
              </div>
            </div>
   </div>
            <div className="flex text-[10px] md:text-[14px] w-[90%] 
            mx-auto justify-between  lg:text-[15px] font-[500]">
              <p className="text-[6px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px]">
              The transfer has been sent successfully. Please contact the recipient user to confirm the payment from his/her wallet.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
              <button
                onClick={handleTransactionSuccessClose}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              <Link to="/to-aremxymain-receipt">
                <button
                  onClick={handleTransactionSuccessReciept}
                  className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[110px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              </Link>
            </div>
          </div>
        </div>
          
        </Modal>
      )}
    </div>
  );
};
