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


export const GotvReceipt = (Data) => {
  const navigate = useNavigate();
  Data = GetLocalStorage()
  const { toggleSideBar, textRef,
    flagResult,
    selectedOptionGOTV,
   // formatNumberWithCommas,
   setTvEmail,
   setMobileNumber,
   setSmartCard,
   setTvAmount,
   setGotvOrderId,
   setGotvDescription,
   setGotvTransactionId,
   setSelectedOptionGOTV,
   setPackageGotv,
   setDecoderType,
    tvEmail,
    tvAmount,
    mobileNumber,
    smartCard,
    cardName,
    isDarkMode, date,
     gotvOrderId,
    gotvTransactionId,
   // gotvRequestId,
    gotvDescription,
    setFlagResult,
    setTvWalletBalance,
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
        pdf.save("GoTvSubscription.pdf");
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

  const GotvOrderInfo = (gotvOrderId !== undefined || gotvOrderId?.length > 1) ? gotvOrderId : "";
  const GotvTransactionInfo = (gotvTransactionId?.length > 1 || gotvTransactionId !== undefined )  ? gotvTransactionId : "";
  const GotvDescriptionInfo = (gotvDescription?.length > 1 || gotvDescription !== undefined) ? gotvDescription : "";

  const ExitTheReceipt = ()=> {
      setTvEmail("")
   setMobileNumber("")
   setSmartCard("");
   setTvAmount("");
   setGotvOrderId("");
   setGotvDescription("")
   setGotvTransactionId("");
   setSelectedOptionGOTV("");
   setPackageGotv("");
   setDecoderType("")
    setFlagResult("");
    setTvWalletBalance("");
   navigate("/GoTv");
  }

//console.log(tvSubscriptionResponse);
  return (
    <DashBoardLayout>
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
        <div
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto  ${isDarkMode ? "border border-white" : ""}` } 
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <div>
              <img
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </div>
            <div
            onClick = {()=> ExitTheReceipt()}
           >
              {" "}
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
            <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
              Transaction Receipt
            </h3>
            <div className="w-full flex justify-center ">
              <img
                className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                src="./Images/transferImages/receipt-background.png"
                alt="/"
              />
            </div>
            <h3 className="font-extrabold text-[12px] mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-[16px] lg:my-[10px]">
            Purchase Successful on
            </h3>
            <span className={`text-[11px] font-extrabold flex justify-center items-center   ${isDarkMode ? "text-white": "text-[#0008]"}`}>
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
            <p className={`pt-2 md:pt-4 text-[9px] text-[#0008] font-bold text-center
             my-2 md:text-[14px] lg:text-[14px] ${isDarkMode ? "text-white": "text-black"}`}>
            You have successfully subscribed {" "}
              <span className=" text-[10px] md:text-[16px] lg:text-[16px]">
                {selectedOptionGOTV}{" "}
              </span>
              from your
              <span>{flagResult}</span>
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p className={` ${isDarkMode ? "text-white": "text-black"}`}>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white": "text-black"}`}>Decoder Type</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>GOtv</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Package</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{selectedOptionGOTV}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Smartcard / IUC Number</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{smartCard}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Card Name</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{cardName}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Phone</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{mobileNumber}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Email</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{tvEmail}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white": "text-black"}`}>Amount</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{`₦${tvAmount}`}</span>
                </div>
              </div>

              

              {/* ===================Sender Info==================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white": "text-black"}`}>Customer Name</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{Data?.aremxyUsername ? Data.aremxyUsername : ""}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white": "text-black"}`}>Wallet Type</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{flagResult}</span>
                </div>
                
              </div>

              
              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Product</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>TV Subscriptions</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Description</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{GotvDescriptionInfo}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Order Number</p>
                  <span  className={` ${isDarkMode ? "text-white": "text-black"}`}>{GotvOrderInfo}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between items-center lg:text-[16px]">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Transaction ID</p>
                  <div className="flex items-center">
                    <span ref={textRef}  className={` ${isDarkMode ? "text-white": "text-black"}`}>
                      {GotvTransactionInfo}
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
            <div className="rounded-[8px]  bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-black text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
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
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
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
