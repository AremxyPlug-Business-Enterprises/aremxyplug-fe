import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import styles from "./component.module.css";
import { GetFunction, HandleUserSession } from "../../ApiCollection.jsx/ApiBuck";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import  { RecentTransaction } from  "./RecentTransaction";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

export const WalletInOutFlows = ({className}) => {
  const { volumeValueToggle, isValue, isDarkMode, toggleSideBar } =
    useContext(ContextProvider);
  const [blur] = useState(false);
 // console.log(setBlur)
  const [selected, setSelected] = useState("");
  const [toggleTotalTransaction] = useState(false);
  //console.log(setToggleTotalTransaction)
  const [symbol, setSymbol] = useState("₦");
 const [loading, setLoading] = useState(false);
 const {transactionResponse, setTransactionResponse} = useContext(ContextProvider)
 const [transactionHistoryError, setTransactionHistoryError] = useState("");
 const [sessionModal, setSessionModal] = useState(false)
  const [activeButtons, setActiveButtons] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const updatedButtons = activeButtons.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
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
  // const [inflowAmount, setInflowAmount] = useState("");
  // const [outflowAmount, setOutflowAmount] = useState("")
   const GetTransactionInformation = async()=> {
        if(!navigator.onLine) return setTransactionHistoryError("Network error")
        const path ="transactions"
        const SuccessHandler =()=>{
        console.log('The user transactions are retrieved.');
        }
        const FailedHandler = async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
        setTransactionHistoryError("unauthorised");
        await GetFunction(path, setLoading, SuccessHandler,(ErrorType)=> {
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
  
         window.addEventListener("online", ()=> {
   if(transactionHistoryError === "Network error"){
    GetTransactionInformation();
   }
 })
  const [activeButton] = useState(0);

  //console.log(setActiveButton)
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to generate data based on selected time range
    const generateData = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
     GetTransactionInformation();
      console.log(currentDay)
      const todayData = [
        { xaxis: "0.00", inflow: 10, outflow: 0, amt: 2400 },
        { xaxis: "1.00", inflow: 9, outflow: 5, amt: 2210 },
        { xaxis: "2.00", inflow: 8, outflow: 1, amt: 2210 },
        { xaxis: "3.00", inflow: 7, outflow: 2, amt: 2210 },
        { xaxis: "4.00", inflow: 6, outflow: 3, amt: 2210 },
        { xaxis: "5.00", inflow: 5, outflow: 4, amt: 2210 },
        { xaxis: "6.00", inflow: 4, outflow: 5, amt: 2210 },
        { xaxis: "7.00", inflow: 3, outflow: 6, amt: 2210 },
        { xaxis: "8.00", inflow: 2, outflow: 7, amt: 2210 },
        { xaxis: "9.00", inflow: 1, outflow: 8, amt: 2210 },
        { xaxis: "10.00", inflow: 0, outflow: 9, amt: 2210 },
        { xaxis: "11.00", inflow: 5, outflow: 9.5, amt: 2210 },
        { xaxis: "12.00", inflow: 1, outflow: 10, amt: 2210 },
        { xaxis: "13.00", inflow: 2, outflow: 9, amt: 2210 },
        { xaxis: "14.00", inflow: 3, outflow: 8, amt: 2210 },
        { xaxis: "15.00", inflow: 4, outflow: 7, amt: 2210 },
        { xaxis: "16.00", inflow: 5, outflow: 6, amt: 2210 },
        { xaxis: "17.00", inflow: 6, outflow: 5, amt: 2210 },
        { xaxis: "18.00", inflow: 7, outflow: 4, amt: 2210 },
        { xaxis: "19.00", inflow: 8, outflow: 3, amt: 2210 },
        { xaxis: "20.00", inflow: 9, outflow: 2, amt: 2210 },
        { xaxis: "21.00", inflow: 10, outflow: 1, amt: 2210 },
        { xaxis: "22.00", inflow: 10, outflow: 0, amt: 2210 },
        { xaxis: "23.00", inflow: 2, outflow: 9, amt: 2210 },
        { xaxis: "24.00", inflow: 0, outflow: 10, amt: 2210 },
        // Include data for the current day
        // Modify data based on your actual requirements
      ];

      const last7DaysData = [
        // Generate data for last 7 days, starting from Monday
        // Modify data based on your actual requirements

        { xaxis: "0.00", inflow: 10, outflow: 0, amt: 2400 },
        { xaxis: "1.00", inflow: 9, outflow: 5, amt: 2210 },
        { xaxis: "2.00", inflow: 8, outflow: 1, amt: 2210 },
        { xaxis: "3.00", inflow: 7, outflow: 2, amt: 2210 },
        { xaxis: "4.00", inflow: 6, outflow: 3, amt: 2210 },
        { xaxis: "5.00", inflow: 5, outflow: 4, amt: 2210 },
        { xaxis: "6.00", inflow: 4, outflow: 5, amt: 2210 },
        { xaxis: "7.00", inflow: 3, outflow: 6, amt: 2210 },
        { xaxis: "8.00", inflow: 2, outflow: 7, amt: 2210 },
        { xaxis: "9.00", inflow: 1, outflow: 8, amt: 2210 },
        { xaxis: "10.00", inflow: 0, outflow: 9, amt: 2210 },
        { xaxis: "11.00", inflow: 5, outflow: 9.5, amt: 2210 },
        { xaxis: "12.00", inflow: 1, outflow: 10, amt: 2210 },
        { xaxis: "13.00", inflow: 2, outflow: 9, amt: 2210 },
        { xaxis: "14.00", inflow: 3, outflow: 8, amt: 2210 },
        { xaxis: "15.00", inflow: 4, outflow: 7, amt: 2210 },
        { xaxis: "16.00", inflow: 5, outflow: 6, amt: 2210 },
        { xaxis: "17.00", inflow: 6, outflow: 5, amt: 2210 },
        { xaxis: "18.00", inflow: 7, outflow: 4, amt: 2210 },
        { xaxis: "19.00", inflow: 8, outflow: 3, amt: 2210 },
        { xaxis: "20.00", inflow: 9, outflow: 2, amt: 2210 },
        { xaxis: "21.00", inflow: 10, outflow: 1, amt: 2210 },
        { xaxis: "22.00", inflow: 10, outflow: 0, amt: 2210 },
        { xaxis: "23.00", inflow: 2, outflow: 9, amt: 2210 },
        { xaxis: "24.00", inflow: 0, outflow: 10, amt: 2210 },
      ];

      const last30DaysData = [
        // Generate data for last 30 days
        // Modify data based on your actual requirements
      ];
      const allTimeData = [
        // Generate data for all time
        // Modify data based on your actual requirements
      ];

      const customData = [

        // Generate data for custom time range
        // Modify data based on your actual requirements
      ];

      // Set data based on the selected button
      switch (activeButton) {
        case 0:
          setData(todayData);
          break;
        case 1:
          setData(last7DaysData);
          break;
        case 2:
          setData(last30DaysData);
          break;
        case 3:
          setData(allTimeData);
          break;
        case 4:
          setData(customData);
          break;
        default:
          setData(todayData);
          break;
      }
    };

    generateData();
    if(transactionResponse?.data?.data?.data === undefined){
      GetTransactionInformation();
    }
    setSelected("NGN");
    //eslint-disable-next-line
  }, [activeButton]);

  const symbolValue = selected === "USD" ? "$" : selected === "AUD" ? 
 "AU$" : selected === "KES" ?   "KSh" : selected === "EUR" ? "€" : selected === "GBP" ? "£" : "₦";

  // const handleClick = (index) => {
  //   setActiveButton(index);
  // };

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
                  {selected === "NGN"  ? transactionResponse?.data?.data?.data ?
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
                  lg:text-[18px] lg:leading-[24px]">{selected === "NGN" ? transactionResponse?.data?.data?.data?.total_count || transactionResponse?.data?.status === 200  ? transactionResponse?.data?.data?.data?.total_count: "" : 0}  </p>
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
                  {selected === "NGN" ? transactionResponse?.data?.data?.data ?
        transactionResponse?.data?.data?.data?.total_outflow?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN"
        }) :   "₦"  : `${symbolValue}0.00`}
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
        className={`${
          isDarkMode ? "bg-black border text-[#fff]" : "bg-[#fff]"
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
              handleClick(0);
            }}
            className={`${styles.chartBtn} ${
              activeButtons[0] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            TODAY
          </div>
          <div
            onClick={() => {
              handleClick(1);
            }}
            className={`${styles.chartBtn} ${
              activeButtons[1] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            LAST 7 DAYS
          </div>
          <div
            onClick={() => {
              handleClick(2);
            }}
            className={`${styles.chartBtn} ${
              activeButtons[2] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            LAST 30 DAYS
          </div>
          <div
            onClick={() => {
              handleClick(3);
            }}
            className={`${styles.chartBtn} ${
              activeButtons[3] ? "bg-[#04177f]" : "bg-[#0003]"
            } ${isDarkMode ? "border " : " "} cursor-pointer`}
          >
            ALL TIME
          </div>
          <div
            onClick={() => {
              handleClick(4);
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
          className={`text-[7px] flex gap-2 items-center mt-[7%]  md:text-[14px] lg:mt-[4%] lg:text-[18px]  ${
            toggleSideBar ? "lg:ml-[80%]" : " lg:ml-[85%] md:ml-[82%]"
          } ml-[75%] mr`}
        >
          <div>Volume</div>
          <div
            onClick={() => {
              volumeValueToggle();
              // handleButtonClick();
            }}
            className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
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
        {/* 
        <Line
          className={isDarkMode ? "bg-[#fff]" : ""}
          data={data}
          options={options}
        /> */}

        <div style={{ width: "100%", maxWidth: "100%", overflowX: "auto" }}>
          <LineChart
            width={window.innerWidth < 768 ? window.innerWidth - 40 : 1480}
            height={window.innerWidth < 768 ? 300 : 370}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
           <XAxis 
          dataKey="xaxis" 
          tickLine={false}
          tick={{ 
            fontSize: 12,
            textAnchor: 'end'
          }} 
        >
          <Label
            value="X Axis Label"
            offset={0}
            position="insideBottom"
            style={{ fontStyle: 'italic', transform: 'rotate(45deg)' }}
          />
        </XAxis>
            <YAxis tickFormatter={(value) => `${symbol}${value}K`} 
          tick={{ 
            fontSize: 12,
            // fontStyle: 'italic',
            // transform: 'rotate(90deg)',
            // textAnchor: 'end'
          }} 
             />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="linear" dataKey="inflow" stroke="#58DA8F" />
            <Line type="linear" dataKey="outflow" stroke="#FA6B6B" />
            <Tooltip />
          </LineChart>
        </div>

       
      </div>
      {/* ========================Chart End========================= */}
     
       <RecentTransaction transactionResponse = {transactionResponse} 
       transactionHistoryError={transactionHistoryError} loading={loading} />
       
       
        {sessionModal && (
          <HandleUserSession/>
        )}
    </div>
  );
};
