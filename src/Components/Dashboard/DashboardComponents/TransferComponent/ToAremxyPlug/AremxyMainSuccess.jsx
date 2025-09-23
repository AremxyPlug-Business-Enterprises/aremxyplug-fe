import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
import { Link } from "react-router-dom";

// import { TransactFailedPopUp } from "./TransactionFailedPopUp";

export const AremxyMainSuccess = ({
  transactSuccessToOtherBank,
  setTransactSuccessToOtherBank,

}) => {
  const {
    toggleSideBar,
   
    transferAmount,
  
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
            >Transaction {(transferResponse?.data?.status === "success" || transferResponse?.data?.status === "successful") ? "Successful" : "Pending"}</p>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
                />
            <p className={`font-semibold w-[97%] mx-auto text-[10px] text-center
               mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[14px]
               ${isDarkMode ? "text-white" : "text-black" }`}>
            {(transferResponse?.data?.status === "success" || transferResponse?.data?.status === "successful") ? "You have successfully transferred" : "Your transaction is pending"}
              <span className=" font-extrabold text-[14px] 
  lg:text-[14px]">
                {/* {" "} {amountNumeric !== undefined || amountNumeric!== null ?
                amountNumeric?.toLocaleString("en-NG", {
                  style : "currency",
                  currency : "NGN"
                }) : "₦"}{" "} */}
               {" "} {transferAmount} {" "}
              </span>
             {" "} from your NGN wallet to{" "}
            </p>

            <div className="flex mt-4 flex-col gap-2 lg:gap-4">
              <div className="flex text-[10px] md:text-[14px]
               w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Username or Email</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{transferResponse?.data?.username}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone Number</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{transferResponse?.data?.phone}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%]
               mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transfaction fee</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>&#8358;0.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] 
              w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Order Number</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{transferResponse?.data?.order_id}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                <p  className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transaction ID</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{transferResponse?.data?.transaction_id}</span>
              </div>
            </div>
   </div>
                  <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
            <p className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
           The transfer has been sent successfully. Please contact the recipient user to confirm the payment from his/her wallet.
            </p>
        </div>
            <div className="flex w-full justify-center items-center 
        gap-[10px] pb-4 md:gap-[8.59px] lg:gap-[15px] md:pb-2">
              <button
                onClick={handleTransactionSuccessClose}
               className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px]
                   h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center 
                   items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px]
                    font-semibold text-white rounded-[6px] md:rounded-[7px] 
                    lg:rounded-[12px]`}
              >
                Done
              </button>
              <Link to="/to-aremxymain-receipt">
                <button
                  onClick={handleTransactionSuccessReciept}
                   className={`border-[1px]  w-[111px] lg:w-[200px] md:w-[99px]
                   h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center
                    items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px]
                     font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
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

            