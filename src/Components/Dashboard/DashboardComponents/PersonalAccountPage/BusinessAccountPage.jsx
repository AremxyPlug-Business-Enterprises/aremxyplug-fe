import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import styles from "../TransferComponent/transfer.module.css";
import { Link } from "react-router-dom";
import { ConfirmTransactionPopUp } from "../TransferComponent/PopUps/ConfirmTransactionPopUp";
import { TransactSuccesfulPopUp } from "../TransferComponent/PopUps/TransactSuccesfulPopUp";
import { TransferMoneyToAccountPopUp } from "../TransferComponent/PopUps/TransferMoneyToAccountPopUp";
import { DeleteAccountPopUp } from "../TransferComponent/PopUps/DeleteAccountPopUp";
import { DeleteSuccessfulPopUp } from "../TransferComponent/PopUps/DeleteSuccessfulPopUp";
import { InputPinPopUp } from "../TransferComponent/PopUps/InputPinPopUp";

export const BusinessAccountPage = () => {
  const {
    isDarkMode,
    image,
    code,
    toggleSideBar,
    amtToTransfer,
    setTfPopUp,
    setDeletePopUp,
  } = useContext(ContextProvider);

  console.log(amtToTransfer);

  return (
    <DashBoardLayout>
      <div
        className={`${
          toggleSideBar ? "lg:mt-[1%]" : "lg:mt-[4%]"
        } flex flex-col justify-between md:mt-[-4%]`}
      >
        <div>
          {" "}
          <img
            className=" w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
            src="/Images/dashboardImages/ToMyAccount.png"
            alt="/"
          />
          <div className="flex my-[5%] gap-11 font-extrabold md:w-[80%]">
            <button
              onClick={() => setTfPopUp(true)}
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center md:w-[390px] lg:h-[41px]`}
            >
              <h2 className="text-[9px] md:text-[12px] lg:text-[16px] ">
                Transfer Money To Account
              </h2>
              <img
                className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="/Images/dashboardImages/transfer-money.png"
                alt=""
              />
            </button>

            <button
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center md:w-[390px] lg:h-[41px]`}
            >
              <h2 className="text-[9px] md:text-[12px] lg:text-[16px]">
                Add Money To Wallet
              </h2>
              <img
                className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="/Images/dashboardImages/add-money.png"
                alt=""
              />
            </button>
          </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center mb-[2%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>Account Details : </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          {/* ==================Account Details============================ */}
          <div className={`${styles.detailsBox}`}>
            {/* ======================COUNTRY================== */}
            <div
              className={`${styles.boxes} h-[60px] w-full flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Country
                </p>
                <p className="text-[10px] md:text-[15px]">Nigeria</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src={image}
                alt="/"
              />
            </div>

            {/* ===================CURRENCY==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] px-[3%] gap-[5px] flex flex-col justify-center md:h-[90px] md:gap-[10px]`}
            >
              <p className="text-[13px] font-extrabold md:text-[20px]">
                Currency
              </p>
              <p className="text-[10px] md:text-[15px]">{code}</p>
            </div>

            {/* ===================EMAIL ADDRESS================= */}
            <div
              className={`${styles.boxes} ${styles.boxes3} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px] md:gap-[10px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Company's Email
                </p>
                <p className="text-[10px] md:text-[15px]">hello@aremxyplug.com</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/email-address.png"
                alt="/"
              />
            </div>

            {/* =====================HOME ADDRESS==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px] lg:w-[]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Company's Address
                </p>
                <p className="text-[10px] md:text-[15px]">
                  AC 123 AremxyPlug Street
                </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/home-address.png"
                alt="/"
              />
            </div>

            {/* =====================ACCOUNT NUMBER/IBAN=============== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between px-[3%] items-center md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Account Number/IBAN
                </p>
                <p className="text-[10px] md:text-[15px]">0123456789</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/iban.png"
                alt="/"
              />
            </div>

            {/* ====================ACCOUNT NAME====================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Company's Name
                </p>
                <p className="text-[10px] md:text-[15px]">Aremxyplug Business Ent, LTD.</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/account-name.png"
                alt="/"
              />
            </div>

            {/* =========================SWIFT CODE==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[3px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Swift Code/Sort Code/ Routine Number
                </p>
                <p className="text-[10px] md:text-[13px]">AREMXYYYY</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/barcode.png"
                alt="/"
              />
            </div>

            {/* =====================BANK NAME======================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Bank Name
                </p>
                <p className="text-[10px] md:text-[15px]">GT Bank</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/bank-name.png"
                alt="/"
              />
            </div>

            {/* ====================BENEFICIARY ADDRESS=============== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Beneficiary Address
                </p>
                <p className="text-[10px] md:text-[15px]">
                  AC 123 AremxyPlug Street, Nigeria
                </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/beneficiary-address.png"
                alt="/"
              />
            </div>

            {/* ========================BENEFICIARY CITY================== */}
            <div
              className={`${styles.boxes}  w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Beneficiary City
                </p>
                <p className="text-[10px] md:text-[15px]">Kaduna City</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/beneficiary.png"
                alt="/"
              />
            </div>

            {/* =====================STATE OR PROVINCE=================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  State or Province
                </p>
                <p className="text-[10px] md:text-[15px]">Kaduna City</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/direct-notification.png"
                alt="/"
              />
            </div>

            {/* ======================ZIP CODE===================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px] ">
                  ZIP / Postcode
                </p>
                <p className="text-[10px] md:text-[15px]">235642</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:h-[24px] md:w-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/zip.png"
                alt="/"
              />
            </div>

            {/* ====================REFERENCE NUMBER================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[88px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Reference Number
                </p>
                <p className="text-[10px] md:text-[15px]">AP-20230703-001 </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:h-[40px] md:w-[40px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/reference.png"
                alt="/"
              />
            </div>
          </div>
          {/* ===================EDIT ACCOUNT AND DELETE BUTTON================== */}
          <div className="flex gap-8 my-[9%]  lg:gap-1 lg:w-[54%]">
            <button className="cursor-pointer text-[12px] font-extrabold h-[45px] bg-[#04177f] text-white w-full rounded-[6px] md:rounded-[8px] md:text-[20px]">
              Edit Account Details
            </button>
            <button
              onClick={() => setDeletePopUp(true)}
              className="cursor-pointer text-[#F95252] text-[14px] w-full rounded-[6px] font-extrabold md:text-[20px] lg:text-[20px]"
            >
              Delete Account
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center `}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "" : "bg-[#04177f]"} ${
                styles.contactus
              } text-[8px] p-1 text-white rounded-[8px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>

        {/* ====================POP UPS=================== */}

        {/* =============Transfer Money To Account pop up========= */}
        <TransferMoneyToAccountPopUp />

        {/* =============Confirm Transaction popup================ */}
        <ConfirmTransactionPopUp />

        {/* =============Transaction Successful PopUp============= */}
        <TransactSuccesfulPopUp />

        {/* =============Delete Account PopUp===================== */}
        <DeleteAccountPopUp />

        {/* =============Delete Successful PopUp================== */}
        <DeleteSuccessfulPopUp />

        {/* =============Input Pin PopUp========================== */}
        <InputPinPopUp />
      </div>
    </DashBoardLayout>
  );
};
