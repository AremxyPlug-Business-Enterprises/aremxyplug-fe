import React, { useState } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../../../Context";
import "../DataTopUpPage/DataTopUp.css";
import Transaction from "./TransactionPageImages/Transaction.svg";
import ArrowDown from "./TransactionPageImages/ArrowDown.svg";
import { Link } from "react-router-dom";
import styles from "../component.module.css";
import { Calender } from "../Calender";
import "../DataTopUpPage/DataTopUp.css";
import { GetFunction,HandleUserSession } from "../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../Loader/Loader";
import NoRecordImage from "../../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import {useNavigate} from "react-router-dom"

const TransactionPage = () => {
  const navigate = useNavigate()
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);

  const [showCategories, setShowCategories] = useState(false);

  const [showStatus, setShowStatus] = useState(false);
  const [calender, setCalender] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [selected, setSelected] = useState("NGN");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [activeCategory, setActiveCategory] = useState("");

  const [activeTab, setActiveTab] = useState("");
  const {transactionResponse, setTransactionResponse} = useContext(ContextProvider);
  const [loading,setLoading] = useState(false);
  const [sessionModal,setSessionModal] = useState(false)
  const [transactionHistoryError, setTransactionHistoryError] = useState("");
  const handleTabClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setIsActive(!isActive);
  };

  const handleFilterButtonClick = () => {
    setSelectedCategory(activeCategory);
    setShowCategories(false);
  };

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
//     if(clickedoption){
//      setSymbol(selected === "USD" ? "$" : selected === "AUD" ? 
//  "AU$" : selected === "KES" ?   "KSh" : selected === "EUR" ? "€" : "")
//     }
    return;
  };


  //Funcntio to help get the transaction details
  //  which include necessary query parameters for search
    const GetTransactionInformation = async()=> {
      if(!navigator.onLine) return setTransactionHistoryError("Network error")
      const path ="transactions"
      const SuccessHandler =()=>{
       console.log("user transaction details fetched")
}
      const FailedHandler = async(ErrorType)=> {
    if(ErrorType === "unauthorised"){
      setTransactionHistoryError("unauthorised");
      await GetFunction(path, setLoading, SuccessHandler, (ErrorType)=> {
        if(ErrorType === "unauthorised"){
       setSessionModal(true);
        }
      }, setTransactionResponse)
    }else if(ErrorType === "Network error" || ErrorType === "User error" || ErrorType === "Bad request"){
     setTransactionHistoryError("Network error")
    }else if(ErrorType === "Server error"){
      setTransactionHistoryError("Server error")
    }else {
      setTransactionHistoryError(null)
    }
      }   
      await GetFunction(path, 
        setLoading, 
        SuccessHandler,
         FailedHandler,
          setTransactionResponse)}

   
  useEffect(()=> {
    if(transactionResponse?.data?.data?.data === undefined){
 GetTransactionInformation()
    }
    setSelected("NGN");

 //eslint-disable-next-line
 }, [])
 window.addEventListener("online", ()=> {
   if(transactionHistoryError === "Network error"){
    GetTransactionInformation();
   }
 })

    

  const getBackgroundColor = (status) => {
    if (status === "delivered" || status === "Successful") {
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

  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    setShowStatus(false);
  };

 const filteredTransactions = transactionResponse?.data?.data?.data?.transactions.filter((transaction) => {
  if(selectedStatus === "" || selectedStatus === "All Transactions"){
      return transaction
    }else{
      return transaction.status === selectedStatus;
    }
   
  });
 
  const chooseStatus = ["All Transactions", "Delivered", "Failed", "Pending", "Refunded"];

const symbolValue = selected === "USD" ? "$" : selected === "AUD" ? 
 "AU$" : selected === "KES" ?   "KSh" : selected === "EUR" ? "€" : selected === "GBP" ? "£" : "₦";


//Function handling filtering the transactionResponse based on the 
//selected categpry by the user
// function filterBySelectCategory(categoryByFlowtype, categoryByProduct){
//   transactionResponse?.data?.data?.data?.transactions?.filter(filterData=> {
//     if(filterData?.flow_type === categoryByFlowtype){
//       return filterData?.flow_type === categoryByFlowtype
//     }else if(filterData?.product === categoryByProduct){
//    return filterData?.product === categoryByProduct;
//     }else{
//       return []
//     }
//   })
// }


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
            className="min-h-[90px] py-[15px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between
                 px-[16.51px] md:px-[28.65px] lg:px-[50px] mb-[30px] lg:mb-[40px]"
          >
            <div className="py-[9.57px] md:py-[16.61px] align-middle self-center
                 flex flex-col gap-1.5 w-[70%]">
              <p className="text-[11px] leading-[14px]  lg:leading-[30px]
                   lg:text-[24px] md:text-[13.75px] font-semibold">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              {/* <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
               Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track. 
              </p> */}
            </div>

            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
              <img
                src={Transaction}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px]
                 lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[20px] md:flex-row md:justify-between md:w-[90%]">
            <div className="relative  md:w-1/2">
              <h2 className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px] '
                      md:font-[600] font-[400]">
                Select Categories
              </h2>
              <div
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
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
                  <p className="pl-[5px] py-[7px] text-[10px] lg:text-[15px] font-semibold text-[#7C7C7C]">
                    All
                  </p>

                  <hr />

                  <div className="flex justify-center py-[10px] gap-[5px]">
                    <p
                      onClick={() => handleTabClick("Inflows")}
                      className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold 
                                   ${
                                     activeTab === "Inflows"
                                       ? "text-[#fff] bg-[#04177F]"
                                       : "text-[#7C7C7C] bg-[#F2FAFF]"
                                   }
                                  `}
                    >
                      Inflows
                    </p>
                    <p
                      onClick={() => handleTabClick("Transactions")}
                      className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold 
                                   ${
                                     activeTab === "Transactions"
                                       ? "text-[#fff] bg-[#04177F]"
                                       : "text-[#7C7C7C] bg-[#F2FAFF]"
                                   }
                                  `}
                    >
                      Transactions
                    </p>
                    <p
                      onClick={() => handleTabClick("Outflows")}
                      className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold 
                                    ${
                                      activeTab === "Outflows"
                                        ? "text-[#fff] bg-[#04177F]"
                                        : "text-[#7C7C7C] bg-[#F2FAFF]"
                                    }
                                   `}
                    >
                      Outflows
                    </p>
                  </div>

                  <hr />

                  <div className="flex justify-start py-[10px] pl-[5px] gap-[5px]">
                    <p
                      onClick={() => handleCategoryFilter("All Categories")}
                      className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                        activeCategory === "All Categories"
                          ? "text-[#fff] bg-[#04177F]"
                          : "text-[#7C7C7C] bg-[#F2FAFF]"
                      }`}
                    >
                      All Categories
                    </p>
                  </div>

                  <hr />

                  <p className="text-[#7C7C7C] text-[10px] lg:text-[15px] 
                  font-semibold pl-[5px] py-[7px]">
                    Telecom
                  </p>

                  <hr />

                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Airtime Top-up")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Airtime Top-up"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Airtime Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Data Top-up")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Data Top-up"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Data Top-up
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Education Pins")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Education Pins"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Education Pins
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Tv Subscription")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Tv Subscription"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Tv Subscription
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() =>
                          handleCategoryFilter("Electricity Bills")
                        }
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Electricity Bills"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Electricity Bills
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Airtime Conversion")
                        }
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Airtime Conversion"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Airtime Conversion
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Bulk SMS")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Bulk SMS"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Bulk SMS
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Recharge Card Printing")
                        }
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Recharge Card Printing"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
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
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Virtual Accounts"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Virtual Accounts
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Money Transfer")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Money Transfer"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Money Transfer
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Wallet Transfer")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Wallet Transfer"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Wallet Transfer
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Card Payments")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Card Payments"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Card Payments
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() =>
                          handleCategoryFilter("International Transfer")
                        }
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "International Transfer"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        International Transfer
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Withdrawal")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Withdrawal"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Fiat Conversion")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Fiat Conversion"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Fiat Conversion
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Crypto Conversion")
                        }
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Crypto Conversion"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Crypto Conversion
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Crypto Top-up")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Crypto Top-up"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Crypto Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Points Redeem")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Points Redeem"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Points Redeem
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Bank USSD")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Bank USSD"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Bank USSD
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Request Money")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Request Money"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Request Money
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Payment Link")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Payment Link"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Payment Link
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Scan QR Code")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Scan QR Code"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
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
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Card Top-up"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Card Top-up
                      </p>
                      <p
                        onClick={() => handleCategoryFilter("Card Withdrawal")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Card Withdrawal"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Card Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                        onClick={() => handleCategoryFilter("Card Transfer")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Card Transfer"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Card Transfer
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="flex justify-center py-[10px]">
                    <button
                      onClick={handleFilterButtonClick}
                      className="text-[#FFFFFF] bg-[#04177F] rounded-[5px] lg:text-[15px] text-[10px] px-[10px] py-[3px] font-semibold"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative  md:w-1/2">
              <h2   className="text-[#7E7E7E] text-[14px] lg:text-[17px]
                       md:text-[13px] 
                      md:font-[600] font-[400]">
                Select Status
              </h2>
              <div
               className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                onClick={() => {
                  setShowStatus(!showStatus);
                  setShowCategories(false);
                }}
              >
                <h2 className="text-[12px] font-[600]
                 leading-[16px] capitalize md:text-[13.17px]
                  md:leading-[16.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedStatus}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showStatus && (
                 <div 
               className={`absolute lg:top-[90px] md:top-[60px]  top-[74px]
                 z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
          ${
            isDarkMode
              ? "bg-black text-white border border-white"
              : "hover:bg-[#EDEAEA]"
          }`}>
            {chooseStatus.map((status)=> (
             <p onClick={() => {
                      handleStatusFilter(status === "Delivered"? "delivered": status)
                      setSelectedStatus(status === "Delivered" ? "delivered" : status)
                    }
                    }
                   className={`pb-[20px] pt-[20px] md:pb-[14px] 
                                md:pt-[14px] font-weight-bold text-[14px] leading-[18.4px] 
                                md:py-[15px]
                                 py-[8px] pl-[10px] font-[500]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer ${
           isDarkMode
             ? "bg-black text-white border border-white"
             : "hover:bg-[#EDEAEA] bg-white text-[#7C7C7C]"
         }`}>
                              {status}
                  </p>
                  

             ))} 
               </div> 
              )}
            </div>
          </div>

          <div className="flex justify-between items-center w-full 
          py-[8px] px-[3px] gap-[5px] h-[50px] border-[1px] lg:border-[1.5px] mt-[30px]
           border-gray-300 lg:border-gray-400 rounded-[5px]  lg:rounded-[15px] lg:h-[70px] ">
            
              <div
                onClick={() => {
                  setCalender((prev) => !prev);
                }}
                className={`cursor-pointer bg-gray-100  ${
                  isDarkMode ? "border" : ""
                } flex items-center gap-[1px] px-[1px]
                 md:px-[8px] lg:rounded-[15px] rounded-[5px] w-[25%] h-full `}
              >
                <p className={`text-[#04177f] text-[11px] 
                leading-[14px] font-[500] 
                  lg:text-[16px]`}>
                  Filter by Date{" "}
                </p>
                <img
                  className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/dashboardImages/dateImg.png"
                  alt=""
                />
              </div>
              <div className={`w-[25%] flex flex-col md:flex-row md:gap-[5px]
               justify-center items-center
               rounded-[7px] h-full
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" :  "bg-[#04177f]"
                  }
                  lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`} onClick ={()=> {
                    navigate("/wallet-summary")
                  }}>
                <p
                  className={`text-white
                  text-[10px] leading-[13px] font-[500]
                   lg:leading-[24px] lg:text-[12px] `}
                >
                  Wallet
                </p>
                <p
                  className={` text-white
                  text-[10px] leading-[13px] font-[500]
                   lg:leading-[24px] lg:text-[12px] `}
                >
                  Summary
                </p>
              </div>
             
                    
            
                <div
                  className={`w-[25%] flex flex-col md:flex-row 
                    justify-center items-center md:gap-[5px]
               rounded-[7px] h-full
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" :  "bg-[#04177f]"
                  }
                  lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
                onClick={()=> {
                  navigate("/sales-summary")
                }}>
                  <p
                  className={`text-white
                  text-[10px] leading-[13px]
                   lg:leading-[24px] lg:text-[12px] font-[500]`}
                >
                  Sales
                </p>
                <p
                  className={`text-white
                  text-[10px] leading-[13px]
                   lg:leading-[24px] lg:text-[12px] font-[500] `}
                >
                  Summary
                </p>
                </div>
              
              <div
               className={`w-[25%] flex flex-col justify-center items-center
                md:flex-row md:gap-[5px]
               text-white rounded-[7px] h-full
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" :  "bg-[#04177f]"
                  }
                  lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
               >
                <p  className={`text-white text-center
                  text-[10px] leading-[13px]
                   lg:leading-[24px] lg:text-[12px] font-[500] `}
                > Download Stat.</p>
               
                <img
                  className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/dashboardImages/downloadicon.png"
                  alt=""
                />
              </div>
              {calender && (
                <div className="absolute mt-[27px] md:mt-[40px] lg:mt-[55px] z-[1000] font-[400]">
                  {" "}
                  <Calender />{" "}
                </div>
              )}
            </div>
          

          <div>
            <div
              className={` flex w-full gap-[5px] h-[70px] lg:h-[100px] md:items-center 
              lg:mt-[5%] lg:items-center my-[30px]`}>
              <select
                name="curr"
                id="curr"
                onChange={handleSelectedOption}
                value={selected}
                className={`${styles.selected} w-[25%]`}
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="AUD">AUD</option>
                <option value="KES">KES</option>
              </select>

              <div
                className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center
                   gap-[3px] ${
                  isDarkMode ? "border " : " bg-[#D5F6E3]"
                }   ${
                  toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"
                }`}
              >
                <div className="flex gap-1  justify-center items-center  ">
                  <p className={` text-[11px] text-center leading-[14px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]
                    ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Inflows
                  </p>
                  <img
                    className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-down.png"
                    alt="dropdown"
                  />
                </div>
                <p className="text-center text-[10px] leading-[13px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]">
                  {selected === "NGN" ?  transactionResponse?.data?.data?.data ?
        transactionResponse?.data?.data?.data?.total_inflow?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN"
        }) :   "₦"  : `${symbolValue}0.00` }
                </p>
              </div>

              <div
                className={`w-[33.3%] rounded-[3px] lg:rounded-[5px]  flex flex-col h-full justify-center items-center
                   gap-[3px] ${
                  isDarkMode ? "border " : " bg-[#92abfe81]"
                }  text-[7px] md:text-[12px]`}
              >
                <div className="flex gap-1 justify-center items-center ">
                  <p className={`  text-[11px] text-center leading-[14px] font-[500] 
                  lg:text-[18px] lg:leading-[24px] ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Transactions{" "}
                  </p>
                  <img
                    className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-down.png"
                    alt="dropdown"
                  />
                </div>
                <p className="text-center  text-[10px] leading-[13px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]">{selected === "NGN" ? 
                  transactionResponse?.data?.data?.data?.total_count
                   || transactionResponse?.data?.status === 200  ?
                    transactionResponse?.data?.data?.data?.total_count: "" : 0}  </p>
              </div>

              <div
                className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center
                   gap-[3px] ${
                  isDarkMode ? "border " : " bg-[#FDCECE]"
                } text-[7px] md:text-[12px]`}
              >
                <div className="flex gap-1 justify-center items-center">
                  <p className={`text-[11px] text-center leading-[14px] font-[500] 
                  lg:text-[18px] lg:leading-[24px] ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                    Total Outflows
                  </p>
                  <img
                    className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-up.png"
                    alt="dropdown"
                  />
                </div>
                <p className="text-center  text-[10px] leading-[13px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]">
                  {selected === "NGN"  ? transactionResponse?.data?.data?.data ?
        transactionResponse?.data?.data?.data?.total_outflow?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN"
        }) :   "₦"  : `${symbolValue}0.00`}
                </p>
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
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
          </div>

          {/* <div className="flex w-full justify-between mt-[20px]">
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
          </div> */}

          {/* table for mobile view */}

          <div>
            <div
              className={`h-full md:hidden flex flex-col mt-9  w-full  border-x-[1.2px]
   my-[50px]  border-b-[1.2px] px-[20px] border-opacity-[25%] shadow-md
 ${isDarkMode ? "border-white": "border-gray-500 "}`}
            >
              {loading === true ? (
              <div className="h-[150px] flex items-center justify-center">
          <Loader/>
          </div>
              ) : (
          filteredTransactions && filteredTransactions?.length > 1 ? (
     filteredTransactions?.map((transaction, index) => (
                <div className={`${index < filteredTransactions?.length - 1 ? "border-b-[1px] border-gray-500 " : ""}`} 
                key={index}>
                  <Link
                    to={`/${
                      transaction.status === "delivered"
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
                                 className="flex justify-between py-[20px]"
                               >
                                 <div className="flex flex-col gap-[7.648px]">
                                   <h2 className={`font-medium  text-[9.167px] leading-[11.167px]
                                    ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Order No : {transaction?.order_id}
                                   </h2>
                                   <h2 className={`font-medium text-black text-[9.167px] 
                                   leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Product : {transaction?.product}
                                   </h2>
                                   <p className={ `font-medium text-neutral-500 text-[9.167px] 
                                   leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Description : {transaction.description}
                                   </p>
           
                                   <p className={`font-medium text-neutral-500  
                                   text-[9.167px] leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Amount : {transaction.amount ? transaction.amount?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                     }): ""}
                                   </p>
           
                                   <div className="hidden">
                                     <p className={`font-medium text-neutral-500 
                                      text-[9.167px] leading-[11.167px] ${isDarkMode ?"text-white" : "text-neutral-500"  }`}>
                                       Network : {transaction?.network}
                                     </p>
           
                                     <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                                       recipientname : {transaction?.recipientname}
                                     </p>
           
                                     <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                                       phonenumber : {transaction?.phonenumber}
                                     </p>
           
                                     <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                                       wallet : {transaction?.wallet}
                                     </p>
                                   </div>
                                 </div>
                                 {/* rightSide */}
                                 <div className="flex flex-col gap-[13.473px]">
                                   <div className="flex flex-row justify-between gap-[5px] items-center">
                                     <p className={`font-medium 
                                    text-[9.167px] leading-[11.167px] cursor-pointer ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                       Status:{" "}
                                     </p>
                                     
                                       <p
                                         style={{
                                           backgroundColor: getBackgroundColor(
                                             transaction?.status
                                           ),
                                         }}
                                         className="font-medium text-white self-center text-[9.167px] leading-[11.167px] cursor-pointer
                             py-[2.122px] px-[4.245px]  rounded-sm"
                                       >
                                         {transaction?.status === "delivered" ? "Successful" : "unknown"}
                                       </p>
                                    
                                   </div>
           
                                   <div className="flex flex-row">
                                     <div>
                                       <p className={`font-medium text-[10px] 
                                        leading-[13px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                         <span className="block">Date & Time:</span>
                                         <span className="block"> {transaction?.created_at?.slice(0,10)} </span>
                                         <span className="block">{ transaction?.created_at?.slice(14,19)}</span>
                                       </p>
                                     </div>
                                     <div className="w-[13.41px] mt-7 h-[12.06px]">
                                       <img
                                         className="w-[13.41px] h-[12.06px]"
                                         src="./Images/dashboardImages/arrowright.png"
                                         alt=""
                                       />
                                     </div>
                                   </div>
                                 </div>
                               </div>
                  </Link>
                </div>
              ))) : (
                ((filteredTransactions && filteredTransactions?.length < 1)|| transactionResponse?.data?.data?.data?.transactions?.length < 1 ) ? (
              <img className="lg:w-[517px] lg:h-[456px]" src={NoRecordImage} alt="No record found"/> 
              ) : 
              transactionHistoryError === "Network error"  ? (
               <p className={`text-[20px] text-black font-[500] 
                ${isDarkMode ? "text-white" : "text-black"}`}>
        An internet connection error has occured,
         kindly check your internet connection.
               </p>
       ):  transactionHistoryError === "Server error" ? (
             <p className={`text-[20px] text-black font-[500] 
              ${isDarkMode ? "text-white" : "text-black"}`}>
            Our server is currently facing a downtime, you would receive your transactions shortly.     
               </p>
       ) : transactionHistoryError === "unauthorised" && transactionResponse?.data?.data?.data?.transactions === undefined ? (
            <div className="h-[150px] flex items-center justify-center">
          <Loader/>
          </div>
       ) : loading === false && transactionHistoryError === null  &&   <p className ={`text-[20px] text-black font-[500]
        ${isDarkMode ? "text-white" : "text-black"}`}>
        An Error has occured try again later.
               </p>))}
            
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
                  ? "transaction-table2 lg:text-[15px] md:gap-[5%] xl:gap-[%] md:pl-[px] md:h-[50px]"
                  : "transaction-table lg:text-[20px] md:gap-[8.6%] lg:gap-[%] xl:gap-[%] md:h-[50px]"
              } ${
                isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
              } hidden md:text-[12px] font-semibold md:flex md:justify-start md:px-[20px] md:items-center`}
            >
              <div>Products</div>
              <div>Description</div>
              <div>Order No</div>
              <div
                className={` xl:pr-[5px] 2xl:pr-[px] ${
                  toggleSideBar ? "amount2 md:pr-[10px]" : "amount1"
                }`}
              >
                Amount
              </div>
              <div>Date & Time</div>
              <div>Status</div>
            </div>
       {loading === true ? (
              <div className="h-[150px] flex items-center justify-center">
          <Loader/>
          </div>
              ) : (
          filteredTransactions && filteredTransactions?.length > 1 ? (
     filteredTransactions?.map((transaction, index) => (
                 <div key={index}>
                <Link
                  to={`/${
                    transaction.status === "delivered"
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
                    }  hidden  font-semibold md:flex md:h-[60px] lg:h-[85px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
                  >
                    <div
                      className={`md:text-[#000000] ${
                        toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                      }`}
                    >
                      {transaction?.product}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C] ${
                        toggleSideBar ? "md:w-[18.5%]" : "md:w-[18.5%]"
                      }`}
                    >
                      {transaction?.description}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[16%]"
                      }`}
                    >
                      {transaction?.order_id}
                    </div>
                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[17%]"
                      }`}
                    >
                     {transaction.amount ? transaction.amount?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                     }): ""}
                    </div>

                    <div
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16.5%] " : "md:w-[16.5%]"
                      }`}
                    >
                      <span>{transaction?.created_at?.slice(0,10)}</span>
                      <br />
                      <span>{ transaction?.created_at?.slice(14,19)}</span>
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
                        src="./Images/dashboardImages/arrowright.png"
                        alt="/"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              ))) : (
                ((filteredTransactions && filteredTransactions?.length < 1)|| transactionResponse?.data?.data?.data?.transactions?.length < 1 ) ? (
              <img className="lg:w-full lg:h-[456px] flex self-center w-[" src={NoRecordImage} alt="No record found"/> 
              ) : 
              transactionHistoryError === "Network error"  ? (
               <p className={`text-[20px] text-black font-[500]`}>
        An internet connection error has occured,
         kindly check your internet connection.
               </p>
       ):  transactionHistoryError === "Server error" ? (
             <p className={`text-[20px] text-black font-[500]`}>
            Our server is currently facing a downtime, you would receive your transactions shortly.     
               </p>
       ) : transactionHistoryError === "unauthorised" && transactionResponse?.data?.data?.data?.transactions === undefined ? (
            <div className="h-[150px] flex items-center justify-center">
          <Loader/>
          </div>
       ) : loading === false && transactionHistoryError === null  &&   <p className ={`text-[20px] text-black font-[500]`}>
        An Error has occured try again later.
               </p>))}

         
           
          </div>
           <div
              className={`w-full flex justify-center gap-[5px] py-[70px] lg:py-[0px]`}
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
        </section>
      </div>
     
      {sessionModal && (
        <HandleUserSession/>
      )}
    </DashBoardLayout>
  );
};

export default TransactionPage;
  