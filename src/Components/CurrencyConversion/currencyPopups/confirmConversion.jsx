import React  from "react";

import "../../CurrencyConversion/currencyConversion.css";
// import overlay from "../Images/whiteoverlay.svg"
import nigeria from "../Images/nigeria.svg"
import right from "../Images/right.svg"
import { useState } from "react";
import { ContextProvider } from "../../Context";



const ConfirmConversion = () => {
    const amtToConvert = (`${10},000`);
    const amtToReceive = 10;
    const availableBalance = (`${50},000`);


    //    const handleConfirmationPopupClose = () => {
    //     setConversionPinPopUp(true);
    //   }; 

    //   const openModal = () => {
    //     setConversionPopUp(true);
    //   };
    
    //   const closeModal = () => {
    //     setConversionPopUp(false);
    //   };

    const [confirm, setConfirm] = useState(false);
    const handleConfirm = () => {
      setConfirm(true)
    }

    return(
        <div>
                 
       {/* <div className="confirmConversion bg-white mx-auto w-[312px] h-[392px] lg:w-[880px] md:w-[504.5px] md:h-[573px] lg:h-[1000px]">
        <div className="border-b-[6px] md:border-b-[12px] lg:border-b-[20px] border-[#04177F] flex justify-end pr-2 lg:pr-5">
        <img  onClick={()=>setConfirm(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
        </div>
        <div className="mx-auto w-[270px] md:w-[474px] lg:w-[830px]">
            <div className="text-center font-semibold text-[9px] md:text-[9.17px] lg:text-[16px] pt-[23px] md:pt-[15px]">Confirm Transaction</div>
            <div className="text-[#7C7C7C] text-[6px] md:text-[9.12px] lg:text-[16px] font-medium text-center pt-[22px] lg:pt-[52px] pb-1 md:pb-3">You are about to convert &nbsp;
               <span className="text-black text-[8px] md:text-[11.46px] lg:text-[20px] font-semibold">{amtToConvert}.00</span>&nbsp;
             from your NGN wallet to
            </div>
            <div className="flex flex-col gap-[8.86px] pt-[9px] md:pt-[15px] lg:pt-[25px] md:gap-[15px] lg:gap-[25px]">
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{amtToConvert}.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${amtToReceive}</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ 0.001 USD</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>0.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Completion Time </span>
                    <span>Instantly</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Points Earned</span>
                    <span className="text-[#2ED173]">+2.00</span>
                </div>
            </div>
        </div>
        <div className="bg-[#F6F7F7] h-[36px] md:h-[57.29px] lg:h-[100px] flex my-[19px] md:my-[38px] lg:my-[100px]">
            <div className="mx-auto w-[263px] md:w-[470px] lg:w-[825px] flex justify-between align-middle self-center content-center">
                <div className="flex gap-[3.5px]">
                    <div className="relative">
                        <img src={nigeria} alt="" className='md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                    </div>
                    <div className="font-semibold text-[8px] md:text-[12px] lg:text-[20px]">Available Balance</div>
                    <div className="text-[#7C7C7C] font-medium text-[8px] md:text-[12px] lg:text-[20px]">(&#x20A6;{availableBalance})</div>
                </div>
                <div>
                    <img src={right} alt="" className='md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                </div>
            </div>
        </div>
        <div className="bg-[#04177F] md:mt-3 lg:mt-4 h-[40px] md:h-[23px] w-[255px] md:w-[93.39px] lg:w-[163px] lg:h-[38px] mx-auto rounded-[5px] md:rounded-[6.88px] lg:rounded-[12px] flex justify-center">
            <button onClick={handlePinInput}  className="self-center text-[#fff] font-semibold text-[12px] md:text-[10px] lg:text-[16px]">Confirmed</button>
        </div>
       </div> */}
       </div>
    )
}

    export default ConfirmConversion