import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import { ToConfirmAremxyMain } from "./ToConfirmAremxyMain";
import { Modal } from "../../../../Screens/Modal/Modal";
import pickPinIcon from '../../../../My Profile & Account Settings/ProfileImages/pickPinIcon.svg';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function ToAremxyMain() {
  const {
    showList,
    setShowList,
    selected,
    setSelected,
    isDarkMode,
    toggleSideBar,
    amtToTransfer,
    setAmtToTransfer,
    mainEmailUsername,
    mainUserPhoneNumber,
    mainCountry,
    setMainCountry,
    mainTransferErrors,
    handleMainInputChange,
    ProceedToMainTransfer,
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
    setMainCountry(name);
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
                <p className="text-[10px] font-extrabold lg:text-[14px]">
                  {" "}
                  {mainCountry}
                </p>
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
          {mainTransferErrors.country && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.country}
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
          {mainTransferErrors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.currency}
            </div>
          )}
        </div>
      </div>
      {/* ==========================Select/Add Recipient====================== */}
      <div className="flex gap-[10%] lg:gap-[3%]">
        <div className="w-full">
          <Link to="/aremxy-select-user">
          <div className="w-full flex items-center justify-between border text-[10px] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <p>Select User</p>
            <img
              className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
              src="./Images/otherBanksImages/weight.png"
              alt=""
            />
          </div>
          </Link>
        </div>
        <div className="w-full">
          <Link to="/aremxy-add-user">
          <div className="w-full flex items-center justify-between border text-[10px]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <p>Add User</p>
            <img
              className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
              src="./Images/otherBanksImages/add-square.png"
              alt=""
            />
          </div>
          </Link>
        </div>
       </div>

       {/* User details section */}
        <div className="">
            <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[5%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
                <p>User Details </p>
                <img
                  className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
            </div>

          <div className='flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]'>      
            <div className='relative'>
              <img src="/Images/transferImages/man-fold.png" className='h-[48px] w-[46.753px] rounded-[48px]
              lg:h-[150px] lg:w-[150px] 
              md:h-[88.801px]  md:w-[88.801px]
              md:rounded-[88.201px] lg:rounded-[150px]' alt="profilePic"/>
              <img  src={pickPinIcon}
              className='absolute bottom-0 right-0 h-[25px] w-[25px] 
              md:h-[25.82px] md:w-[25.82px] lg:h-[44px] lg:w-[44px]'  
              alt="" />
              </div>
              {/* Profile text */}
              <div className='flex flex-col justify-center gap-[3.52px] lg:gap-[12px]'>
              <p className='font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
              lg:text-[16px] lg:leading-[20.8px]'>
                Habib Kamaldeen
                </p>
              <p className='font-[500] text-[#7C7C7C] text-[10px] leading-[15px]
              md:text-[7.042px] md:leading-[9.154px]
              lg:text-[12px] lg:leading-[15.6px]'>
                habib@aremxyplug.com
                </p>
              </div>  
            </div>
        </div>

      <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
        {/* =====================Email or Username=================== */}

        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Email or Username
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleMainInputChange}
              name="emailUsername"
              value={mainEmailUsername}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="/Images/transferImages/frame.png"
              alt="dropdown"
            />
          </div>
          {mainTransferErrors.emailUsername && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.emailUsername}
            </div>
          )}
        </div>

        {/* ======================Phone Number================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
            Phone Number
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleMainInputChange}
              name="userPhoneNumber"
              maxLength="11"
              value={mainUserPhoneNumber}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="number"
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="/Images/transferImages/call.png"
              alt="dropdown"
            />
          </div>
          {mainTransferErrors.userPhoneNumber && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.userPhoneNumber}
            </div>
          )}
        </div>

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
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="/Images/transferImages/cycle.png"
              alt="dropdown"
            />
          </div>
          {mainTransferErrors.amtToTransfer && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.amtToTransfer}
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
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="/Images/transferImages/nigeria.png"
              alt="dropdown"
            />
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
        onClick={ProceedToMainTransfer}
        className={`${
          amtToTransfer.length < 4 ? "bg-[#0008]" : "bg-[#04177f]"
        } my-[5%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
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
      <ToConfirmAremxyMain />
    </div>
  );
}
