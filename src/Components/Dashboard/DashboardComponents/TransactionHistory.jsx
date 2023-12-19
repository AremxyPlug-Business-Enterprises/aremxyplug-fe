import {React, useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";
import "../DashboardComponents/DataTopUpPage/DataTopUp.css";
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
      >


<div className="md:pt-6"
// style={{
//   boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
// }}
>
            <div
              className="h-full md:hidden flex flex-col mt-9  w-full px-[20px] pb-[5px] border-x-[1.2px] border-b-[1.2px]
              border-gray-500 border-opacity-[25%] my-[50px] shadow-md"
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
                  ? "transaction-table1 lg:text-[15px] md:gap-[8.2%] xl:gap-[%] md:pl-[px]"
                  : "transaction-table lg:text-[20px] lg:h-[44px] md:gap-[8.6%] lg:gap-[%] xl:gap-[%]"
              } ${
                isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
              } hidden md:text-[12px] font-semibold md:flex md:h-[35px] md:justify-start md:px-[20px] md:items-center`}
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
                        : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:md:gap-[%]"
                    }  hidden  font-semibold md:flex md:h-[50px] lg:h-[75px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
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
      </div>



    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
