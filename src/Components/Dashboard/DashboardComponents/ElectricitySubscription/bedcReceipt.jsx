import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo2 from "../ElectricitySubscription/Electricity-sub-images/BEDC-Logo-new-dark-1 1.svg";
// import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const BedcReceipt = () => {
  const {
    toggleSideBar,
    isDarkMode,
    date,
    bedcVerifiedName,
    setBedcVerifiedName,
    setSelectedBedcMeterType,
    bedcMeterNumber,
    setBedcMeterNumber,
    bedcPhoneNumber,
    setBedcPhoneNumber,
    bedcEmail,
    setBedcEmail,
    bedcAmount,
    setBedcAmount,
    setGlobalCountry,
    setBedcFlag,
    selectedBedcMeterType,
    // bedcServiceID,
    bedcDiscoType,
    bedcOrderId,
    bedcTransactionId,
    bedcShowDescription,
    bedcBillGenerate,
  } = useContext(ContextProvider);

  const navigate = useNavigate();
  // const location = useLocation();
  // const { selectedNetworkProduct, meterNumber, phoneNumber, ikedcEmail, ikedcamount, serviceID, orderId, transactionId, showDescription, billGenerate  } = location.state

  const networkProduct =
    selectedBedcMeterType?.length > 0 ? selectedBedcMeterType : "";
  const meterNo = bedcMeterNumber?.length > 0 ? bedcMeterNumber : "";
  const verifiedName = bedcVerifiedName?.length > 0 ? bedcVerifiedName : "";
  const phoneNo = bedcPhoneNumber?.length > 0 ? bedcPhoneNumber : "";
  const productEmail = bedcEmail?.length > 0 ? bedcEmail : "";
  const productAmount = bedcAmount?.length > 0 ? bedcAmount : "";
  const disco_type = bedcDiscoType?.length > 0 ? bedcDiscoType : "";
  const order_id = bedcOrderId === undefined ? "" : bedcOrderId;
  const transaction_id = bedcTransactionId?.length > 0 ? bedcTransactionId : "";
  const description =
    bedcShowDescription?.length > 0 ? bedcShowDescription : "";
  const bill_generated = bedcBillGenerate?.length > 0 ? bedcBillGenerate : "";

  function handleClick() {
    setSelectedBedcMeterType("");
    setBedcMeterNumber("");
    setBedcVerifiedName("");
    setBedcPhoneNumber("");
    setBedcEmail("");
    setBedcAmount("");
    setGlobalCountry("");
    setBedcFlag("");
    navigate("/electricity-subscription");
  }

  const contentRef = useRef(null);

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
        pdf.save("page.pdf");
      });
    }
  };
  return (
    <DashBoardLayout>
      <div className={`flex flex-col gap-[35px] lg:gap-[85px] ${isDarkMode ? "border border-white rounded-md":""}`}>
        <div
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } ${isDarkMode? "bg-black text-white border border-white": "bg-white"} w-full lg:mx-auto`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <div onClick={handleClick}>
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
            <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
              Purchase Successful on
            </h3>
            <span className={`text-[8px] md:text-[12px] pt-1 font-extrabold flex justify-center items-center ${
                isDarkMode ? "text-white" : "text-[#0008]"
              }`}>
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
            <p className={`text-[9px] text-[#27AE60] bg-[#D5F6E3] rounded-[11px] border-2 border-[#27AE60] py-[5px] px-[2px] text-center mx-[5px] lg:mx-[150px] md:mx-[100px] my-2 md:text-[14px] lg:text-[14px] `}>
              {/* ${isDarkMode ? "bg-black":""} */}
              You have successfully purchased{" "}
              <span className={`font-extrabold text-[10px] md:text-[14px] ${isDarkMode ? "text-white": "text-[#000]"}`}>
                Benin {networkProduct} Meter &#8358;{productAmount}.00{" "}
              </span>
              from your NGN wallet to{" "}
            </p>
            <div className="flex flex-col gap-5">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] mt-1 items-center text-[12px] lg:text-[16px] font-extrabold">
                  <p>Recepient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[1rem] md:h-[1rem] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-[10px]">
                  <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Disco Type</p>
                    <span className="flex items-center gap-1 ">
                      <div>
                        <img className="w-[30px]" src={logo2} alt="" />
                      </div>
                      <div>{disco_type}</div>
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Meter Type</p>
                    <span>{networkProduct} </span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Meter Number</p>
                    <span>{meterNo} </span>
                  </div>

                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Verified Name</p>
                    <span>{verifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone Number</p>
                    <span>0{phoneNo}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Email</p>
                    <span>{productEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Amount</p>
                    <span>&#8358;{productAmount}</span>
                  </div>
                </div>
                <div className="flex gap-[5px] items-center mt-[10px] md:mt-[30px] text-[10px] lg:text-[16px] font-extrabold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-[10px]">
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Customer Name</p>
                    <span>{verifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Wallet Type</p>
                    <span>Nigerian NGN Wallet </span>
                  </div>
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px]">
                  <p className={`${isDarkMode ? "text-white" : "text-[#0008]"}`}>Product</p>
                  <span>Electricity Bills</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px]">
                  <p className={`${isDarkMode ? "text-white" : "text-[#0008]"}`}>Description</p>
                  <span>{description}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px]">
                  <p className={`${isDarkMode ? "text-white" : "text-[#0008]"}`}>Bill / Token Generated</p>
                  <span>{bill_generated}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px]">
                  <p className={`${isDarkMode ? "text-white" : "text-[#0008]"}`}>Order Number</p>
                  <span>{order_id}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={`${isDarkMode ? "text-white" : "text-[#0008]"}`}>Transaction ID</p>
                  <span>{transaction_id}</span>
                </div>
              </div>
            </div>
            <div className={`rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px] ${
                isDarkMode ? "bg-slate-800" : "bg-[#E2F3FF]"
              }`}>
              <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                Earn free points on every successful transactions, redeem your
                earned points to real money, withdrawn to your bank account
                instantly.
              </p>
            </div>
          </div>

          <div className="flex w-[70%] mx-auto gap-x-3 mb-[5%] md:w-[60%] ">
            <button
              onClick={() => {
                handleShareClick();
              }}
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[8.5rem] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                handleSaveAsPDFClick();
              }}
              className={`border w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[8.5rem] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%] ${isDarkMode ? "bg-black border-white":"bg-[#ffffff] border-[#0003]"}`}
            >
              Save as PDF
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center mt-[80px] `}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[16px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "" : "bg-[#04177f]"} ${
                styles.contactus
              } text-[12px] p-1 text-white rounded-[8px] lg:text-[14px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
