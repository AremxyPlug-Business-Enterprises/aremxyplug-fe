import React from 'react';
import { useContext, useRef } from "react";
 import { ContextProvider } from '../../Context';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function NecoReceipt() {
    const {
        examType,
        quantityResult,
        educationPinPhone,
        educationPinEmail,
        paymentResult,
        setExamType,
        waecAmount,
        setQuantityResult,
        setEducationPinEmail,
        setEducationPinPhone,
        setPaymentResult,
        setWaecAmount
        }
         = useContext(ContextProvider);
  
         const { 
          toggleSideBar,
          isDarkMode,
          date, } =
          useContext(ContextProvider);  
  
          const contentRef = useRef(null);
  
          const currentNecoChanges = () => {
            setQuantityResult(false);
            setExamType(false);
            setEducationPinPhone('');
            setEducationPinEmail('');
           setPaymentResult(false);
           setWaecAmount('')
          }
        
        //   Share function
        const waecShareClick = () => {
            if (navigator.share) {
              navigator
                .share({
                  title: "Receipt",
                  text: "Check out this receipt!",
                  url: "https://example.com",
                })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.error("Error sharing:", error));
            } else {
              console.log("Web Share API not supported.");
            }
          };
        
          // ==============Save Pdf Function==============
          const waecSaveAsPDFClick = () => {
            const contentWaec = contentRef.current;
            if (contentWaec) {
              const pdf = new jsPDF();
              html2canvas(contentWaec).then((canvas) => {
                const imgWaecData = canvas.toDataURL("image/png");
                pdf.addImage(imgWaecData, "PNG", 10, 10, 190, 0);
                pdf.save("page.pdf");
              });
            }
          };

  return (
    <DashBoardLayout>
    <div className="flex flex-col gap-[35px] lg:gap-[85px]">
      <div
        className={`  ${
          toggleSideBar ? "" : "lg:w-[880px] "
        } w-full lg:mx-auto border-[2px] rounded-[10px]`}
      >
        <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
          <Link to="/">
            <img
              className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
              src="/Images/login/arpLogo.png"
              alt=""
            />
          </Link>
          <Link to="/NecoEducationPin">
            {" "}
            <img
              className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
              onClick={(e) => {
                currentNecoChanges();
              }}
            />
          </Link>
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
          <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px]">
            You have successfully purchased{" "}
            <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[16px]">
            {examType} {" "}
            </span>
            from your {paymentResult} to{" "}
          </p>
          <div className="flex flex-col gap-3">
            {/* ========================Recipient Info================== */}
            <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
              <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                <p>Recipient Info</p>
                <img
                  className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Exam Type</p>
                <span>NECO</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Quantity</p>
                <span>{quantityResult}</span>
              </div>
              {/* <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Plan</p>
                <span>{selectedOption}</span>
              </div> */}
              
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Phone Number</p>
                <span>{educationPinPhone}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Email</p>
                <span>{educationPinEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Amount</p>
                <span>{waecAmount}</span>
              </div>            
            </div>

            {/* ===================Sender Info====================== */}
            <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
              <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                <p>Sender Info</p>
                <img
                  className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Customer Name</p>
                <span>Aremxyplug</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Wallet Type</p>
              {paymentResult}
              </div>
            </div>

            {/* ===================Transaction Info==================== */}
            <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
              <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                <p>Transaction Info</p>
                <img
                  className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Product</p>
                <span>Education Pins</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Description</p>
                <span>WAEC E-PINS</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">WAEC PIN Generated</p>
                <span>0123456789AP</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Order Number</p>
                <span>1256478999</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Transactiom ID</p>
                <span>0331njokdhtf55</span>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
            <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
            Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
            </p>
          </div>
        </div>

        <div className="flex w-full px-[20px] mx-auto mb-[5%] md:w-[60%] ">
          <button
            onClick={() => {
              waecShareClick();
            }}
            className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
          >
            Share Receipt
          </button>
          <button
            onClick={() => {
              waecSaveAsPDFClick();
            }}
            className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
          >
            Save as PDF
          </button>
        </div>
      </div>





{/* ===============FOOTER=========== */}
      <div
        className={`${
          isDarkMode ? "mb-[1%]" : "mb-[5%]"
        } flex gap-[15px] justify-center items-center lg:mb-[%]`}
      >
        <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
          <h2 className="text-[8px] leading-[12px] lg:text-[16px]">
            You need help?
          </h2>
          <Link
            to={`/ContactUs`}
            className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[16px] lg:px-[10px] lg:py-[10px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      </div>
      </DashBoardLayout>
  )
}
