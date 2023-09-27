import React, {useState} from "react";
import { Link } from "react-router-dom";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import creditCard from "./Images/credit.svg"
import right from "./Images/right.svg"
import nigeria from "./Images/nigeria.svg"
import down from "./Images/drop.svg"
import usd from "./Images/usd.svg"
import clock from './Images/clock.svg'
import rate from "./Images/rate.svg"
import fee from "./Images/fee.svg"



const FiatConversion = () => {
    const [numeric, setNumeric] = useState('');

    const NumericChange = (event) => {
      const inputValue = event.target.value;
      // Use a regular expression to remove non-numeric characters
      const numericInput = inputValue.replace(/[^0-9]/g, '');
      setNumeric(numericInput);
    };
    const [numeric2, setNumeric2] = useState('');

    const NumericChange2 = (event) => {
      const inputValue = event.target.value;
      // Use a regular expression to remove non-numeric characters
      const numericInput2 = inputValue.replace(/[^0-9]/g, '');
      setNumeric2(numericInput2);
    };


    return(
        <DashBoardLayout>
            <div className="">
                <div id='fiatBackground' className="h-[64.71px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                    <div className="py-[9.57px] md:py-[16.61px] lg:py-[29px] align-middle flex flex-col gap-1.5">
                        <p className="text-[8px] lg:text-[24px] md:text-[13.75px] font-semibold w-[194.12px] lg:w-[588px] md:w-[336.86px]">CONVERT FIAT CURRENCY WITH AREMXYPLUG.</p>
                        <p className="text-[5px] lg:text-[20px] md:text-[11.46px] w-[177.94px] lg:w-[539px] md:w-[308.8px]">Convert from one fiat currency to another without any hassle, enjoy competitive exchange rate with no any hidden fee.</p>
                    </div>
                    <div className="">
                        <img src={creditCard} alt="" className="h-full w-full " />
                    </div>
                </div>
                <div className=" mx-auto flex gap-3 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                   <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select the below fiat currency to convert</div>
                   <div>
                      <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                   </div>
                </div>

                <div className="flex mx-auto ">
                    <div className="bg-[#04177F] text-white text-[7px] md:text-[10px] lg:text-[16px] text-center font-semibold w-[312px] md:w-[210.83px] lg:w-[368px] py-[4px] lg:py-[10px] md:py-[6px]">
                        Real-time Fiat Conversion Check Rate
                    </div>
                </div>

                <div className="mx-auto ">
                    <div className="flex gap-1 lg:gap-2 lg:my-[40px] md:my-[30px] my-[20px]">
                        <p className="text-[8px] md:text-[11.46px] lg:text-xl font-medium">From</p>
                        <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                
                   <div className="flex ">
                    <input type="number" value={numeric} onChange={NumericChange} placeholder="Amount To Transfer" className="input text-[8px] flex md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full md:h-[41.82px] lg:h-[70px]" />
                    <button class="dropdown bg-[#04177F]">
                        <div class="dropbtn flex gap-[7.2px] lg:gap-[18px] justify-center w-[40px] md:w-[63px] lg:w-[123px]">
                            <img src={nigeria} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]" />
                            <img src={down} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]"/>
                        </div>
                        <div class="dropdown-content">
                            <p>Country-one</p>
                            <p>Country-two</p>
                        </div>
                    </button>
                   </div>

                   <div className="available flex justify-between w-[160px] md:w-[210px] lg:w-[360px] h-[13px] lg:h-[41px] md:h-[20px] border-[#000000] border-opacity-30 rounded-[4px] md:rounded-[6px] lg:rounded-[8px] border-[0.8px] mx-auto my-7 px-2">
                    <input type="button" value="Available Balance (50,000.00)" className="text-[7px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] font-medium "/>
                    <div className="flex self-center"><img src={nigeria} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[16px] md:w-[16px] flex" /></div>
                   </div>

                    <div className="flex gap-1 lg:gap-2 lg:my-[40px] md:my-[30px] my-[20px]">
                        <p className="text-[8px] md:text-[11.46px] lg:text-xl font-medium">To Recipient</p>
                        <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                   <div className="flex">
                    <input type="number" value={numeric2} onChange={NumericChange2} placeholder="Amount To Recieve" className="input text-[8px] md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full h-[24.24px] md:h-[41.82px] lg:h-[70px]" />
                    <button class="dropdown bg-[#04177F]">
                        <div class="dropbtn flex gap-[7.2px] lg:gap-[18px] w-[40px] md:w-[63px] justify-center  lg:w-[123px]">
                            <img src={usd} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[13.75px] md:w-[13.75px]" />
                            <img src={down} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[13.75px] md:w-[13.75px]"/>
                        </div>
                        <div class="dropdown-content">
                            <p>Country-one</p>
                            <p>Country-two</p>
                        </div>
                    </button>
                   </div> 

                   <div className="flex justify-between gap-3 my-6 px-2">
                       <div className="flex gap-[2px]">
                        <img src={rate} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> 1 NGN ~ 0.001 USD</span>
                       </div>
                       <div className="flex gap-[2px]">
                        <img src={fee} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Transaction Fee - ₦50.00 </span>
                       </div>
                       <div className="flex gap-[2px]">
                        <img src={clock} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Completion Time - instantly</span>
                       </div>
                   </div>

                   <div className="flex mx-auto ">
                    <button className="bg-[#04177F] my-[40px] lg:my-[80px] md:my-[55px] mx-auto text-white text-[7px] md:text-[10px] lg:text-[16px] rounded md:rounded-[7px] lg:rounded-[12px] text-center font-semibold w-[312px] md:w-[210.83px] lg:w-[163px] h-[40px] lg:h-[38px] md:h-[25px]">
                        Proceed
                    </button>
                </div>
                </div>

                
         <div className="flex justify-center pt-[90px] pb-3 md:pt-[120px] md:pb-4 lg:pt-[160px] lg:pb-6 gap-2">
            <div className="font-medium text-[10px] md:text-[12px] lg:text-[16px] self-center">You need help ?</div>
            <Link to="/ContactUs">
                <div className="bluebutton bg-[#04177f] text-center text-[8px] md:text-[10px] lg:text-[12px] text-white"> Contact Us</div>
            </Link>
        </div>
        </div>
        </DashBoardLayout>
    )
    
}

export default FiatConversion