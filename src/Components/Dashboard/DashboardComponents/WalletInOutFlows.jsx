import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import styles from "./component.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const WalletInOutFlows = () => {
  const { volumeValueToggle, isValue, isDarkMode, toggleSideBar } =
    useContext(ContextProvider);
  const [blur, setBlur] = useState(false);
  const [selected, setSelected] = useState("");
  // const [setToggleTotalTransaction] = useState(false);
  const [yAxisValue, setYAxisValue] = useState("value");
  const [symbol, setSymbol] = useState("₦");

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

  // function formatYAxisLabel(value) {
  //   return "#" + value / 1000 + "k";
  // }

  // Function to handle button click and toggle the y-axis label type
  const handleButtonClick = () => {
    setYAxisValue(yAxisValue === "volume" ? "value" : "volume");
  };

  // Function to transform y-axis labels from volume to value
  const transformYAxisValue = (v) => {
    if (yAxisValue === "value") {
      // const values = ["&#8358;0", "&#8358;1k", "&#8358;2k", "&#8358;3k"];
      const values = ["₦0k", "10k", "20k", "30K"];
      return values[v];
    } else {
      return v;
    }
  };

  const data = {
    labels: [
      "0:00",
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    // Replace with your X-axis labels

    datasets: [
      {
        label: "data",
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        // border: false
        display: false,
        borderWidth: 0,
        pointRadius: 0,
      },

      //   {
      //     label: "Function Values, Outflows", // Replace with your data label
      //     // data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], // Replace with your function's values
      //     backgroundColor: "#FA6B6B", // Optional: Background color for the chart
      //     borderColor: "#FA6B6B", // Optional: Border color for the chart
      //     borderWidth: 1, // Optional: Border width for the chart
      //   },
      //   {
      //     label: "Function Values, Inflows", // Replace with your data label
      //     // data: [0, 2, 4, 6, 8, 10], // Replace with your function's values
      //     backgroundColor: "#58DA8F", // Optional: Background color for the chart
      //     borderColor: "#58DA8F", // Optional: Border color for the chart
      //     borderWidth: 1, // Optional: Border width for the chart
      //   },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (v) {
            return transformYAxisValue(v);
          },
        },
        grid: {
          // display: false,
        },
      },

      x: {
        grid: {
          // display: false,
        },
      },
    },
  };

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    setBlur(
      clickedoption === "USD" ||
        clickedoption === "GBP" ||
        clickedoption === "AUD" ||
        clickedoption === "KES" ||
        clickedoption === "EUR"
    );
    clickedoption === "NGN"
      ? setSymbol("₦")
      : clickedoption === "USD"
      ? setSymbol("$")
      : clickedoption === "GBP"
      ? setSymbol("£")
      : clickedoption === "AUD"
      ? setSymbol("AU$")
      : clickedoption === "KES"
      ? setSymbol("KSh")
      : clickedoption === "EUR"
      ? setSymbol("€")
      : setSymbol("");
    return;
  };

  return (
    <div className="mt-[10%] lg:mt-[5%] mb-[10%]">
      <div className="flex items-center gap-[10px]">
        <p className={styles.InOutText}>Wallets Inflows & Outflows</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      {/* ==============================Inflows & Outflows Indicator====================== */}
      <div
        className={`${styles.INnOUT} my-[10%] flex lg:mt-[5%] lg:items-center`}
      >
        <select
          name="curr"
          id="curr"
          onChange={handleSelectedOption}
          value={selected}
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
          }  text-[7px] ${toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"}`}
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
          <div className="text-center">{symbol}0.00</div>
        </div>

        <div
          className={`${styles.inflowOutflow} ${
            isDarkMode ? "border " : " bg-[#92abfe81]"
          }  text-[7px]`}
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
          } text-[7px]`}
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
          <div className="text-center">{symbol}0.00</div>
        </div>
      </div>

      {/* {toggleTotalTransaction && (
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
      )} */}

      {blur && (
        <div
          className={` ${isDarkMode ? "" : ""} ${
            toggleSideBar
              ? "backdrop-blur-[5px] z-50 absolute font-extrabold lg:h-[101%] lg:w-[75%] lg:ml-[-8px] lg:flex lg:justify-center lg:pt-[20%] lg:text-[28px] lg:text-[#04177f]"
              : "backdrop-blur-[5px] z-50 absolute text-[#04177f] text-[14px] h-[36.5%] w-[90%] font-extrabold flex justify-center pt-[23%] md:h-[42%] md:text-[34px] md:pt-[22%] lg:text-[45px] lg:w-[90%] lg:h-[121%] "
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
          } ml-[75%]`}
        >
          <div>Volume</div>
          <div
            onClick={() => {
              volumeValueToggle();
              handleButtonClick();
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
        <div className="flex float-right mt-[5%] md:mt-[3%] lg:mt-[1%]">
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

        <Line
          className={isDarkMode ? "bg-[#fff]" : ""}
          data={data}
          options={options}
        />
      </div>
      {/* ========================Chart End========================= */}
    </div>
  );
};
