import React from "react";
import "../../App.css";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import Refer1 from "../Referrals/referralImage/Excellent Review.svg";
import copyRefer from "../Referrals/referralImage/copy.svg";
import whatSapp from "../Referrals/referralImage/whatsappRefer.svg";
import instagram from "../Referrals/referralImage/InstagramRefer.svg";
import facebook from "../Referrals/referralImage/facebookRefer.svg";
import twitter from "../Referrals/referralImage/twitterRefer.svg";
import rightArrow from "../Referrals/referralImage/rightArrowRefer.svg";
import arrowDown from "../Referrals/referralImage/arrow-down.svg";
import NoRecordImage from "../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import { useState, useEffect } from "react";
import "../../App.css";
import {
  GetFunction,
  InternalLoginSession,
} from "../../Components/ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
// import { set } from "core-js/core/dict";

export default function Referral() {
  //  const [copyTextOne, setCopyTextOne] = useState('');
  //  const [copyTextTwo, setCopyTextTwo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);

  const [referralResponds, setReferralResponds] = useState({});
  const [referredUsersResponse, setReferredUsersResponse] = useState({});
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  const referralLink = localStorage.getItem(
    "ReferralLink",
    referralResponds?.data?.data?.referral_link
  );

  const referralCode = localStorage.getItem(
    "ReferralCode",
    referralResponds?.data?.data?.referral_code
  );

  const handleCopyClick = (ButtonHandler) => {
    if (ButtonHandler === "CopyLink") {
      navigator.clipboard
        .writeText(referralLink)
        .then(() => {
          alert("Copied link to clipboard");
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    } else if (ButtonHandler === "CopyCode") {
      navigator.clipboard
        .writeText(referralCode)
        .then(() => {
          alert("Copied code to clipboard");
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  const handleReferralGenerate = async () => {
    const Path = "extra/referral";
    const successHandler = (response) => {
      console.log("successfully fetched");
      localStorage.setItem("ReferralLink", response?.data?.data?.referral_link);

      localStorage.setItem("ReferralCode", response?.data?.data?.referral_code);

      //console.log("Referral Response:", referralResponds);
    };

    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
         if(sessionModal) return
         if(sessionModal === false) return setSessionModal(true)
            }else if (ErrorType === "User error" || ErrorType === "Network error") {
          alert("Your inetrnet connection is quite unstable")
      }else  if (ErrorType === "Server error") {
              alert("Failed to fetch referred users");
             }
         };

    await GetFunction(
      Path,
      setIsLoading,
      successHandler,
      FailedHandler,
      setReferralResponds
    );
  };
  useEffect(() => {
    if (
      !referralLink ||
      referralLink === undefined ||
      !referralCode ||
      referralCode === undefined
    ) {
      handleReferralGenerate();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    
    const fetchReferredUsers = async () => {
      await handleReferredUsers();
    };
    if(referredUsersResponse?.data?.data?.referrals === undefined){
    fetchReferredUsers();
    }
    //eslint-disable-next-line
  }, []);

  const handleReferredUsers = async () => {
    const Path = "extra/referral/referred-users";
    const successHandler = (response) => {
     
      const referredUsersResponse = response?.data?.data?.referrals;

      setTotalUsers(referredUsersResponse === null ? 0 : referredUsersResponse?.length);
      setActiveUsers(
        referredUsersResponse !== null || referredUsersResponse?.length > 0? 
        referredUsersResponse?.filter((user) => user.is_active === true)?.length : 0
      );
      setInactiveUsers(
        referredUsersResponse !== null || referredUsersResponse?.length > 0 ?
        referredUsersResponse?.filter((user) => user.is_active === false).length : 0
      );
    };

    const FailedHandler = async (ErrorType) => {
            if(ErrorType === "unauthorised"){
           if(sessionModal) return;
           if(sessionModal === false)setSessionModal(true)
            }else if (ErrorType === "Server error") {
              alert("Failed to fetch referred users");
              setTotalUsers("");
              setActiveUsers("");
              setInactiveUsers("");
            }
       
      else if (ErrorType === "User error") {
        setTotalUsers("");
        setActiveUsers("");
        setInactiveUsers("");
      } else {
        setTotalUsers(0);
        setActiveUsers(0);
        setInactiveUsers(0);
      }
    };
    await GetFunction(
      Path,
    ()=>{},
      successHandler,
      FailedHandler,
      setReferredUsersResponse
    );
  };

  console.log(totalUsers)

  const referredUsers = referredUsersResponse
    ? referredUsersResponse?.data?.data?.referrals
    : [];
    

  return (
    <DashBoardLayout>
      <div className="">
        {/* RECTANGLE1 // CONTENT ONE CONTAINER */}
        <div className="rectangle1 flex justify-between items-center py-5 gap-[18.34px] min-h-[90px] w-full pr-5 pl-[16.664px] lg:mb-[60px] mb-[30px] rounded-[6.667px] md:pt-[5.581px] md:pb-[4.586px] md:pr-[34.371px] md:pl-[28.646px] md:gap-[31.514px] md:h-[112.29px] md:rounded-[11.458px] lg:py-[8px] lg:pl-[60px] lg:pr-[50px] lg:gap-[55px] lg:h-[196px] lg:rounded-[20px] ">
          {/* Container CONTENT_ONE LEFT_SIDE  */}
          <div
            className="flex flex-col gap-[5px] h-full w-[70%] lg:gap-[15px] md:gap-[8.594px] 
          justify-center"
          >
            {/* header */}
            <h2 className="font-semibold leading-[12px] text-[11px] text-[#000] md:text-[13.75px] md:leading-[21px] lg:text-[24px] lg:leading-[36px] ">
              REFER AND EARN, ALL IN ONE WITH
              <br />
              AREMXYPLUG.
            </h2>
            {/* sub-text */}
            <p className="font-normal text-[10px] leading-[13px] md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px] ">
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
          <div className="w-[25%] md:h-full flex ">
            <img src={Refer1} className="w-full md:h-full h-[60px]" alt="" />
          </div>
        </div>
        {/* INPUT_CONTENT */}
        <div className="flex flex-col gap-5 lg:gap-[25px] mb-[50px]">
          {/* INPUT_ONE */}
          <div className="flex flex-col gap-[5.667px] md:gap-2 lg:gap-2.5">
            <h2 className="font-semibold text-xs leading-4 md:text-[9.167px] md:leading-[14px] lg:text-base lg:leading-6">
              Your Referral Link is:
            </h2>
            <div className="flex h-[40px] items-center w-full md:h-[30.94px] lg:h-[54px] ">
              {/* THE REFER LINK */}

              <input
                value={referralLink}
                readOnly
                className="copy-content1 font-semibold w-3/4 text-[#7C7C7C] text-xs leading-4 lg:text-base lg:leading-6 rounded-l-[10px] overflow-x-scroll pr-[20px] md:text-[9.167px] md:leading-[14px] flex items-center h-full  border-l-[1px] border-y-[1px] border-[#7C7C7C] pl-[5px] lg:pl-[18px]  md:pl-[13px] lg:rounded-l-[22px]  md:rounded-l-[12.607px] md:overflow-auto focus:outline-none"
              />

              {/* COPY LINK */}
              <div
                id="copy-btn1"
                onClick={(e) => {
                  handleCopyClick("CopyLink");
                }}
                className=" copy-btn1 flex justify-center gap-2.5 w-[25%] h-full bg-[#04177F] items-center rounded-e-[10px] lg:rounded-e-[22px] md:rounded-e-[12.607px]"
              >
                <img
                  src={copyRefer}
                  className="lg:h-[24px] lg:w-[24px] cursor-pointer"
                  alt="copy"
                />
                <p className="copy-btn1 font-medium text-[10px] leading-[14px] text-white lg:text-base lg:leading-6 md:text-[9.147px] md:leading-[14px] cursor-pointer">
                  Copy link
                </p>
              </div>
            </div>
          </div>
          {/* INPUT_TWO */}
          <div className="flex flex-col gap-[5.667px] md:gap-[8px] lg:gap-2.5">
            <h2 className="font-semibold text-xs leading-4 lg:text-base lg:leading-6">
              Your Referral code is:
            </h2>
            <div className="flex  h-[40px] items-center w-full md:h-[30.94px] lg:h-[54px] ">
              {/* THE REFER LINK 2*/}
              <input
                value={referralCode}
                readOnly
                className="copy-content2 font-semibold text-[#7C7C7C] text-xs leading-4 lg:text-base lg:leading-6 rounded-l-[10px] md:text-[9.167px] md:leading-[14px]  md:overflow-auto overflow-x-scroll  w-3/4 h-full  border-l border-y border-[#7C7C7C] pl-[5px] lg:pl-[18px] md:pl-[13px] lg:rounded-l-[22px]  md:rounded-l-[12.607px] focus:outline-none"
              />

              {/* COPY LINK */}
              <div
                id="copy-btn2"
                onClick={(e) => {
                  handleCopyClick("CopyCode");
                }}
                className=" flex justify-center gap-2.5 w-[25%] h-full bg-[#04177F] items-center rounded-e-[10px] lg:rounded-e-[22px] md:rounded-e-[12.607px]"
              >
                <img
                  src={copyRefer}
                  className="lg:h-[24px] lg:w-[24px] cursor-pointer"
                  alt="copy"
                />
                <p className="  font-medium text-[10px] leading-[14px] text-white md:text-[9.147px] md:leading-[14px] lg:text-base lg:leading-6 cursor-pointer">
                  Copy code
                </p>
              </div>
            </div>
          </div>

          {/* CHECK POINT AND SHARE BUTTON */}
          <div
            className="flex flex-col pt-[10px] gap-[20px] md:gap-[0px] 
          md:flex md:flex-row md:justify-between"
          >
            {/* CHECK POINT BALANCE BUTTON */}

            <Link
              to="/point-balance"
              className="md:self-center text-center font-semibold leading-[16.4px] text-xs shadow-[2.29167px] text-white rounded-[5.729px]  py-4 bg-[#04177F]  lg:px-[104px] lg:py-[15px]md:pt-[9.394px] md:pr-[59.579px] md:pb-[8.824px] md:pl-[59.888px] lg:text-base lg:leading-6 lg:rounded-[10px]"
            >
              Check Point Balance
            </Link>

            {/* SHARE AND ICON CONTENT */}
            {/*  */}
            <div className="flex flex-col gap-[18.333px] ">
              <p className="text-xs text-center text-[#7C7C7C] py-[5.729px] font-semibold leading-4 border-b-[2px] border-b-[#CED9FF] md:text-[11.458px] md:leading-[17px] lg:text-[20px] lg:leading-[30px]">
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
        <div className="flex flex-col mb-[30px]">
          {/* Referral heading */}
          <div className="flex gap-[3px] mb-[13px] md:gap-[18px] lg:mb-[23px]">
            <p className="font-semibold text-xs text-[#7C7C7C] leading-4 md:text-[16.458px] md:leading-[22px] lg:text-[24px] lg:leading-[30px]">
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
          <div
            className="flex gap-[21px] mb-[20px] md:gap-[51.849px] 
          lg:gap-[90.5px] lg:mb-[15px]"
          >
            {/* box-1 */}
            <div className="flex flex-col w-1/3 md:w-auto rounded-[1.97px] justify-center bg-[#D5F6E3] md:py-[8.597px] md:px-[22.917px] gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] lg:rounded-[6px]">
              {/* TOTAL REFERRAL */}
              <div className="flex justify-center gap-[5px]">
                <h2 className="font-style text-[#000000] font-medium text-center text-[10px] leading-[15px] lg:text-base lg:leading-6">
                  Total Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-4 lg:h-4 w-[4.924px] h-[4.924px] self-center"
                  alt="arrowDown"
                />
              </div>
              <h2 className="font-style font-medium text-[10px] text-center leading-[15px] lg:text-base lg:leading-6">
                {/* 100 */}
                {totalUsers}
              </h2>
            </div>
            {/* box-2 */}
            <div className="flex w-1/3 md:w-auto justify-center flex-col rounded-[1.97px] bg-[#92ABFE2E] bg-opacity-[18%] md:py-[8.597px] md:px-[22.917px] gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] lg:py-[15px] lg:rounded-[6px]">
              {/* ACTIVE REFFERAL */}
              <div className=" flex justify-center gap-[5px]">
                <h2 className="font-style text-[#000000] font-medium text-center text-[10px] leading-[15px] lg:text-base lg:leading-6">
                  Active Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-4 lg:h-4 w-[4.924px] h-[4.924px] self-center"
                  alt=""
                />
              </div>
              <h2 className="font-style font-medium text-[10px] text-center leading-[15px] lg:text-base lg:leading-6">
                {/* 70 */}
                {activeUsers}
              </h2>
            </div>
            {/* box-3 */}
            <div className="flex w-1/3 md:w-auto flex-col rounded-[1.97px] bg-[#FDCECE] gap-[1.641px] py-[4.924px] px-[5px] lg:px-[40px] md:py-[8.597px] md:px-[22.917px] lg:py-[15px] lg:rounded-[6px]">
              {/* INACTIVE REFERRAL */}
              <div className="flex justify-center lg:gap-[5px]">
                <h2 className="font-style text-[#000000] font-medium text-center text-[10px] leading-[15px] lg:text-base lg:leading-6">
                  Inactive Referrals
                </h2>
                <img
                  src={arrowDown}
                  className="lg:w-4 lg:h-4 w-[4.924px] h-[4.924px] self-center"
                  alt=""
                />
              </div>
              <h2 className="font-style font-medium text-[10px] text-center leading-[15px] lg:text-base lg:leading-6">
                {/* 30 */}
                {inactiveUsers}
              </h2>
            </div>
          </div>

          {/* Analysis Staus */}
          {/* ANALYSIS STATUS FOR MOBILE SCREENS */}
          <div className="md:hidden flex flex-col p-5 border-x-[1.2px] border-[#7C7C7C] border-opacity-[25%] mb-[50px]  shadow-md">
            {/* analysis 1 */}
            {referredUsers?.length > 0 ? (
              referredUsers?.map((user) => (
                <div
                  key={user?.user_id}
                  className="flex justify-between py-[31.5px] border-b border-b-[black] border-opacity-[20%]"
                >
                  {/* left */}
                  <div className="flex flex-col gap-[7.648px]">
                    <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
                      {/* Habib Kamaldeen */}
                      {user?.full_name}
                    </h2>
                    <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
                      {/* Aremxyplug */}
                      {user?.username}
                    </h2>
                    <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
                      {/* aremxyplug */}
                      {user?.referred_id}
                    </p>
                  </div>
                  {/* rightSide */}
                  <div className="flex flex-col gap-[11.473px]">
                    <p
                      className={`font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer py-[2.122px] px-[4.245px] rounded-[1.22px]
                    ${
                      user?.is_active === true ? "bg-[#97E8B9]" : "bg-[#FDCECE]"
                    } `}
                    >
                      {/* Active */}
                      {user?.is_active === true ? "Active" : "Inactive"}
                    </p>
                    <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
                      <span className="block">
                        {/* May 21st, 2023, */}
                        {new Date(user?.referred_at).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                        ,
                      </span>
                      <span className="block">
                        {/* 07:21:00pm */}
                        {new Date(user?.referred_at).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: true,
                          }
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center ">
                <img
                  src={NoRecordImage}
                  alt=""
                  className="lg:w-[517px] lg:h-[456px]"
                />
              </div>
            )}

            {/* VIEW ALL TRANSACTIONS */}
            {/* <div className="flex py-[21px] justify-center">
              <p className="font-medium text-[10px] text-[#707070] leading-[13px] ">
                View All Transactions
              </p>
              <img src={walletRefer} alt="View transaction icon" />
            </div> */}
            {/* CONTACT US */}
            <div className="flex gap-[8.729px] py-[2.865px] justify-center px-[8.594px] ">
              <p className="font-medium self-center text-[8px] text-[#707070] leading-[10.4px]">
                You need help?
              </p>
              <Link
                to="/contactUs"
                className="font-medium text-white text-[8px]  py-[2.865px] px-[8.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* TABLE FOR LARGE SCREENS */}
          <div
            className="Refer hidden md:flex 
   "
          >
            <table className="mt-[0px] relative lg:h-[700px] md:h-[401.04px] md:shadow-lg border-collapse font-[inter] ">
              {/* HEADER ROW */}

              <tr className="flex w-full md:pl-[16.038px] md:pr-[15.473px] lg:pl-[28px] lg:pr-[27px]  md:gap-[36.67px] md:pt-[6.316px] md:pb-[5.746px] lg:gap-[64px] lg:pt-[11px] lg:pb-[10px] bg-[#CED9FF]">
                <th className="text-left lg:text-base lg:leading-[20.8px] w-1/5 md:text-[9.167px] md:leading-[11.917px] border-none">
                  Date/Time
                </th>
                <th className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px] border-none">
                  Name
                </th>
                <th className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px] border-none">
                  UserName
                </th>
                <th className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px] border-none">
                  ReferralID
                </th>
                <th className="text-left w-1/5  md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px] border-none">
                  Status
                </th>
              </tr>
              {/* ROW ONE */}
              {referredUsers?.length > 0 ? (
                referredUsers?.map((user) => (
                  <div className="flex flex-col md:pl-[16.038px] md:pr-[15.473px] lg:pl-[28px] lg:pr-[27px] ">
                    <tr
                      className="flex w-full border-b-[1.5px] border-[#000000] border-opacity-[20%] md:gap-[40px] lg:gap-[70px]"
                      // md:gap-[36.67px]
                    >
                      <td className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pt-[17.51px] md:pb-[16.36px] p-[0px]">
                        <p className=" text-left font-semibold leading-[20.8px] border-none md:text-[9.167px] md:leading-[11.917px] lg:text-base lg:leading-[20.8px]">
                          <span className="md:block">
                            {new Date(user?.referred_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                            ,
                          </span>
                          <span className="md:block">
                            {new Date(user?.referred_at).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                hour12: true,
                              }
                            )}
                          </span>
                        </p>
                      </td>
                      <td className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pt-[17.51px] md:pb-[16.36px] p-[0px]">
                        <p className="lg:text-base text-left font-semibold lg:leading-[20.8px] md:text-[9.167px] md:leading-[11.917px] ">
                          <span className="md:block">
                            {/* Habib */}
                            {user?.full_name}
                          </span>
                          {/* <span className="md:block">Kamaldeen</span> */}
                        </p>
                      </td>
                      <td className="w-1/5 pt-[30.5px] lg:pt-[30.5px] lg:pb-[28.5px] md:pt-[17.51px] md:pb-[16.36px] p-[0px]">
                        <p className="lg:text-base text-left font-semibold lg:leading-[20.8px] md:text-[9.167px] md:leading-[11.917px]">
                          {/* Aremxyplug */}
                          {user?.username}
                        </p>
                      </td>
                      <td className="w-1/5 flex-start md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]">
                        <p className="lg:text-base text-left font-semibold lg:leading-[20.8px] md:text-[9.167px] md:leading-[11.917px]">
                          {/* aremxyplug */}
                          {user?.referred_id}
                        </p>
                      </td>
                      <td className="w-1/5 flex justify-start items-start md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]">
                        <p
                          className={`lg:text-base text-left font-semibold lg:leading-[20.8px] py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px] ${
                            user?.is_active === true
                              ? "bg-[#CED9FF]"
                              : "bg-[#FDCECE]"
                          }`}
                        >
                          {/* Active */}
                          {user?.is_active === true ? "Active" : "Inactive"}
                        </p>
                      </td>
                    </tr>
                  </div>
                ))
              ) : (
                <div className="flex justify-center ">
                  <img
                    src={NoRecordImage}
                    alt=""
                    className="lg:w-[517px] lg:h-[456px]"
                  />
                </div>
              )}

              {/* CONTACT US */}
              <div className="flex mt-10 md:gap-[14.896px] py-[20.865px] justify-center absolute bottom-3 left-[45%] px-[8.594px]">
                <p className="font-medium self-center  lg:text-xs lg:leading-[16.6px]  md:text-[8.875px] text-[#707070] md:leading-[12.938px]">
                  You need help?
                </p>
                <Link
                  to="/contactUs"
                  className="font-medium text-white lg:text-[10px] lg:leading-4 md:text-[8px]  py-[2.865px] px-[8.594px] md:leading-[12px] rounded-[5.156px] lg:py-[5px] lg:px-[15px] lg:rounded-  bg-[#04177F]"
                >
                  Contact Us
                </Link>
              </div>
            </table>
          </div>
        </div>

        {isLoading && (
          <Modal>
            <Loader />
          </Modal>
        )}
        {sessionModal  && <InternalLoginSession
          setExpiredSessionModal ={setSessionModal} />}
      </div>
    </DashBoardLayout>
  );
}

// {/* analysis2 */}
//             <div
//               className="flex justify-between py-[31.5px] border-b border-b-[black]
//    border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
//                 >
//                   Inactive
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>

//             {/* analysis3 */}
//             <div
//               className=" flex justify-between py-[31.5px] border-b
//                border-b-[black]   border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
//                 >
//                   Active
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>
//             {/* analysis4 */}
//             <div
//               className="flex justify-between py-[31.5px] border-b border-b-[black]
//    border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
//                 >
//                   Inactive
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>
//             {/* analysis5 */}
//             <div
//               className="flex justify-between py-[31.5px] border-b border-b-[black]
//    border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
//                 >
//                   Active
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>
//             {/* analysis6 */}
//             <div
//               className="flex justify-between py-[31.5px] border-b border-b-[black]
//    border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
//                 >
//                   Inactive
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>
//             {/* analysis7 */}
//             <div
//               className="flex justify-between py-[31.5px] border-b border-b-[black]
//    border-opacity-[20%]"
//             >
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#97E8B9]"
//                 >
//                   Active
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>
//             {/* analysis8 */}
//             <div className="flex justify-between pt-[31.5px] mb-[50px]">
//               {/* left */}
//               <div className="flex flex-col gap-[7.648px]">
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Habib Kamaldeen
//                 </h2>
//                 <h2 className="font-semibold text-[9.167px] leading-[11.167px]">
//                   Aremxyplug
//                 </h2>
//                 <p className="font-semibold text-[#7C7C7C] text-[9.167px] leading-[11.167px]">
//                   aremxyplug
//                 </p>
//               </div>
//               {/* rightSide */}
//               <div className="flex flex-col gap-[11.473px]">
//                 <p
//                   className="font-semibold self-end text-[9.167px] leading-[11.167px] cursor-pointer
//       py-[2.122px] px-[4.245px] rounded-[1.22px] bg-[#FDCECE]"
//                 >
//                   Inactive
//                 </p>
//                 <p className="font-medium text-[10px] text-[#7C7C7C] leading-[13px]">
//                   <span className="block">May 21st, 2023,</span>
//                   <span className="block">07:21:00pm</span>
//                 </p>
//               </div>
//             </div>

// {/* ROW TWO */}

//                 <tr
//                   className="flex w-full border-b-[1.5px]
//              border-[#000000] border-opacity-[20%]
//              md:gap-[36.67px]
//              lg:gap-[64px]"
//                 >
//                   <td
//                     className="w-1/5    md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//       md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">May 21, 2023,</span>
//                       <span className="md:block">07:21:00pm</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">Habib</span>
//                       <span className="md:block">Kamaldeen</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5   md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       Aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex justify-start items-start
//       md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//         py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
//                     >
//                       Inactive
//                     </p>
//                   </td>
//                 </tr>
//                 {/* ROW THREE */}

//                 <tr
//                   className="flex w-full  md:gap-[36.67px]
//             border-b-[1.5px] border-[#000000] border-opacity-[20%]
//             lg:gap-[64px]"
//                 >
//                   <td
//                     className="w-1/5  lg:pt-[30.5px] lg:pb-[28.5px]  md:pt-[17.51px] md:pb-[16.36px]
//               p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//       md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">May 21, 2023,</span>
//                       <span className="md:block">07:21:00pm</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]   md:pt-[17.51px] md:pb-[16.36px]
//               p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">Habib</span>
//                       <span className="md:block">Kamaldeen</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       Aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex justify-start items-start
//      md:pt-[17.51px] md:pb-[16.36] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//         py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
//                     >
//                       Active
//                     </p>
//                   </td>
//                 </tr>
//                 {/* ROW FOUR */}

//                 <tr
//                   className="flex w-full md:gap-[36.67px]
//             border-b-[1.5px] border-[#000000] border-opacity-[20%]
//             lg:gap-[64px]"
//                 >
//                   <td
//                     className="w-1/5 md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//       md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">May 21, 2023,</span>
//                       <span className="md:block">07:21:00pm</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5   md:pt-[17.51px] md:pb-[16.36px]
//               lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">Habib</span>
//                       <span className="md:block">Kamaldeen</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5   md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px] "
//                     >
//                       Aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex  items-start
//      md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//         py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
//                     >
//                       Inactive
//                     </p>
//                   </td>
//                 </tr>
//                 {/* ROW FIVE */}

//                 <tr
//                   className="flex w-full md:gap-[36.67px]
//             border-b-[1.5px] border-[#000000] border-opacity-[20%]
//              lg:gap-[64px]"
//                 >
//                   <td
//                     className="w-1/5     md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px]
//               p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//       md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">May 21, 2023,</span>
//                       <span className="md:block">07:21:00pm</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex justify-start lg:pt-[30.5px] lg:pb-[28.5px]  md:pb-[16.36px] md:pt-[17.51px]
//     p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">Habib</span>
//                       <span className="md:block">Kamaldeen</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pt-[17.51px] md:pb-[16.36px]
//     p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       Aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex-start  md:pt-[17.51px] md:pb-[16.36px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex justify-start items-start md:pt-[17.51px] md:pb-[16.36px]
//       lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//         py-[4px] px-[12px] bg-[#CED9FF] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
//                     >
//                       Active
//                     </p>
//                   </td>
//                 </tr>
//                 {/* ROW SIX */}

//                 <tr
//                   className="flex w-full  md:gap-[36.67px]
//              lg:gap-[64px]"
//                 >
//                   <td
//                     className="w-1/5  md:pb-[16.36px] md:pt-[17.51px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//       md:text-[9.167px] md:leading-[11.917px] "
//                     >
//                       <span className="md:block">May 21, 2023,</span>
//                       <span className="md:block">07:21:00pm</span>
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 md:pb-[16.36px] md:pt-[17.51px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px]"
//                     >
//                       <span className="md:block">Habib</span>
//                       <span className="md:block">Kamaldeen</span>
//                     </p>
//                   </td>
//                   <td className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px] md:pb-[16.36px] md:pt-[17.51px] p-[0px]">
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px] "
//                     >
//                       Aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5  md:pb-[16.36px] md:pt-[17.51px]
//     lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//     md:text-[9.167px] md:leading-[11.917px] "
//                     >
//                       aremxyplug
//                     </p>
//                   </td>
//                   <td
//                     className="w-1/5 flex justify-start items-start md:pt-[17.51px] md:pb-[16.36px]
//      lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
//                   >
//                     <p
//                       className="lg:text-base text-left font-semibold lg:leading-[20.8px]
//         py-[4px] px-[12px] bg-[#FDCECE] md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
//                     >
//                       Inactive
//                     </p>
//                   </td>
//                 </tr>
