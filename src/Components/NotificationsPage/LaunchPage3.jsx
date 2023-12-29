import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom/dist/react-router-dom.development";

import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import stars from "./assets/stars.svg";








const LaunchPage3 = () => { 
  const { isDarkMode } = useContext(ContextProvider);


    return (
        <DashBoardLayout>
<div>
<div className=" w-full mb-[20px] h-100  bg-white">
    <div className="Frame758532680  flex-col justify-center items-center gap-7 inline-flex">
        <div className="Frame758532675 h-3 flex-col justify-center items-center gap-6 flex">
            <div className="NewLaunch text-black text-md lg:text-3xl md:text-lg text-center font-medium ">New Launch</div>
        </div>
        <div
            className="w-full h-[110px] md:h-[150.29px] lg:h-[250px] rounded-[7px] md:rounded-[11.5px]
            bg-gradient-to-b from-pink-500 to-fuchsia-500  flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2
                className="text-[7px] mb-2 font-bold w-[110%] text-white whitespace-nowrap md:text-[12px] md:w-[70%] lg:w-[70%]
                 lg:text-[18px] 
              2xl:w-[80%] 2xl:text-[24px] lg:mb-4"
              >
                                        We are excited to launch our Local Money Transfer product with<br /> features like Transfer to 
                                        Personal Account, 
                    and Transfer to any<br /> Nigerian Bank Account

              </h2>
              <div className="Frame758532683 w-14 h-5 px-3.5 py-1 lg:w-32 lg:h-12 lg:px-12 lg:py-4 md:w-24 md:h-9 md:px-6 md:py-2 md:gap-1.5
               bg-orange-400 rounded lg:rounded-md justify-center items-center gap-1 inline-flex">
    <div className="Explore text-white text-xs lg:text-base font-medium leading-3 tracking-tight">Explore</div>
</div>

              {/* <h2 */}
                {/* // className="text-[5px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] */}
              {/* //  w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[14px] */}
              {/* //  lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]" */}
              {/* // > */}
                {/* August 10th, 2023 12 :00:00am */}
              {/* </h2> */}
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={stars}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          </div>

        <div className="Frame w-full flex-col justify-start items-start md:gap-7 gap-2.5 flex">
            <div className="Introducing w-full h-11 text-center text-black text-xs md:text-[17px] lg:text-lg font-medium
             leading-loose lg:leading-loose lg:tracking-wider tracking-tight">"Introducing Seamless Local Money Transfers: Transfer to Personal Accounts & 
             Any Nigerian Bank Instantly!"</div>
            <div className="Introduction w-full h-28 text-justify"><span className="text-stone-950 text-md md:text-base lg:text-2xl font-semibold 
             leading-snug lg:leading-loose lg:tracking-wide tracking-tight">Introduction:<br/></span><span className="text-stone-950 text-xs md:text-sm lg:text-base font-medium 
              leading-none lg:leading-loose lg:tracking-wide tracking-tight">Get ready to revolutionize the way you transfer money locally! 
              We're thrilled to announce the launch of our newest offering—Local Money Transfer. With the ability 
              to transfer funds directly to personal accounts and any Nigerian bank instantly, sending and receiving
               money has never been more convenient.<br/></span></div>
        </div>
        <div className="KeyFeatures w-full mt-[60px] md:mt-[-20px] lg:mt-[30px] text-justify"><span className="text-black text-md md:text-base lg:text-2xl
         font-semibold  
        leading-snug lg:leading-loose lg:tracking-wide tracking-tight">Key Features:<br/></span>
        <span className="text-zinc-600 text-xs md:text-sm lg:text-base font-medium lg:leading-loose lg:tracking-wide leading-none tracking-tight">Transfer to Personal Accounts: 
        Send money directly to your 
        contacts' personal accounts hassle-free.<br/>Any Nigerian Bank Supported: Enjoy the flexibility to transfer 
        funds to any bank across Nigeria.<br/>Instant Transactions: Say goodbye to waiting times—your transfers happen 
        instantly.<br/>Secure & Reliable: Trust our platform for secure and seamless money transfers.</span></div>

        <div className="w-full text-justify"><span className="text-black text-md md:text-base lg:text-2xl font-semibold leading-snug 
        tracking-tight lg:leading-loose lg:tracking-wide">Why Use Our Service?<br/></span><span className="text-zinc-600 text-xs md:text-sm lg:text-base font-medium leading-none
         tracking-tight lg:leading-loose lg:tracking-wide">Ease of Use: Effortlessly send money to personal accounts 
        or any Nigerian bank within seconds.<br/>Accessible Anytime, Anywhere: Access our service round the 
        clock from the comfort of your device.<br/>Trustworthy Transactions: Rely on our secure platform 
        for safe and quick money transfers.<br/></span><span className="text-black text-sm md:text-base lg:text-xl font-semibold leading-tight
         tracking-tight lg:leading-loose lg:tracking-wide">Conclusion:</span><span className="text-zinc-600 text-xs md:text-sm lg:text-base 
         font-medium leading-none lg:leading-loose lg:tracking-wide
         tracking-tight"> Experience the ultimate convenience in local money transfers with our new product! Say hello to
          swift and secure transactions, whether you're transferring to personal accounts or any Nigerian bank. Take charge of your finances and enjoy 
          hassle-free transfers today!<br/></span><span className="text-black text-sm md:text-base lg:text-xl
           font-semibold lg:leading-loose lg:tracking-wide leading-none tracking-tight">Call to Action:</span><span className="text-zinc-600 text-xs md:text-sm lg:text-base
           font-medium leading-normal lg:leading-loose lg:tracking-wide tracking-tight"> 
        Ready to simplify your money transfers? Try our Local Money Transfer now and enjoy instant, 
        reliable transactions at your fingertips!</span></div>
        <div className="flex gap-[15px] mt-[100px] lg:mt-[350px] mb-10 md:mt-[250px] justify-center items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>

    </div>

</div>

</div>

        </DashBoardLayout>

);
}

export default LaunchPage3

