import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";
import arrows from "../../WalletSummaryPage/assets/arrow-square-right1.svg";
import arrows2 from "../../WalletSummaryPage/assets/arrow-square-right2.png";
import arrows3 from "../../WalletSummaryPage/assets/arrow-square-right3.svg";
import arrows4 from "../../WalletSummaryPage/assets/arrow-square-right4.svg";
import arrows5 from "../../WalletSummaryPage/assets/arrow-square-right5.svg";
import arrows6 from "../../WalletSummaryPage/assets/arrow-square-right6.png";
import arrows7 from "../../WalletSummaryPage/assets/arrow-square-right7.png";

const TransactionHistory = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);
  return (
    <>
      {/* ======Mobile View==== */}
      <div
        className="md:hidden text-[12px] p-4"
        style={{
          boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
        }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              Status :{" "}
              <span className="bg-[#FB9393] text-white p-1">Failed</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#92ABFE] text-white p-1">Refunded</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              Status :{" "}
              <span className="bg-[#FB9393] text-white p-1">Failed</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#97E8B9] text-white p-1">Successful</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#92ABFE] text-white p-1">Refunded</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#FFD98F] text-white p-1">Pending</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <hr className="my-[8%]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[#0008]">Order No : 0000000</div>
            <div className="font-semibold">Product : Virtual Account</div>
            <div className="text-[#0008]">Description : MTN SME 100GB</div>
            <div className="text-[#0008]">Amount : &#8358;25,000.00</div>
          </div>

          <div className="text-[#0008] flex flex-col justify-between">
            <div>
              Status :{" "}
              <span className="bg-[#FFD98F] text-white p-1">Pending</span>
            </div>
            <div className="flex items-end">
              <div>
                Date & Time : <br /> May 21st, 2023,
                <br />
                07:21:00pm
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[15px] my-[5%] justify-center items-center">
          <div className="text-[8px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
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

      {/* =======Desktop view====== */}
      <div className="mt-[30px] lg:h-[100px] hidden md:flex ">
        <table
          className="mt-[0px] lg:h-[700px] md:h-[401.04px]  
     md:shadow-lg border-collapse "
        >
          <tr
            className="flex  w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]  
              md:pt-[6.316px] md:pb-[5.746px] lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] 
              lg:pt-[11px] lg:pb-[10px]
               bg-[#CED9FF]"
          >
            <th
              className="text-left lg:text-[16px] lg:leading-[20.8px]  
              w-1/5  md:text-[9.167px] md:leading-[11.917px] border-none"
            >
              Products
            </th>
            <th
              className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
            >
              Description
            </th>
            <th
              className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
            >
              Order No
            </th>
            <th
              className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
            >
              Amount
            </th>
            <th
              className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
            >
              Date & Time
            </th>
            <th
              className="text-left w-1/5  md:text-[9.167px] md:leading-[11.917px]
        lg:text-[16px] lg:leading-[20.8px] border-none"
            >
              Status
            </th>
          </tr>

          <Link to="/wallet-successful-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[16px]" : "lg:pr-[27px]"}
            flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[16px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px]  text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Virtual Account
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  NGN Wallet Top-up
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦1,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] font-[600] lg:leading-[20.8px] justify-start items-center 
                   flex md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-green-300 md:text-[9.167px] lg:w-[104px]
         lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] text-end md:h-[10px] lg:w-[15px] lg:h-[15px]"
                  src={arrows}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-refunded-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[16px]" : "lg:pr-[27px]"}
        flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Withdrawal
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦25,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-[#A6D9FF] md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Refunded
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]"
                  src={arrows2}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-successful-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[16px]" : "lg:pr-[27px]"}
            flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Card Payment
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  NGN Wallet Top-up
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦25,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-green-300 md:text-[9.167px] md:leading-[11.917px] lg:w-[104px] lg:h-[31px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
                  src={arrows3}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-cancelled-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[16px]" : "lg:pr-[27px]"}
 flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦25,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px]  text-white  bg-red-300 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Cancelled
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
                  src={arrows4}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-pending-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[2px]" : "lg:pr-[27px]"}
flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] text-[#7C7C7C] "
                >
                  From NGN Wallet to <br /> Bank
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦50,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className={`${toggleSideBar ? "lg:w-[123px]" : "lg:w-[104px]"}
                  lg:text-[16px] text-center font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-amber-200 md:text-[9.167px]  lg:h-[31px]
         md:leading-[11.917px] md:rounded-[3.438px]`}
                >
                  Pending
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
                  src={arrows5}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-failed-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[2px]" : "lg:pr-[27px]"}
flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  $60,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className={`${toggleSideBar ? "lg:w-[124px]" : "lg:w-[104px]"}
                  lg:text-[16px] text-center font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-red-300 md:text-[9.167px]  lg:h-[31px]
         md:leading-[11.917px] md:rounded-[3.438px]`}
                >
                  Failed
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
                  src={arrows6}
                  alt="/"
                />
              </td>
            </tr>
          </Link>

          <Link to="/wallet-pending-receipt">
            <tr
              className={`${toggleSideBar ? "lg:pr-[2px]" : "lg:pr-[27px]"}
flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:gap-[64px] border-b-2`}
            >
              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  International Transfer
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦10,000.00
                </p>
              </td>

              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>

              <td
                className={`${toggleSideBar ? "" : ""}
                w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] gap-2 p-[0px] text-[#7C7C7C]  border-none`}
              >
                <p
                  className={`${toggleSideBar ? "lg:w-[124px]" : "lg:w-[104px]"}
                  lg:text-[16px] font-[600] lg:leading-[20.8px]
                   md:w-[65.729px] md:h-[17.76px] lg:h-[31px]
        py-[4px] px-[12px] bg-amber-200 text-white md:text-[9.167px] md:leading-[11.917px]
        text-center md:rounded-[3.438px] `}
                >
                  Pending
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
                  src={arrows7}
                  alt="/"
                />
              </td>
            </tr>
          </Link>
          {/* CONTACT US */}
          <div className="flex md:gap-[14.896px] py-[10.865px] items-center mt-10 justify-center px-[8.594px]">
            <p
              className="font-[500]  lg:text-[12px] lg:leading-[15.6px]  md:text-[8.875px]
  text-[#707070] md:leading-[8.938px]"
            >
              You need help?
            </p>
            <Link
              to="/contactUs"
              className="font-[500] text-white lg:text-[13px] md:text-[9px] lg:leading-[10.4px] 
    py-[2.865px] 
 px-[8.594px] md:leading-[5.985px] md:rounded lg:py-[5px]
 lg:px-[15px] lg:rounded-  bg-[#04177F]"
            >
              Contact Us
            </Link>
          </div>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
