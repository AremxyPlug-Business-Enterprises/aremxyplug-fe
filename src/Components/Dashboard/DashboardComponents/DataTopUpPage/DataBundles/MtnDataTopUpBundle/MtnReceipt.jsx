import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import styles from '../../../../../AirTimePage/AirtimeVtu.module.css'
import { ContextProvider } from "../../../../../Context";
import { useLocation } from 'react-router-dom';
import { DashBoardLayout } from "../../../../Layout/DashBoardLayout";
import { GetLocalStorage } from "../../../../../LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";

export const MtnReceipt = (Data) => {
  Data = GetLocalStorage()
const navigate = useNavigate()
  const location = useLocation()
  const { 
    
    selectedOption, 
    // recipientPhoneNumber, 
    inputValue, recipientNames, 
    selectedAmount, mtntransactionID,
     mtnrefNumber, mtnorderID,
     mtnReceiptInfo,
    selectedProduct, setPaymentSelected} = location.state
  
  const {
    toggleSideBar,
    isDarkMode,
    date,
    setSelectedNetworkProduct,
    setSelectedProductMtn,
    setSelectedOptionMtn,
    setSelectedAmountMtn,
    setRecipientNamesMtn,
  setWalletNameMtn,
  setRecipientPhoneNumberMtn,
  
} =
    useContext(ContextProvider);

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
        pdf.save("AremxyPlugDataReceipt.pdf");
      });
    }
  };

  const handleChange = () => {
    setSelectedNetworkProduct(false);
    setSelectedProductMtn("")
    setSelectedOptionMtn(false);
    setSelectedAmountMtn("");
    setRecipientNamesMtn("");
    setWalletNameMtn("");
    setRecipientPhoneNumberMtn("");
    setPaymentSelected(false);
    navigate("/MtnDataTopUpBundle");
  };

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
                className=" w-[15px] h-[10px] md:w-[24px] 
                md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </div>
            <div
          onClick ={()=> {
            handleChange()
          }}>
              {" "}
              <img
                 className=" w-[15px] h-[10px] md:w-[24px] 
                md:h-[15px] lg:w-[42px] lg:h-[25px]"
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
              Transaction Successful on
            </h3>
            <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
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
            <p className="text-[9px] text-[#27AE60] bg-[#D5F6E3] rounded-[11px] border-2 border-[#27AE60] py-[5px] px-[2px] text-center mx-[5px] lg:mx-[150px] md:mx-[100px] my-2 md:text-[14px] lg:text-[14px]">
              You have successfully purchased{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[16px]">
                {`${selectedProduct + " " + selectedOption}`}
              </span>
              from your NGN wallet to{" "}
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Network</p>
                  <span>MTN</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product</p>
                  <span>{selectedProduct}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Phone Number</p>
                  <span>{inputValue}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Recipient Name</p>
                  <span>{recipientNames}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Amount</p>
                  <span>&#8358;{selectedAmount}</span>
                </div>
              </div>
              
              {/* ===================Sender Info====================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Customer Name</p>
                  <span>{Data.aremxyUsername}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Wallet Type</p>
                  <span>NGN Wallet</span>
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
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product</p>
                  <span>Data top-up</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Description</p>
                  <span>{mtnReceiptInfo}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Order Number</p>
                  <span>{mtnorderID}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Transaction ID</p>
                  <span>{mtntransactionID}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Reference Number</p>
                  <span>{mtnrefNumber}</span>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
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
              className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
        </div>
        <div
          className={`${isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[%]`}
        >
          <div className={styles.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};
