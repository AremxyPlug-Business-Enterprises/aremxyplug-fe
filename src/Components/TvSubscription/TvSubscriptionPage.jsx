import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
// import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";

export const TvSubscription = () =>{
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
                <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select Decoder Type</div>
                <div>
                    <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                </div>
            </div>

            <div id="tvGrid" className="mx-auto flex flex-wrap justify-between  gap-[25px] md:h-[70px] md:flex-row md:flex-nowrap md:gap-[21.27px]  lg:h-[120px]  md:w-[100%] lg:gap-[37px]">
                <Link to='/GoTv'>
                    <img src="./Images/TvSubscription/goTV.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                </Link>
                <Link to='/DsTv'>
                <img src="./Images/TvSubscription/dstv.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                </Link>
                <Link to='/StarTimes'>
                <img src="./Images/TvSubscription/starTimes.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                </Link>
                <Link to='/Showmax'>
                <img src="./Images/TvSubscription/showmax.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                </Link>
                
            </div>

            {/* <div className="flex flex-row items-center justify-center mt-[200px] md:mt-[38%] gap-2"> */}

            <div className="flex justify-center items-center pb-[10%] mt-[97%] md:mt-[70%] gap-2">
           <div className="font-medium text-[10px] md:text-[10px] lg:text-[15px] self-center">You need help ?</div>
            <Link to="/ContactUs">
                <div className="bluebutton flex bg-[#04177f] text-[8.5px] md:text-[8.5px] lg:text-[12px] text-white">
                  <p className="self-center mx-auto align-middle">Contact Us</p>
                </div>
            </Link>
         </div>
        </DashBoardLayout>
    )
}