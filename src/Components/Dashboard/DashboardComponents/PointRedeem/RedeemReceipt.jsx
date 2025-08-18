import React, { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../TransferComponent/transfer.module.css"
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const RedeemReceipt = () => {
  const {
    toggleSideBar,
    isDarkMode,
    date,
    //  amountRedeemed,
    //   setAmountRedeemed,
    // rateRedeemed, 
    // setRateRedeemed,
    // transactionId, 
    // setTransactionId,
    // orderId, 
    // setOrderId,
     inputValue,
    outputValue,
       setRealInputValue,
           setRealOutputValue,
  } = useContext(ContextProvider);

    const [redeemResponse, setRedeemResponse] = useState(null);
  const [amountRedeemed, setAmountRedeemed] = useState(0);
  const [rateRedeemed, setRateRedeemed] = useState(0);
  const [transactionId, setTransactionId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [transactionProduct, setTransactionProduct] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");



   useEffect(() => {
    if (redeemResponse && redeemResponse.status === 200) {
      const data = redeemResponse.data.data;
      setAmountRedeemed(data.amount_redeemed);
      setRateRedeemed(data.redeemed_rate);
      setTransactionId(data.transaction_id);
      setOrderId(data.order_id);
      setTransactionProduct(data.transaction_product);
      setTransactionDescription(data.transaction_description);
    }
  }, [redeemResponse]);
  
  const handleClear = () =>{
    setRealInputValue('');
    setRealOutputValue('');
    // setText(true);
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
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
         <div
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto  ${isDarkMode ? "border border-white" : ""}` } 
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link onClick={handleClear} to="/point-redeem">
              <img
                 className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <Link onClick={ handleClear } to="/point-redeem">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
               src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </Link>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>
            {" "}
           <h3 className="font-extrabold text-[12px] my-[2%] 
            text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
            Transaction Receipt
            </h3>
            <div className="w-full flex justify-center ">
              <img
                className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                src="./Images/transferImages/receipt-background.png"
                alt="/"
              />
            </div>
            <h3 className={`font-extrabold text-[12px]  mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-[16px] lg:my-[10px]
            ${isDarkMode ? "text-white" : "text-black"}
          `}> 
            Redeem Successful on
            </h3>
            <span className={`text-[8px] text-[#0008] pt-1 font-extrabold flex justify-center items-center
            ${isDarkMode ? "text-white" : "text-black"}`}
            >
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
            <p className="text-[10px] font-medium pt-3 text-[#000] text-center mb-2 md:text-[14px] lg:text-[12px]">
              You have successfully redeemed <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]" >{inputValue}.00{" "} </span> Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                &#8358;{outputValue}{" "}
              </span>
              from your PTS balance to{" "}
            </p>

            <div className="flex flex-col gap-5">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                    <p className= {`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                 Wallet Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Wallet Type</p>
                  <span className={` ${isDarkMode ? "text-white": "text-black"}`}>Nigerian NGN Wallet</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Amount Redeemed</p>
                    <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>{amountRedeemed ? amountRedeemed : "0.00"} PTS</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Account Received</p>
                   <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{amountRedeemed ? amountRedeemed : "0.00"} </span>
                </div>
               
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Redeem Rate </p>
                  <span className={` ${isDarkMode ? "text-white": "text-black"}`}>{rateRedeemed ? rateRedeemed : "1 PTS ~ 1 NGN"}</span>
                  {/* <span className={` ${isDarkMode ? "text-white": "text-black"}`}>1 PTS ~ 1 NGN</span> */}
                </div>
                
              </div>

             

              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p  className={` ${isDarkMode ? "text-white": "text-black"}`}>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Product</p>
                  <span className={` ${isDarkMode ? "text-white": "text-black"}`}>{transactionProduct ? transactionProduct : "Point Redeem"}</span>
                  {/* <span className={` ${isDarkMode ? "text-white": "text-black"}`}>Point Redeem</span> */}
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Description</p>
                  <span className={` ${isDarkMode ? "text-white": "text-black"}`}>{transactionDescription ? transactionDescription : "Points redeemed for rewards"} </span>
                  {/* <span className={` ${isDarkMode ? "text-white": "text-black"}`}>Points redeemed for rewards </span> */}
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Completion Time</p>
                  <span className={` ${isDarkMode ? "text-white": "text-black"}`}>Instantly</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Order Number</p>
                  <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{orderId ? orderId : "1256478999"}</span>
                  {/* <span className={` ${isDarkMode ? "text-white": "text-black"}`}>1256478999</span> */}
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
               <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>{transactionId ? transactionId : "0331njokdhtf55"}</p>
<span className={` ${isDarkMode ? "text-white": "text-black"}`}>
  {transactionId ? transactionId : "0331njokdhtf55"}
</span>
 {/* <span className={` ${isDarkMode ? "text-white": "text-black"}`}>0331njokdhtf55</span> */}
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
          } flex gap-[15px] justify-center items-center mt-[80px] lg:mb-[%]`}
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
