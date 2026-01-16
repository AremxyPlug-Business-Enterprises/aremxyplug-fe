import  { useState, useEffect, } from "react";
import { RxDotFilled } from "react-icons/rx";
import styles from "./component.module.css";
import { GetFunction, InternalLoginSession} from "../../ApiCollection.jsx/ApiBuck";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import  { RecentTransaction } from  "./RecentTransaction";
import { Calender } from "./Calender";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import { ChartsDesignModule } from "../../ChartsDesignModule";


export const WalletInOutFlows = ({sessionModal, setSessionModal}) => {
  const Data = GetLocalStorage()
  const { volumeValueToggle, 
    isValue,
     isDarkMode,
      toggleSideBar,
      handleStateCalender,
      startDateValueState,
      endDateValueState,
      setStartDateValueState,
      setEndDateValueState,
      editCalenderOne,
      setEditCalenderOne,
      editCalenderTwo,
      setEditCalenderTwo,
      setCurrentDateInTimeStamps,
    setCountCalender, progressTaskBarResponse }  =
    useContext(ContextProvider);
  const [blur] = useState(false);
 // console.log(setBlur)
  const [selected, setSelected] = useState("");
  const [toggleTotalTransaction] = useState(false);
  //console.log(setToggleTotalTransaction)
  const [walletLoading, setWalletLoading] = useState(false)
  const [symbol, setSymbol] = useState("₦");
 const [loading, setLoading] = useState(false);
 const {transactionResponse, setTransactionResponse} = useContext(ContextProvider);
 const [transactionHistoryError, setTransactionHistoryError] = useState("");
 const [stateDateEdit, setStateDateEdit] = useState("")

  const [activeButtons, setActiveButtons] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
 
  const [calenderWallet, setCalenderWallet] = useState(false)


  const handleClick = (index, value) => {
    const updatedButtons = activeButtons.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
    chartFunc(value)
    return value
  };

  

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    setSymbol(
      clickedoption === "NGN"
        ? "₦"
        : clickedoption === "USD"
        ? "$"
        : clickedoption === "GBP"
        ? "£"
        : clickedoption === "AUD"
        ? "AU$"
        : clickedoption === "KES"
        ? "KSh"
        : clickedoption === "EUR"
        ? "€"
        : ""
    );
  };

  
     const currentDate = new Date();
  const isoFormat = currentDate ? currentDate?.toLocaleString("sv-SE", {
    timeZone : "Africa/Lagos",
    hour12 : false
  }) : "";
  const getSlicedDate = isoFormat?.slice(0,10);
   const GetTransactionInformation = async(calenderState)=> {
    
            if(!navigator.onLine) return setTransactionHistoryError("Network error");
       
        
const handleDateFilter = ()=> {

  if((editCalenderOne !== "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo === "End Date" && editCalenderTwo !== undefined) && calenderState === true){
          return `?start_date=${startDateValueState}`
        }else if ((editCalenderOne !== "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo !== "End Date" && editCalenderTwo !== undefined) && calenderState === true){
         return `?start_date=${startDateValueState}&end_date=${endDateValueState}`
        }else if((editCalenderOne === "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo === "End Date" && editCalenderTwo !== undefined) && calenderState === true){
           setStartDateValueState(getSlicedDate)
          return `?start_date=${getSlicedDate}`
        }else if(((editCalenderOne === "Start Date" && editCalenderOne !== undefined)  || (editCalenderOne !== "Start Date" && editCalenderOne !== undefined))
          && ((editCalenderTwo === "End Date" && editCalenderTwo !== undefined) || (editCalenderTwo !== "End Date" && editCalenderTwo !== undefined))
           && calenderState === false){
          return "";

        }else{
          return "";
        }
      }
        const path =`transactions${handleDateFilter()}`
        const SuccessHandler =(response)=>{
        setTransactionHistoryError("");
        setTransactionResponse(response)
       
        }
        const FailedHandler = async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
        setTransactionHistoryError("unauthorised");
        if(sessionModal) return;
        if(sessionModal === false) return setSessionModal(true)
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
            ()=> {})}
  
         window.addEventListener("online", ()=> {
   if(transactionHistoryError === "Network error"){
    GetTransactionInformation();
   }
 })
  //const [activeButton] = useState(0);

  //console.log(setActiveButton)
  ///============== CHARTS INFORMATION===============//


  useEffect(() => {
        GetTransactionInformation();
    // Function to generate data based on selected time range
 
     // const currentDay = currentDate.getDay();
 
  // console.log(currentDay)
   

      // Set data based on the selected button
    //   switch (activeButton) {
    //     case 0:
    //       setData(todayData);
    //       break;
    //     case 1:
    //       setData(last7DaysData);
    //       break;
    //     case 2:
    //       setData(last30DaysData);
    //       break;
    //     case 3:
    //       setData(allTimeData);
    //       break;
    //     case 4:
    //       setData(customData);
    //       break;
    //     default:
    //       setData(todayData);
    //       break;
    //   }
    // };

  //  generateData();
    if(transactionResponse?.data?.data?.data === undefined){
      GetTransactionInformation();
    }
    setSelected("NGN");
    //eslint-disable-next-line
  }, []);

  const symbolValue = selected === "USD" ? "$" : selected === "AUD" ? 
 "AU$" : selected === "KES" ?   "KSh" : selected === "EUR" ? "€" : selected === "GBP" ? "£" : "₦";

  // const handleClick = (index) => {
  //   setActiveButton(index);
  // };
  //Chart Implemntation for the wa;;et inflow and outflow


//Chart Function to filter data from the backend
//Description : This function comes first to the necessary data to be used/passed to the chart component
useEffect(()=> {
  if(Data?.ConfirmAcc === "true"){
  chartFunc("daily")
  }
 //eslint-disable-next-line
}, []);


 const handleCalenderState = async()=> {
 setStartDateValueState("");
  setEndDateValueState("");
  setCurrentDateInTimeStamps(0);
  setCountCalender(0);
  setCalenderWallet(false);
  setEditCalenderOne("Start Date");
  setEditCalenderTwo("End Date");
  setStateDateEdit("Filter By Date");
  await chartFunc("Custom")
  
 }

 const FilterDate = async()=> {

  setCalenderWallet(false);
    setCalenderWallet(false);
  setStateDateEdit(()=> {
    if(editCalenderOne !== "Start Date" && editCalenderTwo === "End Date" ){
     return <p>{startDateValueState}</p>
    }else if(editCalenderOne !== "Start Date" && editCalenderTwo !== "End Date" ){
   return <div className="flex flex-col gap-[5px]">
    <p className  ="lg:text-[12px] lg:leading-[16px] text-[#04177f] text-[8px] leading-[12px]">
      {startDateValueState}
      </p>
    <p  className="lg:text-[12px] text-[#04177f]
     lg:leading-[16px] text-[8px] leading-[12px]">
      {endDateValueState}
      </p>
   </div>
    }else if(editCalenderOne === "Start Date" && editCalenderTwo === "End Date" ){
   setStateDateEdit(()=> {
     return <p>{startDateValueState}</p>
   })
    }
  })
  await chartFunc("Custom");

 }

// const cachedChartResponse = useMemo(()=> chartFunc, [c])
const [chartResponse, setChartResponse] = useState({});

 const [walletResponseError, setWalletResponseError] = useState("");
const chartFunc = async(chartIndicator)=> {
function handleDataFilter(){
  if((chartIndicator === "daily" ||
     chartIndicator === "weekly" ||
      chartIndicator === "monthly" ||  chartIndicator === "all-time")
      &&(chartIndicator !== "" ||
         chartIndicator !== undefined
          || chartIndicator !=="Custom"
  )){
   return chartIndicator ===  "daily" ? `?range=daily` 
   : chartIndicator === "weekly" ? `?range=weekly`
    : chartIndicator === "monthly" ? `?range=monthly`
     : chartIndicator === "all-time" ? `?range=all-time` : "";
}else if (chartIndicator === "Custom"){
  if((editCalenderOne !== "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo === "End Date" && editCalenderTwo !== undefined) && calenderWallet === true){
          return `?start_date=${startDateValueState}`
        }else if ((editCalenderOne !== "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo !== "End Date" && editCalenderTwo !== undefined) && calenderWallet === true){
         return `?start_date=${startDateValueState}&end_date=${endDateValueState}`
        }else if((editCalenderOne === "Start Date" && editCalenderOne !== undefined) 
          && (editCalenderTwo === "End Date" && editCalenderTwo !== undefined) && calenderWallet === true){
           setStartDateValueState(getSlicedDate)
          return `?start_date=${getSlicedDate}`
        }else if(((editCalenderOne === "Start Date" && editCalenderOne !== undefined)  || (editCalenderOne !== "Start Date" && editCalenderOne !== undefined))
          && ((editCalenderTwo === "End Date" && editCalenderTwo !== undefined) || (editCalenderTwo !== "End Date" && editCalenderTwo !== undefined))
           && calenderWallet === false){
          return "";

        }else{
          return "";
        }
      }
}


let path =`chart${typeof handleDataFilter() === "string" ? handleDataFilter() : ""}`
  await GetFunction(path, setWalletLoading, (response)=> {
      setChartResponse(response)
  }, (errorType)=> {
      if(errorType === "unauthorised"){
     if(sessionModal) return;
     if(sessionModal === false) return setSessionModal(true)
      }else if(errorType === "Network error" ||
     errorType === "User error"
      || errorType === "Bad request"){
       setWalletResponseError("Network error")
    }else if(errorType === "Server error"){
    setWalletResponseError("Server error")
    }
  }, ()=> {})
}
const walletCount = 
typeof chartResponse?.data?.data?.data?.totalInflowCount === "number" 
&& typeof chartResponse?.data?.data?.data?.totalOutflowCount === "number"  ? 
chartResponse?.data?.data?.data?.totalInflowCount + chartResponse?.data?.data?.data?.totalOutflowCount : undefined

  return (
    <div className="mt-[10%] lg:mt-[5%] mb-[10%]">
      <div className="flex items-center gap-[10px]">
        <p className={styles.InOutText}>Wallets Inflows & Outflows</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/dashboardImages/arrowright.png"
          alt="/"
        />
      </div>

      {/* ==============================Inflows & Outflows Indicator====================== */}

          <div>
            <div
              className={` flex w-full gap-[5px] h-[70px] lg:h-[100px] items-center 
              lg:mt-[5%] lg:items-center my-[30px]`}
              // md:items-center
              >
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
                  {selected === "NGN"  ? chartResponse?.data?.data?.data && chartResponse?.data?.data?.data !== undefined   ?
        chartResponse?.data?.data?.data?.totalInflowAmount?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN"
        }) :"₦"  : `${symbolValue}0.00` }
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
                  lg:text-[18px] lg:leading-[24px]">{
   typeof walletCount === "number"&& typeof walletCount !== "undefined"
         ? walletCount :
         ( chartResponse?.data?.data?.data?.totalInflowCount === undefined  &&
       chartResponse?.data?.data?.data === undefined && chartResponse?.data?.data?.data?.totalOutflowCount === undefined)
       || (chartResponse?.data?.data?.data?.totalInflowCount === null &&
     chartResponse?.data?.data?.data?.totalOutflowCount === null) ? 
        0 : ""  }</p>
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
                  {selected === "NGN" ? chartResponse?.data?.data?.data 
                  && chartResponse?.data?.data?.data !== undefined
                 ?  chartResponse?.data?.data?.data?.totalOutflowAmount?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN"
        }) :  "₦"  : `${symbolValue}0.00`}
                </p>
              </div>
            </div>
          </div>

      {toggleTotalTransaction && (
        <div
          className={`${styles.totalTransactions} ${
            toggleSideBar
              ? "lg:top-[250%] lg:w-[295px] lg:right-[27.5%] lg:text-[20px]"
              : "lg:right-[33%] lg:w-[317px] lg:top-[255%] lg:text-[20px]"
          } bg-white text-[7px] absolute top-[114%] right-[29.5%] w-[87px] md:w-[210px] md:right-[32.5%] md:text-[16px] md:top-[119.5%]`}
        >
          <ul>
            <li className="p-[3px] border-b-[1px] md:py-[9px] md:pl-[20px]">
              Total Transactions
            </li>
            <li className="p-[3px] border-b-[1px] md:py-[9px] md:pl-[20px]">
              Inflow Transactions
            </li>
            <li className="p-[3px] border-b-[1px] md:py-[9px] md:pl-[20px]">
              Outflow Transactions
            </li>
          </ul>
        </div>
      )}

      {blur && (
        <div
          className={`${
            styles.currencyUnavailable
          } z-10 text-[#04177f] pt-[32%] text-[14px] w-[90%] font-extrabold  md:pt-[13%] md:text-[30px] ${
            isDarkMode ? "" : ""
          } ${
            toggleSideBar
              ? " backdrop-blur-[5px] absolute lg:h-[101%] lg:w-[75%] lg:ml-[-8px] lg:flex lg:justify-center lg:pt-[20%] lg:text-[28px] lg:text-[#04177f]"
              : " backdrop-blur-[5px] absolute  flex justify-center lg:text-[45px] lg:w-[90%] lg:h-[121%] "
          } `}
        >
          This Currency Is Currently Not Available...
        </div>
      )}

      {/* =========================Chart Start========================= */}
      <div
        className={`relative h-[400px] w-full ${
          isDarkMode ? "bg-black border  text-[#fff]" : "bg-[#fff]"
        } ${styles.Chart}`}
       
      >

       
        {/* ==============Amount Of Days==================== */}
        <div
          className={`${styles.chartbuttons} ${
            toggleSideBar
              ? "gap-[10px] text-[5.6px] md:text-[13.66px] lg:gap-[20px] lg:text-[15px]"
              : "text-[5.6px] lg:text-[21px]  md:text-[13.66px] lg:gap-[50px] gap-[10px] "
          }`}
        >
          <div
            onClick={() => {
              handleClick(0, "daily");
            }}
            className={`${styles.chartBtn} ${
              activeButtons[0] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            TODAY
          </div>
          <div
            onClick={() => {
              handleClick(1, "weekly");
            }}
            className={`${styles.chartBtn} ${
              activeButtons[1] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            LAST 7 DAYS
          </div>
          <div
            onClick={() => {
              handleClick(2, "monthly");
            }}
            className={`${styles.chartBtn} ${
              activeButtons[2] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            LAST 30 DAYS
          </div>
          <div
            onClick={() => {
              handleClick(3, "all-time");
            }}
            className={`${styles.chartBtn} ${
              activeButtons[3] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            ALL TIME
          </div>
          <div
            onClick={() => {
           //  handleClick(4, "daily");
              setCalenderWallet(true);
            }}
            className={`${styles.chartBtn} ${
              activeButtons[4] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            CUSTOM
          </div>
        </div>

        {/* ==============Volume & Value Toggle================== */}
        <div
          className={`text-[7px] flex gap-2 items-center mt-[7%]  
            md:text-[14px] lg:mt-[4%] lg:text-[18px]  ${
            toggleSideBar ? "lg:ml-[80%]" : " lg:ml-[85%] md:ml-[82%]"
          } ml-[75%] mr`}
        >
          <div>Volume</div>
          <div
            onClick={() => {
              volumeValueToggle();
            }}
            className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px]
               lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
              isValue ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
            }`}
          >
            <div
              className={`rounded-full w-[7.5px] h-[6.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                isValue ? "float-right" : "float-left"
              }`}
            ></div>
          </div>
          <div>Value</div>
        </div>

        {/* <div className="w-full p-[5px] flex justify-end items-center">
     <div className="w-[200px] bg-white lg:w-[200px] h-[60px] 
     lg:h-[80px] rounded-[12px] border-[1px]">
      <p className ="text-center text-[12px] font-[600] 
      leading-[18px] lg:text-[16px] lg:leading-[24px]"> 
        {stateDateEdit}
        </p>
      </div>
      </div> */}

        {/* ====================Inflow & Outflow indication================ */}
        <div className="flex float-right mt-[1%] md:mt-[3%] lg:mt-[1%]">
          <div className="flex items-center ">
            <div className="text-2xl text-[#58DA8F] md:text-5xl">
              <RxDotFilled />
            </div>
            <div className="text-[7px] md:text-[14px]">Inflow</div>
          </div>
          <div className="flex items-center">
            <div className="text-2xl text-[#FA6B6B] md:text-5xl">
              <RxDotFilled />
            </div>
            <div className="text-[7px] md:text-[14px]">Outflows</div>
          </div>
  </div>
   <div style={{ width: "100%",
           maxWidth: "100%",
            overflowX: "auto", zIndex: 8, position : "absolute" }} className ="">
       
          {(calenderWallet && Data?.ConfirmAcc === "true") && (
                      <div className={`rounded-[20px] top-0 z-[1000px]
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
                                onClick={FilterDate}
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
             <div className="w-full bg-white z-2">
      {(chartResponse?.data?.data?.data?.inflow?.length > 0 )
       && (chartResponse?.data?.data?.data?.outflow?.length > 0) ? (
          <ChartsDesignModule inflow ={chartResponse?.data?.data?.data?.inflow} outflow={chartResponse?.data?.data?.data?.outflow}/>
      ): (
    <div className="flex w-full h-full justify-center my-20 items-center">
      <h1 className="text-[30px] lg:leading-[40px] lg:text-[40px] leading-[50px] font-500 text-gray-500">
        Charts data are not available
        </h1>
      </div>

      )}
        </div>
  {/* ========================Chart End========================= */}
     </div>
       <RecentTransaction transactionResponse = {transactionResponse} 
       transactionHistoryError={transactionHistoryError} loading={loading}
        GetTransactionInformation ={GetTransactionInformation} handleStateCalender= {handleStateCalender}/>

         {sessionModal && (
          <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
       )}
       </div>

       //Internal Login session
      
  );
};
