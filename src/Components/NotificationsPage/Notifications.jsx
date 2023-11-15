import React, { useState } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import stack from "./assets/stack.svg";
import starbox from "./assets/startbox.svg";
import arrangebox from "./assets/arrangebox.svg";
// import star from "./assets/star.svg";
// import arrange from "./assets/arrange.svg";
import wallet from "./assets/walletbox.svg";
import cards from "./assets/cardbox.svg";
import charts from "./assets/chartbox.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import "./Notifications.css";
import faq from "./assets/faq.svg";
import file from "./assets/file.svg";
import folder from "./assets/folder.svg";
import five from "./assets/five.svg";

export default function NotificationsPage() {
  const { isDarkMode } = useContext(ContextProvider);

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <DashBoardLayout>
      <>
        <div class="flex gap-[25px] lg:w-full lg:h-[1850px] md:h-[1200px] h-[800px] md:w-full w-full flex-col">
          <div
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px]
     bg-gradient-to-r from-indigo-300 via-fuchsia-500 to-rose-500 flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                GET NOTIFIED AND STAY UP TO DATE WITH <br /> AREMXYPLUG.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Be extraordinaire updated, never miss out on any of our official
                updates, trends, news, announcements, and opportunities.
              </h2>
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={stack}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          </div>
          <div className="flex flex-col relative">
            <div className="Frame758532592 w-full justify-between gap-3 flex">
              <div className="flex flex-col">
              <div
                onClick={() => {
                  setIsOpen1(true);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className="cursor-pointer"
              >
                <img
                  className="lg:w-32  lg:h-28 md:w-20 md:h-16 w-14 h-12  flex"
                  src={starbox}
                  alt=""
                />
                {isOpen1 && (
                <img className=" lg:w-[20px] lg:h-[20px] w-[9px] h-[9px] ml-[45px] mt-[-47px]
                 md:mt-[-62px] md:ml-[67px]
                 lg:mt-[-110px] lg:ml-[106px]" src={five} alt="" />
                )}
              </div>
              {isOpen1 && (
                <div
                  className="w-[53px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[125px] lg:h-[2px]
            lg:mt-[145px]  md:w-[77px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                />
              )}
            
              </div>
              <div
                              onClick={() => {
                                setIsOpen2(true);
                                setIsOpen1(false);
                                setIsOpen3(false);
                                setIsOpen4(false);
                                setIsOpen5(false);
                              }}
              
              className="flex  flex-col">
              <div
                className=" cursor-pointer"
              >
                <img
                  className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                  src={arrangebox}
                  alt=""
                />
                {isOpen2 && (
                <img className=" lg:w-[20px] lg:h-[20px]  lg:top-[4px] w-[9px] h-[9px] ml-[45px] mt-[-47px]
                lg:mt-[-110px] lg:ml-[106px] md:mt-[-62px] md:ml-[67px] " src={five} alt="" />
                )}
              </div>
              {isOpen2 && (
                <div
                  className="w-[53px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[125px] lg:h-[2px]
            lg:mt-[145px]  md:w-[77px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                />
              )}

              </div>

              <div className="flex flex-col">
              <div
                onClick={() => {
                  setIsOpen3(true);
                  setIsOpen2(false);
                  setIsOpen1(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className="cursor-pointer"
              >
                <img
                  className="lg:w-32 lg:h-28 md:w-20  md:h-16 w-14 h-12 flex"
                  src={wallet}
                  alt=""
                />
                {isOpen3 && (
                <img className="lg:mt-[-110px] lg:ml-[106px] lg:w-[20px] lg:h-[20px] 
                 md:mt-[-62px] md:ml-[67px] w-[9px] h-[9px] ml-[45px] mt-[-47px] " src={five} alt="" />
                )}
              </div>
              {isOpen3 && (
                <div
                  className="w-[53px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[125px] lg:h-[2px]
            lg:mt-[145px]  md:w-[77px]  mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                />
              )}

              </div>

              <div className="flex flex-col">
              <div
                onClick={() => {
                  setIsOpen4(true);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen1(false);
                  setIsOpen5(false);
                }}
                className="cursor-pointer"
              >
                <img
                  className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                  src={cards}
                  alt=""
                />
                {isOpen4 && (
                <img className="lg:mt-[-110px] lg:ml-[106px] lg:w-[20px] lg:h-[20px] lg:top-[4px] w-[9px] h-[9px] ml-[45px]
                md:mt-[-62px] md:ml-[67px] mt-[-47px] lg:left-[920px]" src={five} alt="" />
                )}
              </div>
              {isOpen4 && (
                <div
                  className="w-[53px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[125px] lg:h-[2px]
            lg:mt-[145px] md:w-[77px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                />
              )}

              </div>

              <div className="flex flex-col">
              <div
                onClick={() => {
                  setIsOpen5(true);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen1(false);
                }}
                className="cursor-pointer"
              >
                <img
                  className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                  src={charts}
                  alt=""
                />
                {isOpen5 && (
                <img className="lg:mt-[-110px] lg:ml-[106px] lg:w-[20px] lg:h-[20px] lg:top-[4px] w-[9px] h-[9px] ml-[45px] mt-[-47px]
                md:mt-[-62px] md:ml-[67px] lg:left-[1193px]" src={five} alt="" />
                )}
              </div>
              {isOpen5 && (
                <div
                  className="w-[53px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[125px] lg:h-[2px]
            lg:mt-[145px] md:w-[77px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                />
              )}

            </div>

            </div>
            <div
              className=" lg:w-full lg:h-[2px] absolute w-full md:w-full h-px top-[70px] md:top-[96px] 
               left-[3px] bg-[#d9d9d999]
           lg:top-[168px] lg:left-[2px] md:left-[5px] lg:rounded-[10px] rounded-[5.87px]"
            >


            </div>
                    {/* first flow */}
                    {isOpen1 && (
            <div
              className="flex flex-col w-full lg:w-full md:w-full mt-[20px] lg:mt-[100px]
         md:mt-[60px]  items-center md:gap-4 lg:gap-6 gap-[8.64px] "
            >
              <div
                className="flex  bg-white justify-between items-center w-full 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[8px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
              
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to lunch our global platform for all things
                    telecom,
                    <br /> payments, and Digital services.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Learn more..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={faq} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className=" flex gap-[5.729px] mt-[45px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
              >
                <p
                  className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                >
                  You need help?
                </p>
                <Link
                  to="/contactUs"
                  className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

                    {/* second flow */}
                    {isOpen2 && (
            <div
              className="flex flex-col w-full lg:w-full md:w-full mt-[20px] lg:mt-[100px]
         md:mt-[60px] items-center md:gap-4 justify-start lg:gap-6 gap-[8.64px] "
            >
              <div
                className="flex  bg-white w-full items-center justify-between 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                    <br /> Data Top-up features for all local networks
                    <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Buy Now..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={file} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[8px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                    <br /> Data Top-up features for all local networks
                    <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Buy Now..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={file} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                    <br /> Data Top-up features for all local networks
                    <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Buy Now..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={file} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                    <br /> Data Top-up features for all local networks
                    <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Buy Now..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={file} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                    <br /> Data Top-up features for all local networks
                    <br /> including MTN, AIRTEL, GLO, and 9MOBILE.
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Buy Now..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={file} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className=" flex gap-[5.729px] mt-[45px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
              >
                <p
                  className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                >
                  You need help?
                </p>
                <Link
                  to="/contactUs"
                  className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
                  {/* third flow */}
                  {isOpen3 && (
            <div className="flex flex-col w-full lg:w-full  md:w-full mt-[20px] lg:mt-[100px] md:mt-[60px] items-center md:gap-4 lg:gap-6 gap-[8.64px] ">
              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Local Money Transfer
                    <br /> product with features like Transfer to Personal
                    <br /> Account, and Transfer to any Nigerian Bank Account
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Transfer Money..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={folder} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[8px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                    We are excited to launch our Local Money Transfer
                    <br /> product with features like Transfer to Personal
                    <br /> Account, and Transfer to any Nigerian Bank Account
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Transfer Money..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={folder} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Local Money Transfer
                    <br /> product with features like Transfer to Personal
                    <br /> Account, and Transfer to any Nigerian Bank Account
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Transfer Money..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={folder} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs   text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Local Money Transfer
                    <br /> product with features like Transfer to Personal
                    <br /> Account, and Transfer to any Nigerian Bank Account
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Transfer Money..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={folder} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className="flex  bg-white w-full justify-between items-center 
           "
              >
                <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                  <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                    New Launch!!
                  </div>

                  <p className="font-bold text-text-color-fade md:text-xs   text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Local Money Transfer
                    <br /> product with features like Transfer to Personal
                    <br /> Account, and Transfer to any Nigerian Bank Account
                  </p>
                  <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                    August 10th, 2023 12 :00:00am
                  </p>
                  <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                    Transfer Money..
                  </div>
                </div>

                
                  <img className="lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]" src={folder} alt="" />
                
              </div>
              <div
                className=" lg:w-full lg:h-[2px]  border-neutral-400  w-full md:w-full h-px top-[65px] 
                    md:top-[300px] left-[24px] bg-[#d9d9d999]
           lg:top-[157px] lg:left-[10px] md:left-[50px] lg:rounded-[10px] rounded-[5.87px]"
              ></div>

              <div
                className=" flex gap-[5.729px] mt-[45px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
              >
                <p
                  className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                >
                  You need help?
                </p>
                <Link
                  to="/contactUs"
                  className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

                   {/* fourth flow */}
                   {isOpen4 && (
            <div className={`${styles.viewTransactions}  `}>
              <img
                className={styles.noTransactions}
                src="./Images/Dashboardimages/noTransactionFound.png"
                alt=""
              />
              {/* <div className={styles.viewAll}> */}
              {/* <div className={styles.viewText}>View all transactions</div> */}
              {/* <img */}
              {/* // className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" */}
              {/* // src="./Images/Dashboardimages/empty-wallet-add.png" */}
              {/* // alt="" */}
              {/* // /> */}
              {/* </div> */}
              <div
                className={`${
                  isDarkMode ? "" : "text-[#0003]"
                } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
              >
                No Notification Found !
              </div>
              <div className="flex gap-[15px] mt-[150px] items-center">
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
          )}
                    {/* fifth flow */}
                    {isOpen5 && (
            <div className=" flex flex-col  mt-[20px] lg:mt-[100px] md:mt-[60px]
             items-center  ">
              <div className="firstBox w-full  ">
              </div>

              <div className="secondBox w-full ">
              </div>

              <div className="thirdBox w-full">
              </div>

              <div className="fourthBox w-full ">
              </div>

              <div className="fifthBox w-full ">
              </div>

              <div
                className=" flex gap-[5.729px] mt-[45px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
              >
                <p
                  className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                >
                  You need help?
                </p>
                <Link
                  to="/contactUs"
                  className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          </div>


        </div>
      </>
    </DashBoardLayout>
  );
}
