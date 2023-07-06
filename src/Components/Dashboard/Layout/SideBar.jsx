import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./Dashboard.module.css";

export const SideBar = () => {
  const { setToggleSideBar } = useContext(ContextProvider);
  const [dropDownBtn, setDropDownBtn] = useState(false);
  const [dropDownBtn2, setDropDownBtn2] = useState(false);

  const dropHandler = () => {
    // const updatedButtons = dropDownBtn.map((i) => i === index)

    // setDropDownBtn((prev) => !prev);
    setDropDownBtn((prev) => !prev);
  };
  const dropHandler2 = () => {
    // const updatedButtons = dropDownBtn.map((i) => i === index)

    // setDropDownBtn((prev) => !prev);
    setDropDownBtn2((prev) => !prev);
  };

  return (
    <div className="text-[#fff] w-[109px] h-[100%] bg-[#04177f] rounded-tr-[11.17px] rounded-br-[11.17px] md:w-[178px] md:rounded-tr-[18px] md:rounded-br-[18px] lg:w-[312px] lg:rounded-br-[32px] lg:rounded-tr-[32px]">
      {/* =======Nav Bar========= */}
      <div className="flex w-[100%] gap-[40px] h-[13.97px] justify-center items-center mx-auto py-[18%] border-b-[0.349px] border-b-[#0003] border-b-solid md:border-b-[1.5px] md:gap-[55px] lg:gap-[110px] lg:py-[15%] ">
        <img
          className="w-[41px] h-[6.23px] md:h-[10px] md:w-[67px] lg:w-[118px] lg:h-[17px]"
          src="./Images/dashboardImages/aremxylogo.png"
          alt="Logo"
        />
        <img
          onClick={setToggleSideBar(true)}
          className="cursor-pointer w-[13.97px] h-[13.97px] md:w-[22px] md:h-[22px] lg:h-[40px] lg:w-[40px]"
          src="./Images/dashboardImages/menu.png"
          alt="Menu"
        />
      </div>

      <div className="px-[5%] pt-[5%]">
        {/* ======Profile picture and name======== */}
        <div>
          <div className="flex gap-[3px] md:gap-[5px]">
            <img
              className="w-[13.97px] h-[13.97px] md:w-[22px] md:h-[22px] lg:w-[40px] lg:h-[40px]"
              src="./Images/dashboardImages/habib.png"
              alt="DP"
            />
            <div className="flex flex-col gap-[3px] justify-center mt-[4%]">
              <p className="text-[4.8px] font-semibold md:text-[8px] lg:text-[14px]">
                Habib Kamaldeen
              </p>
              <div className="flex gap-[3px]">
                <div className="rounded-[1px] px-[2px] font-semibold text-[4px] bg-[#b4b4b4] md:text-[6px] lg:text-[10px] lg:rounded-[2px]">
                  Verified
                </div>
                <div className="rounded-[1px] px-[2px] font-semibold text-[4px] bg-[#b4b4b4] md:text-[6px] lg:text-[10px] lg:rounded-[2px]">
                  KYCed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======Dashboard nav======= */}
        <div className={styles.dashboard}>
          <img
            className="w-[8.38px] h-[8.38px] md:w-[13px] md:h-[13px] lg:h-[24px] lg:w-[24px]"
            src="./Images/dashboardImages/3square.png"
            alt="3squares"
          />
          <p className="text-[4.8px] font-semibold md:text-[8px] lg:text-[14px]">
            Dashboard
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          {/* ========Collections========= */}
          <div>
            <p className="text-[4px] md:text-[7px] lg:text-[12px]">
              COLLECTIONS
            </p>

            <div className="flex flex-col gap-[10px] text-[4.8px] font-semibold ml-[4%] my-[4%] md:text-[8px] lg:text-[14px] lg:gap-[15px]">
              <div className="flex gap-[3.4px] items-center cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:h-[24px] lg:w-[24px]"
                  src="./Images/dashboardImages/wallet.png"
                  alt="icon"
                />
                <p>Wallet</p>
              </div>
              <div className="flex gap-[3.4px] items-center cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/topup.png"
                  alt="icon"
                />
                <p>Top Up</p>
              </div>
              <div className="flex gap-[3.4px] items-center cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/translate.png"
                  alt="icon"
                />
                <p>Transfer</p>
              </div>
              <div
                onClick={dropHandler}
                className="flex justify-between items-center"
              >
                <div className="flex gap-[3.4px] items-center cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/transaction.png"
                    alt="icon"
                  />
                  <p>Transactions</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              {dropDownBtn && (
                <ul className=" absolute top-[29%]  ml-[12px] mt-[px] rounded-[2.5px]  bg-[#ffffff] w-[74px] md:top-[31%] md:w-[114px] lg:rounded-[6px] lg:top-[31%] lg:w-[200px] lg:ml-[19px]">
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    All Transactions
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Successful
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Failed
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Pending
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Refunded
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Sales Analysis
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* =========Products======== */}
          <div>
            <p className="text-[4px] md:text-[7px] lg:text-[12px]">PRODUCTS</p>

            <div className="flex flex-col gap-[10px] text-[4.8px] font-semibold ml-[4%] my-[4%] md:text-[8px] lg:text-[14px] lg:gap-[15px]">
              <div
                onClick={dropHandler2}
                className="flex justify-between gap-[3.4px]"
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/telecom.png"
                    alt="icon"
                  />
                  <p>Telecom</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              {dropDownBtn2 && (
                <ul className=" absolute top-[35%]  ml-[12px] mt-[-5px] rounded-[2.5px]  bg-[#ffffff] w-[74px] md:top-[36.5%] md:w-[114px] lg:rounded-[6px] lg:top-[36.5%] lg:w-[200px] lg:ml-[19px]">
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Airtime Top-up
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Data Top-up
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Education Pins
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    TV Subscriptions
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Electricity Bills
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Airtime Conversion
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Bulk SMS
                  </li>
                  <li className="hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
                    Recharge Card Printing
                  </li>
                </ul>
              )}
              <div className="flex gap-[3.4px] justify-between">
                <div className="flex gap-[3.5px] items-center cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/payments.png"
                    alt="icon"
                  />
                  <p>Payments</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[3.4px] cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/cardissuing.png"
                    alt="icon"
                  />
                  <p>Card Issuing</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/digital.png"
                  alt="icon"
                />
                <p>Digital Services</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/vtu.png"
                  alt="icon"
                />
                <p>VTU Development</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/businessdev.png"
                  alt="icon"
                />
                <p>Business Development</p>
              </div>
            </div>
          </div>

          {/* =======FEATURES======== */}
          <div>
            <p className="text-[4px] md:text-[7px] lg:text-[12px]">FEATURES</p>

            <div className="flex flex-col gap-[10px] text-[4.8px] font-semibold ml-[4%] my-[4%] md:text-[8px] lg:text-[14px] lg:gap-[15px]">
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/pricing.png"
                  alt="icon"
                />
                <p>Pricing</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[3.4px] items-center cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/upgrade.png"
                    alt="icon"
                  />
                  <p>Upgrade</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[3.4px] items-center cursor-pointer">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/referrals.png"
                    alt="icon"
                  />
                  <p>Referrals</p>
                </div>
                <img
                  className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/arrow-down.png"
                  alt="dropdown"
                />
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/myprofile.png"
                  alt="icon"
                />
                <p>My Profile</p>
              </div>
            </div>
          </div>

          {/* ==========Developers============== */}
          <div>
            <p className="text-[4px] md:text-[7px] lg:text-[12px]">
              DEVELOPERS
            </p>

            <div className="flex flex-col gap-[10px] text-[4.8px] font-semibold ml-[4%] my-[4%] md:text-[8px] lg:text-[14px] lg:gap-[15px]">
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/api.png"
                  alt="icon"
                />
                <p>API documentation</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/generatekey.png"
                  alt="icon"
                />
                <p>Generate API key</p>
              </div>
            </div>
          </div>

          {/* ========Supports======= */}
          <div className="mb-[35%]">
            <p className="text-[4px] md:text-[7px] lg:text-[12px]">SUPPORTS</p>

            <div className="flex flex-col gap-[10px] text-[4.8px] font-semibold ml-[4%] my-[4%] md:text-[8px] lg:text-[14px] lg:gap-[15px]">
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/contact-support.png"
                  alt="icon"
                />
                <p>Contact Support</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/livechat.png"
                  alt="icon"
                />
                <p>Live Chat</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/sendamail.png"
                  alt="icon"
                />
                <p>Send a Mail</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/whatsapp.png"
                  alt="icon"
                />
                <p>Whatsapp</p>
              </div>
              <div className="flex gap-[3.4px] cursor-pointer">
                <img
                  className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/dashboardImages/phonecall.png"
                  alt="icon"
                />
                <p>Phone Call</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===========Logout========= */}
      <Link to="/Login">
        <div className="ml-[5%] flex gap-[4%] border-t-[#0003] border-t-[0.35px] border-t-solid md:border-t-[1.5px] py-[10%] lg:text-[14px]">
          <img
            className="w-[8px] h-[8px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
            src="/Images/dashboardImages/logout.png"
            alt="logout"
          />
          <p className="cursor-pointer text-[5px] md:text-[7px] lg:text-[14px]">
            Logout
          </p>
        </div>
      </Link>
    </div>
  );
};
