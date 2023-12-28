import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../../Context";
import { Modal } from "../../../../../Screens/Modal/Modal";
import { ReceiverCountrySelector } from "../../../CountrySelect/ReceiverCountrySelector.jsx";
import { SenderCountrySelector } from "../../../CountrySelect/SenderCountrySelector";
import styles from "../../../TransferComponent/transfer.module.css";

export default function CheckRate({ setCheckrate }) {
  const { toggleSideBar } = useContext(ContextProvider);
  //   const [transfer, setTransfer] = useState("");
  //   const [receive, setReceive] = useState("");

  const [exchangeRate, setExchangeRate] = useState(null);
  //   const transferHandler = (e) => {
  //     setTransfer(e.target.value);
  //   };

  //   const receiveHandler = (e) => {
  //     setReceive(e.target.value);
  //   };

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key or use a different exchange rate API.
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const nairaToDollarRate = data.rates["NGN"];
        setExchangeRate(nairaToDollarRate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Modal>
      <div
        className={`${styles.checkrate} ${
          toggleSideBar
            ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
            : "md:w-[80%] lg:w-[562px]"
        } w-[90%] overflow-auto `}
      >
        {" "}
        <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] md:h-[15px]" />
        <div className="bg-[#04177f] text-[#fff] text-[10px] my-[20%] h-[20px] flex justify-center items-center rounded-[2px] md:my-[15%] md:h-[30px] md:text-[15px] lg:text-[16px] lg:mx-auto lg:my-[5%] lg:h-[38px] lg:w-[60%]">
          Real-time International Transfer Check Rate
        </div>
        <div className="mx-[5%]">
          <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[3%] md:text-[18px] lg:text-[20px]">
            <p>Sender</p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          <div className={``}>
            <div className="border h-[25px] flex justify-between pl-[2%] md:h-[40px] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
              {" "}
              <input
                // onChange={transferHandler}
                type="number"
                placeholder="Amount to Transfer"
                className={`${styles.hideArrows} text-[10px] text-[#000] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]`}
              />
              <SenderCountrySelector />
            </div>

            {/* {errors.transfer && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.transfer}
              </div>
            )} */}
          </div>
          <div className="text-[9px] text-[#29B8FC] border-[0.9px] drop-shadow-3xl border-[#0003] rounded-[7px] w-[55%] mx-auto my-[3%] flex justify-center items-center py-[7px] gap-1 md:my-[5%] md:h-[40px] md:text-[14px] md:gap-2 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <img
              className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
              src="./Images/transferImages/ticket-discount.png"
              alt="conversion"
            />
            {exchangeRate !== null ? (
              <p>{exchangeRate} NGN ~ 1 USD</p>
            ) : (
              <p>Loading exchange rate...</p>
            )}
          </div>
          <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>To Recipient</p>
            <img
              className="w-[15px] h-[15px] md:h-[24px] md:w-[24px] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          <div className={``}>
            <div className="z-[10px] border rounded-[px] h-[25px] flex justify-between pl-[2%] md:h-[45px] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
              {" "}
              <input
                // onChange={receiveHandler}
                type="number"
                placeholder="Recipient will Receive"
                className={`${styles.hideArrows} text-[10px] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]`}
              />
              <ReceiverCountrySelector />
            </div>

            {/* {errors.receive && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.receive}
              </div>
            )} */}
          </div>
          <button
            onClick={() => setCheckrate(false)}
            className="bg-[#04177f] mt-[25%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:my-[10%] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:mt-[10%]"
          >
            Okay
          </button>
        </div>
      </div>
    </Modal>
  );
}
