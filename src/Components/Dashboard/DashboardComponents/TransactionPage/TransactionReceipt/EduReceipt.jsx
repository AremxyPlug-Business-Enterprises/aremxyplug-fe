import { useContext, useRef, useState } from "react";

import styles from "../../TransferComponent/transfer.module.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
// import AremxyPlugIcon from "../imagesEducation/AremxyPlug.svg";
import AremxyPlugIcon from "../../../../EducationPins/imagesEducation/AremxyPlug.svg";
import html2canvas from "html2canvas";
import { ContextProvider } from "../../../../Context";
import { GetLocalStorage } from "../../../../LocalStorage/LocalStorage";
import { formatDate } from "./ElectricityReceipt";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";

export default function EduReceipt() {
  const data = GetLocalStorage();
  const [showReceipt, setShowReceipt] = useState(true);
  const navigate = useNavigate();
  const { toggleSideBar, isDarkMode, orderIdResponse, setOrderIdResponse } =
    useContext(ContextProvider);

  function handleClick() {
    setOrderIdResponse({});
    setShowReceipt(false);
    navigate(-1);
    // navigate("/TransactionPage");
  }

  const contentRef = useRef(null);

  const receiptData = orderIdResponse?.data
    ? orderIdResponse?.data?.data?.data
    : {};

  const exam_type =
    receiptData?.exam_type?.length > 0 ? receiptData?.exam_type : "";
  const quantity = receiptData?.quantity > 0 ? receiptData?.quantity : "";
  const amount = receiptData?.amount > 0 ? receiptData?.amount : "";
  const order_id =
    receiptData?.order_id === undefined ? "" : receiptData?.order_id;
  const transaction_id =
    receiptData?.transaction_id?.length > 0 ? receiptData?.transaction_id : "";
  const description =
    receiptData?.transaction_description?.length > 0
      ? receiptData?.transaction_description
      : "";
  const phone =
    receiptData?.phone_number?.length > 0 ? receiptData?.phone_number : "";
  const email = receiptData?.email?.length > 0 ? receiptData?.email : "";
  const pins_generated =
    receiptData?.pins_generated?.length > 0 ? receiptData?.pins_generated : "";
  const transaction_product =
    receiptData?.transaction_product?.length > 0
      ? receiptData?.transaction_product
      : "";

  // const location = useLocation();

  // if (!location.state || !location.state.orderData) {
  //   return <div>Error: Transaction data not found</div>;
  // }

  //   Share function
   const handleShareClick = async() => {
      const content = contentRef.current;
      if(!content) return alert("Receipt not recorded")
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
            title: `AremxyPlug_${receiptData?.exam_type?.toUpperCase()}_Receipt`,
            files : [file], 
          })
          .then(() => {return;})
          .catch((error) => {return;});
      }else{
      alert("Sharing this pdf isn't supported in your browser.")
      }
    }catch(error){
     alert(error)
    }
      }
    };
  
  // ==============Save Pdf Function==============
  const saveAsPDFClick = () => {
    const contentWaec = contentRef.current;
    if (contentWaec) {
      const pdf = new jsPDF();
      html2canvas(contentWaec).then((canvas) => {
        const imgWaecData = canvas.toDataURL("image/png");
        pdf.addImage(imgWaecData, "PNG", 10, 10, 190, 0);
        pdf.save(`${description}.pdf`);
      });
    }
  };
  return (
    <DashBoardLayout>
      {showReceipt && (
        <div className="flex flex-col gap-[35px] lg:gap-[85px]">
          <div
            // className={` ${
            //   toggleSideBar ? "" : "lg:w-[880px] "
            // } w-full lg:mx-auto border-[2px] rounded-[10px]`}
            className={` ${styles.receipt} ${
              toggleSideBar ? "" : "lg:w-[880px] "
            } w-full lg:mx-auto ${isDarkMode ? "border border-white" : ""}`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                // className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[29px]"
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src={AremxyPlugIcon}
                alt=""
              />
              <div>
                {" "}
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                  onClick={handleClick}
                />
              </div>
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div ref={contentRef}>
              {" "}
              <h3 className="font-bold text-xs my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]">
                Transaction Receipt
              </h3>
              <div className="w-full flex justify-center ">
                <img
                  className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                  src="./Images/transferImages/receipt-background.jpeg"
                  alt="/"
                />
              </div>
              <h3 className="text-xs mt-[2%] text-center md:text-[20px] md:my-[7px] lg:text-base font-medium lg:my-[10px]">
                {["delivered", "successful", "success"].includes(
                  receiptData?.status.toLowerCase()
                )
                  ? "Purchase Successful on"
                  : receiptData?.status === "pending"
                  ? "Purchase Pending on"
                  : receiptData?.status === "refunded"
                  ? "Purchase Refunded on"
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled on"
                  : "Purchase Failed on"}
              </h3>
              <span
                className={`text-[11px] font-medium flex justify-center items-center ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }`}
              >
                {formatDate(receiptData?.created_at)}
              </span>
              {/* <div className="flex justify-center mx-[19px]"> */}
              <p
                className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px] lg:border lg:rounded-[11px] leading-[15px] md:leading-[20px] lg:p-2.5 text-center my-2 md:text-sm lg:text-base  lg:leading-6 font-medium md:mb-7
             ${
               ["delivered", "successful", "success"].includes(
                 receiptData?.status.toLowerCase()
               )
                 ? "border-[#27AE60] text-[#27AE60] bg-[#D5F6E3]"
                 : receiptData?.status === "pending"
                 ? "bg-[#FFF1D6] text-[#F09E00] border-[#FFC24C]"
                 : receiptData?.status === "refunded"
                 ? "bg-[#A6D9FF] text-[#04177F] border-[#04177F]"
                 : receiptData?.status === "cancelled"
                 ? "bg-[#EFC6BE] text-[#E62E05] border-[#E62E05]"
                 : "bg-[#FDCECE] text-[#F95252] border-[#F93232]"
             }`}
              >
                {["delivered", "successful", "success"].includes(
                  receiptData?.status
                )
                  ? "You have successfully purchased "
                  : receiptData?.status === "pending"
                  ? "Your purchase is under process please wait while the system confirm."
                  : receiptData?.status === "refunded"
                  ? "Purchase was unsuccessful and your wallet has been refunded. Please try again."
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
                  : "Purchase Failed due to an unexpected error that occured. Please try again."}
                {["delivered", "successful", "success"].includes(
                  receiptData?.status.toLowerCase()
                ) && (
                  <span className="">
                    <span className=" font-medium text-[10.9px] md:text-[14.9px] lg:text-[16.9px]">
                      <span className="uppercase">{exam_type} </span> (
                      {`${String(
                        amount.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                          // minimumFractionDigits: 0,
                        })
                      )}`}
                      ){" "}
                    </span>
                    from your NGN Wallet to
                  </span>
                )}
              </p>
              <div className="flex flex-col gap-3">
                {/* ========================Recipient Info================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p>Recipient Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-5 lg:h-5"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C] "
                      }`}
                    >
                      Exam Type
                    </p>
                    <span
                      className={`uppercase ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {exam_type}
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
                      {`${quantity} Piece of Result Checker`}
                    </span>
                  </div>
                  {/* <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base">
                  <p className="text-black">Plan</p>
                  <span>{selectedOption}</span>
                </div> */}

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
                      {phone}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
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
                      {email}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
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
                      {amount ? `₦${String(amount).toLocaleString()}.00` : `₦`}
                    </span>
                  </div>
                </div>

                {/* ===================Sender Info====================== */}
                <div
                  // className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]"
                  className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
                >
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p>Sender Info</p>
                    <img
                      className="w-[13px] h-[13px] lg:w-6 lg:h-6"
                      // md:w-[18px] md:h-[18px]
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
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
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Wallet Type
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      Nigerian NGN Wallet
                    </span>
                  </div>
                </div>

                {/* ===================Transaction Info==================== */}
                <div
                  // className="flex flex-col gap-[3px] md:gap-[7px] w-[90%] mx-auto lg:gap-[8px]"
                  className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
                >
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p>Transaction Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-5 lg:h-5"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium ">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Product
                    </p>
                    <span
                      className={`capitalize ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {transaction_product}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
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
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      <span className="uppercase">{exam_type}</span> PIN
                      Generated
                    </p>
                    <span
                      className={` ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {pins_generated[0]}
                    </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
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
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
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
                // className={`rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px] ${
                //   isDarkMode ? "bg-slate-800" : "bg-[#E2F3FF]"
                // }`}
                className={`bg-[#F2FAFF] w-[90%] mx-auto p-2 my-5 flex justify-between items-center md:p-[9px] lg:p-2.5 rounded-[5px] lg:rounded-[10px]
              ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}
              >
                <p
                  // className={`text-[8px] text-center mx-auto w-[200px] md:text-sm md:w-[80%] lg:text-base font-medium ${
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
              // className="flex w-full justify-center gap-[10px] md:gap-5 px-5  mb-[5%]  "
              className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] "
            >
              <button
                onClick={() => {
                  handleShareClick();
                }}
                // className={`bg-[#04177f] w-[111px]
                // cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Share Receipt
              </button>
              <button
                onClick={() => {
                  saveAsPDFClick();
                }}
                 className={` border-[1px] w-[111px]
                   border-[#0003] flex justify-center 
                   items-center mx-auto cursor-pointer text-[12px]
                    font-extrabold h-[40px] rounded-[6px] 
                    md:w-[25%] md:rounded-[8px] md:text-base
                     lg:w-[163px] lg:h-[38px] lg:my-[2%]
                     ${isDarkMode ? "bg-black border-[0.2px] text-white border-[#04177f]" : "text-black bg-white border-[0.2px] border-black"}`}
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
      )}
    </DashBoardLayout>
  );
}
