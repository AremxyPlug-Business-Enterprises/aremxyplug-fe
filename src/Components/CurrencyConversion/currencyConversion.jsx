import React, {useState} from "react";
// import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import "../CurrencyConversion/currencyConversion.css";
import creditCard from "../CurrencyConversion/Images/credit.svg";
import fiat from "./Images/fiat.svg"
import crypto from "./Images/crypto.svg"
import multiwallet from "./Images/multiwallet.svg"
import points from "./Images/points.svg"
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Modal } from "../Screens/Modal/Modal";
import mwFeature from "./Images/MW-feature.svg"
import cryptoFeature from "./Images/cryptofeature.svg"



const CurrencyConversion = () =>{
    

 const [modalOne, setModalOne] = useState(false);
 const [modalTwo, setModalTwo] = useState(false);

 const handleModalOne = ()=>{
    setModalOne(true)
 }
 const handleModalTwo = ()=>{
    setModalTwo(true)
 }


 
    return(
      <>
        <DashBoardLayout>
        
        <div className="">
        
          <div id='background' className="h-[90px] justify-between lg:h-[196px] items-center md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-5 px-[14px] md:px-[28.65px] lg:px-[50px]">
            <div className="py-[9.57px] md:py-[16.61px] lg:py-[29px] align-middle flex flex-col gap-1.5">
                <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold w-[230px] lg:w-[600px] md:w-[430px]">CONVERT CURRENCY, AIRTIME, AND POINTS WITH AREMXYPLUG!</p>
                <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px] w-[177.94px] lg:w-[539px] md:w-[308.8px]">Accept payments in any currency, convert and transfer money internationally without any hassle.</p>
            </div>
            <div className="flex w-[25%] h-[97%] pt-2">
                <img src={creditCard} alt="" className="" />
            </div>
          </div>

          <div className=" flex gap-1.5 py-[25px] lg:py-[50px] md:py-[28.64px]">
                   <div className="text-[10px] lg:text-xl md:text-[14px] font-medium text-[#7C7C7C]">Select Conversion type</div>
                   <div>
                      <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] mt-[1.2px] md:mt-[4.1px] lg:mt-[2.5px]" />
                   </div>
                </div>

     {/* select conversion */}
         <div id="lists" className="flex flex-col gap-[19px] lg:gap-[40px] md:gap-[28px]">

            {/* fiat conversion */}
              <Link to= '/fiat'>
              <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2 self-center">
                <img src={fiat} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[15px] font-medium">Fiat Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[12px] font-medium text-[#7C7C7C]">Convert from one fiat currency to another.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
              </div>
            </Link>
          {/* crypto conversion */}
          <div>
          <div onClick={handleModalOne} className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2 self-center">
                <img src={crypto} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[15px] font-medium">Crypto Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[12px] font-medium text-[#7C7C7C]">Convert from one crypto currency to another.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
          
           {modalOne &&
            (
          <Modal >
            <div className="modal-content">
            <p className="text-center font-bold text-[10px] md:text-[12px] lg:text-[20px] py-2.5 lg:py-7 md:py-4">Crypto Conversion</p>
            <p className="text-[#04177F] text-[10px] md:text-[14px] lg:text-[20px] text-center font-bold">This Feature is Currently Not Available.</p>
            
              <div className="flex justify-center relative my-[35px] md:my-[25px]">
                <img src={cryptoFeature} alt="" className="lg:h-[200px] md:w-[150px] lg:w-[204.4px] md:h-[150px]"/>
              </div>
              <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                <div className="text-[8px] font-extrabold float-right ml-[80%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
                  Coming soon...
                </div>
                <div
                  onClick={()=>setModalOne(false)}
                  className={`bg-[#04177f] cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Okay
                </div>
              </div>
            </div>
          </Modal>
           )}
          {/* multi-wallet conversion */}
          <div>
          <div onClick={handleModalTwo}  className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2 self-center">
                <img src={multiwallet} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[15px] font-medium">Multi-Wallet Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[12px] font-medium text-[#7C7C7C]">Convert between fiat and crypto currency.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
          {modalTwo &&
            (
          <Modal>
           <div className="modal-content">
            <p className="text-center font-bold text-[10px] md:text-[12px] lg:text-[20px] py-2.5 lg:py-7 md:py-4">Multi-Wallet Conversion</p>
            <p className="text-[#04177F] text-[10px] md:text-[12px] lg:text-[20px] text-center font-bold">This Feature is Currently Not Available.</p>
          
              <div className="flex justify-center relative my-[35px] md:my-[25px]">
                <img src={mwFeature} alt=""  className="lg:h-[200px] md:w-[150px] lg:w-[204.4px] md:h-[150px]"/>
              </div>
        
            
            <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                <div className="text-[8px] font-extrabold float-right ml-[80%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
                  Coming soon...
                </div>
                <div
                  onClick={()=>setModalTwo(false)}
                  className={`bg-[#04177f] cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Okay
                </div>
              </div>
            </div> 
          </Modal>
              )} {/* airtime conversion */}
          <div>
          <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2 self-center">
                <img src="./Images/currencyImages/airtime.svg" alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[15px] font-medium">Airtime Conversion</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[12px] font-medium text-[#7C7C7C]">Convert your bulk airtime to real money, withdrawn to your bank account.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </div>
           {/* points redeemed */}
           <Link to='/point-redeem'>
          <div className="conversionLists cursor-pointer flex pl-[5px] pr-[14px] md:pr-[28px] lg:pr-[45px] md:pl-[8.59px] lg:pl-[15px] justify-between  mx-auto py-[7px] md:py-[9px] lg:py-[15px] rounded-[4px] md:rounded-[6.88px] lg:rounded-[12px]">
            <div className="flex gap-2 self-center">
                <img src={points} alt="fiat.svg" className="flex self-center lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-[9.2px] lg:text-[18px] md:text-[15px] font-medium">Points Redeemed</p>
                    <p className="text-[9px] lg:text-[15px] md:text-[12px] font-medium text-[#7C7C7C]">Redeem your earned points to real money, withdrawn to your bank account.</p>
                </div>
            </div>
            <div className="flex self-center">
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px] h-full" />
            </div>
          </div>
          </Link>
         </div>

        
         <div className={`flex gap-[15px] justify-center items-center mt-[68%] md:mt-[38%] lg:mt-[26%] lg:mb-[%]`}>
          <div className="font-medium text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?</div>
            <Link to="/ContactUs">
                <div className="bluebutton flex bg-[#04177f] text-[8.5px] md:text-[8.5px] lg:text-[12px] text-white">
                  <p className="self-center mx-auto align-middle">Contact Us</p>
                </div>
            </Link>
        </div>
        
        </div>

        </DashBoardLayout>
        </>

    );
}



export default CurrencyConversion;