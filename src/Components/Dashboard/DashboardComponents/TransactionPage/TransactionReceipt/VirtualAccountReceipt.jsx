import React, { useState } from "react";
import { useContext, useRef } from "react";
import { RiFileCopyFill } from "react-icons/ri";
// import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import styles from "../../../DashboardComponents/TransferComponent/transfer.module.css";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { formatDate } from "./ElectricityReceipt";

export const VirtualAccountReceipt = () => {
  const navigate = useNavigate();
  const [showReceipt, setShowReceipt] = useState(true);
  const {
    toggleSideBar,
    textRef,
    isDarkMode,
    orderIdResponse,
    setOrderIdResponse,
  } = useContext(ContextProvider);

  const contentRef = useRef(null);

  const receiptData = orderIdResponse?.data
    ? orderIdResponse?.data?.data?.data
    : {};

  const bank_name =
    receiptData?.bank_name?.length > 0 ? receiptData?.bank_name : "";
  const amount = receiptData?.amount !== undefined ? receiptData?.amount : "";
  const amountToNumber = Number(amount);
  const account_name =
    receiptData?.account_name?.length > 0 ? receiptData?.account_name : "";
  const account_no =
    receiptData?.account_no?.length > 0 ? receiptData?.account_no : "";
  const order_id =
    receiptData?.order_id !== undefined ? receiptData?.order_id : "";
  const message = receiptData?.message?.length > 0 ? receiptData?.message : "";
  const description =
    receiptData?.transaction_description?.length > 0
      ? receiptData?.transaction_description
      : "";
  const transaction_id =
    receiptData?.transaction_id?.length > 0 ? receiptData?.transaction_id : "";
  const transaction_product =
    receiptData?.transaction_product?.length > 0
      ? receiptData?.transaction_product
      : "";
  const session_id =
    receiptData?.session_id?.length > 0 ? receiptData?.session_id : "";
  // ===============Copy to Clipboard Function============
  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  // ==============Share pdf Function=============
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Receipt",
          text: "Check out this receipt!",
          url: "https://example.com", // Replace with the actual URL of your receipt
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
      // Handle sharing fallback for unsupported browsers
    }
  };

  // ==============Save Pdf Function==============
  const handleSaveAsPDFClick = () => {
    const content = contentRef.current;
    if (content) {
      const pdf = new jsPDF();
      html2canvas(content).then((canvas) => {
        const bgPdf = pdf.setFillColor(
          isDarkMode ? 0 : 255,
          isDarkMode ? 0 : 255,
          isDarkMode ? 0 : 255
        );
        if (bgPdf) {
          const imgWidth = 190;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const imgData = canvas.toDataURL("");
          pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
          pdf.save(`${transaction_product}.pdf`);
          pdf.setTextColor(
            isDarkMode ? 0 : 255,
            isDarkMode ? 0 : 255,
            isDarkMode ? 0 : 255
          );
          pdf.text(`${transaction_product} Receipt`, 20, 20);
        }
      });
    }
  };

  function handleClick() {
    setOrderIdResponse({});
    setShowReceipt(false);
    navigate(-1);
    // navigate("/TransactionPage");
  }
  return (
    <DashBoardLayout>
      {showReceipt && (
        <div className="flex flex-col gap-[35px] lg:gap-[85px]">
          <div
            className={` ${styles.receipt} ${
              toggleSideBar ? "" : "lg:w-[880px] "
            } w-full lg:mx-auto  ${isDarkMode ? "border border-white" : ""}`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <div>
                <img
                  className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                  src="/Images/login/arpLogo.png"
                  alt=""
                />
              </div>
              <div onClick={handleClick}>
                {" "}
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] cursor-pointer"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div ref={contentRef}>
              {" "}
              <h3
                className="font-bold text-xs my-[2%] 
            text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]"
              >
                Transaction Receipt
              </h3>
              <div className="w-full flex justify-center ">
                <img
                  className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                  src="./Images/transferImages/receipt-background.png"
                  alt="/"
                />
              </div>
              <h3
                className={`font-medium text-xs  mt-[2%] text-center md:text-[20px] md:my-[7px] lg:text-base lg:my-[10px]
            ${isDarkMode ? "text-white" : "text-black"}
          `}
              >
                {["delivered", "successful", "success"].includes(
                  receiptData?.status.toLowerCase()
                )
                  ? "Transaction Successful on"
                  : receiptData?.status === "pending"
                  ? "Transaction Pending on"
                  : receiptData?.status === "refunded"
                  ? "Transaction Refunded on"
                  : receiptData?.status === "cancelled"
                  ? "Transaction Cancelled on"
                  : "Transaction Failed on"}
              </h3>
              <span
                className={`text-[11px] ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }
             font-medium flex justify-center items-center
            `}
              >
                {formatDate(receiptData?.created_at)}
              </span>
              <p
                className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px] lg:border lg:rounded-[11px] leading-[15px] md:leading-[20px] lg:p-2.5 text-center my-2 md:text-sm lg:text-base lg:leading-6 font-medium md:mb-7
             ${
               ["delivered", "successful", "success"].includes(
                 receiptData?.status.toLowerCase()
               )
                 ? "border-[#27AE60] text-[#27AE60] bg-[#D5F6E3]"
                 : receiptData?.status === "pending"
                 ? "bg-[#FFF1D6] text-[#F09E00] border-[#FFC24C]"
                 : receiptData?.status === "refunded"
                 ? "bg-[#A6D9FF] text-[#04177F] border-[#04177F]"
                 : receiptData?.status === "cancelled"
                 ? "bg-[#EFC6BE] text-[#E62E05] border-[#E62E05]"
                 : "bg-[#FDCECE] text-[#F95252] border-[#F93232]"
             }`}
              >
                {["delivered", "successful", "success"].includes(
                  receiptData?.status.toLowerCase()
                )
                  ? "You NGN Wallet has been Credited Successfully With "
                  : receiptData?.status === "pending"
                  ? "Your transaction is under process please wait while the system confirm."
                  : receiptData?.status === "refunded"
                  ? "Transaction was unsuccessful and your wallet has been refunded. Please try again."
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
                  : "Purchase Failed due to an unexpected error that occured. Please try again."}
              </p>
              <div className="flex flex-col gap-3">
                {/* ========================Recipient Info================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                  {/* ========================Recipient Info================== */}
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p
                      className={`text-[#0008]  ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Wallet Info
                    </p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div
                    className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between 
                 lg:text-base"
                  >
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Amount
                    </p>
                    <span
                      className={`capitalize ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {`${String(
                        amountToNumber.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          // minimumFractionDigits: 0,
                        })
                      )}`}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Wallet Type
                    </p>
                    <span
                      className={`capitalize ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Nigerian NGN Wallet
                    </span>
                  </div>
                </div>

                {/* ===================Sender Info==================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-2.5">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      Sender Info
                    </p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Bank Name
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {bank_name}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Account Name
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {account_name}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Account Number
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {account_no}
                    </span>
                  </div>
                </div>

                {/* ===================Transaction Info==================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-2.5">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      Transaction Info
                    </p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Product
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {transaction_product}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Description
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {description}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Message
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {message}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Order Number
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {order_id}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Transaction ID
                    </p>
                    <span
                      ref={textRef}
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {transaction_id}
                    </span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Session ID
                    </p>
                    <div className="flex items-center">
                      <span
                        ref={textRef}
                        className={` ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {session_id}
                      </span>
                      <div
                        onClick={handleCopyClick}
                        className="text-[#92abfec3] text-[13px] font-extrabold lg:text-base"
                      >
                        <RiFileCopyFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`bg-[#F2FAFF] w-[90%] mx-auto p-[8px] my-5 flex justify-between items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}
              >
                <p
                  className={`text-[10px] leading-[13px] text-center
             md:text-sm md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Earn free points on every successful transactions, redeem your
                  earned points to real money, withdrawn to your bank account
                  instantly.
                </p>
              </div>
            </div>

            <div className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] ">
              <button
                onClick={() => {
                  handleShareClick();
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Share Receipt
              </button>
              <button
                onClick={() => {
                  handleSaveAsPDFClick();
                }}
                className={`bg-[#ffffff]   border-[1px] w-[111px] border-[#0003] flex justify-center items-center 
                mx-auto cursor-pointer text-xs font-extrabold  ${
                  isDarkMode
                    ? " bg-black border-1 border-white"
                    : " bg-[#ffffff]"
                }
                h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Save as PDF
              </button>
            </div>
          </div>
          <div
            className={`${
              isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[20px] mt-[120px] mb-[50px] lg:mt-11`}
          >
            <div className="text-[10px] md:text-xs lg:text-base">
              You need help ?
            </div>
            <Link to="/ContactUs">
              <div
                className={`${isDarkMode ? "" : "bg-[#04177f]"} ${
                  styles.contactus
                } text-[8px] p-1 text-white rounded-[8px] lg:text-[14px]`}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      )}
    </DashBoardLayout>
  );
};
