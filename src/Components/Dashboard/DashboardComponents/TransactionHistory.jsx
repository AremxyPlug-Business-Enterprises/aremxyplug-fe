import {React, useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";
// import arrows from "../../WalletSummaryPage/assets/arrow-square-right1.svg";
// import arrows2 from "../../WalletSummaryPage/assets/arrow-square-right2.png";
// import arrows3 from "../../WalletSummaryPage/assets/arrow-square-right3.svg";
// import arrows4 from "../../WalletSummaryPage/assets/arrow-square-right4.svg";
// import arrows5 from "../../WalletSummaryPage/assets/arrow-square-right5.svg";
// import arrows6 from "../../WalletSummaryPage/assets/arrow-square-right6.png";
// import arrows7 from "../../WalletSummaryPage/assets/arrow-square-right7.png";

const TransactionHistory = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);

  const [transactions] = useState([
    {
      orderNo: "0000000",
      product: "Virtual Account",
      description: "Transfer",
      amount: "₦25,000.00",
      status: "Successful",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000001",
      product: "Virtual Account",
      description: "NGN Wallet Top-Up",
      amount: "₦25,000.00",
      status: "Failed",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000002",
      product: "Airtime Top-Up",
      description: "MTN CG 100GB",
      amount: "₦25,000.00",
      status: "Pending",
      network: "MTN",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000003",
      product: "Currency Conversion",
      description: "NGN to USD",
      amount: "₦25,000.00",
      status: "Successful",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000004",
      product: "TV SubScription",
      description: "GOTV Max",
      amount: "₦25,000.00",
      status: "Failed",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000005",
      product: "Education Pin",
      description: "MTN CG 100GB",
      amount: "₦25,000.00",
      status: "Pending",
      network: "MTN",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000006",
      product: "Currency Conversion",
      description: "NGN to USD",
      amount: "₦25,000.00",
      status: "Successful",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000018",
      product: "Education Pin",
      description: "WAEC",
      amount: "₦1,500.00",
      status: "Refunded",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000018",
      product: "Education Pin",
      description: "WAEC",
      amount: "₦1,500.00",
      status: "Cancelled",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000018",
      product: "Education Pin",
      description: "WAEC",
      amount: "₦1,500.00",
      status: "Refunded",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    
  ]);

  const getBackgroundColor = (status) => {
    if (status === "Successful") {
      return "#97E8B9";
    } else if (status === "Failed") {
      return "#FB9393";
    } else if (status === "Pending") {
      return "#FFD98F";
    } else if (status === "Refunded") {
      return "#A6D9FF";
    } else if (status === "Cancelled") {
      return "#EFC6BE";
    } else {
      return "";
    }
  };

  const [selectedStatus] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedStatus === "" || selectedStatus === "All Transactions") {
      return true;
    }
    return transaction.status === selectedStatus;
  });






  return (
    <>
      {/* ======Mobile View==== */}
      <div
        className="text-[12px]"
        // className="md:hidden text-[12px] p-4"
        style={{
          boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
        }}
      >


<div className="p-4"
style={{
  boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
}}
>
            <div
              className=" h-full md:hidden flex flex-col  w-full"
            >
              {filteredTransactions.map((transaction, index) => (
                <div key={index}>
                  <Link
                    to={`/${
                      transaction.status === "Successful"
                        ? "SuccessfullReceipt"
                        : transaction.status === "Failed"
                        ? "FailedReceipt"
                        : transaction.status === "Pending"
                        ? "PendingReceipt"
                        : transaction.status === "Refunded"
                        ? "RefundedReceipt"
                        : transaction.status === "Cancelled"
                        ? "CancelledReceipt"
                        : ""
                    }`}
                    state={{ transaction }}
                  >
                    <div
                      key={index}
                      className="flex justify-between pb-[31.5px] py-[20px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
                    >
                      <div className="flex flex-col gap-[7.648px]">
                        <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                          Order No : {transaction.orderNo}
                        </h2>
                        <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                          Product : {transaction.product}
                        </h2>
                        <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                          Description : {transaction.description}
                        </p>

                        <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                          Amount : {transaction.amount}
                        </p>

                        <div className="hidden">
                          <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                            Network : {transaction.network}
                          </p>

                          <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                            recipientname : {transaction.recipientname}
                          </p>

                          <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                            phonenumber : {transaction.phonenumber}
                          </p>

                          <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                            wallet : {transaction.wallet}
                          </p>
                        </div>
                      </div>
                      {/* rightSide */}
                      <div className="flex flex-col gap-[13.473px]">
                        <div className="flex flex-row justify-between gap-[5px] items-center">
                          <p className="font-medium text-neutral-500 self-start text-[9.167px] leading-[11.167px] cursor-pointer">
                            Status:{" "}
                          </p>
                          <div className="mt-[-8px]">
                            <span
                              style={{
                                backgroundColor: getBackgroundColor(
                                  transaction.status
                                ),
                              }}
                              className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px]  rounded-sm "
                            >
                              {transaction.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-row">
                          <div>
                            <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                              <span className="block">Date & Time:</span>
                              <span className="block">May 21st, 2023,</span>
                              <span className="block">07:21:00pm</span>
                            </p>
                          </div>
                          <div className="w-[13.41px] mt-7 h-[12.06px]">
                            <img
                              className="w-[13.41px] h-[12.06px]"
                              src="./Images/Dashboardimages/arrowright.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))} 

              <div className="flex justify-center text-center gap-[20px] mt-[15px] mb-[30px]">
                <p className="text-[8px]  font-[500] leading-[9.1px] mt-[5px]">
                  You need help?
                </p>

                <Link to="/ContactUs">
                  <div
                    className={`${
                      isDarkMode ? "border " : "bg-[#04177f]"
                    } text-[8px] p-1 text-white rounded-[8px]`}
                  >
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* LARGER SCREENS */}

          <div
          style={{
            boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
          }}
            className={` ${
              isDarkMode ? "bg-black border" : "bg-white"
            } ${
              toggleSideBar ? "md:px-[0px]" : "md:px-[px]"
            } hidden md:block  md:mt-[-33px]`}
          >
            <div
              className={`transaction ${
                toggleSideBar
                  ? "transaction-table1 lg:text-[15px] md:gap-[5.9%] xl:gap-[10%] md:pl-[5px]"
                  : "transaction-table lg:text-[20px] lg:h-[44px] md:gap-[9%] lg:gap-[9.8%] xl:gap-[%]"
              } ${
                isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
              } hidden md:text-[12px] font-semibold md:flex md:h-[35px] md:justify-start md:pl-[5px] md:items-center  mb-[%] 2xl:gap-[%]`}
            >
              <div>Products</div>
              <div>Description</div>
              <div>Order No</div>
              <div className={` xl:pr-[5px] 2xl:pr-[px] ${
                toggleSideBar
                  ? "amount"
                  : "amount1"
              }`}>Amount</div>
              <div>Date & Time</div>
              <div>Status</div>
            </div>

            {filteredTransactions.map((transaction, index) => (
              <div key={index}>
                <Link
                  to={`/${
                    transaction.status === "Successful"
                      ? "SuccessfullReceipt"
                      : transaction.status === "Failed"
                      ? "FailedReceipt"
                      : transaction.status === "Pending"
                      ? "PendingReceipt"
                      : transaction.status === "Refunded"
                      ? "RefundedReceipt"
                      : transaction.status === "Cancelled"
                      ? "CancelledReceipt"
                      : "" // Add a default case or handle it as per your requirement
                  }`}
                  state={{ transaction }}
                >
                  <div
                    className={`${
                      toggleSideBar
                        ? "lg:text-[15px] md:gap-[%] md:text-[8.5px] "
                        : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:h-[44px] lg:md:gap-[%]"
                    }  hidden  font-semibold md:flex md:h-[34px] md:justify-start md:px-[5px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
                  >
                    <div
                      className={`md:text-[#000000] ${
                        toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                      }`}
                    >
                      {transaction.product}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C] ${
                        toggleSideBar ? "md:w-[18.5%]" : "md:w-[18.5%]"
                      }`}
                    >
                      {transaction.description}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[16%]"
                      }`}
                    >
                      {transaction.orderNo}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[17%]"
                      }`}
                    >
                      {transaction.amount}
                    </div>

                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16.5%] " : "md:w-[16.5%]"
                      }`}
                    >
                      <span>May 21st, 2023,</span>
                      <br />
                      <span>07:21:00pm</span>
                    </div>

                    <div
                      className={`md:flex md:items-center md:justify-between md:text-center ${
                        toggleSideBar
                          ? "md:gap-[7px] md:w-[17%]"
                          : "md:gap-[10px] md:w-[14.5%]"
                      }`}
                    >
                      <div
                        style={{
                          backgroundColor: getBackgroundColor(
                            transaction.status
                          ),
                        }}
                        className={`${
                          toggleSideBar ? "md:w-[100%]" : "md:w-[100%]"
                        } md:px-[10px] md:py-[5px] md:text-[#FFFFFF] md:rounded-[5px]`}
                      >
                        {" "}
                        {transaction.status}
                      </div>
                      <img
                        className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <div className="md:text-center md:border-[1px] md:mt-[50px] md:mx-[43%] md:shadow-md hidden md:block">
              <p className="md:text-[#707070] md:text-[10px]">---The End---</p>
            </div>

            <div
              className={`transaction2 md:flex md:justify-center md:pb-[30px]`}
            >
              <div className="flex gap-[15px] items-center md:mt-[40px]">
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
          </div>













        {/* <div className="flex justify-between">
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
        </div> */}
        
        {/* <div className="flex gap-[15px] my-[5%] justify-center items-center">
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
        </div> */}
      </div>

      

      =======Desktop view======
      {/* <div className="mt-[30px] lg:h-[100px] hidden md:flex ">
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
          CONTACT US
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
      </div> */}
    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
