import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import { ConfirmOtherTransaction } from "./OtherBankPopUp/OtherBankPopUp/ConfirmOtherTransaction";
import { Modal } from "../../../../Screens/Modal/Modal";
import { Link } from "react-router-dom";

export default function GlobalTransfer() {
  const {
    showList,
    setShowList,
    selected,
    setSelected,
    isDarkMode,
    toggleSideBar,
    amtToTransfer,
    setAmtToTransfer,
    globalBankName,
    globalAccountNumber,
    globalCountry,
    globalAccountName,
    setGlobalCountry,
    globalTransferErrors,
    handleGlobalInputChange,
    ProceedToGlobalTransfer,
  } = useContext(ContextProvider);

  const [addToRecipient, SetAddToRecipient] = useState(false);
  const [saveToFavorite, setSaveTofavorite] = useState(false);

  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "EUR",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "KES",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const [flag, setFlag] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [currencyAvailable, setCurrencyAvailable] = useState(false);

  const amountHandler = (e) => {
    setAmtToTransfer(e.target.value);
  };

  const handleCountryClick = (name, flag, id, code) => {
    setFlag(flag);
    setShowList(false);
    setGlobalCountry(name);
    setSelected(true);
    setCountryCode(code);
    setCurrencyAvailable(id !== 1);
  };

  const refresh = () => window.location.reload(true);

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[40px]">
      {" "}
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        {/* =====================Country========================= */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Select Country
          </p>
          <div
            onClick={() => setShowList(!showList)}
            className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          >
            {selected ? (
              <div className="flex gap-[7px] items-center">
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
                <p className="text-[10px] lg:text-[14px]"> {globalCountry}</p>
              </div>
            ) : (
              <p></p>
            )}
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
          {globalTransferErrors.country && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.country}
            </div>
          )}
          {showList && (
            <div
              className={`${
                toggleSideBar
                  ? "lg:w-[31.5%] lg:top-[100.5%]"
                  : "lg:w-[38.5%] lg:top-[105.3%]"
              }  ${
                styles.countryDropDown
              } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-full lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
            >
              {" "}
              {countryList.map((country) => (
                <div
                  className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                  key={country.id}
                  onClick={() =>
                    handleCountryClick(
                      country.name,
                      country.flag,
                      country.id,
                      country.code
                    )
                  }
                >
                  <img
                    className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                    src={country.flag}
                    alt="/"
                  />
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =======================Currency============================ */}

        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Select Currency
          </p>
          <div className="border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[14px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {selected ? (
              <div className="flex items-center gap-[7px]">
                {" "}
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt="/"
                />
                {countryCode}
              </div>
            ) : (
              ""
            )}
          </div>
          {globalTransferErrors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.currency}
            </div>
          )}
        </div>
      </div>
      {/* ==========================Select/Add Recipient====================== */}
      <div className="flex gap-[10%] lg:gap-[3%]">
        <Link
          to="/GlobalTransferSelectRecipient"
          className="w-full flex items-center justify-between border text-[10px] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003] cursor-pointer"
        >
          <p>Select Recipient</p>

          <img
            className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
            src="./Images/otherBanksImages/weight.png"
            alt=""
          />
        </Link>

        <Link
          to="/GlobalTransferAddRecipient"
          className="w-full flex items-center justify-between border text-[10px]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003] cursor-pointer"
        >
          <p>Add Recipient</p>

          <img
            className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
            src="./Images/otherBanksImages/add-square.png"
            alt=""
          />
        </Link>
      </div>
      <div className="bg-[#04177f] text-[#fff] text-[10px] h-[20px] flex justify-center items-center rounded-[2px] lg:w-[45%] lg:h-[38px] lg:text-[16px]">
        Real-time Bank Network Tracker
      </div>
      <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
        {/* =====================Bank Name=================== */}

        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Bank Name
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleGlobalInputChange}
              name="bankName"
              value={globalBankName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
          {globalTransferErrors.bankName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.bankName}
            </div>
          )}
        </div>

        {/* ======================Account Number================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Account Number
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleGlobalInputChange}
              name="accountNumber"
              value={globalAccountNumber}
              className={`${styles.hideArrows} text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]`}
              type="number"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.0793 6.18305C6.0293 6.17805 5.9693 6.17805 5.9143 6.18305C4.7243 6.14305 3.7793 5.16805 3.7793 3.96805C3.7793 2.74305 4.7693 1.74805 5.9993 1.74805C7.2243 1.74805 8.2193 2.74305 8.2193 3.96805C8.2143 5.16805 7.2693 6.14305 6.0793 6.18305Z"
                fill="#FFf"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.57938 8.02805C2.36937 8.83805 2.36937 10.158 3.57938 10.963C4.95438 11.883 7.20938 11.883 8.58438 10.963C9.79438 10.153 9.79438 8.83305 8.58438 8.02805C7.21438 7.11305 4.95938 7.11305 3.57938 8.02805Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {globalTransferErrors.accountNumber && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.accountNumber}
            </div>
          )}
        </div>

        {/* =======================Account Name==================== */}
        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Account Name
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleGlobalInputChange}
              name="accountName"
              value={globalAccountName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6 7.00977C4.415 7.00977 3.125 5.71977 3.125 4.13477C3.125 2.54977 4.415 1.25977 6 1.25977C7.585 1.25977 8.875 2.54977 8.875 4.13477C8.875 5.71977 7.585 7.00977 6 7.00977ZM6 2.00977C4.83 2.00977 3.875 2.96477 3.875 4.13477C3.875 5.30477 4.83 6.25977 6 6.25977C7.17 6.25977 8.125 5.30477 8.125 4.13477C8.125 2.96477 7.17 2.00977 6 2.00977Z"
                fill="#92ABFE"
              />
              <path
                d="M10.2951 12.0098C10.0901 12.0098 9.92007 11.8398 9.92007 11.6348C9.92007 9.90977 8.16008 8.50977 6.00008 8.50977C3.84008 8.50977 2.08008 9.90977 2.08008 11.6348C2.08008 11.8398 1.91008 12.0098 1.70508 12.0098C1.50008 12.0098 1.33008 11.8398 1.33008 11.6348C1.33008 9.49977 3.42508 7.75977 6.00008 7.75977C8.57508 7.75977 10.6701 9.49977 10.6701 11.6348C10.6701 11.8398 10.5001 12.0098 10.2951 12.0098Z"
                fill="#92ABFE"
              />
            </svg>
          </div>
          {globalTransferErrors.accountName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.accountName}
            </div>
          )}
        </div>

        {/* <p>{state.accountName}</p> */}

        {/* =========================Amount To Transfer==================== */}
        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Amount To Transfer
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {" "}
            <input
              onChange={amountHandler}
              type="number"
              className={`${styles.hideArrows} text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]`}
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/convertshape.png"
              alt="dropdown"
            />
          </div>

          {globalTransferErrors.amtToTransfer && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.amtToTransfer}
            </div>
          )}
        </div>

        {/* ===========================Available Balance===================== */}
        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Available Balance
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[16px]">
              &#8358;50,000.00
            </p>
            {/* <img
                    className="w-[13px] h-[13px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                    src={flag}
                    alt="/"
                  /> */}
          </div>
        </div>

        {/* =============================Message======================= */}
        <div className="w-[100%] mx-auto mt-[15px] md:mt-0 ">
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Message
          </p>
          <textarea
            placeholder="Optional"
            className="text-[10px] outline-none w-full border-[1px] h-[80px] flex flex-col justify-between p-[1%] rounded-[4px] md:h-[100px] md:text-[14px] md:rounded-[8px] md:border-[1px] lg:border-[#0003] lg:h-[120px] lg:w-[100%]"
          ></textarea>
        </div>
      </div>
      {/* =========================Add to recipient ? ======================= */}
      <div className="flex gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="text-[11px] lg:text-[16px]">Add to recipient ?</div>
          <div
            onClick={() => {
              SetAddToRecipient(!addToRecipient);
              // handleButtonClick();
            }}
            className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
              addToRecipient ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
            }`}
          >
            <div
              className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                addToRecipient ? "float-right" : "float-left"
              }`}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="text-[11px] lg:text-[16px]">Save to favorities</div>
          <div
            onClick={() => {
              setSaveTofavorite(!saveToFavorite);
              // handleButtonClick();
            }}
            className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
              saveToFavorite ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
            }`}
          >
            <div
              className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                saveToFavorite ? "float-right" : "float-left"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <button
        onClick={ProceedToGlobalTransfer}
        className={`${
          amtToTransfer.length < 3 ? "bg-[#0008]" : "bg-[#04177f]"
        } my-[5%] w-full flex justify-center items-center mx-auto cursor-pointer 
        text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
      >
        Proceed
      </button>
      {currencyAvailable && (
        <Modal>
          <div className="bg-white shadow-lg w-[90%] rounded-[8px] h-[269px] flex flex-col items-center py-[4%] gap-[40px] md:h-[360px] lg:w-[562px] lg:gap-[60px] lg:h-[500px] lg:py-[3%] lg:rounded-[px]">
            <p className="text-[10px] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px]">
              This Currency is Currently Not Available.
            </p>
            <img
              className="w-[135px] h-[96px] lg:w-[217px] lg:h-[187px]"
              src="/Images/addAccountImages/account-unavailable.png"
              alt=""
            />
            <p className="absolute top-[58%] right-[15%] text-[8px] md:text-[12px] md:ml-[70%] lg:text-[14px] lg:top-[73%] lg:right-[33%] lg:ml-[40%] lg:w-[8%]">
              Coming Soon...
            </p>

            <div
              onClick={refresh}
              className={` ${
                isDarkMode ? "border" : "bg-[#04177f] "
              } cursor-pointer text-white text-[10px] h-[40px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
            >
              Okay
            </div>
          </div>
        </Modal>
      )}
      <ConfirmOtherTransaction />
    </div>
  );
}
