import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from '../../../../../Context';
import { DashBoardLayout } from '../../../../Layout/DashBoardLayout';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
========
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
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a




export const SmileReceipt = () => { 

  const {
    selectedNetworkProduct,
    selectedOption,
    recipientPhoneNumber,
    recipientNames,
    selectedAmount,
    walletName,
    setSelectedNetworkProduct,
    setSelectedOption,
    setSelectedAmount,
    setRecipientNames,
    accountId,
    setAccountId,
<<<<<<< HEAD
=======
    emailId, 
    setEmailId,
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
  }
   = useContext(ContextProvider);

  const { 
    toggleSideBar,
    isDarkMode,
    date, } =
    useContext(ContextProvider);  

  const contentRef = useRef(null);
<<<<<<< HEAD

  const handleChange = () => {
    setSelectedNetworkProduct(false);
    setSelectedOption(false);
    setSelectedAmount('');
    setRecipientNames('');
    setAccountId('');
=======
  
  const handleChange = () => {
    setSelectedNetworkProduct('');
    setSelectedOption('');
    setSelectedAmount('');
    setRecipientNames('');
    setAccountId('');
    setEmailId('');
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
  }




  // ===============Copy to Clipboard Function============
//   const handleCopyClick = () => {
//     const text = textRef.current.innerText;
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         alert("Copied to clipboard");
//       })
//       .catch((err) => {
//         console.error("Error copying text: ", err);
//       });
//   };

  // ==============Share pdf Function=============
  const handleShareClick = () => {
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
          className={`  ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto border-[2px] rounded-[10px]`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
                className=" w-[30px] h-[15px] md:w-[40px] md:h-[20px] lg:w-[50px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
========
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                src={AremxyPlugIcon}
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
                className=" w-[30px] h-[15px] md:w-[40px] md:h-[20px] lg:w-[50px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                alt=""
              />
            </Link>
            <Link to="/SmileDataBundle">
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
<<<<<<< HEAD
            <h3 className="font-extrabold text-[12px] mt-[2%] text-center 
            md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
              Purchase Successful on
            </h3>
            <span className="text-[11px] md:text-[14px] lg:text-[16px] text-[#0008]  
            flex justify-center items-center font-[600]">
=======
            <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
              Purchase Successful on
            </h3>
            <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
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
<<<<<<< HEAD
            <p className="text-[10px] leading-[15px] md:leading-[20px]
           text-[#000] px-[20px] text-center my-2 md:text-[14px] 
          lg:text-[16px]  lg:leading-[24px font-[500] md:mb-7">
              You have successfully purchased{" "}
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
=======
            <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px]">
              You have successfully purchased{" "}
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[16px]">
              {selectedOption} {" "}
              </span>
              from your {walletName + " Wallet"} to{" "}
<<<<<<< HEAD
========
              <span className="font-extrabold text-[10.9px] md:text-[14.9px] lg:text-[16.9px]">
              {nabtebExamType} {" "}
              </span>
              from your {nabtebPaymentResult} to{" "}
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
            </p>
            <div className="flex flex-col  gap-7  md:gap-10">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
=======
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <p>Recipient Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Network</p>
                  <span>SMILE</span>
========
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Exam Type</p>
                  <span>NABTEB</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
                 lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Quantity</p>
                  <span>{nabtebQuantityResult}</span>
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Network</p>
                  <span>SMILE</span>
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                </div>
                {/* <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product</p>
                  <span>{selectedNetworkProduct}</span>
                </div> */}
<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
=======

>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product & Plan</p>
                  <span>{selectedOption}</span>
                </div>

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
<<<<<<< HEAD
                  <p className="text-[#0008]">Registered Email</p>
                  <span>Aremxyplug.com</span>
                </div>

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
=======
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <p className="text-[#0008]">Account ID</p>
                  <span>{accountId}</span>
                </div>

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
<<<<<<< HEAD
=======
                  <p className="text-[#0008]">Email ID</p>
                  <span>{emailId}</span>
                </div>
                
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <p className="text-[#0008]">Phone Number</p>
                  <span>{recipientPhoneNumber}</span>
                </div>

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Recipient Name</p>
                  <span>{recipientNames}</span>
                </div>
                
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Amount</p>
                  <span>{selectedAmount}</span>
<<<<<<< HEAD
========
                
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
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                </div>            
              </div>

              {/* ===================Sender Info====================== */}
<<<<<<< HEAD
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
=======
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
<<<<<<< HEAD
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Customer Name</p>
                  <span>Aremxyplug</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto \
                justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Wallet Type</p>
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
                  <span>{walletName + " Wallet"}</span>
========
                {nabtebPaymentResult}
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Customer Name</p>
                  <span>Aremxyplug</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Wallet Type</p>
                  <span>{walletName + " Wallet"}</span>
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
<<<<<<< HEAD
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto md:gap-[7px] lg:gap-[8px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-[600]">
=======
              <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
<<<<<<< HEAD
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Product</p>
                  <span>Data  Top-up</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  
                lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Description</p>
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
                  <span>SMILE {selectedNetworkProduct}</span>
========
                  <span>NABTEB E-PINS</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]"> NABTEB PIN Generated</p>
                  <span>0123456789AP</span>
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Order Number</p>
                  <span>1256464564</span>
                </div>
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Transaction ID</p>
========
                <div className="flex text-[10px] md:text-[14px] w-[90%] 
                mx-auto justify-between  lg:text-[16px] font-[500]">
                  <p className="text-[#0008]">Transactiom ID</p>
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Product</p>
                  <span>Data  Top-up</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Description</p>
                  <span>SMILE {selectedNetworkProduct}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Order Number</p>
                  <span>1256464564</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                  <p className="text-[#0008]">Transaction ID</p>
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
                  <span>0331njokdhtf55</span>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 
            flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-[#7E7E7E] text-center mx-auto w-[200px] md:text-[14px] 
              md:w-[80%] lg:text-[16px] font-[500]">
              <span className='md:block'>Earn free points on every successful transactions, 
            redeem your earned points </span>
            to real money, withdrawn to your bank account instantly.
=======
            <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
              Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
              </p>
            </div>
          </div>

<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
=======
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
          <div className="flex w-full px-[20px] mx-auto mb-[5%] md:w-[60%] ">
            <button
              onClick={() => {
                handleShareClick();
              }}
              className={`${
                toggleSideBar
                  ? "md:w-[45%]"
                  : "md:w-[35%]"
              } bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px]  md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                handleSaveAsPDFClick();
              }}
              className={`${
                toggleSideBar
                  ? "md:w-[45%]"
                  : "md:w-[35%]"
              } bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
<<<<<<< HEAD
========
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
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
        </div>


        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center lg:mb-[%]`}
        >
<<<<<<< HEAD
<<<<<<<< HEAD:src/Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt.jsx
         
         {/* ===============FOOTER=========== */}
         <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
========
          <div className="flex gap-2 justify-center items-center mb-[50px] md:mt-[200pz] mt-[100px] lg:mt-[100px]">
>>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a:src/Components/EducationPins/ReceiptEducationPins/nabtebReceipt.jsx
=======
         
         {/* ===============FOOTER=========== */}
         <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
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
