import React from 'react'
import { useContext, useRef } from "react";
 import { ContextProvider } from '../../Context';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AremxyPlugIcon from '../imagesEducation/AremxyPlug.svg';

export default function NabtebReceipt() {
    const {
        nabtebExamType,
        nabtebQuantityResult,
        nabtebEducationPinPhone,
        nabtebEducationPinEmail,
        nabtebPaymentResult,
        nabtebEducationAmount,
        setNabtebExamType,
        setNabtebQuantityResult,
        setNabtebEducationPinEmail,
        setNabtebEducationPinPhone,
        setNabtebPaymentResult,
        setNabtebEducationAmount,
        setNabtebWalletBalance
        
        }
         = useContext(ContextProvider);
  
         const { 
          toggleSideBar,
          isDarkMode,
          date, } =
          useContext(ContextProvider);  
  
          const contentRef = useRef(null);
  
          const currentNabtebChanges = () => {
            setNabtebQuantityResult('');
            setNabtebExamType('');
            setNabtebEducationPinPhone('');
            setNabtebEducationPinEmail('');
           setNabtebPaymentResult('');
           setNabtebEducationAmount('₦');
           setNabtebWalletBalance('')
          }
        
        //   Share function
        const nabtebShareClick = () => {
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
          const nabtebSaveAsPDFClick = () => {
            const contentNabteb = contentRef.current;
            if (contentNabteb) {
              const pdf = new jsPDF();
              html2canvas(contentNabteb).then((canvas) => {
                const imgNabtebData = canvas.toDataURL("image/png");
                pdf.addImage(imgNabtebData, "PNG", 10, 10, 190, 0);
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
                src={AremxyPlugIcon}
                alt=""
              />
            </Link>
            <Link to="/NabtebEducationPin">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                onClick={(e) => {
                  currentNabtebChanges();
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
            <h3 className="font-extrabold text-[12px] mt-[2%] text-center 
            md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
              Purchase Successful on
            </h3>
            <span className="text-[11px] md:text-[14px] lg:text-[16px] text-[#0008]  
            flex justify-center items-center font-[600]">
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
            <div className='flex justify-center mx-[19px]'>
            <p className="text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] 
             md:rounded-[6.455px]  lg:border-[1px] lg:rounded-[11px]  border-[solid] border-[#27AE60] leading-[15px] md:leading-[20px]
           text-[#27AE60] bg-[#D5F6E3] lg:p-[10px] text-center my-2 md:text-[14px] 
          lg:text-[16px]  lg:leading-[24px] font-[500] md:mb-7">
              You have successfully purchased{" "}
              <span className="font-extrabold text-[10.9px] md:text-[14.9px] lg:text-[16.9px]">
              {nabtebExamType} {" "}
              </span>
              from your {nabtebPaymentResult} to{" "}
            </p>
            </div>
            <div className="flex flex-col  gap-7  md:gap-10">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Exam Type</p>
                  <span>NABTEB</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
                 lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Quantity</p>
                  <span>{nabtebQuantityResult}</span>
                </div>
                {/* <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Plan</p>
                  <span>{selectedOption}</span>
                </div> */}
                
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Phone Number</p>
                  <span>{nabtebEducationPinPhone}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Email</p>
                  <span>{nabtebEducationPinEmail}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Amount</p>
                  <span>{nabtebEducationAmount}</span>
                </div>            
              </div>

              {/* ===================Sender Info====================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Customer Name</p>
                  <span>Aremxyplug</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto \
                justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Wallet Type</p>
                {nabtebPaymentResult}
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Product</p>
                  <span>Education Pins</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  
                lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Description</p>
                  <span>NABTEB E-PINS</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]"> NABTEB PIN Generated</p>
                  <span>0123456789AP</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Order Number</p>
                  <span>1256478999</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Transactiom ID</p>
                  <span>0331njokdhtf55</span>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 
            flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-[#7E7E7E] text-center mx-auto w-[200px] md:text-[14px] 
              md:w-[80%] lg:text-[16px] font-[500]">
              <span className='md:block'>Earn free points on every successful transactions, 
            redeem your earned points </span>
            to real money, withdrawn to your bank account instantly.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center 
        gap-[10px] md:gap-[20px] px-[20px]  mb-[5%]  ">
          <button
            onClick={() => {
              nabtebShareClick();
            }}
            className={`bg-[#04177f] w-[111px] 
              cursor-pointer text-[12px] 
            font-extrabold h-[40px] text-white rounded-[6px]
             md:w-[150px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
          >
            Share Receipt
          </button>
          <button
            onClick={() => {
              nabtebSaveAsPDFClick();
            }}
            className={`bg-[#ffffff] border-[1px] w-[111px] 
            border-[#0003]  cursor-pointer text-[12px] font-extrabold h-[40px] 
            rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-[16px] 
            lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
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
          <div className="flex gap-2 justify-center items-center mb-[50px] md:mt-[200pz] mt-[100px] lg:mt-[100px]">
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
