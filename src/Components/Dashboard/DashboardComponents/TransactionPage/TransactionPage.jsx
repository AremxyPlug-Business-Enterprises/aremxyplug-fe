import { useState} from "react";
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
import {
  GetFunction,
} from "../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../Loader/Loader";
import NoRecordImage from "../../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../Screens/Modal/Modal";
import { GetLocalStorage } from "../../../LocalStorage/LocalStorage";
import cancelIcon from "../../../EducationPins/imagesEducation/close-circle.svg"

const TransactionPage = () => {
  const Data = GetLocalStorage();
  const navigate = useNavigate();
  const {
    isDarkMode,
    toggleSideBar,
    setOrderIdResponse,
    setElectricityTransErrorType,
    startDateValueState,
    endDateValueState,
    setStartDateValueState,
    setEndDateValueState,
    setEditCalenderOne,
    setEditCalenderTwo,
    setCurrentDateInTimeStamps,
    editCalenderOne,editCalenderTwo, setCountCalender,
    setNetworkIssue,
    networkIssue,
   
  } = useContext(ContextProvider);

  const [showCategories, setShowCategories] = useState(false);
const [stateDateEdit, setStateDateEdit] = useState("Filter By Date")
 const [showStatus, setShowStatus] = useState(false);
const [calender, setCalender] = useState(false);

const [isActive, setIsActive] = useState(false);
 const [selected, setSelected] = useState("NGN");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [cardIssuingCategoryDisplay, setCardIssuingCategoryDisplay] = useState(false);
  const [paymentCategoryDisplay, setPaymentCategoryDisplay] = useState(false);
 const [telecomCategoryDisplay, setTelecomCategoryDisplay] = useState(false);
   const [allCategoryDisplay, setAllCategoryDisplay] = useState(false);
   const [allCategoryValue, setAllCategoryValue] = useState("");
    const [paymentCategoryValue, setPaymentCategoryValue] = useState("")
     const [telecomCategoryValue, setTelecomCategoryValue] = useState("")
      const cardIssuingCategoryValue = ""
  const [activeTab, setActiveTab] = useState("");
  const { transactionResponse, setTransactionResponse } =
    useContext(ContextProvider);
  const [loading, setLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  const [transactionHistoryError, setTransactionHistoryError] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };


  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setIsActive(!isActive);
  };

  

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    return;
  };

  //Funcntio to help get the transaction details
  //  which include necessary query parameters for search
  const GetTransactionInformation = async (value) => {
    if (!navigator.onLine){
       setTransactionHistoryError("Network error");
       setNetworkIssue(true)
    }
   
    const pathQueryFunction = ()=> {
    const telecomDataForRequest
     = telecomCategoryValue === "Data Top-up" ? "data" :
     telecomCategoryValue === "Airtime Top-up" ? "airtime" :
     telecomCategoryValue === "Education Pins" ? "edu" 
     : telecomCategoryValue === "Electricity Bills" ? "elect" : telecomCategoryValue === "Tv Subscriptions" 
     ? "tv-sub" : "";
const paymentDataForRequest
     = paymentCategoryValue === "Virtual Accounts" ? "virtual accounts" :
    
   paymentCategoryValue === "Wallet Transfer" ? "wallet transfer" 
     : paymentCategoryValue === "Points Redeem" ? "points" : "";

      const categoryDetermination = telecomCategoryValue?.length > 1?
      "telecom" : paymentCategoryValue?.length > 1 ? "payment" : undefined
       const valueCategoryDetermination
        = categoryDetermination === "telecom"
        ? telecomDataForRequest : categoryDetermination === "payment"
        ?  paymentDataForRequest : undefined;

      const allCategoryRequest = `?flow=${allCategoryValue === "Inflows"
         ? "inflow" : allCategoryValue === "Outflows" ? "outflow" : ""}`;
   
   const CategoryQuery =
    (allCategoryValue?.length < 1 || allCategoryValue === undefined)
     && (categoryDetermination !== undefined && categoryDetermination?.length > 1)
? `?category=${categoryDetermination}&subcategory=${valueCategoryDetermination}`
//Query if the inflow/outflow/transactions are given included with the category and subcategory 
: (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (categoryDetermination !== undefined && categoryDetermination?.length > 1)
     ? `${allCategoryRequest}?category=${categoryDetermination}?subcategory=${valueCategoryDetermination}` 
: `&category=${categoryDetermination}&subcategory=${valueCategoryDetermination}`;
    
//Full or No Full Date Query
       const startDateQuery =
    (allCategoryValue?.length < 1 || allCategoryValue === undefined)
     && (telecomCategoryValue?.length < 1 || telecomCategoryValue === undefined)
     &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined)
      &&startDateValueState?.length > 1
      && (endDateValueState?.length < 1 || endDateValueState === null) 
      ? `?start_date=${startDateValueState}` 
      //When the inflow/Outflow/trabsactions is provided and the startDatevalueState are provided
      : (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length < 1 || telecomCategoryValue === undefined)
     &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined)
      && startDateValueState?.length > 1
       &&  (endDateValueState?.length < 1 || endDateValueState === null)  ? 
       `${allCategoryRequest}&start_date=${startDateValueState}` 
       //When the inflow/Outflow/transaction are provided with telecom query with end query not provided
       : (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length > 1 || telecomCategoryValue !== undefined)
     &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined) 
     && startDateValueState?.length > 1  
     && (endDateValueState?.length < 1 || endDateValueState === null) 
     ? `${allCategoryRequest}?category=${categoryDetermination}&start_date=${startDateValueState}`
     //When the inflow/Outflow/Transaction are provided alongst with category, telecom and subcategory && startDate
      : (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length > 1 || telecomCategoryValue !== undefined)
     &&  (valueCategoryDetermination?.length >1 || valueCategoryDetermination !== undefined) 
     &&startDateValueState?.length > 1
     &&  (endDateValueState?.length < 1 || endDateValueState === null) 
       ? `${allCategoryRequest}?category=${categoryDetermination}&subcategory=${valueCategoryDetermination}&start_date=${startDateValueState}` : undefined
      
 const endDateQuery = (allCategoryValue?.length < 1 || allCategoryValue === undefined)
     && (telecomCategoryValue?.length < 1 || telecomCategoryValue === undefined)
      &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined) && startDateValueState?.length 
     ? `?start_date=${startDateValueState}&end_date=${endDateValueState}`  :    (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length < 1 || telecomCategoryValue === undefined)
     &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined)
      && startDateValueState?.length > 1
       && endDateValueState?.length > 1 ? 
       `${allCategoryRequest}&start_date=${startDateValueState}&end_date=${endDateValueState}` 
       //When the inflow/Outflow/transaction are provided with telecom query with end query  provided
       : (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length > 1 || telecomCategoryValue !== undefined)
     &&  (valueCategoryDetermination?.length < 1 || valueCategoryDetermination === undefined) 
     &&startDateValueState?.length > 1
     && endDateValueState?.length > 1
     ? `${allCategoryRequest}?category=${categoryDetermination}&start_date=${startDateValueState}&end_date=${endDateValueState}`
        //When the inflow/Outflow/Transaction are provided alongst with category, telecom and subcategory && startDate
     :  (allCategoryValue?.length > 1 || allCategoryValue !== undefined)
     && (telecomCategoryValue?.length > 1 || telecomCategoryValue !== undefined)
     &&  (valueCategoryDetermination?.length > 1 || valueCategoryDetermination !== undefined) 
     &&startDateValueState?.length > 1
     ? `?category=${categoryDetermination}&subcategory=${valueCategoryDetermination}&start_date=${startDateValueState}&end_date=${endDateValueState}` : undefined
    
const fullQuery = `?flow=${allCategoryValue}&category=${categoryDetermination}&subcategory=${valueCategoryDetermination}?start_date=${startDateValueState}&end_date=${endDateValueState}`


      if(allCategoryValue?.length > 1 && allCategoryValue !== "Transactions" 
        && (categoryDetermination === undefined || !categoryDetermination )
      && (valueCategoryDetermination === undefined || !valueCategoryDetermination)
      && ((startDateValueState?.length < 1 || startDateValueState === null))
     ){
      return allCategoryRequest
      } else if( categoryDetermination?.length > 1  && (startDateValueState?.length < 1 || startDateValueState === null) ){
          return CategoryQuery
        }else if((startDateQuery
           && (startDateValueState?.length > 1
             && startDateValueState !== null && 
             startDateValueState !== undefined)) || value?.length > 1 ){
          if(startDateValueState?.length > 1 && value === undefined){
             return startDateQuery
        }else if(value?.length > 1){
       return `?start_date=${value}`
          }
        }else if(!startDateQuery && 
          endDateQuery && (endDateValueState?.length > 1 && endDateValueState!== null && endDateValueState!== undefined)){
          return endDateQuery;
        }else if(allCategoryValue?.length > 1
        && categoryDetermination?.length > 1 && startDateValueState?.length > 1 && endDateValueState?.length > 1 ){
     return  fullQuery
      }else{
        return  "";
      }
      
    }
     const path =`transactions${pathQueryFunction()}`
    
 
    const FailedHandler = async (ErrorType) => {
      if (ErrorType === "unauthorised") {
        setSessionModal(true)
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
    if(Data?.ConfirmAcc === "true"){
    await GetFunction(
      path,
      setLoading,
      ()=> {},
      FailedHandler,
      setTransactionResponse,
      setNetworkIssue
    );
  }
  };

  const handleFilterButtonClick = async() => {
    setSelectedCategory(allCategoryValue + "-" 
      + telecomCategoryValue + "-"
       + paymentCategoryValue + ""
        + cardIssuingCategoryValue);
    setShowCategories(false);
 await  GetTransactionInformation()
  };



   const dateOptional = new  Date();
    const isoString = typeof dateOptional === "object" ? dateOptional?.toLocaleString("sv-SE", {
      timeZone :  "Africa/Lagos",
      hour12 : false
      }) : "";
    const slicedDate = isoString?.slice(0,10);
  //handle Calender state

  // No filtering carried out.....
   const handleCalenderState = async()=> {
   setStartDateValueState("");
  setEndDateValueState("");
  setCurrentDateInTimeStamps(0);
  setCountCalender(0);
  setCalender(false);
  setEditCalenderOne("Start Date");
  setEditCalenderTwo("End Date");
  setStateDateEdit("Filter By Date");
await GetTransactionInformation()
 } 
 
 //Resetting the fields



 const ResetDateFilterFields = ()=>{
  setStartDateValueState("");
    setEndDateValueState("");
    setEditCalenderOne("Start Date");
    setEditCalenderTwo("End Date");
    setCurrentDateInTimeStamps(0);
    setCountCalender(0);
 }
 
  useEffect(() => {
    //  slideForMoreInfo()
    ResetDateFilterFields()
    setSelectedStatus("All Transactions")
    if(Data?.ConfirmAcc === "true"){
    if (transactionResponse?.data?.data?.data === undefined) {
      GetTransactionInformation();
    }
  }else{
     setTransactionResponse(null)
  }
    setSelected("NGN");

    //eslint-disable-next-line
  }, []);

  if(Data?.ConfirmAcc ==="true"){
  window.addEventListener("online", () => {
    if (transactionHistoryError === "Network error" && loading === false) {
      GetTransactionInformation();
    }
  });
}

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

  const [selectedStatus, setSelectedStatus] = useState("");
   const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    setShowStatus(false);
    window.scrollTo({top : window.innerWidth < 1024 ? 500 : 700, behavior : "smooth"})
  };
const totalLength = transactionResponse?.data?.data?.data?.total_count;
const totalValue = transactionResponse?.data?.data?.data?.total_value;
const transactionStatusMetrics = transactionResponse?.data?.data?.data?.status_metrics;
const successStatusMetricsPercentage = (transactionStatusMetrics?.success?.volume / totalLength) * 100;
const failedStatusMetricsPercentage = (transactionStatusMetrics?.failed?.volume / totalLength) * 100;
const  refundedStatusMetricsPercentage = (transactionStatusMetrics?.refunded?.volume / totalLength) * 100
const  pendingStatusMetricsPercentage = (transactionStatusMetrics?.pending?.volume / totalLength) * 100;

const pictorialStatus = [
        { status : "All Transactions",
           percentage : totalLength > 0 ? 100 : 0, 
           volume : totalLength,
           value: totalValue === undefined || totalValue === 0 ? 0 : totalValue
           , color : "bg-[#D5F6E3]"},
         { status : "success",
           percentage : Math.round(successStatusMetricsPercentage) ,
             volume : transactionStatusMetrics?.success?.volume,
              value : transactionStatusMetrics?.success?.value, 
              color : "bg-[#97E8B9]"},
          { status : "failed", 
            percentage : Math.round(failedStatusMetricsPercentage), 
            volume : transactionStatusMetrics?.failed?.volume,
             value :  transactionStatusMetrics?.failed?.value, 
             color : "bg-[#FB9393]"},
{ status : "pending", 
            percentage : Math.round(pendingStatusMetricsPercentage), 
            volume : transactionStatusMetrics?.pending?.volume,
             value :  transactionStatusMetrics?.pending?.value, 
             color : "bg-[#FFD98F]"},
           { status : "refunded",
             percentage : Math.round(refundedStatusMetricsPercentage), 
             volume : transactionStatusMetrics?.refunded?.volume,
               value : transactionStatusMetrics?.refunded?.value,
                color : "bg-[#92ABFE]" },
      ]
  const chooseStatus = [
    "All Transactions", 
    "Successful",
    "Failed",
    "Pending",
    "Refunded",
  ];



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
        : product === "Internal Deposit" || product === "Virtual Account" 
        || product === "System Top-Up" || product === "System Debit"
        ? "deposit"
        : product === "Internal Transfer"
        ? "transfer" : product === "Point Redeem"
        ? "point"
        : "";

    const path = `transactions/${orderId}?product=${productType}`;
    let result;
    const SuccessHandler = (response) => {
      result = response;
    };
    const FailedHandler = async (ErrorType) => {
       if (!navigator.onLine) {
        if(networkIssue) return;
        if(!networkIssue) return setNetworkIssue(true)
       }
      if (ErrorType === "unauthorised") {
         if(sessionModal ) return;
            if(!sessionModal) return setSessionModal(true)
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        setElectricityTransErrorType("An internet connection error");
      }else if(ErrorType === "Server error"){
          setElectricityTransErrorType("An Server error");
      }
    };

    await GetFunction(
      path,
      setOrderLoading,
      SuccessHandler,
      FailedHandler,
      setOrderIdResponse,
      setNetworkIssue
    );
    return result;
  };

    


  //The formatting of the dates and times.
   function formatDate(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
return date?.toISOString()?.slice(0, 10);
   }

   function formatTime(isoString) {
  if (!isoString) return "";
    const date = new Date(isoString);
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return timePart;
}

const FilterByDateFunc = async()=> {
   setCalender(false);
    setStateDateEdit(()=> {
    if(editCalenderOne !== "Start Date" && editCalenderTwo === "End Date" ){
     return <p>{startDateValueState}</p>
    }else if(editCalenderOne !== "Start Date" && editCalenderTwo !== "End Date" ){
   return <div className="flex flex-col gap-[5px]">
    <p className  ="lg:text-[12px] lg:leading-[16px] text-[#04177f] text-[8px] leading-[12px]">
      {startDateValueState}
      </p>
    <p  className  ="lg:text-[12px] text-[#04177f] lg:leading-[16px] text-[8px] leading-[12px]">
      {endDateValueState}</p>
   </div>
    }else if(editCalenderOne === "Start Date" && editCalenderTwo === "End Date" ){
       return <p>{slicedDate}</p>
    }
  })
  if(startDateValueState?.length && startDateValueState?.length > 1){
     await GetTransactionInformation();
  }else{
   await GetTransactionInformation(slicedDate);
  }
}


  
  
  const filteredTransactions =
    transactionResponse?.data?.data?.data?.transactions !== null && transactionResponse?.data?.data?.data?.transactions!== undefined
      ? transactionResponse?.data?.data?.data?.transactions.filter(
          (transaction) => {
         const handleStatus =  selectedStatus === "Successful" ? 
              "success" : selectedStatus === "Failed" ? "failed" :
               selectedStatus === "Pending" ? "pending" : selectedStatus === "Refunded" ? 
               "refunded" : selectedStatus;
            if (
              selectedStatus === "" ||
              selectedStatus === "All Transactions"
            ) {
              return transaction;
            } else {
              return transaction.status === handleStatus
             
            }
          }
        )
    : [];
      

  


  return (
    <DashBoardLayout>
      <div
        className={`relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between h-full`}
      >
        <section>
          <div
            id="Transaction"
            className="min-h-[90px] w-full  py-[15px] lg:h-[196px] md:h-[112.29px] 
            rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto 
             flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px] mb-[30px] lg:mb-[40px]"
          >
            <div
              className="py-[9.57px] md:py-[16.61px] align-middle self-center
                 flex flex-col gap-1.5 w-[70%] h-full"
            >
              <p
                className="text-[11px] leading-[14px]  lg:leading-[30px]
                   lg:text-[24px] md:text-[13.75px] font-semibold"
              >
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
             <p className="text-[10px] leading-[14px] font-[400]  mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
               Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track. 
              </p> 
            </div>

            <div className="flex w-[23%] max:h-[100px] items-center justify-center
              pt-2 ">
              <img
                src={Transaction}
                alt=""
                className="w-[70.482px] h-full md:w-[98px] md:h-[px]
                 lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[20px] md:flex-row md:justify-between md:w-[90%]">
            <div className="relative  md:w-1/2">
              <h2
                className="text-[#7E7E7E] text-[14px] lg:text-[17px] md:text-[13px] '
                      md:font-[600] font-[400]"
              >
                Select Categories
              </h2>
              <div
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px]
                           font-[400]  
                          leading-[10.4px] md:text-[11px] 
                          md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px]
     md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
     lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] 
    lg:pl-[10px]  items-center cursor-pointer outline-0
     border-[0.24px] lg:border-[0.4px] w-full h-[40.927px]
      md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px]
       md:px-[6px] lg:px-[10px] text-[#7C7C7C] 
       self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                onClick={() => {
                  setShowCategories(!showCategories);
                  setShowStatus(false);
                  setCalender(false);
                }}
              >
                <h2 className="text-[10px] font-[600] 
                leading-[12px] capitalize md:text-[9.17px] 
                md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedCategory}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[20px] h-[20px]">
                  {selectedCategory?.length < 1 ? (
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                  ) : (
                    <img className="h-full w-full" onClick = {()=> {
                      setSelectedCategory("");
                      setAllCategoryValue("");
                      setTelecomCategoryValue("");
                      setPaymentCategoryValue("");
                    
                     
                    }}
                     src = {cancelIcon} alt = ""/>
                  )}
                </button>
               </div>


<div className="relative w-full mt-[10px]">
              {showCategories && (
                  <div
                className={`border md:rounded-[10px] text-[10px]
                 md:text-[12px] absolute lg:text-[16px] lg:mt-2
                  rounded-[4px] right-0 w-full
                   md:w-full ${isDarkMode ? "bg-black border border-white" : "bg-white border"} 
                     bg-[#FFF] z-[10]`}>
         <div  onClick={()=> {
                    if(allCategoryDisplay === false){
                    setAllCategoryDisplay(true);
                    }else {
                      setAllCategoryDisplay(false)
                    }
                    setTelecomCategoryDisplay(false);
                    setCardIssuingCategoryDisplay(false);
                    setPaymentCategoryDisplay(false)
                }}
          className="flex  cursor-pointer
   justify-between w-full items-center px-[5px] py-[12px]">
                  <p 
                  className={` text-[12px] font-[500] leading-[18px]
                   lg:text-[15px] lg:leading-[20px] 
                   ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                    All : {allCategoryValue}
                  </p>
                     <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
    </div>
    
                  <hr />

                  <div className="relative">
         {allCategoryDisplay  && (
                            <div className="flex justify-center gap-[25px] py-[10px]">
                    <p
                      onClick={() =>{
                         handleTabClick("Inflows")
                         setAllCategoryValue("Inflows")
                      }}
                      className={`rounded-[2px] text-[10px] lg:text-[15px]
                         px-[5px] cursor-pointer font-semibold 
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
                      onClick={() => {
                        handleTabClick("Transactions")
                        setAllCategoryValue("Transactions")
                      }}
                      className={`rounded-[2px] text-[10px]  cursor-pointerlg:text-[15px] px-[5px]
                         font-semibold  cursor-pointer
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
                      onClick={() => {
                        handleTabClick("Outflows")
                        setAllCategoryValue("Outflows")
                      }}
                      className={`rounded-[2px] text-[10px] lg:text-[15px]
                         px-[5px] font-semibold  cursor-pointer
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
         )}
         </div>
                  <hr />

                  {/* <div className="flex justify-start py-[10px] pl-[5px] gap-[5px]">
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
               <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>

                  </div> */}

               
    <div className= "relative">

      <div  onClick={()=> {
                    if(telecomCategoryDisplay === false){
                    setTelecomCategoryDisplay(true);
                    }else {
                      setTelecomCategoryDisplay(false)
                    }
                    setPaymentCategoryValue("")
                    setAllCategoryDisplay(false);
                    setCardIssuingCategoryDisplay(false);
                    setPaymentCategoryDisplay(false)
               
                }}
    className="flex justify cursor-pointer
   justify-between w-full items-center px-[5px] py-[12px]">
                  <p 
                    className={`text-[12px] font-[500] leading-[18px]
                   lg:text-[15px] lg:leading-[20px] 
                  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} 
                `}>
                    Telecom : {telecomCategoryValue}
                  </p>
                     <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
    </div>
                  <hr />
               {telecomCategoryDisplay && (
                  <div className="flex flex-col justify-center items-center 
                   gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p onClick={() =>{
                           handleCategoryFilter("Airtime Top-up")
                           setTelecomCategoryValue("Airtime Top-up")
                       }}
                  className={`rounded-[2px] text-[10px] lg:text-[15px]
                   px-[5px] font-semibold cursor-pointer ${
                    activeCategory === "Airtime Top-up"
                     ? "text-[#fff] bg-[#04177F]"
                     : "text-[#7C7C7C] bg-[#F2FAFF]"
                  }`}
                      >
                        Airtime Top-up
                      </p>
                      <p
                        onClick={() => {
                          handleCategoryFilter("Data Top-up")
                          setTelecomCategoryValue("Data Top-up")
                        }}
                        className={`rounded-[2px] text-[10px] cursor-pointer lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Data Top-up"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}>
                        Data Top-up
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p onClick={() =>  { 
                          handleCategoryFilter("Education Pins")
                           setTelecomCategoryValue("Education Pins")
                          }}
                        className={`rounded-[2px] text-[10px] cursor-pointer lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Education Pins"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Education Pins
                      </p>
                      <p
                        onClick={() =>{
                           handleCategoryFilter("Tv Subscription")
                           setTelecomCategoryValue("Tv Subscriptions")
                        }}
                        className={`rounded-[2px] text-[10px] cursor-pointer
                           lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Tv Subscription"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}>
                        Tv Subscription
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                        onClick={() =>{
                          handleCategoryFilter("Electricity Bills")
                          setTelecomCategoryValue("Electricity Bills")
                        }
                        }
                        className={`rounded-[2px] text-[10px]  cursor-pointer lg:text-[15px]
                           px-[5px] font-semibold   ${
                          activeCategory === "Electricity Bills"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Electricity Bills
                      </p>
                      
                      <p  className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}>
                        Airtime Conversion
                      </p>
                 </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                        onClick={() => handleCategoryFilter("Bulk SMS")}
                        className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Bulk SMS
                      </p>
                      <p
                        onClick={() =>
                          handleCategoryFilter("Recharge Card Printing")
                        }
                      className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Recharge Card Printing
                      </p>
                    </div>
                  </div>
      
                      )}
                      </div>
                  <hr />
             <div  onClick={()=> {
                    if(paymentCategoryDisplay === false){
                    setPaymentCategoryDisplay(true);
                    setTelecomCategoryValue("");
                    }else {
                      setPaymentCategoryDisplay(false)
                    }
                    setAllCategoryDisplay(false);
                    setCardIssuingCategoryDisplay(false);
                    setTelecomCategoryDisplay(false)
                }}
             className="flex justify cursor-pointer
   justify-between w-full items-center px-[5px] py-[12px]">
                  <p className={`text-[#7C7C7C] text-[12px] font-[500] leading-[18px]
                   lg:text-[15px] lg:leading-[20px]   ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} 
`}>
                    Payments : {paymentCategoryValue}
                  </p>
   <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" 
                  className="w-full h-full" />
                </button>
              </div>   
       <div className="relative">
         <hr />
      {paymentCategoryDisplay && (
                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p

                        onClick={() =>{
                           handleCategoryFilter("Virtual Accounts");
                           setPaymentCategoryValue("Virtual Accounts")
                        }}
                        className={`rounded-[2px] cursor-pointer  
                          text-[10px] lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Virtual Accounts"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Virtual Accounts
                      </p>
                      <p
                       
                       
                         className={`rounded-[2px] text-[10px]
                           lg:text-[15px]  cursor-not-allowed
                           px-[5px] font-semibold text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Money Transfer
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                      onClick={() =>{
                    handleCategoryFilter("Wallet Transfer")
                    setPaymentCategoryValue("Wallet Transfer")     
                        }}
                        className={`rounded-[2px] text-[10px] cursor-pointer lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Wallet Transfer"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}>
                        Wallet Transfer
                      </p>
                      <p
                       
                        className={`rounded-[2px] text-[10px]
                           lg:text-[15px]  cursor-not-allowed
                           px-[5px] font-semibold text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Card Payments
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                       
                        className={`rounded-[2px] text-[10px] cursor-not-allowed
                           lg:text-[15px] px-[5px] font-semibold
                            text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                        `}
                      >
                        International Transfer
                      </p>
                      <p
                       
                        className={`rounded-[2px] text-[10px] cursor-not-allowed
                           lg:text-[15px] px-[5px] font-semibold 
                           text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                        `}
                      >
                        Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p className={`rounded-[2px] text-[10px]
                           lg:text-[15px] cursor-not-allowed
                           px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Fiat Conversion
                      </p>
                      <p
                       
                        className={`rounded-[2px] text-[10px]  cursor-not-allowed
                          lg:text-[15px] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                          `}
                      >
                        Crypto Conversion
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                        className={`rounded-[2px] text-[10px]
                           lg:text-[15px]  cursor-not-allowed
                          px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Crypto Top-up
                      </p>
                      <p   
                                    
                        onClick={() => { 
                          handleCategoryFilter("Points Redeem")
                          setPaymentCategoryValue("Points Redeem")
                        }}
                        className={`rounded-[2px] text-[10px] cursor-pointer 
                          lg:text-[15px] px-[5px] font-semibold ${
                          activeCategory === "Points Redeem"
                            ? "text-[#fff] bg-[#04177F]"
                            : "text-[#7C7C7C] bg-[#F2FAFF]"
                        }`}
                      >
                        Points Redeem
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                        className={`rounded-[2px] text-[10px] cursor-not-allowed
                           lg:text-[15px] px-[5px] font-semibold
                            text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Bank USSD
                      </p>
                      <p
                        className={`rounded-[2px] text-[10px]  cursor-not-allowed
                          lg:text-[15px] px-[5px] font-semibold
                            text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Request Money
                      </p>
                    </div>

                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                       
                        className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                           px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100`}
                      >
                        Payment Link
                      </p>
                      <p
                        className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Scan QR Code
                      </p>
                    </div>
                  </div>
      )}
      </div>
                
             
  <hr />
  <div  className="flex justify cursor-pointer
   justify-between w-full items-center px-[5px] py-[12px]"  
  onClick={()=> {
                    if(cardIssuingCategoryDisplay === false){
                    setCardIssuingCategoryDisplay(true);
                    }else {
                      setCardIssuingCategoryDisplay(false)
                    }
                    setAllCategoryDisplay(false);
                    setPaymentCategoryDisplay(false);
                    setTelecomCategoryDisplay(false)
                }}>
                  <p className="text-[#7C7C7C]
               text-[12px] font-[500] leading-[18px]
                   lg:text-[15px] lg:leading-[20px] 
                  ">
                    
                    Card Issuing : {cardIssuingCategoryValue}
                  </p>
                   <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={ArrowDown} alt="" className="w-full h-full" />
                </button>
           </div>
                  <hr />
      <div>
        {cardIssuingCategoryDisplay && (
                  <div className="flex flex-col justify-center items-center gap-[5px] pt-[10px] pb-[20px]">
                    <div className="flex justify-center gap-[25px] py-[10px]">
                      <p
                         className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Card Top-up
                      </p>
                      <p
                        
                         className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Card Withdrawal
                      </p>
                    </div>

                    <div className="flex justify-center gap-[5px]">
                      <p
                       
                        className={`rounded-[2px] text-[10px] lg:text-[15px] cursor-not-allowed
                          ] px-[5px] font-semibold  text-[#7C7C7C]
                           text-opacity-50 bg-gray-100
                         `}
                      >
                        Card Transfer
                      </p>
                    </div>
                  </div>
        )}
        </div>
                  <hr />

                  <div className="flex justify-center px-[10px] py-[10px]">
                    <button
                      onClick={()=> {
                        handleFilterButtonClick()

                      }}
                      className="text-[#FFFFFF] bg-[#04177F]
                       rounded-[5px] lg:text-[15px] text-[10px] mt-[20px]
                        w-full md:w-[200px] py-[12px] font-semibold"
                    >
                      Filter
                    </button>
                  </div>
                </div>
              )}
              </div>
            </div>
            

            <div className="relative  md:w-1/2">
              <h2
                className="text-[#7E7E7E] text-[14px] lg:text-[17px]
                       md:text-[13px] 
                      md:font-[600] font-[400]"
              >
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
                  setCalender(false);
                  setStateDateEdit("Filter By Date")
                }}
              >
                <h2
                  className="text-[12px] font-[600]
                 leading-[16px] capitalize md:text-[13.17px]
                  md:leading-[16.92px] lg:text-[16px] lg:leading-[24px]"
                >
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
          }`}
                >
                  {chooseStatus.map((status) => (
                    <p
                      onClick={() => {
                        handleStatusFilter(
                         status
                        );
                      
                      }}
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
         }`}
                    >
                      {status}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div
            className="flex justify-between items-center w-full 
          py-[8px] px-[3px] gap-[5px] h-[50px] border-[1px] lg:border-[1.5px] mt-[30px]
           border-gray-300 lg:border-gray-400 rounded-[5px]  lg:rounded-[15px] lg:h-[70px] "
          >
            <div
             
              className={`relative cursor-pointer ${styles.filter} ${
                isDarkMode ? "border" : ""
              } flex items-center gap-[1px] px-[2px] 
              py-1.5 rounded-[3px] md:px-[8px]`}
            >
              <p
               onClick={() => {
                if(Data?.ConfirmAcc === "true"){
                if(calender === false){
                setCalender(true);
                 setSelectedStatus("");
                }else{
                  setCalender(false)
                   setSelectedStatus("")
                }
              }
              }}
      
                className={` md:text-[9.16px]
                   md:font-semibold text-[8px] font-extrabold lg:text-base
                    lg:font-extrabold ${isDarkMode ? "text-white": "text-[#04177f]"}`}
              >
                {stateDateEdit}{" "}
              </p>
              <img
                className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/dateImg.png"
                alt=""
              />
                {calender && (
              <div className={`absolute rounded-[20px] 
                   md:mt-[40px] w-[300px] md:w-[500px] lg:w-[600px] h-auto p-2   border-[0.2px]
                   lg:mt-[55px]  flex flex-col gap-[10px] font-[400]
                    ${isDarkMode ? "bg-black text-white  border-white" 
                    : "bg-white text-black border-gray-300"}`}>
                {" "}
                <Calender />
                {" "}
                <div
                     className="flex justify-center 
                     items-center w-[270px] md:w-[470px] lg:w-[570px] gap-[10px]">
                       <button  onClick={handleCalenderState}
                       className={`w-[50%] md:w-[150px] bg-blue-white py-[15px] text-[12px] 
                        md:text-[14px] font-[500] 
                         rounded-[15px] border-[0.2px] border-blue-900
             ${isDarkMode ? "text- bg-black  " :
                          " bg-white text-blue-900" }`}>
                       Cancel
                       </button>
                       <button
                        onClick={FilterByDateFunc}
                       className={`w-[50%] md:w-[150px] bg-blue-900 py-[15px] 
                        text-[12px] md:text-[14px] font-[500] 
                         rounded-[15px] text-white
                       `}>
                       Apply
                       </button>
                       </div>
              </div>
            )}
            </div>
            <div
              className={`w-[25%] flex flex-col 
                md:flex-row md:gap-[5px] cursor-pointer
               justify-center items-center
               rounded-[7px] h-full
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" : "bg-[#04177f]"
                  }
                  lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
              onClick={() => {
                navigate("/wallet-summary");
              }}
            >
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
               rounded-[7px] h-full cursor-pointer
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" : "bg-[#04177f]"
                  }
                  lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
              onClick={() => {
                navigate("/sales-summary");
              }}
            >
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
                md:flex-row md:gap-[5px] cursor-not-allowed
               text-white rounded-[7px] h-full
                  md:rounded-[11px] md:py-[8px] ${
                    isDarkMode ? "border" : "bg-[#04177f]"
                  } lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}>
   <p className={`text-white text-center
                  text-[10px] leading-[13px]
                   lg:leading-[24px] lg:text-[12px] font-[500] `}
              >
                {" "}
                Download Stat.
              </p>

              <img
                className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/downloadicon.png"
                alt=""
              />
            </div>
          
          </div>
    <div className={`${transactionStatusMetrics ? "flex flex-col lg:gap-[100px] gap-[120px] "  : ""} `}>
          <div className="w-full">
            <div
              className={` flex flex-col w-full gap-[20px] h-[70px] 
                lg:h-[100px] items-start
              lg:mt-[5%]  my-[30px]`}>
       <select
                name="curr"
                id="curr"
                onChange={handleSelectedOption}
                value={selected}
                className={`${styles.selected} w-[25%] `}
              >
                <option value="NGN">NGN</option>
                <option disabled value="USD">USD</option>
                <option disabled value="GBP">GBP</option>
                <option disabled value="EUR">EUR</option>
                <option disabled value="AUD">AUD</option>
                <option disabled value="KES">KES</option>
              </select>



<div className="flex w-[100%] md:w-[100%] transaction-metrics
 gap-[10px] items-center md:gap-[10px] py-[80px] 
h-[100px]  rounded-[12px] px-[20px] 
 lg:px-[0px]">
  {transactionStatusMetrics  ?  (
   pictorialStatus.map((statusArray)=> {
   return  <div className={`w-[260px] md:w-[20%] 
     flex-shrink-0    ${statusArray.color}  lg:rounded-[12px] 
     rounded-[30px] flex flex-col  h-[300px] lg:h-[150px] justify-center items-center gap-[3px]
     ${isDarkMode ? "" : `${statusArray.color}`}   ${
    toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"
       }`}>
      <div className="flex gap-1  justify-center items-center  ">
          <div className ="flex flex-col gap-[2px]">
            <p className={`text-black text-[12px] text-center leading-[14px] font-[600] 
            lg:text-[18px] lg:leading-[24px] capitalize
            ${toggleSideBar ? "lg:text-[18px]" : ""}`}
                  >
                    {statusArray?.status  === "success" ? "Successful" : statusArray?.status}
                  </p>
                    <p
                    className={`text-black text-[11px] black text-center leading-[14px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]
                    ${toggleSideBar ? "lg:text-[18px]" : ""}`}
                  >
                   Volume:   {statusArray?.volume}
                  </p>
                  {(statusArray?.value === 0 || statusArray?.value) 
                  && statusArray?.value !== undefined
                   && statusArray?.value !== null && (
                    <p
                    className={`text-[11px] text-black text-center leading-[14px] font-[500] 
                  lg:text-[18px] lg:leading-[24px] 
                    ${toggleSideBar ? "lg:text-[18px]" : ""}`}
                  >
                   Value: {statusArray?.value !== undefined && statusArray?.value !== null ? statusArray?.value?.toLocaleString("en-NG", {
                    style : "currency",
                    currency : "NGN"
                   }) : ""}
                  </p>
                  )}
                  </div>
                  <img
                    className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/newarrow-down.png"
                    alt="dropdown"
                  />
                </div>
                </div>
         })
 ): (
    <p  className={ `text-sm ${Data?.ConfirmAcc === "true" && loading === true ? " text-black": "text-red-500"} py-[50px] font-[600] mb-8`}>
     {Data?.ConfirmAcc === "true" && loading === false
     ? "An error occured: unable to retrieve transaction status-metrics"  : 
     Data?.ConfirmAcc === "true" && loading === true ? "Processing Transaction Status Metrics...."
     : ""}
      </p>

  )}
</div> 
</div>
</div>
            

               {/* <div
                className={`w-[33.3%] rounded-[3px] lg:rounded-[5px]  flex flex-col h-full justify-center items-center
                   gap-[3px] ${
                     isDarkMode ? "border " : " bg-[#92abfe81]"
                   }  text-[7px] md:text-[12px]`}
              >
                <div className="flex gap-1 justify-center items-center ">
                  <p
                    className={`  text-[11px] text-center leading-[14px] font-[500] 
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
                  className="text-center  text-[10px] leading-[13px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]"
                >
                  {selected === "NGN"
                    ? transactionResponse?.data?.data?.data?.total_count ||
                      transactionResponse?.data?.status === 200
                      ? transactionResponse?.data?.data?.data?.total_count
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
                    className={`text-[11px] text-center leading-[14px] font-[500] 
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
                  className="text-center  text-[10px] leading-[13px] font-[500] 
                  lg:text-[18px] lg:leading-[24px]"
                >
                  {selected === "NGN"
                    ? transactionResponse?.data?.data?.data
                      ? transactionResponse?.data?.data?.data?.total_outflow?.toLocaleString(
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
          </div> */}

          <div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[10px] md:text-[12px] lg:text-[16px]
               text-[#7C7C7C] mt-[10px] font-semibold">
                Transaction History
              </p>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] 
                lg:w-[20px] lg:h-[20px] mt-[10px]"
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
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
              className={`h-full md:hidden flex flex-col mt-9 w-full  border-x-[1.2px]
   my-[50px]  border-b-[1.2px] px-[20px] border-opacity-[25%] shadow-md
 ${isDarkMode ? "border-white" : "border-gray-500 "}`}
            >
              {loading === true ? (
                <div className="h-[150px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : filteredTransactions && filteredTransactions?.length > 0 ? (
                filteredTransactions?.map((transaction, index) => (
                  <div
                    className={`${
                      index < filteredTransactions?.length - 1
                        ? "border-b-[1px] border-gray-500 "
                        : ""
                    }`}
                    key={index}
                  >
                    <div
                      // to={`${
                      //   ["delivered", "success", "Successful", ""].includes(
                      //     transaction?.status
                      //   )
                      //     ? transaction?.product === "Electricity Bills"
                      //       ? "/ElectricityTransSuccessReceipt"
                      //       : "/SuccessfullReceipt"
                      //     : transaction.status === "Failed"
                      //     ? transaction?.product === "Electricity Bills"
                      //       ? "/ElectricityFailedReceipt"
                      //       : "/FailedReceipt"
                      //     : transaction.status === "Pending"
                      //     ? "/PendingReceipt"
                      //     : transaction.status === "Refunded"
                      //     ? "/RefundedReceipt"
                      //     : transaction.status === "Cancelled"
                      //     ? "/CancelledReceipt"
                      //     : ""
                      // }`}
                      // state={{ transaction }}
                      onClick={
                        async () => {
                        // window.scrollTo(0, 0);

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
                              : transaction?.product === "Internal Transfer"
                              ? "/TransferReceipt"
                              : transaction?.product === "Internal Deposit" ||  transaction?.product === "Virtual Account"
                               || transaction?.product === "System Debit" || transaction?.product === "System Top-Up"
                              ? "/VirtualAccountReceipt"
                              :  transaction?.product ===  "Point Redeem" 
                              ? "/PointRedeemReceipt"  : null,
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
                                    ${
                                      isDarkMode
                                        ? "text-white"
                                        : "text-neutral-500"
                                    }`}
                          >
                            Order No : {transaction?.order_id}
                          </h2>
                          <h2
                            className={`font-medium text-black text-[9.167px] 
                                   leading-[11.167px] ${
                                     isDarkMode
                                       ? "text-white"
                                       : "text-neutral-500"
                                   }`}
                          >
                            Product : {transaction?.product}
                          </h2>
                          <p
                            className={`font-medium text-neutral-500 text-[9.167px] leading-[11.167px] capitalize ${
                              isDarkMode ? "text-white" : "text-neutral-500"
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
                              className={`font-medium text-neutral-500 
                                      text-[9.167px] leading-[11.167px] ${
                                        isDarkMode
                                          ? "text-white"
                                          : "text-neutral-500"
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
                              {/* {transaction?.status === "delivered" ||
                              "success" ||
                              "Successful"
                                ? "Successful"
                                : "unknown"} */}
                            </p>
                          </div>

                          <div className="flex flex-row">
                            <div>
                              <p
                                className={`font-medium text-[10px] 
                                        leading-[13px] ${
                                          isDarkMode
                                            ? "text-white"
                                            : "text-neutral-500"
                                        }`}
                              >
                                <span className="block">Date & Time:</span>
                                <span className="block">
                                  {" "}
                                  {formatDate(transaction?.created_at)}{" "}
                                </span>
                                <span className="block">
                                  {formatTime(transaction?.created_at)}{" "}
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
              ) : (filteredTransactions && filteredTransactions?.length < 1) ||
                transactionResponse?.data?.data?.data?.transactions?.length <
                  1 || transactionResponse?.data?.data?.data?.transactions === null || transactionResponse === null
                 ? (
                <img
                  className="lg:w-[517px] lg:h-[456px]"
                  src={NoRecordImage}
                  alt="No record found"
                />
              ) : transactionHistoryError === "Network error" && loading === false ? (
                <p
                  className={`text-[20px] text-black font-[500] 
                ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  An internet connection error has occured, kindly check your
                  internet connection.
                </p>
              ) : transactionHistoryError === "Server error" && loading === false ? (
                <p
                  className={`text-[20px] text-black font-[500] 
              ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Our server is currently facing a downtime, you would receive
                  your transactions shortly.
                </p>
              ) : transactionHistoryError === "unauthorised" &&
                transactionResponse?.data?.data?.data?.transactions ===
                  undefined ? (
                <div className="h-[150px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                loading === false &&
                transactionHistoryError === null && (
                  <p
                    className={`text-[20px] text-black font-[500]
        ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    An Error has occured try again later.
                  </p>
                )
              )}
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
                <Loader />
              </div>
            ) : filteredTransactions && filteredTransactions?.length > 0 ? (
              filteredTransactions?.map((transaction, index) => (
                <div key={index}>
                  <div
                    //to={`/${
                    //transaction.status === "delivered"
                    // ? "SuccessfullReceipt"
                    // : transaction.status === "Failed"
                    // ? "FailedReceipt"
                    // : transaction.status === "Pending"
                    // ? "PendingReceipt"
                    // : transaction.status === "Refunded"
                    // ? "RefundedReceipt"
                    // : transaction.status === "Cancelled"
                    // ? "CancelledReceipt"
                    //: "" // Add a default case or handle it as per your requirement
                    // }`}
                    // state={{ transaction }}
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
                          : transaction?.product === "Internal Transfer"
                          ? "/TransferReceipt"
                          : transaction?.product === "Virtual Account" || 
                          transaction?.product === "Internal Deposit"
                           || transaction?.product === "System Debit" || transaction?.product === "System Top-Up"
                          ? "/VirtualAccountReceipt" : 
                          transaction?.product ===  "Point Redeem" 
                              ? "/PointRedeemReceipt" 
                          : "/SuccessfullReceipt",
                        { state: { orderData, transaction } }
                      );
                      }
                    }}
                  >
                    <div
                      className={`${
                        toggleSideBar
                          ? "lg:text-[15px] md:gap-[%] md:text-[8.5px] "
                          : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:md:gap-[%]"
                      }  hidden  font-semibold md:flex md:h-[60px] lg:h-[85px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
                    >
                      <div
                        className={`md:text-[#7C7C7C] ${
                          toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                        }`}
                      >
                        {transaction?.product}
                      </div>
                      <div
                        className={`md:text-[#7C7C7C] capitalize ${
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
                        {transaction.amount
                          ? transaction.amount?.toLocaleString("en-NG", {
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
                        <span>{formatDate(transaction?.created_at)}{" "}</span>
                        <br />
                        <span>{formatTime(transaction?.created_at)}{" "}</span>
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
                          {/* {transaction.status} */}
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
            ) : filteredTransactions?.length < 1 ||
 transactionResponse?.data?.data?.data?.transactions?.length < 1 ||
              transactionResponse?.data?.data?.data?.transactions === null 
            
              ? (
              <img
                className="lg:w-full lg:h-[456px] flex self-center w-["
                src={NoRecordImage}
                alt="No record found"
              />
            ) : transactionHistoryError === "Network error" ? (
              <p className={`text-[20px] text-black font-[500]`}>
                An internet connection error has occured, kindly check your
                internet connection.
              </p>
            ) : transactionHistoryError === "Server error" ? (
              <p className={`text-[20px] text-black font-[500]`}>
                Our server is currently facing a downtime, you would receive
                your transactions shortly.
              </p>
            ) : transactionHistoryError === "unauthorised" &&
              transactionResponse?.data?.data?.data?.transactions ===
                undefined ? (
              <div className="h-[150px] flex items-center justify-center">
                <Loader />
              </div>
            ) : (
              loading === false &&
              transactionHistoryError === null && (
                <p className={`text-[20px] text-black font-[500]`}>
                  An Error has occured try again later.
                </p>
              )
            )}
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
      {orderLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    
    </DashBoardLayout>
  );
};

export default TransactionPage;
