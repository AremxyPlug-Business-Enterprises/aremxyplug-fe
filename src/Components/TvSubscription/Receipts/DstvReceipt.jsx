import React from "react";
import { useContext, useRef } from "react";
import { RiFileCopyFill } from "react-icons/ri";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ContextProvider } from "../../Context";
import { useNavigate } from "react-router-dom";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";


export const DstvReceipt= (Data) => {
  Data = GetLocalStorage();
  const navigate = useNavigate()
  const { toggleSideBar, textRef,
    dstvFlagResult,
    selectedOptionDstv,
    dstvEmail,
    dstvMobileNumber,
    dstvSmartCard,
    dstvTransactionId,
    dstvOrderId,
    dstvDescription,
   dstvCardName,
    isDarkMode, 
    dstvAmount,
    date,
   setDstvEmail,
   setDstvMobileNumber,
   setDstvSmartCard,
   setDstvAmount,
   setDstvOrderId,
   setDstvDescription,
   setDstvTransactionId,
   setSelectedOptionDstv,
   setPackageDstv,
   setDstvDecoderType,
    setDstvFlagResult,
    setDstvCardName,
    setDstvWalletBalance,
    dstvSubscriptionResponse,
    purchaseDstvErrorType, 
  } =
    useContext(ContextProvider);

  const contentRef = useRef(null);

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
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("DsTvSubscription.pdf");
      });
    }
  };
  // const getNumericValue = (option) => {
  //   const numericPart = option.match(/\d+/);
  //   if (numericPart) {
  //     return formatNumberWithCommas(parseInt(numericPart[0], numericPart[2], 10));
  //   }
  //   return '';
  // };

   const DstvOrderInfo = (dstvOrderId !== undefined || dstvOrderId?.length > 1) ? dstvOrderId : "";
  const DstvTransactionInfo = (dstvTransactionId?.length > 1 || dstvTransactionId !== undefined )  ? dstvTransactionId : "";
  const DstvDescriptionInfo = (dstvDescription?.length > 1 || dstvDescription !== undefined) ? dstvDescription : "";

  const ExitTheReceipt = ()=> {
      setDstvEmail("")
   setDstvMobileNumber("")
   setDstvSmartCard("");
   setDstvCardName("")
   setDstvAmount("");
   setDstvOrderId("");
   setDstvDescription("")
   setDstvTransactionId("");
   setSelectedOptionDstv("");
   setPackageDstv("");
   setDstvDecoderType("")
    setDstvFlagResult("");
    setDstvWalletBalance("");
    navigate("/DsTv");
  }
 // console.log(dstvCardName)
  // if(selectedOptionDstv === "" ||
  //   formatNumberWithCommas ==="" ||
  //   dstvEmail === "" ||
  //   dstvMobileNumber === "" ||
  //   dstvSmartCard === "" ||
  //   dstvTransactionId === "" ||
  //   dstvOrderId === "" ||
  //   dstvDescription === "" ||
  //   cardName){
  //      window.location.replace("/DsTv");
  //      alert("Check your dashborad for your transactions or transaction page for all your transactions.")
  //   }

  return (
    <DashBoardLayout>
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
        <div
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto ${isDarkMode ? "border border-white" : ""}`}
        >
          <div className="flex justify-between items-center 
          mx-[3%] my-[2%] lg:my-[1%]">
            <div>
              <img
                className=" w-[15px] h-[10px] md:w-[24px] 
                md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </div>
            <div onClick = {()=> ExitTheReceipt()}>
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] 
                md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>
            {" "}
            <h3 className={`font-extrabold text-[12px] my-[2%] text-center
             md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]
              ${isDarkMode ? "text-white" : "text-black"}`}>
              Transaction Receipt
            </h3>
            <div className="w-full flex justify-center">
              <img
                className="absolute w-[250px] h-[450px] md:w-[70%] 
                lg:w-[50%] lg:h-[550px]"
                src="./Images/transferImages/receipt-background.png"
                alt="/"
              />
            </div>
            <h3 className={`font-extrabold text-[12px]  mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-[16px] lg:my-[10px]
            ${isDarkMode ? "text-white" : "text-black"}
          `}>
             {dstvSubscriptionResponse?.data?.status === "delivered" ?  "Purchase Successful on" : "Purchase Failed on"}
            </h3>
            <span className={`text-[11px] ${isDarkMode ? "text-white" : "text-black"}
             font-extrabold flex justify-center items-center
            `}>
              {date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })}
            </span>
            <p className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px]
                 md:border-[0.578px] md:rounded-[6.455px]  lg:border-[1px] lg:rounded-[11px]
                   leading-[15px] md:leading-[20px] font-[600]
                    lg:p-[10px] text-center my-2 md:text-sm
                    lg:text-base  lg:leading-[24px]  md:mb-7
             ${dstvSubscriptionResponse?.data?.status === "delivered" ? "border-[#27AE60] text-[#27AE60] bg-[#D5F6E3]" :  'border-red-500 text-red-500 bg-red-100' }`}>
             {dstvSubscriptionResponse?.data?.status === "delivered" ?  "You have successfully subscribed to " : purchaseDstvErrorType}
              <span className="font-extrabold text-[10.9px] md:text-[14.9px] 
              lg:text-[16.9px]">
                {" "}{selectedOptionDstv}{" "}
              </span>
              from your{" "}
              <span>{dstvFlagResult}</span>{" "} to
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p className= {`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] font-[500] md:text-[14px] w-[90%]
                 mx-auto justify-between 
                 lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}
                 >Decoder Type</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>Dstv</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] font-[500] w-[90%] 
                mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Package</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{selectedOptionDstv}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px]
                 w-[90%] mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Smartcard / IUC Number</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{dstvSmartCard}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] font-[500] w-[90%] 
                mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Card Name</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{dstvCardName}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] font-[500] w-[90%] 
                mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{dstvMobileNumber}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Email</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{dstvEmail}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Amount</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{`${dstvAmount !== "" ? dstvAmount?.toLocaleString("en-NG", {
                    style : "currency",
                    currency : "NGN"

                  }) : "₦"}`}</span>
                </div>
              </div>

              

              {/* ===================Sender Info==================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p className= {`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Customer Name</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{Data?.aremxyUsername ? Data?.aremxyUsername : ""}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between
                  lg:text-[16px] font-[500]">
              <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Wallet Type</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{dstvFlagResult}</span>
                </div>
                
              </div>

              
              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p classname= {`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] font-[500] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Product</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>TV Subscriptions</span>
                </div>
                <div className="flex text-[10px] font-[500] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Description</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{DstvDescriptionInfo}</span>
                </div>
                <div className="flex text-[10px] font-[500] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Order Number</p>
                  <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{DstvOrderInfo}</span>
                </div>
                <div className="flex text-[10px] font-[500] md:text-[14px] w-[90%] mx-auto justify-between 
                items-center lg:text-[16px]">
                  <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transaction ID</p>
                  <div className={`flex items-center ${isDarkMode ? "text-white" : "text-black"}`}>
                    <span ref={textRef}>
                    {DstvTransactionInfo}
                    </span>
                    <div
                      onClick={handleCopyClick}
                      className="text-[#92abfec3] text-[13px] font-extrabold lg:text-[16px]"
                    >
                      <RiFileCopyFill />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
              <p  className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
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
              className={`bg-[#04177f] w-[111px] flex justify-center
                 ${isDarkMode ? "text-white" : "text-black"}
                 items-center mx-auto cursor-pointer text-[12px] font-extrabold
                  h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                handleSaveAsPDFClick();
              }}
              className={`bg-[#ffffff]   border-[1px] w-[111px] border-[#0003] flex justify-center items-center 
                mx-auto cursor-pointer text-[12px] font-extrabold  ${isDarkMode ? " bg-black border-1 border-white" : " bg-[#ffffff]"}
                h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
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
          <div className="text-[10px] md:text-[12px] lg:text-[16px]">
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
    </DashBoardLayout>
  );
};
