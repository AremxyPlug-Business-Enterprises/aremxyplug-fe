import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import styled from "../../../../AirTimePage/AirTime.module.css";
import { ToConfirmAremxyMain } from "./ToConfirmAremxyMain";
import { Modal } from "../../../../Screens/Modal/Modal";
import pickPinIcon from "../../../../My Profile & Account Settings/ProfileImages/pickPinIcon.svg";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function ToAremxyMain() {
  const {
    showList,
    setShowList,
    selected,
    setSelected,
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
    <div className="flex flex-col gap-[20px] lg:gap-x-[40px] w-full ">
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        {/* =====================Country========================= */}
        {/* <div className={styles.inputBox}> */}
        <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-[5.868px] relative">
          {/* <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"> */}
          <p
            className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]"
          >
            Select Country
          </p>
          <div
            onClick={() => setShowList(!showList)}
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
            className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] pr-1 lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] "
          >
            {selected ? (
              <div className="flex gap-[7px] items-center">
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
                <p className="text-[10px] font-extrabold lg:text-[14px]">
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
                  ? "lg:w-full lg:top-[100.5%]"
                  : "lg:w-full lg:top-[105.3%]"
              }  ${
                styles.countryDropDown
              } rounded-b-[7px] shadow-xl bg-[#fff] border lg:rounded-b-[14px] absolute left-0 top-[3.5rem] lg:top-1 z-[3] w-full `}
            >
              {countryList.map((country) => (
                <div
                  className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px] md:text-[14px] lg:text-[16px] "
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
        {/* <div className={styles.inputBox}> */}
        <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
          
          <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
            className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]"
          >
            Select Currency
          </p>
          <div
            // className="border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[14px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
            className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] pr-1 lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] h-full "
          >
            {selected ? (
              <div className="flex items-center gap-[7px]">
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
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        <div className="w-full">
          <Link to="/aremxy-select-user">
            <div className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] pr-1 lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]">
              <p className="">Select User</p>
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
            <div className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] pr-1 lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] ">
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
            className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]"
            src="./Images/dashboardImages/arrowright.png"
            alt="/"
          />
        </div>

        <div className="flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]">
          <div className="relative">
            <img
              src="/Images/transferImages/man-fold.png"
              className="h-[48px] w-[46.753px] rounded-[48px]
              lg:h-[150px] lg:w-[150px] 
              md:h-[88.801px]  md:w-[88.801px]
              md:rounded-[88.201px] lg:rounded-[150px] z-[2] "
              alt="profilePic"
            />
            <img
              src={pickPinIcon}
              className="absolute bottom-0 right-0 h-[25px] w-[25px] 
              md:h-[25.82px] md:w-[25.82px] lg:h-[44px] lg:w-[44px]"
              alt=""
            />
          </div>
          {/* Profile text */}
          <div className="flex flex-col justify-center gap-[3.52px] lg:gap-[12px]">
            <p
              className="font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
              lg:text-[16px] lg:leading-[20.8px]"
            >
              Habib Kamaldeen
            </p>
            <p
              className="font-[500] text-[#7C7C7C] text-[10px] leading-[15px]
              md:text-[7.042px] md:leading-[9.154px]
              lg:text-[12px] lg:leading-[15.6px]"
            >
              habib@aremxyplug.com
            </p>
          </div>
        </div>
      </div>

        {/* <div className={` ${styles.inputBox}`}> 
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        *
      */}

      <div className='flex flex-col lg:gap-[25px] gap-[20px]  w-[100%] mb-[50px]'>
      <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-full">
        <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
          <p className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]">
            Email or Username
          </p>
            <div
    //           className="h-[25px] flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px]
    // md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
              // text-[8px] leading-[10.4px] border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] rounded-[10px]"
              className='flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]'
            >
            <input
              onChange={handleMainInputChange}
              name="emailUsername"
              value={mainEmailUsername}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px] "
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
        {/* <div className={styles.inputBox}> */}
        <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
          <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
            className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]"
          >
            Phone Number
          </p>
          <div
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
            className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]"
          >
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
          </div>

        {/* =========================Amount To Transfer==================== */}
        
        <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%] ">
            <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px] ">
            <p className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]">
          {/* <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]"> */}
            Amount To Transfer
          </p>
          <div className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]">
            <span className="text-gray-500">&#8358;</span>
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
           
            <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
          <p className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]">
            Available Balance
          </p>
          <div className="flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]">
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
        
       </div>

        {/* =============================Message======================= */}
        <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px] ">
          <p
            // className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]"
            className="font-[600] text-[#7E7E7E] text-[8px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px]"
          >
            Message
          </p>
          <textarea
            placeholder="Optional"
            className="outline-none h-[80px] flex flex-col justify-between p-[1%] md:h-[100px] md:text-[14px] md:rounded-[8px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md lg:h-[120px] "
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
          amtToTransfer.length < 3 ? "bg-[#0008]" : "bg-[#04177f]"
        } my-[5%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
      >
        Proceed
      </button>
      {currencyAvailable && (
        <Modal>
          <div className={styled.NotInterX}>
            <div className={styled.timeAbleK}>
              <h3>This Currency is Currently Not Available.</h3>
            </div>
            <div className={styled.InterAirtimeX}>
              <img
                src="/Images/addAccountImages/account-unavailable.png"
                alt=""
              />
            </div>
            <div className={styled.comingX}>
              <h2>Coming soon...</h2>
              <button className={styled.btnOkX} onClick={refresh}>
                Okay
              </button>
            </div>
          </div>
        </Modal>
      )}
      <ToConfirmAremxyMain />
    </div>
  );
}
