import React, { useState } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import "../DataTopUpPage/DataTopUp.css";
import Transaction from "./TransactionPageImages/Transaction.svg";
import ArrowDown from "./TransactionPageImages/ArrowDown.svg";
import { Link } from "react-router-dom";
import styles from "../component.module.css";
import { Calender } from "../Calender";
import Search1 from "./TransactionPageImages/Search.svg";
import Search2 from "./TransactionPageImages/Search2.svg";
import "../DataTopUpPage/DataTopUp.css";


const TransactionPage = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);

  const [showCategories, setShowCategories] = useState(false);

  const [showStatus, setShowStatus] = useState(false);
  const [calender, setCalender] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setShowCategories(false); // Close the category dropdown when a category is selected
  };

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    return;
  };


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
      orderNo: "0000007",
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
      orderNo: "0000008",
      product: "Education Pin",
      description: "MTN CG 100GB",
      amount: "₦25,000.00",
      status: "Pending",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000009",
      product: "Education Pin",
      description: "NECO",
      amount: "₦25,000.00",
      status: "Failed",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000010",
      product: "Education Pin",
      description: "WAEC",
      amount: "₦25,000.00",
      status: "Successful",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000011",
      product: "Airtime Top-up",
      description: "MTN VTU",
      amount: "₦1,000.00",
      status: "Successful",
      network: "MTN",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000012",
      product: "Data Top-up",
      description: "MTN SME 100GB",
      amount: "₦25,000.00",
      status: "Successful",
      network: "MTN",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000013",
      product: "Data Top-up",
      description: "MTN SME 100GB",
      amount: "₦25,000.00",
      status: "Successful",
      network: "MTN",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000014",
      product: "Data Top-up",
      description: "Airtel CG 100GB",
      amount: "₦25,000.00",
      status: "Successful",
      network: "AIRTEL",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000015",
      product: "Virtual Account",
      description: "NGN Wallet Top-up",
      amount: "₦50,000.00",
      status: "Pending",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "NGN",
    },

    {
      orderNo: "0000016",
      product: "Virtual Account",
      description: "USD Wallet Top-up",
      amount: "$60,000.00",
      status: "Failed",
      network: "",
      plan: "",
      recipientname: "Pranay",
      phonenumber: "7741235545",
      wallet: "USD",
    },

    {
      orderNo: "0000017",
      product: "Currency Conversion",
      description: "NGN to USD",
      amount: "₦10,000.00",
      status: "Pending",
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
      status: "Successful",
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
    } else {
      return "";
    }
  };

  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    setShowStatus(false);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedStatus === "All") {
      return true;
    }
    return transaction.status === selectedStatus;
  });

  return (
    <DashBoardLayout>
      <div
        className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between h-full`}
      >
        <section>
          <div
            id="Transaction"
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[5px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={Transaction}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="md:flex md:justify-between md:w-[90%]">
            <div className="relative mt-[5%] md:w-[45%]">
              <h2 className="lg:text-[18px] lg:leading-[24px] mb-1 text-[10px] md:text-[12px] font-[600] leading-[12px]">
                Select Categories
              </h2>
              <div
                className="input border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => {
                  setShowCategories(!showCategories);
                  setShowStatus(false);
                }}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedCategory}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showCategories && (
                <div className="border md:rounded-[10px] text-[10px] md:text-[12px] lg:text-[16px] lg:mt-2 rounded-[4px] absolute right-0 w-[70%] md:w-full bg-[#FFF] z-[10]">
                  <p
                    onClick={() => handleCategoryFilter("All")}
                    className="pl-[5px] py-[7px] text-[10px] lg:text-[15px] font-semibold text-[#7C7C7C]"
                  >
                    All
                  </p>

                  <hr />

                  <div className="flex justify-center py-[10px] gap-[5px]">
                    <p
                      onClick={() => handleCategoryFilter("Inflows")}
                      className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold active:text-[#fff] active:bg-[#04177F]"
                    >
                      Inflows
                    </p>
                    <p
                      onClick={() => handleCategoryFilter("Transactions")}
                      className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] lg:text-[15px] text-[10px] px-[5px] font-semibold active:text-[#fff] active:bg-[#04177F]"
                    >
                      Transactions
                    </p>
                    <p
                      onClick={() => handleCategoryFilter("Outflows")}
                      className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold active:text-[#fff] active:bg-[#04177F]"
                    >
                      Outflows
                    </p>
                  </div>

                  <hr />

                  <div className="flex justify-start py-[10px] pl-[5px] gap-[5px]">
                    <p
                      onClick={() => handleCategoryFilter("All Categories")}
                      className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold"
                    >
                      All Categories
                    </p>
                  </div>

                  <hr />

                  <p className="text-[#7C7C7C] text-[10px] lg:text-[15px] font-semibold pl-[5px] py-[7px]">
                    Telecom
                  </p>

                  <hr />

                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Airtime Top-up")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Airtime Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Data Top-up")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Data Top-up
                      </p>
                    </div>

                    <div
                      onClick={() => handleCategoryFilter("Education Pins")}
                      className="flex justify-center gap-[5px]"
                    >
                      <p className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]">
                        Education Pins
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Tv Subscription")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Tv Subscription
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() =>
                          handleCategoryFilter("Electricity Bills")
                        }
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Electricity Bills
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Airtime Conversion")
                        }
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Airtime Conversion
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Bulk SMS")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Bulk SMS
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Recharge Card Printing")
                        }
                        className="text-[#7C7C7C] bg-[#F2FAFF] rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Recharge Card Printing
                      </p>
                    </div>
                  </div>

                  <hr />

                  <p className="text-[#7C7C7C] text-[10px] lg:text-[15px] font-semibold pl-[5px] py-[7px]">
                    Payments
                  </p>

                  <hr />

                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Virtual Accounts")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Virtual Accounts
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Money Transfer")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Money Transfer
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Wallet Transfer")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Wallet Transfer
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Card Payments")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Card Payments
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() =>
                          handleCategoryFilter("International Transfer")
                        }
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        International Transfer
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Withdrawal")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Fiat Conversion")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Fiat Conversion
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Crypto Conversion")
                        }
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Crypto Conversion
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Crypto Top-up")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Crypto Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Points Redeem")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Points Redeem
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Bank USSD")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Bank USSD
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Request Money")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Request Money
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Payment Link")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Payment Link
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Scan QR Code")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Scan QR Code
                      </p>
                    </div>
                  </div>

                  <hr />

                  <p className="text-[#7C7C7C] text-[10px] lg:text-[15px] font-semibold pl-[5px] py-[7px]">
                    Card Issuing
                  </p>

                  <hr />

                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Card Top-up")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Card Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Card Withdrawal")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Card Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Card Transfer")}
                        className="text-[#7C7C7C] bg-[#F2FAFF] lg:text-[15px] rounded-[2px] text-[10px] px-[5px] font-semibold hover:text-[#fff] hover:bg-[#04177F]"
                      >
                        Card Transfer
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="flex justify-center py-[10px]">
                    <button className="text-[#FFFFFF] bg-[#04177F] rounded-[5px] lg:text-[15px] text-[10px] px-[10px] py-[3px] font-semibold">
                      Filter
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative mt-[5%] md:w-[45%]">
              <h2 className="lg:text-[18px] lg:leading-[24px] mb-1 text-[10px] md:text-[12px] font-[600] leading-[12px]">
                Select Status
              </h2>
              <div
                className="input border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => {
                  setShowStatus(!showStatus);
                  setShowCategories(false);
                }}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedStatus}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showStatus && (
                <div className="border md:rounded-[10px] text-[10px] md:text-[12px] lg:text-[16px] lg:mt-2 rounded-[4px] absolute right-0 w-[70%] md:w-full bg-[#FFF] z-[10]">
                  <div
                    onClick={() => handleStatusFilter("All")}
                    className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]"
                  >
                    All Transactions
                  </div>

                  <hr />

                  <div
                    onClick={() => handleStatusFilter("Successful")}
                    className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]"
                  >
                    Successful
                  </div>

                  <hr />

                  <div
                    onClick={() => handleStatusFilter("Failed")}
                    className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]"
                  >
                    Failed
                  </div>

                  <hr />

                  <div
                    onClick={() => handleStatusFilter("Pending")}
                    className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]"
                  >
                    Pending
                  </div>

                  <hr />

                  <div className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]">
                    Refunded
                  </div>

                  <hr />

                  <div className="text-[10px] text-[#7C7C7C] font-semibold pl-[5px] py-[7px] lg:text-[15px]">
                    Canceled
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t-[2px] border-b-[2px] border-l-[1px] border-r-[1px] mt-[20px] lg:mt-[40px]">
            <div
              className={`${
                toggleSideBar
                  ? "lg:gap-[px] lg:text-[20px]"
                  : "lg:gap-[118px] lg:text-[23px]"
              } my-[1%] flex text-[8px] font-extrabold justify-between gap-[8px] md:my-[0.5%] md:text-[10px] md:gap-[px] lg:text-[12] `}
            >
              <div
                onClick={() => {
                  setCalender((prev) => !prev);
                }}
                className={`cursor-pointer ${styles.filter} ${
                  isDarkMode ? "border" : ""
                } flex items-center gap-[1px] px-[2px] rounded-[3px] md:px-[8px]`}
              >
                <div className={`text-[#04177f] lg:text-[15px]`}>Filter by Date </div>
                <img
                  className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/dateImg.png"
                  alt=""
                />
              </div>
              <Link to="/wallet-summary">
                <div
                  className={`${
                    isDarkMode ? "border" : "bg-[#04177f]"
                  } text-white rounded-[7px] px-[5px] py-[5px] md:rounded-[11px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
                >
                  Wallet Summary
                </div>
              </Link>
              <Link to="/sales-summary">
                <div
                  className={`${
                    isDarkMode ? "border" : "bg-[#04177f]"
                  } text-white rounded-[7px] px-[5px] py-[5px] md:rounded-[11px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
                >
                  Sales Summary
                </div>
              </Link>
              <div
                className={`${
                  isDarkMode ? "border" : "bg-[#04177f]"
                } text-white rounded-[7px] px-[5px] py-[5px] flex items-center md:rounded-[11px] md:px-[7px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[18px]`}
              >
                Download Stat.
                <img
                  className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/downloadicon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {calender && (
            <div className="mt-[25px]">
              {" "}
              <Calender />{" "}
            </div>
          )}

          <div>
            <div
              className={`${styles.INnOUT} my-[10%] md:my-[5%] flex md:items-center lg:mt-[5%] lg:items-center`}
            >
              <select
                name="curr"
                id="curr"
                onChange={handleSelectedOption}
                value={selected}
                className=""
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
                <option value="KES">KES</option>
              </select>

              <div
                className={`${styles.inflowOutflow} ${
                  isDarkMode ? "border " : " bg-[#D5F6E3]"
                }  text-[7px] md:text-[12px] ${
                  toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"
                }`}
              >
                <div className="flex gap-1 md:items-center ">
                  <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Inflows
                  </p>
                  <img
                    className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-down.png"
                    alt="dropdown"
                  />
                </div>
                <div className="text-center">&#8358;0</div>
              </div>

              <div
                className={`${styles.inflowOutflow} ${
                  isDarkMode ? "border " : " bg-[#92abfe81]"
                }  text-[7px] md:text-[12px]`}
              >
                <div className="flex gap-1 md:items-center">
                  <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Transactions{" "}
                  </p>
                  <img
                    className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-down.png"
                    alt="dropdown"
                  />
                </div>
                <div className="text-center">0</div>
              </div>

              <div
                className={`${styles.inflowOutflow} ${
                  isDarkMode ? "border " : " bg-[#FDCECE]"
                } text-[7px] md:text-[12px]`}
              >
                <div className="flex gap-1 md:items-center">
                  <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Outflows
                  </p>
                  <img
                    className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-up.png"
                    alt="dropdown"
                  />
                </div>
                <div className="text-center">&#8358;0</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-[10px] md:">
              <p className="text-[10px] md:text-[12px] lg:text-[16px] text-[#7C7C7C] font-semibold">
                Transaction History
              </p>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
          </div>

          <div className="flex w-full justify-between mt-[20px]">
            <div className="w-[75%] h-[30px] md:h-[40px] lg:h-[60px]  flex border-[1px] relative pl-[5px] lg:w-[85%]">
              <img
                src={Search1}
                alt=""
                className="absolute top-[3px] w-[15px] h-[20px] md:w-[20px] md:top-[10px] lg:top-[18px]"
              />
              <input
                type="text"
                placeholder="Search for Transactions, e.g; Order Number"
                className="outline-none pl-[20px] text-[10px] w-full md:text-[14px] lg:text-[16px] md:pl-[25px] lg:pl-[30px]"
              />
            </div>

            <button className="input flex items-center justify-center border-[1px] h-[30px] md:h-[40px] lg:h-[60px] w-[25%] lg:w-[15%] md:gap-[5px]">
              <p className="text-[10px] text-[#7C7C7C] font-semibold md:text-[14px] lg:text-[16px]">
                Search
              </p>
              <span>
                <img src={Search2} alt="" className="md:w-[20px]" />
              </span>
            </button>
          </div>

          {/* table for mobile view */}
          
          <div>
            <div
              className=" h-full md:hidden flex flex-col mt-9  w-full px-[20px] pb-[5px] border-x-[1.2px] border-b-[1.2px]
 border-gray-500 border-opacity-[25%] my-[50px] shadow-md"
            >
              {filteredTransactions.map((transaction, index) => (

<div key={index}>
                
                <Link  to={`/${transaction.status === 'Successful' ? 'SuccessfullReceipt' : transaction.status === 'Failed' ? 'FailedReceipt' : 'PendingReceipt'}`}
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


          {/* Larger screen */}

          <div
            className={`${styles.viewTransact} ${
              isDarkMode ? "bg-black border" : "bg-white"
            } ${
              toggleSideBar ? "md:px-[px]" : "md:px-[px]"
            } hidden md:block md:mt-[30px] md:mb-[10%] `}
          >
            <div
              className={`transaction ${
                toggleSideBar
                  ? "lg:text-[15px] md:gap-[5.9%] xl:gap-[10%] md:pl-[5px]"
                  : "lg:text-[20px] lg:h-[44px] md:gap-[9%] lg:gap-[9.8%] xl:gap-[9.8%]"
              } ${
                isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
              } hidden md:text-[12px] font-semibold md:flex md:h-[35px] md:justify-start md:pl-[5px] md:items-center  mb-[%] 2xl:gap-[%]`}
            >
              <div>Products</div>
              <div>Description</div>
              <div>Order No</div>
              <div>Amount</div>
              <div>Date & Time</div>
              <div>Status</div>
            </div>

            {filteredTransactions.map((transaction, index) => (
              <div key={index}>
                
              <Link  to={`/${transaction.status === 'Successful' ? 'SuccessfullReceipt' : transaction.status === 'Failed' ? 'FailedReceipt' : 'PendingReceipt'}`}
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
                      backgroundColor: getBackgroundColor(transaction.status),
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

            <div className={`transaction2 md:flex md:justify-center md:pb-[30px]`}>
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
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default TransactionPage;
