import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import styles from "../../../TransferComponent/transfer.module.css";
import { ContextProvider } from "../../../../../Context";
import { useLocation } from "react-router-dom";
import { DashBoardLayout } from "../../../../Layout/DashBoardLayout";
import { GetLocalStorage } from "../../../../../LocalStorage/LocalStorage";

export const GloFailedReceipt = (Data) => {
  Data = GetLocalStorage()
  const location = useLocation();
  const {
   
    // recipientPhoneNumber,
    inputValue,
    recipientNames,
    selectedAmount,
    glotransactionID,
    glorefNumber,
    gloorderID,
     walletNameGlo,
    
    glodescription
  } = location.state;

  const {
    toggleSideBar,
    isDarkMode,
    date,
    selectedOptionGlo,
      selectedProductGlo,
     setSelectedProductGlo,
    setSelectedOptionGlo,
    setSelectedAmountGlo,
    setRecipientNamesGlo,
  setWalletNameGlo,
  setRecipientPhoneNumberGlo,
    // recipientName,
    setSelectedNetworkProduct,
    gloSuccessfulResponse,
    
  } = useContext(ContextProvider);

  const contentRef = useRef(null);

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

  const fullName = gloSuccessfulResponse?.full_name?.length ?
 gloSuccessfulResponse?.full_name : ""

  // ==============Share pdf Function=============
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Receipt",
          text: "Check out this receipt!",
          url: "https://example.com", // Replace with the actual URL of your receipt
        })
        .then(() => {return;})
        .catch((error) => {return;});
    } else {
    return;
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
    setSelectedOptionGlo("");
    setSelectedProductGlo("");
    setSelectedAmountGlo("");
    setRecipientNamesGlo("");
    setRecipientPhoneNumberGlo("");
    setWalletNameGlo("");
  };

  return (
    <DashBoardLayout>
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
        <div
         className={` ${styles.receipt} ${
                                      toggleSideBar ? "" : "lg:w-[880px] "
                                    } w-full lg:mx-auto ${isDarkMode ? "border border-white bg-black" : ""}`}
        >
          <div 
          className="flex justify-between items-center mx-[3%]
           my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <Link to="/GloDataBundle">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                onClick={handleChange}
              />
            </Link>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>
            {" "}
            <h3 className="font-extrabold text-[12px] my-[2%] 
            text-center md:text-[20px] md:my-[3%] lg:text-[16px] 
            lg:my-[2%]">
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
              Purchase failed on
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
           <p className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px]
             md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px]  lg:border-[1px] lg:rounded-[11px]
                   leading-[15px] md:leading-[20px] font-[600] 
                    lg:p-[10px] text-center my-2 md:text-sm
                    lg:text-base  lg:leading-[24px]  md:mb-7
                     border-red-500 text-red-500 bg-red-100`}>
              Purchase Failed due to an unexpected error that occured. Please
              try again.
                <span  className="font-extrabold text-[10.9px] md:text-[14.9px] 
              lg:text-[16.9px]">
              {" "}  {selectedProductGlo + " " + selectedOptionGlo}{" "}
              </span>
              from your {" "}
              <span>{walletNameGlo} to </span>
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
                  <span>GLO</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product</p>
                  <span>{selectedProductGlo}</span>
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
                  <span>{selectedAmount}</span>
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
                  <span>{fullName}</span>
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
                  <span>{glodescription}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Order Number</p>
                  <span>{gloorderID}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Transaction ID</p>
                  <span>{glotransactionID}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Reference Number</p>
                  <span>{glorefNumber}</span>
                </div>
              </div>
            </div>
           <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
            <p className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
           Earn free points on every successful transactions,
            redeem your earned points to real money, withdrawn to your bank account instantly.
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
               className={` border-[1px] w-[111px]
                   border-[#0003] flex justify-center 
                   items-center mx-auto cursor-pointer text-[12px]
                    font-extrabold h-[40px] rounded-[6px] 
                    md:w-[25%] md:rounded-[8px] md:text-base
                     lg:w-[163px] lg:h-[38px] lg:my-[2%]
                     ${isDarkMode ? "bg-black border-[0.2px] text-white border-[#04177f]"
                       : "text-black bg-white border-[0.2px] border-black"}`}>
              Save as PDF
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center lg:mb-[%]`}
        >
          <div className={styles.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={styles.btnContact}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};
