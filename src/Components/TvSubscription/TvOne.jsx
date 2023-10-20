import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
// import { ContextProvider } from "../Context";
// import { Link } from "react-router-dom";

 const GoTv = () => {
    return(
        <DashBoardLayout>
            
            <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
                    <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold">
                        SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                        </p>
                    <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px]">
                    Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                      </p>
                </div>
                <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                    <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                </div>
            </div>

            <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                <div className="text-[#7E7E7E] text-[8px] lg:text-xl md:text-[11.46px] font-medium">
                    <span>Subscribe Your</span>
                    <span>Gotv</span>
                    <span> GOTV Decoder Instantly</span>
                </div>                
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />     
            </div>

            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                        Confirm Decoder Type</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]">Gotv</button>
                </div>
                
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                    Select Package</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]">Gotv</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                    Smart Card / IUC Number</label>
                    <input type="number" max='10' placeholder="1234567890" className="outline-0 border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]"/>
                </div>
                
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                        Card Name</label>
                    <input type="text" placeholder="Aremxyplug" className="outline-0 border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                        Phone Number</label>
                        <input type="number" max='10' placeholder="7744115566" className="outline-0 border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]"/>
                </div>
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="Email" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                        Email</label>
                        <input type="email" placeholder="Habib@aremxy.com" className="outline-0 border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]"/>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px]">
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                        Amount</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]">Gotv</button>
                </div>
                
                <div className="flex flex-col gap-1 lg:gap-2 ">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px]">
                       Payment Method</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-[312px] md:w-[220px] lg:w-[375px] h-[30px] border-[#9C9C9C]">Gotv</button>
                </div>
            </div>
            
        </DashBoardLayout>
    )
}

export default GoTv