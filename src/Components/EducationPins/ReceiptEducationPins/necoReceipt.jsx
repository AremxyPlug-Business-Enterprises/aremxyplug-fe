import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../Context";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AremxyPlugIcon from "../imagesEducation/AremxyPlug.svg";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";

export default function NecoReceipt() {
  const data = GetLocalStorage();
  const navigate = useNavigate();
  const {
    necoExamType,
    necoQuantityResult,
    necoEducationPinPhone,
    necoEducationPinEmail,
    necoPaymentResult,
    setNecoExamType,
    necoEducationAmount,
    setNecoQuantityResult,
    setNecoEducationPinEmail,
    setNecoEducationPinPhone,
    setNecoPaymentResult,
    setNecoEducationAmount,
    setNecoWalletBalance,
    necoOrderId,
    setNecoOrderId,
    necoTransactionId,
    setNecoTransactionId,
    necoShowDescription,
    setNecoShowDescription,
    // necoFullName,
    setNecoFullName,
    necoTransactionProduct,
    setNecoTransactionProduct,
    necoPinsGenerated,
    setNecoPinsGenerated,
    setFetchedPurchaseResponse
  } = useContext(ContextProvider);

  const { toggleSideBar, isDarkMode, date } = useContext(ContextProvider);

  const contentRef = useRef(null);

  const order_id = necoOrderId === undefined ? "" : necoOrderId;
  const transaction_id = necoTransactionId?.length > 0 ? necoTransactionId : "";
  const description =
    necoShowDescription?.length > 0 ? necoShowDescription : "";
  const pins_generated = necoPinsGenerated?.length > 0 ? necoPinsGenerated : "";
  // const fullName = necoFullName?.length > 0 ? necoFullName : "";
  const transaction_product =
    necoTransactionProduct?.length > 0 ? necoTransactionProduct : "";

  const currentNecoChanges = () => {
    setNecoQuantityResult("");
    setNecoExamType("NECO");
    setNecoEducationPinPhone("");
    setNecoEducationPinEmail("");
    setNecoPaymentResult("");
    setNecoEducationAmount("");
    setNecoWalletBalance("");
    setNecoFullName("");
    setNecoOrderId("");
    setNecoTransactionId("");
    setNecoShowDescription("");
    setNecoPinsGenerated([]);
    setNecoTransactionProduct("");
    setFetchedPurchaseResponse({});
    navigate("/NecoEducationPin");
  };

  //   Share function
  const necoShareClick = () => {
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
  const necoSaveAsPDFClick = () => {
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
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto ${isDarkMode ? "border border-white" : ""}`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
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
                onClick={(e) => {
                  currentNecoChanges();
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
              Purchase Successful on
            </h3>
            <span
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
            <p className="text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px]  lg:border lg:rounded-[11px] border-[#27AE60] leading-[15px] md:leading-[20px] text-[#27AE60] bg-[#D5F6E3] lg:p-2.5 text-center my-2 md:text-sm lg:text-base  lg:leading-6 font-medium md:mb-7">
              You have successfully purchased{" "}
              <span
                className=" font-extrabold text-[10.9px] md:text-[14.9px] lg:text-[16.9px]   
            "
              >
                {necoExamType} (₦{necoEducationAmount.toLocaleString()}){" "}
              </span>
              from your {necoPaymentResult.split(" (")[0]} to{" "}
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Exam Type
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {necoExamType}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Quantity
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {necoQuantityResult.split(" (")[0]}
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
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {necoEducationPinPhone}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Email
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {necoEducationPinEmail}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Amount
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                   {necoEducationAmount?`₦${necoEducationAmount.toLocaleString()}.00`:`₦`}
                  </span>
                </div>
              </div>

              {/* ===================Sender Info====================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px]  lg:w-6 lg:h-6"
                    src="./Images/dashboardImages/arrowright.png"
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
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {/* {fullName} */}
                    {data?.aremxyUsername ? data?.aremxyUsername : ""}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    Wallet Type
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    Nigerian {necoPaymentResult.split(" (")[0]}
                  </span>
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div
                className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
              >
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
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
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {description}
                  </span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                  <p
                    className={` ${
                      isDarkMode ? "text-white" : "text-[#7C7C7C] "
                    }`}
                  >
                    NECO PIN Generated
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
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
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {order_id}
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
                    Transaction ID
                  </p>
                  <span
                    className={` ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    {transaction_id}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`bg-[#F2FAFF] w-[90%] mx-auto p-2 my-5 flex justify-between items-center md:p-[9px] lg:p-2.5 rounded-[5px] lg:rounded-[10px]
              ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}
            >
              <p
                className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] font-semibold ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}
              >
                Earn free points on every successful transactions, redeem your
                earned points to real money, withdrawn to your bank account
                instantly.
              </p>
            </div>
          </div>

          <div
            className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] "
          >
            <button
              onClick={() => {
                necoShareClick();
              }}
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                necoSaveAsPDFClick();
              }}
            //   className={`bg-[#ffffff] border-[1px] w-[111px] 
            // border-[#0003]  cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base 
            // lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
            //   isDarkMode ? "text-black" : "text-black"
            // }`}
            className={`bg-[#ffffff] border w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold  ${
                isDarkMode ? " bg-black border-white" : " bg-[#ffffff] border-[#0003]"
              } h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
        </div>

        {/* ===============FOOTER=========== */}
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center lg:mb-[20px] mt-[120px] mb-[50px] lg:mt-11`}
        >
            <h2 className="text-[10px] leading-[12px] lg:text-base">
              You need help?
            </h2>
            <Link
              to={`/ContactUs`}
              className={`${styles.contactus} bg-[#04177f] text-[8px] p-1 text-white rounded-[8px] lg:text-[14px]`}
            >
              Contact Us
            </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}
