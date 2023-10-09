import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../CurrencyConversion/currencyConversion.css";
import creditCard from "../CurrencyConversion/Images/credit.svg";
import right from "./Images/right.svg"
import fiat from "./Images/fiat.svg"
import crypto from "./Images/crypto.svg"
import multiwallet from "./Images/multiwallet.svg"
import airtime from "./Images/airtime.svg"
import points from "./Images/points.svg"
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import Modal from "./cryptoPopup"
import mwFeature from "./Images/MW-feature.svg"
import cryptoFeature from "./Images/cryptofeature.svg"


const CurrencyConversion = () =>{
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

    return(
      <>
        <DashBoardLayout>
        
        <div className="">
        
          <div id='background' className="h-[90px] justify-between lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-5 px-[14px] md:px-[28.65px] lg:px-[50px]">
            <div className="py-[9.57px] md:py-[16.61px] lg:py-[29px] align-middle flex flex-col gap-1.5">
                <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold w-[230px] lg:w-[750px] md:w-[430px]">CONVERT CURRENCY, AIRTIME, AND POINTS WITH AREMXYPLUG!</p>
                <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px] w-[177.94px] lg:w-[539px] md:w-[308.8px]">Accept payments in any currency, convert and transfer money internationally without any hassle.</p>
            </div>
            <div className="flex h-[97%] w-full pt-2">
                <img src={creditCard} alt="" className="w-full shrink-0" />
            </div>
          </div>

          <div className=" flex gap-1.5 py-[25px] lg:py-[50px] md:py-[28.64px]">
                   <div className="text-[10px] lg:text-xl md:text-[14px] font-medium text-[#7C7C7C]">Select Conversion type</div>
                   <div>
                      <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] mt-[1.2px] md:mt-[4.1px] lg:mt-[2.5px]" />
                   </div>
                </div>

     {/* select conversion */}
         <div id="lists" className="flex flex-col gap-[24px] lg:gap-[42px] md:gap-[30px]">

            {/* fiat conversion */}
              <Link to= '/fiat'>
              <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2">
                <img src={fiat} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[13px] font-medium">Fiat Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[10px] font-medium text-[#7C7C7C]">Convert from one fiat currency to another.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
              </div>
            </Link>
          {/* crypto conversion */}
          <div>
          <div onClick={openModal1} className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2">
                <img src={crypto} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[13px] font-medium">Crypto Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[10px] font-medium text-[#7C7C7C]">Convert from one crypto currency to another.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
          <Modal isOpen={isModalOpen1} onClose={closeModal1}>
            <div className="modal-animation">
            <p className="text-center font-semibold text-[8px] md:text-[14px] lg:text-[16px] lg:py-7 md:py-4 py-3">Crypto Conversion</p>
            <p className="text-[#04177F] text-[8px] md:text-[10px] lg:text-[16px] text-center font-semibold">This Feature is Currently Not Available.</p>
            <div className="relative my-[20px]">
              <div className="flex justify-center">
                <img src={cryptoFeature} alt="" className="lg:h-[200px] md:w-[120px] lg:w-[204.4px] md:h-[120px]"/>
              </div>
              <span className="text-[7px] md:text-[10px] lg:text-[12px] font-semibold absolute right-12">Coming soon...</span>
            </div>
            <button onClick={closeModal1} className="bg-[#04177F] flex mx-auto rounded-[4.6px] md:rounded-[7px] lg:rounded-[12px] w-[255px] md:w-[58px] lg:w-[93px] h-[30px] lg:h-[34px] md:h-[23px]">
                      <p className="text-white text-[12px] md:text-[9px] lg:text-[13px] font-semibold flex mx-auto self-center">Okay</p>
            </button>
            </div>
          </Modal>

          {/* multi-wallet conversion */}
          <div>
          <div onClick={openModal}  className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2">
                <img src={multiwallet} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[13px] font-medium">Multi-Wallet Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[10px] font-medium text-[#7C7C7C]">Convert between fiat and crypto currency.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
           <div className="modal-animation">
            <p className="text-center font-semibold text-[8px] md:text-[14px] lg:text-[16px] py-3 lg:py-7 md:py-4">Multi-Wallet Conversion</p>
            <p className="text-[#04177F] text-[8px] md:text-[10px] lg:text-[16px] text-center font-semibold">This Feature is Currently Not Available.</p>
            <div className="relative my-[20px]">
              <div className="flex justify-center">
                <img src={mwFeature} alt=""  className="lg:h-[200px] md:w-[120px] lg:w-[204.4px] md:h-[120px]"/>
              </div>
              <span className="text-[7px] md:text-[8px] lg:text-[10px] font-semibold absolute right-12">Coming soon...</span>
            </div>
            <button onClick={closeModal} className="bg-[#04177F] flex mx-auto rounded-[4.6px] md:rounded-[7px] lg:rounded-[12px] w-[255px] md:w-[58px] lg:w-[93px] h-[30px] lg:h-[34px] md:h-[23px]">
                      <p className="text-white text-[12px] md:text-[9px] lg:text-[13px] font-semibold flex mx-auto self-center">Okay</p>
            </button>
            </div> 
          </Modal>
               {/* airtime conversion */}
          <div>
          <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2">
                <img src={airtime} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[13px] font-medium">Airtime Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[10px] font-medium text-[#7C7C7C]">Convert your bulk airtime to real money, withdrawn to your bank account.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
           {/* points redeemed */}
           <div>
          <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2">
                <img src={points} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[13px] font-medium">Points Redeemed</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[10px] font-medium text-[#7C7C7C]">Redeem your earned points to real money, withdrawn to your bank account.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
         </div>

         <div className="flex justify-center pt-[342px] pb-3 md:pt-[200px] md:pb-4 lg:pt-[290px] lg:pb-6 gap-2">
           <div className="font-medium text-[9px] md:text-[7px] lg:text-[12px] self-center">You need help ?</div>
            <Link to="/ContactUs">
                <div className="bluebutton bg-[#04177f] text-center text-[7px] md:text-[5.5px] lg:text-[8px] text-white"> Contact Us</div>
            </Link>
         </div>
        
        </div>

        
        </DashBoardLayout>
        </>

    );
}



export default CurrencyConversion;