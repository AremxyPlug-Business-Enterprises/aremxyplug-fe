import { useState, useEffect } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import receiptA from "../SalesSummaryPage/assets/cash receipt from online shopping on mobile phone (3)A.png";
import arrowsales from "../SalesSummaryPage/assets/arrow-square-rightsales.png";
import menusales from "../SalesSummaryPage/assets/menusales.png";
import arrow44 from "../SalesSummaryPage/assets/arrow-down@4x.png";
import arrow11 from "../SalesSummaryPage/assets/arrow-down@1x.png";
import flagpage from "../SalesSummaryPage/assets/Country Flagspage.png";
import flagpage1 from "../SalesSummaryPage/assets/Country Flagspage1.png";
import flagpage2 from "../SalesSummaryPage/assets/Countryflag2.svg";
import flagpage3 from "../SalesSummaryPage/assets/Countryflag3.svg";
import flagpage4 from "../SalesSummaryPage/assets/Countryflag4.svg";
import flagpage5 from "../SalesSummaryPage/assets/Countryflag5.svg";
import arrows from "../EducationPins/imagesEducation/arrow-down.svg";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { Calender } from "../Dashboard/DashboardComponents/Calender";
import {
  Link,
  useNavigate,
} from "react-router-dom/dist/react-router-dom.development";
import { GetFunction, InternalLoginSession } from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import NoRecordImage from "../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { GetLocalStorage } from "../LocalStorage/LocalStorage";
import { BalanceLoading } from "../Loader/Loader";
export default function WalletSummaryPage() {
  const Data = GetLocalStorage();
  const [isOpen1, setIsOpen1] = useState(false);
  const [balanceLoader, setBalanceLoader] = useState(false)
  // const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  // const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [transactionHistoryError, setTransactionHistoryError] = useState("");
  const [walletTransactionResponse, setWalletTransactionResponse] = useState(
    {}
  );
  const {
    isDarkMode,
    toggleSideBar,
    setOrderIdResponse,
    newBalance,
    setNewBalance,
    setElectricityTransErrorType,
    dateEdit,
    setDateEdit
  } = useContext(ContextProvider);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [selected, setSelected] = useState("NGN");
  const [methodImage, setMethodImage] = useState(flagpage);
  const [methodBalance, setMethodBalance] = useState(false);
  const [stateDateEdit, setStateDateEdit] = useState("Filter By Date")
  const navigate = useNavigate();
  // const toggleDropdown1 = () => { setIsOpen1(true); };
  //
  // const toggleDropdown2 = () => { setIsOpen2(true); setIsOpen3(false); setIsOpen4(false);setIsOpen1(false); };
  //
  //  const toggleDropdown3 = () => { setIsOpen3(true); setIsOpen2(false); setIsOpen4(false); setIsOpen1(false); };
  //
  //   const toggleDropdown4 = () => { setIsOpen4(true);  setIsOpen3(false); setIsOpen2(false);setIsOpen1(false); };
  // console.log(totalOutFlow);

  const [calender, setCalender] = useState(false);
   const [selectedStatus, setSelectedStatus] = useState("Filter by Status");




  const GetTransactionInformation = async () => {
    if (!navigator.onLine) return setTransactionHistoryError("Network error");
    const path = `transactions/wallet-summary`;
    const SuccessHandler = () => {
       setTransactionHistoryError("");
      console.log("Wallet Summary fetched");
    };
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
         
        await GetFunction(
          path,
          setLoading,
          SuccessHandler,
          (ErrorType) => {
            if (
        ErrorType === "Network error" ||
        ErrorType === "User error" ||
        ErrorType === "Bad request"
      ) {
        setTransactionHistoryError("Network error");
      } else if (ErrorType === "Server error") {
        setTransactionHistoryError("Server error");
      } else {
        setTransactionHistoryError(null);
      }
          },
          setWalletTransactionResponse
        );
      } else if (
        ErrorType === "Network error" ||
        ErrorType === "User error" ||
        ErrorType === "Bad request"
      ) {
        setTransactionHistoryError("Network error");
      } else if (ErrorType === "Server error") {
        setTransactionHistoryError("Server error");
      } else {
        setTransactionHistoryError(null);
      }
    };
    await GetFunction(
      path,
      setLoading,
      SuccessHandler,
      FailedHandler,
      setWalletTransactionResponse
    );
  };

  const GetBalance = async () => {
    const SuccessHandler = () => {
      //alert("Successful");
      console.log("successfully retrieved balance");
      //alert("Successful")
    };
    const FailedHandler = async (ErrorType) => {
      console.log(`Failed to retrieve balance`);
      if (ErrorType === "unauthorised") {
        await GetFunction(
          "balance",
          setBalanceLoader,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              return setSessionModal(true);
            }
          },
          setPassDataBalance
        );
      }
    };
    await GetFunction(
      "balance",
      setBalanceLoader,
      SuccessHandler,
      FailedHandler,
      setPassDataBalance
    );
  };
  // Simulate async data loading

  window.addEventListener("online", () => {
    if (transactionHistoryError === "Network error") {
      GetTransactionInformation();
    }
  });

  //HandleDropDown
  const updateBalance =
    passDataBalance?.data?.data?.data !== undefined
      ? passDataBalance?.data?.data?.data?.balance
      : "";
  const updateBalanceToNumber = Number(updateBalance);
  const newBalanceToNumber = Number(newBalance);
  const [selectedBalance, setSelectedBalance] = useState("");
  const methodOptions = [
    {
      method: "NGN Wallet",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalanceToNumber?.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })})`
          : `(${newBalanceToNumber?.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })})`,
      flag: flagpage,
      id: 1,
    },
    { method: "USD Wallet ", balance: "(0.00)", flag: flagpage1, id: 2 },
    { method: "EUR Wallet", balance: "(0.00)", flag: flagpage2, id: 3 },
    { method: "GBP Wallet", balance: "(0.00)", flag: flagpage3, id: 4 },
    { method: "AUD Wallet", balance: "(0.00)", flag: flagpage4, id: 5 },
    { method: "KES Wallet", balance: "(0.00)", flag: flagpage5, id: 6 },
  ];

  useEffect(() => {
    //     if(salesResponse?.data?.data?.data === undefined){
    //  GetTransactionInformation()
    //     }
    setSelectedStatus("All Transactions")
    setDateEdit(()=> {
      const setDate = new Date()
      const isoFormatDate = setDate?.toLocaleString("sv-SE", {
         timeZone : "Africa/Lagos",
         hour12 : false
      })
      return isoFormatDate?.slice(0,10)
    })
    setSelected("NGN");
   
      GetBalance();
      if (GetBalance) {
        setNewBalance(
          passDataBalance?.data?.data?.data !== undefined
            ? passDataBalance?.data?.data?.data?.balance
            : ""
        );
      }
    
    GetTransactionInformation();
    //eslint-disable-next-line
  }, []);
  

  //Filtering the sales Summary data
  //    const filteredSalesSummary = salesResponse?.data?.data?.data?.transactions.filter((transaction) => {
  // if(selected === ""){
  //     return transaction
  //   }else{
  //     return transaction.product === selectedStatus;
  //   }

  // });

  // const BalanceValue = newBalance === "" || newBalance === null
  // || newBalance === undefined
  // ? Number(passDataBalance?.data?.data?.data?.balance) : Number(newBalance)

  //  Ascretaining the status from the response object then assigning
  // it the necessary bg-color
  const getBackgroundColor = (status) => {
    if (
      status === "delivered" ||
      status === "Successful" ||
      status === "success" ||
      status === ""
    ) {
      return "#97E8B9";
    } else if (status === "failed") {
      return "#FB9393";
    } else if (status === "pending") {
      return "#FFD98F";
    } else if (status === "refunded") {
      return "#A6D9FF";
    } else if (status === "cancelled") {
      return "#EFC6BE";
    } else {
      return "";
    }
  };

  const [orderLoading, setOrderLoading] = useState(false);

  const getTransactionByOrderId = async (orderId, product) => {
    if (!orderId || !product) return;
    const productType =
      product === "Airtime Top-up"
        ? "airtime"
        : product === "Data Top-up"
        ? "data"
        : product === "TV Subscription"
        ? "tv-sub"
        : product === "Education Pins"
        ? "edu"
        : product === "Electricity Bills"
        ? "electric-sub"
        : product === "Virtual Account"
        ? "deposit"
        : product === "Money Transfer"
        ? "transfer"
        : "";

    const path = `transactions/${orderId}?product=${productType}`;
    let result;
    const SuccessHandler = (response) => {
      result = response;
      console.log("Transaction fetched successfully");
    };
    const FailedHandler = async (ErrorType) => {
      // if (!navigator.online) alert("Kindly check your internet connection");
      if (ErrorType === "unauthorised") {
        await GetFunction(
          path,
          setOrderLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "unauthorised") {
              setSessionModal(true);
            }
          },
          setOrderIdResponse
        );
      } else if (ErrorType === "Server error") {
        await GetFunction(
          path,
          setOrderLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "Server error") {
              alert("A server error occured, please try again later");
              setElectricityTransErrorType(
                "Failed to process your request, try again some other time"
              );
            }
          },
          setOrderIdResponse
        );
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        setElectricityTransErrorType("An internet connection error");
      }
    };

    await GetFunction(
      path,
      setOrderLoading,
      SuccessHandler,
      FailedHandler,
      setOrderIdResponse
    );
    return result;
  };

  const symbolValue =
    selected === "USD"
      ? "$"
      : selected === "AUD"
      ? "AU$"
      : selected === "KES"
      ? "KSh"
      : selected === "EUR"
      ? "€"
      : selected === "GBP"
      ? "£"
      : "₦";

  const filteredWalletTransactions =
  ( walletTransactionResponse?.data?.data?.data?.data?.transactions !== null 
   || walletTransactionResponse?.data?.data?.data?.data?.transactions ) && stateDateEdit === "Filter By Date"
   ? walletTransactionResponse?.data?.data?.data?.data?.transactions?.filter((transaction) => {
   const handleStatus =  selectedStatus === "Successful" ? 
              "success" : selectedStatus === "Failed" ? "failed" :
               selectedStatus === "Pending" ? "pending" : selectedStatus === "Refunded" ? 
               "refunded" : selectedStatus;
            //console.log(transaction?.created_at?.slice(0, 10) === dateFiltered);
            if (
              selectedStatus === "" ||
              selectedStatus === "All Transactions"
            ) {
              return transaction;
            } else {
              return transaction.status === handleStatus
             
            }
          }
        ) :  walletTransactionResponse?.data?.data?.data?.data?.transactions !== null
       &&  stateDateEdit !== "Filter By Date"
      ? walletTransactionResponse?.data?.data?.data?.data?.transactions.filter( (transaction) => {
        console.log(transaction?.created_at.slice(0,10))
        return transaction?.created_at?.slice(0, 10) === dateEdit
      }
    ) : [];
      

  //console.log(walletTransactionResponse?.data?.data?.data?.data);
  const product = [
    "All Transactions",
    "Successful",
    "Failed",
    "Pending",
    "Refunded",
    "Cancelled",
  ];

  //=======Format Date ======
  const FormatDate =(DateValue)=> {
  if(!DateValue)  return "";
  const date = new Date(DateValue);
  return date?.toISOString()?.slice(0,10)

}
//======== Format Time ========
const FormatTime =(DateValue)=> {
  if(!DateValue) return ""
  const date = new Date(DateValue);
  const TimePart = date?.toLocaleTimeString("en-Us", {
    hour : "numeric",
    minute: "numeric",
    second : "numeric",
    hour12: true
  })
  return TimePart;
}
console.log(walletTransactionResponse?.data?.data?.data?.data?.total_outflow)
  return (
    <DashBoardLayout>
      <>
        <div className="flex flex-col gap-[20px]">
          <div
            // id="Transaction"
            className="min-h-[99px]   bg-gradient-to-r
               from-yellow-300 to-rose-400 lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]"
          >
            <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
              <p className="text-[11px] leading-[13px] lg:leading-[30px] lg:text-[24px] md:text-[13.75px] font-semibold">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              <p className="text-[10px] leading-[13px] lg:leading-[25px] lg:text-[20px] md:text-[11.46px]">
                Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track.
              </p>
            </div>

            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
              <img src={receiptA} alt="" className="w-[100%] h-[100%]" />
            </div>
          </div>

          {/* Wallet summary */}
          <div className=" flex gap-[8px] md:gap-[10px] lg:mt-[25px] mt-[6px] md:mt-[10] flex-row">
            <div class="text-neutral-500 text-[11px] lg:text-[20px] md:text-[14px] font-semibold ">
              Wallet Summary
            </div>
            <div class="w-4 h-4 lg:h-6 lg:mt-1 lg:w-6 md:w-[15.75px] md:h-[15.75px] justify-center items-center inline-flex">
              <img
                src={arrowsales}
                class="w-4 h-4 lg:h-6 lg:w-6 md:mt-[8px] mt-1 md:w-[15.75px] md:h-[15.75px] "
                alt=""
              />
            </div>
          </div>
          {/* available balance */}
          <div className="flex flex-col gap-[20px] relative ">
            <div className="lg:px-[] lg:py-[25px] lg:h-[120px] py-[10px] lg:gap-2.5 gap-[5px] lg:mt-[25px] bg-indigo-300 bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px] justify-center lg:w-full w-full md:w-full md:mt-[9px] md:h-[68.75px] md:px-[140.10px] md:py-[14.32px] items-center flex-col flex">
              <div className="w-full flex flex-col gap-[100px]">
                <div
                  onClick={() => {
                    setMethodBalance(true);
                    setCalender(false);
                    setIsOpen1(false);

                    if (methodBalance === false) {
                      setMethodBalance(true);
                      document
                        .querySelector(".methodDrop")
                        .classList.add("DropIt");
                    } else {
                      setMethodBalance(false);
                      document
                        .querySelector(".methodDrop")
                        .classList.remove("DropIt");
                    }
                  }}
                  className="justify-center items-center mt-[5px] 
              md:mt-[12px] gap-[5.5px] cursor-pointer  lg:gap-[11px] md:gap-[6.30px]  flex"
                >
                  <img
                    className="h-[16px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]"
                    src={methodImage}
                    alt=""
                  />
                  <p className = {`lg:text-[20px] 
                text-[12px] md:text-[13px]  md:whitespace-nowrap font-semibold 
                lg:leading-relaxed md:leading-[14.90px] leading-[14.40px]
                ${isDarkMode ? "text-white" : "text-black"}`}>
                    Available Balance
                  </p>
                  <p className={` lg:text-[20px] text-[14px] md:text-[13px] font-[700]
                  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]
                 ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                    {balanceLoader === false ? (
                                  selectedBalance?.length < 1 ? newBalance === "" 
                                  || newBalance === null || newBalance === undefined
                                    ? `(${updateBalanceToNumber?.toLocaleString("en-NG",{
                           style : "currency",
                           currency : "NGN"
                          })})` : `(${ newBalanceToNumber?.toLocaleString("en-NG",{
                           style : "currency",
                           currency : "NGN"
                          }) })` : selectedBalance 
                        ) : (
                       <BalanceLoading/>
                        )}
                  </p>

                  <img
                    className="methodDrop h-[16px] w-[14px] md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]"
                    src={arrows}
                    alt="Arrow "
                  />
                </div>

                {methodBalance && (
                  <div
                    className={`absolute top-[60%] z-[2] flex
                     flex-col w-[100%] lg:w-[30%] md:w-[50%]  cursor-pointer 
                     justify-center bg-slate-600   ${
                       isDarkMode
                         ? "bg-black border-white rounded-[7px] text-white"
                         : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                     }
                      ${
                        toggleSideBar
                          ? "lg:w-[31.5%] lg:top-[100.5%]"
                          : "lg:w-[38.5%] lg:top-[105.3%]"
                      } shadow-xl border w-full lg:w-full  flex flex-col divide-y absolute top-20`}
                  >
                    {methodOptions.map((method) => (
                      <div
                        onClick={() => {
                          setSelectedBalance(
                            method.id === 1
                              ? method.balance
                              : method.method === "NGN Wallet"
                              ? newBalance === "" || newBalance === null
                                ? `(${updateBalance})`
                                : `(${newBalance})`
                              : method.balance
                          );
                          setMethodImage(method.flag);
                          setMethodBalance(false);
                          setCalender(false);
                          setIsOpen1(false);
                          setMethodBalance(false);
                          document
                            .querySelector(".methodDrop")
                            .classList.remove("DropIt");
                        }}
                        className={`py-[18px] md:py-[14px] font-normal px-2 flex items-center gap-[5px] text-[12px] md:text-[14px] lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-slate-50
                         ${
                           isDarkMode
                             ? "text-white hover:bg-slate-800 bg-black"
                             : "text-[#7E7E7E] "
                         } ${
                          method.method === "NGN Wallet"
                            ? "cursor-pointer"
                            : "cursor-not-allowed opacity-50"
                        }`}
                        key={method.id}
                      >
                        <img
                          className="lg:w-[29.27px] w-3 lg:h-[29.45px]
                      h-3 lg:left-0 lg:top-[0.91px] md:w-[16.77px]
                      md:h-[16.77px] "
                          src={method.flag}
                          alt=""
                        />
                        {method.method} : {method.balance}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* filter by date and product*/}
            <div
              className={`${toggleSideBar
  ? " md:w-[550px]"
  : "  md:w-full"}
    ${isDarkMode ? " bg-black border-[0.5px] border-white rounded-[12px]" : "bg-white"}
  w-full h-[50px] py-[5px] px-[5px]  mt-[2px] lg:mt-[30px]  md:py-[11px]
    lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px]
    md:h-[41.25px] md:pl-[9.17px] md:pr-[277.40px] md:pt-[8.39px] lg:w-full
    md:pb-[6.40px]  shadow-md border-[1px] border-black rounded-[7px]
    border-opacity-30 justify-start items-center gap-[52.80px] flex relative`}
            >
              {/* filter by date */}

              <div
             
              className={`cursor-pointer ${styles.filter}  ${
                isDarkMode ? "border-[0.5px] border-white rounded-[12px]" : ""} flex  md:gap-[6px] items-center
                 justify-center md:w-[145px] h-[100%] w-[100%]
                lg:w-[300px] gap-[1px]
                 px-[2px] rounded-[10px] md:px-[8px] flex-row`}>
                <p
                
                   onClick={() => {
                    if(Data?.ConfirmAcc === "true"){
                      if(calender === false){
                  setCalender(true);
                 
                  setIsOpen5(false);
                  setIsOpen1(false);
                      }else{
                        setCalender(false)
                      }
                    }
                }}
                  className={`${isDarkMode ? "text-white" :"text-[#04177f]"} text-[11px] 
                leading-[14px] font-[500] 
                  lg:text-[16px]`}>
                  {stateDateEdit}
                </p>

                <img
                  src="./Images/dashboardImages/dateImg.png"
                  className="w-[12px] h-[12px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
                  alt=""
                />
                  {calender && (
              <div className={`absolute rounded-[20px] left-0
                   md:mt-[40px] w-[300px] h-auto p-2   border-[0.2px]
                   lg:mt-[55px]  flex flex-col gap-[10px] font-[400]
                    ${isDarkMode ? "bg-black text-white  border-white" 
                    : "bg-white text-black border-gray-300"}`}>
                <Calender />
                   <div onClick={()=> {
                        setCalender(false);
                        setStateDateEdit(dateEdit?.slice(0,10))
                         setSelectedStatus("Filter by Status")
                       }}
                     className="flex justify-center 
                     items-center w-[270px]">
                       <button 
                       className={`w-full bg-blue-900 py-[15px] text-[12px] md:text-[14px] font-[500] 
                         rounded-[15px]
                         ${isDarkMode ? "text-white bg-black border-[0.2px] border-white" :
                          "text-white bg-blue-900"}`}>
                       Done
                       </button>
                       </div>
              </div>
            )}
              </div>

              {/* filter by Status */}
              <div
                onClick={() => {
                  setCalender(false);
                  if (isOpen1 === false) {
                    setIsOpen1(true);
                  } else {
                    setIsOpen1(false);
                  }
                }}
                className={`flex flex-col cursor-pointer rounded-[12px]
                 ${ isDarkMode ? "border-[0.5px] border-white " : ""}
                  h-[100%] w-[100%] lg:w-[50%] ${styles.filter}`}>
                <div class="h-[100%] w-[100%] justify-center items-center lg:gap-[5px] gap-[2.86px] flex">
                  <img
                    className="w-[11.37px] h-[11.37px]  md:w-[20px] md:h-[19px]
                       lg:w-[19.85px] lg:h-[19.85px]"
                    src={menusales}
                    alt=""
                  />

                  <p
                    className={`${isDarkMode ? "text-white" :"text-[#04177f]"} text-[11px] 
                leading-[14px] font-[500] 
                  lg:text-[16px]`}
                  >
                    {selectedStatus}
                  </p>

                  <div
                    class="w-[11.37px] h-[11.37px] md:w-[17px] 
                  md:h-[17px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex"
                  >
                    {isOpen1 ? (
                      <img
                        src={arrow44}
                        className="h-[100%] w-[100%]"
                        alt="Arrow44"
                      />
                    ) : (
                      <img
                        classname="h-[100%] w-[100%]"
                        src={arrow11}
                        alt="arrow11"
                      />
                    )}
                  </div>
                </div>

                {/*filter by product dropdown */}
                {isOpen1 && (
                  <ul
                    className={`dropdown-options z-[2] absolute left-0 md:left-auto top-[100%]
                   w-full md:w-[50%] lg:w-[30%] bg-white cursor-pointer`}
                  >
                    {product?.map((option, index) => (
                      <li
                        className={`pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                        lg:text-[16px] lg:leading-[20.8px] cursor-pointer  dropdownCSS ${
                          isDarkMode
                            ? "bg-black text-white border border-white"
                            : "hover:bg-[#EDEAEA] border-[#9C9C9C]  bg-white text-[#7C7C7C] "
                        }`}
                        key={index}
                        onClick={() => {
                          setSelectedStatus(option);
                          setIsOpen1(false);
                          setStateDateEdit("Filter By Date")
                          setCalender(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          
          </div>

          <div className="">
            {/* ==============================Sale Analysis Indicator====================== */}

            {/* The flow start here */}
            <div>
              <div
                className={` flex w-full gap-[5px] h-[70px]
                   lg:h-[100px] md:items-center 
                    lg:mt-[5%] items-center my-[30px]`}
              >
                <select
                  name="curr"
                  id="curr"
                  // onChange={handleSelectedOption}
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
                  className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center gap-[3px] ${
                    isDarkMode ? "border " : " bg-[#D5F6E3]"
                  }   ${toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"}`}
                >
                  <div className="flex gap-1  justify-center items-center  ">
                    <p
                      className={` text-[11px] text-center leading-[14px] font-medium 
                        lg:text-[18px] lg:leading-[24px]
                          ${toggleSideBar ? "lg:text-[18px]" : ""}`}
                    >
                      Total Inflows
                    </p>
                    <img
                      className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/newarrow-down.png"
                      alt="dropdown"
                    />
                  </div>
                  <p
                    className="text-center text-[10px] leading-[13px] font-medium 
                        lg:text-[18px] lg:leading-[24px]"
                  >
                    {selected === "NGN"
                      ? walletTransactionResponse?.data?.data?.data
                        ? walletTransactionResponse?.data?.data?.data?.data?.total_inflow?.toLocaleString(
                            "en-NG",
                            {
                              style: "currency",
                              currency: "NGN",
                            }
                          )
                        : "₦"
                      : `${symbolValue}`}
                  </p>
                </div>

                <div
                  className={`w-[33.3%] rounded-[3px] lg:rounded-[5px]  flex flex-col h-full justify-center items-center
                         gap-[3px] ${
                           isDarkMode ? "border " : " bg-[#92abfe81]"
                         }  text-[7px] md:text-[12px]`}
                >
                  <div className="flex gap-1 justify-center items-center ">
                    <p
                      className={`  text-[11px] text-center leading-[14px] font-medium 
                        lg:text-[18px] lg:leading-[24px] ${
                          toggleSideBar ? "lg:text-[18px]" : ""
                        }`}
                    >
                      Total Transactions{" "}
                    </p>
                    <img
                      className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/newarrow-down.png"
                      alt="dropdown"
                    />
                  </div>
                  <p
                    className="text-center  text-[10px] leading-[13px] font-medium 
                        lg:text-[18px] lg:leading-[24px]"
                  >
                    {selected === "NGN"
                      ? walletTransactionResponse?.data?.data?.data
                          ?.total_count ||
                        walletTransactionResponse?.data?.status === 200
                        ? walletTransactionResponse?.data?.data?.data?.total
                        : ""
                      : 0}{" "}
                  </p>
                </div>

                <div
                  className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center
                         gap-[3px] ${
                           isDarkMode ? "border " : " bg-[#FDCECE]"
                         } text-[7px] md:text-[12px]`}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <p
                      className={`text-[11px] text-center leading-[14px] font-medium 
                        lg:text-[18px] lg:leading-[24px] ${
                          toggleSideBar ? "lg:text-[18px]" : ""
                        }`}
                    >
                      Total Outflows
                    </p>
                    <img
                      className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/newarrow-up.png"
                      alt="dropdown"
                    />
                  </div>
                  <p
                    className="text-center  text-[10px] leading-[13px] font-medium 
                        lg:text-[18px] lg:leading-[24px]"
                  >
                    {selected === "NGN"
                      ? walletTransactionResponse?.data?.data?.data
                        ? walletTransactionResponse?.data?.data?.data?.data?.total_outflow?.toLocaleString(
                            "en-NG",
                            {
                              style: "currency",
                              currency: "NGN",
                            }
                          )
                        : "₦"
                      : `${symbolValue}0.00`}
                  </p>
                </div>
              </div>
            </div>
            {/* The flow ends here */}

            <div className="flex items-center text-neutral-500 gap-[10px]">
              <p className={styles.InOutText}>Wallet Analysis</p>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
          </div>

          {/* product, quantity and total amount */}
          <div>
            <div
              className={`h-full md:hidden flex flex-col mt-9  w-full  border-x-[1.2px]
        my-[50px]  border-b-[1.2px] px-[20px] border-opacity-[25%] shadow-md
      ${isDarkMode ? "border-white" : "border-gray-500 "}`}
            >
              {loading === true ? (
                <div className="h-[150px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : filteredWalletTransactions &&
                filteredWalletTransactions?.length > 0 ? (
                filteredWalletTransactions?.map((transaction, index) => (
                  <div
                    className={`cursor-pointer ${
                      index < filteredWalletTransactions?.length - 1
                        ? "border-b-[1px] border-gray-500"
                        : ""
                    }`}
                    key={index}
                  >
                    <div
                      onClick={async () => {
                        const response = await getTransactionByOrderId(
                          transaction?.order_id,
                          transaction?.product
                        );

                        const orderData = response?.data?.data?.data;
                        if (response?.data?.status === 200) {
                          navigate(
                            transaction?.product === "Electricity Bills"
                              ? "/ElectricityReceipt"
                              : transaction?.product === "Education Pins"
                              ? "/EduReceipt"
                              : transaction?.product === "TV Subscription"
                              ? "/TvSubReceipt"
                              : transaction?.product === "Airtime Top-up"
                              ? "/AirtimeTransReceipt"
                              : transaction?.product === "Data Top-up"
                              ? "/DataTransReceipt"
                              : transaction?.product === "Money Transfer"
                              ? "/TransferReceipt"
                              : transaction?.product === "Virtual Account"
                              ? "/VirtualAccountReceipt"
                              : "/SuccessfullReceipt",
                            { state: { orderData, transaction } }
                          );
                        }
                      }}
                    >
                      <div
                        key={index}
                        className="flex justify-between py-[20px]"
                      >
                        <div className="flex flex-col gap-[7.648px]">
                          <h2
                            className={`font-medium  text-[9.167px] leading-[11.167px]
                             ${isDarkMode ? "text-white" : "text-neutral-500"}`}
                          >
                            Order No : {transaction?.order_id}
                          </h2>
                          <h2
                            className={`font-medium text-black text-[9.167px] leading-[11.167px] ${
                              isDarkMode ? "text-white" : "text-neutral-500"
                            }`}
                          >
                            Product : {transaction?.product}
                          </h2>
                          <p
                            className={`font-medium text-neutral-500 capitalize text-[9.167px] 
                                        leading-[11.167px] ${
                                          isDarkMode
                                            ? "text-white"
                                            : "text-neutral-500"
                                        }`}
                          >
                            Description : {transaction?.description}
                          </p>

                          <p
                            className={`font-medium text-neutral-500  
                                        text-[9.167px] leading-[11.167px] ${
                                          isDarkMode
                                            ? "text-white"
                                            : "text-neutral-500"
                                        }`}
                          >
                            Amount :{" "}
                            {transaction?.amount
                              ? transaction.amount?.toLocaleString("en-NG", {
                                  style: "currency",
                                  currency: "NGN",
                                })
                              : ""}
                          </p>

                          <div className="hidden">
                            <p
                              className={`font-medium text-neutral-500 text-[9.167px] leading-[11.167px]
                               ${
                                 isDarkMode ? "text-white" : "text-neutral-500"
                               }`}
                            >
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
                            <p
                              className={`font-medium 
                                         text-[9.167px] leading-[11.167px] cursor-pointer ${
                                           isDarkMode
                                             ? "text-white"
                                             : "text-neutral-500"
                                         }`}
                            >
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
                              {[
                                "delivered",
                                "success",
                                "Successful",
                                "",
                              ].includes(transaction?.status)
                                ? "Successful"
                                : transaction?.status === "failed"
                                ? "Failed"
                                : transaction?.status === "pending"
                                ? "Pending"
                                : transaction?.status === "refunded"
                                ? "Refunded"
                                : transaction?.status === "cancelled"
                                ? "Cancelled"
                                : "Unknown"}
                            </p>
                          </div>

                          <div className="flex flex-row">
                            <div>
                              <p
                                className={`font-medium text-[10px] leading-[13px] ${
                                  isDarkMode ? "text-white" : "text-neutral-500"
                                }`}
                              >
                                <span className="block">Date & Time:</span>
                                <span className="block">
                                  {" "}
                                   {FormatDate(transaction?.created_at)}{" "}
                                </span>
                                <span className="block">
                                   {FormatTime(transaction?.created_at)}{" "}
                                </span>
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
                    </div>
                  </div>
                ))
              ) :filteredWalletTransactions?.length < 1 ||
               walletTransactionResponse?.data?.data?.data?.data?.transactions?.length < 1
               || walletTransactionResponse?.data?.data?.data?.data?.transaction === null  
                ? 
                (<img
                  className="lg:w-[517px] lg:h-[456px] w-[100%] h-[100%]"
                  src={NoRecordImage}
                  alt="No record found"
                />
                ): transactionHistoryError === "Network error" ? (
                <p
                  className={`text-[20px] text-black font-medium 
                     ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  An internet connection error has occured, kindly check your
                  internet connection.
                </p>
              ) : transactionHistoryError === "Server error" ? (
                <p
                  className={`text-[20px] text-black font-medium 
                   ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Our server is currently facing a downtime, you would receive
                  your transactions shortly.
                </p>
              ) : transactionHistoryError === "unauthorised" &&
                walletTransactionResponse?.data?.data?.data?.data?.transactions ===
                  undefined ? (
                 <p className={`text-[20px] text-black font-medium`}>
                Hold on we are trying to process your request.  
                </p>
                 ) : (
                loading === false &&
                transactionHistoryError === null && (
                  <p
                    className={`text-[20px] text-black font-medium
             ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    An Error has occured try again later.
                  </p>
                )
              )}
            </div>
          </div>

          {/* Larger screen view */}
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
                <Loader />
              </div>
            ) : filteredWalletTransactions &&
              filteredWalletTransactions?.length > 0 ? (
              filteredWalletTransactions?.map((transaction, index) => (
                <div key={index}>
                  <div
                    onClick={async () => {
                      const response = await getTransactionByOrderId(
                        transaction?.order_id,
                        transaction?.product
                      );

                      const orderData = response?.data?.data?.data;

                    if (response?.data?.status === 200) {  navigate(
                        transaction?.product === "Electricity Bills"
                          ? "/ElectricityReceipt"
                          : transaction?.product === "Education Pins"
                          ? "/EduReceipt"
                          : transaction?.product === "TV Subscription"
                          ? "/TvSubReceipt"
                          : transaction?.product === "Airtime Top-up"
                          ? "/AirtimeTransReceipt"
                          : transaction?.product === "Data Top-up"
                          ? "/DataTransReceipt"
                          : transaction?.product === "Money Transfer"
                          ? "/TransferReceipt"
                          : transaction?.product === "Virtual Account"
                          ? "/VirtualAccountReceipt"
                          : "/SuccessfullReceipt",
                        { state: { orderData, transaction } }
                      );
                    }}}
                  >
                    <div
                      className={`${
                        toggleSideBar
                          ? "lg:text-[15px] md:gap-[%] md:text-[8.5px] "
                          : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:md:gap-[%]"
                      }  hidden font-semibold md:flex md:h-[60px] lg:h-[85px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px] cursor-pointer`}
                    >
                      <div
                        className={`md:text-[#7C7C7C]  ${
                          toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                        }`}
                      >
                        {transaction?.product}
                      </div>
                      <div
                        className={`capitalize md:text-[#7C7C7C] ${
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
                        {transaction?.amount
                          ? transaction?.amount?.toLocaleString("en-NG", {
                              style: "currency",
                              currency: "NGN",
                            })
                          : ""}
                      </div>

                      <div
                        className={`md:text-[#7C7C7C]  ${
                          toggleSideBar ? "md:w-[16.5%] " : "md:w-[16.5%]"
                        }`}
                      >
                        <span> {FormatDate(transaction?.created_at)}{" "}</span>
                        <br />
                        <span> {FormatTime(transaction?.created_at)}{" "}</span>
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
                              transaction?.status
                            ),
                          }}
                          className={`${
                            toggleSideBar ? "md:w-[100%]" : "md:w-[100%]"
                          } md:px-[10px] md:py-[5px] md:text-[#FFFFFF] md:rounded-[5px]`}
                        >
                          {" "}
                          {["delivered", "success", "Successful", ""].includes(
                            transaction?.status
                          )
                            ? "Successful"
                            : transaction?.status === "failed"
                            ? "Failed"
                            : transaction?.status === "pending"
                            ? "Pending"
                            : transaction?.status === "refunded"
                            ? "Refunded"
                            : transaction?.status === "cancelled"
                            ? "Cancelled"
                            : "Unknown"}
                        </div>
                        <img
                          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                          src="./Images/dashboardImages/arrowright.png"
                          alt="/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
               ) : filteredWalletTransactions?.length < 1 ||
               walletTransactionResponse?.data?.data?.data?.data?.transactions?.length < 1
               || walletTransactionResponse?.data?.data?.data?.data?.transaction === null ? (
              <img
                className="lg:w-full lg:h-[456px] flex self-center"
                src={NoRecordImage}
                alt="No record found"
              />
            ) : transactionHistoryError === "Network error" ? (
              <p className={`text-[20px] text-black font-medium`}>
                An internet connection error has occured, kindly check your
                internet connection.
              </p>
            ) : transactionHistoryError === "Server error" ? (
              <p className={`text-[20px] text-black font-medium`}>
                Our server is currently facing a downtime, you would receive
                your transactions shortly.
              </p>
            ) : transactionHistoryError === "unauthorised" &&
              walletTransactionResponse?.data?.data?.data?.data?.transactions ===
                undefined ? (
            <p className={`text-[20px] text-black font-medium`}>
                Hold on we are trying to process your request.  
                </p>
            ) : (
            loading === false &&
              transactionHistoryError === null && (
                <p className={`text-[20px] text-black font-medium`}>
                  An Error has occured try again later.
                </p>
              )
            )}
          </div>

          {/*main contact us */}
          <div className=" ">
            <footer className="flex justify-center text-center gap-[20px] mt-[370px] mb-[20px] md:mt-[580px] lg:mb-[30px] z-index-2 onset-[500px] lg:mt-[760px]">
              <p className="text-[8px] md:text-[12px] lg:text-[12px] font-medium leading-[9.1px] mt-[5px] lg:mt-[13px]">
                You need help?
              </p>

              <Link to="/ContactUs">
                <div
                  className={`${
                    isDarkMode ? "border " : "bg-[#04177f]"
                  } text-[8px] p-1 text-white rounded-[7px] w-[70px] lg:w-[100px] lg:text-[12px]`}
                >
                  Contact Us
                </div>
              </Link>
            </footer>
          </div>
          {orderLoading && (
            <Modal>
              <Loader />
            </Modal>
          )}
          {sessionModal && <InternalLoginSession setExpiredSessionLogin = {setSessionModal} />}
        </div>
      </>
    </DashBoardLayout>
  );
}
