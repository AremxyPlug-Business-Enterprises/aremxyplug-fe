import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../Context";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import styles from "../../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import AremxyPlugIcon from "../imagesEducation/AremxyPlug.svg";
import html2canvas from "html2canvas";
export const WaecFailedReceipt = () => {
    const navigate = useNavigate();
  const {
    quantityResult,
    examType,
    educationPinPhone,
    educationPinEmail,
    paymentResult,
    educationAmount,
    setExamType,
    setQuantityResult,
    setEducationPinEmail,
    setEducationPinPhone,
    setPaymentResult,
    setEducationAmount,
    setWalletBalance,
    waecOrderId,
    setWaecOrderId,
    waecTransactionId,
    setWaecTransactionId,
    waecShowDescription,
    setWaecShowDescription,
    waecFullName,
    setWaecFullName,
    waecTransactionProduct,
    setWaecTransactionProduct,
    waecPinsGenerated,
    setWaecPinsGenerated,
    purchaseEduErrorType,
    setPurchaseEduErrorType,
    setAlertCustom
  } = useContext(ContextProvider);

  const { toggleSideBar, isDarkMode, date } = useContext(ContextProvider);


  const contentRef = useRef(null);

  const order_id = waecOrderId === undefined ? "" : waecOrderId;
  const transaction_id = waecTransactionId?.length > 0 ? waecTransactionId : "";
  const description =
    waecShowDescription?.length > 0 ? waecShowDescription : "";
  const pins_generated = waecPinsGenerated?.length > 0 ? waecPinsGenerated : "";
   const fullName = waecFullName?.length > 0 ? waecFullName : "";
  const transaction_product =
    waecTransactionProduct?.length > 0 ? waecTransactionProduct : "";

  //   Function for Resetting the inputs
  const failedResult = () => {
    setQuantityResult("");
    setExamType("WAEC");
    setEducationPinPhone("");
    setEducationPinEmail("");
    setPaymentResult("");
    setEducationAmount("");
    setWalletBalance("");
    setWaecFullName("");
    setWaecOrderId("");
    setWaecTransactionId("");
    setWaecShowDescription("");
    setWaecPinsGenerated([]);
    setWaecTransactionProduct("");
    setPurchaseEduErrorType("");
    navigate("/WaecEducationPin");
  };

  //   Share function
  const handleShareClick = async() => {
      const content = contentRef.current;
      if(!content) {
        setAlertCustom && setAlertCustom({ message: "Receipt not recorded", type: "error", show: true });
        return;
      }
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
                title: "AremxyPlug_WAEC_Receipt",
                files : [file], 
              })
              .then(() => {})
              .catch((error) =>{});
          }else{
            setAlertCustom && setAlertCustom({ message: "Sharing this pdf isn't supported in your browser.", type: "info", show: true });
          }
        }catch(error){
          setAlertCustom && setAlertCustom({ message: error?.toString() || "An error occurred", type: "error", show: true });
        }
      }
    };
  
  // ==============Save Pdf Function==============
  const waecFailedPDF = () => {
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
          // className={`  ${
          //   toggleSideBar ? "" : "lg:w-[880px] "
          // } w-full lg:mx-auto border-[2px] rounded-[10px]`}
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto ${isDarkMode ? "border border-white" : ""}`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                // className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[29px]"
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src={AremxyPlugIcon}
                alt=""
              />
            </Link>
            <Link to="/WaecEducationPin">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                onClick={() => {
                  failedResult();
                }}
              />
            </Link>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>
            {" "}
            <h3 className="font-extrabold text-xs my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]">
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
              className="text-xs mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-base font-extrabold lg:my-[10px]"
            >
              Purchase Failed on
            </h3>
            <span
              // className={`text-[11px] md:text-sm lg:text-[16px] font-semibold flex justify-center items-center ${
              //   isDarkMode ? "text-white" : "text-[#7C7C7C]"
              // }`}
              className={`text-[11px] font-extrabold flex justify-center items-center `}
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
            {/* <div className="flex justify-center mx-[19px]"> */}
            <p
              className="text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px]  lg:border lg:rounded-[11px] border-[#F95252] leading-[15px] md:leading-[20px] text-[#F95252] bg-[#FDCECE] lg:p-2.5 text-center my-2 md:text-sm lg:text-base lg:leading-6 font-medium md:mb-7"
            >
              {/* Purchase Failed due to an unexpected error that occured. Please
              try again. */}
              {purchaseEduErrorType}
            </p>
            {/* </div> */}
            <div
              // className="flex flex-col gap-7  md:gap-10"
              className="flex flex-col gap-3"
            >
              {/* ========================Recipient Info================== */}
              <div
                // className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]"
                className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
              >
                <div
                  className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold"
                >
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] lg:w-5 lg:h-5"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div
                  className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium"
                >
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Exam Type
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {examType}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Quantity
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {quantityResult.split(" (")[0]}
                  </span>
                </div>

                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Phone Number
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {educationPinPhone}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base font-medium"
                >
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Email
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {educationPinEmail}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base font-medium"
                >
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Amount
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {educationAmount?`₦${educationAmount.toLocaleString()}.00`:`₦`}
                  </span>
                </div>
              </div>

              {/* ===================Sender Info====================== */}
              <div
                // className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]"
                className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
              >
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] lg:w-6 lg:h-6"
                    // md:w-[18px] md:h-[18px]
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Customer Name
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    {fullName} 
                  
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Wallet Type
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black "}`}
                  >
                    Nigerian {paymentResult.split(" (")[0]}
                  </span>
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div
                // className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]"
                className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
              >
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] lg:w-5 lg:h-5"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium ">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Product
                  </p>
                  <span
                    className={`uppercase ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {transaction_product}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Description
                  </p>
                  <span
                    className={`${isDarkMode ? "text-white" : "text--black"}`}
                  >
                    {description}
                  </span>
                </div>
                <div
                  className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium"
                >
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    WAEC PIN Generated
                  </p>
                  <span
                    className={`${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {pins_generated[0]}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Order Number
                  </p>
                  <span
                    className={`${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {order_id}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Transaction ID
                  </p>
                  <span
                    className={`${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {transaction_id}
                  </span>
                </div>
              </div>
            </div>
            <div
              // className={`rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px] ${
              //   isDarkMode ? "bg-slate-800" : "bg-[#E2F3FF]"
              // }`}
              className={`bg-[#F2FAFF] w-[90%] mx-auto p-2 my-5 flex justify-between items-center md:p-[9px] lg:p-2.5 rounded-[5px] lg:rounded-[10px]
              ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}
            >
              <p
                // className={`text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px] font-medium ${
                //   isDarkMode ? "text-white" : "text-[#7C7C7C]"
                // }`}
                className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] font-semibold ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }`}
              >
                Earn free points on every successful transactions, redeem your
                earned points to real money, withdrawn to your bank account
                instantly.
              </p>
            </div>
          </div>

          <div
            // className="flex w-full justify-center gap-2.5 md:gap-5 px-5 mb-[5%]  "
            className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] "
          >
            <button
              onClick={() => {
                handleShareClick();
              }}
              // className={`bg-[#04177f] w-[111px] cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                waecFailedPDF();
              }}
              //   className={`bg-[#ffffff] border w-[111px]
              // border-[#0003]  cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
              //   isDarkMode ? "text-black" : "text-black"
              // }`}
              className={`bg-[#ffffff] border w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold  ${
                isDarkMode ? " bg-black border-white" : " bg-[#ffffff]"
              } h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
        </div>

        {/* ===============FOOTER=========== */}
        <div
          // className={`${
          //   isDarkMode ? "mb-[1%]" : "mb-[5%]"
          // } flex gap-[15px] justify-center items-center lg:mb-[%]`}
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center lg:mb-[20px] mt-[120px] mb-[50px] lg:mt-11`}
        >
          {/* <div className="flex gap-2 justify-center items-center mb-[50px] md:mt-40 mt-[100px] lg:mt-[100px]"> */}
            <h2 className="text-[10px] leading-[12px] lg:text-base">
              You need help?
            </h2>
            <Link
              to={`/ContactUs`}
              // className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-base lg:px-[10px] lg:py-[10px]"
              className={`${styles.contactus} bg-[#04177f] text-[8px] p-1 text-white rounded-[8px] lg:text-[14px]`}
            >
              Contact Us
            </Link>
          {/* </div> */}
        </div>
      </div>
    </DashBoardLayout>
  );
};
