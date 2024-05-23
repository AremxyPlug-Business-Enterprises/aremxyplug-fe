import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom/dist/react-router-dom.development";
// import launch from "./assets/launch2.svg";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import phone from "./assets/phones.svg";










const LaunchPage2 = () => { 
  const { isDarkMode } = useContext(ContextProvider);


    return (
        <DashBoardLayout>

<div className="Frame758532680 h-100 left-[24px] top-[58px]  flex-col justify-start items-center w-full gap-7 flex">
        <div className="Frame758532675 h-3 flex-col justify-center items-center gap-6 flex">
            <div className="NewLaunch text-black text-md font-medium lg:text-3xl md:text-lg">New Launch</div>
        </div>
        <div
            className="w-full h-[110px] shadow md:h-[150.29px] lg:h-[250px] md:rounded-[11.5px]
            bg-green-200 rounded-lg flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2
                className="text-[8px] whitespace-nowrap mb-2 w-52 text-white  font-semibold md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 
              2xl:w-[80%] 2xl:text-[24px] lg:mb-4"
              >
                We are excited to launch our Airtime Top-up and Data Top-up <br/> features for all local networks including MTN, AIRTEL, GLO, and<br/> 9MOBILE.
              </h2>
              <div className="Frame758532683 w-14 h-5 px-3.5 py-1 lg:w-32 lg:h-12 lg:px-12 lg:py-4 md:w-24 md:h-9 md:px-6 md:py-2 md:gap-1.5
               bg-orange-400 rounded lg:rounded-md justify-center items-center gap-1 inline-flex">
    <div className="Explore text-white text-xs lg:text-base font-medium leading-3 tracking-tight">Explore</div>
</div>
              {/* <h2 */}
                {/* // className="text-neutral-800 text-[5px] font-medium  leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] */}
              {/* //  w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] */}
              {/* //  lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]" */}
              {/* // > */}
                {/* August 10th, 2023 12 :00:00am */}
              {/* </h2> */}
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={phone}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          </div>
           <div className="flex flex-col gap-[30px]">
          <div className="Instant w-full h-11 text-center text-black md:text-sm text-xs lg:text-lg lg:leading-loose
           font-medium leading-tight tracking-tight">"Instant Connectivity at Your Fingertips:
            Introducing Airtime & Data Top-up for All Networks!"</div>
            <div className="Introduction w-full h-28 text-justify"><span className="text-stone-950
             text-base lg:text-3xl md:text-lg font-semibold leading-snug tracking-tight">Introduction:<br/></span><span className="
              text-xs md:text-sm lg:text-base text-zinc-600 font-medium leading-normal lg:leading-loose tracking-tight">We're thrilled to announce 
            the arrival of our latest game-changing features—Airtime and Data Top-ups for every major network in town!
             Say goodbye to the hassle of searching for top-up cards or running out of data at crucial moments. With just a few
              taps, keep your connections alive, your conversations going, and your internet blazing with our seamless top-up
               services.<br/><br/><br/></span></div>

               <div className="KeyFeature w-full mt-[70px] text-justify"><span className="text-black text-base md:text-lg lg:text-3xl font-medium 
               leading-snug tracking-tight">Key Features:<br/></span><span className="text-zinc-600 text-xs md:text-sm lg:text-base font-medium
             leading-none lg:leading-[30px] lg:tracking-wide tracking-tight">All Networks Covered: MTN, AIRTEL, GLO, and 9MOBILE—no network 
             limitations!<br/>Instant Access: Top-up your airtime or data within seconds, anytime, anywhere.<br/>Convenience 
             Redefined: No need for physical cards or visiting stores—handle everything from your device.<br/>Flexible Options: 
             Choose from a range of denominations to suit your needs.<br/>Security & Reliability: 
               Trustworthy transactions with top-notch security measures in place.</span></div>

               {/* <div className="w-full mt-[60px] "> */}
                {/* <h2 className="text-justify text-black font-semibold leading-snug lg:text-lg ">Key Features:</h2> */}
                {/* <ol className="text-zinc-600 text-justify text-[10px] md:text-xs lg:text-base tracking-tight font-medium leading-loose h-30 "> */}
                    {/* <li className="w-full">All Networks Covered: MTN, AIRTEL, GLO, and 9MOBILE—no network limitations!</li> */}
                    {/* <li>Instant Access: Top-up your airtime or data within seconds, anytime, anywhere.</li> */}
                    {/* <li className="whiespace-nowrap">Convenience Redefined: No need for physical cards or visiting stores—handle everything from your device.</li> */}
                    {/* <li>Flexible Options: Choose from a range of denominations to suit your needs.</li> */}
                    {/* <li>Security & Reliability: Trustworthy transactions with top-notch security measures in place.</li> */}
{/*  */}
                {/* </ol> */}
               {/* </div> */}

               <div className=" w-full mt-[20px] text-justify"><span className="text-black text-md md:text-lg lg:text-3xl font-semibold leading-snug
                tracking-tight">Why Use Our Service?<br/></span><span className="text-zinc-600 text-xs lg:text-base md:text-sm
                font-medium leading-none lg:leading-[50px] w-full tracking-tight">Effortless Transactions: Streamlined processes for 
                a hassle-free experience.<br/>24/7 Accessibility: Top-up at any time, day or night, wherever
                 you are.<br/>Reliable Service: Trust our platform for secure and swift 
                 transactions.<br/></span><span className="text-black text-sm md:text-base lg:text-2xl font-semibold
                  leading-tight lg:leading-loose tracking-tight">Conclusion</span><span className="text-black text-sm md:text-base lg:text-2xl font-semibold
                  leading-none lg:leading-loose tracking-tight">: </span><span className="text-zinc-600 text-xs md:text-sm lg:text-base
                   font-medium
                   leading-none lg:leading-loose tracking-tight">Stay connected seamlessly with our new Airtime and Data Top-up
                    features!
                    Elevate your connectivity experience and bid farewell to interruptions or delays. Join us today and
                     enjoy the convenience of instant top-ups across all major networks. Embrace the freedom to connect 
                     whenever and wherever you want!<br/></span><span className="text-black text-sm md:text-base lg:text-2xl font-semibold
                      leading-tight lg:leading-loose tracking-tight">Call to Action</span><span className="text-black lg:text-lg
                       text-sm md:text-base font-semibold
                       leading-none lg:leading-loose tracking-tight">: </span><span className="text-zinc-600 lg:text-base md:text-sm text-xs font-medium leading-loose
                tracking-tight">Ready to top-up effortlessly? 
               Try it now and experience uninterrupted connectivity like never before!</span></div>
               </div>

               <div className="flex gap-[15px] mt-[80px] lg:mt-[350px] mb-10 md:mt-[200px] justify-center items-center">
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
        


        </DashBoardLayout>

);
}

export default LaunchPage2
