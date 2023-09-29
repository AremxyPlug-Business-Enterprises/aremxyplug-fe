import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import Refer1 from "../Referrals/referralImage/Excellent Review.svg";
import copyRefer from "../Referrals/referralImage/copy.svg";
import whatSapp from "../Referrals/referralImage/whatsappRefer.svg";
import instagram from "../Referrals/referralImage/InstagramRefer.svg";
import facebook from "../Referrals/referralImage/facebookRefer.svg";
import twitter from "../Referrals/referralImage/twitterRefer.svg";
import rightArrow from "../Referrals/referralImage/rightArrowRefer.svg";
import walletRefer from "../Referrals/referralImage/walletRefer.svg";
import arrowDown from "../Referrals/referralImage/arrow-down.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";

export default function Referral() {
  return (
    <DashBoardLayout>
      <div className="h-[100%] px-[19px] ">
        {/* RECTANGLE1 // CONTENT ONE CONTAINER */}

        <div
          className="rectangle1 flex justify-between  gap-[18.34px]  min-h-[65.33px] w-[100%]  
   pt-[2.665px] pr-[19.996px] pb-[2.668px] pl-[16.664px]  lg:mt-[50px] lg:mb-[60px] mb-[30px] rounded-[6.667px] 
   md:pt-[5.581px] md:pb-[4.586px] md:pr-[34.371px] md:pl-[28.646px] md:gap-[31.514px] md:h-[112.29px]
  lg:py-[8px] lg:pl-[60px] lg:pr-[50px] lg:gap-[55px] lg:h-[196px] lg:rounded-[20px]"
        >
          {/* Container CONTENT_ONE LEFT_SIDE  */}
          <div className="flex flex-col gap-[5px] w-[70%] lg:gap-[15px] md:gap-[8.594px] ">
            {/* header */}
            <h2
              className="font-[600] leading-[12px] text-[8px] text-[#000] mt-[15px] 
     md:text-[13.75px] md:leading-[21px]
      lg:text-[24px] lg:leading-[36px]"
            >
              REFER AND EARN, ALL IN ONE WITH
              <br />
              AREMXYPLUG.
            </h2>
            {/* sub-text */}
            <p
              className="font-[400] text-[7px] leading-[9.1px] 
      md:text-[9.167px]  md:leading-[11.917px]
      lg:text-[16px] lg:leading-[20.8px] "
            >
              <span className="md:block">
                
                Refer your friends and family with your referral link / code and
                earn free
              </span>
              <span className="md:block">
                points,redeem to real money, withdrawn to your bank account
                instantly.
              </span>
            </p>
          </div>
          <div className="w-[25%] flex items-center">
            <img
              src={Refer1}
              className="w-[100%] md:h-[100%] h-[60px]"
              alt=""
            />
          </div>
        </div>
        {/* INPUT_CONTENT */}
        <div className="flex flex-col gap-[20px] lg:gap-[25px] mb-[30px]">
          {/* INPUT_ONE */}
          <div className="flex flex-col gap-[2.667px] lg:gap-[8px]">
            <h2
              className="font-[600] text-[8px] leading-[12px] 
  md:text-[9.167px] md:leading-[14px]
  lg:text-[16px] lg:leading-[24px]"
            >
              Your Referral Link is:
            </h2>
            <div
              className="flex pl-[5px]  gap-[16.33px]  
   border-[0.333px] rounded-[7.333px] h-[18px] items-center
    border-[#7C7C7C] w-[100%] md:h-[30.94px] md:rounded-[12.607px] 
    lg:h-[54px] lg:rounded-[22px]  "
            >
              {/* THE REFER LINK */}

              <p
                className="w-[75%] font-[600]  text-[#7C7C7C] text-[7px] leading-[11px]
       lg:text-[16px] lg:leading-[24px]
        md:text-[9.167px] md:leading-[14px] md:pl-[10px] md:overflow-auto overflow-x-scroll"
              >
                https://aremxyplug.com/app/register?referral=aremxyplug
              </p>
              {/* COPY LINK */}
              <div
                className="flex justify-center 
       gap-[10px] w-[25%] h-[100%] bg-[#04177F] items-center 
       rounded-e-[7.333px] lg:rounded-e-[22px] md:rounded-e-[12.607px]"
              >
                <img
                  src={copyRefer}
                  className="lg:h-[24px] lg:w-[24px] cursor-pointer"
                  alt="copy"
                />
                <p
                  className="  font-[500] text-[7px] leading-[11px] text-white 
       lg:text-[16px] lg:leading-[24px] md:text-[9.147px] md:leading-[14px] cursor-pointer"
                >
                  Copy link
                </p>
              </div>
            </div>
          </div>
          {/* INPUT_TWO */}
          <div className="flex flex-col gap-[2.667px] lg:gap-[8px]">
            <h2
              className="font-[600] text-[8px] leading-[12px]
 md:text-[9.167px] md:leading-[14px]
lg:text-[16px] lg:leading-[24px]"
            >
              Your Referral Link is:
            </h2>
            <div
              className="flex  pl-[5px]  gap-[16.33px]  
   border-[0.333px] rounded-[7.333px] h-[18px] items-center
    border-[#7C7C7C] w-[100%] md:h-[30.94px] md:rounded-[12.607px] 
    lg:h-[54px] lg:rounded-[22px]"
            >
              {/* THE REFER LINK 2*/}

              <p
                className="w-[75%] font-[600]  text-[#7C7C7C] text-[7px] leading-[11px]
       lg:text-[16px]   md:text-[9.167px] md:leading-[14px] lg:leading-[24px] md:pl-[10px]"
              >
                aremxyplug.com
              </p>
              {/* COPY LINK */}
              <div
                className="flex justify-center 
       gap-[10px] w-[25%] h-[100%] bg-[#04177F] items-center
        rounded-e-[7.333px] lg:rounded-e-[22px] md:rounded-e-[12.607px]"
              >
                <img
                  src={copyRefer}
                  className="lg:h-[24px] lg:w-[24px] cursor-pointer"
                  alt="copy"
                />
                <p
                  className="  font-[500] text-[7px] leading-[11px] text-white 
       md:text-[9.147px] md:leading-[14px]
       lg:text-[16px] lg:leading-[24px] cursor-pointer"
                >
                  Copy link
                </p>
              </div>
            </div>
          </div>

          {/* CHECK POINT AND SHARE BUTTON */}
          <div className="flex flex-col md:flex md:flex-row md:justify-between">
            {/* CHECK POINT BALANCE BUTTON */}

            <p
             className="md:self-center text-center font-[600] leading-[10.4px] text-[8px] 
    shadow-[2.29167px]
     text-white rounded-[5.729px]  py-[5px] bg-[#04177F]  lg:px-[104px] lg:py-[15px]
     md:pt-[9.394px] md:pr-[59.579px] md:pb-[8.824px] md:pl-[59.888px]
       lg:text-[16px] lg:leading-[24px] lg:rounded-[10px] 
     "
            >
              Check Point Balance
            </p>

            {/* SHARE AND ICON CONTENT */}
            {/*  */}
            <div className="flex flex-col gap-[18.333px] ">
              <p
                className="text-[8px] text-center text-[#7C7C7C] py-[5.729px] font-[600] leading-[12px] 
   border-b-[2px] border-b-[#CED9FF]
    md:text-[11.458px] md:leading-[17px] lg:text-[20px] lg:leading-[30px]"
              >
                Share:
              </p>

              {/* ICONS LINKS TO SOCIAL MEDIA */}
              <div className="flex md:gap-[35.521px] gap-[35.32px] justify-center">
                {/* facebook */}
               
                  <img
                    src={facebook}
                    className="cursor-pointer lg:h-[60px] lg:w-[60px] h-[34.375px] w-[34.375px]"
                    alt="facebook-icon"
                  />
               
                {/* twitter */}
                
                  <img
                    src={twitter}
                    className="cursor-pointer lg:h-[60px] lg:w-[60px] h-[34.375px] w-[34.375px]"
                    alt="twitter-icon"
                  />
                
                {/* instagram */}
                
                  <img
                    src={instagram}
                    className="cursor-pointer lg:h-[60px] lg:w-[60px] h-[34.375px] w-[34.375px]"
                    alt="instagram-icon"
                  />
                
                {/* whatsapp */}
              
                  <img
                    src={whatSapp}
                    className="cursor-pointer lg:h-[60px] lg:w-[60px] h-[34.375px] w-[34.375px]"
                    alt="Whatsapp-icon"
                  />
               
              </div>
            </div>
          </div>
        </div>

        {/* REFERRAL ANALYSIS */}
        <div className="flex flex-col mb-[20px] ">
          {/* Referral heading */}
          <div className="flex gap-[3px] mb-[2px] lg:mb-[15px]">
            <p
              className="font-[600] text-[8px] text-[#7C7C7C] leading-[12px]
md:text-[11.458px] md:leading-[17px]
lg:text-[20px] lg:leading-[30px]"
            >
              Referral Analysis
            </p>
            {/* arrow */}
            <img
              src={rightArrow}
              className="self-center md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
              alt="rightArrow"
            />
          </div>

          {/* Referral boxes */}
          <div className="flex gap-[21px] md:gap-[51.849px] lg:gap-[90.5px] lg:mb-[15px]">
            {/* box-1 */}
            <div
              className="flex flex-col w-1/3 md:w-auto rounded-[1.97px] justify-center
   bg-[#D5F6E3] md:py-[8.597px] md:px-[22.917px] 
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] lg:rounded-[6px]"
            >
              {/* TOTAL REFERRAL */}
              <div className="flex justify-center gap-[5px]">
                <h2
                  className="font-style text-[#000000] font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Total Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-[16px] lg:h-[16px]
     w-[4.924px] h-[4.924px] self-center"
                  alt="arrowDown"
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                100
              </h2>
            </div>
            {/* box-2 */}
            <div
              className="flex w-1/3 md:w-auto justify-center flex-col rounded-[1.97px] bg-[#92ABFE2E]
   bg-opacity-[18%] md:py-[8.597px] md:px-[22.917px] 
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] lg:rounded-[6px]"
            >
              {/* ACTIVE REFFERAL */}
              <div className=" flex justify-center gap-[5px]">
                <h2
                  className="font-style text-[#000000] font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Active Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-[16px] lg:h-[16px]
     w-[4.924px] h-[4.924px] self-center"
                  alt=""
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                70
              </h2>
            </div>
            {/* box-3 */}
            <div
              className="flex w-1/3 md:w-auto flex-col rounded-[1.97px] bg-[#FDCECE]
   gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] md:py-[8.597px] md:px-[22.917px] 
   lg:py-[15px] lg:rounded-[6px]"
            >
              {/* INACTIVE REFERRAL */}
              <div className="flex justify-center lg:gap-[5px]">
                <h2
                  className="font-style text-[#000000] font-[500] text-center text-[10px] leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
                >
                  Inactive Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-[16px] lg:h-[16px]
     w-[4.924px] h-[4.924px] self-center"
                  alt=""
                />
              </div>
              <h2
                className="font-style font-[500] text-[10px] text-center leading-[15px]
  lg:text-[16px] lg:leading-[24px]"
              >
                30
              </h2>
            </div>
          </div>

          {/* Analysis Staus */}
          {/* ANALYSIS STATUS FOR MOBILE SCREENS */}
          <div
            className="md:hidden flex flex-col p-[20px] border-x-[1.2px]
 border-[#7C7C7C] border-opacity-[25%]"
          >
            {/* analysis 1 */}
            <div
              className="flex justify-between pb-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
                >
                  Active
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>

            {/* analysis2 */}
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
                >
                  Inactive
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>

            {/* analysis3 */}
            <div
              className=" flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
                >
                  Active
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* analysis4 */}
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
                >
                  Inactive
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* analysis5 */}
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
                >
                  Active
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* analysis6 */}
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
                >
                  Inactive
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* analysis7 */}
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
                >
                  Active
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* analysis8 */}
            <div className="flex justify-between pt-[31.5px]">
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Habib Kamaldeen
                </h2>
                <h2 className="font-[600] text-[9.167px] leading-[11.167px]">
                  Aremxyplug
                </h2>
                <p className="font-[600] text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                  aremxyplug
                </p>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[11.473px]">
                <p
                  className="font-[600] self-end text-[9.167px] leading-[11.167px] cursor-pointer
      py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
                >
                  Inactive
                </p>
                <p className="font-[500] text-[10px] text-[#7C7C7C] leading-[13px]">
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
              </div>
            </div>
            {/* VIEW ALL TRANSACTIONS */}
            <div className="flex py-[21px] justify-center">
              <p className="font-[500] text-[10px] text-[#707070] leading-[13px] ">
                View All Transactions
              </p>
              <img src={walletRefer} alt="View transaction icon" />
            </div>
            {/* CONTACT US */}
            <div className="flex gap-[5.729px] py-[2.865px] justify-center px-[8.594px]">
              <p className="font-[500] text-[8px] text-[#707070] leading-[10.4px]">
                You need help?
              </p>
              <Link to ="/contactUs"
                className="font-[500] text-white text-[8px]  py-[2.865px] 
 px-[8.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* TABLE FOR LARGE SCREENS */}
          {/* <div className='Refer hidden md:flex md:flex-row 
   justify-start'> */}
         <table
            className="Refer hidden md:flex md:flex-col  lg:h-[700px] md:h-[501.04px]  
     md:shadow-lg border-collapse font-[inter] "
          >
            {/* ROW ONE */}
            <tr
              className="flex w-[100%] md:pt-[6.312px]   md:pr-[15.473px] md:pb-[5.746px] md:pl-[16.308px]
   lg:pr-[27px] lg:gap-[8px] lg:pl-[28px] lg:pt-[11px]  lg:pb-[10px]
    bg-[#CED9FF] "
            >
              <th className="text-left lg:text-[16px] lg:leading-[20.8px]  w-1/5 border-none md:text-[9.167px] md:leading-[11.917px]">
                Date/Time
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] border-none
        lg:text-[16px] lg:leading-[20.8px]"
              >
                Name
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] border-none
        lg:text-[16px] lg:leading-[20.8px]"
              >
                UserName
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] border-none
        lg:text-[16px] lg:leading-[20.8px]"
              >
                ReferralID
              </th>
              <th
                className="text-left w-1/5 border-none md:text-[9.167px] md:leading-[11.917px]
        lg:text-[16px] lg:leading-[20.8px]"
              >
                Status
              </th>
            </tr>
            <tr className="flex w-[100%] ">
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]  pt-[30.5px] pb-[28.5px]  
    md:pt-[17.51px] md:pb-[16.36px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px]lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td
                className="w-1/5 pt-[30.5px]  pb-[28.5px] lg:pt-[30.5px] lg:pb-[28.5px] 
    md:pt-[17.51px] md:pb-[16.36px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start pt-[30.5px]
      pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Active
                </p>
              </td>
            </tr>
            {/* ROW TWO */}

            <tr className="flex w-[100%] ">
              <td
                className="w-1/5  pt-[30.5px] pb-[28.5px]   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
      md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td
                className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td
                className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start pt-[30.5px] pb-[28.5px]
      md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Inactive
                </p>
              </td>
            </tr>
            {/* ROW THREE */}

            <tr className="flex w-[100%] ">
              <td className="w-1/5  pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
      md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td
                className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start pt-[30.5px] pb-[28.5px]  
     md:pt-[17.51px] md:pb-[16.36] lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Active
                </p>
              </td>
            </tr>
            {/* ROW FOUR */}

            <tr className="flex w-[100%] ">
              <td
                className="w-1/5  pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
      md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td
                className="w-1/5 pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start pt-[30.5px] pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start pt-[30.5px] pb-[28.5px]  
     md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Inactive
                </p>
              </td>
            </tr>
            {/* ROW FIVE */}

            <tr className="flex w-[100%] ">
              <td className="w-1/5     md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
      md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]  md:pb-[16.36px] md:pt-[17.51px]
    "
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pt-[17.51px] md:pb-[16.36px]
    "
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start md:pt-[17.51px] md:pb-[16.36px]
      lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Active
                </p>
              </td>
            </tr>
            {/* ROW SIX */}

            <tr className="flex w-[100%] ">
              <td
                className="w-1/5  md:pb-[16.36px] md:pt-[17.51px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
      md:text-[9.167px] md:leading-[11.917px] md:pb-[16.36px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              <td
                className="w-1/5 md:pb-[16.36px] md:pt-[17.51px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  <span className="md:block">Habib</span>
                  <span className="md:block">Kamaldeen</span>
                </p>
              </td>
              <td className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pb-[16.36px] md:pt-[17.51px]">
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex-start md:pb-[16.36px] md:pt-[17.51px]
    lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  aremxyplug
                </p>
              </td>
              <td
                className="w-1/5 flex justify-start items-start md:pb-[16.36px]
     lg:pt-[30.5px] lg:pb-[28.5px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
        py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Inactive
                </p>
              </td>
            </tr>

            {/* VIEW ALL TRANSACTIONS FOR TABLET AND DESKTOP*/}

            {/* CONTACT US */}
            <div className="flex md:gap-[14.896px] py-[10.865px] justify-center px-[8.594px]">
              <p
                className="font-[500]  lg:text-[12px] lg:leading-[15.6px]  md:text-[6.875px]
  text-[#707070] md:leading-[8.938px]"
              >
                You need help?
              </p>
              <Link to = "/contactUs"
               
                className="font-[500] text-white lg:text-[8px] lg:leading-[10.4px] 
  md:text-[4.583px]  py-[2.865px] 
 px-[8.594px] md:leading-[5.985px] rounded-[5.156px] lg:py-[5px]
 lg:px-[15px] lg:rounded-  bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
          </table> 
        </div>
      </div>
      {/* </div> */}
    </DashBoardLayout>
  );
}
