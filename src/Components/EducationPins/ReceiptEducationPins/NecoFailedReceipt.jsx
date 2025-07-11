import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../Context";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AremxyPlugIcon from "../imagesEducation/AremxyPlug.svg";
export const NecoFailedReceipt = () => {
  const {
    necoQuantityResult,
    necoEducationPinPhone,
    necoEducationPinEmail,
    necoPaymentResult,
    necoExamType,
    setNecoExamType,
    necoEducationAmount,
    setNecoQuantityResult,
    setNecoEducationPinEmail,
    setNecoEducationPinPhone,
    setNecoPaymentResult,
    setNecoEducationAmount,
    setNecoWalletBalance,
    necoOrderId,
    necoTransactionId,
    necoShowDescription,
    necoFullName,
    necoTransactionProduct,
    necoPinsGenerated,
  } = useContext(ContextProvider);

  const { toggleSideBar, isDarkMode, date } = useContext(ContextProvider);

  const contentRef = useRef(null);
  //  Function for Resetting inputs
  const resetInputs = () => {
    setNecoQuantityResult("");
    setNecoExamType("");
    setNecoEducationPinPhone("");
    setNecoEducationPinEmail("");
    setNecoPaymentResult("");
    setNecoEducationAmount("₦");
    setNecoWalletBalance("");
  };

  const order_id = necoOrderId === undefined ? "" : necoOrderId;
  const transaction_id = necoTransactionId?.length > 0 ? necoTransactionId : "";
  const description =
    necoShowDescription?.length > 0 ? necoShowDescription : "";
  const pins_generated = necoPinsGenerated?.length > 0 ? necoPinsGenerated : "";
  console.log("pins-gen", pins_generated);
  const fullName = necoFullName?.length > 0 ? necoFullName : "";
  const transaction_product =
    necoTransactionProduct?.length > 0 ? necoTransactionProduct : "";

  //   Share function
  const shareFailedReceipt = () => {
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
  const FailedNecoPdf = () => {
    const contentNeco = contentRef.current;
    if (contentNeco) {
      const pdf = new jsPDF();
      html2canvas(contentNeco).then((canvas) => {
        const imgNecoData = canvas.toDataURL("image/png");
        pdf.addImage(imgNecoData, "PNG", 10, 10, 190, 0);
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
            <Link to="/NecoEducationPin">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                onClick={() => {
                  resetInputs();
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
            <h3
              className="font-extrabold text-[12px] mt-[2%] 
          text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]"
            >
              Purchase Failed on
            </h3>
            <span
              className="text-[11px] text-[#0008] md:text-[14px] 
          flex justify-center items-center font-semibold"
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
            <div className="flex justify-center mx-[19px]">
              <p
                className="text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] 
             md:rounded-[6.455px]  lg:border-[1px] lg:rounded-[11px]  border-[solid] border-[#F95252] leading-[15px] md:leading-[20px]
           text-[#F95252] bg-[#FDCECE] lg:p-[10px] text-center my-2 md:text-[14px] 
          lg:text-[16px]  lg:leading-[24px] font-medium md:mb-7"
              >
                Purchase Failed due to an unexpected error that occured. Please
                try again.
              </p>
            </div>
            <div className="flex flex-col gap-7  md:gap-10">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]">
                <div
                  className="flex gap-[5px] items-center text-[10px]
               lg:text-[16px] font-semibold"
                >
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] 
              
              w-[90%] mx-auto justify-between  
              lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Exam Type</p>
                  <span className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}>{necoExamType}</span>
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] 
              mx-auto justify-between  lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Quantity.split(" (")[0])</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {necoQuantityResult}
                  </span>
                </div>
                {/* <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#7C7C7C]">Plan</p>
                <span>{selectedOption}</span>
              </div> */}

                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] 
              mx-auto justify-between  lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Phone Number</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {necoEducationPinPhone}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] 
              mx-auto justify-between  lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Email</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {necoEducationPinEmail}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  
              lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Amount</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {necoEducationAmount}
                  </span>
                </div>
              </div>

              {/* ===================Sender Info====================== */}
              <div className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-semibold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  
              lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Customer Name</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {fullName}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px] font-medium">
                  <p className="text-[#7C7C7C]">Wallet Type</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {necoPaymentResult.split(" (")[0]}
                  </span>
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div
                className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] 
            mx-auto lg:gap-[8px]"
              >
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px] font-medium">
                  <p className="text-[#7C7C7C]">Product</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {transaction_product}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
              justify-between  lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">Description</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {description}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
              justify-between  lg:text-[16px] font-medium"
                >
                  <p className="text-[#7C7C7C]">NECO PIN Generated</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {pins_generated}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px] font-medium">
                  <p className="text-[#7C7C7C]">Order Number</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {order_id}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[16px] font-medium">
                  <p className="text-[#7C7C7C] ">Transaction ID</p>
                  <span
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#0008] "
                    }`}
                  >
                    {transaction_id}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] text-[#7C7C7C] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                <span className="md:block">
                  Earn free points on every successful transactions, redeem your
                  earned points{" "}
                </span>
                to real money, withdrawn to your bank account instantly.
              </p>
            </div>
          </div>

          <div
            className="flex w-full justify-center 
        gap-[10px] md:gap-[20px] px-[20px]  mb-[5%]  "
          >
            <button
              onClick={() => {
                shareFailedReceipt();
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
                FailedNecoPdf();
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
          <div className="flex gap-2 justify-center items-center mb-[50px] md:mt-40 mt-[100px] lg:mt-[100px]">
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
  );
};
