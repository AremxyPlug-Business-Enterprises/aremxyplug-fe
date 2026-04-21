import React, { useState } from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { formatDate } from "./ElectricityReceipt";

export const TransferReceipt = () => {
  const navigate = useNavigate();
  const {
    toggleSideBar,
    isDarkMode,
    // transferResponse,
    orderIdResponse,
    setOrderIdResponse,
  } = useContext(ContextProvider);

  const receiptData = orderIdResponse?.data
    ? orderIdResponse?.data?.data?.data
    : {};

  const amount = receiptData?.amount !== undefined ? receiptData?.amount : "";
  const username =
    receiptData?.username?.length > 0 ? receiptData?.username : "";
  const full_name =
    receiptData?.customer_name?.length > 0 ? receiptData?.customer_name : "";
  const email = receiptData?.email?.length > 0 ? receiptData?.email : "";
  const phone = receiptData?.phone?.length > 0 ? receiptData?.phone : "";
  const message = receiptData?.message?.length > 0 ? receiptData?.message : "";
  const order_id = receiptData?.order_id ? receiptData?.order_id : "";
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
  const customer_name =
    receiptData?.full_name?.length > 0 ? receiptData?.full_name : "";
  // const session_id =
  //   receiptData?.session_id?.length > 0 ? receiptData?.session_id : "";

  const [showReceipt, setShowReceipt] = useState(true);

  function handleClick() {
    setOrderIdResponse({});
    setShowReceipt(false);
    navigate(-1);
    // navigate("/TransactionPage");
  }

  const contentRef = useRef(null);
  const amountNumeric = Number(amount);
  // ===============Copy to Clipboard Function============
  // const handleCopyClick = () => {
  //   const text = textRef.current.innerText;
  //   navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       alert("Copied to clipboard");
  //     })
  //     .catch((err) => {
  //       console.error("Error copying text: ", err);
  //     });
  // };

  // ==============Share pdf Function=============
  const handleShareClick = async() => {
      const content = contentRef.current;
      if(!content) return alert("Receipt not recorded")
      if(content){
        try {
       const pdf = new jsPDF("p", "mm", "a4");
     //  alert(pdf.internal?.pageSize.getHeight())
        const canvas = await html2canvas(content,
           {scale : 2,
             useCORS : true,
             backgroundColor : `${isDarkMode ? "#000" : "#fff"}`
          }
            )
           
        const bgPdf = pdf.setFillColor(isDarkMode ? 0 : 255, isDarkMode ? 0 : 255, isDarkMode ? 0 : 255 )
        if(bgPdf){
          const pageHeight = pdf.internal.pageSize.getHeight();
          const pageWidth = pdf.internal.pageSize.getWidth();
          const imgWidth = pageWidth;
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          pdf.addImage(imgData, 
            "jpeg",0, 0, imgWidth, pageHeight, undefined, "FAST");
    }
       const pdfBlob = pdf.output("blob");
      const file = new File([pdfBlob], "AremxyPlug_Receipt.pdf", {type : "application/pdf"})
      if (navigator.canShare && navigator.canShare({files : [file]})) {
        navigator
          .share({
            title: "AremxyPlug_Transfer_Receipt",
            files : [file], 
          })
          .then(() => {return;})
          .catch((error) => {return;});
      }else{
      alert("Sharing this pdf isn't supported in your browser.")
      }
    }catch(error){
     alert(error)
    }
      }
    };
  

  // ==============Save Pdf Function==============
  const handleSaveAsPDFClick = () => {
    const content = contentRef.current;
    if (content) {
      const pdf = new jsPDF();
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save(`${transaction_product} Receipt.pdf`);
      });
    }
  };
  return (
    <DashBoardLayout>
      {showReceipt && (
        <div className="flex flex-col gap-[35px] lg:gap-[85px]">
          <div
            className={` ${styles.receipt} ${
              toggleSideBar ? "" : "lg:w-[880px] "
            } w-full lg:mx-auto ${isDarkMode ? "border border-white" : ""}`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <div>
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                  src="/Images/login/arpLogo.png"
                  alt=""
                />
              </div>
              <div onClick={handleClick}>
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div ref={contentRef}>
              {" "}
              <h3 className="font-extrabold text-xs my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]">
                Transaction Receipt
              </h3>
              <div className="w-full flex justify-center">
                <img
                  className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                  src="./Images/transferImages/receipt-background.jpeg"
                  alt="/"
                />
              </div>
              <h3 className="font-extrabold text-xs mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]">
                {["delivered", "successful", "success"].includes(
                  receiptData?.status
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
                className={`text-[11px] font-medium flex justify-center items-center ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }`}
              >
                {formatDate(receiptData?.created_at)}
              </span>
              <p
                className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px] lg:border lg:rounded-[11px] leading-[15px] md:leading-[20px] lg:p-2.5 text-center my-2 md:text-sm lg:text-base lg:leading-6 font-medium md:mb-7
             ${
               ["delivered", "successful", "success"].includes(
                 receiptData?.status
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
                  receiptData?.status
                )
                  ? "You have successfully transferred "
                  : receiptData?.status === "pending"
                  ? "Your transaction is under process please wait while the system confirm."
                  : receiptData?.status === "refunded"
                  ? "Transaction was unsuccessful and your wallet has been refunded. Please try again."
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
                  : "Purchase Failed due to an unexpected error that occured. Please try again."}{" "}
                {["delivered", "successful", "success"].includes(
                  receiptData?.status.toLowerCase()
                ) && (
                  <span className="">
                    <span className=" font-extrabold text-[10.9px] md:text-[14.9px] lg:text-[16.9px]">
                      (
                      {amountNumeric !== undefined || amountNumeric !== null
                        ? amountNumeric?.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          })
                        : "₦"}
                      ){" "}
                    </span>
                    from your NGN wallet to{" "}
                  </span>
                )}
              </p>
              <div className="flex flex-col gap-3">
                {/* ========================Recipient Info================== */}
                <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                    <p>User Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Username or Email
                    </p>
                    <span>{username || email}</span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Recipient Name
                    </p>
                    <span>{full_name}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] font-medium mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Phone Number
                    </p>
                    <span>{phone}</span>
                  </div>
                </div>

                {/* ===================Sender Info====================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-2.5">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                    <p>Sender Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Customer Name
                    </p>
                    <span>{customer_name}</span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Wallet Type
                    </p>
                    <span>Nigerian NGN Wallet</span>
                  </div>
                </div>

                {/* ===================Transaction Info==================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-2.5">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                    <p>Transaction Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto font-medium justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Product
                    </p>
                    <span>{transaction_product}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto font-medium justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Description
                    </p>
                    <span>{description}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto font-medium justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Message
                    </p>
                    <span className="capitalize">{message === "" || message === null ? "NIL" : message}</span>
                  </div>
                  <div className="flex text-[10px] font-medium md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Order Number
                    </p>
                    <span>{order_id}</span>
                  </div>
                  <div className="flex font-medium text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Transaction ID
                    </p>
                    <span>{transaction_id}</span>
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
               className={` border-[1px] w-[111px]
                   border-[#0003] flex justify-center 
                   items-center  cursor-pointer text-[12px]
                    font-extrabold h-[40px] rounded-[6px] 
                    md:w-[25%] md:rounded-[8px] md:text-base
                     lg:w-[163px] lg:h-[38px] lg:my-[2%]
                     ${isDarkMode ? "bg-black border-[0.2px] text-white border-[#04177f]" : "text-black bg-white border-[0.2px] border-black"}`}
              >
                Save as PDF
              </button>
            </div>
          </div>
          <div
            className={`${
              isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[%]`}
          >
            <div className="text-[10px] md:text-xs lg:text-base">
              You need help ?
            </div>
            <Link to="/ContactUs">
              <div
                className={`${isDarkMode ? "bg-[#04177f]" : "bg-[#04177f]"} 
                  text-[8px] p-1 text-white rounded-[8px] 
                  lg:p-[10%] lg:text-sm`}
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
